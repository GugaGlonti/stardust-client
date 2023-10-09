import { User } from '../../../../types/interfaces';

import { BirthDayIcon } from './icons/BirthDayIcon';
import { EmailIcon } from './icons/EmailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { PinIcon } from './icons/PinIcon';

import IntroItem from './IntroItem';

interface DefaultIntroContentProps {
  profileData: User;
}

export default function DefaultIntroContent({ profileData, ...props }: DefaultIntroContentProps) {
  const { email, dateOfBirth, phoneNumber, address, city, state, country } = profileData as User;

  let birthday = '';
  try {
    birthday = new Date(dateOfBirth).toISOString().split('T')[0];
  } catch (error) {}

  return (
    <div
      className='text-gray-500'
      {...props}>
      <IntroItem icon={<EmailIcon />}> {email} </IntroItem>
      <IntroItem icon={<BirthDayIcon />}> {birthday} </IntroItem>
      <IntroItem icon={<PhoneIcon />}> {phoneNumber} </IntroItem>
      <IntroItem icon={<PinIcon />}> {address} </IntroItem>
      <IntroItem>
        {city}
        {state && `, ${state}`}
        {country && `, ${country}`}
      </IntroItem>
    </div>
  );
}
