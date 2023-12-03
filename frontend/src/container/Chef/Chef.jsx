import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => {
  const [restaurantData, setRestaurantData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/'); // Adjust the URL based on your Flask backend
        const data = await response.json();
        setRestaurantData(data[0]); // Assuming the data is an array with a single restaurant object
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">{restaurantData?.restaurant?.chef.bio}</p>
          </div>
          <p className="p__opensans">Signature dish: {restaurantData?.restaurant?.chef.signature_dish} </p>
        </div>

        <div className="app__chef-sign">
          <p>{restaurantData?.restaurant?.chef?.name}</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
