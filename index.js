const djContainer = document.querySelector(".grids");

const djData = {
  djImage: "Images/pageimages/djbackground.jpg",
  djName: "Kabza De Small",
  description1:
    "One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance",
  description2:
    "Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular",

  djImage: "Images/pageimages/djbackground.jpg",
  djName: "Kabza De Small",
  description1:
    "One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance",
  description2:
    "Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular",

  djImage: "Images/pageimages/djbackground.jpg",
  djName: "Kabza De Small",
  description1:
    "One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance",
  description2:
    "Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular",

  djImage: "Images/pageimages/djbackground.jpg",
  djName: "Kabza De Small",
  description1:
    "One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance",
  description2:
    "Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular",

  djImage: "Images/pageimages/djbackground.jpg",
  djName: "Kabza De Small",
  description1:
    "One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance",
  description2:
    "Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular",

  djImage: "Images/pageimages/djbackground.jpg",
  djName: "Kabza De Small",
  description1:
    "One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance",
  description2:
    "Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular",
};

const createFeaturedDjs = () =>
  djData.map((card) => {
    const djInfor = document.createElement("li");
    djInfor.classList.add("djcontent");
    djInfor.innerHTML = `
<div class="djimage">
            <img
              class="image1"
              src="./Images/pageimages/djbackground.jpg"
              alt="djbackground"
            />
            <img
              src="${djData.djImage}"
              class="image2"
              alt="artistimage"
            />
          </div>
          <ul>
            <li class="djname">${djData.djname}</li>
            <li class="djdescription1">
            ${djData.description1}
            </li>
            <li class="djdescrition2">
              ${djData.description2}
            </li>
          </ul>
        </li>
        <li class="djcontent">
          <div class="djimage">
            <img
              class="image1"
              src="./Images/pageimages/djbackground.jpg"
              alt="djbackground"
            />
            <img
              src="./Images/pageimages/maphorisa.png"
              class="image2"
              alt="artistimage"
            />
          </div>
`;
    djContainer.appendChild(djInfor);
  });

createFeaturedDjs();
