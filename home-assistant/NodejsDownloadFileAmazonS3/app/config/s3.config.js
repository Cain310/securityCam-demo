const AWS = require("aws-sdk");
const env = require("./.env");

const s3Client = new AWS.S3({
  accessKeyId: env.AWS_ACCESS_KEY,
  secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  region: env.REGION
});

const downloadParams = {
  Bucket: env.Bucket,
  Key: " "
};

const s3 = {};
s3.s3Client = s3Client;
s3.downloadParams = downloadParams;

module.exports = s3;
