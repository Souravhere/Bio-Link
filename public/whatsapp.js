(function() {
    // Create styles
    const style = document.createElement('style');
    style.textContent = `
        .whatsapp-icon {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background-color: #25D366;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 40;
        }
        .whatsapp-icon img {
            width: 35px;
            height: 35px;
        }
    `;
    document.head.appendChild(style);

    // Create WhatsApp icon
    const whatsappIcon = document.createElement('div');
    whatsappIcon.className = 'whatsapp-icon';
    whatsappIcon.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">';
    document.body.appendChild(whatsappIcon);

    // Pre-defined interactive message
    const message = encodeURIComponent("Hi! I'm interested in learning more about your services. Can we chat?");

    // WhatsApp number
    const whatsappNumber = "+917426968980";

    // On click, redirect to WhatsApp chat with pre-filled message
    whatsappIcon.addEventListener('click', () => {
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
})();
