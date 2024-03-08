import { useState } from 'react'
import './Square.css'

function Square({ value, onclick }) {

  return (
    <button
      className="square"
      onClick={onclick}
      id={value}
    >
      {value}
    </button>
  );
}

export default Square