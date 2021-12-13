import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Button = ({handleAddBtnClick, text}) => {
    return (
        <button className='btn' onClick={handleAddBtnClick}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text : PropTypes.string,
    color: PropTypes.string,
}

export default Button

