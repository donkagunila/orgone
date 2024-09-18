import { twMerge } from "tailwind-merge";
import { createContext, useContext } from "react";

interface TableProps
  extends React.PropsWithChildren,
    React.ComponentPropsWithoutRef<"table"> {
  dark?: boolean;
  bordered?: boolean;
  hover?: boolean;
  striped?: boolean;
  sm?: boolean;
}

const tableContext = createContext<{
  dark: TableProps["dark"];
  bordered: TableProps["bordered"];
  hover: TableProps["hover"];
  striped: TableProps["striped"];
  sm: TableProps["sm"];
}>({
  dark: false,
  bordered: false,
  hover: false,
  striped: false,
  sm: false
});

const Table = ({
  className,
  dark,
  bordered,
  hover,
  striped,
  sm,
  ...props
}: TableProps) => {
  return <div>Enter</div>;
};

export default Table;
