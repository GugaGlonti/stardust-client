import React, { useRef, useState } from 'react';
import { useRouteLoaderData } from 'react-router';

import UserService, { ProfileData } from '../../../services/user.service';

import EditIcon from '../../../assets/svg/EditIcon';

import { EmailIcon } from './components/icons/EmailIcon';
import { BirthDayIcon } from './components/icons/BirthDayIcon';
import { PhoneIcon } from './components/icons/PhoneIcon';
import { PinIcon } from './components/icons/PinIcon';
import { IntroItemInputField } from './components/IntroItemInputField';

import IntroItem from './components/IntroItem';
import Button from '../../../components/Button';

interface ProfileAsideProps {
  profileData: ProfileData;
  className?: string;
}

export default function ProfileAside({ className, profileData, ...props }: ProfileAsideProps) {
  const loggedInUser = useRouteLoaderData('root') as ProfileData;

  const [editing, setEditing] = useState<boolean>(false);

  const { email, dateOfBirth, phoneNumber, address, city, country, state, username } = profileData;

  const isCurrentUser = loggedInUser?.username === username;

  let birthday = '';
  try {
    birthday = new Date(dateOfBirth).toISOString().split('T')[0];
  } catch (error) {}

  const editHandler = () => setEditing(cur => !cur);

  const emailRef = useRef<HTMLInputElement>(null);
  const dateOfBirthRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email = emailRef.current?.value || '';
    const dateOfBirth = dateOfBirthRef.current?.value || '';
    const phoneNumber = phoneNumberRef.current?.value || '';
    const address = addressRef.current?.value || '';
    const city = cityRef.current?.value || '';
    const state = stateRef.current?.value || '';
    const country = countryRef.current?.value || '';

    console.log({ email, dateOfBirth, phoneNumber, address, city, state, country });

    await UserService.updateProfile({ email, dateOfBirth, phoneNumber, address, city, state, country });

    window.location.reload();
  }

  const displayedContent = !editing ? (
    <div className='text-gray-500'>
      <IntroItem icon={<EmailIcon />}>{email}</IntroItem>
      <IntroItem icon={<BirthDayIcon />}>{birthday}</IntroItem>
      <IntroItem icon={<PhoneIcon />}>{phoneNumber}</IntroItem>
      <IntroItem icon={<PinIcon />}>{address}</IntroItem>
      <IntroItem>
        {city}
        {state && `, ${state}`}
        {country && `, ${country}`}
      </IntroItem>
    </div>
  ) : (
    <form onSubmit={submitHandler}>
      <>
        <IntroItemInputField
          label='Email'
          type='email'
          ref={emailRef}
          defaultValue={email}
        />
        <IntroItemInputField
          label='Date of Birth'
          type='date'
          ref={dateOfBirthRef}
          defaultValue={birthday}
        />
        <IntroItemInputField
          label='Phone Number'
          type='tel'
          ref={phoneNumberRef}
          defaultValue={phoneNumber}
        />
        <IntroItemInputField
          label='Address'
          ref={addressRef}
          type='text'
          defaultValue={address}
        />
        <IntroItemInputField
          label='City'
          ref={cityRef}
          type='text'
          defaultValue={city}
        />
        <IntroItemInputField
          label='State'
          ref={stateRef}
          type='text'
          defaultValue={state}
        />
        <IntroItemInputField
          label='Country'
          ref={countryRef}
          type='text'
          defaultValue={country}
        />
      </>
      <div className='w-full flex justify-center'>
        <Button
          className='w-32'
          variant='primary'
          type='submit'>
          Save
        </Button>
      </div>
    </form>
  );

  return (
    <div
      className={`m-16 p-8 bg-window rounded-2xl ${className}`}
      {...props}>
      <div className='flex justify-between mb-4'>
        <h1>Intro</h1>
        {isCurrentUser && (
          <div onClick={editHandler}>
            <EditIcon height='24' />
          </div>
        )}
      </div>
      <div className='text-gray-500'>{displayedContent}</div>
    </div>
  );
}
