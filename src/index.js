const { MINUTES, SECONDS } = require("./constants");
const Pomodoro = require("./pomodoro");
const Util = require("./util");
const main = () => {
  const DEFAULT_TIMER = 25 * MINUTES;
  const pomodoro = new Pomodoro(DEFAULT_TIMER);
  pomodoro.startPomodoroSession();
  let lastTimer = 0;
  const showReference = setInterval(() => {
    Util.showClockOnConsole(lastTimer / SECONDS);
    if (lastTimer === pomodoro.timer) clearInterval(showReference);
    lastTimer = pomodoro.timer;
  }, 1000);
};

main();
