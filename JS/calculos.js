            function calcular() {
                // var valor_investido = document.querySelector(".valor_investido").value;
                var quant_moedas = document.querySelector(".quant_moedas").value;
                var valor_atual_moeda = document.querySelector(".valor_atual_moeda").value;
                var valor_compra = document.querySelector(".valor_compra").value;
                var quantas_vender = document.querySelector(".quantas_vender").value;
                
                var valor_de_moedas_que_vai_continuar =  parseInt(quant_moedas - quantas_vender); 
                var valor_que_vai_continuar_investido = parseInt(valor_de_moedas_que_vai_continuar * valor_atual_moeda);
                var valor_de_lucro_no_bolso = parseInt(quantas_vender * valor_atual_moeda); 

                var dolar = 5.28;
                //var investimento_em_dolar = Math.round(valor_investido / dolar); // $39 
                var investido = quant_moedas * valor_compra; // valor que comprei cada moeda 
                var investido_atual = Math.round(quant_moedas * valor_atual_moeda); // valor atual 
                var lucro = parseFloat(investido_atual - investido);

                var porcetagem = Math.round(parseFloat(lucro / investido * 100));

                var investido_brl = Math.round(investido * dolar);
                var investido_atual_brl = Math.round(investido_atual * dolar);
                var lucro_brl = Math.round(lucro * dolar);





                var saida = document.getElementById("saida");
                saida.innerHTML = "Você pagou <b>$" + valor_compra + "</b> por <b>" + quant_moedas + "</b> Moedas e o valor investido é <b>$" + investido + " (R$" + investido_brl + ")</b>";


                var saida2 = document.getElementById("saida2");
                saida2.innerHTML = "Agora a unidade dessa moeda é de <b>$" + valor_atual_moeda + "</b> ou seja, você tem agora <b>$" + investido_atual + " (R$" + investido_atual_brl + ")</b>";



                var saida3 = document.getElementById("saida3");
                saida3.innerHTML = "Com isso você tem um lucro de <b>$" + lucro + " (R$" + lucro_brl + ")</b>";


                var saida4 = document.getElementById("saida4");
                saida4.innerHTML = "Esse lucro representa <b>" + porcetagem + "%</b>";




               var saida5 = document.getElementById("saida5");
                saida5.innerHTML = "Se você vender <b>"+quantas_vender+"</b> irá continuar com <b>"+valor_de_moedas_que_vai_continuar+"</b> moedas";


             var saida6 = document.getElementById("saida6");
                saida6.innerHTML = "Você terá no bolso <b>$"+valor_de_lucro_no_bolso+"</b> e irá continuar com <b>$"+valor_que_vai_continuar_investido+" (Investimento Inicial é de $"+investido+")</b>";
 

               document.getElementById('linha').style.display = 'block'; //faz a  linha aparecer
            }
