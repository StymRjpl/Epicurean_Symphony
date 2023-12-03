import React, { useState, useEffect } from "react";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const [restaurantData, setRestaurantData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/');
        const data = await response.json();
        setRestaurantData(data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filterItemsByCategory = (category) => {
    if (!category) {
      return restaurantData?.restaurant?.menu?.categories || [];
    }

    return restaurantData?.restaurant?.menu?.categories.filter(
      (cat) => cat.name === category
    );
  };

  const getRandomImage = (index) => {
    return `https://source.unsplash.com/300x200/?food,dish${index}`;
  };

  const renderMenuItems = (items) => {
    return items.map((category) => (
      <div key={category.name}>
        <p className="app__specialMenu-menu_heading">{category.name}</p>
        <div className="app__specialMenu-menu_items">
          {category.items.map((item, index) => (
            <div key={item.name + index} className="menu-item">
              <div className="menu-item__image">
                <img src={getRandomImage(index)} alt={item.name} />
              </div>
              <div className="menu-item__details">
                <MenuItem
                  title={item.name}
                  price={item.price}
                  tags={item.ingredients}
                  description={item.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-filters">
        <button
          onClick={() => handleCategoryChange('Artisanal Appetizers')}
          className={selectedCategory === 'Artisanal Appetizers' ? 'active' : ''}
        >
          Artisanal Appetizers
        </button>
        <button
          onClick={() => handleCategoryChange('Global Fusion Entrees')}
          className={selectedCategory === 'Global Fusion Entrees' ? 'active' : ''}
        >
          Global Fusion Entrees
        </button>
        <button
          onClick={() => handleCategoryChange('Epicurean Indulgences')}
          className={selectedCategory === 'Epicurean Indulgences' ? 'active' : ''}
        >
          Epicurean Indulgences
        </button>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          {renderMenuItems(filterItemsByCategory(selectedCategory))}
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
