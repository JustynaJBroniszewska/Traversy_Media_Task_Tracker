import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            VERSION: 1.0.0
            <br />
            Made with &#10084; by Justyna Broniszewska
            <br />
            More about the project: <Link to="https://youtu.be/w7ejDZ8SWv8" target='_blank'>Brad Traversy</Link>
            <br />
            <Link to="/">Go back</Link>
        </div>
    )
}

export default About
