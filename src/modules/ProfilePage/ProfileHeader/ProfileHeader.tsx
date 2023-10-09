import NotificationService from '../../../services/notification.service';
import { User } from '../../../types/interfaces';

import ProfileHeaderLeftSide from './components/ProfileHeaderLeftSide';
import ProfileHeaderRightSide from './components/ProfileHeaderRightSide';

interface ProfileHeaderProps {
  profileData: User;
  ownProfile: boolean;
  className?: string;
  loggedIn: boolean;
}

export default function ProfileHeader({ profileData, className, ownProfile, loggedIn, ...props }: ProfileHeaderProps) {
  const { username, firstName, lastName } = profileData as User;

  function sendFriendRequest() {
    NotificationService.sendFriendRequest(username);
  }

  return (
    <div
      className={`flex justify-between mx-16 mt-16 p-8 bg-window rounded-2xl ${className}`}
      {...props}>
      {/** @left side */}
      <ProfileHeaderLeftSide
        firstName={firstName}
        lastName={lastName}
        username={username}
      />

      {/** @right side */}
      <ProfileHeaderRightSide
        onSendFriendRequest={sendFriendRequest}
        ownProfile={ownProfile}
        loggedIn={loggedIn}
      />
    </div>
  );
}
