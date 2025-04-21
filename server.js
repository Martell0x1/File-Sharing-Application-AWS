import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import Logger from './middleware/Loggin.js'
import {NotFound,Invalid} from './middleware/ErrorHandler.js'

import home from './routes/home.js'
import uploadRoute from './routes/upload.js'
import listRoute from './routes/list.js'

const app = express();
const port = process.env.PORT || 80;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,'public')));

// middleware
app.use(Logger)

// routes
app.use('/',home);
app.use("/upload",uploadRoute);
app.use("/files",listRoute);

// ErrorHandler
app.use(NotFound)
app.use(Invalid)

app.listen(port,()=> console.log(`Listing on port ${port}`))