import React, { useState, useEffect } from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { year, organization, award } }) => (
  <div className="app__laurels_awards-card">
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {year}
      </p>
      <p className="p__cormorant">{organization}</p>
      <p className="p__cormorant">{award}</p>
    </div>
  </div>
);

const Laurels = () => {
  const [awardsData, setAwardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/");
        const data = await response.json();
        setAwardsData(data[0]?.restaurant?.awards || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurel</h1>

        <div className="app__laurels_awards">
          {awardsData.map((award, index) => (
            <AwardCard award={award} key={index} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
