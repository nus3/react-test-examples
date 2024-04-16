import { act } from "@testing-library/react";
import { vi } from "vitest";

export const delayedResponse = <T>(
	waitTime: number,
	response: T,
): Promise<T> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(response);
		}, waitTime);
	});
};

// waitFor利用時にactが使われなくなったことによるワークアラウンド
// 非同期処理かつ、モックしたタイマーの時間を進めることでReactの状態更新を期待するテストの場合に、act内で状態更新するために利用する
// REF: https://github.com/testing-library/react-testing-library/issues/1051#issuecomment-1111625962
// REF: https://github.com/testing-library/react-testing-library/issues/1051#issuecomment-1206927212
export const resolveAdvanceTimerInAct = async (ms: number) => {
	await act(() => {
		new Promise((resolve) => {
			vi.advanceTimersByTime(ms);
			resolve("");
		});
	});
};
