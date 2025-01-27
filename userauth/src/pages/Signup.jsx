import img from '../assets/logo.png'
import { useState, useEffect } from 'react';
import Themebtn from '../components/Themebtn';

function Signup () {
    const[email, setEmail]= useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(validateEmail(value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEmailValid) {
            return; // Prevent submission if email is invalid
        }
        // Handle form submission
    };


    return(
        <>
            <div className="bg-[#0f0824] h-screen flex justify-center py-10 ">
                <div className='bg-white p-10 w-l flex flex-col gap-4 rounded-3xl'>
                    <div className='w-2xs '>
                        <img className='w-full' src={img} alt="" />
                    </div>
                    <div>
                        <span className='text-2xl font-bold subpixel-antialiased text-[#0f0824]'>Get Started</span>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            <fieldset>
                                <label htmlFor="first-name" >
                                    <p>First Name <span className='text-red-500'>*</span></p>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder='First Name' 
                                    className='border border-[#0f0824] border-solid rounded p-1 w-full  focus:outline-blue-900 hover:border-blue-900 transition-transform duration-300 ease-in-out transform hover:scale-105' 
                                />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="last-name" >
                                    <p>Last Name <span className='text-red-500'>*</span></p>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder='Last Name' 
                                    className=' border border-[#0f0824] border-solid rounded p-1 w-full focus:outline-blue-900 hover:border-blue-900 transition-transform duration-300 ease-in-out transform hover:scale-105'
                                    name='last-name'
                                    required
                                    />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="email">
                                    <p>Email <span className='text-red-500'>*</span></p>
                                </label>
                                <input 
                                    className={`border border-[#0f0824] border-solid rounded p-1 w-full  focus:outline-blue-900 hover:border-blue-900 transition-transform duration-300 ease-in-out transform hover:scale-105 ${!isEmailValid ? 'invalid:border-pink-500 invalid:text-pink-600 focus:invalid:outline-pink-500 focus:invalid:border-pink-500' : ''}`}
                                    type="email"
                                    placeholder='Enter Email' 
                                    name='email'
                                    autoComplete='email'
                                    required
                                    value={email}
                                    onChange={handleEmailChange}
                                    />
                                    {!isEmailValid && <p className='text-pink-400'>Invalid email address</p>}
                            </fieldset>
                            <fieldset>
                                <label htmlFor="password">
                                    <p>Password <span className='text-red-500'>*</span></p>
                                </label>
                                <div
                                    className='relative h-min'
                                >
                                    <input 
                                        type={showPassword ? "text" : "password"}  
                                        placeholder='Enter Password' 
                                        className=' border border-[#0f0824] border-solid rounded p-1 w-full focus:outline-blue-900 hover:border-blue-900 transition-transform duration-300 ease-in-out transform hover:scale-105'
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        name='password'
                                        autoComplete='current-password'
                                        required
                                    />
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            togglePasswordVisibility();
                                        }}
                                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${showPassword ? 'bg-[#f4b328]' : 'bg-[#0f0824]'} text-white text-[.5rem] transition-transform duration-300 ease-in-out transform px-[5px] py-[2px] rounded-lg ${isHovered ? 'scale-105' : ''} cursor-pointer`}

                                    >
                                        {showPassword ? "hide" : "show"}
                                    </button>

                                </div>
                            </fieldset>
                            <Themebtn text={'Sign Up'} type='submit' className='my-3'/>
                        </form>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Signup;