import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import DocumentModel from '../models/regulation.js';

const dbConnectionString = process.env.DATABASE_CONNECTION_STRING;

export const connectDb = async () => {
  try {
    await mongoose.connect(dbConnectionString);
    console.log('Successfully connected to Database!');
  } catch (error) {
    console.error('Failed to connect to Database:', error);
    process.exit(1);
  }
};

export const createDataInDb = async (data) => {
  try {
    const document = new DocumentModel(data);
    const response = await document.save();
    return response;
  } catch (error) {
    console.error('Error saving document to Database:', error);
    return error;
  }
};

export const getDataFromDb = async () => {
  try {
    const document = await DocumentModel.findOne();
    return document;
  } catch (error) {
    console.error('Error fetching documents from Database:', error);
    return error;
  }
};
