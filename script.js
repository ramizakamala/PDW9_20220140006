// Form submission (dummy functionality)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Pesan Anda telah dikirim!');
    this.reset();
});