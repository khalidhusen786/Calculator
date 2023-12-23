let inputValue=document.getElementById('inputValue')
let clr=document.getElementById('clr')



function showValue(valuee){
inputValue.value= inputValue.value+valuee.innerHTML
inputValue.innerHTML=inputValue
   
}



let btnequal=document.getElementById('btnequal')
btnequal.addEventListener('click',function(){
    // let vl=inputValue.value
    inputValue.value=eval((inputValue.value))
    // console.log(vl)
    // inputValue.innerHTML=inputValue.value
})


clr.addEventListener('click',function(){
    inputValue.value=''
    inputValue.innerHTML=inputValue
    
})