// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ingredients,onAddToBurger}) => {
    // props.ingredients is the array passed from App.jsx
    // props.onAddToBurger is the function passed from App.jsx
  
    // Check if ingredients array exists and has items before mapping
    if (!ingredients || ingredients.length === 0) {
      return <ul><li>No ingredients available.</li></ul>;
    }
  
    return (
      <ul>
        {/* Use .map() to loop over the ingredients array */}
        {ingredients.map((ingredient, index) => (
          // For each 'ingredient' object in the array...
  
          // Add a unique key prop for React's list rendering
          <li key={ingredient.name + index} style={{ backgroundColor: ingredient.color }}>
            {/* Display the ingredient name */}
            {ingredient.name}
  
            {/* Add the '+' button */}
            <button onClick={() => onAddToBurger(ingredient)}>
              +
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;