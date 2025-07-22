function showSurprise() {
  document.getElementById('surprise').classList.remove('hide');
  document.querySelector('button').disabled = true;
  document.querySelector('button').innerText = "Enjoy Your Day!";
}