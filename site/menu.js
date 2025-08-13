document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.getElementById('sidebar');
    var toggle = document.getElementById('sidebarToggle');
    toggle.addEventListener('click', function () {
        sidebar.classList.toggle('open');
    });
});