import { FC, useState } from 'react';

import { getExamples, GetExamplesResponse } from '../../api/example';

export const GetExamplesButton: FC = () => {
  const [examples, setExamples] = useState<GetExamplesResponse['examples']>([]);

  const handleClick = async () => {
    const res = await getExamples();
    setExamples(res.examples);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Get examples
      </button>
      <ul>
        {examples.map((example) => (
          <li key={example.id}>{example.name}</li>
        ))}
      </ul>
    </div>
  );
};
