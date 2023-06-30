const djContainer = document.querySelector(".grids");
const hamburger = document.querySelector('.navbars');
const mobileMenu = document.querySelector('.mobilemenu');
const mobileMenuItems = document.querySelectorAll('.item');
const bars = document.querySelector('.navbars');
const viewMore = document.querySelector(".featureddjs button");
const closeButton = document.querySelector('.xbutton');



mobileMenuItems.forEach((item)=>{
    item.addEventListener('click',()=>{
    mobileMenu.style.display = 'none';
    });
})

hamburger.addEventListener('click',()=>{
    mobileMenu.style.display = 'block'; 
   
       bars.style.display = 'none';
       document.body.style.overflow ='hidden'


})


closeButton.addEventListener('click',()=>{
    mobileMenu.style.display ='none';
    bars.style.display = 'flex';
    overflow='hidden';
    document.body.style.overflow = "scroll";
})


const djData = [
  {
    djImage: "./Images/pageimages/kabza.png",
    djName: "Kabza De Small",
    description1:
      "One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance",
    description2:
      "Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular",
  },

  {
    djImage: "./Images/pageimages/maphorisa.png",
    djName: "Maphorisa",
    description1:
      "One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance",
    description2:
      "Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular",
  },

  {
    djImage: "./Images/pageimages/maphorisa.png",
    djName: "Kabza De Small",
    description1:
      "One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance",
    description2:
      "Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular",
  },

  {
    djImage: "./Images/pageimages/maphorisa.png",
    djName: "Kabza De Small",
    description1:
      "One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance",
    description2:
      "Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular",
  },
  {
    djImage: "./Images/pageimages/maphorisa.png",
    djName: "Kabza De Small",
    description1:
      "One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance",
    description2:
      "Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular",
  },

  {
    djImage: "./Images/pageimages/maphorisa.png",
    djName: "Kabza De Small",
    description1:
      "One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance",
    description2:
      "Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular",
  },
];

const createFeaturedDjs=()=>{
   djData.map((dj)=>{
const djInfor = document.createElement('li');
djInfor.classList.add('djcontent')
djInfor.innerHTML = `
<div class="djimage">
            <img
              class="image1"
              src="./Images/pageimages/djbackground.jpg"
              alt="djbackground"
            />
            <img
              src="${dj.djImage}"
              class="image2"
              alt="artistimage"
            />
          </div>
          <ul>
            <li class="djname">${dj.djName}</li>
            <li class="djdescription1">
             ${dj.description1}
            </li>
            <li class="djdescrition2">
              ${dj.description2}
            </li>
          </ul>
        </li>

`;
djContainer.appendChild(djInfor);
   });
};
createFeaturedDjs(); 

