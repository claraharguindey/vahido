const iridiscenceEl = document.getElementById('iridiscence');
const permissionButtonEl = document.getElementById('accelPermsButton');

window.addEventListener('deviceorientation', (ev) => {
  const alpha = ev.alpha;
  const beta = ev.beta;
  const gamma = ev.gamma;

  if (beta > 10 && beta < 20) {
    iridiscenceEl.className = 'pink';
  } else if (beta < 0 && gamma > 0) {
    iridiscenceEl.className = 'red';
  } else if (beta < 0 && gamma < 0) {
    iridiscenceEl.className = 'yellow';
  } else if (beta > 0 && gamma > 0) {
    iridiscenceEl.className = 'orange';
  } else if (beta > 0 && gamma < 0) {
    iridiscenceEl.className = 'blue';
  }
});

window.addEventListener('deviceemotion', (ev) => {
  console.log({
    acceleration: ev.acceleration.y,
    rotation: ev.rotationRate.gamma,
  });
});

function getAccel() {
  DeviceMotionEvent.requestPermission().then((response) => {
    if (response == 'granted') {
      permissionButtonEl.display = 'none';
      window.addEventListener('deviceorientation', (ev) => {
        const alpha = ev.alpha;
        const beta = ev.beta;
        const gamma = ev.gamma;

        if (beta > 10 && beta < 20) {
          iridiscenceEl.className = 'pink';
        } else if (beta < 0 && gamma > 0) {
          iridiscenceEl.className = 'red';
        } else if (beta < 0 && gamma < 0) {
          iridiscenceEl.className = 'yellow';
        } else if (beta > 0 && gamma > 0) {
          iridiscenceEl.className = 'orange';
        } else if (beta > 0 && gamma < 0) {
          iridiscenceEl.className = 'blue';
        }
      });
    }
  });
}
