import React,{useState} from 'react';


export default function LeftBox  ( {setfeedBack} ) {
 
    let [good, setgood] = useState(0);
    let [bad, setbad] = useState(0);

    let [fname, setfname] = useState("");
    let [mname, setmname] = useState("");
    let [lname, setlname] = useState("");
    let [review, setreview] = useState("");

    return (
        
            <div className="firstbox">
                <br /><br />
            First Name : <br /><br />
                <input
                    name="fname"
                    type="text"
                    value={fname}
                    placeholder="Enter your first name here"
                    onChange={e => { setfname(e.target.value); }}/>


                <br/><br />

            Middle Name :<br /><br />
                <input
                    name="mname"
                    type="text"
                    value={mname}
                    placeholder="Enter your middle name here"
                    onChange={e => { setmname(e.target.value); }}
                />
                <br /><br />

            Last Name : <br /><br />
                <input
                    name="lname"
                    type="text"
                    value={lname}
                    placeholder="Enter your last name here"
                    onChange={e => { setlname(e.target.value); }}
                />
                <br /><br />

            Suggestions : <br /><br />
                <input
                    name="review"
                    type="text"
                    value={review}
                    placeholder="Tell us your thoughts here"
                    onChange={e => { setreview(e.target.value); }}
                />
                <br /><br />
                
                    {good}  <button onClick={e => { setgood(good + 1); }}>Like 👍</button>

                    {bad}   <button onClick={e => { setbad(bad + 1); }}>Dislike 👎</button>
                <br /><br/>

                <button onClick={e=>{
                    if(fname==='' || lname==='' || review==='')
                        alert("FILL THE FIELDS")
                    else if(fname.length>40 || mname.length>40 || lname.length>40 || review.length>40)
                    {
                        alert("ENTER LESS THAN 40 CHARACTERS IN A PARTICULAR FIELD");
                    }
                    else{
                    setfeedBack((list)=>{
                                                return [
                                                        ...list,
                                                        {
                                                            firstname: fname,
                                                            middlename: mname,
                                                            lastname: lname,
                                                            post: review
                                                        }
                                                    ];
                                                }
                                            );
                                
                                            setfname("");
                                            setmname("");
                                            setlname("");
                                            setreview("");
                                            }
                                        }

                } >ADD MY SUGGESTION</button>
                   
                    
            </div>
        
    )

 }
