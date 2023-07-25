
import Navbar from './../Component/Navbar';
import React, { useState } from 'react';


const Expense = () => {

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle expense transaction submission
        console.log('Expense submitted:', { amount, description });
    };


    return (
        <div>
            <Navbar/>
            <h1 className='font-bold shadow mb-5'>Expense</h1>
            <form onSubmit={handleSubmit} className='grid gap-5'>
                <h2>Enter Expense</h2>
                <div>
                    <label>Amount:</label>
                    <input type="number" value={amount} onChange={handleAmountChange} className='border-2 shadow'/>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" value={description} onChange={handleDescriptionChange} className='border-2 shadow'/>
                </div>
                <button type="submit" className='bg-red-500 px-3 py-2 rounded text-white w-fit mx-auto'>Add Expense</button>
            </form>
        </div>
    );
};

export default Expense;