import type { FC } from "react";

export const DateText: FC = () => {
  const date = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return <span>{date}</span>;
};
