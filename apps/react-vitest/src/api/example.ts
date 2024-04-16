export type GetExamplesRequest = {
	name: string;
};

export type GetExamplesResponse = {
	examples: Array<{ id: string; name: string }>;
};

export const getExamples = async (params?: GetExamplesRequest) => {
	const response = await fetch("/examples", {
		method: "GET",
		body: params && JSON.stringify({ name: params.name }),
	});
	const formattedResponse = await response.json();
	return formattedResponse as GetExamplesResponse;
};
