const gallery = document.getElementById("gallery");
const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewer-image");
const textContent = document.getElementById("text-content");
const closeBtn = document.getElementById("close");

/*
    Write your text here.
    Key = image number
*/

const descriptions = {
    1: "Text for image 1",
    2: "Text for image 2",
    3: "Text for image 3",
    4: "Text for image 4",
    5: "Text for image 5",
    6: "Text for image 6",
    7: "Text for image 7",
    8: "Text for image 8",
    9: "Text for image 9",
    10: "Text for image 10",
    11: "Text for image 11",
    12: "Text for image 12",
    13: "Text for image 13",
    14: "Text for image 14",
    15: "Text for image 15",
    16: "Text for image 16",
    17: "Text for image 17",
    18: "Text for image 18",
    19: "Text for image 19",
    20: "Text for image 20",
    21: "Text for image 21",
    22: "Text for image 22",
    23: "Text for image 23",
    24: "Text for image 24",
    25: "Text for image 25",
    26: "Text for image 26",
    27: "Text for image 27",
    28: "Text for image 28",
    29: "Text for image 29",
    30: "Text for image 30",
    31: "Text for image 31",
    32: "Text for image 32"
};

for (let i = 1; i <= 32; i++) {
    const img = document.createElement("img");

    img.src = `images/${i}.png`;
    img.className = "thumb";

    img.addEventListener("click", () => openImage(img, i));

    gallery.appendChild(img);
}

function openImage(clickedImage, number) {

    const rect = clickedImage.getBoundingClientRect();

    const flying = document.createElement("img");

    flying.src = clickedImage.src;
    flying.className = "fly-image";

    flying.style.left = rect.left + "px";
    flying.style.top = rect.top + "px";
    flying.style.width = rect.width + "px";
    flying.style.height = rect.height + "px";

    document.body.appendChild(flying);

    requestAnimationFrame(() => {

        flying.style.transition =
            "all 550ms cubic-bezier(.22,1,.36,1)";

        flying.style.left = "0px";
        flying.style.top = "0px";
        flying.style.width = "50vw";
        flying.style.height = "100vh";
    });

    setTimeout(() => {

        viewerImage.src = clickedImage.src;
        textContent.innerHTML =
            descriptions[number] || "";

        viewer.classList.add("active");

        flying.remove();

    }, 550);
}

closeBtn.addEventListener("click", () => {
    viewer.classList.remove("active");
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        viewer.classList.remove("active");
    }
});
