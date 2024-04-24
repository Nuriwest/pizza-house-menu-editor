import {ChangeEvent, FC, FormEvent, useState} from 'react'

import Pizza from '../models/Pizza'

import '../css/styles.css'

interface EditPizzaFormProps {
    data: Pizza,
    updatePizza: (newPizza: Pizza) => void,
    handleToggleEdit: () => void
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza, handleToggleEdit }) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data)

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target

        setEditPizza({
            ...editPizza,
            [name]: value
        })
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        const {title, price, img} = editPizza

        if(title && price && img){
            updatePizza(editPizza)
            handleToggleEdit()
        }
    }

    return (
        <form className='edit-form' onSubmit={handleSubmit}>
            <input name='title' placeholder='Название' value={editPizza.title} onChange={handleChange} type="text" />
            <input name='price' placeholder='Стоимость' value={editPizza.price} onChange={handleChange} type="text" />
            <input name='img' placeholder='Изображение' value={editPizza.img} onChange={handleChange} type="text" />
            <button>Подтвердить</button>
        </form>
    )
}

export default EditPizzaForm;