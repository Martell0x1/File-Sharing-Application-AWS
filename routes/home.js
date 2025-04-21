import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/',(req,res)=>{
    return res.sendFile(path.join(__dirname,'../public','HomePage.html'))
});

export default router;