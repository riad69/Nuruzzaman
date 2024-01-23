import React from "react";
import dotIMG from "../tableStyle/../../assets/verticaldots.png";

const Table = ({
  id,
  Project_Link,
  project_id,
  bid_value,
  bidding_minutes,
  value,
  deal_status,
  name,
  showTableHead,
}) => {
  id !== undefined ? console.log("table", id) : "";

  const status =
    deal_status === 1 ? "converted to deal" : "not converted to deal";
  const project_id_data = project_id === "null" ? "null" : project_id;

  return (
    <div className="">
      <table className="min-w-full border border-gray-300 text-center">
        <thead>
          {showTableHead && (
            <tr>
              <th className="border-b p-2 w-2"></th>
              <th className="border-b p-2 w-2">#</th>

              <th className="border-b p-2 w-60"> Name </th>
              <th className="border-b p-2 w-60"> Project_Link </th>

              <th className="border-b p-2 w-16 gap-5"> Project Id </th>

              <th className="border-b p-2 w-16 gap-5"> Bid Value </th>

              <th className="border-b p-2 w-16 gap-5"> Bidding minutes </th>

              <th className="border-b p-2 w-16 gap-5"> Value </th>

              <th className="border-b p-2 w-44 gap-5"> Status </th>

              <th className="border-b p-2 items-end w-16">Actions</th>
            </tr>
          )}
        </thead>
        <tbody>
          <tr >
            <td className="border-b p-2 w-2">
              <input type="checkbox" />
            </td>
            <td className="border-b p-2 w-2">{id - 144}</td>

            <td className="border-b p-2 w-60">{name}</td>

            <td className="border-b p-2 w-60">{Project_Link}</td>

            <td className="border-b p-2 w-16">{project_id}</td>

            <td className="border-b p-2 w-16">{bid_value}</td>

            <td className="border-b p-2 w-16">{bidding_minutes}</td>

            <td className="border-b p-2 w-16">{value}</td>
            <td
              className="border-b p-1 m-1 w-44"
              style={{ backgroundColor: deal_status === 1 ? "blue" : "green" }}
            >
              {status}
            </td>

            <td className="border-b p-2 items-end w-16">
              <button>
                <img
                  src={dotIMG}
                  alt=""
                  className="w-6 h-6 border border-gray-400 p-1 "
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
