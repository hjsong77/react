import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };

    this.nTimer = setInterval(() => {
      this.setState({ date: moment() });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.date.format("A hh:mm") === nextState.date.format("A hh:mm")
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { expireDate, onComplete } = this.props;
    const { date } = this.state;

    if (moment(expireDate) < date) {
      setTimeout(() => {
        onComplete && onComplete();
      }, 1000);
      return <div>종료되었습니다. </div>;
    }
    return (
      <div>
        <div>현재시간:{date.format("A hh:mm")}</div>
        <div>{moment(expireDate).fromNow()} 강의 종료합니다. </div>
      </div>
    );
  }
  componentWillUnmount() {
    if (this.nTimer) {
      clearInterval(this.nTimer);
      this.nTimer = null;
    }
  }
}

export default Timer;
