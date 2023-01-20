import './contact-showcase.style.scss'
import Footer from '../footer/footer.component';
import FormInline from '../form/form.component';

const ContactShowcase = () => {
    return(
        <div className="contact-showcase">
            <div className='contact-showcase-name-space animate__animated animate__slideInDown'><h1>CONTACT</h1></div>
            <FormInline/>
             <Footer className='import-private-footer animate__animated animate__slideInUp'/> 
        </div>
    )
}

export default ContactShowcase;