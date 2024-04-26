import { useState } from 'react'

import './App.css'


function App() {
         
       let [counter,setCounter] = useState(15);
           
       const addvalue=()=>{

            setCounter(counter+1);
       }
       

       const decvalue=()=>{
                   
        setCounter(counter-1);

       }
  return(<>
  
  <h2>Counter Application</h2>

<h3>Count is: {counter}</h3>

<button onClick={addvalue}>Increase value</button>
<button onClick={decvalue}>decrease value</button>


  
  </>)

  
  
}

export default App
