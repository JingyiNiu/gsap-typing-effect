const words = ["empowerment", "control", "freedom"];

let cryptoTimeline = gsap.timeline();
let wordsTimeline = gsap.timeline({ repeat: -1 }).pause();

cryptoTimeline.to(".hi", { duration: 1.5, text: "Crypto wealth means", onComplete: () => wordsTimeline.play() });
words.forEach((word) => {
  let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
  tl.to(".text", { duration: 1, text: word });
  wordsTimeline.add(tl);
});
