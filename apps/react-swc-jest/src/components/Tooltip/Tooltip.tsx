import clsx from 'clsx';
import { ReactNode, useEffect, useState, VFC } from 'react';

import styles from './Tooltip.module.css';

export type TooltipProps = {
  children: ReactNode;
  onClickClose: () => void;
  show: boolean;
};

export const Tooltip: VFC<TooltipProps> = ({
  children,
  onClickClose,
  show
}) => {
  const [tooltipClass, setTooltipClass] = useState<
    'show' | 'showing' | 'hiding' | 'hide'
  >('hide');

  useEffect(() => {
    let timeoutId: number;

    // TODO: アニメーションがいい感じにできるようにする

    if (show) {
      setTooltipClass('showing');
      timeoutId = window.setTimeout(() => {
        setTooltipClass('show');
      }, 250);
    } else {
      setTooltipClass('hiding');
      timeoutId = window.setTimeout(() => {
        setTooltipClass('hide');
      }, 250);
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
        ×
      </button>
    </div>
  );
};
