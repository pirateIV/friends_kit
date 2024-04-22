import { PlusIcon } from "@radix-ui/react-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileHeader = () => {
  return (
    <header className='relative'>
      <section
        className='mt-3 banner profile-cover h-[327px] w-full bg-cover group bg-gray-400'
        style={{
          // backgroundImage: `url(${banner})`,
          // backgroundImage: `url("https://source.unsplash.com/random?wallpapers")`,
          backgroundSize: 'cover',
        }}>
        <div className='absolute top-0 w-full h-full bg-black/20 z-20 transition-colors group-hover:bg-black/40'></div>
        <span
          className='absolute top-2.5 text-white left-3 text-xl me-3 py-1.5 ps-2 z-30 group-hover:scale-90 !hover:opacity-100'
          style={{ transition: 'transform 0.2s ease-in' }}>
          <FontAwesomeIcon icon={faCamera} />
        </span>
        <button className='absolute border border-white py-1.5 ps-9 pe-3 text-white rounded-sm top-3 left-3 z-30  transition-opacity opacity-0 group-hover:opacity-100 text-sm'>
          Edit cover image
        </button>

        <div className='user-avatar absolute h-[130px] w-[130px] mx-auto flex justify-center z-30 -bottom-[65px] inset-x-0'>
          <img
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
            className='rounded-full'
            alt='user-profile-pic'
          />
          <div className='relative'>
            <a className='upload-button absolute bottom-0 right-0 flex-center h-[36px] w-[36px] text-white rounded-full bg-blue-800 cursor-pointer hover:bg-blue-700'>
              <PlusIcon />
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default ProfileHeader;
