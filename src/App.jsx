import { useState } from 'react'; // Make sure useState is imported
import './App.css';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';

const App = () => {
  // This is the data for the list on the left (doesn't need state as it doesn't change)
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  // --- State ---
  // Initialize the burger stack state as an empty array
  const [stack, setStack] = useState([]);

  // --- Event Handlers (Functions to modify state) ---

  // Function to add an ingredient to the stack
  const addToBurger = (ingredient) => {
    // Update the stack state by creating a new array with the new ingredient added
    setStack(prevStack => [...prevStack, ingredient]);
    // Log for debugging (optional)
    console.log("Added to stack:", ingredient.name);
    console.log("Current stack:", [...stack, ingredient]); // Log the potential new state
  };

  // Function to remove an ingredient from the stack by its index
  const removeFromBurger = (indexToRemove) => {
    // Update the stack state by creating a new array excluding the item at indexToRemove
    setStack(prevStack => prevStack.filter((_, index) => index !== indexToRemove));
    //The first argument (_) is the current item in the array.
    // Log for debugging (optional)
    console.log("Removing from stack at index:", indexToRemove);
  };


  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        {/* Pass the available ingredients array and the addToBurger function */}
        <IngredientList
           ingredients={availableIngredients}
           onAddToBurger={addToBurger}
        />

        {/* Pass the current stack array and the removeFromBurger function */}
        <BurgerStack
           stack={stack}
           onRemoveFromBurger={removeFromBurger}
        />
      </section>
    </main>
  );
};

export default App;
