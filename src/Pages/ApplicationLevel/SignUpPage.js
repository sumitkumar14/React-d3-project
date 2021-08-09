import { React } from "react";

function SignupPage(props) {
  const container1={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100vh'
}
  return (
    <div style={container1}>
    <form style={{ border: "1px solid #ccc" }}>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <div style={{display:'flex',flexDirection:'column'}}>
      <label for="email">
        <b>Email</b>
      </label>
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        required
      ></input>

      <label for="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
      ></input>

      <label for="psw-repeat">
        <b>Repeat Password</b>
      </label>
      <input
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        required
      ></input>

      <p>
        By creating an account you agree to our{" "}
        <a href="#/" style={{ color: "dodgerblue" }}>
          Terms & Privacy
        </a>
        .
      </p>

      <div class="clearfix">
        <button type="button" class="cancelbtn">
          Cancel
        </button>
        <button type="submit" class="signupbtn">
          Sign Up
        </button>
        </div>
      </div>
    </form>
    </div>
  );
}

export default SignupPage;
