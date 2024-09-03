"use client";
import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div className="mx-auto mt-12 max-w-5xl rounded-lg bg-white p-8 shadow-lg">
            <h1 className="mb-8 text-center text-5xl font-extrabold leading-tight tracking-tight text-blue-700">
                About ATutors
            </h1>
            <p className="mb-8 text-center text-xl leading-relaxed tracking-wide text-gray-800">
                ATutors is a pioneering startup committed to redefining the standards of quality education at the undergraduate level. 
                We strive to equip Arenean students, undergraduates, and high school students with the essential knowledge and skills 
                needed to succeed. At ATutors, our mission is to be your gateway to success, providing you with unparalleled learning 
                experiences guided by the best educators and professionals across the Philippines.
            </p>

            <div className="mb-12 flex flex-col items-center">
                <div className="relative mb-8 h-96 w-full overflow-hidden rounded-lg shadow-2xl">
                    <Image 
                        src="/images/student.jpg" 
                        alt="student" 
                        layout="fill" 
                        objectFit="cover" 
                        className="transition-transform hover:scale-105"
                    />
                </div>
                <p className="max-w-3xl text-center text-lg leading-relaxed tracking-wide text-gray-700">
                    At ATutors, our network of dedicated tutors is passionate about teaching and committed to your academic success. 
                    Hailing from the top universities in the Philippines, our tutors ensure that you receive a world-class education. 
                    Whether you’re aiming to boost your grades, prepare for crucial exams, or expand your knowledge, ATutors is here 
                    to help you reach your academic goals with confidence.
                </p>
            </div>

            <div className="mb-12 rounded-lg bg-blue-50 p-8 shadow-md">
                <h2 className="mb-6 text-3xl font-bold text-blue-600">
                    Our Mission
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    Our mission at ATutors is to empower every student with access to top-tier education. We believe that learning 
                    should be accessible, affordable, and of the highest quality, regardless of a student’s background. With ATutors, 
                    every student has the opportunity to learn from the best and unlock their full potential.
                </p>
            </div>

            <div className="mb-12 rounded-lg bg-blue-50 p-8 shadow-md">
                <h2 className="mb-6 text-3xl font-bold text-blue-600">
                    Contact Information
                </h2>
                <p className="mb-4 text-lg text-gray-700">
                    <strong className="font-semibold">Email:</strong> contact@atutors.com
                </p>
                <p className="mb-4 text-lg text-gray-700">
                    <strong className="font-semibold">Phone:</strong> +63 968 753 2477
                </p>
                <p className="text-lg text-gray-700">
                    <strong className="font-semibold">Address:</strong> 572 ATutors St., Quezon City, Philippines
                </p>
            </div>

            <div className="flex flex-col items-center">
                <div className="relative mb-8 h-96 w-full overflow-hidden rounded-lg shadow-2xl">
                    <Image 
                        src="/images/student1.jpg"  
                        alt="student1" 
                        layout="fill" 
                        objectFit="cover" 
                        className="transition-transform hover:scale-105"
                    />
                </div>
                <p className="max-w-3xl text-center text-lg leading-relaxed tracking-wide text-gray-700">
                    Join us in our mission to reshape education in the Philippines. Together, we can create a future where every student 
                    has access to the education they deserve. Whether you’re a learner seeking support or a professional ready to make 
                    an impact, ATutors is your platform for growth and success.
                </p>
            </div>
        </div>
    );
}

export default About;
