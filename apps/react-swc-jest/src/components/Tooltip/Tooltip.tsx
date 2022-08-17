import clsx from 'clsx';
import { ReactNode, useEffect, useRef, useState, FC } from 'react';

import styles from './Tooltip.module.css';

export type TooltipProps = {
  children: ReactNode;
  onClickClose: () => void;
  show: boolean;
};

export const TOOLTIP_ANIMATION_TIME = 250;

export const Tooltip: FC<TooltipProps> = ({ children, onClickClose, show }) => {
  const [tooltipClass, setTooltipClass] = useState<
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
      setTooltipClass('showing');

      timeoutId = window.setTimeout(() => {
        setTooltipClass('show');
      }, TOOLTIP_ANIMATION_TIME);
    } else {
      setTooltipClass('hiding');
      timeoutId = window.setTimeout(() => {
        setTooltipClass('hide');
      }, TOOLTIP_ANIMATION_TIME);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [show]);

  return (
    <div className={clsx(styles.wrap, styles[tooltipClass])} role="alert">
      {show && children}
      <button className={styles.closeBtn} onClick={onClickClose}>
        &times;
      </button>
    </div>
  );
};
