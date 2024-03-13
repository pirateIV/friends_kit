const ProgressBar = ({ progress, children }) => {
  return (
    <div
      className='max-w-[520px] mx-auto flex items-center bg-white h-[18px] rounded-[100px]'
      id='progress-bar'>
      <div
        className='relative flex items-center justify-between h-[6px] mx-auto'
        style={{ width: 'calc(100% - 24px)' }}
        id='progress-wrap'>
        <div
          className='absolute top-0 left-0 h-full bg-[#eaeaea] w-full'
          id='track'></div>
        <div
          className='absolute top-0 left-0 h-full bg-blue-500'
          id='bar'
          style={{ width: '15%' }}></div>

        {children}
      </div>
    </div>
  );
};

export default ProgressBar;
