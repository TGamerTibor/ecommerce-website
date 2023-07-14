var remoweCartItemButtons = document.getElementsByClassName('span')
console.log(remoweCartItemButtons)
for (var i = 0; i < remoweCartItemButtons.lenght; i++) {
  var button = remoweCartItemButtons[i]
  button.addEventListener('click', function(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
  })
}