import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ handleShowAddTask, showAddTask, title }) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
                handleShowAddTask={handleShowAddTask}
                showAddTask={showAddTask}
            />
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onclick: PropTypes.func,
}

export default Header
