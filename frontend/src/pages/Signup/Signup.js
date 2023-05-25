import "./Signup.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Signup() {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await fetch("http://localhost:5000/signup", {
      method: "POST",
      mode: "cors",
    });
    console.log(data);
    console.log("submitted");
  }

  return (
    <div>
      <form id="signup-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Welcome!</h1>
        <label htmlFor="fname">First Name</label>
        <input
          ref={fnameRef}
          type="text"
          id="fname"
          name="fname"
          autoComplete="off"
        ></input>
        <label htmlFor="lname">Last Name</label>
        <input
          ref={lnameRef}
          type="text"
          id="lname"
          name="lname"
          autoComplete="off"
        ></input>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="email" id="email" name="email"></input>
        <label htmlFor="text">Password</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
          autoComplete="off"
        ></input>
        <button id="signup-form-btn" type="submit">
          Sign up 🏀
        </button>
        <div className="existing-user-prompt">
          <p>Already have an account? Login </p>
          <Link to="/login" className="here">
            here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
