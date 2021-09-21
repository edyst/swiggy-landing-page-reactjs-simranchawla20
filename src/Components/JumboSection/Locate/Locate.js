import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
// import {faLocation} from '@fortawesome/free-brands-svg-icons';
import '../Locate/Locate.css'

export default function Locate() {
    return (
        <div className="Locatediv">
            <FontAwesomeIcon icon={faCoffee} color="white" size="lg" className="locateicon"/>
            <p className="locateme">Locate Me</p>
        </div>
    )
}
