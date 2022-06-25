import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

//...

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    setMessage(null);
    if (res?.error) {
      setMessage(res.error);
      return;
    }
    return router.push("/admin");
  };

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type={"email"}
          required
          name="email"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type={"password"}
          required
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
      <p style={{ color: "red" }}>{message}</p>
    </>
  );
};

export default Login;
