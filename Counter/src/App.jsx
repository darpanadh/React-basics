import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [counter,setCounter] = useState(0);
  // increase counter
  const handle1 = ()=>{
    setCounter(counter+1)
  }
  //decrease counter
  const handle2 =()=>{
    if (counter === 0){
      return 0;
    }
    else
      setCounter(counter-1);
  }

  const reset =()=>{
    setCounter(0)
  }

  return (
    <div className="app">
      {/* outer card */}
      <div className="container"> 
        {/*linear gradient */}  
        <div className="total_amount_card" style={{backgroundImage: "linear-gradient(to right, red, blue)"}}>
          {/*svg icon*/}
            <div className="reset_row">
              <button className='reset_btn' onClick={reset}>
              <svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0" fill-rule="evenodd"></path> </g></svg>
              </button>
            </div>
          
          {/* card text */}
          <div className = 'card_text'>
            <h3 className="total_amount_heading">{counter}</h3>
          </div>
        </div>

        {/* buttons */}
        <form>

          <div className="button_collection">
            <Stack spacing={3} direction="row">
              <Button onClick={handle1} variant="contained" className='btn_one'>+</Button>
              <Button onClick={handle2} variant="contained" className='btn_two'>-</Button>
            </Stack>

          </div>
        </form>
      </div>
    </div>
  )
}

export default App
