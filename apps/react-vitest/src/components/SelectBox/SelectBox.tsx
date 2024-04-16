import { type FC, useEffect, useRef, useState } from "react";

import { useFocus } from "./useFocus";

import styles from "./SelectBox.module.css";

export const SELECT_BOX_VALUES = [0, 1, 2, 3] as const;

export type SelectBoxProps = {
  onClick: (value: number) => void;
  defaultValue?: number;
};

const SelectButton: FC<{
  onClick: (value: number) => void;
  value: number;
  focused: boolean;
  selected: boolean;
}> = ({ onClick, value, focused, selected }) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focused) {
      ref.current?.focus();
    }
  }, [focused]);

  const checkedValue = 1;
  const notCheckedValue = 0;

  return (
    <button
      type="button"
      className={styles.btn}
      ref={ref}
      tabIndex={focused ? 0 : -1}
      onClick={() => {
        onClick(value);
      }}
      title={`value is ${value}`}
    >
      {selected ? checkedValue : notCheckedValue}
    </button>
  );
};

export const SelectBox: FC<SelectBoxProps> = ({ onClick, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const { focusedValue, moveFocus } = useFocus(SELECT_BOX_VALUES, defaultValue);

  return (
    // biome-ignore lint/a11y/useAriaActivedescendantWithTabindex: <explanation>
    <table
      role="grid"
      aria-activedescendant={
        focusedValue !== undefined ? `selectBoxCell_${focusedValue}` : undefined
      }
    >
      <tbody>
        <tr
          role="row"
          onKeyDown={(e) => {
            if (e.code === "ArrowRight") {
              moveFocus("positive");
            }
            if (e.code === "ArrowLeft") {
              moveFocus("negative");
            }
          }}
        >
          {SELECT_BOX_VALUES.map((value, index) => (
            <td
              key={value}
              id={`selectBoxCell_${value}`}
              // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: <explanation>
              role="gridcell"
              aria-selected={value === selectedValue}
            >
              <SelectButton
                value={value}
                onClick={(index) => {
                  setSelectedValue(index);
                  onClick(index);
                }}
                focused={focusedValue ? value === focusedValue : index === 0}
                selected={value === selectedValue}
              />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
