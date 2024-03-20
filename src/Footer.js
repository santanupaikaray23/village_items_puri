import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
       
        <div className='footer-container'>
        <section className='footer-subscription'>
        <div className='input-areas'>
          </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2> Additional Information</h2>
                    <Link>Near Smart Service Provider,Baniatangi,Odisha</Link>
                    </div>
                    <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link>Bhubaneswar, Odisha, India</Link>
                    <Link>info@gkctinfo.com</Link>
                    <Link>Phone no. 912417110</Link>
                    
            </div>
        </div>
        </div>
        <section className='social-media'>
            <div className='social-media-warp'>
                
                <small className="website-right">santanu kumar paikaray@ 2024</small>
                <div className="social-icons">
                
                <div class="container">
                <a href="https://twitter.com/FinservZeta" class="btn btn-social-icon fa fa-twitter">
                    
                        </a>&nbsp;
               
                
                    <a href="https://www.facebook.com/zeta.finserv/" class="btn btn-social-icon fa fa-facebook">
                       
                            </a>&nbsp;
                            
                    <a href="https://www.instagram.com/" class="btn btn-social-icon fa fa-instagram">
                     
                           </a>
                    </div>


                </div>
            </div>
        </section>
</div>

      
    )
}

export default Footer;