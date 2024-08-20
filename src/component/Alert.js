import React from 'react'

export default function Alert(props) {
  return ( 
    <div style={{height:"25px", paddingTop:"10px"}}>{props.alerttext &&
      <div className={`alert ${props.alerttext.typ} alert-dismissible fade show mx-2 d-flex align-items-center`} role="alert" style={{height: '40px'}}>
  <strong>{props.alerttext.typ}</strong> {props.alerttext.mes}
</div>

}</div>

  )
}
