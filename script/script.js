
const validationForm = () => {
    const form = document.getElementById('monForm');
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const numeroTel = document.getElementById('numeroTel');
    const email = document.getElementById('email');
    const entreprise = document.getElementById('entreprise');
    const typeEntreprise = document.getElementById('typeEntreprise');
    const nombreEmployes = document.getElementById('nombreEmployes');
    const budgetAnnuel = document.getElementById('budgetAnnuel');  

    const nomValue = nom.value.trim();
    const prenomValue = prenom.value.trim();
    const numeroTelValue = numeroTel.value.trim();
    const emailValue = email.value.trim();
    const entrepriseValue = entreprise.value.trim();
    const typeEntrepriseValue = typeEntreprise.value.trim();
    const nombreEmployesValue = nombreEmployes.value.trim();
    const budgetAnnuelValue = budgetAnnuel.value.trim();
   
    let noError = true;

    if (nomValue === '') {
        setError(nom, 'Veuillez entrer votre nom');
        noError = false;
    } else {
        setSuccess(nom);
    }

    if (prenomValue === '') {
        setError(prenom, 'Veuillez entrer votre prenom');
        noError = false;
    } else {
        setSuccess(prenom);
        
    }

    if (numeroTelValue === '') {
        setError(numeroTel, 'Veuillez entrer votre numéro de téléphone');
        noError = false;
    } else if (numeroTelValue.length < 7) {
        setError(numeroTel, 'Le numéro de téléphone doit avoir au moins 7 chiffres');
        noError = false;
    } else {
        setSuccess(numeroTel);
    }
    
    if (emailValue === '') {
        setError(email, 'Veuillez entrer votre adresse email.');
        noError = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Veuillez entrer une adresse email valide.');
        noError = false;
    } else {
        setSuccess(email);
    }
    
    function isValidEmail(email) {
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailPattern.test(String(email).toLowerCase());
    }
    


    if (entrepriseValue === '') {
        setError(entreprise, 'Veuillez entrer le nom de votre entreprise');
        noError = false;
    } else {
        setSuccess(entreprise);
    }

    if (typeEntrepriseValue === '') {
        setError(typeEntreprise, 'Veuillez entrer le type de votre entreprise');
        noError = false;
    } else {
        setSuccess(typeEntreprise);
    }

    if (nombreEmployesValue === '') {
        setError(nombreEmployes, 'Veuillez entrer le nombre de vos employés');
        noError = false;
    } else {
        setSuccess(nombreEmployes);
    }

    if (budgetAnnuelValue === '') {
        setError(budgetAnnuel, 'Veuillez entrer votre budget annuel');
        noError = false;
    } else {
        setSuccess(budgetAnnuel);
    }

    return noError;

};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#f59e0b',
          white: '#ffffff',
          black: '#000000'
        }
      }
    }
  }