let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${(-slideIndex * 100)}%)`;
    }
}

function moveSlides(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

// Auto-move slides every 5 seconds
setInterval(() => moveSlides(1), 5000);

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const commentText = document.getElementById('comment').value;
    
    if (commentText.trim() === '') {
        alert('Por favor, escribe un comentario.');
        return;
    }

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerText = commentText;

    document.querySelector('.comments').appendChild(commentDiv);

    // Limpiar el campo de texto
    document.getElementById('comment').value = '';
});
