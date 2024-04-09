document.addEventListener('DOMContentLoaded', function () {
  // Encuentra todos los botones dentro del main que controlan la visibilidad
  var buttons = document.querySelectorAll('main section > button[aria-expanded][aria-controls]');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var controlledElement = document.getElementById(this.getAttribute('aria-controls'));

      if (expanded) {
        this.setAttribute('aria-expanded', 'false');
        controlledElement.classList.remove('visible');
      } else {
        this.setAttribute('aria-expanded', 'true');
        controlledElement.classList.add('visible');
      }
    });
  });
});
