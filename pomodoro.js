const SECONDS = 1000;
const MINUTES = 60 * SECONDS;

class Pomodoro {
    #sessionReference; 
  constructor(timerLimit = 25 * MINUTES) {
    this.timer = 0;
    this.timeLimit = timerLimit
  }

  getTimer() {
    return this.timer;
  }

  #setTimer(newTimer) {
    this.timer = newTimer;
  }

  #increaseTimerBySecond() {
    const actualTimer = this.timer;
    this.#setTimer(actualTimer + 1000);
  }

  startTimer() {
    const intervalReference = () => {
      this.#increaseTimerBySecond();
    };
    const timerReference = setInterval(intervalReference, 1000);

    return timerReference;
  }

  stopTimer(intervalReference) {
    clearInterval(intervalReference);
  }

  #timerApproachedLimit() {
    return this.timer >= this.timeLimit;
  }

  startPomodoroSession() {
    const timerReference = this.startTimer();
    const stopIfTimerApproachedLimit = (selfReference) => {
        if( this.#timerApproachedLimit() ){
            this.stopTimer(timerReference);
            clearInterval(this.#sessionReference);
        }
    }
    this.#sessionReference =  setInterval(stopIfTimerApproachedLimit, 1000);
  }
}

module.exports = Pomodoro;
