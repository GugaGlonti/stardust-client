import ColorBar from '../../../components/UTIL/ColorBar';
import NotificationService from '../../../services/notification.service';
import { User } from '../../../types/interfaces';

import ProfileHeaderLeftSide from './components/ProfileHeaderLeftSide';
import ProfileHeaderRightSide from './components/ProfileHeaderRightSide';

interface ProfileHeaderProps {
  profileData: User;
  ownProfile: boolean;
  className?: string;
  loggedIn: boolean;
  isFriend?: boolean;
}

export default function ProfileHeader({ profileData, className, ownProfile, isFriend, loggedIn, ...props }: ProfileHeaderProps) {
  const { username, firstName, lastName } = profileData as User;

  function sendFriendRequest() {
    NotificationService.sendFriendRequest(username);
  }

  // SENT YOU A FRIEND REQUEST
  // REMOVE BUTTON

  return (
    <div
      className={`flex justify-between mx-16 mt-16 p-8 bg-window rounded-2xl ${className}`}
      {...props}>
      <ProfileHeaderLeftSide
        firstName={firstName}
        lastName={lastName}
        username={username}
      />

      <ProfileHeaderRightSide
        onSendFriendRequest={sendFriendRequest}
        ownProfile={ownProfile}
        loggedIn={loggedIn}
        isFriend={isFriend}
      />
    </div>
  );
}
