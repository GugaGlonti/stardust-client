import ProfilePicture from '../../../assets/svg/ProfilePicture';

interface ProfileHeaderProps {
    className?: string;
}

const username = 'gugaglonti';
const firstName = 'Guga';
const lastName = 'Glonti';

export default function ProfileHeader({ className, ...props }: ProfileHeaderProps) {
    return (
        <div className={`mx-16 mt-16 p-8 bg-blue-400 rounded-2xl ${className}`}>
            <div className="flex items-end">
                <ProfilePicture
                    height="96"
                    className="mx-8"
                />
                <div className="mb-2">
                    <div className="flex gap-1 text-xl">
                        <h1>{firstName}</h1>
                        <h1>{lastName}</h1>
                    </div>
                    <h1 className="text-green-400">@{username}</h1>
                </div>
            </div>
        </div>
    );
}
