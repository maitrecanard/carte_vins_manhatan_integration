//Pop-up d'inscription
// constante pour la selection du Body
const body = document.querySelector('body');

//déclaration des variables
let calc;
let modal;
let cancel; 
let confirm;



//Création du calc
const createCalc = () => {
    // création de la balise div
    calc = document.createElement('div');
    //ajout de la class calc
    calc.classList.add('calc');
      // si l'utilisateur clique ailleurs cela efface la pop-up

};

//Création du modal
const createModal = () =>  {
    //Création de la balise
    modal = document.createElement('form');
 
    //ajout du HTML
    modal.innerHTML = `
        <h1>Connexion</h1>
        <label for="">Identifiant</label>
        <input type="email">
        <label for="">Mot de passe</label>
        <input type="password">
        `;

    //création du bouton enregistrer
    const register = document.createElement('button');
    //insertion du texte dans le bouton
    register.innerText = 'Se connecter';
    //ajout du bouton dans la créatino du modal
    const questionRegister = document.createElement('p');
    questionRegister.innerHTML = 'Pas encore incrit ? <a href="./register.html">Créer votre compte ici</a>';
    modal.addEventListener("click", event => {
        event.stopPropagation();
      });
    modal.append(register, questionRegister); 
};

export function openModal(question) {
    //invocation des functions
    createCalc();
    createModal(question);
    calc.append(modal);
    body.append(calc);

    return new Promise((resolve, reject) => {
        calc.addEventListener("click", () => {
          resolve(false);
          calc.remove();
        });
    
        cancel.addEventListener("click", () => {
          resolve(false);
          calc.remove();
        });
    
        confirm.addEventListener("click", () => {
          resolve(true);
          calc.remove();
        });
      });
}