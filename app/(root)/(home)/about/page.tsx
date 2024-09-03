"use client";
import React from 'react';

const About = () => {
    return (
        <div className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-700 leading-tight tracking-tight">
                About ATutors
            </h1>
            <p className="text-xl text-gray-800 mb-8 text-center leading-relaxed tracking-wide">
                ATutors is a pioneering startup committed to redefining the standards of quality education at the undergraduate level. 
                We strive to equip Arenean students, undergraduates, and high school students with the essential knowledge and skills 
                needed to succeed. At ATutors, our mission is to be your gateway to success, providing you with unparalleled learning 
                experiences guided by the best educators and professionals across the Philippines.
            </p>

            <div className="flex flex-col items-center mb-12">
                <img 
                    src={`/images/student.jpg`} 
                    alt="student" 
                    className="rounded-lg shadow-2xl mb-8 w-full h-96 object-cover transition-transform transform hover:scale-105"
                />
                <p className="text-lg text-gray-700 max-w-3xl text-center leading-relaxed tracking-wide">
                    At ATutors, our network of dedicated tutors is passionate about teaching and committed to your academic success. 
                    Hailing from the top universities in the Philippines, our tutors ensure that you receive a world-class education. 
                    Whether you’re aiming to boost your grades, prepare for crucial exams, or expand your knowledge, ATutors is here 
                    to help you reach your academic goals with confidence.
                </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-12 shadow-md">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                    Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission at ATutors is to empower every student with access to top-tier education. We believe that learning 
                    should be accessible, affordable, and of the highest quality, regardless of a student’s background. With ATutors, 
                    every student has the opportunity to learn from the best and unlock their full potential.
                </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-12 shadow-md">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                    Contact Information
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    <strong className="font-semibold">Email:</strong> contact@atutors.com
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    <strong className="font-semibold">Phone:</strong> +63 968 753 2477
                </p>
                <p className="text-lg text-gray-700">
                    <strong className="font-semibold">Address:</strong> 572 ATutors St., Quezon City, Philippines
                </p>
            </div>

            <div className="flex flex-col items-center">
                <img 
                    src={`/images/student1.jpg`}  
                    alt="student1" 
                    className="rounded-lg shadow-2xl mb-8 w-full h-96 object-cover transition-transform transform hover:scale-105"
                />
                <p className="text-lg text-gray-700 max-w-3xl text-center leading-relaxed tracking-wide">
                    Join us in our mission to reshape education in the Philippines. Together, we can create a future where every student 
                    has access to the education they deserve. Whether you’re a learner seeking support or a professional ready to make 
                    an impact, ATutors is your platform for growth and success.
                </p>
            </div>
        </div>
    );
}

export default About;
