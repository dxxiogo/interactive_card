function changeCountName(){
    let newCountName = document.querySelector(".form-name");
    let countName = document.querySelector(".count-information-card");
    countName.querySelector(".card_user-name").innerHTML = newCountName.value;
}

function changeCountNumber(){
    let newCountNumber = document.querySelector(".form-number-card");
    let countNumber = document.querySelector(".text-card_content");
    countNumber.querySelector(".card-number").innerHTML = newCountNumber.value;
}

function changeMouth(){
    let newMouthData = document.querySelector("input[name= 'mouth']");
    let dataMouth = document.querySelector(".card-data");
    dataMouth.querySelector(".text-mouth").innerHTML = newMouthData.value;
}

function changeYear(){
    let newYearData = document.querySelector("input[name= 'year']");
    let dataYear = document.querySelector(".card-data");
    dataYear.querySelector(".text-year").innerHTML = newYearData.value;
}

function changeCountCVC(){
    let newCVC = document.querySelector(".cvc-card");
    let cardCvc = document.querySelector(".card-back");
    cardCvc.querySelector(".text-cvc").innerHTML = newCVC.value;
}
function authenticateInformation(){
    form.style.display = 'none'
    authenticate.style.display = 'flex'
}