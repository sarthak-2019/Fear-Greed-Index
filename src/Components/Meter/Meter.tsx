import React, { useContext } from "react";
import { DataContext } from "../../App";
import Speedometer from "react-d3-speedometer";
const Meter = ({ value, setValue }: any) => {
  const dataContext: any = useContext(DataContext);
  const help: any = () => {
    console.log(value);
    // console.log(dataContext.data.fgi.now.value);
    if (value === "1") {
      return dataContext.data.fgi.now.value;
    }
    if (value === "2") {
      return dataContext.data.fgi.oneMonthAgo.value;
    }
    if (value === "3") {
      return dataContext.data.fgi.oneWeekAgo.value;
    }
    if (value === "4") {
      return dataContext.data.fgi.oneYearAgo.value;
    }
    if (value === "5") {
      return dataContext.data.fgi.previousClose.value;
    }
  };
  return (
    <>
      <Speedometer
        minValue={0}
        maxValue={60}
        // maxSegmentLabels={12}
        needleHeightRatio={0.8}
        ringWidth={25}
        segments={5}
        value={help()}
        segmentColors={["#b81414", "#ec5555", "#f2db5b", "#7ab55c", "#385828"]}
        needleColor="#000080"
      />
    </>
  );
};

export default Meter;
