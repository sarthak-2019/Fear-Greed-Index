import { Tabs } from "antd";
import React from "react";

const { TabPane } = Tabs;

const Tab = ({ value, setValue }: any) => {
  const onChange = (key: string) => {
    setValue(key);
  };
  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <TabPane tab="Now" key="1" />
      <TabPane tab="OneMonthAgo" key="2" />
      <TabPane tab="OneWeekAgo" key="3" />
      <TabPane tab="OneYearAgo" key="4" />
      <TabPane tab="PreviousClose" key="5" />
    </Tabs>
  );
};

export default Tab;
