import React, { useState } from 'react'

export default function About() {
    const [mystyle, setfirst] = useState({color:'Navy',
    backgroundColor:'LightCyan'})
    const [buttontext, setbuttontext] = useState("Dark mood");
    const [moodstyle, setmood] = useState({backgroundColor:'RoyalBlue',color:"white"})
    const togglestyle = ()=>{
        if (mystyle.color === "Navy") {
            setfirst({color:'white',
        backgroundColor:'RoyalBlue'});
        setbuttontext("Light mood");
        setmood({backgroundColor:'LightCyan',color:"Navy"})
        }
        else{
            setfirst({color:'Navy',
            backgroundColor:'LightCyan'});
            setbuttontext("Dark mood")
        setmood({backgroundColor:'RoyalBlue',color:"white"})
            
        }
    };
    
  return (
    <div className='container my-5 py-1' style={mystyle}>
        <h2 className='my-3'>About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        style={mystyle}
      >
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        any of this with custom CSS or overriding our default variables. It's
        also worth noting that just about any HTML can go within the{" "}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
        style={mystyle}
      >
        <strong>Free to use</strong>
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
        style={mystyle}
      >
        <strong>Browser comppatible</strong>
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
</div>
<button type="button" class="btn btn-warning my-3" onClick={togglestyle} style={moodstyle}>{buttontext}</button>
    </div>
  )
}
