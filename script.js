const overlay = document.getElementById('overlay');
const animatedImg = document.getElementById('animatedImg');
const closeBtn = document.getElementById('closeBtn');
const contentDisplay = document.getElementById('contentDisplay');

// Define your content mapping here
const imageTexts = {
    "1.png": `<h2>Baseball Bat</h2><p>This sword is so mid because everyone has it, don't think you're special trying to larp as triple T with this trash.</p>`,
    "2.png": `<h2>Checkmate</h2><p>Wow, who could've thought the checkmate sword is just a regular sword mesh lazily slapped on with a checkered texture, it could have been one of the coolest swords in the game holding a rook or something like that, but it looks like someone didn't feel up to the challenge of modeling allat. Figures.</p>`,
    "3.png": `<h2>Copy Tool</h2><p>Really? That's it? Well atleast it's big I guess. Heh, that's what she said. (◕‿◕)╭∩╮</p>`,
    "4.png": `<h2>CS Resume</h2><p>Somebody was feeling a little self referential when creating this one.</p><p>You can write as much HTML or plain text here as you want.</p>`,
    "5.png": `<h2>Darkheart</h2><p>The most forgettable earnable sword in the game. No surprise that hardly anybody uses this.</p>`,
    "6.png": `<h2>Dark Katana</h2><p>You had infinite possibilities for swords and you seriously choose this?</p>`,
    "7.png": `<h2>Duck Sword</h2><p>It's made of ducks. Cool concept, but that's thrown out the window when you realize most people are too zoomed out whilst fighting to even realize that.</p><p>You can write as much HTML or plain text here as you want.</p>`,
    "8.png": `<h2>Firework</h2><p>You gotta give credit where credit's due, it is what it says on the tin. Unfortunately every noob loves to use it so it's beyond worthless.</p>`,
    "9.png": `<h2>Glory</h2><p>Don't let the name deceive you, there is nothing glorious about this lame sword.</p>`,
    "10.png": `<h2>Hi-Tekk</h2><p>Why not light source if light source shaped.</p><p>You can write as much HTML or plain text here as you want.</p>`,
    "11.png": `<h2>Hitbox</h2><p>Why even bother?</p>`,
    "12.png": `<h2>Honour</h2><p>This sword sucks.</p>`,
    "13.png": `<h2>Icsickle</h2><p>Now you can scratch your back easier!</p>`,
    "14.png": `<h2>Jack Frost's Revenge</h2><p>This text belongs exclusively to the second image.</p>`,
    "15.png": `<h2>Keyboard</h2><p>qwertyuiopasdfghjklzxcvbnm</p>`,
    "16.png": `<h2>Killercrow</h2><p>Look at my sword dawgggggg I'm goin to spawn 😫🤯🤣</p>`,
    "17.png": `<h2>Lollichop</h2><p>bro capitalized</p>`,
    "18.png": `<h2>Nature's Curse</h2><p>Probably smells even worse than it looks</p>`,
    "19.png": `<h2>Phantom Sparv</h2><p>BOOOORIIIIIIIING</p>`,
    "20.png": `<h2>Piano Sword</h2><p>You would think that it would atleast play piano keys with each hit</p>`,
    "21.png": `<h2>Ping-Pong Sword</h2><p>Peak animation paired with a mid sword model, but what did you expect?</p><p>You can write as much HTML or plain text here as you want.</p>`,
    "22.png": `<h2>Radiated Ripper</h2><p>One of the good ones, but I must admit this is literally just sanic sword with extra details</p>`,
    "23.png": `<h2>Rest-In-Bozo</h2><p>So now you can feel witty too!</p>`,
    "24.png": `<h2>Robux Sword</h2><p>Contrary to popular belief this sword does not cost robux. I mean, it was RIGHT there man.</p>`,
    "25.png": `<h2>Sanic Sword</h2><p>I would say you gotta go fast but I can't in good faith knowing how slow you move in this game.</p>`,
    "26.png": `<h2>Santa's Hit List</h2><p>This looks more like a rolling pin than anything else</p>`,
    "27.png": `<h2>Sarcophagone</h2><p>We take a sword. Becomes some trash. Where'd it go? It's in my...</p>`,
    "28.png": `<h2>Sharp Gift</h2><p>What a subversive masterpiece. Will we ever know what's inside? Maybe it's the friends we made along the way</p>`,
    "29.png": `<h2>Soda Sky</h2><p>Tasteless</p>`,
    "30.png": `<h2>Sparkle Time</h2><p>Ooh Shiny!</p>`,
    "31.png": `<h2>Sword Sword</h2><p>Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword Sword...</p>`,
    "32.png": `<h2>Virulence</h2><p>Finally, a cool sword. Whoops, looks like that's all the time we have folks.</p>`
};

document.querySelectorAll('.track img').forEach(img => {
    img.addEventListener('click', (e) => {
        const targetImg = e.target;
        const fileName = targetImg.getAttribute('src');
        const rect = targetImg.getBoundingClientRect();

        // Populate content
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
