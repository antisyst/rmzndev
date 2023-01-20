import './navigation.style.scss';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import ImportIcon from '../../icons/import-icon/import-icon';

const Navigation = () => {
    return(
        <Fragment>
            <div className='navigation-container animate__animated animate__slideInDown'>
              <div className='left-section'>
               <Link to='/'><ImportIcon className='animate__animated animate__slideInDown'/></Link> 
              </div>
                <div className='right-section'>
                <Link to='/' className='link-component link-component-hide'>Home</Link>
                <Link to='/contact' className='link-component animate__animated animate__slideInDown'>CONTACT</Link>
                <Link to='/skills' className='link-component animate__animated animate__slideInDown'>SKILLS</Link>
                <Link to='/life' className='link-component animate__animated animate__slideInDown'>LIFE<i class="fa-solid fa-heart-crack"></i></Link>
                </div>
         
            </div>
     
     </Fragment>
    )
}

export default Navigation;