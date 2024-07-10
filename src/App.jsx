import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import "./App.css";
import "@fontsource/ubuntu";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(658615);
  return (
    <div>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        {/* with InnerContainer */}

        {/* <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer> */}

        {/* without InnerContainer */}

        <FoodList setFoodId={setFoodId} foodData={foodData} />
        <FoodDetails foodId={foodId} />
      </Container>
    </div>
  );
}

export default App;
