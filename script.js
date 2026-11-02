const fotos = [
  {
    "src": "images/foto-01.jpg",
    "alt": "Fotografía 1 de bombones artesanales"
  },
  {
    "src": "images/foto-02.jpg",
    "alt": "Fotografía 2 de bombones artesanales"
  },
  {
    "src": "images/foto-03.jpg",
    "alt": "Fotografía 3 de bombones artesanales"
  },
  {
    "src": "images/foto-04.jpg",
    "alt": "Fotografía 4 de bombones artesanales"
  },
  {
    "src": "images/foto-05.jpg",
    "alt": "Fotografía 5 de bombones artesanales"
  },
  {
    "src": "images/foto-06.jpg",
    "alt": "Fotografía 6 de bombones artesanales"
  },
  {
    "src": "images/foto-07.jpg",
    "alt": "Fotografía 7 de bombones artesanales"
  },
  {
    "src": "images/foto-08.jpg",
    "alt": "Fotografía 8 de bombones artesanales"
  },
  {
    "src": "images/foto-09.jpg",
    "alt": "Fotografía 9 de bombones artesanales"
  },
  {
    "src": "images/foto-10.jpg",
    "alt": "Fotografía 10 de bombones artesanales"
  },
  {
    "src": "images/foto-11.jpg",
    "alt": "Fotografía 11 de bombones artesanales"
  },
  {
    "src": "images/foto-12.jpg",
    "alt": "Fotografía 12 de bombones artesanales"
  },
  {
    "src": "images/foto-13.jpg",
    "alt": "Fotografía 13 de bombones artesanales"
  },
  {
    "src": "images/foto-14.jpg",
    "alt": "Fotografía 14 de bombones artesanales"
  },
  {
    "src": "images/foto-15.jpg",
    "alt": "Fotografía 15 de bombones artesanales"
  },
  {
    "src": "images/foto-16.jpg",
    "alt": "Fotografía 16 de bombones artesanales"
  },
  {
    "src": "images/foto-17.jpg",
    "alt": "Fotografía 17 de bombones artesanales"
  },
  {
    "src": "images/foto-18.jpg",
    "alt": "Fotografía 18 de bombones artesanales"
  },
  {
    "src": "images/foto-19.jpg",
    "alt": "Fotografía 19 de bombones artesanales"
  },
  {
    "src": "images/foto-20.jpg",
    "alt": "Fotografía 20 de bombones artesanales"
  },
  {
    "src": "images/foto-21.jpg",
    "alt": "Fotografía 21 de bombones artesanales"
  },
  {
    "src": "images/foto-22.jpg",
    "alt": "Fotografía 22 de bombones artesanales"
  },
  {
    "src": "images/foto-23.jpg",
    "alt": "Fotografía 23 de bombones artesanales"
  },
  {
    "src": "images/foto-24.jpg",
    "alt": "Fotografía 24 de bombones artesanales"
  },
  {
    "src": "images/foto-25.jpg",
    "alt": "Fotografía 25 de bombones artesanales"
  },
  {
    "src": "images/foto-26.jpg",
    "alt": "Fotografía 26 de bombones artesanales"
  },
  {
    "src": "images/foto-27.jpg",
    "alt": "Fotografía 27 de bombones artesanales"
  }
];
const gallery=document.getElementById('gallery');const lightbox=document.getElementById('lightbox');const large=document.getElementById('large');const caption=document.getElementById('caption');let current=0;let previousFocus=null;
fotos.forEach((foto,i)=>{const button=document.createElement('button');button.className='photo';button.type='button';button.setAttribute('aria-label',`Abrir fotografía ${i+1}`);const img=document.createElement('img');img.src=foto.src;img.alt=foto.alt;img.loading='lazy';button.appendChild(img);button.addEventListener('click',()=>openPhoto(i));gallery.appendChild(button)});
document.getElementById('count').textContent=`${fotos.length} fotografías`;
function showPhoto(i){current=(i+fotos.length)%fotos.length;large.src=fotos[current].src;large.alt=fotos[current].alt;caption.textContent=`${current+1} / ${fotos.length}`}
function openPhoto(i){previousFocus=document.activeElement;showPhoto(i);lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';document.getElementById('close').focus()}
function closePhoto(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';large.removeAttribute('src');if(previousFocus)previousFocus.focus()}
document.getElementById('close').addEventListener('click',closePhoto);document.getElementById('prev').addEventListener('click',()=>showPhoto(current-1));document.getElementById('next').addEventListener('click',()=>showPhoto(current+1));lightbox.addEventListener('click',e=>{if(e.target===lightbox)closePhoto()});document.addEventListener('keydown',e=>{if(!lightbox.classList.contains('open'))return;if(e.key==='Escape')closePhoto();if(e.key==='ArrowLeft')showPhoto(current-1);if(e.key==='ArrowRight')showPhoto(current+1)});document.getElementById('year').textContent=new Date().getFullYear();