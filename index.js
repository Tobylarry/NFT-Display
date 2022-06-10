'use strict';

let button = document.querySelectorAll('.display');
let modal = document.querySelector('.modal');
let nftDetails = document.querySelector('.nftDetails');
let img = document.querySelector('.img');
let closeModal = document.querySelector('.close');
let overlay = document.querySelector('.overlay');

//This line of code helps to close Modal after viewing NFT
function closModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//This line of code helps to open Modal after viewing NFT
function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//Loop through the display class and perform specific action for different buttons
for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', check)
}

//Actions to be performed after pressing each button
function check(e) {
    if(e.target.value == 'NFT1'){
        img.src = './image/beachLady.jpg';
        img.alt = 'Beach Lady';
        nftDetails.innerHTML = 
        `Shot at Long Beach Califonia 
        This picture was taking as far back as the 90's.
        It is a symbol of sacred peace.
         `;
    }
    if(e.target.value == 'NFT2'){
        img.src = './image/eye.jpg';
        img.alt = 'Eye of god';
        nftDetails.innerHTML = 'Greek Methodologies';
    }
    if(e.target.value == 'NFT3'){
        img.src = './image/treeLife.jpg';
        img.alt = 'Tree of Life';
        nftDetails.innerHTML = 'Old Tree';
    }
    openModal();
}

//The methods allow you to close modal using the ESC Key
document.addEventListener('keydown', function(e){
   if(e.key === 'Escape'){
       if(!modal.classList.contains('hidden')){
          closModal();
       }
   }
});

//The method allow you to close modal using the Plus sign
closeModal.addEventListener('click', closModal);
