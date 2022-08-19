import { useCallback, useEffect, useState } from 'react';

export const useNus3 = () => {
  const [nus3, setNus3] = useState('nus3');

  const handleClick = useCallback(() => {
    setNus3('nus4');
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return nus3;
};
