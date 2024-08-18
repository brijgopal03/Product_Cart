import React from 'react';

export default function Footer(props) {
  return (
    <div className = 'row fixed-bottom'>
      <div className="btn btn-danger col-2" onClick={() => props.resetQuantity()}>
        Reset
      </div>
       <div className = 'col-8 bg-dark text-white text-center'>
          {props.totalAmount}
       </div>
       <div className="btn btn-primary col-2">Pay Now</div>
    </div>
  )
}
