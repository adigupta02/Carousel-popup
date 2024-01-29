// document.addEventListener("DOMContentLoaded", function () {
//     // Make an AJAX request to the new API
//     fetch("https://guide-data.onrender.com/upload/site?url=anuj")
//         .then(response => response.json())
//         .then(data => {
//             // Assuming the API returns an array of objects with description and imagePath properties
//             const imagesData = data;

//             // Populate carousel indicators
//             const indicatorsContainer = document.querySelector(".carousel-indicators");
//             imagesData.forEach((_, index) => {
//                 const indicator = document.createElement("button");
//                 indicator.type = "button";
//                 indicator.setAttribute("data-bs-target", "#carouselExampleCaptions");
//                 indicator.setAttribute("data-bs-slide-to", index.toString());
//                 if (index === 0) {
//                     indicator.classList.add("active");
//                 }
//                 indicatorsContainer.appendChild(indicator);
//             });

//             // Populate carousel items
//             const carouselInner = document.querySelector(".carousel-inner");
//             imagesData.forEach((imageData, index) => {
//                 const carouselItem = document.createElement("div");
//                 carouselItem.classList.add("carousel-item");
//                 if (index === 0) {
//                     carouselItem.classList.add("active");
//                 }

//                 const img = document.createElement("img");
//                 img.src = imageData.imagePath;
//                 img.classList.add("d-block", "w-100");
//                 img.alt = "Image " + (index + 1);

//                 const caption = document.createElement("div");
//                 caption.classList.add("carousel-caption", "d-none", "d-md-block");
//                 caption.innerHTML = `
//                     <h5>${imageData.description}</h5>
//                     <p>Additional caption if needed</p>
//                 `;

//                 carouselItem.appendChild(img);
//                 carouselItem.appendChild(caption);
//                 carouselInner.appendChild(carouselItem);
//             });
//         })
//         .catch(error => console.error("Error fetching data:", error));
// });





document.addEventListener("DOMContentLoaded", function () {
    // Make an AJAX request to the new API
    fetch("https://guide-data.onrender.com/upload/site?url=anuj")
        .then(response => response.json())
        .then(data => {
            // Assuming the API returns an array of objects with description and imagePath properties
            const imagesData = data;

            // Populate carousel indicators
            const indicatorsContainer = document.querySelector(".carousel-indicators");
            imagesData.forEach((_, index) => {
                const indicator = document.createElement("button");
                indicator.type = "button";
                indicator.setAttribute("data-bs-target", "#carouselExampleCaptions");
                indicator.setAttribute("data-bs-slide-to", index.toString());
                if (index === 0) {
                    indicator.classList.add("active");
                }
                indicatorsContainer.appendChild(indicator);
            });

            // Populate carousel items
            const carouselInner = document.querySelector(".carousel-inner");
            imagesData.forEach((imageData, index) => {
                const carouselItem = document.createElement("div");
                carouselItem.classList.add("carousel-item");
                if (index === 0) {
                    carouselItem.classList.add("active");
                }

                const img = document.createElement("img");
                img.src = imageData.imagePath;
                img.classList.add("d-block", "mx-auto");
                img.style.width = "100%";
                img.style.height = "640px";
                img.alt = "Image " + (index + 1);

                const caption = document.createElement("div");
                caption.classList.add("carousel-caption", "d-none", "d-md-block");
                caption.innerHTML = `
                    <h5>${imageData.description}</h5>
                `;

                carouselItem.appendChild(img);
                carouselItem.appendChild(caption);
                carouselInner.appendChild(carouselItem);
            });

        })
        .catch(error => console.error("Error fetching data:", error));
});
