import './footer.style.scss'

const Footer = () => {
    return(
        <div className='footer-glob'>
            <div className="footer-left-section">
                <div className='left-section_item'>
                    <a href="https://www.instagram.com/rmzn.dev/" target='_blank'>
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
                <div className='left-section_item'>
                    <a href="https://www.linkedin.com/in/ramazan-azimli-135475245/" target='_blank'>
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
                <div className='left-section_item'>
                    <a href="https://codepen.io/ramazan-azimli" target='_blank'>
                    <i class="fa-brands fa-codepen"></i>
                    </a>
                </div>
            </div>
            <div className="footer-right-section">
                <ul>
                    <li>Copyright 2022 <i class="fa-regular fa-copyright"></i></li>
                    <li>All rights reserved by <span>Ramazan Azimli</span></li>
                    <li>Privacy Policy <i class="fa-solid fa-lock"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;