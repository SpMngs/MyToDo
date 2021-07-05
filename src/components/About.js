import { Link } from 'react-router-dom'

const About = () => {
    return (
      <div >
        <h4>Version 0.0.1</h4>
        <p>This To-Do App was developed as part of iReportSource interview process
        </p>
        <Link to='/'>Go Back</Link>
      </div>
    )
  }
  
  export default About;