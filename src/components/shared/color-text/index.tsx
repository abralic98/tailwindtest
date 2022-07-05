import { HTMLAttributes } from "react";

interface Props {
  color?: string;
  className: any;
}
export const ColorText: React.FC<Props> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
