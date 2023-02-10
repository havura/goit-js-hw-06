const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=720',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=720',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=720',
    alt: 'Group of Horses Running',
  },
];

const listGallery = document.querySelector(".gallery");

const createGalleryItem = images.map(({ url, alt }) => `<li><img src= ${url} alt= ${alt}></li>`).join("");
listGallery.insertAdjacentHTML("afterbegin", createGalleryItem);

console.log(listgGallery);
console.log(createGalleryItem);
