document.getElementById("submit").addEventListener("click", function () {
  input();
});

var mark = document.getElementById("mark").value;

function input() {
  var mark = document.getElementById("mark").value;

  if (mark > 100) {
    document.getElementById("error").innerHTML =
      "<i class='bx bxs-bug'></i> Please enter a valid mark";
  } else if (mark < 0) {
    document.getElementById("error").innerHTML =
      "<i class='bx bxs-bug'></i> Please enter a valid mark";
  } else {
    if (mark >= 80 && mark <= 100) {
      document.getElementById("error").innerHTML =
        "<img width='64' height='64' src='https://img.icons8.com/dusk/64/confetti.png' alt='confetti'/> You Got 'A+'";
    } else if (mark >= 70 && mark <= 79) {
      document.getElementById("error").innerHTML =
        "<img width='64' height='64' src='https://img.icons8.com/dusk/64/confetti.png' alt='confetti'/> You Got 'A'";
    } else if (mark >= 60 && mark <= 69) {
      document.getElementById("error").innerHTML =
        "<img width='64' height='64' src='https://img.icons8.com/dusk/64/confetti.png' alt='confetti'/> You Got 'A-'";
    } else if (mark >= 50 && mark <= 59) {
      document.getElementById("error").innerHTML =
        "<img width='64' height='64' src='https://img.icons8.com/dusk/64/confetti.png' alt='confetti'/> You Got 'B'";
    } else if (mark >= 40 && mark <= 49) {
      document.getElementById("error").innerHTML =
        "<img width='64' height='64' src='https://img.icons8.com/dusk/64/confetti.png' alt='confetti'/> You Got 'C'";
    } else if (mark >= 33 && mark <= 49) {
      document.getElementById("error").innerHTML =
        "<img width='64' height='64' src='https://img.icons8.com/dusk/64/confetti.png' alt='confetti'/> You Got 'D'";
    } else {
      document.getElementById("error").innerHTML =
        "<img width='48' height='48' src='https://img.icons8.com/color/48/sad--v1.png' alt='sad--v1'/> You Got 'F'";
    }
  }
}
