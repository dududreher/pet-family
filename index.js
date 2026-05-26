function validarEntradaPet(nome, idade, animal, vip) {


    if (!nome || nome.trim() === "") {
        return {
            status: 400,
            mensagem: "Erro: nome obrigatório."
        };
    }


    if (idade > 20 || idade < 0) {
        return {
            status: 400,
            mensagem: "Erro: idade inválida"
        };
    }


    if (animal.toLowerCase() === "gato" && !vip) {
        return {
            status: 400,
            mensagem: "Erro: gatos precisam ser VIP"
        };
    }


    return {
        status: 201,
        mensagem: "Sucesso: Entrada Liberada"
    };
}


console.log(validarEntradaPet("", 5, "cachorro", true));

