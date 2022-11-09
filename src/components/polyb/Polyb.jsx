import React from 'react';
import "./Polyb.css";
import Polybresult from './PolybResult';

import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';

import PolybExample from "../../assets/polybexample.png"


export default function Polyb() {

    const initialState = {
        text: "",
        direction: "encoded",
    }
    
    const [display, setDisplay] = useState(false)
    const [polybData, setPolybData] = useState({...initialState})
    
    function handleChange({target}){
        const inputData = {...polybData, [target.name]: target.value};
        setPolybData(inputData)
    }

    function newClick(){
        setPolybData({...initialState});
        setDisplay(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDisplay(true)
    }
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="polyb-body">
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><b>Polybius Square</b></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <p>A Polybius Square is a table that allows someone to convert letters into numbers.</p>
            <p>It was origionally invented by the ancient Greeks Cleoxenus and Democleitus, and made famous by the historian and scholar Polybius. </p>
            <p>Following the grib below, each letter will be converted to a number representing their location.</p>
            <p><b>For example</b> A would be replaced by 11, B by 21, C by 31, and so on... </p>
            <img src={PolybExample} alt="polybius-example" style={{width:'100%'}} />
            <p>&#10022; Decoded text will not include special characters <b>(! @ # $)</b></p>
            <p>&#10022; Letters "i" and "j" will both be replaced 44 </p>
            <p>&#10022; To decode, total character count must be even</p>
            <p>&#10022; All decoded text will be returned in lower-case</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>


    <div className="polyb-header">
      <h1>Polybius Square</h1>
    </div>

    <Form id="polybGroup" className="mx-auto needs-validation" onSubmit={handleSubmit}>
      
        <Form.Select name="direction" value={polybData.direction} onChange={handleChange} aria-label="ecode or decode" className="mb-3" id="cesar-dropdown">
            <option value="encoded" >Encode text to number</option>
            <option value="decoded">Decode number to text</option>
        </Form.Select>
      
      <Form.Group className="mb-3" id="cesarGroupText">
        <Form.Control 
            as="textarea" 
            name="text"
            value= {polybData.text}
            onChange={handleChange}
            rows={4} 
            placeholder={ polybData.direction==="encoded" ? "Enter Text" : "Enter Numbers" } 
            required
            />
      </Form.Group>
      
    <div className='cesar-button'>
    <Button className="btn btn-dark col-4 me-2" type="submit">
      { polybData.direction==="encoded" ? "Encode" : "Decode" } 
    </Button>
    
    <Button className="btn btn-dark col-4 me-2" type="submit" onClick={newClick}>
        New
    </Button>
    </div>

    <div id="polyb-info-icon">
      <p onClick={handleShow}>&#9432;</p>
    </div>

    </Form>

    {display && <Polybresult polybData={polybData} />}
    </div>
  )
}
