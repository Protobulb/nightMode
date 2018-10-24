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
import Gist from "react-gist";

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
       // eslint-disable-next-line
      var mode = localStorage.getItem("mode");
      this.setState({ class: mode });
    } else {
      localStorage.setItem("mode", "lightMode");
       // eslint-disable-next-line
      var mode = localStorage.getItem("mode");
      this.setState({ class: mode });
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
            centered={true}
            size={"lg"}
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader toggle={this.toggle}>Source Code</ModalHeader>
            <ModalBody>
              <Gist
                style={{ width: "100vh" }}
                id="4eaa292035a256348e419b31f5fbe467"
              />
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
