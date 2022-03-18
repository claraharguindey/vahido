const iridiscenceEl = document.getElementById('iridiscence');

window.addEventListener('deviceorientation', (ev) => {
  const alpha = ev.alpha;
  const beta = ev.beta;
  const gamma = ev.gamma;

  if (beta > 10 && beta < 20) {
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

  iridiscenceEl.innerHTML = `beta : ${beta}\n`;
  iridiscenceEl.innerHTML += `alpha: ${alpha}\n`;
  iridiscenceEl.innerHTML += `gamma: ${gamma}\n`;
});

window.addEventListener('deviceemotion', (ev) => {
  console.log({
    acceleration: ev.acceleration.y,
    rotation: ev.rotationRate.gamma,
  });
});
