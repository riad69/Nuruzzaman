import React from "react";
import Table from "./tableStyle/Table";
import { useState, useEffect } from "react";

const ShowData = ({ leads }) => {
  // console.log("showFile", leads);
  return (
    <div className="w-fit rounded overflow-auto shadow border border-gray-300 bg-white p-2">
      {leads.map(
        (item, index) =>
          leads !== undefined && (
            <Table
              key={item.id}
              id={item.id}
              name={item.client_name}
              status={item.status}
              Project_Link={item.project_link}
              project_id={item.project_id}
              bid_value={item.bid_value}
              bidding_minutes={item.bidding_minutes}
              value={item.value}
              deal_status={item.deal_status}
              showTableHead={index === 0}
            />
          )
      )}
      {/* {leads !== undefined && <Table leads={leads}/>} */}
    </div>
  );
};

export default ShowData;
