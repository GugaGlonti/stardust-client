import { useRef, useState } from 'react';

import { User } from '../../../../../types/User';
import UserService from '../../../../../services/user.service';
import EditIcon from '../../../../../assets/svg/EditIcon';
import DefaultIntroContent from './DefaultIntroContent';
import EditModeIntroContent from './EditModeIntroContent';

interface IntroProps {
  profileData: User;
  ownProfile: boolean;
  className?: string;
}

export default function Intro({ profileData, ownProfile, className, ...props }: IntroProps) {
  const [editing, setEditing] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const dateOfBirthRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const { email, dateOfBirth, phoneNumber, address, city, country, state } = profileData as User;

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
      className={className}
      {...props}>
      <div className={'flex justify-between mb-4'}>
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
