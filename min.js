let container =document.querySelector('.container');
let num1 =document.querySelector('.num1');
let num2 =document.querySelector('.num2');
let input =document.querySelector('input');
let score=document.querySelector('.score')
let count =0;
num1.innerHTML =Math.ceil(Math.random() *10);
num2.innerHTML =Math.ceil(Math.random() *10);

input.addEventListener('keypress',(event)=>{

    if(event.key ==='Enter'){
    let sum =parseInt(num1.innerHTML) + parseInt(num2.innerHTML);
    let enteredValue =parseInt(input.value);

        if(sum ===enteredValue){
            count++
            score.innerHTML =count;

            //this below code is to repeat the game
            num1.innerHTML =Math.ceil(Math.random() *10);
            num2.innerHTML=Math.ceil(Math.random()*10);

            input.value =""; //this clears the text box if the answer is correct

        }
            else
            {

                count--
                score.innerHTML=count;
                input.value="";
            }
            if(count <= 0){
                input.value ="";
                score.innerHTML ='0';

            }
            if(count === 10 ){
                container.innerHTML="You win!"
                container.getElementsByClassName.fontSize="32px"
            }
           
                // container.innerHTML="You Lose!"
                // container.getElementsByClassName.fontSize="32px"
            
        
    }
})

