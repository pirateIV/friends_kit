// Base button class with common styles
const baseBtnClass =
  'flex items-center justify-center text-sm leading-6 font-medium py-2 px-3 rounded-lg !shadow-sm focus:outline-none lowercase first-letter:!uppercase';

// Previous button class with specific styles
export const prevBtnClass = `${baseBtnClass} bg-white border text-gray-600 border-gray-300 w-20 hover:bg-gray-100 disabled:bg-gray-200`;

// Next button class with specific styles
export const nextBtnClass = `${baseBtnClass} bg-blue-600 text-white border border-blue-600 w-20 hover:opacity-90 disabled:bg-blue-400`;
