import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";

const Home = () => {

  const[content, setContent] = useState([])

  const fetchText = async() => {
    const res = await fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1")
    const data = await res.json()
    setContent(data.texts)
  }

  useEffect(()=>{
    fetchText()
  },[])
  return (
    <div>
    <div className="headline">
      <h1 style={{ fontSize: "56px", fontWeight: "600" }}>
        Double the hires, half the
        <br />effort<br />
      </h1>
      <p style={{ fontsize: "1rem", marginTop: "20px", color: "#4d4d4d" }}>
        Open conversations and nurture relationships at scale and be the first
        choice when your ideal
        <br />
        candidate is ready to explore.<br/>
      </p>
      <button>View Kula Outreach</button>
      </div>

      <Layout content={content}/>
    </div>
  );
};

export default Home;
