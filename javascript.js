//ONLOAD SCRIPTS
window.addEventListener('load', () => {
    document.getElementById('errorMessageDiv').style.display = 'none';
    document.getElementById('nameErrorDiv').style.display = 'none';
    document.getElementById('ageErrorDiv').style.display = 'none';
    document.getElementById('listDiv').style.display = 'none';
});

//ERROR MESSAGE SCRIPTS
document.getElementById('errorButton').addEventListener('click', () => {
    document.getElementById('errorMessageDiv').style.display = 'none';
});

document.getElementById('dataForm').addEventListener('submit', (event) => {
    //display empty error message div
    document.getElementById('errorMessageDiv').style.display = 'block';
    document.getElementById('nameErrorDiv').style.display = 'none';
    document.getElementById('ageErrorDiv').style.display = 'none';

    //add error messages based on validation
    if(!validateName()){
        event.preventDefault();
        document.getElementById('nameErrorDiv').style.display = 'block';
    }

    if(!validateAge()){
        event.preventDefault();
        document.getElementById('ageErrorDiv').style.display = 'block';
    }
});

//FORM VALIDATION
function validateName(){
    const name = document.getElementById('inputName').value.trim();

    if(name.length < 1)
        return false;
    else
        return true;
}

function validateAge(){
    const age = document.getElementById('inputAge').value.trim();

    if(isNaN(age) || age < 1 || age > 100)
        return false;
    else
        return true;
}

//LOAD DATA SCRIPTS
document.getElementById('loadButton').addEventListener('click', () => {
    document.getElementById('loadingDiv').style.display = 'none';
    document.getElementById('listDiv').style.display = 'block';
})