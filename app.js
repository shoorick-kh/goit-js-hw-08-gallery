const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const overlayRef = document.querySelector('.lightbox__overlay');
const lightboxImgRef = document.querySelector('.lightbox__image');
const closeLightboxBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]',
);

const createGallery = function (item) {
  return `<li class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</li>`;
};

const markupGallery = galleryItems.map(item => createGallery(item)).join('');
galleryRef.innerHTML = markupGallery;

const modalOpen = evt => {
  if (evt.target === evt.currentTarget) return;
  evt.preventDefault();
  lightboxRef.classList.add('is-open');
  lightboxImgRef.src = evt.target.getAttribute('data-source');
  lightboxImgRef.alt = evt.alt;
  // console.log(evt.target);
  // console.log(evt.currentTarget);
  document.body.addEventListener('keydown', onEsc);
};

const modalClose = () => {
  lightboxRef.classList.remove('is-open');
  lightboxImgRef.src = '';
  lightboxImgRef.alt = '';
  document.body.removeEventListener('keydown', onEsc);
};

const onEsc = evt => {
  if (evt.code === 'Escape') {
    modalClose();
  }
  // console.log(evt.code);
};

galleryRef.addEventListener('click', modalOpen);
closeLightboxBtnRef.addEventListener('click', modalClose);
overlayRef.addEventListener('click', evt => {
  if (evt.target === evt.currentTarget) {
    modalClose();
  }
});
