import React from "react";
import "../css/signUp.css";
import signupLogin from "../assets/signupLogin.png";
import axios from 'axios'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      password: "",
      email: "",
      aadhar: "",
      mobile: "",
      age: "",
      cpassword: "",
    };
    this.fnameChange = this.fnameChange.bind(this)
    this.lnameChange = this.lnameChange.bind(this)
    this.ageChange = this.ageChange.bind(this)
    this.aadharChange = this.aadharChange.bind(this)
    this.emailChange = this.emailChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
    this.cpasswordChange = this.cpasswordChange.bind(this)
    this.mobileChange = this.mobileChange.bind(this)
    this.signUpFormSubmit = this.signUpFormSubmit.bind(this)
  }

  signUpFormSubmit(e) {
    e.preventDefault()
    
    const registered = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      mobile: this.state.mobile,
      age: this.state.age,
      aadhar: this.state.aadhar,
      password: this.state.password,
      cpassword: this.state.cpassword
    }
    if(this.state.password===this.state.cpassword)
    {
    axios.post('http://localhost:4000/app/register', registered)
    .then(res => console.log(res.data))
    }
    else
    {
      window.alert("Password does not match")
    }

    // window.location = '/'
    this.setState({
      fname: "",
      lname: "",
      password: "",
      email: "",
      aadhar: "",
      mobile: "",
      age: "",
      cpassword: "",
    })
  }

  fnameChange = (e) => {
    this.setState({ fname: e.target.value });
  };
  lnameChange = (e) => {
    this.setState({ lname: e.target.value });
  };
  ageChange = (e) => {
    this.setState({ age: e.target.value });
  };
  emailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  passwordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  cpasswordChange = (e) => {
    this.setState({ cpassword: e.target.value });
  };
  mobileChange = (e) => {
    this.setState({ mobile: e.target.value });
  };
  aadharChange = (e) => {
    this.setState({ aadhar: e.target.value });
  };
  
  render() {
    return (
      <div className="signUpMain">
        <div id="sideImageCont">
          <img src={signupLogin} id="sideImage" />
        </div>
        <div id="signUpFormCont">
          <div id="signUpFormTitle"> Sign Up</div>
          <form id="signUpForm" onSubmit={this.signUpFormSubmit}>
            <div className="formRow">
              <div className="inputRow">
                <label htmlFor="fname">First Name</label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  id="fname"
                  className="inputField"
                  onChange={this.fnameChange}
                  value={this.state.fname}
                />
              </div>
              <div className="inputRow">
                <label htmlFor="lname">Last Name</label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  id="lname"
                  className="inputField"
                  onChange={this.lnameChange}
                  value={this.state.lname}
                />
              </div>
            </div>
            <div className="formRow">
              <div className="inputRow">
                <label htmlFor="mobile">Mobile Number</label>
                <br></br>
                <input
                  placeholder="Enter Valid Mobile Number"
                  id="mobile"
                  type="text"
                  className="inputField"
                  onChange={this.mobileChange}
                  value={this.state.mobile}
                />
              </div>
              <div className="inputRow">
                <label htmlFor="age">Age</label>
                <br></br>
                <input
                  placeholder="Enter Age"
                  id="age"
                  type="number"
                  className="inputField"
                  onChange={this.ageChange}
                  value={this.state.age}
                />
              </div>
            </div>
            <div className="formRow">
              <div className="inputRow">
                <label htmlFor="email">Email Id</label>
                <br></br>
                <input
                  type="email"
                  placeholder="Enter valid email address"
                  id="email"
                  className="inputFieldLong"
                  onChange={this.emailChange}
                  value={this.state.email}
                />
              </div>
            </div>
            <div className="formRow">
              <div className="inputRow">
                <label htmlFor="password">Password</label>
                <br></br>
                <input
                  placeholder="Enter Password"
                  id="password"
                  type="password"
                  className="inputField"
                  onChange={this.passwordChange}
                  value={this.state.password}
                />
              </div>
              <div className="inputRow">
                <label htmlFor="cpassword">Confirm Password</label>
                <br></br>
                <input
                  placeholder="Re-enter Password"
                  id="cpassword"
                  type="password"
                  className="inputField"
                  onChange={this.cpasswordChange}
                  value={this.state.cpassword}
                />
              </div>
            </div>
            <div className="formRow">
              <div className="inputRow">
                <label htmlFor="aadhar">Aadhar Card Number</label>
                <br></br>
                <input
                  placeholder="Enter Aadhar Card Number"
                  id="aadhar"
                  className="inputFieldLong"
                  onChange={this.aadharChange}
                  value={this.state.aadhar}
                />
              </div>
            </div>
          </form>
          <div id="signUpFormSubmit">
            <button id="signUpFormSubmitButton" onClick={this.signUpFormSubmit}>
              Submit
            </button>
          </div>
          <div id="linkToAlt">
            <a href="/"> Have an existing Account?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
