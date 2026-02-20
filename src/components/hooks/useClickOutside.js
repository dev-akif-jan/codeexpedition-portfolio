import { useEffect } from 'react';

/**
 * Hook that handles clicks outside of the passed ref
 * @param {Object} ref - React ref of the element to monitor
 * @param {Function} callback - Function to call when click outside occurs
 * @param {Boolean} isActive - Whether the outside click detection is active
 */
const useClickOutside = (ref, callback, isActive) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isActive && ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isActive) {
        callback();
      }
    };

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [ref, callback, isActive]);
};

export default useClickOutside;
