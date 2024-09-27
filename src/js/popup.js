export function createPopup(title, buttons) {
   const popup = document.createElement('div');
   popup.classList.add('popup');

   const popupBlock = document.createElement('div');
   popupBlock.classList.add('popup__block');

   const popupText = document.createElement('p');
   popupText.classList.add('popup__text');
   popupText.textContent = title;

   const popupChoose = document.createElement('div');
   popupChoose.classList.add('popup__choose');

   buttons.forEach(button => popupChoose.appendChild(button));

   popupBlock.append(popupText, popupChoose);
   popup.appendChild(popupBlock);

   document.body.appendChild(popup);

   return popup;
}