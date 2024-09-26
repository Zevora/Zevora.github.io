
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

const Running = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    });
    
    return (
        <>
        <div className='container running-page'>
                <h1 className='page-title'>    
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={'Running Page'.split('')}
                        index={15}
                        />
                        
                </h1>
            <div className='text-zone'>
            <p>This is the text zone</p>
                
            </div>
        </div>
        <Loader type='pacman' />    
        </>
    )

}

export default Running;