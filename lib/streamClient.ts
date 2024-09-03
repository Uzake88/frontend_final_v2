import { StreamVideoClient } from '@stream-io/video-react-sdk';

let streamClient: StreamVideoClient | null = null;

export const getStreamClient = () => {
  if (!streamClient) {
    streamClient = new StreamVideoClient({
      apiKey: process.env.ynywwp3gefdk!, // Replace with your Stream API key
    });
  }
  return streamClient;
};
