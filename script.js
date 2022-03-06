function tabuada(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

   
    if(num.value.length == 0){
        
        window.alert('Você precisa digitar um número')
    }
    else{
        var n = Number(num.value)
        tab.innerHTML = ''
        
        for(contador = 1; contador <= 10; contador++){
                var item = document.createElement("option")
                item.text = `${n} x ${contador} = ${n * contador}`
                item.value = `${contador}`
                tab.appendChild(item)
        }
    }
}