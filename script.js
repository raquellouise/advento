const abertas = JSON.parse(localStorage.getItem("abertas")) || [];
const mensagens = ["Comece um devocional especial sobre o Natal.",
"Envie uma mensagem para um(a) amigo(a) dizendo o quanto essa pessoa é especial para você.",
"Pratique a gratidão: escreva três coisas boas que aconteceram na sua vida.",
"Leia Mateus 1:18-24.",
"Faça uma refeição na companhia de alguém especial.",
"Crie uma decoração de Natal para um cantinho da sua casa.",
"Ajude alguém com uma tarefa simples do dia a dia.",
"Leia Lucas 2:1-20.",
"Fale sobre Jesus nas suas redes sociais.",
"Ore pedindo a Deus um coração grato.",
"Crie uma lista de afirmações bíblicas para lembrar das verdades de Deus.",
"Separe e doe coisas que você não usa mais.",
"Crie uma lista de metas espirituais para o próximo ano.",
"Tire o dia off das redes sociais.",
"Coloque uma música de Natal e dance como se estivesse em um filme natalino.",
"Memorize um versículo bíblico.",
"Leia Romanos 8.",
"Faça uma noite de filme de Natal, com direito a pipoca!",
"Faça seu devocional em um lugar diferente.",
"Embrulhe presentes enquanto ouve músicas de Natal.",
"Faça algo que você ama e que te deixa feliz.",
"Pinte taças com as amigas.",
"Prepare uma ceia de Natal especial.",
"Agradeça a Deus pelo nascimento de Jesus e pela salvação que temos por meio dele."];
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
const breve = document.querySelector("#embreve");
const calendario = document.querySelector("#calendario");
const botoes = document.querySelectorAll(".grade button");
const tarefa = document.querySelector("#modal");
const titulo = document.querySelector("#card-titulo");
const fechar = document.querySelector("#fechar");
const texto = document.querySelector("#card-texto");
const natal = document.querySelector("#natal");
const voltar = document.querySelector("#voltar");
const card = document.querySelector(".card");
const hoje = new Date();

if (hoje.getDate() < 30 && hoje.getMonth() <= 10) {
    breve.classList.remove("escondido");
} else {
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
        const liberacao = new Date(2026, 11, dia-1);
        if (hoje >= liberacao) {
            titulo.textContent = `Dia ${dia}`;
            texto.textContent = mensagens[i];
            tarefa.classList.remove("escondido");
            card.style.color = "";
            if (!abertas.includes(dia)) {
                abertas.push(dia);
                localStorage.setItem("abertas", JSON.stringify(abertas));
                botao.classList.add("aberta");
            };
        } else {
            botao.classList.add("tremendo");
            const sorteio = Math.floor(Math.random() * avisos.length);
            setTimeout(() => {
                card.style.color = "rgb(123, 35, 35)";
                titulo.textContent = `Oops`;
                texto.textContent = avisos[sorteio];
                tarefa.classList.remove("escondido");
            }, 400)
        }
    });
    
    if (abertas.includes(i+1)) {
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
}