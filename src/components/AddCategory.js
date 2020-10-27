import { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
    const [value, setValue] = useState('')

    const handleInputChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (value.trim().length > 2) {
            setCategories(c => [value.trim(), ...c])
            setValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='category'
                value={value}
                placeholder='Categoría'
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
