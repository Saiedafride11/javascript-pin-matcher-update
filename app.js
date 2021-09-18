function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin
    }
    else{
        console.log('Got 3 digit and calling again')
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

const keyPad = document.getElementById('key-pad');
keyPad.addEventListener('click', function(event){
    // console.log('Clicked', event.target.innerText);
    const number =  event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        // console.log(number);
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    const threeTry = document.getElementById('try');
    const tryLeft = document.getElementById('try-left');
    if(pin == 0 || typedNumbers == 0){
       tryLeft.innerText = 'Plese Frist Genarat pin';
       threeTry.style.display = 'none';

       notifySuccess.style.display = 'none';
       notifyFail.style.display = 'none';
    }
    else if(pin == typedNumbers){
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';

        tryLeft.style.display = 'none';
        threeTry.style.display = 'none';
    }
    else{
       notifySuccess.style.display = 'none';
       notifyFail.style.display = 'block';

        let threeTry = document.getElementById('try').innerText;
        let totalTry = threeTry;
        if(threeTry > 0 ){
            totalTry = threeTry - 1;
            document.getElementById('try').innerText = totalTry;
            tryLeft.innerText = " try left";
        }
        
        
    }

}