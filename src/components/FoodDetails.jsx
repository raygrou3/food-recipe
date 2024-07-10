import { useEffect, useState } from "react";
import styles from "./FoodDetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "8bda1b7cd1b043958900221482b0ae5d";
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h2 className={styles.recipeName}>{food.title}</h2>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>Time to prepare: {food.readyInMinutes} mins</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "Veg" : "Non-Veg"}</strong>
          </span>
          <span>
            <strong>Serves: {food.servings}</strong>
          </span>
        </div>
        <div>
          <span>${(food.pricePerServing / 100).toFixed(2)} per serving</span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />

        <h2>Instructions: </h2>

        <div className={styles.recipeInstructions}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ol>
              {food.analyzedInstructions[0].steps.map((step) => {
                return <li>{step.step}</li>;
              })}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
