import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setcategories}) => {
    
    const [inputValue, setInputValue] = useState('')

    const handleInputChage = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setcategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <p>{ inputValue }</p>
                <input 
                    type="text" 
                    value={ inputValue } 
                    onChange={ (e) => handleInputChage(e)}
                /> 
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}

export default AddCategory
