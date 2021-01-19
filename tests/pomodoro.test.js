const { assert } = require("chai");
const sinon = require("sinon");
const Pomodoro = require("../src/pomodoro");

var clock;

const SECONDS = 1000;
const MINUTES = 60 * 1000;
const BIG_TIME = 100 * MINUTES;

describe("Pomodoro Class", async () => {
  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });
  afterEach(() => clock.restore());
  it("should create a Pomodoro object", () => {
    const newPomodoro = new Pomodoro();
    assert.isObject(newPomodoro);
  });

  it("should return timer as a number", () => {
    const pomodoro = new Pomodoro();
    const timer = pomodoro.timer;
    assert.isNumber(timer);
  });

  it("should start timer", async function () {
    const expected = 1000;
    const pomodoro = new Pomodoro();
    pomodoro.startTimer();
    clock.tick(1000);
    const finalTimer = pomodoro.timer;
    assert.equal(finalTimer, expected);
  });
  it("should stop timer", () => {
    const expected = 0;
    const pomodoro = new Pomodoro();
    const timerReference = pomodoro.startTimer();
    clock.tick(100);
    pomodoro.stopTimer(timerReference);
    const finalTimer = pomodoro.timer;
    assert.equal(finalTimer, expected);
  });
  it("should start and end Pomodoro session", () => {
    const pomodoro = new Pomodoro();
    const expected = pomodoro.timeLimit;

    pomodoro.startPomodoroSession();

    clock.tick(BIG_TIME);
    const finalTimer = pomodoro.timer;
    assert.equal(finalTimer, expected);
  });
});
