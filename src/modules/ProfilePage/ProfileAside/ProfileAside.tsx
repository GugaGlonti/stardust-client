import React, { useContext, useRef, useState } from 'react';

import UserService from '../../../services/user.service';
import { ProfileData } from '../../../types/interfaces';

import EditIcon from '../../../assets/svg/EditIcon';

import { EmailIcon } from './components/icons/EmailIcon';
import { BirthDayIcon } from './components/icons/BirthDayIcon';
import { PhoneIcon } from './components/icons/PhoneIcon';
import { PinIcon } from './components/icons/PinIcon';
import { IntroItemInputField } from './components/IntroItemInputField';

import IntroItem from './components/IntroItem';
import Button from '../../../components/Button';
import { authContext } from '../../../store/auth.provider';

interface ProfileAsideProps {
  profileData: ProfileData;
  className?: string;
}

export default function ProfileAside({ className, profileData, ...props }: ProfileAsideProps) {
  const context = useContext(authContext);

  const [editing, setEditing] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const dateOfBirthRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const { email, dateOfBirth, phoneNumber, address, city, country, state, username } = profileData as ProfileData;

  const isCurrentUser = context.user?.username === username;

  let birthday = '';
  try {
    birthday = new Date(dateOfBirth).toISOString().split('T')[0];
  } catch (error) {}

  const editHandler = () => setEditing(cur => !cur);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email = emailRef.current?.value || '';
    const dateOfBirth = dateOfBirthRef.current?.value || '';
    const phoneNumber = phoneNumberRef.current?.value || '';
    const address = addressRef.current?.value || '';
    const city = cityRef.current?.value || '';
    const state = stateRef.current?.value || '';
    const country = countryRef.current?.value || '';

    await UserService.updateProfile({ email, dateOfBirth, phoneNumber, address, city, state, country });

    window.location.reload();
  }

  //prettier-ignore
  const defaultContent = (
    <div className='text-gray-500'>
      <IntroItem icon={<EmailIcon />}>{email}</IntroItem>
      <IntroItem icon={<BirthDayIcon />}>{birthday}</IntroItem>
      <IntroItem icon={<PhoneIcon />}>{phoneNumber}</IntroItem>
      <IntroItem icon={<PinIcon />}>{address}</IntroItem>
      <IntroItem>{city}{state && `, ${state}`}{country && `, ${country}`}</IntroItem>
    </div>
  );

  //prettier-ignore
  const editModeContent = (
    <form onSubmit={submitHandler}>
      <>
        <IntroItemInputField label='Email'          type='email'  ref={emailRef}        defaultValue={email} />
        <IntroItemInputField label='Date of Birth'  type='date'   ref={dateOfBirthRef}  defaultValue={birthday} />
        <IntroItemInputField label='Phone Number'   type='tel'    ref={phoneNumberRef}  defaultValue={phoneNumber} />
        <IntroItemInputField label='Address'        type='text'   ref={addressRef}      defaultValue={address} />
        <IntroItemInputField label='City'           type='text'   ref={cityRef}         defaultValue={city} />
        <IntroItemInputField label='State'          type='text'   ref={stateRef}        defaultValue={state} />
        <IntroItemInputField label='Country'        type='text'   ref={countryRef}      defaultValue={country} />
      </>
      <div className='w-full flex justify-center'>
        <Button className='w-32' variant='primary' type='submit'> Save </Button>
      </div>
    </form>
  );

  //prettier-ignore
  return (
    <div
      className={`m-16 p-8 bg-window rounded-2xl ${className}`}
      {...props}>
      <div className='flex justify-between mb-4'>
        <h1>Intro</h1>
        {!!isCurrentUser && ( <div onClick={editHandler}> <EditIcon height='24' /> </div> )}
      </div>
      <div className='text-gray-500'>{!editing ? defaultContent : editModeContent}</div>
    </div>
  );
}
