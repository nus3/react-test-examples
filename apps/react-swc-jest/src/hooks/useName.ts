import { useCallback, useEffect, useState } from 'react';

export const useName = () => {
  const [name, setName] = useState('nus3');

  const handleClick = useCallback(() => {
    setName('nus4');
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return name;
};
