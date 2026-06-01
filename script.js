const overlay = document.getElementById('overlay');
const animatedImg = document.getElementById('animatedImg');
const closeBtn = document.getElementById('closeBtn');
const contentDisplay = document.getElementById('contentDisplay');

// Define your content mapping here
const imageTexts = {
    "1.png": `<h2>Image 1</h2><p>Description for image 1</p>`,
    "32.png": `<h2>Image 32</h2><p>Description for image 32</p>`
    // Add additional keys: "2.png": `...`, etc.
};

document.querySelectorAll('.track img').forEach(img => {
    img.addEventListener('click', (e) => {
        const targetImg = e.target;
        const fileName = targetImg.getAttribute('src');
        const rect = targetImg.getBoundingClientRect();

        // Populate content
        contentDisplay.innerHTML = imageTexts[1.png] || "<h2>Baseball Bat</h2><p>This sword is so mid because everyone has it, don't think you're special trying to larp as triple T with this trash</p>";
        contentDisplay.innerHTML = imageTexts[2] || "<h2>Checkmate</h2><p>Wow, who could've guessed that the checkmate sword is just a regular sword mesh lazily slapped on with a checkered texture, it could have been one of the coolest swords in the game holding a rook or something like that, but it looks like someone didn't feel up to the challenge of modeling allat. Figures.</p>";
        contentDisplay.innerHTML = imageTexts[fileName] || "<h2>No Info</h2><p>Description not found.</p>";
        contentDisplay.innerHTML = imageTexts[fileName] || "<h2>No Info</h2><p>Description not found.</p>";
        contentDisplay.innerHTML = imageTexts[fileName] || "<h2>No Info</h2><p>Description not found.</p>";
        contentDisplay.innerHTML = imageTexts[fileName] || "<h2>No Info</h2><p>Description not found.</p>";
            contentDisplay.innerHTML = imageTexts[fileName] || "<h2>No Info</h2><p>Description not found.</p>";
            contentDisplay.innerHTML = imageTexts[fileName] || "<h2>No Info</h2><p>Description not found.</p>";
            contentDisplay.innerHTML = imageTexts[fileName] || "<h2>No Info</h2><p>Description not found.</p>";
            contentDisplay.innerHTML = imageTexts[fileName] || "<h2>No Info</h2><p>Description not found.</p>";
            contentDisplay.innerHTML = imageTexts[fileName] || "<h2>No Info</h2><p>Description not found.</p>";
            contentDisplay.innerHTML = imageTexts[fileName] || "<h2>No Info</h2><p>Description not found.</p>";

        animatedImg.src = targetImg.src;
        animatedImg.style.top = rect.top + 'px';
        animatedImg.style.left = rect.left + 'px';
        animatedImg.style.width = rect.width + 'px';
        animatedImg.style.height = rect.height + 'px';
        animatedImg.style.transform = 'rotate(0deg)';

        document.body.classList.add('modal-open');
        overlay.classList.add('active');

        animatedImg.offsetHeight; 

        overlay.classList.add('open');
        animatedImg.style.top = '0px';
        animatedImg.style.left = '0px';
        animatedImg.style.width = '50vw';
        animatedImg.style.height = '100vh';
        animatedImg.style.transform = 'rotate(-360deg)';
    });
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
    
    setTimeout(() => {
        animatedImg.src = "";
        animatedImg.style.transform = 'none';
    }, 500);
});
