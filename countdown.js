// Countdown Timer JavaScript
class CountdownTimer {
  constructor(targetDate) {
    this.targetDate = new Date(targetDate).getTime();
    this.hoursElement = document.querySelector(".hours");
    this.minutesElement = document.querySelector(".minutes");
    this.secondsElement = document.querySelector(".seconds");
    this.interval = null;
    this.init();
  }

  init() {
    this.updateCountdown();

    this.interval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      // Countdown has ended
      this.hoursElement.textContent = "۰۰";
      this.minutesElement.textContent = "۰۰";
      this.secondsElement.textContent = "۰۰";
      clearInterval(this.interval);
      return;
    }

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.hoursElement.textContent = this.toPersianNumeral(
      hours.toString().padStart(2, "0")
    );
    this.minutesElement.textContent = this.toPersianNumeral(
      minutes.toString().padStart(2, "0")
    );
    this.secondsElement.textContent = this.toPersianNumeral(
      seconds.toString().padStart(2, "0")
    );
  }

  toPersianNumeral(str) {
    const persianNumbers = {
      0: "۰",
      1: "۱",
      2: "۲",
      3: "۳",
      4: "۴",
      5: "۵",
      6: "۶",
      7: "۷",
      8: "۸",
      9: "۹",
    };

    return str.replace(/[0-9]/g, (match) => persianNumbers[match]);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  reset(newTargetDate) {
    this.stop();
    this.targetDate = new Date(newTargetDate).getTime();
    this.init();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 24);

  const countdown = new CountdownTimer(targetDate);

  window.countdownTimer = countdown;
});

function startSimpleCountdown(targetDate) {
  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minutes");
  const secondsElement = document.querySelector(".seconds");

  const target = new Date(targetDate).getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = target - now;

    if (distance < 0) {
      hoursElement.textContent = "۰۰";
      minutesElement.textContent = "۰۰";
      secondsElement.textContent = "۰۰";
      clearInterval(interval);
      return;
    }

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Convert to Persian numerals
    const toPersian = (num) => {
      const persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return num
        .toString()
        .padStart(2, "0")
        .replace(/\d/g, (d) => persian[d]);
    };

    hoursElement.textContent = toPersian(hours);
    minutesElement.textContent = toPersian(minutes);
    secondsElement.textContent = toPersian(seconds);
  }, 1000);
}
