import { HTMLAttributes } from "react";

interface Props {
  color?: string;
}
export const ColorText: React.FC<Props> = ({ children, color }) => {
  console.log(`text-${color}-500`); // ne hvata dinamicno
  const colorKojiRadi = "text-red-500";
  return <div className={`text-${color}-500`}>{children}</div>;
};
