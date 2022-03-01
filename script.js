function convertTemperature(){
  let val = document.getElementById("input_value");
  let result = document.getElementById("result");
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  val.addEventListener("keyup", convertTemperature);
  input.addEventListener("change", convertTemperature);
  output.addEventListener("change", convertTemperature);

  let inputValue = input.value;
  let outputValue = output.value;

  //Celsius
  if(inputValue === "celsius" && outputValue === "fahrenheit"){
    result.value = Number((val.value) * 9/5) + 32;
  }else if(inputValue === "celsius" && outputValue === "kelvin"){
    result.value = Number(val.value) + 273.15;
  }else if(inputValue === "celsius" && outputValue === "rankine"){
    result.value = Number((val.value) * 9/5) + 491.67;
  }else if(inputValue === "celsius" && outputValue === "reaumur"){
    result.value = Number(val.value) * 0.8;
  }else if(inputValue === "celsius" && outputValue === "celsius"){
    result.value = val.value;
  }


  //Fahrenheit
  if(inputValue === "fahrenheit" && outputValue === "celsius"){
    result.value = Number((val.value - 32) * 5) / 9;
  }else if(inputValue === "fahrenheit" && outputValue === "kelvin"){
    result.value = Number((val.value - 32) * 5/9) + 273.15;
  }else if(inputValue === "fahrenheit" && outputValue === "rankine"){
    result.value = Number(val.value) + 459.67;
  }else if(inputValue === "fahrenheit" && outputValue === "reaumur"){
    result.value = Number(val.value -32) / 2.25;
  }else if(inputValue === "fahrenheit" && outputValue === "fahrenheit"){
    result.value = val.value;
  }


  //Kelvin
  if(inputValue === "kelvin" && outputValue === "celsius"){
    result.value = Number(val.value) - 273.15;
  }else if(inputValue === "kelvin" && outputValue === "fahrenheit"){
    result.value = Number((val.value - 273.15) * 9/5) + 32;
  }else if(inputValue === "kelvin" && outputValue === "rankine"){
    result.value = Number(val.value) * 1.8;
  }else if(inputValue === "kelvin" && outputValue === "reaumur"){
    result.value = Number(val.value - 273.15) / 1.25;
  }else if(inputValue === "kelvin" && outputValue === "kelvin"){
    result.value = val.value;
  }


  //Rankine
  if(inputValue === "rankine" && outputValue === "celsius"){
    result.value = Number((val.value - 491.67) * 5) / 9;
  }else if(inputValue === "rankine" && outputValue === "fahrenheit"){
    result.value = Number(val.value - 459.67);
  }else if(inputValue === "rankine" && outputValue === "kelvin"){
    result.value = Number(val.value) / 1.8;
  }else if(inputValue === "rankine" && outputValue === "reaumur"){
    result.value = Number(val.value -32 -459.67) /2.25;
  }else if(inputValue === "rankine" && outputValue === "rankine"){
    result.value = val.value;
  }


  //Reaumur
  if(inputValue === "reaumur" && outputValue === "celsius"){
    result.value = Number(val.value * 5) / 4;
  }else if(inputValue === "reaumur" && outputValue === "fahrenheit"){
    result.value = Number(val.value * 2.25) + 32;
  }else if(inputValue === "reaumur" && outputValue === "kelvin"){
    result.value = Number(val.value * 1.25) + 273.15;
  }else if(inputValue === "reaumur" && outputValue === "rankine"){
    result.value = Number(val.value * 2.25) + 32 +459.67;
  }else if(inputValue === "reaumur" && outputValue === "reaumur"){
    result.value = val.value;
  }


}

function reset(){
  convertTemperature();
}