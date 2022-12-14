// Crear el observador (Intersection Observer API)
// En la función anónima se recibe una lista de entradas,
//    no importa que solo se observe un elemento
observer = new IntersectionObserver(entries => {
    // Recorrer las entradas recibidas
    entries.forEach(entry => {
      // Está visible en el viewport
      if (entry.intersectionRatio > 0) {
        // entry.target es el elemento que se está observando
        // Agregar la clase para animar
        entry.target.classList.add('opacidad');
        // Dejar de observar
        observer.unobserve(entry.target);
      }
    });
  });
  // Observar elemento a animar
  observer.observe(document.querySelector('#observador'));