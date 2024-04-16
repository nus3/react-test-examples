import { type FC, useState } from "react";

import { type GetExamplesResponse, getExamples } from "../../api/example";

export const GetExamplesButton: FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [examples, setExamples] = useState<GetExamplesResponse["examples"]>([]);

	const handleClick = async () => {
		try {
			setIsLoading(true);
			const res = await getExamples();
			setExamples(res.examples);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			<button type="button" onClick={handleClick}>
				Get examples
			</button>
			{isLoading ? (
				<p data-testid="Loading">Loading</p>
			) : (
				<ul>
					{examples.map((example) => (
						<li key={example.id}>{example.name}</li>
					))}
				</ul>
			)}
		</div>
	);
};
