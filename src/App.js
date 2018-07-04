import React, { Component } from "react";
import LectureGoalList from "./conponents/LectureGoalList";
import Timer from "./conponents/Timer";
import moment from "moment";
import logo from "./logo.svg";
import "./App.css";

const goals = [
  "1.react개발환경구축한다.",
  "2.새로운 자바스크립트 문법을 익힌다.",
  "3.개발 편의를 위한 vscode IDE를 익힌다."
];

class App extends Component {
  state = {
    isExpired: false
  };
  handleComplete = () => {
    //자식이 종료되고 1초후에..
    this.setState({ isExpired: true });
    console.log("타이머로 부터 호출");
  };
  handleClick = e => {
    console.log(this, e);
  };
  render() {
    const { isExpired } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img
            onClick={this.handleClick}
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title"> React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LectureGoalList items={goals} title="강의목표" />
        {!isExpired && (
          <Timer
            expireDate={"2018-07-04T16:14:00+0900"}
            onComplete={this.handlerComplete}
          />
        )}
      </div>
    );
  }
}

export default App;
