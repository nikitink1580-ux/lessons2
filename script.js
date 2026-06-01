let points = 0;
let level = 1;

const pointsEl = document.getElementById("points");
const levelEl = document.getElementById("level");
const img = document.getElementById("character");

const stages = [
"https://images.unsplash.com/photo-1494790108377-be9c29b2930?w=700",
"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700",
"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=700",
"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700",
"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700"
];

document.getElementById("clickBtn").addEventListener("click", () => {
    points++;
    pointsEl.textContent = points;

    const newLevel = Math.floor(points / 20) + 1;

    if (newLevel > level) {
        level = newLevel;
        levelEl.textContent = level;

        const stageIndex =
            Math.min(level - 1, stages.length - 1);

        img.src = stages[stageIndex];
    }
});