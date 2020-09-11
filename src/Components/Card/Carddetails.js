import React from 'react';
import Card from './Card';
 const CardDetails = ({robots,show}) =>{
    return(
        <div className="tc">
            {/* {console.log(description[1].body)} */}
            {robots.map(robot=>
        <Card  key={robot.id} id={robot.id} email={robot.email} name={robot.name} show={show} description={robot.body} />
        )}
        </div>
    )
}
export default CardDetails