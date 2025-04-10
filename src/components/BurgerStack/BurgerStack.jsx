// src/components/BurgerStack/BurgerStack.jsx


const BurgerStack = ({stack,onRemoveFromBurger}) => {
    return <ul>
            
    
      {stack.map((s, index)=>(
        <li key={index} style={{ backgroundColor: s.color }}>
            {s.name}
            <button onClick={() => onRemoveFromBurger(index)}>-</button>

         </li>

      ))}
   

    </ul>
  };
  
  export default BurgerStack;
  