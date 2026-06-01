const gallery = document.getElementById('gallery');
const detailView = document.getElementById('detail-view');
const textPanel = document.getElementById('text-panel');
const textContent = document.getElementById('detail-text-content');
const closeBtn = document.getElementById('close-btn');

let activeAnimatingImg = null;

// Map custom text to each image here
const imageTexts = {};
for (let i = 1; i <= 32; i++) {
    // You can customize the text for each specific image inside this object later
    imageTexts[`${i}.png`] = `
        <h2>Details for Image ${i}</h2>
        <p>This is where you write the specific text covering the right side of the screen for ${i}.png.</p>
        <p>Because it's isolated on this side, you can make this as long as you want and it will scroll independently of the image.</p>
    `;
}

// Generate the 32 images on the home page
for (let i = 1; i <= 32; i++) {
    const img = document.createElement('img');
    img.src = `${i}.png`; // Looks for 1.png, 2.png, etc.
    img.alt = `Gallery Image ${i}`;
    
    // Add click event listener to each image
    img.addEventListener('click', () => openImage(img, `${i}.png`));
    gallery.appendChild(img);
}

function openImage(sourceImg, imageName) {
    if (activeAnimatingImg) return; // Prevent clicking multiple images at once

    // Get exact position of clicked image on the screen
    const rect = sourceImg.getBoundingClientRect();

    // Create a clone of the image to animate
    activeAnimatingImg = document.createElement('img');
    activeAnimatingImg.src = sourceImg.src;
    activeAnimatingImg.classList.add('animating-image');
    
    // Set clone's initial position exactly over the clicked image
    activeAnimatingImg.style.top = `${rect.top}px`;
    activeAnimatingImg.style.left = `${rect.left}px`;
    activeAnimatingImg.style.width = `${rect.width}px`;
    activeAnimatingImg.style.height = `${rect.height}px`;
    activeAnimatingImg.style.transform = `rotate(0deg)`;

    document.body.appendChild(activeAnimatingImg);

    // Hide original image so it looks like it's leaving the grid
    sourceImg.style.visibility = 'hidden';
    activeAnimatingImg.sourceImg = sourceImg; 

    // Populate the right side text panel
    textContent.innerHTML = imageTexts[imageName];

    // Force browser to register the initial position before applying CSS transitions
    activeAnimatingImg.getBoundingClientRect();

    // Trigger the animation to the left side and slide out the text panel
    requestAnimationFrame(() => {
        activeAnimatingImg.classList.add('expanded');
        detailView.classList.add('active');
    });
}

closeBtn.addEventListener('click', closeImage);

function closeImage() {
    if (!activeAnimatingImg) return;

    // Remove the expanded class to reverse the animation
    activeAnimatingImg.classList.remove('expanded');
    detailView.classList.remove('active');

    // Wait for the 0.8s CSS transition to finish before cleaning up
    setTimeout(() => {
        activeAnimatingImg.sourceImg.style.visibility = 'visible';
        activeAnimatingImg.remove();
        activeAnimatingImg = null;
    }, 800); 
}
