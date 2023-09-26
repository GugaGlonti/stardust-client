import { useRef, useState } from 'react';

import { ProfileData } from '../../../services/user.service';

import EditIcon from '../../../assets/svg/EditIcon';

import { EmailIcon } from './components/icons/EmailIcon';
import { BirthDayIcon } from './components/icons/BirthDayIcon';
import { PhoneIcon } from './components/icons/PhoneIcon';
import { PinIcon } from './components/icons/PinIcon';
import { IntroInputField } from './components/IntroInputField';

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

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    console.log(emailRef);

    const email = emailRef.current?.value;
    const dateOfBirth = dateOfBirthRef.current?.value;
    const phoneNumber = phoneNumberRef.current?.value;
    const address = addressRef.current?.value;
    const city = cityRef.current?.value;
    const state = stateRef.current?.value;
    const country = countryRef.current?.value;

    console.log({
      email,
      dateOfBirth,
      phoneNumber,
      address,
      city,
      state,
      country,
    });

    e.preventDefault();
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
      <IntroInputField
        label='Email'
        ref={emailRef}>
        {email}
      </IntroInputField>
      <IntroInputField
        label='Date Of Birth'
        ref={dateOfBirthRef}>
        {dateOfBirth}
      </IntroInputField>
      <IntroInputField
        label='PhoneNumber'
        ref={phoneNumberRef}>
        {phoneNumber}
      </IntroInputField>
      <IntroInputField
        label='Address'
        ref={addressRef}>
        {address}
      </IntroInputField>
      <IntroInputField
        label='City'
        ref={cityRef}>
        {city}
      </IntroInputField>
      <IntroInputField
        label='State'
        ref={stateRef}>
        {state}
      </IntroInputField>
      <IntroInputField
        label='Country'
        ref={countryRef}>
        {country}
      </IntroInputField>
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
