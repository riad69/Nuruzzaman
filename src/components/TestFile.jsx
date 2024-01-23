import React from "react";
import Header from "./Header";
import ShowData from "./ShowData";
import { useState, useEffect } from "react";

const TestFile = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("https://erp.seopage1.net/api/leads");
        const data = await response.json();
        setLeads(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchLeads();
  }, []);

  // console.log("TestFile", leads)

  return (
    <>
      <div className="bg-gray-200 w-full h-fit p-10">
        <Header />
        <div className="mt-5 flex justify-center">
          {leads !== undefined && <ShowData leads={leads} />}
        </div>
      </div>
    </>
  );
};

export default TestFile;
