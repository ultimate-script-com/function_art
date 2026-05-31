"use strict";

const origin = Math.min(window.innerWidth, window.innerHeight) * 0.49;

const svg = document.querySelector("svg");

const circleGenerator = (r) => {
  // SVGのcircle要素を作成
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );

  // 属性を設定
  circle.setAttribute("cx", origin);
  circle.setAttribute("cy", origin);
  circle.setAttribute("r", r);
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", "black");
  circle.setAttribute("stroke-width", 0.5);

  // SVGへ追加
  svg.appendChild(circle);
};

for (let i = 1; i < 200; i++) {
  circleGenerator(i);
}
