import React from 'react'
import ReactDOM from 'react-dom'

// function getMood() { 
//   const moods = ['Angry', 'happy', 'sad', 'light', 'silly'];
//   return moods[Math.floor(Math.random() * moods.length)];
// }

// class Attitude extends React.Component { 
//   render() {
//     return (
//       <h1>My mood is : {getMood()}</h1>
//     )
//   }
// }

function getNum() {
  return (Math.floor(Math.random() * 10)) + 1;
}

class LuckyNumber extends React.Component {
  
  render() { 
    const num = getNum();
    return (
      <>
        <h1>My mood is:{ num} </h1>
        <p>{num===7||2? 'Sucess' : 'Fail'}</p>
        
      </>
    )
  }
 }

ReactDOM.render(<LuckyNumber/>,document.getElementById('root'));