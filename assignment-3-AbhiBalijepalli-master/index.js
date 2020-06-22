/* 
 * Author: Abhi Balijepalli
 * Assignment: client side javascript - DOM manipulation
 * 
 */

var navSearch = document.getElementById("navbar-search-input");
var navSearchButton = document.getElementById("navbar-search-button");
var modalBackdrop = document.getElementById("modal-backdrop");
var twitModal = document.getElementById("create-twit-modal");
var twitAtt = document.getElementById("twit-attribution-input");
var twitAuthor = document.getElementById("twit-author");
var twitInput = document.getElementById("twit-text-input");
var twitButton = document.getElementById("create-twit-button");
var modalCancelButton  = document.getElementsByClassName("modal-cancel-button")[0];
var modalCloseButton = document.getElementsByClassName("modal-close-button")[0];
var modalAcceptButton = document.getElementsByClassName("modal-accept-button")[0];
/*var cancelButton = document.getElementById("cancel");
var acceptButton = document.getElementById("accept");
var closeButton = document.getElementById("close");*/


twitButton.addEventListener('click', modalConfig);
modalCancelButton.addEventListener('click', modalConfig);
modalCloseButton.addEventListener('click', modalConfig);
modalAcceptButton.addEventListener('click', newTwit);
navSearchButton.addEventListener('click', search);
navSearch.addEventListener('click', search);

function modalConfig(event){
    if(modalBackdrop.classList.contains("hidden")){
        twitInput.value = "";
        twitAtt.value = "";
        twitModal.classList.remove('hidden');
        modalBackdrop.classList.remove('hidden');
    } else {
        twitModal.classList.add('hidden');
        modalBackdrop.classList.add('hidden');
    }
}


function newTwit(event) {
    if ((twitInput.value == "" ) || (twitAtt.value == "")) {
        alert("ALERT! please enter something in both fields")
        return;
      }

    var icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-bullhorn');

    var twitIcon = document.createElement('div');
    twitIcon.classList.add('twit-icon');
    twitIcon.appendChild(icon);

    var NewText = document.createElement('p');
    NewText.classList.add('twit-text');
    NewText.textContent = twitInput.value;

    var author = document.createElement('a');
    author.classList.add('twit-author');
    author.textContent = twitAtt.value;

    var attribution = document.createElement('p');
    attribution.classList.add('twit-attribution');
    attribution.appendChild(author);

    var twitContent = document.createElement('div');
    twitContent.classList.add("twit-content");
    twitContent.appendChild(NewText);
    twitContent.appendChild(attribution);


    var twit = document.createElement('article');
    twit.classList.add('twit');
    twit.appendChild(twitIcon);
    twit.appendChild(twitContent);

    var twitBody = document.getElementsByClassName('twit-container')[0];
    twitBody.appendChild(twit);

    modalConfig();
}

function search(event) {
    var twits = document.querySelectorAll('.twit');
    for (var i = 0; i < twits.length; i++) {
		if(twits[i].textContent.toLowerCase().indexOf(navSearch.value.toLowerCase()) == -1){
			twits[i].parentNode.removeChild(twits[i]);
		}
    }
}

/*cancelButton.addEventListener('click', modalConfig);
closeButton.addEventListener('click', modalConfig);
acceptButton.addEventListener('click', newTwit);*/