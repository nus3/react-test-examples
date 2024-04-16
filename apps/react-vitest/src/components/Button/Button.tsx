import type { FC, ReactNode } from "react";

export type ButtonProps = {
	children: ReactNode;
	onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button type="button" onClick={onClick}>
			{children}
		</button>
	);
};
