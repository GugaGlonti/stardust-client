import { User } from '../../../types/User';

import Friends from './components/Friends/Friends';
import Intro from './components/Intro/Intro';

interface ProfileAsideProps {
  profileData: User;
  ownProfile: boolean;
  className?: string;
}

export default function ProfileAside({ className, profileData, ownProfile, ...props }: ProfileAsideProps) {
  return (
    <div
      className={`m-16 p-8 bg-window rounded-2xl ${className}`}
      {...props}>
      <Intro
        profileData={profileData}
        ownProfile={ownProfile}
      />
      <Friends profileData={profileData} />
    </div>
  );
}
