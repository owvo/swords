const images = [
    {
        file: "images/1.png",
        title: "Image 1",
        text: "Write anything you want here."
    },
    {
        file: "images/2.png",
        title: "Image 2",
        text: "Description for image 2."
    },
    {
        file: "images/3.png",
        title: "Image 3",
        text: "Description for image 3."
    },
    {
        file: "images/4.png",
        title: "Image 4",
        text: "Description for image 4."
    },
    {
        file: "images/5.png",
        title: "Image 5",
        text: "Description for image 5."
    },
    {
        file: "images/6.png",
        title: "Image 6",
        text: "Description for image 6."
    },
    {
        file: "images/7.png",
        title: "Image 7",
        text: "Description for image 7."
    },
    {
        file: "images/8.png",
        title: "Image 8",
        text: "Description for image 8."
    },
    {
        file: "images/9.png",
        title: "Image 9",
        text: "Description for image 9."
    },
    {
        file: "images/10.png",
        title: "Image 10",
        text: "Description for image 10."
    },
    {
        file: "images/11.png",
        title: "Image 11",
        text: "Description for image 11."
    },
    {
        file: "images/12.png",
        title: "Image 12",
        text: "Description for image 12."
    },
    {
        file: "images/13.png",
        title: "Image 13",
        text: "Description for image 13."
    },
    {
        file: "images/14.png",
        title: "Image 14",
        text: "Description for image 14."
    },
    {
        file: "images/15.png",
        title: "Image 15",
        text: "Description for image 15."
    },
    {
        file: "images/16.png",
        title: "Image 16",
        text: "Description for image 16."
    },
    {
        file: "images/17.png",
        title: "Image 17",
        text: "Description for image 17."
    },
    {
        file: "images/18.png",
        title: "Image 18",
        text: "Description for image 18."
    },
    {
        file: "images/19.png",
        title: "Image 19",
        text: "Description for image 19."
    },
    {
        file: "images/20.png",
        title: "Image 20",
        text: "Description for image 20."
    },
    {
        file: "images/21.png",
        title: "Image 21",
        text: "Description for image 21."
    },
    {
        file: "images/22.png",
        title: "Image 22",
        text: "Description for image 22."
    },
    {
        file: "images/23.png",
        title: "Image 23",
        text: "Description for image 23."
    },
    {
        file: "images/24.png",
        title: "Image 24",
        text: "Description for image 24."
    },
    {
        file: "images/25.png",
        title: "Image 25",
        text: "Description for image 25."
    },
    {
        file: "images/26.png",
        title: "Image 26",
        text: "Description for image 26."
    },
    {
        file: "images/27.png",
        title: "Image 27",
        text: "Description for image 27."
    },
    {
        file: "images/28.png",
        title: "Image 28",
        text: "Description for image 28."
    },
    {
        file: "images/29.png",
        title: "Image 29",
        text: "Description for image 29."
    },
    {
        file: "images/30.png",
        title: "Image 30",
        text: "Description for image 30."
    },
    {
        file: "images/31.png",
        title: "Image 31",
        text: "Description for image 31."
    },
    {
        file: "images/32.png",
        title: "Image 32",
        text: "Description for image 32."
    }
];

const gallery = document.getElementById("gallery");
const galleryView = document.getElementById("gallery-view");
const detailView = document.getElementById("detail-view");

const detailImage = document.getElementById("detail-image");
const detailTitle = document.getElementById("detail-title");
const detailText = document.getElementById("detail-text");

images.forEach(item => {
    const img = document.createElement("img");

    img.src = item.file;
    img.className = "thumbnail";
    img.alt = item.title;

    img.addEventListener("click", () => {
        detailImage.src = item.file;
        detailTitle.textContent = item.title;
        detailText.textContent = item.text;

        galleryView.classList.add("hidden");
        detailView.classList.remove("hidden");
    });

    gallery.appendChild(img);
});

document.getElementById("back-btn").addEventListener("click", () => {
    detailView.classList.add("hidden");
    galleryView.classList.remove("hidden");
});
