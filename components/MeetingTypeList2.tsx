'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import Loader from './Loader';
import { useToast } from './ui/use-toast';
import { Button } from './ui/button';

const MeetingTypeList2 = ({ tutorId }: { tutorId: string }) => {
  const router = useRouter();
  const [callDetail, setCallDetail] = useState<Call>();
  const client = useStreamVideoClient();
  const { user } = useUser();
  const { toast } = useToast();

  const enterMeeting = async () => {
    if (!client || !user) return;
    try {
      const id = `tutor_${tutorId}`; // Generate a unique meeting ID based on the tutor's ID
      const call = client.call('default', id);
      if (!call) throw new Error('Failed to create meeting');
      
      await call.getOrCreate({
        data: {
          custom: {
            description: `Meeting with Tutor ${tutorId}`,
          },
        },
      });

      setCallDetail(call);
      router.push(`/meeting/${call.id}`); // Redirect to the meeting room
      toast({
        title: 'Meeting Created',
      });
    } catch (error) {
      console.error(error);
      toast({ title: 'Failed to create Meeting' });
    }
  };

  if (!client || !user) return <Loader />;

  return (
    <div className="flex justify-center mt-6">
      <Button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        onClick={enterMeeting}
      >
        Enter Meeting with Tutor
      </Button>
    </div>
  );
};

export default MeetingTypeList2;
