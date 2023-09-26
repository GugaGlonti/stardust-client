import { ProfileData } from '../../../services/user.service';

interface ProfileMainProps {
  profileData: ProfileData;
  className?: string;
}

export default function ProfileMain({ className, profileData, ...props }: ProfileMainProps) {
  return (
    <div className={`m-16 p-8 bg-window rounded-2xl  ${className}`}>
      <div>test</div>
    </div>
  );
}
