import clsx from 'clsx';
import { ReactNode, useEffect, useRef, useState, FC } from 'react';

import styles from './Toast.module.css';

export type ToastProps = {
  children: ReactNode;
  onClickClose: () => void;
  show: boolean;
};

export const TOAST_ANIMATION_TIME = 250;

export const Toast: FC<ToastProps> = ({ children, onClickClose, show }) => {
  const [toastClass, setToastClass] = useState<
    'show' | 'showing' | 'hiding' | 'hide'
  >('hide');

  const isMountRef = useRef(true);

  useEffect(() => {
    if (isMountRef.current) {
      isMountRef.current = false;
      return;
    }

    let timeoutId: number;

    if (show) {
      setToastClass('showing');

      timeoutId = window.setTimeout(() => {
        setToastClass('show');
      }, TOAST_ANIMATION_TIME);
    } else {
      setToastClass('hiding');
      timeoutId = window.setTimeout(() => {
        setToastClass('hide');
      }, TOAST_ANIMATION_TIME);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [show]);

  return (
    <div className={clsx(styles.wrap, styles[toastClass])} role="alert">
      {show && children}
      <button className={styles.closeBtn} onClick={onClickClose}>
        &times;
      </button>
    </div>
  );
};
