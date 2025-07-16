const ramos = document.querySelectorAll('.ramo');

function checkPrereqs() {
  ramos.forEach(ramo => {
    const prereq = ramo.getAttribute('data-prereq');
    if (prereq) {
      const prereqRamo = Array.from(ramos).find(r => r.textContent === prereq);
      if (!prereqRamo || !prereqRamo.classList.contains('aprobado')) {
        ramo.classList.add('bloqueado');
        ramo.classList.remove('no-aprobado');
      } else {
        ramo.classList.remove('bloqueado');
        if (!ramo.classList.contains('aprobado')) {
          ramo.classList.add('no-aprobado');
        }
      }
    }
  });
}

ramos.forEach(ramo => {
  ramo.addEventListener('click', () => {
    if (ramo.classList.contains('bloqueado')) return;

    if (ramo.classList.contains('no-aprobado')) {
      ramo.classList.remove('no-aprobado');
      ramo.classList.add('aprobado');
    } else if (ramo.classList.contains('aprobado')) {
      ramo.classList.remove('aprobado');
      ramo.classList.add('no-aprobado');
    }

    checkPrereqs();
  });
});

checkPrereqs();

