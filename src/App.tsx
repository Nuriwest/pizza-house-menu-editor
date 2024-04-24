import { useState } from 'react';

import AddPizzaForm from './components/AddPizzaForm';
import DisplayPizzas from './components/DisplayPizzas';
import Pizza from './models/Pizza';

import './css/App.css';

function App() {
    const [pizzasList, setPizzasList] = useState<Pizza[]>([])

    const addPizza = (newPizza: Pizza) => {
        setPizzasList([...pizzasList, newPizza])
    }

    const updatePizza = (newPizza: Pizza) => {
        setPizzasList(pizzasList.map((pizza) => (
            pizza.id === newPizza.id ? newPizza : pizza
        )))
    }

    const deletePizza = (id: number) => {
        const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
        setPizzasList(newPizzasList)
    }
    
  return (
    <div className="App">
      <div className="wrap">
        <h1 className="heading">Наша пиццерия</h1>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas updatePizza={updatePizza} deletePizza={deletePizza} pizzasList={pizzasList} />
      </div>
    </div>
  );
}

export default App;
