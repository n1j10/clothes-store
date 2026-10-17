import { LuUser } from 'react-icons/lu';

function UserIcon({ imageUrl }: { imageUrl?: string | null }) {
  if (imageUrl) {
    return (
      <img src={imageUrl} className='w-6 h-6 rounded-full object-cover' alt="User profile" />
    );
  }

  return <LuUser className='w-6 h-6 bg-blue-500 rounded-full text-white' />;
}
export default UserIcon;
