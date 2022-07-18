import { VFC, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Button: VFC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
