import './App.css';
import React, { useState } from 'react';
import './Inc.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
const App = () => {
    const [count, setCount] = useState(0);
    const incr = () =>{
        setCount( count + 1);
    }
const dicr = () =>{
    if (count > 0) {
        setCount( count - 1);
    }
    else{
        alert("sorry , zero not reach")
        setCount(0)
    };
    
}
    return (
        <div>
            <div className='background'>
                <div className='center'>
                    <br />
                    <br />
                    <div className='count'>
                        <h1>{count}</h1>
                    </div>
                    <div className='btn-section'>
                      <Tooltip title="Add">
                          <Button className='btn-INC' onClick={incr}><AddIcon/></Button>
                      </Tooltip>
                      <Tooltip title="Delete">
                          <Button className='btn-DiC' onClick={dicr}><DeleteIcon/></Button>
                      </Tooltip>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};


export default App;
