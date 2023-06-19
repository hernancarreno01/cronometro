// Obtener referencias a los elementos HTML
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

let startTime; // Tiempo de inicio del cronómetro
let elapsedTime = 0; // Tiempo transcurrido desde el inicio en milisegundos
let timerInterval; // Intervalo del cronómetro

// Función para mostrar el tiempo en formato HH:MM:SS
function mostrarTiempo(tiempo) {
  const horas = Math.floor(tiempo / 3600000);
  const minutos = Math.floor((tiempo % 3600000) / 60000);
  const segundos = Math.floor((tiempo % 60000) / 1000);

  const horasStr = horas.toString().padStart(2, '0');
  const minutosStr = minutos.toString().padStart(2, '0');
  const segundosStr = segundos.toString().padStart(2, '0');

  return `${horasStr}:${minutosStr}:${segundosStr}`;
}

// Función para actualizar el cronómetro
function actualizarCronometro() {
  const elapsedTimeMillis = Date.now() - startTime;
  elapsedTime = elapsedTimeMillis;
  timerDisplay.textContent = mostrarTiempo(elapsedTimeMillis);
}

// Evento click del botón Iniciar
startBtn.addEventListener('click', function() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(actualizarCronometro, 100);
  }
});

// Evento click del botón Pausar
pauseBtn.addEventListener('click', function() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

// Evento click del botón Reiniciar
resetBtn.addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  timerDisplay.textContent = '00:00:00';
});
