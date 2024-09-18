import React from "react";
import LoadingIcon from "../../../base/LoadingIcon";

interface LoaderModalProps {
  title: string;
  description: string;
}

const LoaderModal = (props: LoaderModalProps) => {
  const { title, description } = props;
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-[300px]">
        <div className="mb-3">
          <LoadingIcon icon="tail-spin" color="orange" className="w-10 h-10" />
        </div>
        <div className="font-semibold text-lg text-slate-500 my-4">{title}</div>
        <div className="text-slate-400 text-sm font-medium px-6 mx-4 ">
          {description}
        </div>
      </div>
    </div>
  );
};

export default LoaderModal;
