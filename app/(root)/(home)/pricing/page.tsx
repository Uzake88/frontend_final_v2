"use client";
import React, { useState, ChangeEvent, MouseEvent } from 'react';

const Pricing = () => {
    const [donationAmount, setDonationAmount] = useState<number>(0);

    const handleDonationChange = (amount: number) => {
        setDonationAmount(amount);
    };

    const handleCustomAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDonationAmount(Number(e.target.value));
    };

    const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        console.log(`Processing a donation of ₱${donationAmount}.`);
        alert(`Thank you for your donation of ₱${donationAmount}!`);
    };

    return (
        <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-700 leading-tight">
                Support ATutors
            </h1>
            <p className="text-xl text-gray-800 mb-8 text-center leading-relaxed tracking-wide">
                ATutors is currently a free-to-use platform, powered by the passion and dedication of our volunteer tutors.
                To help us continue providing quality education, we graciously accept any form of donations. Your support 
                helps us maintain and improve our services for students across the Philippines.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {[50, 100, 200, 500, 1000].map(amount => (
                        <button 
                            key={amount}
                            type="button"
                            onClick={() => handleDonationChange(amount)}
                            className={`px-6 py-3 rounded-lg font-semibold ${
                                donationAmount === amount ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                            } hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
                        >
                            ₱{amount}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col items-center mb-6">
                    <label className="mb-2 text-lg font-medium text-gray-700">Or enter a custom amount:</label>
                    <input 
                        type="number" 
                        name="customAmount" 
                        value={donationAmount > 0 && ![50, 100, 200, 500, 1000].includes(donationAmount) ? donationAmount : ''} 
                        onChange={handleCustomAmountChange} 
                        placeholder="Enter amount in ₱"
                        className="p-3 border rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="flex justify-center">
                    <button 
                        type="submit" 
                        className="px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Donate Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Pricing;
