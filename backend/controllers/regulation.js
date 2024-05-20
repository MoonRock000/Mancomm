import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

import { getData } from '../util/extractData.js';
import { getDataFromS3, uploadDataToS3 } from '../cloud/s3.js';
import { getDataFromDb, createDataInDb } from '../db/index.js';

const fileName = process.env.FILENAME;

export const getDataFromHTML = async (req, res) => {
  try {
    // Retrieve HTML from API
    const response = await axios.get(process.env.API_FOR_HTML);
    const html = response.data;

    const jsonData = getData(html);
    const dbResponse = await createDataInDb(jsonData);

    if (dbResponse) {
      const S3Response = await uploadDataToS3(jsonData);
    }

    res.status(201).json(jsonData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDataFromS3Bucket = async (req, res) => {
  try {
    const data = await getDataFromS3();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDataFromDB = async (req, res) => {
  try {
    const data = await getDataFromDb();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
