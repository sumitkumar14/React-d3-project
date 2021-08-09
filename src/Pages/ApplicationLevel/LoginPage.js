import { React } from "react";

function LoginPage(props) {
  const container1={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100vh'
}
  return (
    <div style={container1}>
      <form action="action_page.php" method="post">
        <div style={{display:'flex',flexDirection:'column'}}>
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
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

          <button type="submit">Login</button>
          <label>
          </label>
        </div>

        <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" class="cancelbtn">
            Cancel
          </button>
          <span class="psw">
            Forgot <a href="#/">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
