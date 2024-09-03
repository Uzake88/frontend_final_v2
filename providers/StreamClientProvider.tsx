'use client';

import { ReactNode, useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  useEffect(() => {
    if (!API_KEY) throw new Error('Stream API key is missing');

    // Create a default user for the video client
    const client = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: 'default_user_id', // Replace with an actual ID or logic if needed
        name: 'Default User', // Replace with actual user information if needed
        image: '/path/to/default-image.png', // Provide a default image URL if needed
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, []);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
