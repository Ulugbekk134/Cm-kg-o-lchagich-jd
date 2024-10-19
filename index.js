document.getElementById("btn").addEventListener("click", function () {
  var input = document.getElementById("input2").value;
  var inputt = document.getElementById("input").value;
  var hisob = input / (inputt / 100) ** 2;
  let qogoz = "";
  if (hisob < 18.5) {
    qogoz = "O'ta kam vazn";
  } else if (hisob >= 18.5 && hisob < 24.9) {
    qogoz = "normal vazn ";
  } else if (hisob >= 24.9 && hisob < 29.9) {
    qogoz = "Ortiqcha vazn ozin brat";
  } else qogoz = "O'tta ortiqcha vazn ozish kerak";
  document.getElementById("p").innerText = qogoz;
});
