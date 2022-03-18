const iridiscenceEl = document.getElementById('iridiscence');

window.addEventListener('deviceorientation', (ev) => {
  const alpha = ev.alpha;
  const beta = ev.beta;
  const gamma = ev.gamma;

  if (beta > 20 && beta < 40) {
    iridiscenceEl.className = 'pink';
  } else if (beta < 0 && gamma > 0) {
    iridiscenceEl.className = 'red';
  } else if (beta < 0 && gamma < 0) {
    iridiscenceEl.className = 'aqua';
  } else if (beta > 0 && gamma > 0) {
    iridiscenceEl.className = 'orange';
  } else if (beta > 0 && gamma < 0) {
    iridiscenceEl.className = 'yellow';
  }

  iridiscenceEl.textContent = `beta : ${beta}\n`;
  iridiscenceEl.textContent += `alpha: ${alpha}\n`;
  iridiscenceEl.textContent += `gamma: ${gamma}\n`;
});

window.addEventListener('deviceemotion', (ev) => {
  console.log({
    acceleration: ev.acceleration.y,
    rotation: ev.rotationRate.gamma,
  });
});
