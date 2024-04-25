// pages/api/file.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const filePath = path.join(process.cwd(), 'data', 'data.json');

    try {
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      const { messages } = JSON.parse(jsonData);
      res.status(200).json({ success: true, messages});
    } catch (error) {
      console.error('Error fetching file:', error);
      res.status(500).json({ success: false, message: 'Error fetching file' });
    }
  } else if (req.method === 'POST') {
    // Save file
    const currentData = req.body;
    const timestamp = new Date();
    const data = {messages: [], lastUpdated: timestamp};
    data.messages = currentData;
    const jsonData = JSON.stringify(data, null, 2);
    const filePath = path.join(process.cwd(), 'data', 'data.json');

    try {
      fs.writeFileSync(filePath, jsonData);
      res.status(200).json({ success: true, message: 'File saved successfully' });
    } catch (error) {
      console.error('Error saving file:', error);
      res.status(500).json({ success: false, message: 'Error saving file' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
