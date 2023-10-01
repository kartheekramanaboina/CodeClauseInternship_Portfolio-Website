document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

});
