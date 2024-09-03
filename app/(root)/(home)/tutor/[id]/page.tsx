'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import MeetingTypeList2 from '@/components/MeetingTypeList2';

const tutorData: Record<string, { name: string; experience: number; credentials: string; university: string; rating: number; subject: string; status: string; contact: string; phone: string; linkedin: string }> = {
  '31': { name: 'Juan Dela Cruz', experience: 10, credentials: 'BS Mathematics', university: 'Ateneo de Manila University, Class of 2010', rating: 4.8, subject: 'Mathematics', status: 'Available', contact: 'juan@example.com', phone: '+63 912 345 6789', linkedin: 'https://linkedin.com/in/juan-delacruz' },
  '2': { name: 'Maria Santos', experience: 8, credentials: 'BA English Literature', university: 'University of the Philippines, Class of 2012', rating: 4.7, subject: 'English', status: 'Available', contact: 'maria@example.com', phone: '+63 912 345 6790', linkedin: 'https://linkedin.com/in/maria-santos' },
  '33': { name: 'Chin Wei', experience: 12, credentials: 'MS Physics', university: 'De La Salle University, Class of 2008', rating: 4.9, subject: 'Physics', status: 'Busy', contact: 'chinwei@example.com', phone: '+63 912 345 6791', linkedin: 'https://linkedin.com/in/chin-wei' },
  '4': { name: 'Li Ming', experience: 15, credentials: 'PhD Chemistry', university: 'University of Santo Tomas, Class of 2006', rating: 4.7, subject: 'Chemistry', status: 'Available', contact: 'liming@example.com', phone: '+63 912 345 6792', linkedin: 'https://linkedin.com/in/li-ming' },
  '5': { name: 'Josefina Tan', experience: 9, credentials: 'BS Biology', university: 'Ateneo de Manila University, Class of 2013', rating: 4.6, subject: 'Biology', status: 'Busy', contact: 'josefinatan@example.com', phone: '+63 912 345 6793', linkedin: 'https://linkedin.com/in/josefina-tan' },
  '6': { name: 'Chen Li', experience: 11, credentials: 'MS Computer Science', university: 'University of the Philippines, Class of 2011', rating: 4.8, subject: 'Computer Science', status: 'Available', contact: 'chenli@example.com', phone: '+63 912 345 6794', linkedin: 'https://linkedin.com/in/chen-li' },
  '7': { name: 'Anna Gonzales', experience: 7, credentials: 'BA History', university: 'De La Salle University, Class of 2015', rating: 4.5, subject: 'History', status: 'Available', contact: 'annagonzales@example.com', phone: '+63 912 345 6795', linkedin: 'https://linkedin.com/in/anna-gonzales' },
  '8': { name: 'Xiao Wang', experience: 14, credentials: 'MS Mathematics', university: 'Ateneo de Manila University, Class of 2008', rating: 4.9, subject: 'Mathematics', status: 'Busy', contact: 'xiaowang@example.com', phone: '+63 912 345 6796', linkedin: 'https://linkedin.com/in/xiao-wang' },
  '9': { name: 'Liza Bautista', experience: 5, credentials: 'BA English Literature', university: 'University of the Philippines, Class of 2017', rating: 4.6, subject: 'English', status: 'Available', contact: 'lizabautista@example.com', phone: '+63 912 345 6797', linkedin: 'https://linkedin.com/in/liza-bautista' },
  '10': { name: 'Lim Yao', experience: 13, credentials: 'PhD Physics', university: 'University of Santo Tomas, Class of 2009', rating: 4.8, subject: 'Physics', status: 'Busy', contact: 'limyao@example.com', phone: '+63 912 345 6798', linkedin: 'https://linkedin.com/in/lim-yao' },
  '11': { name: 'Ricardo Cruz', experience: 16, credentials: 'BS Chemistry', university: 'De La Salle University, Class of 2005', rating: 4.7, subject: 'Chemistry', status: 'Available', contact: 'ricardocruz@example.com', phone: '+63 912 345 6799', linkedin: 'https://linkedin.com/in/ricardo-cruz' },
  '12': { name: 'Catherine Lee', experience: 10, credentials: 'BS Biology', university: 'Ateneo de Manila University, Class of 2010', rating: 4.8, subject: 'Biology', status: 'Available', contact: 'catherinelee@example.com', phone: '+63 912 345 6800', linkedin: 'https://linkedin.com/in/catherine-lee' },
  '13': { name: 'Chen Feng', experience: 8, credentials: 'MS Computer Science', university: 'University of the Philippines, Class of 2012', rating: 4.7, subject: 'Computer Science', status: 'Busy', contact: 'chenfeng@example.com', phone: '+63 912 345 6801', linkedin: 'https://linkedin.com/in/chen-feng' },
  '14': { name: 'Carmen Reyes', experience: 12, credentials: 'BS Mathematics', university: 'De La Salle University, Class of 2008', rating: 4.8, subject: 'Mathematics', status: 'Available', contact: 'carmenreyes@example.com', phone: '+63 912 345 6802', linkedin: 'https://linkedin.com/in/carmen-reyes' },
  '15': { name: 'Wei Zhang', experience: 15, credentials: 'PhD Physics', university: 'University of Santo Tomas, Class of 2006', rating: 4.9, subject: 'Physics', status: 'Busy', contact: 'weizhang@example.com', phone: '+63 912 345 6803', linkedin: 'https://linkedin.com/in/wei-zhang' },
  '16': { name: 'Francisca Lim', experience: 10, credentials: 'BS Chemistry', university: 'Ateneo de Manila University, Class of 2010', rating: 4.7, subject: 'Chemistry', status: 'Available', contact: 'franciscalim@example.com', phone: '+63 912 345 6804', linkedin: 'https://linkedin.com/in/francisca-lim' },
  '17': { name: 'Jose Enriquez', experience: 8, credentials: 'BA History', university: 'University of the Philippines, Class of 2012', rating: 4.6, subject: 'History', status: 'Available', contact: 'joseenriquez@example.com', phone: '+63 912 345 6805', linkedin: 'https://linkedin.com/in/jose-enriquez' },
  '18': { name: 'Yu Chen', experience: 7, credentials: 'MS Biology', university: 'De La Salle University, Class of 2013', rating: 4.8, subject: 'Biology', status: 'Busy', contact: 'yuchen@example.com', phone: '+63 912 345 6806', linkedin: 'https://linkedin.com/in/yu-chen' },
  '19': { name: 'Miguel Tan', experience: 14, credentials: 'MS Computer Science', university: 'Ateneo de Manila University, Class of 2008', rating: 4.9, subject: 'Computer Science', status: 'Available', contact: 'migueltan@example.com', phone: '+63 912 345 6807', linkedin: 'https://linkedin.com/in/miguel-tan' },
  '20': { name: 'Li Xiu', experience: 12, credentials: 'BS Mathematics', university: 'University of Santo Tomas, Class of 2010', rating: 4.7, subject: 'Mathematics', status: 'Available', contact: 'lixiu@example.com', phone: '+63 912 345 6808', linkedin: 'https://linkedin.com/in/li-xiu' },
  '21': { name: 'Carlos Santiago', experience: 6, credentials: 'BA English Literature', university: 'University of the Philippines, Class of 2016', rating: 4.5, subject: 'English', status: 'Busy', contact: 'carlossantiago@example.com', phone: '+63 912 345 6809', linkedin: 'https://linkedin.com/in/carlos-santiago' },
  '22': { name: 'Xiao Mei', experience: 11, credentials: 'PhD Physics', university: 'De La Salle University, Class of 2009', rating: 4.8, subject: 'Physics', status: 'Available', contact: 'xiaomei@example.com', phone: '+63 912 345 6810', linkedin: 'https://linkedin.com/in/xiao-mei' },
  '23': { name: 'Luisa Cruz', experience: 13, credentials: 'MS Chemistry', university: 'Ateneo de Manila University, Class of 2007', rating: 4.7, subject: 'Chemistry', status: 'Available', contact: 'luisacruz@example.com', phone: '+63 912 345 6811', linkedin: 'https://linkedin.com/in/luisa-cruz' },
  '24': { name: 'Feng Xian', experience: 9, credentials: 'BS Biology', university: 'University of Santo Tomas, Class of 2013', rating: 4.6, subject: 'Biology', status: 'Busy', contact: 'fengxian@example.com', phone: '+63 912 345 6812', linkedin: 'https://linkedin.com/in/feng-xian' },
  '25': { name: 'Isabella Reyes', experience: 12, credentials: 'MS Computer Science', university: 'University of the Philippines, Class of 2008', rating: 4.9, subject: 'Computer Science', status: 'Available', contact: 'isabellareyes@example.com', phone: '+63 912 345 6813', linkedin: 'https://linkedin.com/in/isabella-reyes' },
  '26': { name: 'Chen Xiao', experience: 15, credentials: 'PhD Mathematics', university: 'De La Salle University, Class of 2006', rating: 4.8, subject: 'Mathematics', status: 'Busy', contact: 'chenxiao@example.com', phone: '+63 912 345 6814', linkedin: 'https://linkedin.com/in/chen-xiao' },
  '27': { name: 'Josefina Cruz', experience: 8, credentials: 'BS Chemistry', university: 'Ateneo de Manila University, Class of 2012', rating: 4.6, subject: 'Chemistry', status: 'Available', contact: 'josefinacruz@example.com', phone: '+63 912 345 6815', linkedin: 'https://linkedin.com/in/josefina-cruz' },
  '28': { name: 'Wei Hua', experience: 7, credentials: 'MS Physics', university: 'University of Santo Tomas, Class of 2015', rating: 4.8, subject: 'Physics', status: 'Busy', contact: 'weihua@example.com', phone: '+63 912 345 6816', linkedin: 'https://linkedin.com/in/wei-hua' },
  '29': { name: 'Elena Bautista', experience: 10, credentials: 'BS Biology', university: 'De La Salle University, Class of 2010', rating: 4.7, subject: 'Biology', status: 'Available', contact: 'elenabautista@example.com', phone: '+63 912 345 6817', linkedin: 'https://linkedin.com/in/elena-bautista' },
  '30': { name: 'Li Hua', experience: 7, credentials: 'MS Chemistry', university: 'University of Santo Tomas, Class of 2015', rating: 4.6, subject: 'Chemistry', status: 'Available', contact: 'lihua@example.com', phone: '+63 912 345 6818', linkedin: 'https://linkedin.com/in/li-hua' },
};


