const gallery = document.getElementById('gallery');
const detailView = document.getElementById('detail-view');
const textPanel = document.getElementById('text-panel');
const textContent = document.getElementById('detail-text-content');
const closeBtn = document.getElementById('close-btn');

let activeAnimatingImg = null;

// PASTE THIS INSTEAD:
const imageTexts = {
    "1.png": `
        <h2>Baseball Bat</h2>
        <p>This sword is so mid because everyone has it, don't think you're special trying to larp as triple T with this trash.</p>
        <p>Capsule: Strange's Capsule
        
        <strong>Animated:</strong>: No
        
       <strong>Light Source:</strong>: No
        
        <strong>Kill Animation:</strong>: Idk don't ask me</p>
    `,

    "2.png": `
        <h2>Checkmate</h2>
        <p>Wow, who could've thought the checkmate sword is just a regular sword mesh lazily slapped on with a checkered texture, it could have been one of the coolest swords in the game if you could hold a giant rook, bishop, horse or castle, but that potential was squandered because somebody didn't feel like going through the effort of modeling allat.</p>
    `,

    "3.png": `
        <h2>Copy Tool</h2>
        <p>Really? That's it? Well atleast it's big. Heh, that's what she said. ( ͡° ͜ʖ ͡°)</p>
    `,

    "4.png": `
        <h2>CS Resume</h2>
        <p>Somebody was feeling a little self referential when creating this one.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "5.png": `
        <h2>A Different Story</h2>
        <p>This text belongs exclusively to the second image.</p>
    `,

    "6.png": `
        <h2>Third Image Title</h2>
        <p>Custom description for image 3 goes here.</p>
    `,

    "7.png": `
        <h2>The First Masterpiece</h2>
        <p>This is your completely unique text for the first image.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "8.png": `
        <h2>A Different Story</h2>
        <p>This text belongs exclusively to the second image.</p>
    `,

    "9.png": `
        <h2>Third Image Title</h2>
        <p>Custom description for image 3 goes here.</p>
    `,

    "10.png": `
        <h2>The First Masterpiece</h2>
        <p>This is your completely unique text for the first image.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "11.png": `
        <h2>A Different Story</h2>
        <p>This text belongs exclusively to the second image.</p>
    `,

    "12.png": `
        <h2>Third Image Title</h2>
        <p>Custom description for image 3 goes here.</p>
    `,

    "13.png": `
        <h2>The First Masterpiece</h2>
        <p>This is your completely unique text for the first image.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "14.png": `
        <h2>A Different Story</h2>
        <p>This text belongs exclusively to the second image.</p>
    `,

    "15.png": `
        <h2>Third Image Title</h2>
        <p>Custom description for image 3 goes here.</p>
    `,

    "16.png": `
        <h2>The First Masterpiece</h2>
        <p>This is your completely unique text for the first image.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "17.png": `
        <h2>A Different Story</h2>
        <p>This text belongs exclusively to the second image.</p>
    `,

    "18.png": `
        <h2>Third Image Title</h2>
        <p>Custom description for image 3 goes here.</p>
    `,

    "19.png": `
        <h2>The First Masterpiece</h2>
        <p>This is your completely unique text for the first image.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "20.png": `
        <h2>A Different Story</h2>
        <p>This text belongs exclusively to the second image.</p>
    `,

    "21.png": `
        <h2>Third Image Title</h2>
        <p>Custom description for image 3 goes here.</p>
    `,

    "22.png": `
        <h2>The First Masterpiece</h2>
        <p>This is your completely unique text for the first image.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "23.png": `
        <h2>A Different Story</h2>
        <p>This text belongs exclusively to the second image.</p>
    `,

    "24.png": `
        <h2>Third Image Title</h2>
        <p>Custom description for image 3 goes here.</p>
    `,

    "25.png": `
        <h2>The First Masterpiece</h2>
        <p>This is your completely unique text for the first image.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "26.png": `
        <h2>A Different Story</h2>
        <p>This text belongs exclusively to the second image.</p>
    `,

    "27.png": `
        <h2>Third Image Title</h2>
        <p>Custom description for image 3 goes here.</p>
    `,

    "28.png": `
        <h2>The First Masterpiece</h2>
        <p>This is your completely unique text for the first image.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "29.png": `
        <h2>A Different Story</h2>
        <p>This text belongs exclusively to the second image.</p>
    `,

    "30.png": `
        <h2>Third Image Title</h2>
        <p>Custom description for image 3 goes here.</p>
    `,

    "31.png": `
        <h2>The First Masterpiece</h2>
        <p>This is your completely unique text for the first image.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "32.png": `
        <h2>The Grand Finale</h2>
        <p>This is the custom text for your very last image.</p>
    `
}; // <--- Don't forget this closing bracket and semicolon at the very end!

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
