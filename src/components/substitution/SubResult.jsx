import React from 'react'
import Card from 'react-bootstrap/Card';
import '../cesar/Results.css'

//alphabet, custom, text

export default function SubResult({subData}) {
  const text = subData.text
  const alphabet = subData.custom
   console.log(alphabet)
 let normAlph = "abcdefghijklmnopqrstuvwxyz";
 let result = "";
 //check if the length of inputed alphabet is === 26 w/o duplicates or if an alphabet was inputed
 if((new Set(alphabet).size) !== 26 || alphabet === " "){return false};


  let inputA = text.toLowerCase();

  for(let i = 0; i < inputA.length; i++) {
      let current = inputA[i];
      if(current === " "){result += current};
//match the idex of each letter of input to the equivilent in either the normal alphabet or mixed alphabet 
//push into result 
  let ind = normAlph.indexOf(inputA.charAt(i));
    result += alphabet.charAt(ind);
  }


  return (
    <Card className="result-card mb-4 mx-auto">
    <Card.Header><b>Key:</b> "{alphabet}"</Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          {result}
        </p>
      </blockquote>
    </Card.Body>
  </Card>
  )
}
