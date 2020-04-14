//import React from "react";

function Food({ name, 사진 }) {
  return (
    <div>
      <h2>"I like {name}</h2>
      <img src={사진} />
    </div>
  );
}

const foodLike = [
  { name: "kimchi", image: "https://craftlog.com/m/i/6171598=s1280=h960.webp" },
  {
    name: "pizza",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ji2D3ke6Bmlp-FDONZOQn5B540neQ5_wGpa5dCSpwQwpE0If",
  },
];

function renderFood(dish) {
  console.log(dish);
  return <Food name={dish.name} 사진={dish.image} />;
}

function App() {
  return <div>{foodLike.map(renderFood)}</div>;
}

//export default App;
