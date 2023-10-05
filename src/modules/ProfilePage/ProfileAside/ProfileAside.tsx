import React, { useRef, useState } from 'react';

import UserService from '../../../services/user.service';
import { ProfileData } from '../../../types/interfaces';
import EditIcon from '../../../assets/svg/EditIcon';
import DefaultIntroContent from './components/DefaultIntroContent';
import EditModeIntroContent from './components/EditModeIntroContent';

interface ProfileAsideProps {
  profileData: ProfileData;
  ownProfile: boolean;
  className?: string;
}

export default function ProfileAside({ className, profileData, ownProfile, ...props }: ProfileAsideProps) {
  const [editing, setEditing] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const dateOfBirthRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const { email, dateOfBirth, phoneNumber, address, city, country, state } = profileData as ProfileData;

  const editHandler = () => setEditing(cur => !cur);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await UserService.updateProfile(getFormData());
    window.location.reload();
  }

  function getFormData() {
    return {
      email: emailRef.current?.value || '',
      dateOfBirth: dateOfBirthRef.current?.value || '',
      phoneNumber: phoneNumberRef.current?.value || '',
      address: addressRef.current?.value || '',
      city: cityRef.current?.value || '',
      state: stateRef.current?.value || '',
      country: countryRef.current?.value || '',
    };
  }

  //prettier-ignore
  const refs = { emailRef, dateOfBirthRef, phoneNumberRef, addressRef, cityRef, stateRef, countryRef };
  const defaultValues = { email, dateOfBirth, phoneNumber, address, city, country, state };

  return (
    <div
      className={`m-16 p-8 bg-window rounded-2xl ${className}`}
      {...props}>
      <div className='flex justify-between mb-4'>
        <h1>Intro</h1>
        {!!ownProfile && (
          <EditIcon
            onClick={editHandler}
            height='24'
          />
        )}
      </div>
      <div className='text-gray-500'>
        {!editing ? (
          <DefaultIntroContent profileData={profileData} />
        ) : (
          <EditModeIntroContent
            refs={refs}
            defaultValues={defaultValues}
            submitHandler={submitHandler}
          />
        )}
      </div>
    </div>
  );
}
