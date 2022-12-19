let color1 = document.querySelector("#color1")
let color2 = document.querySelector("#color2")
let gradientBox = document.querySelector("#gradient_box")
let gradientCode = document.querySelector("#gradient_code")
let copyBtn = document.querySelector("#copy_btn")
let option = document.querySelector("#gradient_type")
let degreeInp = document.querySelector("#degree")


// degreeInp("input",()=>{
//     if(){}
// })


function gradientcodefunc(){
    if (option.value == "to top" || option.value == "to bottom" || option.value=="to left" || option.value =="to right") {
        gradientBox.style.background=`linear-gradient(${option.value}, ${color1.value}, ${color2.value})`;
        gradientCode.value=`${gradientBox.style.backgroundImage}`
    }else if(option.value == "degree"){
        degreeInp.style.display="block"
        if (degreeInp.value !=="") {
            gradientBox.style.background=`linear-gradient(${degreeInp.value+"deg"}, ${color1.value}, ${color2.value})`;
        gradientCode.value=`${gradientBox.style.backgroundImage}`
        }else{
            alert("Please write degree")
        }
    }
}

// gradient colors

color1.addEventListener("input", gradientcodefunc)
    


color2.addEventListener("input", gradientcodefunc)


// Copy btn

copyBtn.addEventListener("click",()=>{
    gradientCode.select();
    document.execCommand("copy");
    console.log(gradientCode.value)
})