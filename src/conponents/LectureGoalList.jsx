import React, { Component } from "react";
const styles = {
  textAlign: "left",
  padding: "20px",
  border: "1px solid #ccc",
  margin: "5px"
};

const ulStyles = {
  listStyle: "none"
};

const ListItem = ({ item, idx }) => {
  return (
    <li key={idx}>
      <label>
        <input type="checkbox" />
        {item}
      </label>
    </li>
  );
};
const LectureGoalList = props => {
  return (
    <div style={ulStyles}>
      <div>{props.title}</div>
      <ul>
        {props.items.map((item, idx) => {
          return <ListItem item={item} idx={idx} />;
        })}
      </ul>
    </div>
  );
};
export default LectureGoalList;
