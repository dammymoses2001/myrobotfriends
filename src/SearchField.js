import React, { Component } from 'react';


export default function SearchField({SearchField}){
        return(
            <div className="ma3">
            <input 
            className="pa3"
            type="search"
            placeholder="Search Your Robot Here...."
            onChange={SearchField}/>
            </div>
        )
    }
    