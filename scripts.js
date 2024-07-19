console.log('Hello world!');

const rocketGif =
  "https://web.archive.org/web/20091019191825/http://www.geocities.com/sr_youth/rocket3.gif";

const moonImg =
  "https://www.intofilm.org/intofilm-production/scaledcropped/1096x548https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__4290-le-voyage-dans-la-lune-a-trip-to-the-moon--hi_res-0d80ee00.jpg/film__4290-le-voyage-dans-la-lune-a-trip-to-the-moon--hi_res-0d80ee00.jpg";
const launchButton = document.querySelector("button#launch");

const randomInBounds = (min, max) =>
  Math.ceil(Math.random() * (max - min)) + min;

const asPercent = (val) => `${val}%`;

const percentRand = (min = 0, max = 100) => asPercent(randomInBounds(min, max));

const getAnimation = (direction) => [
  {
    bottom: percentRand(0, 50),
    [direction]: 0,
    easing: "ease-in",
  },
  {
    bottom: "110%",
    [direction]: percentRand(80),
    easing: "ease-out",
  },
];

const generateRocketAnimation = (direction) => {
  const launchAnimation = getAnimation(direction);

  return [
    launchAnimation,
    {
      duration: randomInBounds(500, 3000),
    },
  ];
};

let numberOfRockets = 0;

launchButton.addEventListener("click", () => {
  const rocketImage = document.createElement("img");
  const direction = Math.random() > 0.5 ? "left" : "right";
  rocketImage.className = `rocket ${direction}`;
  rocketImage.src = rocketGif;
  document.body.appendChild(rocketImage);

  const animation = rocketImage.animate(...generateRocketAnimation(direction));
  animation.addEventListener("finish", () => {
    document.body.removeChild(rocketImage);
    numberOfRockets++;

    if (numberOfRockets === 30) {
      document.className = "reveal";
    }
  });
});