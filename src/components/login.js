import React from "react";
import "../css/login.css";
import signupLogin from "../assets/signupLogin.png";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
    };
  }
  loginEmailChange = (e) => {
    this.setState({ loginEmail: e.target.value });
  };
  loginPasswordChange = (e) => {
    this.setState({ loginPassword: e.target.value });
  };
  loginFormSubmit = (e) => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="loginMain">
        <div id="sideImageCont">
          <img src={signupLogin} id="sideImage" />
        </div>
        <div id="loginFormCont">
          <div id="loginFormTitle"> Log In</div>
          <form id="loginForm" onSubmit={this.loginFormSubmit}>
            <div className="formRow">
              <div className="inputRow">
                <label htmlFor="loginEmail">Email Id</label>
                <br></br>
                <input
                  type="email"
                  placeholder="Enter registered email address"
                  id="loginEmail"
                  className="inputFieldLong"
                  onChange={this.loginEmailChange}
                />
              </div>
            </div>

            <div className="formRow">
              <div className="inputRow">
                <label htmlFor="loginPassword">Password</label>
                <br></br>
                <input
                  placeholder="Enter Password"
                  id="loginPassword"
                  className="inputFieldLong"
                  type="password"
                  onChange={this.loginPasswordChange}
                />
              </div>
            </div>
          </form>
          <div id="loginFormSubmit">
            <button id="loginFormSubmitButton" onClick={this.loginFormSubmit}>
              Submit
            </button>
          </div>
          <div id="linkToAlt">
            <a href="/"> Don't have an Account?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
