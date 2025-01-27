import img from '../assets/logo.png'
import { useState, useEffect } from 'react';
import Themebtn from '../components/Themebtn';

function Login () {
    const [showPassword, setShowPassword] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect (() => {
        document.title = 'Login'
    })

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return(
        <>
            <div className="bg-[#0f0824] h-screen grid justify-center py-10 items-center">
                <div className='bg-white p-10 w-l h-fit flex flex-col gap-4 rounded-3xl'>
                    <div className='w-2xs '>
                        <img className='w-full' src={img} alt="" />
                    </div>
                    <div>
                        <span className='text-2xl font-bold subpixel-antialiased text-blue-950'>Get Started</span>
                    </div>
                    <div>
                        <form className='flex flex-col gap-4'>
                            <fieldset>
                                <label htmlFor="email">
                                    <p>Email <span className='text-red-500'>*</span></p>
                                </label>
                                <input 
                                    className={`border border-[#0f0824] border-solid rounded p-1 w-full  focus:outline-blue-900 hover:border-blue-900 transition-transform duration-300 ease-in-out transform hover:scale-105`}
                                    type="email"
                                    placeholder='Enter Email' 
                                    name='email'
                                    autoComplete='email'
                                    required
                                />
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
                            <Themebtn text={'Login'} type='submit'/>
                        </form>
                    </div>
                </div>
                <div>
                    <p className='text-white'>Don't have an account? <a href="/signup"className='text-[#f4b328]'>Sign Up</a></p>
                </div>
            </div>  
        </>
    )
}

export default Login;