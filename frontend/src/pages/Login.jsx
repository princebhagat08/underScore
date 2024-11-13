import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('Alumni'); // New state for user type selection

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Form submission logic here
  };

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : "login"} in the alumni association portal</p>

        {state === "Sign Up" && (
          <div className='w-full'>
            <p>Full Name</p>
            <input
              className='border border-zinc-300 rounded w-full p-2 mt-1'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className='w-full'>
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* User Type Selection */}
        <div className='w-full mt-3'>
          <p>Are You a Student or an Alumni?</p>
          <div className='flex gap-4 mt-2'>
            <label className='flex items-center gap-1'>
              <input
                type="radio"
                name="userType"
                value="Alumni"
                checked={userType === 'Alumni'}
                onChange={(e) => setUserType(e.target.value)}
                className='accent-primary'
              />
              <span>Alumni</span>
            </label>
            <label className='flex items-center gap-1'>
              <input
                type="radio"
                name="userType"
                value="Student"
                checked={userType === 'Student'}
                onChange={(e) => setUserType(e.target.value)}
                className='accent-primary'
              />
              <span>Student</span>
            </label>
          </div>
        </div>

        <button className='bg-primary text-white w-full py-2 rounded-md text-base mt-4'>
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
        ) : (
          <p>New here? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Sign up now</span></p>
        )}
      </div>
    </form>
  );
};

export default Login;
