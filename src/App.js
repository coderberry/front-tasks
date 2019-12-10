import React from 'react';
import logo from './logo.svg';
import './App.css';
const Front = window.Front;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onConversation = this.onConversation.bind(this);
  }

  componentDidMount() {
    Front.on("conversation", this.onConversation);
  }

  onConversation(data) {
    console.log("Front data", data);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
