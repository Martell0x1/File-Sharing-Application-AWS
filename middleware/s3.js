import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  }
});

export const uploadToS3 = async (file) => {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file.filename,
    Body: fileStream,
    ContentType: file.mimetype
  };
  await s3.send(new PutObjectCommand(uploadParams));
};

export const listS3Files = async () => {
  const listParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
  };
  const data = await s3.send(new ListObjectsV2Command(listParams));
  return data.Contents || [];
};
