const { program } = require("commander");

const { MINUTES, SECONDS } = require("./constants");
const Pomodoro = require("./pomodoro");
const Util = require("./util");
const DEFAULT_TIMER = 25 * MINUTES;
const main = (timer = DEFAULT_TIMER) => {
  const pomodoro = new Pomodoro(timer);
  pomodoro.startPomodoroSession();
  let lastTimer = 0;
  const showReference = setInterval(() => {
    Util.showClockOnConsole(lastTimer / SECONDS);
    if (lastTimer === pomodoro.timer) clearInterval(showReference);
    lastTimer = pomodoro.timer;
  }, 1000);
};

program.version("0.0.1");
program
  .option("-s, --start", "Start Pomodoro")
  .option("-t, --timer [value]", "Define the timer in seconds")
  .option("-m, --minutes [value]", "Add Minutes to Timer");
program.parse(process.argv);

const options = program.opts();

if (options.start) {
  const timer = Util.formatInputToMs(options.timer, options.minutes);
  main(timer);
}
