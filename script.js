const gallery = document.getElementById("gallery");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-image");
const closeBtn = document.getElementById("close-btn");

let activeThumb = null;

/* Create 32 images */

for(let i=1;i<=32;i++){

    const img = document.createElement("img");

    img.src = `images/${i}.png`;
    img.className = "thumb";

    img.addEventListener("click", () => openImage(img));

    gallery.appendChild(img);
}

function openImage(img){

    activeThumb = img;

    const start = img.getBoundingClientRect();

    const clone = img.cloneNode();

    clone.style.position = "fixed";
    clone.style.left = start.left + "px";
    clone.style.top = start.top + "px";
    clone.style.width = start.width + "px";
    clone.style.height = start.height + "px";

    clone.style.zIndex = "9999";

    clone.style.transformOrigin = "center center";

    clone.style.transition =
        "left 0.9s ease, top 0.9s ease, width 0.9s ease, height 0.9s ease, transform 0.9s ease";

    document.body.appendChild(clone);

    viewer.style.display = "flex";
    viewer.style.visibility = "hidden";

    requestAnimationFrame(()=>{

        clone.style.left = "0px";
        clone.style.top = "0px";

        clone.style.width = "50vw";
        clone.style.height = "100vh";

        clone.style.transform = "rotate(-360deg)";
    });

    clone.addEventListener("transitionend", ()=>{

        viewerImg.src = img.src;

        viewer.style.visibility = "visible";
        viewer.classList.add("open");

        clone.remove();
    }, { once:true });
}

closeBtn.addEventListener("click", ()=>{

    if(!activeThumb) return;

    const end = activeThumb.getBoundingClientRect();

    const clone = viewerImg.cloneNode();

    clone.style.position = "fixed";
    clone.style.left = "0px";
    clone.style.top = "0px";
    clone.style.width = "50vw";
    clone.style.height = "100vh";

    clone.style.objectFit = "cover";
    clone.style.zIndex = "9999";

    clone.style.transition =
        "left 0.9s ease, top 0.9s ease, width 0.9s ease, height 0.9s ease, transform 0.9s ease";

    document.body.appendChild(clone);

    viewer.classList.remove("open");
    viewer.style.display = "none";

    requestAnimationFrame(()=>{

        clone.style.left = end.left + "px";
        clone.style.top = end.top + "px";

        clone.style.width = end.width + "px";
        clone.style.height = end.height + "px";

        clone.style.transform = "rotate(360deg)";
    });

    clone.addEventListener("transitionend", ()=>{

        clone.remove();
        activeThumb = null;

    }, { once:true });
});
