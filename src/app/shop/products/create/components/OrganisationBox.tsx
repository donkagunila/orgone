"use client";
import TomSelect from "@/app/base-components/TomSelect";
import React from "react";

function OrganisationBox() {
  const [selectMultiple, setSelectMultiple] = React.useState<string[]>([]);
  return (
    <div className="box mt-4 p-5">
      <div className="flex justify-between items-center">
        <div className="text-slate-500 text-lg">Product Organization</div>
      </div>
      <div className="py-3">
        <TomSelect
          value={selectMultiple}
          onChange={setSelectMultiple}
          options={{
            placeholder: "Select your favorite actors"
          }}
          className="w-full "
          multiple
        >
          <option value="1">Leonardo DiCaprio</option>
          <option value="2">Johnny Deep</option>
          <option value="3">Robert Downey, Jr</option>
          <option value="4">Samuel L. Jackson</option>
          <option value="5">Morgan Freeman</option>
        </TomSelect>
      </div>
    </div>
  );
}

export default OrganisationBox;
