const UploadCard = ({ imageSrc, title, description }) => {
  return (
    <div className='group w-1/2 bg-gray-200 cursor-pointer h-[250px] flex-center flex-col rounded-md hover:bg-gray-300'>
      <div className='flex-center h-32 w-36'>
        <img
          src={imageSrc}
          className='bg-cover grayscale transition duration-300 group-hover:grayscale-0'
          alt=''
        />
      </div>
      <div className='card-info mt-2 text-center'>
        <h5 className='font-medium font-montserrat'>{title}</h5>
        <span className='text-sm text-gray-500'>{description}</span>
      </div>
    </div>
  );
};

export default UploadCard;
