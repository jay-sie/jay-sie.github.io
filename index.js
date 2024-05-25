const btnlike1 = document.getElementById("btnlikes1")
const btnlike2 = document.getElementById("btnlikes2")
const countlikes1 = document.getElementById("countlikes1")
const countlikes2 = document.getElementById("countlikes2")

function hitlikes1() {
  let totallikes1:number = parseInt(countlikes1.value)+1
  countlikes1.textContent = totallikes1.toString()
}
btnlikes1.addEventlistener("click",hitlikes1)
