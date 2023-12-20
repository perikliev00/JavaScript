import { first,second,third,fourth } from "./change.js";
[...document.querySelectorAll('section')].forEach(s=>s.style.display='none');
let years=document.getElementById('years');
years.style.display="block";
let year=years.getElementsByClassName('day');
year[0].addEventListener('click',first);
year[1].addEventListener('click',second);
year[2].addEventListener('click',third);
year[3].addEventListener('click',fourth);