import PropTypes from 'prop-types'

const Button = ({handleShowAddTask, showAddTask }) => {

    return (
        <button className='btn' onClick={handleShowAddTask}>{showAddTask ? 'Hide form' : 'Show form'}</button>
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

