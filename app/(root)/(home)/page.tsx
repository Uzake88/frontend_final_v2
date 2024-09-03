import MeetingTypeList from '@/components/MeetingTypeList';
import Link from 'next/link';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })). format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[403px] w-full rounded-[20px] bg-hero bg-cover p-8 lg:p-11 relative flex items-center">
        <div className="absolute inset-0 bg-black opacity-50 rounded-[20px]"></div>

        <div className="relative z-10 flex justify-between w-full items-center">
          {/* Date and Time on the Left */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>

          {/* Text and Support Button on the Right */}
          <div className="flex flex-col items-end text-right space-y-4 bg-opacity-70 bg-gray-900 p-6 rounded-lg">
            <h2 className="text-3xl font-bold lg:text-5xl text-white">Welcome to ATutors</h2>
            <p className="text-lg text-gray-200 max-w-md leading-relaxed">
              ATutors is your gateway to quality education. This is where students  and educators can create and manage their own meetings.
              Whether you're a tutor looking to schedule a session with your students or a student arranging a session with your tutor, ATutors makes it easy.
            </p>
            <Link href="/pricing" className="mt-4 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Support Us with a Donation
            </Link>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
