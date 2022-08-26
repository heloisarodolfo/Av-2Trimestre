function Calcular() {
    var altura = document.getElementById("altura")
    var peso = document.getElementById("peso")
    
    var numaltura = Number(altura.value)
    var numpeso = Number(peso.value)
    
    var resp = numpeso / (numaltura * numaltura)
    var respshort = resp.toFixed(2)
    document.getElementById("result").innerText = respshort
    
    
    
    console.log("Resultado" + respshort)
    
    }
    
    function Limpar() {
        altura = (" ")
        peso = (" ")
        var limpaltura = document.getElementById("altura").value = limpaltura
        var limppeso = document.getElementById("peso").value = limppeso
        document.getElementById("result").innerHTML = " "
    }
    