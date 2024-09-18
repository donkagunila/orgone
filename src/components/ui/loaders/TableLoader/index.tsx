import React from "react";
import LoadingIcon from "../LoadingIcon";

interface Props {
  description?: string | null;
  show: boolean;
}

function TableLoader(props: Props) {
  const { show, description } = props;
  return (
    <>
      {show && (
        <div className="mt-4 px-4">
          <div className="bg-white  rounded-md shadow-xs border border-slate-200/60 flex justify-center items-center min-h-[200px]">
            <div className="flex flex-col justify-center items-center">
              <LoadingIcon icon="tail-spin" color="orange" className="h-7" />
              <div className="mt-3 text-slate-500 font-medium antialiased">
                {description ?? "Please wait we are loading the data for you.."}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TableLoader;
