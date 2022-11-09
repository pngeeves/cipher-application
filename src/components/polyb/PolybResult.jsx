import React from 'react'
import Card from 'react-bootstrap/Card';
import '../cesar/Results.css'

export default function Polybresult({polybData}) {
    const text = polybData.text;


    let inputArr = text.split("")
    
    let noSpaceArr = inputArr.filter(noSpace => noSpace !== " ");
    if(polybData.direction!=="encoded" && (noSpaceArr.length) % 2 === 1){return false};


  //declare two objects with swiched keys so to reference them for encoding or decoding 
  //encoder object sould both have 42 as the value
  //decoder object should return 'i/j' for key 42
  const encoder = { 'a': '11', 'b': '21', 'c': '31', 'd': '41', 
    'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i': '42','j': '42','k': '52', 'l': '13', 
    'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44',
    'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };
    
  const decoder = { '11': 'a', '21': 'b', '31': 'c', '41': 'd', 
    '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k', '13': 'l', 
    '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', 
    '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };

//declare value to hold either the encoder or decoder objects based on if encode is true or not 
const direction = polybData.direction==="encoded" ? encoder :decoder ;
//use match and reg expressions to put vslues into an array - numbers should be matched by two intigers
//use map to pull the values of the matching keys from either encoder or decoder
 let output = text
        .match(/[0-9]{2}|[a-z]|\s/g)
        .map(character => direction[character] || character)
        .join("");
    
  return (
    <Card className="result-card mb-4 mx-auto" >
    <Card.Header>"{text}"</Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          {output}
        </p>
      </blockquote>
    </Card.Body>
  </Card>
  )
}
