import React from 'react'

const box = (props) => {
  console.log("props는",props)
  let result;

  if(props.title === "computer" &&
    props.result !== "tie" &&
    props.result !== ""){
  result = props.result === "win"?"lose":"win"
}
else{
  result = props.result
}
  return (
    <div className={`box ${result}`}>
      <h1 className='main'>{props.title}</h1>
      <h2 className='main'>{props.item && props.item.name}</h2>
      <img className='img' src={props.item && props.item.img}/>
      <h2 className='main'>{result}</h2>
    </div>
  )
}

export default box


