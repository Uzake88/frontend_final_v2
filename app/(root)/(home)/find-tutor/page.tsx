'use client';

import React, { useState } from 'react'; 
import Link from 'next/link';

const tutors = [
  { id: '31', name: 'Juan Dela Cruz', experience: 10, credentials: 'BS Mathematics', university: 'Ateneo de Manila University, Class of 2010', rating: 4.8, subject: 'MATH 10: MATHEMATICS IN THE MODERN WORLD', status: 'Available' },
  { id: '2', name: 'Maria Santos', experience: 8, credentials: 'BA English Literature', university: 'University of the Philippines, Class of 2012', rating: 4.7, subject: 'ENGL 11: PURPOSIVE COMMUNICATION', status: 'Available' },
  { id: '33', name: 'Chin Wei', experience: 12, credentials: 'MS Physics', university: 'De La Salle University, Class of 2008', rating: 4.9, subject: 'PHYS 10.01: INTRODUCTORY PHYSICS, LECTURE', status: 'Busy' },
  { id: '4', name: 'Li Ming', experience: 15, credentials: 'PhD Chemistry', university: 'University of Santo Tomas, Class of 2006', rating: 4.7, subject: 'CHEM 10.01: CHEMISTRY IN MODERN LIFE, LECTURE', status: 'Available' },
  { id: '5', name: 'Josefina Tan', experience: 9, credentials: 'BS Biology', university: 'Ateneo de Manila University, Class of 2013', rating: 4.6, subject: 'BIO 10.01: BIODIVERSITY: LIFE ON EARTH, LECTURE', status: 'Busy' },
  { id: '8', name: 'Xiao Wang', experience: 14, credentials: 'MS Mathematics', university: 'Ateneo de Manila University, Class of 2008', rating: 4.9, subject: 'MATH 21: UNIVERSITY PRECALCULUS', status: 'Busy' },
  { id: '9', name: 'Liza Bautista', experience: 5, credentials: 'BA English Literature', university: 'University of the Philippines, Class of 2017', rating: 4.6, subject: 'ENGL 200: ENGLISH LANGUAGE AND LITERATURE TEACHING: EFFECTIVE COMMUNICATION SKILLS', status: 'Available' },
  { id: '10', name: 'Lim Yao', experience: 13, credentials: 'PhD Physics', university: 'University of Santo Tomas, Class of 2009', rating: 4.8, subject: 'PHYS 10.02: INTRODUCTORY PHYSICS, LABORATORY', status: 'Busy' },
  { id: '11', name: 'Ricardo Cruz', experience: 16, credentials: 'BS Chemistry', university: 'De La Salle University, Class of 2005', rating: 4.7, subject: 'CHEM 10.02: CHEMISTRY IN MODERN LIFE, LABORATORY', status: 'Available' },
  { id: '12', name: 'Catherine Lee', experience: 10, credentials: 'BS Biology', university: 'Ateneo de Manila University, Class of 2010', rating: 4.8, subject: 'BIO 10.02: BIODIVERSITY: LIFE ON EARTH, LABORATORY', status: 'Available' },
  { id: '14', name: 'Carmen Reyes', experience: 12, credentials: 'BS Mathematics', university: 'De La Salle University, Class of 2008', rating: 4.8, subject: 'MATH 212.4: MODERN ALGEBRA AND TRIGONOMETRY', status: 'Available' },
  { id: '15', name: 'Wei Zhang', experience: 15, credentials: 'PhD Physics', university: 'University of Santo Tomas, Class of 2006', rating: 4.9, subject: 'PHYS 10.01: INTRODUCTORY PHYSICS, LECTURE', status: 'Busy' },
  { id: '16', name: 'Francisca Lim', experience: 10, credentials: 'BS Chemistry', university: 'Ateneo de Manila University, Class of 2010', rating: 4.7, subject: 'CHEM 10.01: CHEMISTRY IN MODERN LIFE, LECTURE', status: 'Available' },
  { id: '18', name: 'Yu Chen', experience: 7, credentials: 'MS Biology', university: 'De La Salle University, Class of 2013', rating: 4.8, subject: 'BIO 10.01: BIODIVERSITY: LIFE ON EARTH, LECTURE', status: 'Busy' },
  { id: '20', name: 'Li Xiu', experience: 12, credentials: 'BS Mathematics', university: 'University of Santo Tomas, Class of 2010', rating: 4.7, subject: 'MATH 30.13: APPLIED CALCULUS FOR BUSINESS AND ECONOMICS I', status: 'Available' },
  { id: '21', name: 'Carlos Santiago', experience: 6, credentials: 'BA English Literature', university: 'University of the Philippines, Class of 2016', rating: 4.5, subject: 'ENE 13.03i: STORY AND NARRATIVE IN THE HUMANITIES', status: 'Busy' },
  { id: '22', name: 'Xiao Mei', experience: 11, credentials: 'PhD Physics', university: 'De La Salle University, Class of 2009', rating: 4.8, subject: 'PHYS 10.02: INTRODUCTORY PHYSICS, LABORATORY', status: 'Available' },
  { id: '23', name: 'Luisa Cruz', experience: 13, credentials: 'MS Chemistry', university: 'Ateneo de Manila University, Class of 2007', rating: 4.7, subject: 'CHEM 10.02: CHEMISTRY IN MODERN LIFE, LABORATORY', status: 'Available' },
  { id: '24', name: 'Feng Xian', experience: 9, credentials: 'BS Biology', university: 'University of Santo Tomas, Class of 2013', rating: 4.6, subject: 'BIO 10.02: BIODIVERSITY: LIFE ON EARTH, LABORATORY', status: 'Busy' },
  { id: '26', name: 'Chen Xiao', experience: 15, credentials: 'PhD Mathematics', university: 'De La Salle University, Class of 2006', rating: 4.8, subject: 'MATH 30.14: APPLIED CALCULUS FOR BUSINESS AND ECONOMICS II', status: 'Busy' },
  { id: '28', name: 'Wei Hua', experience: 7, credentials: 'MS Physics', university: 'University of Santo Tomas, Class of 2015', rating: 4.8, subject: 'PHYS 10.02: INTRODUCTORY PHYSICS, LABORATORY', status: 'Busy' },
  { id: '29', name: 'Elena Bautista', experience: 10, credentials: 'BS Biology', university: 'De La Salle University, Class of 2010', rating: 4.7, subject: 'BIO 10.01: BIODIVERSITY: LIFE ON EARTH, LECTURE', status: 'Available' },
  { id: '30', name: 'Li Hua', experience: 7, credentials: 'MS Chemistry', university: 'University of Santo Tomas, Class of 2015', rating: 4.6, subject: 'CHEM 10.02: CHEMISTRY IN MODERN LIFE, LABORATORY', status: 'Available' },
];

