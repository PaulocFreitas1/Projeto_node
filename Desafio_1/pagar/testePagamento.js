import { Pagamento } from "./pagamentos.js";
const pagamento = new Pagamento ()

let cartao = {
    numero: 1230000000091,
    limite:500
    }
let cartaoInvalido = {
        numero: 123,
        limite:500
        }
let listaCartoesTest = [cartao, cartaoInvalido]
let listaCompra = [
        { item: "Bota", 
        preco: 600
    }, 
    { item: "Havaiana", 
        preco: 30
    }, 
    
]
async function testValidaCartao(){
    console.log("TEST: Cartão Válido")
    console.log("Resultado: ")
   await pagamento.validaCartao(cartao).then((r) =>{
        console.log(r)
    }).catch((e) =>{
        console.log(e)
    })
    
    console.log("TEST: Cartão invalido  menor que 13")
    console.log("Resultado: ")
   await  pagamento.validaCartao(cartaoInvalido).then((r) =>{
        console.log(r)
    }).catch((e) =>{
        console.log(e)
    })

    console.log("TEST: Cartão invalido maior que 13")
    console.log("Resultado: ")
    cartaoInvalido.numero = 12355678912352
   await  pagamento.validaCartao(cartaoInvalido).then((r) =>{
        console.log(r)
    }).catch((e) =>{
        console.log(e)
    })

}


function testValidaLimite(){

    console.log("TEST: Produto dentro do limite")
    //havaina
    console.log("Resultado: ")
    pagamento.validaLimite(cartao, listaCompra[1].preco).then((r) =>{
        console.log(r)
    }).catch((e) => {
        console.log(e)
    })
    
    console.log("TEST: Produto acima do limite")
    //bota
    console.log("Resultado: ")
    pagamento.validaLimite(cartao, listaCompra[0].preco).then((r) =>{
        console.log(r)
    }).catch((e) => {
        console.log(e)
    })
    
}
testValidaCartao()
//testValidaLimite()