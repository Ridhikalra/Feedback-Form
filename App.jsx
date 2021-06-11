import React, { useState } from 'react';
import RightBox from "./components/RightBox.jsx";
import LeftBox from "./components/LeftBox.jsx";
//import 'index.css'

const App = () => {

    let [feedBack,setfeedBack]=useState([]);
    
    return (
        <>
        <div className="section">
            <LeftBox setfeedBack={setfeedBack}/>
            <RightBox feedBack={feedBack}/>
            </div>
        </>
    )

};
export default App;