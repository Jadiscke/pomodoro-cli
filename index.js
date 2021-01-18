const Pomodoro = require("./pomodoro");

const main = () => {
  const pomodoro = new Pomodoro(10000);
  pomodoro.startPomodoroSession();
  let lastTimer = 0;
  const showReference = setInterval(()=>{
    console.log(lastTimer);
    if(lastTimer === pomodoro.getTimer()) clearInterval(showReference);
    lastTimer = pomodoro.getTimer();

  },1000);
};


main();