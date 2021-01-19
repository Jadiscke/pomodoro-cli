const Pomodoro = require("./pomodoro");
const Util = require("./util");
const main = () => {
  const DEFAULT_TIMER = 25 * 60 * 1000;
  const pomodoro = new Pomodoro(DEFAULT_TIMER);
  pomodoro.startPomodoroSession();
  let lastTimer = 0;
  const showReference = setInterval(() => {
    Util.showClockOnConsole(lastTimer / 1000);
    if (lastTimer === pomodoro.timer) clearInterval(showReference);
    lastTimer = pomodoro.timer;
  }, 1000);
};

main();
