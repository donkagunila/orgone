"use client";
import { FormSelect } from "@/app/base-components/Form";
import React, { useEffect } from "react";

function StatusBox() {
  const [status, setStatus] = React.useState("Published");
  const [statusColor, setStatusColor] = React.useState("bg-green-600");

  useEffect(() => {
    if (status === "Published") {
      setStatusColor("bg-green-600");
    } else if (status === "Draft") {
      setStatusColor("bg-yellow-600");
    } else if (status === "Scheduled") {
      setStatusColor("bg-blue-600");
    } else if (status === "Inactive") {
      setStatusColor("bg-red-600");
    }
  }, [status]);

  return (
    <div className="box mt-4 p-5">
      <div className="flex justify-between items-center">
        <div className="text-slate-500 text-lg">Status</div>
        <div className={`h-5 w-5 ${statusColor} rounded-full`}></div>
      </div>
      <div className="py-3">
        <FormSelect
          className="mt-2 sm:mr-2 py-3"
          aria-label="Default select example"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Published</option>
          <option>Draft</option>
          <option>Scheduled</option>
          <option>Inactive</option>
        </FormSelect>
        <div className="text-xs text-slate-400 mt-1">
          Set the product status.
        </div>
      </div>
    </div>
  );
}

export default StatusBox;
