let display = 0;
let incorrectcount = 0;

let d1 = document.querySelector("#display");
const b1 = document.querySelector(".box1");
const b2 = document.querySelector(".box2")
const b3 = document.querySelector(".box3");

b1.addEventListener("click", () => {
  b2.classList.remove("hide1");
  b3.classList.remove("hide2");
});

let initialTime = 900;

let minutes = Math.floor((initialTime) / 60);
let seconds = initialTime % 60;

const t2 = document.getElementById("minutes");
const t3 = document.getElementById("seconds");

t2.innerHTML = minutes;
t3.innerHTML = seconds;

let countdownFunction = setInterval(function () {
  initialTime--;

  minutes = Math.floor((initialTime) / 60);
  seconds = initialTime % 60;

  t2.innerHTML = minutes;
  t3.innerHTML = seconds;

  if (initialTime < 0) {
    clearInterval(countdownFunction);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);

let b4 = document.querySelector("#h3");
let b5 = document.querySelector(".countdown");
b4.addEventListener("click", () => {
  b5.classList.remove("hide3");
});

let b6 = document.querySelector(".q1");
let b7 = document.querySelector(".container2");
let b8 = document.querySelector("#correct1");
let b9 = document.querySelector("#incorrect1");
let b10 = document.querySelector("#incorrect2");
let b11 = document.querySelector("#incorrect3");
let b12 = document.querySelector(".message");

b4.addEventListener("click", () => {
  b6.classList.remove("hide4");
  b7.classList.remove("hide5");
  correct();
  incorrect1();
  incorrect2();
  incorrect3();
});
function correct() {
  b8.addEventListener("click", () => {
    b8.style.backgroundColor = "green";
    b12.classList.remove("hide6");
    b12.innerText = "🎉correct answer 🎉";
    display++;
    d1.innerText = display;
  })
}

function incorrect1() {
  b9.addEventListener("click", () => {
    b9.style.backgroundColor = "red";
    b8.style.backgroundColor = "green";
    b12.classList.remove("hide6");
    b12.innerText = "incorrect answer😔";

  })
}
function incorrect2() {
  b10.addEventListener("click", () => {
    b10.style.backgroundColor = "red";
    b8.style.backgroundColor = "green";
    b12.classList.remove("hide6");
    b12.innerText = "incorrect answer😔";

  })
}
function incorrect3() {
  b11.addEventListener("click", () => {
    b11.style.backgroundColor = "red";
    b8.style.backgroundColor = "green";
    b12.classList.remove("hide6");
    b12.innerText = "incorrect answer😔";
  })
}
let b13 = document.querySelector(".q2");
let b14 = document.querySelector(".container3");
let b15 = document.querySelector("#correct2");
let b16 = document.querySelector("#incorrect4");
let b17 = document.querySelector("#incorrect5");
let b18 = document.querySelector("#incorrect6");
let b19 = document.querySelector(".message1");

b4.addEventListener("click", () => {
  b13.classList.remove("hide7");
  b14.classList.remove("hide8");
  correct2();
  incorrect4();
  incorrect5();
  incorrect6();
});
function correct2() {
  b15.addEventListener("click", () => {
    b15.style.backgroundColor = "green";
    b19.classList.remove("hide9");
    b19.innerText = "🎉correct answer 🎉";
    display++;
    d1.innerText = display;
  })
}
function incorrect4() {
  b16.addEventListener("click", () => {
    b16.style.backgroundColor = "red";
    b15.style.backgroundColor = "green";
    b19.classList.remove("hide9");
    b19.innerText = "incorrect answer😔";
  })
}
function incorrect5() {
  b17.addEventListener("click", () => {
    b17.style.backgroundColor = "red";
    b15.style.backgroundColor = "green";
    b19.classList.remove("hide9");
    b19.innerText = "incorrect answer😔";
  })
}
function incorrect6() {
  b18.addEventListener("click", () => {
    b18.style.backgroundColor = "red";
    b15.style.backgroundColor = "green";
    b19.classList.remove("hide9");
    b19.innerText = "incorrect answer😔";
  })
}

let b27 = document.querySelector(".q7");
let b28 = document.querySelector(".container5");
let b29 = document.querySelector("#correct4");
let b30 = document.querySelector("#incorrect10");
let b31 = document.querySelector("#incorrect11");
let b32 = document.querySelector("#incorrect12");
let b33 = document.querySelector(".message3");

b4.addEventListener("click", () => {
  b27.classList.remove("hide13");
  b28.classList.remove("hide14");
  correct4();
  incorrect10();
  incorrect11();
  incorrect12();
});
function correct4() {
  b29.addEventListener("click", () => {
    b29.style.backgroundColor = "green";
    b33.classList.remove("hide15");
    b33.innerText = "🎉correct answer 🎉";
    display++;
    d1.innerText = display;
  })
}
function incorrect10() {
  b30.addEventListener("click", () => {
    b30.style.backgroundColor = "red";
    b29.style.backgroundColor = "green";
    b33.classList.remove("hide15");
    b33.innerText = "incorrect answer😔";
  })
}
function incorrect11() {
  b31.addEventListener("click", () => {
    b31.style.backgroundColor = "red";
    b29.style.backgroundColor = "green";
    b33.classList.remove("hide15");
    b33.innerText = "incorrect answer😔";
  })
}
function incorrect12() {
  b32.addEventListener("click", () => {
    b32.style.backgroundColor = "red";
    b29.style.backgroundColor = "green";
    b33.classList.remove("hide15");
    b33.innerText = "incorrect answer😔";
  })
}
let b34 = document.querySelector(".q9");
let b35 = document.querySelector(".container6");
let b36 = document.querySelector("#correct5");
let b37 = document.querySelector("#incorrect13");
let b38 = document.querySelector("#incorrect14");
let b39 = document.querySelector("#incorrect15");
let b40 = document.querySelector(".message4");

b4.addEventListener("click", () => {
  b34.classList.remove("hide16");
  b35.classList.remove("hide17");
  correct5();
  incorrect13();
  incorrect14();
  incorrect15();
});
function correct5() {
  b36.addEventListener("click", () => {
    b36.style.backgroundColor = "green";
    b40.classList.remove("hide18");
    b40.innerText = "🎉correct answer 🎉";
    display++;
    d1.innerText = display;
  })
}
function incorrect13() {
  b37.addEventListener("click", () => {
    b37.style.backgroundColor = "red";
    b36.style.backgroundColor = "green";
    b40.classList.remove("hide18");
    b40.innerText = "incorrect answer😔";
  })
}
function incorrect14() {
  b38.addEventListener("click", () => {
    b38.style.backgroundColor = "red";
    b36.style.backgroundColor = "green";
    b40.classList.remove("hide18");
    b40.innerText = "incorrect answer😔";
  })
}
function incorrect9() {
  b39.addEventListener("click", () => {
    b39.style.backgroundColor = "red";
    b36.style.backgroundColor = "green";
    b40.classList.remove("hide18");
    b40.innerText = "incorrect answer😔";
  })
}

let b41 = document.querySelector(".q11");
let b42 = document.querySelector(".container7");
let b43 = document.querySelector("#correct6");
let b44 = document.querySelector("#incorrect16");
let b45 = document.querySelector("#incorrect17");
let b46 = document.querySelector("#incorrect18");
let b47 = document.querySelector(".message5");

b4.addEventListener("click", () => {
  b41.classList.remove("hide19");
  b42.classList.remove("hide20");
  correct6();
  incorrect16();
  incorrect17();
  incorrect18();
});
function correct6() {
  b43.addEventListener("click", () => {
    b43.style.backgroundColor = "green";
    b47.classList.remove("hide21");
    b47.innerText = "🎉correct answer 🎉";
    display++;
    d1.innerText = display;
  })
}
function incorrect16() {
  b44.addEventListener("click", () => {
    b44.style.backgroundColor = "red";
    b43.style.backgroundColor = "green";
    b47.classList.remove("hide21");
    b47.innerText = "incorrect answer😔";
  })
}
function incorrect17() {
  b45.addEventListener("click", () => {
    b45.style.backgroundColor = "red";
    b43.style.backgroundColor = "green";
    b47.classList.remove("hide21");
    b47.innerText = "incorrect answer😔";
  })
}
function incorrect18() {
  b46.addEventListener("click", () => {
    b46.style.backgroundColor = "red";
    b43.style.backgroundColor = "green";
    b47.classList.remove("hide21");
    b47.innerText = "incorrect answer😔";
  })
}

let b48 = document.querySelector(".q13");
let b49 = document.querySelector(".container8");
let b50 = document.querySelector("#correct7");
let b51 = document.querySelector("#incorrect19");
let b52 = document.querySelector("#incorrect20");
let b53 = document.querySelector("#incorrect21");
let b54 = document.querySelector(".message6");

b4.addEventListener("click", () => {
  b48.classList.remove("hide22");
  b49.classList.remove("hide23");
  correct7();
  incorrect19();
  incorrect20();
  incorrect21();
});
function correct7() {
  b50.addEventListener("click", () => {
    b50.style.backgroundColor = "green";
    b54.classList.remove("hide24");
    b54.innerText = "🎉correct answer 🎉";
    display++;
    d1.innerText = display;
  })
}
function incorrect19() {
  b51.addEventListener("click", () => {
    b51.style.backgroundColor = "red";
    b50.style.backgroundColor = "green";
    b54.classList.remove("hide24");
    b54.innerText = "incorrect answer😔";
  })
}
function incorrect20() {
  b52.addEventListener("click", () => {
    b52.style.backgroundColor = "red";
    b50.style.backgroundColor = "green";
    b54.classList.remove("hide24");
    b54.innerText = "incorrect answer😔";
  })
}
function incorrect21() {
  b53.addEventListener("click", () => {
    b53.style.backgroundColor = "red";
    b50.style.backgroundColor = "green";
    b54.classList.remove("hide24");
    b54.innerText = "incorrect answer😔";
  })
}
let b55 = document.querySelector(".q15");
let b56 = document.querySelector(".container9");
let b57 = document.querySelector("#correct8");
let b58 = document.querySelector("#incorrect22");
let b59 = document.querySelector("#incorrect23");
let b60 = document.querySelector("#incorrect24");
let b61 = document.querySelector(".message7");

b4.addEventListener("click", () => {
  b55.classList.remove("hide25");
  b56.classList.remove("hide26");
  correct8();
  incorrect22();
  incorrect23();
  incorrect24();
});
function correct8() {
  b57.addEventListener("click", () => {
    b57.style.backgroundColor = "green";
    b61.classList.remove("hide27");
    b61.innerText = "🎉correct answer 🎉";
    display++;
    d1.innerText = display;
  })
}
function incorrect22() {
  b58.addEventListener("click", () => {
    b58.style.backgroundColor = "red";
    b57.style.backgroundColor = "green";
    b61.classList.remove("hide27");
    b61.innerText = "incorrect answer😔";
  })
}
function incorrect23() {
  b59.addEventListener("click", () => {
    b59.style.backgroundColor = "red";
    b57.style.backgroundColor = "green";
    b61.classList.remove("hide27");
    b61.innerText = "incorrect answer😔";
  })
}
function incorrect24() {
  b60.addEventListener("click", () => {
    b60.style.backgroundColor = "red";
    b57.style.backgroundColor = "green";
    b61.classList.remove("hide27");
    b61.innerText = "incorrect answer😔";
  })
}

let b62 = document.querySelector(".q17");
let b63 = document.querySelector(".container10");
let b64 = document.querySelector("#correct9");
let b65 = document.querySelector("#incorrect25");
let b66 = document.querySelector("#incorrect26");
let b67 = document.querySelector("#incorrect27");
let b68 = document.querySelector(".message8");

b4.addEventListener("click", () => {
  b62.classList.remove("hide28");
  b63.classList.remove("hide29");
  correct9();
  incorrect25();
  incorrect26();
  incorrect27();
});
function correct9() {
  b64.addEventListener("click", () => {
    b64.style.backgroundColor = "green";
    b68.classList.remove("hide30");
    b68.innerText = "🎉correct answer 🎉";
    display++;
    d1.innerText = display;
  })
}
function incorrect25() {
  b65.addEventListener("click", () => {
    b65.style.backgroundColor = "red";
    b64.style.backgroundColor = "green";
    b68.classList.remove("hide30");
    b68.innerText = "incorrect answer😔";
  })
}
function incorrect26() {
  b66.addEventListener("click", () => {
    b66.style.backgroundColor = "red";
    b64.style.backgroundColor = "green";
    b68.classList.remove("hide30");
    b68.innerText = "incorrect answer😔";
  })
}
function incorrect27() {
  b67.addEventListener("click", () => {
    b67.style.backgroundColor = "red";
    b64.style.backgroundColor = "green";
    b68.classList.remove("hide30");
    b68.innerText = "incorrect answer😔";
  })
}

let b69 = document.querySelector(".q19");
let b70 = document.querySelector(".container11");
let b71 = document.querySelector("#correct10");
let b72 = document.querySelector("#incorrect28");
let b73 = document.querySelector("#incorrect29");
let b74 = document.querySelector("#incorrect30");
let b75 = document.querySelector(".message9");

b4.addEventListener("click", () => {
  b69.classList.remove("hide31");
  b70.classList.remove("hide32");
  correct10();
  incorrect28();
  incorrect29();
  incorrect30();
});
function correct10() {
  b71.addEventListener("click", () => {
    b71.style.backgroundColor = "green";
    b75.classList.remove("hide33");
    b75.innerText = "🎉correct answer 🎉";
    display++;
    d1.innerText = display;
  })
}
function incorrect28() {
  b72.addEventListener("click", () => {
    b72.style.backgroundColor = "red";
    b71.style.backgroundColor = "green";
    b75.classList.remove("hide33");
    b75.innerText = "incorrect answer😔";
  })
}
function incorrect29() {
  b73.addEventListener("click", () => {
    b73.style.backgroundColor = "red";
    b71.style.backgroundColor = "green";
    b75.classList.remove("hide33");
    b75.innerText = "incorrect answer😔";
  })
}
function incorrect30() {
  b74.addEventListener("click", () => {
    b74.style.backgroundColor = "red";
    b71.style.backgroundColor = "green";
    b75.classList.remove("hide33");
    b75.innerText = "incorrect answer😔";
  })
}

let b76 = document.querySelector(".q21");
let b77 = document.querySelector(".container12");
let b78 = document.querySelector("#correct11");
let b79 = document.querySelector("#incorrect31");
let b80 = document.querySelector("#incorrect32");
let b81 = document.querySelector("#incorrect33");
let b82 = document.querySelector(".message10");

b4.addEventListener("click", () => {
  b76.classList.remove("hide34");
  b77.classList.remove("hide35");
  correct11();
  incorrect31();
  incorrect32();
  incorrect33();
});
function correct11() {
  b78.addEventListener("click", () => {
    b78.style.backgroundColor = "green";
    b82.classList.remove("hide36");
    b82.innerText = "🎉correct answer 🎉";
    display++;
    d1.innerText = display;
  })
}
function incorrect31() {
  b79.addEventListener("click", () => {
    b79.style.backgroundColor = "red";
    b78.style.backgroundColor = "green";
    b82.classList.remove("hide36");
    b82.innerText = "incorrect answer😔";
  })
}
function incorrect32() {
  b80.addEventListener("click", () => {
    b80.style.backgroundColor = "red";
    b78.style.backgroundColor = "green";
    b82.classList.remove("hide36");
    b82.innerText = "incorrect answer😔";
  })
}
function incorrect33() {
  b81.addEventListener("click", () => {
    b81.style.backgroundColor = "red";
    b78.style.backgroundColor = "green";
    b82.classList.remove("hide36");
    b82.innerText = "incorrect answer😔";
  })
}
let fin = document.querySelector(".finish");
b4.addEventListener("click", () => {
  fin.classList.remove("hide99");
})
const dis = document.querySelector(".displa2");
let totalscore = document.querySelector(".result");
fin.addEventListener("click", () => {
  totalscore.classList.remove("hide37");
  if (display >= 7) {
    console.log("pass");
    dis.innerText = "you passed this quiz";
  }
  else {
    console.log("not pass");
    let decorate2 =dis.innerText = "you did not pass the quiz";
  }
})



