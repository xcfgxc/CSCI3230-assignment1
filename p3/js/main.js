// boy next door 
var list = new Array(3);
for (i = 0; i < list.length; i++) {
  list[i] = new Array(3);
}
var isO = true;

P = console.log;
window.onload = function () {
  var cell = document.getElementsByClassName("cell");
  index = 0;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      list[i][j] = cell[index++];
      el = document.createElement('SPAN');
      el.innerHTML = "";
      el.setAttribute("class", "piece");
      list[i][j].appendChild(el);
      list[i][j].setAttribute('onclick', 'setOX(this)');
    }
  }


}

var fail = false;
var end = false;

function setOX(el) {
  if (!fail & !end) {
    setP = el.childNodes[0];
    if (el.childNodes[0].innerHTML === "") {
      if (isO) {
        el.childNodes[0].innerHTML = 'O';
        el.childNodes[0].classList.add("aim");
        el.childNodes[0].style.color = "blue";
        isO = !isO;
      } else {
        el.childNodes[0].innerHTML = 'X';
        el.childNodes[0].classList.add("aim");
        el.childNodes[0].style.color = "red";
        isO = !isO;
      }
    }
    //horizontal
    for (i = 0; i < 3; i++) {
      row1 = list[i][0].childNodes[0].innerHTML;
      row2 = list[i][1].childNodes[0].innerHTML;
      row3 = list[i][2].childNodes[0].innerHTML;
      if (row1 != '' && row2 != '' && row3 != '') {
        if (row1 == row2) {
          if (row2 == row3) {
            fail = true;
          }
        }
      }
    }
    //vertical
    for (i = 0; i < 3; i++) {
      col1 = list[0][i].childNodes[0].innerHTML;
      col2 = list[1][i].childNodes[0].innerHTML;
      col3 = list[2][i].childNodes[0].innerHTML;
      if (col1 != '' && col2 != '' && col3 != '') {
        if (col1 == col2) {
          if (col2 == col3) {
            fail = true;
          }
        }
      }
    }

    //diagonal
    for (i = 0; i < 3; i++) {
      dia1 = list[0][0].childNodes[0].innerHTML;
      dia2 = list[1][1].childNodes[0].innerHTML;
      dia3 = list[2][2].childNodes[0].innerHTML;
      if (dia1 != '' && dia2 != '' && dia3 != '') {
        if (dia1 == dia2) {
          if (dia2 == dia3) {
            fail = true;
          }
        }
      }
    }

    for (i = 0; i < 3; i++) {
      dia1 = list[0][2].childNodes[0].innerHTML;
      dia2 = list[1][1].childNodes[0].innerHTML;
      dia3 = list[2][0].childNodes[0].innerHTML;
      if (dia1 != '' && dia2 != '' && dia3 != '') {
        if (dia1 == dia2) {
          if (dia2 == dia3) {
            fail = true;
          }
        }
      }
    }

    if (fail) {
      if (isO) {
        alert("X wins.")
      } else {
        alert("O wins.")
      }
    }
    isTie = true;
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        li = list[i][j].childNodes[0].innerHTML;
        if (li == "") {
          isTie = false;
        }
      }
    }
    if (isTie & !fail & !end) {
      alert("Tie");
      end = true;
    }
  }
}

function reset() {
  isO = true;
  fail = false;
  end = false;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      list[i][j].childNodes[0].innerHTML = "";
      list[i][j].childNodes[0].classList.remove("aim");
    }
  }
}
