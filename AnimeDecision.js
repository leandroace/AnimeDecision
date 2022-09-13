const loadanime = async() => {
  const anime = await fetch('https://api.jikan.moe/v4/random/anime');
  const datos = await anime.json();
  console.log(anime);
  console.log(datos.data.title);
  console.log(datos);
  const animes = document.querySelector('#anime')
  animes.textContent = datos.data.title
  const foto = document.querySelector('#pa')
  foto.src =datos.data.images.jpg.image_url
  
  
}




loadanime();