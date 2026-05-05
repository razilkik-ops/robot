const robots = {
  impulse: {
    name: "Impulse Bot",
    mode: "Momentum tracking",
    details:
      "Активная стратегия для трендового рынка: быстрый вход, сопровождение импульса и уведомления по ключевым событиям.",
  },
  grid: {
    name: "Grid Pro",
    mode: "Hybrid range control",
    details:
      "Сбалансированный робот для трейдеров, которым нужна автоматизация без резких ручных решений.",
  },
  safe: {
    name: "Safe Start",
    mode: "Capital protection",
    details:
      "Консервативный сценарий для аккуратного старта: лимиты риска, плавное сопровождение и приоритет защиты депозита.",
  },
};

const strategyName = document.getElementById("strategyName");
const strategyMode = document.getElementById("strategyMode");
const strategyDetails = document.getElementById("strategyDetails");

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const robot = robots[button.dataset.robot];

    if (!robot) {
      return;
    }

    document.querySelectorAll(".tab-button").forEach((item) => {
      item.classList.remove("is-active");
    });

    button.classList.add("is-active");
    strategyName.textContent = robot.name;
    strategyMode.textContent = robot.mode;
    strategyDetails.textContent = robot.details;
  });
});

const leadForm = document.querySelector(".lead-form");

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  leadForm.querySelector("button").textContent = "Заявка отправлена";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
