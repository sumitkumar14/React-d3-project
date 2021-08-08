import { React } from "react";

function SignupPage(props) {
  return (
    <form style={{ border: "1px solid #ccc" }}>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
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

      <label>
        <input
          type="checkbox"
          checked="checked"
          name="remember"
          style={{ marginBottom: "15px" }}
        >
          {" "}
          Remember me
        </input>
      </label>

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
    </form>
  );
}

export default SignupPage;
