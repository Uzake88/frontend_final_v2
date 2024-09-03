import MeetingTypeList from '@/components/MeetingTypeList';
import Link from 'next/link';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })). format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="relative flex h-[403px] w-full items-center rounded-[20px] bg-hero bg-cover p-8 lg:p-11">
        <div className="absolute inset-0 rounded-[20px] bg-black opacity-50"></div>

        <div className="relative z-10 flex w-full items-center justify-between">
          {/* Date and Time on the Left */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>

          {/* Text and Support Button on the Right */}
          <div className="flex flex-col items-end space-y-4 rounded-lg bg-gray-900/70 p-6 text-right">
            <h2 className="text-3xl font-bold text-white lg:text-5xl">Welcome to ATutors</h2>
            <p className="max-w-md text-lg leading-relaxed text-gray-200">
              ATutors is your gateway to quality education. This is where students and educators can create and manage their own meetings.
              Whether you&apos;re a tutor looking to schedule a session with your students or a student arranging a session with your tutor, ATutors makes it easy.
            </p>
            <Link href="/pricing" className="mt-4 rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
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
