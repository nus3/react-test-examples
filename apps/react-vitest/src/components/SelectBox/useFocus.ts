import { useState } from "react";

import type { SELECT_BOX_VALUES } from "./SelectBox";

export const useFocus = (
  values: typeof SELECT_BOX_VALUES,
  defaultValue?: number,
) => {
  const [focusedValue, setFocusedValue] = useState(defaultValue || values[0]);

  const moveFocus = (direction: "positive" | "negative") => {
    const add = direction === "positive" ? 1 : -1;
    const currentIndex = values.findIndex((value) => value === focusedValue);
    const movedIndex = (currentIndex + add + values.length) % values.length;
    setFocusedValue(values[movedIndex]);
  };

  return { focusedValue, moveFocus };
};
