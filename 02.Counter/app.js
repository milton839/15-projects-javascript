const btns = document.querySelectorAll(".btn");
const countValue = document.getElementById("countValue");

counter = 0;
btns.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        const btnClick = event.target.classList;
        if (btnClick.contains("decrease")) {
            counter--;
        }
        else if (btnClick.contains("increase")){
            counter++;
        }
        else{
            counter = 0;
        }

        if (counter>0) {
            countValue.style.color = "green";
        }
        else if(counter<0) {
            countValue.style.color = "red";
        }
        else{
            countValue.style.color = "orange";
        }
        countValue.innerText = counter;
    })
})
