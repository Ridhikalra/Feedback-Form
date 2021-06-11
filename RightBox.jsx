import React from 'react';

const RightBox=({feedBack})=>
{
    return(
        <>
       
            <div className="secondbox">
            
                {feedBack.map((d)=>{
                return (
                    <>
                        <br/>
                        <div className="feed">
                        <h3>{d.firstname} {d.middlename} {d.lastname}  {d.post}</h3>
                        </div>
                    
                    </>
                );})}
            </div>

        
        </>
    )
};
export default RightBox;