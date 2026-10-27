import { useState } from 'react'    //Using the Hook
// import './App.css'

function Counter(){
  const [count, setCount] = useState(0)

  return(
    <div>
      <h1 className="flex flex-wrap gap-3 shadow-lg justify-center ">Counter</h1>
      <h2 className='flex flex-wrap gap-3 shadow-lg justify-center'>Count: {count}</h2>
      <div>
        <button className='outline-none px-4 py-2 rounded-3xl text-white justify-center bg-blue-500 shadow-lg'
        onClick={() => setCount(count+1)}
        >+ Increment</button>

        <br />
        <br />

        <button className='outline-none px-4 py-2 rounded-3xl text-white bg-blue-500 shadow-lg'
        onClick={() => {
          if(count>0){
            setCount(count-1)
          }
          else{
            setCount(0)
          }
        }}
        > - Decrement</button>
        
        <br />
        <br />

        <button className='outline-none px-4 py-2 rounded-3xl text-white bg-blue-500 shadow-lg'
        onClick={() => {
          if(count != 0){
            setCount(0)
          }
        }}
        >Reset</button>
      </div>
      
    </div>
    
    
  );
}

export default Counter
