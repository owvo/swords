const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const overlayLeft = document.getElementById('overlayLeft');
const closeBtn = document.getElementById('closeBtn');
const overlayTitle = document.getElementById('overlayTitle');
const overlayText = document.getElementById('overlayText');

// Add your custom text for each image here
const imageData = {
    1: { title: "Image 1", text: "Custom text for image 1." },
    2: { title: "Image 2", text: "Custom text for image 2." }
};

for (let i = 1; i <= 32; i++) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = `${i}.png`;
    img.alt = `Gallery Image ${i}`;
    img.dataset.id = i;

    item.appendChild(img);
    gallery.appendChild(item);

    item.addEventListener('click', () => {
        const rect = img.getBoundingClientRect();
        const clone = img.cloneNode();
        clone.className = 'flying-img';
        
        clone.style.top = `${rect.top}px`;
        clone.style.left = `${rect.left}px`;
        clone.style.width = `${rect.width}px`;
        clone.style.height = `${rect.height}px`;
        
        document.body.appendChild(clone);

        const data = imageData[i] || { title: `Image ${i}`, text: "Default customized description text." };
        overlayTitle.textContent = data.title;
        overlayText.textContent = data.text;

        clone.getBoundingClientRect(); // Force reflow

        overlay.classList.add('active');

        // Smoothly scale to left side and spin 360 counterclockwise
        clone.style.top = '0px';
        clone.style.left = '0px';
        clone.style.width = '50vw';
        clone.style.height = '100vh';
        clone.style.transform = 'rotate(-360deg)';

        setTimeout(() => {
            clone.style.transition = 'none';
            clone.style.transform = 'none';
            clone.style.position = 'relative';
            clone.style.width = '100%';
            clone.style.height = '100%';
            overlayLeft.appendChild(clone);
        }, 600);
    });
}

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    setTimeout(() => {
        overlayLeft.innerHTML = '';
    }, 500);
});
