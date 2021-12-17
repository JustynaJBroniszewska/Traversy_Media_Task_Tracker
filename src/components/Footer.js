import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            Copyright &copy; 2021
            <Link to="/about"> About</Link>
        </footer>
    )
}

export default Footer
