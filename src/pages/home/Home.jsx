import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  navigate("/login");
  return (
    <div>
      <button onClick={() => navigate("/login")}>login page</button>
    </div>
  );
}

export default Home;
