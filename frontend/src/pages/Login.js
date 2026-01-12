import axios from "axios";
import { useState } from "react";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const submit = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", data);
    localStorage.setItem("token", res.data.token);
    window.location = "/dashboard";
  };

  return (
    <div>
      <input placeholder="Email" onChange={e => setData({ ...data, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setData({ ...data, password: e.target.value })} />
      <button onClick={submit}>Login</button>
    </div>
  );
}

export default Login;
