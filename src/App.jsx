
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
const [principle, setPrinciple] = useState(0)
const [rate, setRate] = useState(0)
const [year, setYear] = useState(0)
const [interest, setInterest] = useState(0)
const [invalid, setInvalid] = useState(false)
const [invalidRate, setInvalidRate] = useState(false)
const [invalidYear, setInvalidYear] = useState(false)


const validateInputs=(tag)=>{
  console.log(typeof tag);
  const {name, value} = tag
  console.log(name,value);
  console.log(!!value.match(/^\d+(\.d+)?$/));
  if(name=='principle'){
    setPrinciple(value)
    if(!!value.match(/^\d+(\.d+)?$/)){
      setInvalid(false)
    }else{
      setInvalid(true)
    }
  }else if(name=='rate'){
    setRate(value)
    if(!!value.match(/^\d+(\.d+)?$/)){
      setInvalidRate(false)
    }else{
      setInvalidRate(true)
    }
  }else if(name=='year'){
    setYear(value)
    if(!!value.match(/^\d+(\.d+)?$/)){
      setInvalidYear(false)
    }else{
      setInvalidYear(true)
    }
  }
  
}

const handleCalculate =(e)=>{
  e.preventDefault()
  if(principle && rate && year){
    setInterest(principle*rate*year/100)
  }else{
    alert("please fill the form")
  }

  
}
const handleReset = () =>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInvalid(false)
  setInvalidRate(false)
  setInvalidYear(false)
}
  return (


    <>
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'> 
      <div className='bg-light rounded p-5' style={{width:'600px'}} >
        <h3 className='text-center'>Simple Interest Calculator</h3>
        <p className='text-center'>calculate your simple interest Easily</p>
        <div className='bg-warning p-3 text-light text-center rounded'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interst</p>
        </div>
        <form className='mt-5' >
          {/* principle amount */}
          <div className='mb-3'>
          <TextField value={principle || ""} name='principle' onChange={e=>validateInputs(e.target)} className='w-100' id="outlined-principle" label="Principle Amount " variant="outlined" />
          </div>
          {
            invalid && <div className='text-danger fw-bolder mb-3'>
            invalid principle amount
          </div>
          }
          
             {/* Rate amount */}
             <div className='mb-3'>
          <TextField value={rate || ""} name='rate'  onChange={e=>validateInputs(e.target)} className='w-100' id="outlined-principle" label=" Rate " variant="outlined" />
          </div>
          {
            invalidRate && <div className='text-danger fw-bolder'>
            invalid rate
          </div>
          }
             {/* Year amount */}
             <div className='mb-3'>
          <TextField value={year || ""} name='year'  onChange={e=>validateInputs(e.target)} className='w-100' id="outlined-principle" label="Year " variant="outlined" />
          </div>
          {
            invalidYear && <div className='text-danger fw-bolder'>
            invalid year
          </div>
          }
        </form>
        <Stack direction="row" spacing={2}>
        <Button disabled={invalid || invalidRate || invalidYear} onClick={handleCalculate} type='submit' style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
        <Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">Reset</Button>
        </Stack>
      </div>
    </div>
    </>
  )
}

export default App
