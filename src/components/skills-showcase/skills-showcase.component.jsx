import './skills-showcase.style.scss'
import IconsContainer from '../icons-container/icons-container.component';
import Footer from '../footer/footer.component';

const SkillsShowcase = () => {
    return(
        <div className='skills-showcase-baseline'>
            <h1 className='skills_h1'><span>S</span><span>K</span><span>I</span><span>L</span><span>L</span><span>S</span></h1>
            <IconsContainer/>
            <Footer/>
        </div>
    )
}

export default SkillsShowcase;