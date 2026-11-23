const abert = JSON.parse(localStorage.getItem("abert")) || [];
const mensagens = ["Leia Lucas 1:26-38 e reflita sobre a disposição de Maria em obedecer.",
    "Faça um chocolate quente ou uma bebida especial e aproveite um momento aconchegante.",
    "Envie uma mensagem de carinho para alguém que você ama.",
    "Coloque uma música de Natal e dance como se estivesse em um filme natalino.",
    "Leia Isaías 9:1-7 e reflita sobre Jesus, o Príncipe da Paz.",
    "Faça uma noite de filme de Natal, com direito a pipoca!",
    "Separe roupas, brinquedos ou alimentos para doar.",
    "Tire uma foto bem bonita com alguma decoração de Natal.",
    "Faça um elogio sincero para três pessoas diferentes.",
    "Leia Lucas 1:39-56 e reflita sobre a alegria de Maria.",
    "Prepare ou compre um docinho especial para compartilhar com alguém.",
    "Use uma roupa ou acessório natalino durante o dia.",
    "Ore por alguém que esteja passando por um momento difícil.",
    "Faça um desenho de Natal, mesmo que você não saiba desenhar. Vale caprichar na criatividade!",
    "Leia Lucas 2:1-7 e reflita sobre a humildade com que Jesus veio ao mundo.",
    "Monte uma playlist com suas músicas natalinas favoritas.",
    "Faça uma boa ação em segredo.",
    "Prepare uma receita natalina ou decore alguns biscoitos.",
    "Leia Mateus 2:1-12 e reflita sobre a adoração dos magos a Jesus.",
    "Faça uma competição de caretas ou tire uma selfie engraçada com alguém.",
    "Entre em contato com alguém de quem sente saudade.",
    "Assista a um filme de Natal acompanhado de alguém especial.",
    "Leia João 1:1-14 e agradeça a Deus pelo maior presente: Jesus.",
    "Leia Lucas 2:8-20, faça uma oração de gratidão e celebre o verdadeiro motivo do Natal!"];
const avisos = ["Calma, Sherlock! Esse mistério ainda não é da sua conta.",
    "Você foi avisado: mexer antes da hora pode causar spoilers natalinos.",
    "O calendário tem 24 dias, não 24 sugestões para abrir tudo de uma vez!",
    " Vai estragar a surpresa, quirida!",
    "A pressa é inimiga da perfeição e também do Advento.",
    "VOCÊ NÃO ESTÁ PREPARADA PARA O QUE VEM AÍ. Volte no dia certo.",
    "Acesso negado! Sua curiosidade não é permitida aqui.",
    "Uma tentativa de violação do calendário foi detectada. As autoridades natalinas foram notificadas.",
    "Infelizmente, sua ansiedade não é um passe livre.",
    "Você chegou cedo demais. Volte mais tarde.",
    "Este conteúdo está temporariamente protegido pelo departamento de surpresas natalinas.",
    "Ho, ho, ho! Quem mandou ser curioso? Volte outro dia!",
    "O duende responsável por essa tarefa ainda está de folga.",
    "Nem o Papai Noel entrega os presentes antes da hora!",
    "Você está tentando estragar o Natal, Grinch?",
    "Vai com calma, emocionada!",
    "Aqui não, ansiedade!",
    "Menos, bem menos kkk",
    "Fecha isso, fofoqueira!",
    "Não seja essa pessoa...",
    "Spoiler não, por favor!",
    "PECADO DA CURIOSIDADE DETECTADO! O fruto proibido também parecia interessante, e olha no que deu..."]
const inicio = document.querySelector("#inicio");
const calendario = document.querySelector("#calendario");
const botoes = document.querySelectorAll(".grade button");
const tarefa = document.querySelector("#modal");
const titulo = document.querySelector("#card-titulo");
const fechar = document.querySelector("#fechar");
const hoje = new Date(2026, 11, 10);
const texto = document.querySelector("#card-texto");
const natal = document.querySelector("#natal");
const voltar = document.querySelector("#voltar")


setTimeout(() => {
    inicio.classList.add("sumindo");

    setTimeout(() => {
        inicio.classList.add("escondido");
            calendario.classList.remove("escondido");
        if (hoje.getDate() === 25 && hoje.getMonth() === 11) {
            natal.classList.remove("escondido");
        }
    }, 500);
}, 3000);



botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {
        const dia = i + 1;
        if (hoje.getDate() >= dia && hoje.getMonth() === 11) {
            titulo.textContent = `Dia ${dia}`;
            texto.textContent = mensagens[i];
            tarefa.classList.remove("escondido");
            if (!abert.includes(dia)) {
                abert.push(dia);
                localStorage.setItem("abert", JSON.stringify(abert));
                botao.classList.add("aberta");
            };
        } else {
            botao.classList.add("tremendo");
            const sorteio = Math.floor(Math.random() * avisos.length);
            setTimeout(() => {
                titulo.textContent = `Oops`;
                texto.textContent = avisos[sorteio];
                tarefa.classList.remove("escondido");
            }, 400)
        }
    });
    
    if (abert.includes(i+1)) {
        botao.classList.add("aberta");
    };

    botao.addEventListener("animationend", () => {
        botao.classList.remove("tremendo");
    })

});

fechar.addEventListener("click", () => {
    tarefa.classList.add("escondido");
});

voltar.addEventListener("click", (evento) => {
    evento.preventDefault();
    natal.classList.add("escondido");
    calendario.classList.remove("escondido");
});

