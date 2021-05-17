import React from "react";

function Toggle() {
  
  let [isOn, setToOn] = useState(true);

  function handleClick(){
    setToOn((isOn) => {!isOn})

  }
  const color = isOn? "red" : "white";
  return (
  <button style ={{background: color}} onClick = {handleClick}>
     {isOn? "ON": "OFF"}
  </button>
  );
}

export default Toggle;
