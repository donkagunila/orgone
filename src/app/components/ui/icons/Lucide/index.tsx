import { icons, LucideProps } from "lucide-react";
import React from "react";

interface Props extends LucideProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

const Lucide = ({ name, color, size, ...props }: Props) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} {...props} />;
};

export default Lucide;
