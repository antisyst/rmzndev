import './form.style.scss'

const FormInline = () => {
    return(
    <form
        action="https://formbold.com/s/6MPa7"
        method="POST" className='form-container animate__animated animate__fadeIn'
        >
        <label>
            <input type="text" name="text" placeholder='Your Name' className='animate__animated animate__fadeIn'/>
        </label>
        <label>
            <textarea name="message" placeholder='Your Message' cols='30' rows='13' className='animate__animated animate__fadeIn'></textarea>
        </label>
        <button type="submit" className='animate__animated animate__fadeIn'>Send Message</button>
    </form>
    )
}

export default FormInline;