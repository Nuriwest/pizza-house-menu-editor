import {ChangeEvent, FC, FormEvent, useState} from 'react'

import Pizza from '../models/Pizza'

import '../css/styles.css'

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void
}

const initState = {
    title: '', 
    price: '', 
    img: ''
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] = 
      useState<{title: string, price: string, img: string}>(initState)

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target

        setNewPizza({
            ...newPizza,
            [name]: value
        })
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        const {title, price, img} = newPizza

        if (title && price && img){
            addPizza({
                title,
                price: Number(price),
                img,
                id: Date.now()
            })
            setNewPizza(initState)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='title' placeholder='Название' value={newPizza.title} onChange={handleChange} type="text" />
            <input name='price' placeholder='Стоимость' value={newPizza.price} onChange={handleChange} type="text" />
            <input name='img' placeholder='Изображение' value={newPizza.img} onChange={handleChange} type="text" />
            <button>Добавить в меню</button>
        </form>
    )
}

export default AddPizzaForm;