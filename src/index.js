const Pomodoro = require("./pomodoro");

const main = () => {
  const pomodoro = new Pomodoro(10000);
  pomodoro.startPomodoroSession();
  let lastTimer = 0;
  const showReference = setInterval(() => {
    process.stdout.clearScreenDown();
    console.log(lastTimer / 1000);
    process.stdout.moveCursor(0, -1);

    if (lastTimer === pomodoro.timer) clearInterval(showReference);
    lastTimer = pomodoro.timer;
  }, 1000);
};

main();
