const dateOfBirth = document.querySelector('#dob');
const luckyNumber = document.querySelector('#lucky-number');
const checkBtn = document.querySelector('#check');
const resultMessage = document.querySelector('.result-message');

function compareValues(sum,luckyNumber){

    if(sum % luckyNumber=== 0){
        resultMessage.innerText = "Your Birthday is lucky 🤩";
    }
    else{
        resultMessage.innerText = "Your Birthday is not lucky 😥";
    }
}

function sumOfDob(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i = 0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    };
    return sum;
    
}

checkBtn.addEventListener('click',() => {
   
    const date = dateOfBirth.value;
    
    const luckyNum = luckyNumber.value;
    if(date && luckyNum){
        const sum = sumOfDob(date);
        compareValues(sum,luckyNum);
    }
    else{
        resultMessage.innerText = "Please fill both the fields"
    }
});