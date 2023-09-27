import React, { useRef, useState } from 'react';

import UserService, { ProfileData } from '../../../services/user.service';

import EditIcon from '../../../assets/svg/EditIcon';

import { EmailIcon } from './components/icons/EmailIcon';
import { BirthDayIcon } from './components/icons/BirthDayIcon';
import { PhoneIcon } from './components/icons/PhoneIcon';
import { PinIcon } from './components/icons/PinIcon';

import IntroItem from './components/IntroItem';

import Button from '../../../components/Button';

interface ProfileAsideProps {
  profileData: ProfileData;
  className?: string;
}

export default function ProfileAside({ className, profileData, ...props }: ProfileAsideProps) {
  const [editing, setEditing] = useState<boolean>(false);

  function editHandler() {
    setEditing(cur => !cur);
  }

  const { email, dateOfBirth, phoneNumber, address, city, country, state } = profileData;

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
  }

  const displayedContent = !editing ? (
    <div className='text-gray-500'>
      <IntroItem icon={<EmailIcon />}>{email}</IntroItem>
      <IntroItem icon={<BirthDayIcon />}>{dateOfBirth}</IntroItem>
      <IntroItem icon={<PhoneIcon />}>{phoneNumber}</IntroItem>
      <IntroItem icon={<PinIcon />}>{address}</IntroItem>
      <IntroItem>{city}</IntroItem>
      <IntroItem>{state}</IntroItem>
      <IntroItem>{country}</IntroItem>
    </div>
  ) : (
    <form onSubmit={submitHandler}>
      <>
        <IntroItemInputField
          label='email'
          type='email'
          ref={emailRef}
          defaultValue={email}
        />
        <IntroItemInputField
          label='date of birth'
          type='date'
          ref={dateOfBirthRef}
          defaultValue={dateOfBirth}
        />
        <IntroItemInputField
          label='phone number'
          type='tel'
          ref={phoneNumberRef}
          defaultValue={phoneNumber}
        />
        <IntroItemInputField
          label='address'
          ref={addressRef}
          type='text'
          defaultValue={address}
        />
        <IntroItemInputField
          label='city'
          ref={cityRef}
          type='text'
          defaultValue={city}
        />
        <IntroItemInputField
          label='state'
          ref={stateRef}
          type='text'
          defaultValue={state}
        />
        <IntroItemInputField
          label='country'
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
    <div className={`m-16 p-8 bg-window rounded-2xl ${className}`}>
      <div className='flex justify-between mb-4'>
        <h1>Intro</h1>
        <div onClick={editHandler}>
          <EditIcon height='24' />
        </div>
      </div>
      <div className='text-gray-500'>{displayedContent}</div>
    </div>
  );
}

interface IntroItemInputFieldProps {
  label: string;
  type?: 'text' | 'password' | 'email' | 'date' | 'tel';
  placeholder?: string;
  defaultValue?: string;
}

type Ref = HTMLButtonElement | HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

// const IntroItemInputField = React.forwardRef(({ label, type = 'text', placeholder = '', defaultValue = '', ...props }: IntroItemInputFieldProps) => {

const IntroItemInputField = React.forwardRef<Ref, IntroItemInputFieldProps>((props, ref: any) => {
  const { label, type = 'text', placeholder = '', defaultValue = '' } = props;

  return (
    <div
      {...props}
      className='p-2'>
      <label htmlFor={label}>{label}</label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='w-full border-0 p-0 text-gray-900 placeholder-text-gray-400'
      />
    </div>
  );
});
