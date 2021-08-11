import { React } from "react";

function SignupPage(props) {
  const container1={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    height:'100vh'
}
  return (
    <div style={container1}>
    <div style={{fontWeight:'bold', fontSize:'24px', margin:'8px'}}>D3-React-Application</div>
    <form style={{ backgroundColor:'#ffffff', padding:'4px' }}>
    <label style={{paddingBottom:'4px',fontSize:'16px'}}><b>Sign Up</b></label>
      <p style={{paddingBottom:'4px'}}>Please fill in this form to create an account.</p>
      <hr />
      <div style={{display:'flex',flexDirection:'column'}}>
      <label style={{paddingBottom:'4px',fontSize:'16px'}} for="email">
        <b>Email</b>
      </label>
      <input
        style={{marginBottom:'16px'}}
        type="text"
        placeholder="Enter Email"
        name="email"
        required
      ></input>

      <label style={{paddingBottom:'4px',fontSize:'16px'}} for="psw">
        <b>Password</b>
      </label>
      <input
      style={{marginBottom:'16px',fontSize:'16px'}}
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
      ></input>

      <label style={{paddingBottom:'4px', fontSize:'16px'}} for="psw-repeat">
        <b>Repeat Password</b>
      </label>
      <input
      style={{marginBottom:'16px'}}
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

      <div style={{display:'flex',padding:'0px,0px,8px,0px', justifyContent:'flex-end', alignItems:'center'}}>
        <button type="button" class="cancelbtn">
          Cancel
        </button>
        <button style={{marginLeft:'8px'}} type="submit" class="signupbtn">
          Sign Up
        </button>
        </div>
      </div>
    </form>
    </div>
  );
}

export default SignupPage;
