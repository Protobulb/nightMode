// Youssef Selkani
// Protobulb.io
// 2018

import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: '',
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  switch = () => {
    var mode = localStorage.getItem("mode");
    if (mode === "lightMode") {
      localStorage.setItem("mode", "nightMode");
      this.setState({ class: 'nightMode' });
    } else {
      localStorage.setItem("mode", "lightMode");
      this.setState({ class: 'lightMode' });
    }
  };

  componentDidMount = () => {
    var mode = localStorage.getItem("mode");
        if (mode) {
          this.setState({ class: mode });
    } else {
      this.setState({ class: 'default' });
    }
  };

  render() {
    return (
      <div className="App">
        <div className={this.state.class}>
          <h3 style={{ marginTop: "10vh" }}>LocalStorage NightMode</h3>

            Persistence on page reload
            <hr />
            STATE = {this.state.class}

            <Button
              className="mt-5 mb-5 pl-5 pr-5"
              onClick={this.switch}
              color="success"
              active
            >
              Switch
            </Button>
            <Button
              color="link"
              onClick={this.toggle}
            >
              Source
            </Button>

          <div style={{ maxWidth: "80vh", textAlign: "justify", fontSize: 17, margin: '5vh'}}>
            <small>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </small>
            <hr />
            <ol>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
            </ol>
          </div>

          <Modal 
          size='lg' 
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader toggle={this.toggle}>Source Code</ModalHeader>
            <ModalBody>

            <img alt='gist' src={process.env.PUBLIC_URL + '/carbon.png'} id='carbon'/>
            <a href='https://github.com/Protobulb/nightMode' >https://github.com/Protobulb/nightMode</a>
            </ModalBody>
            <ModalFooter>
              <Button color="dark" onClick={this.toggle}>
                Ok
              </Button>
            </ModalFooter>
          </Modal>

        </div>
      </div>
    );
  }
}

export default App;
