const SECONDS = 1000;
const MINUTES = 60 * SECONDS;

class Pomodoro {
  #sessionReference;
  #timer;
  #timeLimit;
  constructor(timerLimit = 25 * MINUTES) {
    this.#timer = 0;
    this.#timeLimit = timerLimit;
  }

  get timer() {
    return this.#timer;
  }

  set timer(newTimer) {
    this.#timer = newTimer;
  }

  get timeLimit() {
    return this.#timeLimit;
  }

  #increaseTimerBySecond() {
    const actualTimer = this.#timer;
    this.#timer = actualTimer + SECONDS;
  }

  startTimer() {
    const intervalReference = () => {
      this.#increaseTimerBySecond();
    };
    const timerReference = setInterval(intervalReference, SECONDS);

    return timerReference;
  }

  stopTimer(intervalReference) {
    clearInterval(intervalReference);
  }

  #timerApproachedLimit() {
    return this.#timer >= this.#timeLimit;
  }

  startPomodoroSession() {
    const timerReference = this.startTimer();
    const stopIfTimerApproachedLimit = () => {
      if (this.#timerApproachedLimit()) {
        this.stopTimer(timerReference);
        clearInterval(this.#sessionReference);
      }
    };
    this.#sessionReference = setInterval(stopIfTimerApproachedLimit, 1000);
  }
}

module.exports = Pomodoro;
