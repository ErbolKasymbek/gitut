const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptun",
  "Pluto",
];
const moons = [
  "Moon",
]

function showPlanets(arr) {
  arr.forEach((el) => {
    console.log(el);
  });
}
showPlanets(planets);
