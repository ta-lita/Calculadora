//função com todas as operações

function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1- Soma (+)\n 2- Subtração (-)\n 3- Multiplicação (*)\n 4- Divisão Real (/)\n 5- Divisão Inteira (%)\n 6- Potenciação (**)'));

    if (!operacao || operacao >=7 || operacao <= 0){
        alert('Erro - Coloque um valor válido!')
        calculadora()
    } else { 
    
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt ('Insira o segundo valor:'));
    let resultado;

        if (!n1 || !n2){
            alert('Erro - Digite valores numéricos!')
            calculadora()
        } else { 
             //Definindo as operações
    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        NovaOperacao()
    }
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        NovaOperacao()
    }
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        NovaOperacao()
    }
    function divisao_real(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        NovaOperacao()
    }
    function divisao_inteira(){
        resultado = n1 % n2;
        alert(`O resto da divisão inteira é: ${n1} % ${n2} = ${resultado}`);
        NovaOperacao()
    }
    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} ^ ${n2} = ${resultado}`);
        NovaOperacao()
    }

    //Definindo uma novaoperação
    function NovaOperacao(){
            let opcao = Number(prompt('Deseja fazer uma nova operação?\n 1- Sim\n 2- Não'));

            if (opcao == 1){
                calculadora()
            } else if (opcao == 2){
                alert('Até logo!')
            } else {
                alert('Coloque um valor válido!');
                calculadora();
            }
        
    }
   


        }
 
    }
   
    switch (operacao){
        case 1: 
            soma()
            break;
        case 2: 
            subtracao()
            break;
        case 3:
            multiplicacao()
            break;
        case 4:
            divisao_real()
            break;
        case 5:
            divisao_inteira()
            break;
        case 6:
            potenciacao()
            break;
    }

}
calculadora()
