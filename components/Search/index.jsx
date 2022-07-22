import React from "react";
import { useRouter } from "next/router";
function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState({
    startDate: "",
    endDate: "",
  });
  const router = useRouter();
  return (
    <div className="bg-teal-50 flex  justify-between items-center rounded-full w-24 ">
      <div className="flex items-center ">
        <span className="text-gray-600 text-sm ml-2 ">Date départ : </span>
        <input
          type={"date"}
          className="w-32 h-full rounded-full bg-transparent border-none outline-none"
          placeholder="Search"
          value={searchTerm.startDate}
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, startDate: e.target.value })
          }
        />
      </div>
      <div className="flex items-center ">
        <span className="text-gray-600 text-sm  ">Date Depot : </span>
        <input
          type={"date"}
          className="w-32 h-full  rounded-full bg-transparent border-none outline-none"
          placeholder="Search"
          value={searchTerm.endDate}
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, endDate: e.target.value })
          }
        />
      </div>

      <i
        className="fas fa-car text-teal-700 bg-teal-500 text-sm p-4 border-2 rounded-full"
        onClick={() => {
          router.push({
            pathname: "/search",
            query: {
              startDate: searchTerm.startDate,
              endDate: searchTerm.endDate,
            },
          });
        }}
      ></i>
    </div>
  );
}

export default SearchBar;
