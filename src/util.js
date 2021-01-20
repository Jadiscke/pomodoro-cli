const { SECONDS, MINUTES } = require("./constants");


class Util {
  constructor() {}
  showClockOnConsole(time) {
    const timeString = this.#formatTimeToClockTime(time);
    process.stdout.clearScreenDown();
    console.log("\n", timeString);
    process.stdout.moveCursor(0, -2);
  }
  #formatTimeToClockTime(time) {
    const defaulTime = `00:00`;
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    const minutesString = `00${minutes}`.slice(-2);
    const secondsString = `00${seconds}`.slice(-2);

    return `${minutesString}:${secondsString}`;
  }
  formatInputToMs(seconds = 0, minutes = 0) {
    return Number(seconds * SECONDS) + Number(minutes * MINUTES);
  }
}

module.exports = new Util();
