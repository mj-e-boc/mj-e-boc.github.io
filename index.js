const djContainer = document.querySelector('.grids');
const hamburger = document.querySelector('.navbars');
const mobileMenu = document.querySelector('.mobilemenu');
const mobileMenuItems = document.querySelectorAll('.item');
const bars = document.querySelector('.navbars');

const closeButton = document.querySelector('.xbutton');

mobileMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';

  bars.style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  bars.style.display = 'flex';
  document.querySelector('body').style.overflow = 'scroll';
});

const djData = [
  {
    djImage: './Images/pageimages/kabza.png',
    djName: 'Kabza De Small',
    description1:
      'Termed the godfather of amapiano, having pioneered the genre back in 2018, Kabza is famous for producing hits ever now and then',
    description2: 'Kabza De Small is also famous for his great djing skill',
  },

  {
    djImage: './Images/pageimages/maphorisa.png',
    djName: 'Dj Maphorisa',
    description1:
      'One of the best producers South Africa has to offer, having previously worked with Drake to produce one dance',
    description2:
      'Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular',
  },

  {
    djImage: './Images/pageimages/daliwonga.png',
    djName: 'Daliwonga',
    description1:
      'Daliwonga is a 21 year old South African Amapiano artist from the Eastern Cape. ',
    description2:
      'He is known for his unique contributions to the Amapiano music genre and has gained recognition from fans all over the world',
  },

  {
    djImage: './Images/pageimages/zain sa.png',
    djName: 'Zain Sa',
    description1:
      'Won the hearts of a lot with his hit singles in 2018 and the unique drum in his music',
    description2:
      'Dj Maphorisa is also famous his contributions in producing the popular hit single - Particular',
  },
  {
    djImage: './Images/pageimages/finaltrial.png',
    djName: 'M jay',
    description1:
      'Created this page, plays in many clubs in Poland varying genres of music for all groups of people',
    description2:
      'Popular for his patience and great crow control in clubs in plays in, has many at heart.',
  },

  {
    djImage: './Images/pageimages/musakeys.png',
    djName: 'Musa Keys',
    description1:
      " Musa Keys was born on May 9, 1990 in Giyani in the Limpopo Province's northeastern area. He hails from Polokwane, where he first started his music career",
    description2:
      'Musa Keys is popular known for his chart-topping singles Samarian Boy and Vula Mlomo',
  },
];

const createFeaturedDjs = () => {
  djData.map((dj) => {
    const djInfor = document.createElement('li');
    djInfor.classList.add('djcontent');
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
    return djContainer.appendChild(djInfor);
  });
};
createFeaturedDjs();
