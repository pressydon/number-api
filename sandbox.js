const form = document.querySelector('.form'); 
const card = document.querySelector('.card');
const copyBtn = document.querySelector('.copy-btn');


form.addEventListener('submit', getFacts);

function getFacts(e){
    e.preventDefault();
    let input = form.input.value;
   let cardTitle = document.querySelector('.card-title');
   let cardText = document.querySelector('.card-text');

  if(input!==''){

    fetch(`http://numbersapi.com/${input}`)
    .then(response => response.text())
    .then(data => {
        cardTitle.innerHTML =input;
        cardText.innerHTML = data;
        card.style.display = 'block';
    })
    .catch(err => console.log(err));
  }
}

copyBtn.addEventListener('click', ()=>{
    copyText();
});
function copyText (){
    const textarea = document.createElement('textarea');
    let cardText = document.querySelector('.card-text').innerHTML;

    textarea.value = cardText;
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy')
    textarea.remove();
    alert('Fact Copied');
}