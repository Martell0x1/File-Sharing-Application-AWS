import express from 'express';
import multer from 'multer';
import path from 'path'
import fs from 'fs/promises';

import { randomBytes } from 'crypto';

import { uploadToS3 } from '../middleware/s3.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const randomName = randomBytes(16).toString('hex');
    const extension = file.originalname.split('.').pop();
    cb(null, `${randomName}.${extension}`);
  }
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowedExtensions = [
    '.txt', '.md', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
    '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp',
    '.zip', '.rar', '.7z', '.tar', '.gz'
  ];

  if (allowedExtensions.includes(ext)) {
    cb(null, true); 
  } else {
    const error = new Error("Invalid file type");
    error.status = 400;
    cb(error);
  }
};

const upload = multer({ storage, fileFilter });


router.post('/', upload.array('files', 10), async (req, res,next) => {
  try {
    if(!req.files || req.files.length === 0){
      const error = new Error("Missing File(s)");
      error.status = 400;
      next(error);
    }
    const fileUploadPromises = req.files.map(async (file) => {
      await uploadToS3(file);
      await fs.unlink(file.path);
      return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${file.filename}`;
    });

    const fileUrls = await Promise.all(fileUploadPromises);

    const responseHtml = fileUrls.map(url => `<li><a href="${url}" target="_blank">${url}</a></li>`).join('');
    res.send(`<h3>Files uploaded successfully:</h3><ul>${responseHtml}</ul>`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error uploading files.');
  }
});

export default router;
