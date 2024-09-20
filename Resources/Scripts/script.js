const elementArray = [document.getElementById('Apple'), document.getElementById('Google'), document.getElementById('Samsung'), document.getElementById('Microsoft')]
const inputBox = document.getElementById("input")
const updateText = () => {
  for (let i = 0; i < elementArray.length; i++) {
    elementArray[i].innerHTML = inputBox.value;
  }
}
inputBox.addEventListener('input', updateText)