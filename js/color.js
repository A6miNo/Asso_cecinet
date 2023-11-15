// Sélection de tous les éléments auquel le changement de couleur sera appliqué.
const elementsToChangeColor = document.querySelectorAll("footer, ul, .sidebar, .circle, .article, article, h1, .active a, header, .bar, a, .navbar");
const colorpicker = document.getElementById("colorpicker");


// Cette fonction calcule la couleur du texte en fonction de la couleur de fond.
function getContrastColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? "#000" : "#fff";
}

function changeColor(ev) {
  const backgroundColor = ev.target.value;
  const textColor = getContrastColor(backgroundColor);

  elementsToChangeColor.forEach((element) => {
    element.style.background = backgroundColor;
    element.style.borderColor = backgroundColor;
   
      element.style.color = textColor;
    
  });


  // Mise à jour de la couleur du menu burger
 
  const barElements = document.querySelectorAll(".bar");
  barElements.forEach((barElement) => {
    barElement.style.backgroundColor = textColor;
    const beforeStyle = `
      .bar::before {
        background-color: ${textColor};
      }
    `;
    const afterStyle = `
      .bar::after {
        background-color: ${textColor};
      }
    `;
    
    const styleTag = document.createElement('style');
    styleTag.innerHTML = beforeStyle + afterStyle;
    document.head.appendChild(styleTag);
  });
}

colorpicker.addEventListener("change", changeColor);

