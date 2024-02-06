document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById("chande_bg");

    button.addEventListener('click', function () {
        if (document.documentElement.style.backgroundColor === 'white') {
            document.documentElement.style.backgroundColor = 'black';
            document.documentElement.style.color = 'white';
        } else {
            document.documentElement.style.backgroundColor = 'white';
            document.documentElement.style.color = 'black';
        }
    });
});
