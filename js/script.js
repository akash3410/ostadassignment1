// Define UI element
let basicPlus = document.getElementById('basicPlus');
let basicMinus = document.getElementById('basicMinus');
let proPlus = document.getElementById('proPlus');
let proMinus = document.getElementById('proMinus');
let showBasicAmount = document.getElementById('showBasicAmount');
let showBasicRoom = document.getElementById('showBasicRoom');
let showProAmount = document.getElementById('showProAmount');
let showProRoom = document.getElementById('showProRoom');
let proSignUp = document.getElementById('proSignUp');
let showproDialog = document.getElementById('showproDialog');
let basicSignUp = document.getElementById('basicSignUp');
let showBasicDialog = document.getElementById('showBasicDialog');
let form = document.getElementById('form');

// add eventLitchener
basicPlus.addEventListener('click', addAmount);
basicMinus.addEventListener('click', minusAmount);
proPlus.addEventListener('click', addProAmount);
proMinus.addEventListener('click', minusProAmount);
proSignUp.addEventListener('click', ProDialog);
basicSignUp.addEventListener('click', basicDialog);
form.addEventListener('submit', showMessage);

function showMessage(e) {
  e.preventDefault();
  // const responseMessage = document.getElementById('responseMessage');
  // responseMessage.textContent = `Message sent successfully!`
  let div = document.createElement('div');
  div.className = `bg-success text-light rounded p-2 w-50 text-center success`;
  div.appendChild(document.createTextNode("Message sent successfully!"));
  let contact = document.getElementById('contact');
  contact.insertBefore(div, form);
  setTimeout(function () {
    document.querySelector('.success').remove();
  }, 5000);
  this.reset();
}

let basicAmount = 199;
let basicRoom = 1;
function addAmount() {
  basicAmount = basicAmount + 99;
  basicRoom = basicRoom + 1;
  showBasicAmount.innerHTML = `$ ${basicAmount}`;
  showBasicRoom.innerHTML = ` ${basicRoom} room`
}

function minusAmount() {
  if (basicAmount <= 199 || basicRoom <= 1) {
    return 0
  } else {
    basicAmount = basicAmount - 99;
    basicRoom = basicRoom - 1;
    showBasicAmount.innerHTML = `$ ${basicAmount}`;
    showBasicRoom.innerHTML = ` ${basicRoom} room`
  }
}

function basicDialog() {
  showBasicDialog.innerHTML = `Thank you for chosing ${basicRoom} room`;
}


// For Pro
let proAmount = 249;
let proRoom = 1;
function addProAmount() {
  proAmount = proAmount + 99;
  proRoom = proRoom + 1;
  showProAmount.innerHTML = `$ ${proAmount}`;
  showProRoom.innerHTML = ` ${proRoom} room`
}

function minusProAmount() {
  if (proAmount <= 249 || proRoom <= 1) {
    return 0
  } else {
    proAmount = proAmount - 99;
    proRoom = proRoom - 1;
    showProAmount.innerHTML = `$ ${proAmount}`;
    showProRoom.innerHTML = ` ${proRoom} room`
  }
}

function ProDialog() {
  showBasicRoom.className = 'display'
  showproDialog.innerHTML = `Thank you for chosing ${proRoom} room`;
}


