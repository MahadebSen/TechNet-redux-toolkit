import { useAppSelector } from '@/redux/hook';

export default function Profile() {
  const { user, isLoading } = useAppSelector((state) => state.user);
  return (
    <div className="flex justify-center items-center gap-16 max-w-7xl mx-auto my-40">
      <div className="lg:max-w-md lg:w-80 md:w-1/2 w-5/6 mb-10 md:mb-0">
        {user.photoUrl ? (
          <img
            className="object-cover object-center mx-auto w-56 rounded-full"
            src={user.photoUrl}
            alt="display image"
          />
        ) : (
          <p>{user.email?.charAt(0)}</p>
        )}
      </div>

      <div>
        <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
          {user.name ? user.name : user.email?.split('@')[0]}
        </h1>
        <p className="text-lg mb-2">
          <span className="font-bold">Email:</span> {user.email}
        </p>
      </div>
    </div>
  );
}
