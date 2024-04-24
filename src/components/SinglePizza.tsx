import { FC, useState } from "react"
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";

import EditPizzaForm from './EditPizzaForm'

import Pizza from "../models/Pizza"

import '../css/styles.css'

interface SinglePizzaProps {
    pizza: Pizza,
    updatePizza: (newPizza: Pizza) => void,
    deletePizza: (id: number) => void
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updatePizza, deletePizza}) => {
    const [edit, setEdit] = useState<boolean>(false)

    function handleToggleEdit() {
        setEdit(!edit)
    }

    function handleDelete() {
        deletePizza(pizza.id)
    }

  return (
    <div className="pizza">
        <img src={`/images/${pizza.img}`} alt={pizza.title} />
        <h2>{pizza.title}</h2>
        <span>{pizza.price} ₽</span>

        <div className="pizza-controls">
            <AiTwotoneEdit onClick={handleToggleEdit} />
            <AiTwotoneDelete onClick={handleDelete} />
        </div>

        {edit ? <EditPizzaForm handleToggleEdit={handleToggleEdit} updatePizza={updatePizza} data={pizza} /> : null}
    </div>
  )
}

export default SinglePizza