const subjectCategories = {
  English: [
    'ENE 13.03i: STORY AND NARRATIVE IN THE HUMANITIES',
    'ENE 13.04i: STORY AND NARRATIVE IN MANAGEMENT',
    'ENGL 11: PURPOSIVE COMMUNICATION',
    'ENGL 200: ENGLISH LANGUAGE AND LITERATURE TEACHING: EFFECTIVE COMMUNICATION SKILLS',
  ],
  Mathematics: [
    'MATH 10: MATHEMATICS IN THE MODERN WORLD',
    'MATH 21: UNIVERSITY PRECALCULUS',
    'MATH 212.4: MODERN ALGEBRA AND TRIGONOMETRY',
    'MATH 30.13: APPLIED CALCULUS FOR BUSINESS AND ECONOMICS I',
    'MATH 30.14: APPLIED CALCULUS FOR BUSINESS AND ECONOMICS II',
  ],
  Science: [
    'STS 10: SCIENCE, TECHNOLOGY, AND SOCIETY',
    'CHEM 10.01: CHEMISTRY IN MODERN LIFE, LECTURE',
    'CHEM 10.02: CHEMISTRY IN MODERN LIFE, LABORATORY',
    'BIO 10.01: BIODIVERSITY: LIFE ON EARTH, LECTURE',
    'BIO 10.02: BIODIVERSITY: LIFE ON EARTH, LABORATORY',
    'PHYS 10.01: INTRODUCTORY PHYSICS, LECTURE',
    'PHYS 10.02: INTRODUCTORY PHYSICS, LABORATORY',
  ],
};


const FindTutor = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  // Filter tutors based on selected subject
  const filteredTutors = selectedSubject
    ? tutors.filter(tutor => tutor.subject === selectedSubject)
    : tutors;

  return (
    <div className="container mx-auto p-6 bg-[#101826]">
      <h1 className="text-4xl font-bold mb-8 text-white">Find a Tutor</h1>

      {/* Dropdown for selecting subjects */}
      <div className="mb-6">
        <label className="block text-white text-lg mb-2">Filter by Subject:</label>
        <select
          className="w-full p-3 bg-[#3c5783] text-white rounded-lg"
          onChange={(e) => setSelectedSubject(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Select a Subject
          </option>
          {Object.entries(subjectCategories).map(([category, subjects]) => (
            <optgroup key={category} label={category}>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTutors.map(tutor => (
          <div
            key={tutor.id}
            className="bg-[#3c5783] rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-white">{tutor.name}</h2>
            <p className="text-gray-300">Experience: {tutor.experience} years</p>
            <p className="text-gray-300">Credentials: {tutor.credentials}</p>
            <p className="text-gray-300">University: {tutor.university}</p>
            <p className="text-gray-300">Rating: {tutor.rating} ⭐</p>
            <p className="text-gray-300">Subject: {tutor.subject}</p>
            <p className={`text-gray-300 ${tutor.status === 'Available' ? 'text-green-400' : 'text-red-400'}`}>Status: {tutor.status}</p>
            <Link
              href={`/tutor/${tutor.id}`}
              className="mt-4 inline-block bg-[#003a6c] text-white rounded-lg px-4 py-2 text-center hover:bg-[#002654] transition"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutor;