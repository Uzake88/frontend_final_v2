"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { jsPDF } from 'jspdf';

const BecomeTutor = () => {
    const [formData, setFormData] = useState({
        name: '',
        experience: '',
        credentials: '',
        university: '',
        subject: '',
        contact: '',
        phone: '',
        linkedin: '',
        coverLetter: null,
        resume: null,
        fitReason: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        const file = e.target.files ? e.target.files[0] : null;
        setFormData((prevData) => ({
            ...prevData,
            [name]: file,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const doc = new jsPDF();
        doc.text('Tutor Application', 10, 10);
        doc.text(`Name: ${formData.name}`, 10, 20);
        doc.text(`Experience: ${formData.experience} years`, 10, 30);
        doc.text(`Credentials: ${formData.credentials}`, 10, 40);
        doc.text(`University: ${formData.university}`, 10, 50);
        doc.text(`Subject: ${formData.subject}`, 10, 60);
        doc.text(`Contact: ${formData.contact}`, 10, 70);
        doc.text(`Phone: ${formData.phone}`, 10, 80);
        doc.text(`LinkedIn: ${formData.linkedin}`, 10, 90);
        doc.text('What makes you a good fit as a tutor?', 10, 100);
        doc.text(formData.fitReason, 10, 110, { maxWidth: 180 });

        // Add logic to handle file uploads separately if needed

        doc.save('tutor-application.pdf');
        alert('Your application has been submitted successfully!');
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Become a Tutor</h1>
            <p className="text-lg mb-6 text-center">Fill out the application to start tutoring students, the ATutors way.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="mb-2 font-medium">Full Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required 
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-medium">Experience (in years)</label>
                    <input 
                        type="number" 
                        name="experience" 
                        value={formData.experience} 
                        onChange={handleChange} 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required 
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-medium">Credentials</label>
                    <input 
                        type="text" 
                        name="credentials" 
                        value={formData.credentials} 
                        onChange={handleChange} 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required 
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-medium">University</label>
                    <input 
                        type="text" 
                        name="university" 
                        value={formData.university} 
                        onChange={handleChange} 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required 
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-medium">Subject</label>
                    <input 
                        type="text" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required 
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-medium">Contact Email</label>
                    <input 
                        type="email" 
                        name="contact" 
                        value={formData.contact} 
                        onChange={handleChange} 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required 
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-medium">Phone Number</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required 
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-medium">LinkedIn Profile</label>
                    <input 
                        type="url" 
                        name="linkedin" 
                        value={formData.linkedin} 
                        onChange={handleChange} 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required 
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-medium">Upload Cover Letter (PDF)</label>
                    <input 
                        type="file" 
                        name="coverLetter" 
                        accept=".pdf" 
                        onChange={handleFileChange} 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required 
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-medium">Upload Resume (PDF)</label>
                    <input 
                        type="file" 
                        name="resume" 
                        accept=".pdf" 
                        onChange={handleFileChange} 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required 
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-medium">What makes you a good fit as a tutor?</label>
                    <textarea 
                        name="fitReason" 
                        value={formData.fitReason} 
                        onChange={handleChange} 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={4} 
                        required 
                    />
                </div>

                <div className="flex justify-center">
                    <button 
                        type="submit" 
                        className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BecomeTutor;
