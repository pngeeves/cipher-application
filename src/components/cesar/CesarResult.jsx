import React from 'react'
import Card from 'react-bootstrap/Card';
import "./Results.css"

// prop => number, text, cesarData.direction

export default function CesarResult({cesarData}) {
  
  const shiftBy = +cesarData.number;
  let alph = "abcdefghijklmnopqrstuvwxyz";
  let output = "";
  let inputA = cesarData.text.toLowerCase();

//check is shift number is in range
  if(shiftBy > 25 || shiftBy < -25 || shiftBy === 0){return false};

//isolate each letter
for (let i = 0; i < inputA.length; i++) {
   let current = inputA[i];

//check for spaces or special characters
  if(current === " " || (/^[a-zA-Z]+$/.test(current) === false)){
        output += current;
        continue;
      }

//seperate encode/decode with value 
//match the index of each letter to corresponding alphabet character
//combine index # with shift value - find how much to shift 
  if(cesarData.direction === "encoded"){
      let curInd = alph.indexOf(current);
      let shiftInd = curInd + shiftBy;

      if(shiftInd > 25) shiftInd -= 26;
      if(shiftInd < 0) shiftInd += 26;
   
      output += alph[shiftInd];

      } else {
        let curInd = alph.indexOf(current);
        let shiftInd = curInd - shiftBy;
      
        if(shiftInd > 25) shiftInd = shiftInd - 26;
        if(shiftInd < 0) shiftInd = 26 + shiftInd;
   
        output += alph[shiftInd];
        }
      }

  return (

    <Card className="result-card mb-4 mx-auto" >
      <Card.Header>"{cesarData.text}" shifted { cesarData.direction==="encoded" ? "right" : "left" } by {shiftBy}</Card.Header>
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
