import user from "../user.js";
import Alert from "./shared/alert.js";
import Home from "./home.js";

export default class Login {
  // Execute when a Login instance gets instantiated/create
  constructor() {
    this.render();
    this.addEventListeners();
  }

  render() {
    // Access App element
    let appElem = document.getElementById("app");

    appElem.innerHTML += `
    <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp">

    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="password-input">
    </div>
  
    <button type="button" class="btn btn-primary" id="login-btn">Submit</button>
  </form>
    `;
  }

  addEventListeners() {
    let loginBtnElem = document.getElementById("login-btn");

    loginBtnElem.addEventListener("click", () => {
      let emailInputValue = document.getElementById("email-input").value;
      let passwordInputValue = document.getElementById("password-input").value;

      if(emailInputValue === user.email && passwordInputValue === user.password){
        // redirect the user somewhere else 
        new Alert({success: true});
        new Home(); 
        console.log("credentials correct")
      }else{
        // notify the user password/email is wrong
        console.log("Incorrect credentials");
        new Alert({success: false});
      }
    });
  }
}
