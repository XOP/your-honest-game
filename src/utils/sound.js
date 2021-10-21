import { Howl } from "howler";

export const SOUNDS = {
  next: "next",
  negative: "negative",
  positive: "positive",
  win: "win",
  lose: "lose",
};

const sounds = new Map([
  [SOUNDS.next, { src: "/assets/audio/ding.mp3", howl: null }],
  [SOUNDS.negative, { src: "/assets/audio/buzz.mp3", howl: null }],
  [SOUNDS.positive, { src: "/assets/audio/cash.mp3", howl: null }],
  [SOUNDS.win, { src: "/assets/audio/win.mp3", howl: null }],
  [SOUNDS.lose, { src: "/assets/audio/lose.mp3", howl: null }],
]);

class Audio {
  #lib = {};

  constructor(sounds) {
    this.#lib = sounds;
  }

  play(name) {
    const snd = this.#lib.get(name);
    const src = snd.src;

    let howl;

    if (snd.howl) {
      howl = snd.howl;
    } else {
      howl = new Howl({
        src: src,
        volume: 0.5,
      });

      snd.howl = howl;
    }

    howl.play();
  }
}

export default new Audio(sounds);
