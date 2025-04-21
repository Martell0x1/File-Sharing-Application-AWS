import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const NotFound = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../public', 'error.html'));
};

export const Invalid = (err, req, res, next) => {
  if (err.status === 400) {
    return res.status(400).json({ error: 'Invalid request' }); // send JSON or plain text
  }
  next(err);
};