let score = 0;
const correctAnswer = 7;

const blocks = document.querySelectorAll(".choices .block");
const scoreBox = document.querySelector(".topbar div");

blocks.forEach(block => {
    block.style.cursor = "pointer";

    block.addEventListener("click", () => {
        const value = Number(block.textContent);

        if (value === correctAnswer) {
            score += 10;
            scoreBox.textContent = "⭐ คะแนน : " + score;
            document.getElementById("message").textContent =
"🎉 ถูกต้อง +10 คะแนน";
        } else {
            document.getElementById("message").textContent =
"❌ ลองใหม่";
        }
    });
});
