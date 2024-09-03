'use client';

import { useRouter } from 'next/navigation';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import Loader from './Loader';
import { useToast } from './ui/use-toast';
import { Button } from './ui/button';

const MeetingTypeList2 = ({ tutorId }: { tutorId: string }) => {
  const router = useRouter();
  const client = useStreamVideoClient();
  const { user } = useUser();
  const { toast } = useToast();

  const enterMeeting = async () => {
    if (!client || !user) return;
    try {
      const id = `tutor_${tutorId}`; 
      const call = client.call('default', id);
      if (!call) throw new Error('Failed to create meeting');
      
      await call.getOrCreate({
        data: {
          custom: {
            description: `Meeting with Tutor ${tutorId}`,
          },
        },
      });

      router.push(`/meeting/${call.id}`); 
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
    <div className="mt-6 flex justify-center">
      <Button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-600"
        onClick={enterMeeting}
      >
        Enter Meeting with Tutor
      </Button>
    </div>
  );
};

export default MeetingTypeList2;
