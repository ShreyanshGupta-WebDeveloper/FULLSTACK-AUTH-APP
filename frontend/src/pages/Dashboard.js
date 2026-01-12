import axios from "axios";
import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:5000/api/auth/dashboard",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res.data);
    };
    fetchData();
  }, []);

  return <h1>Dashboard (Protected)</h1>;
}

export default Dashboard;
