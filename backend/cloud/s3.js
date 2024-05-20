import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const Bucket = process.env.AWS_S3_BUCKET_NAME;
const fileName = process.env.FILENAME;

const s3 = new AWS.S3();

export const uploadDataToS3 = async (data) => {
  const params = {
    Bucket,
    Key: fileName,
    Body: JSON.stringify(data),
    ContentType: 'application/json',
  };

  try {
    const stored = await s3.upload(params).promise();
    console.log('File uploaded successfully at', stored.Location);
  } catch (error) {
    console.log('Error uploading data: ', error);
  }
};

export const getDataFromS3 = async () => {
  const params = {
    Bucket,
    Key: fileName,
  };

  try {
    const data = await s3.getObject(params).promise();
    const jsonData = JSON.parse(data.Body.toString('utf-8'));
    return jsonData;
  } catch (error) {
    console.log('Error Fetching data: ', error);
  }
};
