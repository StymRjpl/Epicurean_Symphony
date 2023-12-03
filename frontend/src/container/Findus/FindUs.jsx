import React, { useEffect, useState } from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => {
  const [locationData, setLocationData] = useState({
    address: "",
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/");
        const data = await response.json();
        setLocationData(data[0]?.restaurant?.location || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: locationData.latitude, lng: locationData.longitude },
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: { lat: locationData.latitude, lng: locationData.longitude },
        map: map,
        title: "Gourmet Restaurant",
      });
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
      // Replace YOUR_GOOGLE_MAPS_API_KEY with your actual Google Maps API key
      script.defer = true;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, [locationData]);

  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>

        <div className="app__wrapper-content">
          <p className="p__opensans">{locationData.address}</p>
          <p className="p__cormorant" style={{ color: "#DCCA78", margin: "2rem 0" }}>
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>

        <button className="custom__button" style={{ marginTop: "2rem" }}>
          Visit Us
        </button>
      </div>

      <div id="map" style={{ height: "500px", width: "50%" }}></div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="Find Us" />
      </div>
    </div>
  );
};

export default FindUs;
