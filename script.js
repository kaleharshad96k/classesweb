function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}
function sendWhatsAppMessage(event) {
    event.preventDefault(); 

  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

  
    const whatsappMessage = `Hello, I am ${name}.%0AEmail: ${email}%0AMessage: ${message}`;

   
    const whatsappURL = `https://wa.me/<8788428240>?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');
}
const videos = {
    "HTML": "HcOc7P5BMi4",        
    "CSS": "ESnrn1kAD4E",    
    "JavaScript": "VlPiVmYuoqw" 
};

function showVideo(course) {
    const videoId = videos[course];
    const videoFrame = document.getElementById("video-frame");
    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
}
