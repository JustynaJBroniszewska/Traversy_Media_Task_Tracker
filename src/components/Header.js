import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

    const handleAddBtnClick = () => {
        console.log("click")
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
                text='Add'
                handleAddBtnClick={handleAddBtnClick}
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
