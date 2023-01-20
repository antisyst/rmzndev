import './showcase.style.scss'
import ReactIcon from '../../icons/react-icon/react-icon'
import { Link } from 'react-router-dom'

const Showcase = () => {
    return(
   <div className='showcase animate__animated animate__slideInDown'>
    <div className='showcase-text animate__animated animate__slideInDown'>
        <h1 className='animate__animated animate__slideInDown'><span className='animate__animated animate__slideInDown'>HI, I'AM </span><br />
         Frontend React <i class="fa-brands fa-react animate-react-icon"></i> Developer
        </h1><br />
        <h2 className='animate__animated animate__slideInDown'>I build things in <span className='span'>Frontend Development</span>.</h2>
        <div className='inline-container animate__animated animate__slideInDown'>
            <div className='inline-div_p animate__animated animate__slideInDown'>
                <p className='animate__animated animate__slideInDown'>I have been in the Frontend field since I was 15 years old. Over the years I have acquired many skills and established myself in my field. You can see the <span>CV</span> for more information.</p>
           </div>
           <div className='resume_item animate__animated animate__slideInDown'>
            <Link to='#' className='resume-page_button'>Say Something </Link>
            <Link to='#' className='resume-page_button'>Check My Resume</Link>
           </div>
        </div>
        <div class="scroll-downs">
        <div class="mousey">
            <div class="scroller"></div>
        </div>
        </div>
    </div>
   </div>
    )
}

export default Showcase