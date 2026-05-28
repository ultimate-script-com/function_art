"use strict";

const origin = Math.min(window.innerWidth, window.innerHeight) * 0.45;

const svg = document.querySelector("svg");

//
// 関数本体
//

const graph = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "polyline",
);

let points = "";

for (let x = -200; x < 200; x += 10) {
  const y = -(x ** 2) / 100;

  points += `${origin + x},${origin + y} `;
}

graph.setAttribute("points", points);

graph.setAttribute("stroke", "black");
graph.setAttribute("stroke-width", "0.5");
graph.setAttribute("fill", "none");

svg.appendChild(graph);

//
// 接線
//

for (let x = 0; x <= 200; x += 20) {
  const y = -(x ** 2) / 100;

  // 微分
  const slope = -x / 50;

  // 接線の長さ
  const dx = 200;

  // y = mx
  const dy = slope * dx;

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

  line.setAttribute("x1", origin - dx);
  line.setAttribute("y1", origin - dy);

  line.setAttribute("x2", origin + x + dx);
  line.setAttribute("y2", origin + y + dy);

  line.setAttribute("stroke", "red");
  line.setAttribute("stroke-width", "0.5");

  svg.appendChild(line);
}
