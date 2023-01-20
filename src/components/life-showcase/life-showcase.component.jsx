import './life-showcase.style.scss'
import { Link } from 'react-router-dom';
const LifeShowcase = () => {
    return(
        <div className='life-showcase animate__animated animate__fadeIn'>
            <h1 className='life-showcase_h1'>LIFE</h1>
            <div className='life-showcase-container'>
            <h1>COMING SOON ...</h1>
            <p className='coming_p'>will be ready soon</p>
                <p className='target-word_p'>When I was broke I couldn't sleep ...</p>
                <Link to='/' className='home-button'>Back to Home</Link>
            </div>
        </div>
    )
}

export default LifeShowcase;