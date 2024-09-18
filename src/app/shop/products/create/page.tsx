"use client";
import {
  FormHelp,
  FormInline,
  FormInput,
  FormLabel,
  FormSelect
} from "@/app/base-components/Form";
import React from "react";
import StatusBox from "./components/StatusBox";
import OrganisationBox from "./components/OrganisationBox";
import Lucide from "@/app/components/ui/icons/Lucide";
import TomSelect from "@/app/base-components/TomSelect";

function Main() {
  const [subcategory, setSubcategory] = React.useState([]);
  return (
    <div className="mx-24 px-12">
      <div>back</div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-8">
          <div className="p-5 mt-5 intro-y box">
            <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
              <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                <Lucide name="ChevronDown" className="w-4 h-4 mr-2" /> Product
                Information
              </div>
              <div className="mt-5">
                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Name</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div>
                    </div>
                  </FormLabel>

                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormInput
                      id="product-name"
                      type="text"
                      placeholder="Product name"
                    />
                    <FormHelp className="text-right">
                      Maximum character 0/70
                    </FormHelp>
                  </div>
                </FormInline>

                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Category</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </FormLabel>

                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <FormSelect>
                      <option value="">Test Category</option>
                    </FormSelect>
                  </div>
                </FormInline>

                <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                  <FormLabel className="xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Subcategory</div>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        You can add a new subcategory or choose from the
                        existing subcategory list.
                      </div>
                    </div>
                  </FormLabel>
                  <div className="flex-1 w-full mt-3 xl:mt-0">
                    <TomSelect
                      value={subcategory}
                      onChange={setSubcategory}
                      options={{
                        placeholder: "Etalase"
                      }}
                      className="w-full"
                      multiple
                    >
                      <option value="test">tyest</option>
                    </TomSelect>
                  </div>
                </FormInline>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="box p-5">
            <div>
              <div>Thumbnail</div>
              <div>thumb</div>
              <div className="text-xs text-slate-400 text-center p-3">
                Set the product thumbnail image. Only *.png, *.jpg and *.jpeg
                image files are accepted
              </div>
            </div>
          </div>

          <StatusBox />

          {/* <OrganisationBox /> */}

          <div className="box mt-4 p-5">
            <div className="flex justify-between items-center">
              <div className="text-slate-500 text-lg">Product Theme</div>
            </div>

            <div className="py-3">
              <FormSelect
                className="mt-2 sm:mr-2"
                aria-label="Product Template"
              >
                <option>Default Template</option>
              </FormSelect>
              <div className="text-xs text-slate-400 mt-1">
                Assign a template from your current theme to define how a single
                product is displayed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
