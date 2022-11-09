import { useState } from 'react';
import './Substitution.css'
import { Link } from 'react-router-dom';

import SubResult from './SubResult'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ExamplePic from "../../assets/shiftexmple.png";
import SherlockExample from "../../assets/dancingmen.png";

export default function Substitution() {

    const initialState = {
        alphabet: "",
        custom: "",
        text: "",
    }

    const [display, setDisplay] = useState(false)
    const [subData, setSubData] = useState({...initialState})

    function handleChange({target}){
        const inputData = {...subData, [target.name]: target.value};
        setSubData(inputData)
    }

    function newClick(){
        setSubData({...initialState});
        setDisplay(false)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDisplay(true)
    }

    //show instructions/backgroud info 
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //shows aphabet input instructions
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        &bull; Exactly 26 characters 
          <br/>
        &emsp;&bull; No duplicates or spaces
          <br/>   
        &bull; Case sensitive
      </Tooltip>
    );

    //generate random alphabet 
    
    function GenerateRandom (){
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+=?';
      let str = characters.split('')
        .sort(() => 0.5 - Math.random())
        .join('');
      subData.custom = str.slice(0,26)
      }

  return (
    <div className='sub'>
    <div className="sub-body">

    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><b>Substitution Cipher</b></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <p>A substitution cipher is a method of encrypting, in which units of plaintext are replaced with the ciphertext, with the help of a key. </p>
            <p>The most common method of substitution replaces the 26 letters of the alphabet where one letter matches only one other.</p>
            <p>An <b>example</b> of a substitution cipher is the <Link to="/cesarshift" target="_blank">Cesar Shift </Link> &thinsp;<b>&ndash;</b> &thinsp;where each letter of a given text is replaced by a letter with a fixed number of positions down the alphabet.</p>
            <img src={ExamplePic} alt="shift example" id="shiftPic"/>
            <p>&#10022; Subtitution ciphers are not limited to alphanumeric values, as long as each letter in the origional text has an equivilent in the used key.</p>
            <p>&#10022; Sherlock Holmes famously decrypted a cipher with a alphabet key using dancing stick figures!</p>
            <img src={SherlockExample} alt="substitution example" id="shiftPic"/>
        </Offcanvas.Body>
      </Offcanvas>
    </>


    <div className="sub-header">
      <h1>Substitution</h1>
    </div>

    <Form id="subGroup" className="mx-auto needs-validation" onSubmit={handleSubmit}>
    <Form.Select id="alph-group" name="alphabet" value={subData.alphabet} onChange={handleChange} aria-label="Choose alphabet option">
      <option>Alphabet Options</option>
      <option value='random'>Generate Random</option>
      <option value='custom'>Custom Alphabet</option>
    </Form.Select>

    {subData.alphabet==='random' ? <GenerateRandom /> : null}
    
    {subData.alphabet==='custom' ?
        <div>
           <Form.Group className="mb-3" id="cesarGroupText" >
                <Row>
                  <Col>
                <Form.Control
                    type="text"
                    name="custom"
                    value={subData.custom}
                    onChange={handleChange}
                    maxLength={26}
                    minLength={26}
                    placeholder="Enter Custom Alphabet"
                />
                  </Col>
                  <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                  <p id='trigger'>&#9432;</p>
                </OverlayTrigger>
                </Col>
              </Row>
            </Form.Group>
        </div>
    : null}
      
    <Form.Group className="mb-3" id="cesarGroupText" >
        <Form.Control 
            as="textarea" 
            name="text"
            value= {subData.text}
            onChange={handleChange}
            rows={3} 
            placeholder="Enter text" 
            required
            />
    </Form.Group>
      
    <div className='cesar-button'>
    <Button className="btn btn-dark col-4 me-2" type="submit">
      Encode 
    </Button>
    
    <Button className="btn btn-dark col-4 me-2" type="submit" onClick={newClick}>
        New
    </Button>
    </div>

    <div id="polyb-info-icon">
      <p onClick={handleShow}>&#9432;</p>
    </div>

    
</Form>
    {display && <SubResult subData={subData} />}

    

    </div>
 </div>
  )
}
