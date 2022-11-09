import './Cesarshift.css'
import { useState } from 'react';
import CesarResult from './CesarResult';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';

import ExamplePic from "../../assets/shiftexmple.png";
import { Link } from 'react-router-dom';

/* Keep track of:
        if its encrypt or decrypt / how many to shift # / what the text input is 
*/

export default function Cesarshift() {

  const initialState = {
    number: "",
    text: "",
    direction: "encoded",
  }

  const [display, setDisplay] = useState(false)
  const [cesarData, setCesarData] = useState({...initialState})

  function handleChange({target}){
    const inputData = {...cesarData, [target.name]: target.value};
    setCesarData(inputData)
  }
  function newClick(){
    setCesarData({...initialState});
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
    <div className="cesar-body">
    <>
      <Offcanvas show={show} onHide={handleClose}>
        
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><b>Cesar Shift</b></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>The Caesar Shift Cipher technique is one of the earliest and simplest methods of encryption technique. </p>
          <p>It's simply a type of <Link to="/substitution" target="_blank">substitution cipher</Link>, where each letter of a given text is replaced by a letter with a fixed number of positions down the alphabet.</p>
          <p><b>For example</b> with a shift of 3, A would be replaced by D, B would become E, and so on...</p>
          <img src={ExamplePic} alt="shift example" id="shiftPic"/>
          
          <p>&#9755; <b>"Encode"</b> will shift the inputed text <i>RIGHT</i></p>
          <p>&#9754; <b>"Decode"</b> will shift the inputed text <i>LEFT</i></p>
          <p>&#10022; Special characters <b>(! @ # $)</b> will not be modified</p>
          <p>&#10022; Shift number must be between 1 and 25</p>
          <p>&#10022; All outputs will be in lower case</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>


    <div className="cesar-header">
      <h1>Cesar Shift </h1>
    </div>

    
    <Form id="cesarGroup" className="mx-auto needs-validation" onSubmit={handleSubmit}>
      
      <div className='group-row-1'>
        <div className='indv-col-1'>
          <Form.Select name="direction" value={cesarData.direction} onChange={handleChange} aria-label="ecode or decode" className="mb-3" id="cesar-dropdown">
            <option value="encoded" >Shift Right (&#9755;)</option>
            <option value="decoded">Shift Left (&#9754;)</option>
          </Form.Select>
        </div>
        <div className='indv-col-2'>
          <InputGroup className="mb-3" id="cesarGroupNumber">
            <InputGroup.Text id="inputGroup-sizing-sm">Shift by</InputGroup.Text>
            <Form.Control 
              type="number" 
              placeholder="#" 
              name="number"
              value= {cesarData.number}
              onChange={handleChange}
              max="25"
              min="1"
              required
              />
          </InputGroup>
          </div>
       </div>
      
      <Form.Group className="mb-3" id="cesarGroupText" >
        <Form.Control 
            as="textarea" 
            name="text"
            value= {cesarData.text}
            onChange={handleChange}
            rows={4} 
            placeholder="Enter text" 
            required
            />
      </Form.Group>
      
    <div className='cesar-button'>
    <Button className="btn btn-dark col-4 me-2" type="submit">
      { cesarData.direction==="encoded" ? "Shift Right" : "Shift Left" } 
    </Button>
    
    <Button className="btn btn-dark col-4 me-2" type="submit" onClick={newClick}>
        New
    </Button>
    </div>

    <div id="info-icon">
      <p onClick={handleShow}>&#9432;</p>
    </div>

    </Form>
    
    {display && <CesarResult cesarData={cesarData} />}
    </div>
  )
}
