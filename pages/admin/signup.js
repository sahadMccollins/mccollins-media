import React, { useRef } from "react";

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    //Getting value from useRef()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //Validation
    if (!email || !email.includes("@") || !password) {
      alert("Invalid details");
      return;
    }
    //POST form values
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    //Await for data for any desirable next steps
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input ref={emailRef} type={"email"} required name="email" />
        <input ref={passwordRef} type={"password"} required name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
