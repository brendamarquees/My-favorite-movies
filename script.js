var listaFilmes = [
  "https://images-na.ssl-images-amazon.com/images/I/810SG2gPSPL.jpg",
  "https://media.fstatic.com/LaHgrQi1ym3ThTEBHepNIwFTfN8=/210x312/smart/media/movies/covers/2020/03/AAAABXu8meJUV4nV9JXU0gF0R0ikFamfTb8igSHYY5MW__4V7Z4vB-L0eWTT9oxhH9_z4brFtu.jpg",
  "https://br.web.img3.acsta.net/pictures/19/01/31/11/55/2714336.jpg",
  "https://i.pinimg.com/originals/95/4f/3a/954f3a2a4480441dc27b4b1620d3f91b.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}