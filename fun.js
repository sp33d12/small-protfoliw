let dev = document.querySelector('.Frontend');
let inc = 0;


autoText();

function autoText(){
  const c = Math.round(Math.random() * 255);
  inc++;
  dev.innerHTML = `Frontend Developer`.slice(0,inc);
  setTimeout(autoText,550);
}

setInterval(autoText,800);