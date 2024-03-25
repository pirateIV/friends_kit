import { useSelector } from 'react-redux';
import { currentProgress } from '@/redux/reducers/progressReducer';

const ProgressBar = ({ children }) => {
  const progress = useSelector(currentProgress);

  return (
    <div className='pt-[30px]' id='progress'>
      <div
        className='relative max-w-[520px] mx-auto flex items-center dark:bg-white h-[18px] rounded-[100px] bg-[#3e4e69]'
        id='progress-bar'>
        <div
          className='relative h-[6px] mx-auto'
          style={{ width: 'calc(100% - 24px)' }}
          id='progress-wrap'>
          <div
            className='absolute top-0 left-0 h-full dark:bg-[#eaeaea] w-full rounded-[100px] bg-[#2b3649]'
            id='track'></div>
          <div
            className='absolute top-0 left-0 h-full bg-[#5596e6] rounded-[100px]'
            id='bar'
            style={{ width: `${progress}%` }}></div>
        </div>
        <div className='w-full absolute flex items-center justify-between'>
          {children}
        </div>
      </div>{' '}
    </div>
  );
};

export default ProgressBar;
