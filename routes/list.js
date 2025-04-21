import express from 'express';
import { listS3Files } from '../middleware/s3.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const files = await listS3Files();
    const fileLinks = files.map(f => {
      const url = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${f.Key}`;
      return `<li><a href="${url}" target="_blank">${f.Key}</a></li>`;
    }).join('');
    res.status(200).send(`<ul>${fileLinks}</ul>`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to list files.');
  }
});

export default router;
