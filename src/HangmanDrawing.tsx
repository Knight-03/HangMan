import  { useState, useEffect } from 'react';
import smile from "./Images/smile.gif"
import sad from "./Images/sad.gif"
import cry from "./Images/cry.gif"
function Part(emoji:string) {
    const HORIZON = (
        <div style={{
            height:"10px",
            width: "230px",
            background:"#015d6d",
            marginLeft : "145px"
        }}/>
    )
    
    const VENTRICLE = (
        <div style={{
            height:"50px",
            width: "10px",
            background:"#015d6d",
            position:"absolute",  
            top : 0,
            right : 0,
        }}/>
      
    )
    const HEAD = (
        <div 
            style={{
                width: '60px',
                height: '60px',
                borderRadius: '100%',
                background: `url(${emoji}) center center`,
                border: '4px solid #015d6d',
                position: 'absolute',
                top: '50px',
                right: '-30px',
            }}
        />
    )
    const BODY = (
        <div 
            style={{
                width: '10PX',
                height : "100PX", 
                position: "absolute",
                background : "#015d6d",
                top : "115px",
                right: 0,
    
            }}
        />
    )
    const RIGHT_ARM = (
        <div 
            style={{
                width: '100PX',
                height : "10PX", 
                position: "absolute",
                background : "#015d6d",
                top : "150px",
                right: "-100px",
                rotate : "-30deg",
                transformOrigin:"left bottom",
            }}
        />
    )
    const LEFT_ARM = (
        <div 
            style={{
                width: '100PX',
                height : "10PX", 
                position: "absolute",
                background : "#015d6d",
                top : "150px",
                right: "10px",
                rotate : "30deg",
                transformOrigin:"right bottom",
            }}
        />
    )
    const RIGHT_LEG = (
        <div 
            style={{
                width: '100PX',
                height : "10PX", 
                position: "absolute",
                background : "#015d6d",
                top : "205px",
                right: "-90px",
                rotate : "60deg",
                transformOrigin:"left bottom",
            }}
        />
    )
    const LEFT_LEG = (
        <div 
            style={{
                width: '100PX',
                height : "10PX", 
                position: "absolute",
                background : "#015d6d",
                top : "205px",
                right: 0,
                rotate : "-60deg",
                transformOrigin:"right bottom",
            }}
        />
    )
    return [HORIZON, VENTRICLE, HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG ,LEFT_LEG];
}


type HangmanDrawingProps = {
    numberOfGuesses : number
}

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    
    const [emoji, setEmoji] = useState(String);
    const BODY_PARTS = Part(emoji);  

    useEffect(() => {
      if (numberOfGuesses >= 2) {
        setEmoji(smile);
      } 
      if (numberOfGuesses >= 6) {
        setEmoji(sad);
      } 
      if(numberOfGuesses >= 8) {
        setEmoji(cry);
      }
    }, [numberOfGuesses]);
  
    return (
      <div style={{ 
            position: 'absolute', 
            top:"180px",
            left:"98px"
            
        }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
  
        <div
          style={{
            height: '400px',
            width: '10px',
            background: '#015d6d',
            marginLeft: '145px',
          }}
        />
  
        <div
          style={{
            height: '10px',
            width: '300px',
            background: '#015d6d',
          }}
        />
      </div>
    );
}
  
export default HangmanDrawing;