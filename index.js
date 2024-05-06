(function () {

  let classLists = [
    "w-[200px]",
    "h-[150px]",
    "draggable",
    "hover:cursor-all-scroll",
  ];

  let categoryCss = [
    "md:container",
    "w-[90vw]",
    "mx-auto",
    "text-center",
    "p-4",
    "rounded",
    "transition-all",
    "duration-400",
    "md:grid",
    "md:grid-cols-4",
    "md:gap-4",
    "space-y-4",
    "mt-4",
    "text-left",
  ];
    
  document.querySelector("#addCategory").addEventListener("click", () => {
    const inputCategory = document
      .querySelector("#customCategory")
      .value.trim();

    if (inputCategory.length < 3) {
      alert("Category Must Contains 3 Letters!");
      return;
    }

    const customContainer = document.querySelector(".customContainer");

    const divEl = document.createElement("div");
    // divEl.id = customContainer.length + 11;
    divEl.classList.add("dropZone");
    for (let i = 0; i < categoryCss.length; i++) {
      divEl.classList.add(categoryCss[i]);
    }

    divEl.innerHTML = `<h1 class="font-bold">${inputCategory}</h1>`;

    const categoryColor = document.querySelector("#categoryColor").value;
    divEl.classList.add(`bg-[${categoryColor}]`);

     divEl.addEventListener("dragover", (e) => {
       e.preventDefault();
       divEl.classList.add("bg-gray-400");
       divEl.classList.add("text-black");
     });
     divEl.addEventListener("dragleave", (e) => {
       e.preventDefault();
       divEl.classList.remove("bg-gray-400");
       divEl.classList.remove("text-black");
     });

     divEl.addEventListener("drop", (e) => {
       e.preventDefault();
       divEl.classList.remove("bg-gray-400");
       divEl.classList.remove("text-black");
       const id = event.dataTransfer.getData("text");

       const draggableElement = document.getElementById(id);

       divEl.appendChild(draggableElement);
     });

    customContainer.appendChild(divEl);
  });

  document.querySelectorAll(".draggable").forEach((el) => {
    el.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text", e.target.id);
    });
  });

  document.querySelectorAll(".dropZone").forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      zone.classList.add("bg-gray-400");
      zone.classList.add("text-black");
    });
    zone.addEventListener("dragleave", (e) => {
      e.preventDefault();
      zone.classList.remove("bg-gray-400");
      zone.classList.remove("text-black");
    });

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("bg-gray-400");
      zone.classList.remove("text-black");
      const id = event.dataTransfer.getData("text");

      const draggableElement = document.getElementById(id);

      zone.appendChild(draggableElement);
    });
  });

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    position = true;
  });

  const draggableId = document.querySelectorAll(".draggable");

  document.querySelector("#imgAdd").addEventListener("click", (e) => {
    const url = document.getElementById("imageUrl");

    const image = document.createElement("img");

    image.src = url.value;
    image.draggable = true;
    image.id = `Image${draggableId.length + 1}`;
    image.alt = "Upload Failed";

    for (let i = 0; i < classLists.length; i++) {
      image.classList.add(classLists[i]);
    }

    const imageContainer = document.getElementById("imageContainer");

    imageContainer.appendChild(image);

    image.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text", e.target.id);
    });
  });

  document.querySelector("#mobileFile").addEventListener("change", (e) => {
    const imageContainer = document.getElementById("imageContainer");

    const imageFiles = event.target.files;

    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];

      const reader = new FileReader();

      reader.onload = function (event) {
        const img = document.createElement("img");
        img.src = event.target.result;
        img.id = "Image" + imageContainer.length + 1;
        img.draggable = true;
        img.alt = "Upload Failed";

        for (let i = 0; i < classLists.length; i++) {
          img.classList.add(classLists[i]);
        }

        img.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("text", e.target.id);
        });
        imageContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });

})();

let tl = gsap.timeline();

tl.from(".underline", {
  y: -100,
})

tl.from("#customCategory", {
  y: -200,
})

tl.from("#categoryColor", {
  y: -200,
});

tl.from("#addCategory", {
  y: -200,
});

tl.from("#title", {
  y: -500,
})

tl.from("#cat", {
  y: -900
});

tl.from("#imageContainer img", {
  x: -900,
  stagger: .3
});
tl.from("from #imageUrl", {
  x: -900,
});
tl.from("form button", {
  x: 900,
});
