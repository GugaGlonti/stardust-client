import ProfileAside from '../modules/ProfilePage/ProfileAside/ProfileAside';
import ProfileHeader from '../modules/ProfilePage/ProfileHeader/ProfileHeader';
import ProfileMain from '../modules/ProfilePage/ProfileMain/ProfileMain';

export default function ProfilePage() {
    return (
        <div className="grid grid-cols-8">
            <ProfileHeader className="col-span-full" />
            <ProfileAside className="col-start-2 col-span-2" />
            <ProfileMain className="col-span-4" />
        </div>
    );
}
