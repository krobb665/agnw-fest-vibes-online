
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface LineupNavigationArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const LineupNavigationArrow = ({ direction, onClick }: LineupNavigationArrowProps) => {
  const isLeft = direction === 'left';
  
  return (
    <button 
      onClick={onClick}
      className={`absolute ${isLeft ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300`}
      aria-label={`${isLeft ? 'Previous' : 'Next'} artist`}
    >
      {isLeft ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  );
};

export default LineupNavigationArrow;
