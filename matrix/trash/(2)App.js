//import React from "react";
//import PropTypes from "prop-types";

const foodLike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://craftlog.com/m/i/6171598=s1280=h960.webp",
    rating: "씨벌"
  },
  {
    id: 2,
    name: "pizza",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ji2D3ke6Bmlp-FDONZOQn5B540neQ5_wGpa5dCSpwQwpE0If",
    rating: 5.5
  }
];

function Food({ name, 사진, rating }) {
  return (
    <div>
      <h2>"I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={사진} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  사진: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>리액트</h1>
      {foodLike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          사진={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

//export default App;
