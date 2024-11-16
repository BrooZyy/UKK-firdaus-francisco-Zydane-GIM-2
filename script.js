document.querySelectorAll('a[herf^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
ziuuuuuu
        document.querySelector(this.getAttribute('herf')).scrollintoview({
            behavior: 'smooth'
        });
    });
});