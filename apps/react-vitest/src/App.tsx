import type { FC } from "react";

import styles from "./App.module.css";

export const App: FC = () => {
	return (
		<section className={styles.wrap}>
			<h1 className={styles.title}>React Test Examples</h1>
		</section>
	);
};
