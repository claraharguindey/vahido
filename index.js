const iridiscenceEl = document.getElementById('iridiscence');

const updateColors = (ev) => {
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

  iridiscenceEl.innerHTML = `
 <span> beta: ${beta} </span>
 <br>
 <span> alpha: ${alpha} </span>
 <br>
 <span> gamma: ${gamma} </span>
`;
};

window.addEventListener('deviceorientation', (event) => updateColors(event));

DeviceOrientationEvent.requestPermission()
  .then((response) => {
    if (response == 'granted') {
      window.addEventListener('deviceorientation', (event) =>
        updateColors(event)
      );
    }
  })
  .catch(console.error);
