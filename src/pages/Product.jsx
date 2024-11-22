import React, { useContext } from 'react'
import { dataContext } from '../context/Context';

const Product = () => {
  const { correct , score , data} = useContext(dataContext);

  const totalque = data.length;
  const incorrectAns = totalque - score;

  return (
    <div  style={{display:"flex",justifyContent:"center"}}>
      <div style={{padding:"10px"}}>
        <div style={{display:"flex"}}>
        <h2>True Ans:{score}</h2>
        <h2>Wrong Ans:{incorrectAns}</h2>
        </div>
        
      {
        correct.map((ele,i)=>(
          <div style={{backgroundColor: ele.setCorrection ? "green" : "red"}}>
            <div style={{padding:"10px" , border:"1px solid black" , marginBottom:"10px"}}>
            <h3 style={{color:"white"}}>{i + 1}:{ele.question}</h3>
            <div style={{display:"flex"}}>
            <p style={{color:"white"}}>Your Ans:</p><button>{ele.selectedans}</button>
            </div>
            <div style={{display:"flex"}}>
            <p style={{color:"white"}}>Current Ans:</p><button style={{marginLeft:"10px"}}>{ele.correctans}</button>
            </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Product
