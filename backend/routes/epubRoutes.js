import express from 'express';
import { parseEpub } from '../controllers/epubController.js';

const router = express.Router();

router.post('/', parseEpub);

export default router;
