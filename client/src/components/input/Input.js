import React from 'react'

const Input = ({handleChange, ...otherProps}) => (
        <div> 
           <input
            onChange={handleChange}
            {...otherProps}
           />
        </div>
    )

export default Input;