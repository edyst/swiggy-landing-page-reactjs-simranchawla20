import React from 'react'
import Input from '../Input/Input'
import Locate from '../Locate/Locate'
import '../Search/Search.css'

export default function Search() {
    return (
        <div className="searchdiv">
            <Input/>
            <Locate/>
        </div>
    )
}
