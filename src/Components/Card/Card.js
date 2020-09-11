import React from 'react';
 const Card = ({id,name,description,show,email}) =>{

    const handleDetails = () =>{
       show(id,'Home')
    }

    return(
        
        <div className="dib tc pa3 ma3 bg-light-green grow pointer" onClick={handleDetails} >
            <img alt ="robotpic" src={`https://robohash.org/${id}?size=200x200`}/> 
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}
export default Card