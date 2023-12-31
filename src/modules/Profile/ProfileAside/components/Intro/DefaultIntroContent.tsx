import { User } from '../../../../../types/User';

import { BirthDayIcon } from '../icons/BirthDayIcon';
import { EmailIcon } from '../icons/EmailIcon';
import { PhoneIcon } from '../icons/PhoneIcon';
import { PinIcon } from '../icons/PinIcon';

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
      {!!email && <IntroItem icon={<EmailIcon />}> {email} </IntroItem>}
      {!!birthday && <IntroItem icon={<BirthDayIcon />}> {birthday} </IntroItem>}
      {!!phoneNumber && <IntroItem icon={<PhoneIcon />}> {phoneNumber} </IntroItem>}
      {!!address && <IntroItem icon={<PinIcon />}> {address} </IntroItem>}
      {!!city && <IntroItem> {city} </IntroItem>}
      {!!state && <IntroItem> {state} </IntroItem>}
      {!!country && <IntroItem> {country} </IntroItem>}
    </div>
  );
}
