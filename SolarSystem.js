document.addEventListener("DOMContentLoaded", function() {
    const planets = document.querySelectorAll('.planet');
    const tooltip = document.getElementById('tooltip');

    planets.forEach(planet => {
        planet.addEventListener('mouseover', function (e) {
            tooltip.style.display = 'block';
            tooltip.innerHTML = this.getAttribute('data-name');
        });
        planet.addEventListener('mousemove', function (e) {
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY + 10 + 'px';
        });
        planet.addEventListener('mouseout', function () {
            tooltip.style.display = 'none';
        });
    });
});
