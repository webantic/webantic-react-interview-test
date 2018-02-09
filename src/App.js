import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getDocuments() {
    return []
  }

  renderDocument(doc) {
    return <div className="document-pod">
      <div className="circle"></div>    
      <div className="title">{doc.title}</div>
      <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
      <div className="bottom">
        <input type="text" />
        <div className="button">Submit</div>
      </div>
    </div>
  }

  render() {
    const documents = this.getDocuments()

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
