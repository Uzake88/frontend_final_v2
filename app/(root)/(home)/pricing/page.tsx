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
        <div className="mx-auto mt-12 max-w-4xl rounded-lg bg-white p-8 shadow-lg">
            <h1 className="mb-8 text-center text-5xl font-extrabold leading-tight text-blue-700">
                Support ATutors
            </h1>
            <p className="mb-8 text-center text-xl leading-relaxed tracking-wide text-gray-800">
                ATutors is currently a free-to-use platform, powered by the passion and dedication of our volunteer tutors.
                To help us continue providing quality education, we graciously accept any form of donations. Your support 
                helps us maintain and improve our services for students across the Philippines.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-6 flex flex-wrap justify-center gap-4">
                    {[50, 100, 200, 500, 1000].map(amount => (
                        <button 
                            key={amount}
                            type="button"
                            onClick={() => handleDonationChange(amount)}
                            className={`rounded-lg px-6 py-3 font-semibold ${
                                donationAmount === amount ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                            } hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
                        >
                            ₱{amount}
                        </button>
                    ))}
                </div>

                <div className="mb-6 flex flex-col items-center">
                    <label className="mb-2 text-lg font-medium text-gray-700">Or enter a custom amount:</label>
                    <input 
                        type="number" 
                        name="customAmount" 
                        value={donationAmount > 0 && ![50, 100, 200, 500, 1000].includes(donationAmount) ? donationAmount : ''} 
                        onChange={handleCustomAmountChange} 
                        placeholder="Enter amount in ₱"
                        className="w-48 rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="flex justify-center">
                    <button 
                        type="submit" 
                        className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Donate Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Pricing;
