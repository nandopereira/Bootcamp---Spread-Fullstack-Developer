import React, { useState, useEffect } from 'react'
import '../Ifoodcounter/Ifoodcounter.css'

export default function Ifoodcounter() {
  const [value, setValue] = useState(1)
  const [buttonStyle, setbuttonStyle] = useState('counter-button-minus-active')

  useEffect(() => {
    console.log(`o estilo do botão atual é ${buttonStyle}`)
  }, [buttonStyle])

  function down() {
    if (value <= 1) {
      setbuttonStyle('counter-button-minus-desactive')
    }

    if (value > 0) {
      setValue(value - 1)
    }
  }

  function up() {
    setValue(value + 1)
    setbuttonStyle('counter-button-minus-active')
  }

  return (
    <div className="countex-wrapper">
      <button className={buttonStyle} onClick={down}>
        -
      </button>
      <p>{value}</p>
      <button className="counter-button-plus-active" onClick={up}>
        +
      </button>
      <button id="coin">12,00</button>
    </div>
  )
}
