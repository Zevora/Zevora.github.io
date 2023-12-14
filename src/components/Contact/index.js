import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_fn6y24s',
                'contact_form',
                refForm.current,
                'JnB48VogBP_0MONia'
                )
            .then(
                () => {
                    alert('Message sent successfully!')
                    window.location.reload(false)
                },
                () => {
                    alert('Message failed to send, please try again')
                }
            )
    }

    return (
        <>

            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        index={15}
                        />
                    </h1>
                    <p>
                        I am interested in Web Development, Software Development and Game Design - especially ambitious or large projects. I am also interested in learning new technologies and languages.
                        If you are interested in working with me, or have any questions, please feel free to contact me.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="from_name" placeholder="Name" required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            <div className='info-map'>
                Lyan Peña
                <br/>
                United States
                <br/>
                Florida
                <br/>
                <span>lyanpena@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[28.11, -80.64]} zoom={9} >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[28.11, -80.64]}>
                        <Popup>
                            Development Environment
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            </div>
            <Loader type='pacman' />

        </>

    )
}

export default Contact