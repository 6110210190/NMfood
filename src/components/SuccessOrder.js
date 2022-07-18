import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SuccessOrder = () => {

  return (
    <div>SuccessOrder <br/>
        <Link to= '/'>
            <Button>back</Button> 
        </Link>
       
    </div>
    
  )
}

export default SuccessOrder;