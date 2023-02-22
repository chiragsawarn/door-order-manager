import React from 'react'

export default function NoData({message}) {
  return (
    <div className='position-absolute top-50 w-100 text-center text-muted'>{message || "No Data Found!"}</div>
  )
}
