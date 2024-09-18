import Button from "@/app/base-components/Button";
import Lucide from "@/app/components/ui/icons/Lucide";
import FancyTable from "@/app/components/ui/tables/FancyTable";
import Link from "next/link";
import React from "react";

function Main() {
  return (
    <div className="mt-4">
      <FancyTable
        columns={[
          // product, sku, category, brand,  price, unit, qty, status, added by, action
          { name: "product", field: "Product" },
          { name: "sku", field: "SKU" },
          { name: "category", field: "Category" },
          { name: "brand", field: "Brand" },
          { name: "price", field: "Price" },
          { name: "unit", field: "Unit" },
          { name: "qty", field: "Qty" },
          { name: "status", field: "Status" },
          { name: "added by", field: "Added By" },
          { name: "action", field: "Action" }
        ]}
        rows={[]}
      >
        <div className="flex px-3 py-2 justify-between items-center">
          <div className="text-slate-500">Product List</div>
          <div>
            <Button variant="primary">
              <Link
                href={"/shop/products/create"}
                className="text-xs flex items-center"
              >
                <Lucide name="Plus" className="h-4 w-4 mr-3" />
                Add Product
              </Link>
            </Button>
          </div>
        </div>
      </FancyTable>
    </div>
  );
}

export default Main;
