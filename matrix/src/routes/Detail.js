import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); //location 안에는 정보가 들어있다.
    } //history안에 push라는 다른곳에 보내는 기능이 있다.
  }
  render() {
    //console.log(this.props);
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null; //이거면 위의 if문에 걸리니 home으로 가는거.
    }
  }
}

export default Detail;
