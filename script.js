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
        <p>Wow, who could've thought the checkmate sword is just a regular sword mesh lazily slapped on with a checkered texture, it could have been one of the coolest swords in the game holding a rook or something like that, but it looks like someone didn't feel up to the challenge of modeling allat. Figures.</p>
    `,

    "3.png": `
        <h2>Copy Tool</h2>
        <p>Really? That's it? Well atleast it's big I guess. Heh, that's what she said. (◕‿◕)╭∩╮</p>
    `,

    "4.png": `
        <h2>CS Resume</h2>
        <p>Somebody was feeling a little self referential when creating this one.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "5.png": `
        <h2>Darkheart</h2>
        <p>The most forgettable earnable sword in the game. I mean seriously, do you expect us to be satified with this boring thing for all the work we did? No surprise that barely anybody uses this.</p>
    `,

    "6.png": `
        <h2>Dark Katana</h2>
        <p>Did you run out of ideas? What's going on here, you have infinite possibilities for swords and you choose this?</p>
    `,

    "7.png": `
        <h2>Duck Sword</h2>
        <p>It's made of ducks. Cool concept, but that's thrown out the window when you realize most people are too zoomed out whilst fighting to even realize that.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "8.png": `
        <h2>Firework</h2>
        <p>You gotta give credit where credit's due, it is what it says on the tin. Unfortunately every noob loves to use it so it's beyond worthless.</p>
    `,

    "9.png": `
        <h2>Glory</h2>
        <p>Don't let the name deceive you, there is nothing glorious about this lame sword.</p>
    `,

    "10.png": `
        <h2>Hi-Tekk</h2>
        <p>Why not light source if light source shaped.</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "11.png": `
        <h2>Hitbox</h2>
        <p>Why even bother?</p>
    `,

    "12.png": `
        <h2>Honour</h2>
        <p>This sword sucks.</p>
    `,

    "13.png": `
        <h2>Icsickle</h2>
        <p>Now you can scratch your back easier!</p>

    `,

    "14.png": `
        <h2>Jack Frost's Revenge</h2>
        <p>This text belongs exclusively to the second image.</p>
    `,

    "15.png": `
        <h2>Keyboard</h2>
        <p>Custom description for image 3 goes here.</p>
    `,

    "16.png": `
        <h2>Killercrow</h2>
        <p>Look at my sword dawgggggg I'm goin to spawn 😫🤯🤣</p>

    `,

    "17.png": `
        <h2>Lollichop</h2>
        <p>bro capitalized</p>
    `,

    "18.png": `
        <h2>Nature's Curse</h2>
        <p>Probably smells even worse than it looks</p>
    `,

    "19.png": `
        <h2>Phantom Sparv</h2>
        <p>BOOOORIIIIIIIING</p>
    `,

    "20.png": `
        <h2>Piano Sword</h2>
        <p>You would think that it would atleast play piano keys with each hit</p>
    `,

    "21.png": `
        <h2>Ping-Pong Sword</h2>
        <p>Peak animation paired with a mid sword model, but what did you expect?</p>
        <p>You can write as much HTML or plain text here as you want.</p>
    `,

    "22.png": `
        <h2>Radiated Ripper</h2>
        <p>One of the good ones, but I must admit this is literally just sanic sword with extra details</p>
    `,

    "23.png": `
        <h2>Rest-In-Bozo</h2>
        <p>So now you can feel witty too!</p>
    `,

        "24.png": `
        <h2>Robux Sword</h2>
        <p>Contrary to popular belief this sword does not cost robux. I mean, it was RIGHT there man.</p>
    `,

    "25.png": `
        <h2>Sanic Sword</h2>
        <p>I would say you gotta go fast but I can't in good faith knowing how slow you move in this game.</p>

    `,

    "26.png": `
        <h2>Santa's Hit List</h2>
        <p>This looks more like a rolling pin than anything else</p>
    `,

    "27.png": `
        <h2>Sarcophagone</h2>
        <p>We take a sword. Becomes some trash. Where'd it go? It's in my...</p>
    `,

    "28.png": `
        <h2>Sharp Gift</h2>
        <p>Will we ever know what's inside? Maybe it's the friends we made along the way</p>
    `,

    "29.png": `
        <h2>Soda Sky</h2>
        <p>Tasteless</p>
    `,

    "30.png": `
        <h2>Sparkle Time</h2>
        <p>Ooh Shiny!</p>
    `,

    "31.png": `
        <h2>Sword Sword</h2>
        <p>Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword </p>

    `,

    "32.png": `
        <h2>Virulence</h2>
        <p>Finally, a cool sword. Whoops, looks like that's all the time we have folks.</p>
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
