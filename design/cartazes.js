const cartaz = 
[
	{
	 nome: "Hiken",
	 organizacao: "Pirata",
	 crime: "Jogador de Rag Origin"
	},
	{
	 nome: "Kass",
	 organizacao: "Marinha", 
	 crime: "Somelier de Bodybuilder"
	 },
	{
	nome: "Isshin",
	organizacao: "Revolucionário",
	crime: "Designer"
	}
];
const orgIcone = [
{
	organizacao: "pirata",
	icones: "../assets/icones/lutador.png"
},
{
	organizacao: "marinha",
	icones: "../assets/icones/doutor.png"
},
{
	organizacao: "revolucionário",
	icones: "../assets/icones/atirador.png"	
}
]

const conteinerCartaz = document.getElementById("cartazConteiner");

function renderCartaz() {
	cartaz.map((renderizar) => {
		const template = document.createElement("div");
		template.classList.add("cartazTemplate");
		template.innerHTML= `
		<img class="cartaz" src="./assets/images/cartaz-1.jpg" alt="Cartaz de Procurado">
		<section class="cartazDetalhe">
			<div><h3><strong>Nome</strong> </h3><img src="./assets/icones/lutador.png" alt="Icone da Organização"></div>
			<h2>${renderizar.nome}</h2>
			<p><strong class="textoSombreado">Organização</strong> <br> ${renderizar.organizacao} </p>
			<p><strong class="textoSombreado">Crime</strong> <br> ${renderizar.crime} </p>
		</section>
		`;
		conteinerCartaz.appendChild(template);
	});
}
renderCartaz();