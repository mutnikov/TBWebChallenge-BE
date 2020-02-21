const AWS = require('aws-sdk');
const fs = require('fs');


function processInitializeS3() {
  return new AWS.S3({
    region: process.env.BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    httpOptions: {
      timeout: 30000,
      connectTimeout: 30000,
    },
  });
}


const s3 = processInitializeS3();


module.exports = async (file) => {
  try {
    const { name, path, type: fileType } = file;
    const fileName = Buffer.from(name, 'ascii').toString('base64');

    const stream = fs.createReadStream(path);
    stream.on('error', (err) => {
      throw err;
    });


    await s3.putObject({
      Bucket: process.env.BUCKET_NAME,
      Key: fileName,
      Body: stream,
      ACL: 'public-read',
      ContentType: fileType,
    }).promise();

    return `https://s3.${process.env.BUCKET_REGION}.amazonaws.com/${process.env.BUCKET_NAME}/${fileName}`;
  } catch (error) {
    return Promise.reject(error);
  }
};
