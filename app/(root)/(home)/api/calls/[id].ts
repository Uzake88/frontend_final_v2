import { NextApiRequest, NextApiResponse } from 'next';
import { getStreamClient } from '@/lib/streamClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const streamClient = getStreamClient();

  try {
    // Fetch the call from the Stream API
    const call = await streamClient.call('video', id as string).get();

    if (call) {
      res.status(200).json({ call });
    } else {
      res.status(404).json({ message: 'Call not found' });
    }
  } catch (error) {
    console.error('Error fetching call:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
