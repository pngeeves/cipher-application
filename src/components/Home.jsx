import React from 'react'
import "./Home.css"

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

import Cesar from '../assets/cesar-card.png'
import Poly from '../assets/polyb-card.png'
import Sub from '../assets/sub-card.png'
import { Link } from 'react-router-dom';


export default function Home() {

return (
  <div className='home-overlay'>
  <div className='home-body'>
    <div className='flex-1'>
    <div className="home-header">
      <h1>Grand Cipher</h1>
    </div>
    </div>

<div className='flex-2'>
<div className='card-container'>
  <Card className="home-card bg-light text-black" style={{ width: '18rem' }}>
    <Card.Img id="card-img" src={Cesar} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title><b>Cesar Shift</b></Card.Title>
        <Link to="./cesarshift">
          <Button id="home-btn" className="btn btn-dark" ><p>&#8620;</p></Button>
        </Link>
      </Card.ImgOverlay>
    </Card>

    <Card className="home-card bg-light text-black" style={{ width: '18rem' }}>
    <Card.Img id="card-img" src={Poly} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title><b>Polybius Square</b></Card.Title>
        <Link to="./polybius">
          <Button id="home-btn" className="btn btn-dark" ><p>&#8620;</p></Button>
        </Link>
      </Card.ImgOverlay>
    </Card>

    <Card className="home-card bg-light text-black" style={{ width: '18rem' }}>
    <Card.Img id="card-img" src={Sub} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title><b>Substitution</b></Card.Title>
        <Link to="./substitution">
          <Button id="home-btn" className="btn btn-dark" ><p>&#8620;</p></Button>
        </Link>
      </Card.ImgOverlay>
    </Card>
</div>
</div>
</div>
</div>
  )
}
