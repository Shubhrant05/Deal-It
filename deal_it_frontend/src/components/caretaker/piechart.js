import React from "react";
import { Chart } from "react-google-charts";



const PieChart=({...props})=> {
    const data = [
        ["Complaints Category", "Percentage"],
        ["Plumbing", props.plumbing],
        ["Electricity", props.electricity],
        ["Carpenting", props.carpenter],
      ];
      
    const options = {
        title: "Complaints Analysis",
        is3D: true,
      };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
      className="mt-10"
    />
  );
}
export default PieChart