import './icons-container.style.scss';
import AboutList from '../about/about.component';
import TsIcon from '../../icons/typescript-icon/typescript-icon.component';
import HtmlIcon from '../../icons/html-icon/html-icon.component';
import JsIcon from '../../icons/javascript-icon/javascript-icon.component';
import CssIcon from '../../icons/css-icon/css-icon.component';
import ReactIcon from '../../icons/react-icon/react-icon';
import GitIcon from '../../icons/git-icon/git-icon.component';
import SassIcon from '../../icons/sass-icon/sass-icon.component';
import TailwindIcon from '../../icons/tailwindcss-icon/tailwind-icon.component';

const IconsContainer = () => {
    return(
        <div className='icons-container '>
            <div className='top-container_item animate__animated animate__slideInLeft'>
            <div className='top-container-inline_item'><HtmlIcon/></div>
            <div className='top-container-inline_item'><CssIcon/></div>
            <div className='top-container-inline_item'><JsIcon/></div>
            <div className='top-container-inline_item'><ReactIcon className='inline-react-icon'/></div>
            <div className='top-container-inline_item'><TsIcon/></div>
            </div>
            <div className='animate__animated animate__slideInDown'><AboutList/></div>
            <div className='bottom-container_item animate__animated animate__slideInUp'>
                <div className="bottom-container-inline_item"><GitIcon/></div>
                <div className="bottom-container-inline_item"><SassIcon/></div>
                <div className="bottom-container-inline_item"><TailwindIcon/></div>
                <div className="bottom-container-inline_item"><i class="fa-brands fa-bootstrap"></i></div>
                <div className="bottom-container-inline_item"><i class="fa-brands fa-node"></i></div>
            </div>
        </div>
    )
}

export default IconsContainer;