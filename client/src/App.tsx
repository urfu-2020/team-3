import React, {Component} from "react";
import './App.css';

class App extends Component<{}, any> {
  constructor(props:any) {
    super(props);
    this.state = { apiResponse: "none" };
  }

  callAPI() {
    fetch("http://localhost:" + (process.env.PORT || 80))
        .then(res => {
          console.log(res)
          return res.text()})
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => this.setState({ apiResponse: 'failed to get result' }))
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return  <div dangerouslySetInnerHTML={{ __html: this.state.apiResponse }} />
  }
}

export default App;
