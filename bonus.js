document.addEventListener('DOMContentLoaded', function() { //verifie que la page est chargée
    let button = document.createElement('button'); // créer un élément
    button.type = 'button'; // définie le type
    button.innerHTML = 'Bouton'; 
    button.className = 'btn-style';
    let container = document.querySelector('.container');
    container.appendChild(button);
    // function permettant de créer un élément html fast
    function create(elem, className, childName) {
        let element = document.createElement(elem);
        element.className = className;
        childName.appendChild(element);
        return element;
    }

    button.onclick = function() {
        // cache le bouton
        button.style.display = 'none';
        // création de la grille
        create("div", "grid", container); 
        let grid = document.querySelector('.grid');
        // séparateur
        create("div", "separateur", container);
        // création de la div du code écris
        create("div", "div-code", container);
        let divCode = document.querySelector('.div-code');
        
        var tab = []; // Création d'un tableau
        let nbDiv = 16; // Choix du nombre de div
        for (let i = 0; i < nbDiv; i++) { // défini à 9 parce qu'il y a 9 cases à remplir
            var div = create("div", "div", grid);
            var b = create("button", "btn-nb", div);
            // insére ds le tab
            tab.push(b);
        }
        // Mélanger tableau :
        let shuffle = tab.sort(() => 0.5 - Math.random()); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        // Récupère le sous-tableau des 9 premiers éléments après mélange
        let selected = shuffle.slice(0, 10); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
        // var selectedTab = [];
        for (let i = 0; i < selected.length; i++) {
            selected[i].innerHTML = i;
            selected[i].className = "btn-selected btn-nb";
            //selectedTab.push(selected[i]);

            selected[i].onclick = function(){
                if (tabCode[1].innerHTML === "") {
                    console.log(selected[i].innerHTML);
                    tabCode[1].innerHTML = selected[i].innerHTML;
                    // if (tabCode[2].innerHTML === "" && tabCode[1].innerHTML != "") {
                    //     console.log(selected[i].innerHTML);
                    //     tabCode[2].innerHTML = selected[i].innerHTML;
                    // }
                }
            };
        }

        // taille du code
        let codeLenght = 3;
        tabCode = [];
        for (let i = 0; i < codeLenght; i++) {
            var tryPass = create("div", "tryPass", divCode);
            var pCode = create("p","pCode", tryPass);
            tabCode.push(pCode);
        }
    };
});