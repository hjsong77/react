import React, { Component } from "react";
import { Checkbox } from "antd";
const styles = {
  textAlign: "left",
  padding: "20px",
  border: "1px solid #ccc",
  margin: "5px"
};

const ulStyles = {
  listStyle: "none"
};

const ListItem = ({ title, completed }) => {
  return (
    <li>
      <Checkbox defaultChecked={completed}>{title}</Checkbox>
    </li>
  );
};
const LectureGoalList = props => {
  return (
    <div style={ulStyles}>
      <div>{props.title}</div>
      <ul>
        {props.items.map((item, idx) => {
          return <ListItem key={idx} {...item} />;
        })}
      </ul>
    </div>
  );
};
export default LectureGoalList;
