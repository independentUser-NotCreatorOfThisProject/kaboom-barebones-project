kaboom()

loadSprite("player", "assets/dino.png");
loadSprite("enemy", "assets/eggDino.png");
loadSprite("sfbg", "assets/sfbg.jpg");

add([
  sprite("sfbg", {width: width(), height: height()}),
])

add([
  pos(0,550),
  rect(width(),height()/4),
  color(255,255,255,0.2),
  area(),
  solid(),
])

const player = add([
  sprite("player"),
  pos(800, 420),
  scale(0.25),
  body(),
  area(),
  "player"
]);

const enemy = add([
  sprite("enemy"),
  pos(280, 420),
  scale(0.33),
  area(),
  body(),
  "enemy"
]);

onKeyDown("left", () => {
  player.move(-600, 0);
});

onKeyDown("right", () => {
  player.move(600, 0);
});

onKeyDown("up", () => {
  player.move(0, -700);
});



onKeyDown("a", () => {
  enemy.move(-600, 0);
});

onKeyDown("d", () => {
  enemy.move(600, 0);
});

onKeyDown("w", () => {
  enemy.move(0, -700);
});