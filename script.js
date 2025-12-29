const typedText = document.getElementById("typed");
const phrases = ["QA Engineer", "Manual Tester", "Automation Tester", "Test Analyst"];
let i = 0, j = 0;
let isDeleting = false;

function type() {
  const current = phrases[i];
  if (isDeleting) {
    typedText.textContent = current.substring(0, j--);
  } else {
    typedText.textContent = current.substring(0, j++);
  }

  if (!isDeleting && typedText.textContent === current) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && typedText.textContent === "") {
    isDeleting = false;
    i = (i + 1) % phrases.length;
    j = 0;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 80 : 150);
  }
}

type();
