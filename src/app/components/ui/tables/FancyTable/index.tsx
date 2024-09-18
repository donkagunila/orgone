"use client";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import TableLoader from "../../loaders/TableLoader";
import { Props } from "./table.properties";
import Lucide from "../../icons/Lucide";
import Button from "@/app/base-components/Button";
import { EmptyIcon } from "../../icons/EmptyIcon";
import { SpinnerIcon } from "../../icons/SpinnerIcon";

const FancyTable = (props: Props) => {
  const {
    rows,
    data,
    columns,
    loading: isLoading,
    onRowClick,
    recordsPerPage,
    showPagination: showPage,
    hasSelect,
    onRowSelect,
    dataLoading,
    pages,
    isRemote,
    prevPage,
    nextPage,
    page,
    children
  } = props;
  const showPagination = showPage ?? true;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(recordsPerPage ?? 10);
  const totalPages = pages || Math.ceil(rows.length / itemsPerPage);
  const [loading, setLoading] = useState(isLoading ?? false);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const toggleSorting = (columnName: any) => {
    if (sortColumn === columnName) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnName);
      setSortDirection("asc");
    }
  };

  const handleRowSelection = (rowIndex: number) => {
    // Function to handle the selection/deselection of rows.
    if (selectedRows.includes(rowIndex)) {
      setSelectedRows(selectedRows.filter((index) => index !== rowIndex));
    } else {
      setSelectedRows([...selectedRows, rowIndex]);
    }
  };

  const handleSelectAll = () => {
    // Function to handle the selection/deselection of all rows.
    if (selectedRows.length === rows.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(
        rows.map((row: any, index: number) => {
          return row.id;
        })
      );
    }
  };

  useEffect(() => {
    onRowSelect && onRowSelect(selectedRows);
  }, [onRowSelect, selectedRows]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setLoading(isLoading ?? false);
  }, [isLoading]);

  useEffect(() => {
    setSortColumn("");
    setSortDirection("asc");
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    if (isRemote && typeof page == "number") {
      setCurrentPage(page);
    }
  }, [page, isRemote]);

  const renderHeaders = () => {
    return (
      <tr className="text-left text-xs font-semibold bg-slate-100 dark:bg-darkmode-600 border-y border-slate-200 text-slate-500 dark:text-slate-200 uppercase tracking-wider ">
        {hasSelect && (
          <th key="checkbox" scope="col" className={"px-2 py-3 uppercase"}>
            <input
              type="checkbox"
              className={twMerge(
                "transition-all duration-100 ease-in-out shadow-sm border-slate-400 cursor-pointer rounded focus:ring-3 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20",
                "[&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10"
              )}
              checked={selectedRows.length === rows.length}
              onChange={handleSelectAll}
            />
          </th>
        )}
        {columns.map((column, index) => (
          <th
            key={column.name}
            scope="col"
            className={`px-2 py-3  uppercase cursor-pointer`}
            onClick={() => toggleSorting(column.field)}
          >
            <div className="flex">
              <span> {column.name}</span>
              {sortColumn === column.field && (
                <Lucide
                  name={sortDirection === "asc" ? "ChevronUp" : "ChevronDown"}
                  className="w-4 h-4 ml-1"
                />
              )}
            </div>
          </th>
        ))}
      </tr>
    );
  };

  const renderRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredRows = rows.filter((row: any) => {
      const searchableContent = Object.values(row).join(" ").toLowerCase();
      return searchableContent.includes(searchQuery.toLowerCase());
    });

    const sortedRows = [...filteredRows].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return sortedRows
      .slice(startIndex, endIndex)
      .map((row: any, index: number) => (
        <tr
          key={row.id}
          className={`${
            index % 2 === 0
              ? "bg-gray-50 dark:bg-darkmode-500"
              : "bg-white dark:bg-darkmode-100"
          }  hover:bg-gray-100`}
          onClick={() => onRowClick && onRowClick(data ? data[index] : row)}
        >
          {hasSelect && (
            <td key={`checkbox-${row.id}`} className="px-2 py-4 text-xs">
              <input
                type="checkbox"
                checked={selectedRows.includes(row.id)}
                onChange={() => handleRowSelection(row.id)}
                className={twMerge(
                  "transition-all duration-100 ease-in-out",
                  "shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50",
                  "[&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10"
                )}
              />
            </td>
          )}
          {columns.map((column) => {
            const cellContent = column.render
              ? column.render(row)
              : row[column.field];

            return (
              <td key={column.field} className="px-2 py-4 text-xs">
                {column.type === "date"
                  ? new Date(cellContent).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric"
                    })
                  : cellContent}
              </td>
            );
          })}
        </tr>
      ));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const prev = () => {
    if (prevPage) {
      isRemote ? prevPage() : handlePrevPage();
    } else {
      handlePrevPage();
    }
  };

  const next = () => {
    if (nextPage) {
      isRemote ? nextPage() : handlePageChange(currentPage + 1);
    } else {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPagination = () => {
    const pageNumbers: any[] = [];
    const rangeStart = Math.max(1, currentPage - 2);
    const rangeEnd = Math.min(totalPages, currentPage + 2);

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pageNumbers.push(i);
    }

    if (rangeStart > 1) {
      if (pageNumbers.length > 0 && pageNumbers[0] === "...") {
        pageNumbers.splice(0, 1);
      }
      pageNumbers.unshift("...");
    }
    if (rangeEnd < totalPages) {
      pageNumbers.push("...");
    }

    return (
      <>
        <ul className="list-pagination-prev pagination pagination-tabs card-pagination">
          <li className="page-item">
            <button
              className="page-link pr-4 py-4 border-r rounded-r-none"
              onClick={() => {
                prev();
              }}
            >
              <Lucide name="ChevronLeft" className="w-5 h-5 mr-1" />
              Prev
            </button>
          </li>
        </ul>
        <ul className="inline-flex items-center pb-2 m-0">
          {pageNumbers.map((pageNumber) => (
            <li key={`page-${pageNumber}`}>
              <a
                href="#"
                onClick={() =>
                  typeof pageNumber === "number"
                    ? handlePageChange(pageNumber)
                    : null
                }
                className={`px-3 py-1 rounded leading-tight  ${
                  pageNumber === currentPage
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-darkmode-700 text-gray-500 hover:bg-gray-100"
                } mr-2 border border-transparent`}
              >
                {pageNumber}
              </a>
            </li>
          ))}
        </ul>
        <ul className="list-pagination-next pagination pagination-tabs card-pagination">
          <li className="page-item rounded-l-none">
            {currentPage < totalPages && (
              <button
                className="page-link pl-4 py-4 border-l rounded-l-none"
                onClick={() => next()}
              >
                Next <Lucide name="ChevronRight" className="w-5 h-5 ml-1" />{" "}
              </button>
            )}
          </li>
        </ul>
      </>
    );
  };

  return (
    <div className="box">
      <TableLoader show={dataLoading ?? false} />

      <div className="card">
        {children && (
          <div className="border-b border-slate-200/60">{children}</div>
        )}
        <div>
          <div className="row align-items-center">
            search, filter, page
            <div className="col">
              <div className="flex flex-row-reverse justify-center items-center input-group input-group-flush input-group-merge input-group-reverse">
                <input
                  className="px-4 py-4 w-full text-slate-400 placeholder:text-slate-400 focus:ring-0 focus:border-0 focus:outline-none shadow-none"
                  type={"Search "}
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search"
                />
                <span className="input-group-text">
                  <Lucide
                    name="Search"
                    className="w-4 h-4 text-slate-400 mx-4"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`overflow-x-auto`}>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkmode-600 truncate ">
              {renderHeaders()}
            </thead>
            <tbody className="truncate">
              {!loading && rows.length > 0 && renderRows()}
              {!loading && rows.length === 0 && (
                <tr>
                  <td className="text-center py-10" colSpan={columns.length}>
                    <div className="m-auto bg-accent-100 items-center text-center p-5 h-fit w-fit rounded-full">
                      <EmptyIcon height={70} width={70} />
                    </div>
                    <p className="text-sm text-gray-700 mt-3">
                      {" "}
                      No records found
                    </p>
                  </td>
                </tr>
              )}
              {loading && (
                <tr>
                  <td className="text-center py-20" colSpan={columns.length}>
                    <div role="status ">
                      <SpinnerIcon />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* {showPagination && !loading && rows.length > 0 && renderPagination()} */}
        </div>
        {rows.length > 0 && (
          <div className="card-footer flex justify-between">
            {showPagination &&
              !loading &&
              rows.length > 0 &&
              renderPagination()}
          </div>
        )}
      </div>
    </div>
  );
};

export default FancyTable;
