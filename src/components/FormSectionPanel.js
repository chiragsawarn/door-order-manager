import React from 'react'

export default function FormSectionPanel({heading, children}) {
  return (
    <div className='col-md-8 mx-auto mt-3 bg-light shadow-sm rounded'>
        <div className='ps-4 py-2 rounded-top' style={{backgroundColor:"#E4E4E4", color:"#34495E"}}>{heading}</div>
        <div >{children}</div>
    </div>
  )
}
