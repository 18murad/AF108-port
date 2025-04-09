function appendValue(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = '';
  }
  
  function calculateResult() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);
  
    if (result == undefined && result == null ) {
      document.getElementById("display").value = "sehv";
    } else {
      document.getElementById("display").value = result;
    }
  }