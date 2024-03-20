import React, { useEffect, useRef } from 'react';
import './Search.css';
import { init } from 'ityped';

function Search() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false,
            strings: ["Internship & Training", "Web Development", "App Development", "Digital Marketing", "Consulting", "Graphic Designing" ] 
        });
    }, []);

    return (
      
        <div className='imageContainer'>
            <div className='logo'>
                {/* Logo can go here */}
            </div>
            <div className='heading'>
                <div className='left'>
                    <div className='wrapper'>
                        <h5>WelCome <span ref={textRef}></span></h5><br/>
                        <p1>Ensuring the best return on investment for your bespoke Internship and Training.</p1>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default Search;