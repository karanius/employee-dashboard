import React from 'react';
import './row.styles.scss';

const Row = ({name , email, phone}) => {

  return (
    <div className="Row-wrapper">
      <div className="row">
        {name}
      </div>
      <div className="row">
        {email} 
      </div>
      <div className="row">
        {phone}
      </div>
    </div>
  )
}

export default Row;