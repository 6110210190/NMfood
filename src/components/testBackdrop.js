import Backdrop from '@mui/material/Backdrop';        
import React from 'react'

export const testBackdrop = () => {
  return (
    <div>testBackdrop</div>
    <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >  
            ทดสอบ
          </Backdrop>
  )
}
