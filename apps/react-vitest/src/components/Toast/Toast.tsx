import clsx from "clsx";
import { type FC, type ReactNode, useEffect, useRef, useState } from "react";

import styles from "./Toast.module.css";

export type ToastProps = {
	children: ReactNode;
};

export const AUTO_CLOSE_TIME = 1500;
export const TOAST_ANIMATION_TIME = 250;

export const Toast: FC<ToastProps> = ({ children }) => {
	const [show, setShow] = useState(false);
	const [toastClass, setToastClass] = useState<"showing" | "hiding" | "hide">(
		"hide",
	);

	const isMountRef = useRef(true);

	useEffect(() => {
		if (isMountRef.current) {
			isMountRef.current = false;
			return;
		}

		let autoCloseTimerId: number;
		let animationTimerId: number;

		if (show) {
			setToastClass("showing");

			autoCloseTimerId = window.setTimeout(() => {
				setToastClass("hiding");
			}, AUTO_CLOSE_TIME);

			animationTimerId = window.setTimeout(() => {
				setToastClass("hide");
				setShow(false);
			}, AUTO_CLOSE_TIME + TOAST_ANIMATION_TIME);
		}

		return () => {
			if (autoCloseTimerId) {
				window.clearTimeout(autoCloseTimerId);
			}
			if (animationTimerId) {
				window.clearTimeout(animationTimerId);
			}
		};
	}, [show]);

	return (
		<div>
			<button
				type="button"
				disabled={show}
				onClick={() => {
					setShow((show) => !show);
				}}
			>
				Show
			</button>
			{show && (
				<div className={clsx(styles.toast, styles[toastClass])} role="alert">
					{children}
				</div>
			)}
		</div>
	);
};
