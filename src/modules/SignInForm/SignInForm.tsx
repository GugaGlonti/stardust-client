import { useState } from 'react';
import { useNavigate } from 'react-router';

import AuthService from '../../services/auth.service';

import { User } from '../../types/user.interface';

import Button from '../../components/Button';

export interface SignInFormData {
  identifier: string;
  password: string;
}

export default function SignInForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<SignInFormData>({ identifier: '', password: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = (await AuthService.singIn(formData)) as User;

    if (user) return navigate('/');
    return navigate('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className='flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
        <div className='w-full max-w-sm space-y-10 bg-red'>
          <div className='bg-blue-100 rounded p-16 mt-8 border-2 border-blue-200'>
            <form
              className='space-y-6'
              onSubmit={handleSubmit}>
              <div className='relative -space-y-px rounded-md shadow-sm'>
                <div className='pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300' />
                <div>
                  <label
                    htmlFor='identifier'
                    className='sr-only'>
                    Email address
                  </label>
                  <input
                    value={formData.identifier}
                    onChange={handleChange}
                    id='identifier'
                    name='identifier'
                    autoComplete='email'
                    required
                    className='relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6'
                    placeholder='Email address'
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='sr-only'>
                    Password
                  </label>
                  <input
                    value={formData.password}
                    onChange={handleChange}
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6'
                    placeholder='Password'
                  />
                </div>
              </div>

              {
                // turn to true, to show the remember me checkbox and forgot password
                !!false && (
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-blue-400 focus:ring-blue-400'
                      />
                      <label
                        htmlFor='remember-me'
                        className='ml-3 block text-sm leading-6 text-gray-900'>
                        Remember me
                      </label>
                    </div>

                    <div className='text-sm leading-6'>
                      <a
                        href='_'
                        className='font-semibold text-blue-400 hover:text-blue-400'>
                        Forgot password?
                      </a>
                    </div>
                  </div>
                )
              }

              <Button
                type='submit'
                variant='primary'
                className='w-full m-0'>
                Sign in
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
