import { Router } from 'express';

import {
  getDataFromHTML,
  getDataFromDB,
  getDataFromS3Bucket,
} from '../controllers/regulation.js';

const router = Router();

router.get('/parse', getDataFromHTML);
router.get('/fetch', getDataFromDB);
router.get('/download', getDataFromS3Bucket);

export default router;
