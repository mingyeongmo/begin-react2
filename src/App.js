import React, { Component } from 'react';
import MyComponent from './MyComponent';


class App extends Component {
  state = {
    counter: 1,
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    // API 를 통해서 서버로 오류 내용 날리기
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter +1
    });
  }
  render() {
    if (this.state.error) {
      return (
        <div>에러가 났음</div>
      )
    }
    return (
      <div>
        { this.state.counter < 10 && <MyComponent value={this.state.counter} /> }
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default App;
