const btnlike1 = document.getElementById("btnlike1")
const btnlike2 = document.getElementById("btnlike2")
const countlikes1 = document.getElementById("countlikes1")
const countlikes2 = document.getElementById("countlikes2")

function hitlikes1() {
  let totallikes1 = parseInt(countlikes1.value)+1
  countlikes1.textContent = totallikes1.toString()
}
btnlikes1.addEventlistener("click",hitlikes1)
