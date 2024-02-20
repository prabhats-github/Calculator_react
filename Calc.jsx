import React, { useState } from 'react'
import st from './Calc.module.css'

const Calc = () => {

  let [value,setValue]=useState("")

  function handle(e){
    setValue(value +e.target.innerHTML)
  }

  function eql(){
    setValue(eval(value))
  }

  let del=()=>{
    setValue("")
  }
  return (
    <div className={st.maindiv}>
        <div className={st.input}>
            <input type="text" placeholder={value} />
        </div >
        <div id={st.one}>
        <div className={st.four} onClick={handle}>+</div>
        <div className={st.four} onClick={handle}>-</div>
        <div className={st.four} onClick={handle}>*</div>
        <div className={st.four} onClick={handle}>/</div>
        </div>

        <div id={st.equal} onClick={eql}>=</div>
        
        <div id={st.two}>
        <div className={st.four} onClick={handle}>7</div>
        <div className={st.four} onClick={handle}>8</div>
        <div className={st.four} onClick={handle}>9</div>
        
        </div>

        <div id={st.three}>
        <div className={st.four} onClick={handle}>4</div>
        <div className={st.four} onClick={handle}>5</div>
        <div className={st.four} onClick={handle}>6</div>
        </div>
 

        <div id={st.four}>
        <div className={st.four} onClick={handle}>1</div>
        <div className={st.four} onClick={handle}>2</div>
        <div className={st.four} onClick={handle}>3</div>
        </div>


        <div id={st.five}>
        <div className={st.four} onClick={handle} >0</div>
        <div className={st.four} onClick={handle}>.</div>
        <div className={st.four} onClick={del}>AC</div>

        </div>


    </div>
  )
}

export default Calc