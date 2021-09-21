import React from 'react'
import Search from '../Search/Search'
import Button from '../Button/Button'
import '../Searchbar/Searchbar.css'

export default function Searchbar() {
    return (
        <div className="searchbardiv">
            <Search/>
            <Button btncls="orangebtn" btntext="FIND FOOD"/>
        </div>
    )
}
