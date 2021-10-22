export const PATTERN = {
  tap: "tap",
  negative: "negative",
  positive: "positive",
  win: "win",
  lose: "lose",
};

const patterns = new Map([
  [PATTERN.tap, [25]],
  [PATTERN.negative, [50, 50, 50, 50, 100]],
  [PATTERN.positive, [50, 50, 200]],
  [PATTERN.win, [200, 100, 800]],
  [PATTERN.lose, [200, 50, 200, 50, 200, 50, 600]],
]);

class Vibro {
  #patterns = {};

  constructor(patterns) {
    this.#patterns = patterns;
  }

  supported =
    typeof window !== "undefined" && window?.navigator?.vibrate;

  play(name) {
    if (this.supported) {
      const pattern = this.#patterns.get(name);

      window.navigator.vibrate(pattern);
    }
  }
}

export default new Vibro(patterns);
