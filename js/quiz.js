const correctAnswers = ['c', 'a', 'b', 'b', 'b'];

document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("quizForm");

  // Cek dan tangani form quiz
  if (quizForm) {
    quizForm.addEventListener("submit", function (e) {
      e.preventDefault();

      correctAnswers.forEach((correct, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const feedback = document.getElementById(`feedback-q${index}`);

        if (!feedback) return;

        if (!selected) {
          feedback.textContent = "Pilih salah satu jawaban.";
          feedback.className = "feedback incorrect";
        } else if (selected.value === correct) {
          feedback.textContent = "Benar!";
          feedback.className = "feedback correct";
        } else {
          feedback.textContent = `Salah. Jawaban benar: ${correct.toUpperCase()}`;
          feedback.className = "feedback incorrect";
        }
      });
    });
  }

  // Tangani tombol kembali ke home
  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      window.location.href = "../index.html"; // Ganti path jika perlu
    });
  }
});
