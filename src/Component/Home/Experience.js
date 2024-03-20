import React, {Component} from 'react';
import './Experience.css';

class Experience extends Component{
    render(){
        return(
           
        <div className='experience' id='experience'>
            <div className='left'>
                <div className='wrapper'>
                    <h2>Why Choose Us</h2>
                    <h1>Boosts Your Website Traffic!</h1>
                    <p>We are passionate about our work. Our designer stay ahead of the
                        curve to provide engaging and user-friendly website designs to make
                        your business stand  out. Our developers are commited to maintaining 
                        the highest web standards so that  your site will withstand the test
                        of time. We care about your business, which is why we work with you.
                    </p>
                </div>
                <hr/>
                &nbsp;
                <h2>EXPERIENCE</h2>
                <div className='ExpContainer'>
                
                <div className='heading'>
                
                <h1>Expand Your Digital Presence</h1>
                <p1>Your app is your tool for better communication with yours followers </p1>
               </div>
             
                
               
                </div>
            </div>
            <div className='right'>
                {/* <h1>20+</h1> <p>Men and women, committed to better protect you around the world</p>
                <p>Employees</p>
                <h1>150+</h1>
                <p>Projects</p>
                <h1>50+</h1>
                <p>Clients</p> */}
                <table>
               <tr>
                <th>20<sup>+</sup></th>
                <td>Men and women, committed to better protect you around world.</td>
               </tr>
               <tr>
                <td>EMPLOYEES</td>
               </tr>
               <tr>
                <th>150<sup>+</sup></th>
                <td>Where you will find the same quality of service and dedication around the world.</td>
               </tr>
               <tr>
                <td>PROJECTS</td>
               </tr>
               <tr>
                <th>50<sup>+</sup></th>
                <td>Making us one of the leading web design company around the globe.</td>
               </tr>
               <tr>
                <td>CLIENTS</td>
               </tr>
                </table>
                &nbsp;
                &nbsp;
                <h4>Pay for Qualified Traffic</h4>
                <p>Gkctinfo stays ahead of the curve with digital marketing
                    trends. Our success has us leading the pack amongst our
                    competitors with our ability to anticipate change and
                    innovation...
                </p>
                &nbsp;
                &nbsp;
                {/* <div className='progress mb-4'>
                    <div className='progress-bar bg-warning'>25%</div>
                </div>
                <div className='progress mb-4'>
                    <div className='progress-bar bg-danger'>50%</div>
                </div>
                <div className='progress mb-4'>
                    <div className='progress-bar bg-success'>75%</div>
                </div>
                <div className='progress mb-4'>
                    <div className='progress-bar bg-info'>85%</div>
                </div>
                <div className='progress mb-4'>
                    <div className='progress-bar bg-check'>95%</div>
                </div> */}

                <div className='skill-box'>
                    <span className='title'>Website Design</span>
                    <div className='skill-bar'>
                        <span className='skill-per html'>
                            <span className='tooltiptext'>90%</span>
                        </span>
                    </div>
                    </div>
                    <div className='skill-box'>
                    <span className='title'>App Development</span>
                    <div className='skill-bar'>
                        <span className='skill-per app'>
                            <span className='tooltiptext'>93%</span>
                        </span>
                    </div>
                    </div>
                    <div className='skill-box'>
                    <span className='title'>Internship & Training</span>
                    <div className='skill-bar'>
                        <span className='skill-per internship'>
                            <span className='tooltiptext'>79%</span>
                        </span>
                    </div>
                    </div>
                    <div className='skill-box'>
                    <span className='title'>Digital Marketing</span>
                    <div className='skill-bar'>
                        <span className='skill-per digital'>
                            <span className='tooltiptext'>84%</span>
                        </span>
                    </div>
                    </div>
                    <div className='skill-box'>
                    <span className='title'>Outsourcing/Consulting</span>
                    <div className='skill-bar'>
                        <span className='skill-per outsourcing'>
                            <span className='tooltiptext'>89%</span>
                        </span>
                    </div>
                    </div>
                    <div className='skill-box'>
                    <span className='title'>Graphic Designing</span>
                    <div className='skill-bar'>
                        <span className='skill-per graphic'>
                            <span className='tooltiptext'>98%</span>
                        </span>
                    </div>
                    </div>
                    
                
               </div>
               

        </div>
       
        )
    }
}
export default Experience;