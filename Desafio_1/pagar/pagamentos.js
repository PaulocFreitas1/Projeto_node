//cartao padrao
/**

 { 
    numero: 1230000000091
    limite:10000
 }*/
export class Pagamento{

    validaCartao(cartao){
        let erro
        
        return new Promise ((resolve, reject) =>{
       
        if(`${cartao.numero}`.length == 13){
            resolve({
                ok:true,
                msg: "Cartão valido"
            })
        }else if(`${cartao.numero}`.length < 13) {
        reject({
          ok: false,
          msg: "Cartão com menos de 13 digitos"
             })
        } else{
            reject({
                ok: false,
                msg: "Cartão tem mais de 13 digitos"
            })

        }
    })
    }
        validaLimite(cartao, compraPretendida){
            return new Promise((resolve, reject) => {
                  if(cartao.limite >= compraPretendida) {
               resolve({
                ok:true,
                msg: "Compra Permitida"
               })
            }else {
               reject({
                ok:false,
                msg: "Compra acima do Limite",
                limiteFaltante: compraPretendida - cartao.limite
               })
            }
            })
          
        }
}