const TutorProfile = ({ params }: { params: { id: string } }) => {
  const tutor = tutorData[params.id];

  if (!tutor) {
    notFound();
  }

  const [showContact, setShowContact] = useState(false);

  return (
    <div className="container mx-auto p-6 bg-[#e0e0e0] flex justify-between items-start">
      <div className="w-2/3">
        <h1 className="text-4xl font-bold mb-6 text-[#101826]">{tutor.name}</h1>
        <p className="text-gray-700">Experience: {tutor.experience} years</p>
        <p className="text-gray-700">Credentials: {tutor.credentials}</p>
        <p className="text-gray-700">University: {tutor.university}</p>
        <p className="text-gray-700">Rating: {tutor.rating} ⭐</p>
        <p className={`text-gray-700 ${tutor.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>Status: {tutor.status}</p>

        <MeetingTypeList2 tutorId={params.id} /> {/* Use tutorId prop */}
        
        <button
          onClick={() => setShowContact(!showContact)}
          className="mt-4 inline-block bg-[#003a6c] text-white rounded-lg px-4 py-2 text-center hover:bg-[#002654] transition"
        >
          Show Contact Details
        </button>

        {showContact && (
          <div className="mt-4 text-gray-700">
            <p>Email: <a href={`mailto:${tutor.contact}`} className="text-blue-500">{tutor.contact}</a></p>
            <p>Phone: {tutor.phone}</p>
            <p>LinkedIn: <a href={tutor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">{tutor.linkedin}</a></p>
          </div>
        )}
      </div>

      <div className="w-1/3">
        <img src={`/images/tutors/${params.id}.jpg`} alt={`${tutor.name}`} className="rounded-lg shadow-lg object-cover w-full h-auto" />
      </div>
    </div>
  );
};

export default TutorProfile;
