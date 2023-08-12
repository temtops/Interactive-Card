    const cardName = document.getElementById('name');
    const cardNum = document.getElementById('num');
    const load = document.getElementById('confirm');
    const nnum = document.getElementById('card-num');
    const nname = document.getElementById('card-name');
    const cardmonth = document.getElementById('mm');
    const cardyear = document.getElementById('yy');
    const cv = document.getElementById('cv');
    const cardExp = document.getElementById('card-exp');
    const cvv = document.getElementById('cvv')
    const errmsg1 = document.getElementById('p1');
    const errmsg2 = document.getElementById('p2');
    const errmsg3 = document.getElementById('p3');
    const errmsg4 = document.getElementById('p4');

    load.addEventListener('click', function makeCard(e){
        e.preventDefault();
        if(cardName.value != ''&& (cv.value.length===3) && cardNum.value != '' && !isNaN(cardNum.value) && (cardNum.value.length===16) && cardmonth.value!='' && cardmonth.value.length===2 &&cardyear.value!=''&& cardyear.value.length===2 && cv.value != "")
        {
            nname.innerText= cardName.value;
            nnum.innerHTML = cardNum.value;
            nnum.innerHTML=nnum.innerHTML.slice(0,4) + ' ' + nnum.innerHTML.slice(5,9)+ " " + nnum.innerHTML.slice(10,14)+ " " +                           nnum.innerHTML.slice(11,15);
            cardExp.innerHTML= cardmonth.value + "/"+ cardyear.value;
            cvv.innerHTML = cv.value;
            const white = document.getElementById('white');
            const success = document.getElementById('success');
            white.style.display= "none";
            success.style.display = "block"
            cardName.value = "";
            cardNum.value = '';
            cardmonth.value = '';
            cardyear.value = '';
            cv.value = '';
            errmsg1.innerText = '';
            errmsg2.innerText = '';
            errmsg3.innerText = '';
            errmsg4.innerText = '';
            cv.style.borderColor="white"
            cardmonth.style.borderColor="white";
            cardyear.style.borderColor="white";
            cardNum.style.borderColor= "white"
            cardName.style.borderColor= "white"

        } 
        else{
            if(cardName.value == ''){
                errmsg1.innerText= "Please enter your name";
                cardName.style.borderColor= "red"
            }
            if(cardNum.value == ''|| isNaN(cardNum.value)){
                errmsg2.innerText = "Wrong Format, Numbers Only";
                cardNum.style.borderColor= "red"
            }
            if(cardNum.value.length < 16){
                errmsg2.innerText = "Number Not Correct, Check Again!"
            }
            if(cardmonth.value.length < 2){
                errmsg3.innerText = "Number Not Correct, Check Again!"
            }
            if(cardyear.value.length < 2){
                errmsg3.innerText = "Number Not Correct, Check Again!"
            }
            if(cardmonth.value=='' || cardyear.value == ''){
                errmsg3.innerText = "Can't be blank";
                cardmonth.style.borderColor="red";
                cardyear.style.borderColor="red";
            }
            if(cv.value==""){
                errmsg4.innerText = "Can't be blank";
                cv.style.borderColor="red"
            }if(cv.value.length<3){
                errmsg4.innerText = "Please fill in correct cvv"
            }
        }    
    }
    )
     function alertMsg(e){
        white.style.display= "block";
        success.style.display= "none";
        const user = {cardUser : nname.innerHTML, cardNumber: nnum.innerHTML, cardDate: cardExp.innerHTML , cardCv: cvv.innerHTML};
        const alert =user.cardUser + " just created a card with card number " + user.cardNumber
        console.log(alert)
        return alert
    }
