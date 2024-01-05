function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


  function obterParametro(nome) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nome);
}

    var nome = obterParametro('nome');
    var apelido =obterParametro('apelido');
    var idade = obterParametro('idade');
    var musica = obterParametro('musica');
    var cor = obterParametro('cor');
    var comida =obterParametro('comida');
    var filme = obterParametro('filme');
    var amigo = obterParametro('amigo');
    var lugar = obterParametro('lugar');
    var alguem = obterParametro('alguem');
    var gostaria = obterParametro('gostaria');
    var profissao = obterParametro('profissao');
    var trabalhar = obterParametro('trabalhar');
    var poder = obterParametro('poder');
    var suporta = obterParametro('suporta');

    document.write('<h1 id="hist">História</h1>');
    document.write('<h2>Era uma vez, em um mundo cheio de cores vibrantes, que conhecemos ' + nome 
    + ' carinhosamente chamado(a) de ' + apelido + '.' + ' Com seus ' + idade +  ' anos, ele(a) trazia ' + 
    'consigo uma energia contagiante. Sua jornada musical favorita era embalada pela melodia envolvente de ' + 
    + musica + ' uma canção que o transportava para um mundo de sonhos e emoções. ' + nome + ' tinha uma paixão ' + 
    'especial pela cor ' + cor + ' que refletia sua personalidade única. Suas refeições diárias eram um festival' + 
    ' de sabores, com ' + comida + ' ocupando o lugar de destaque em seu coração. Quando não estava imerso(a) em ' + 
    'seu mundo musical, ' + nome + ' se entregava a suas produções cinematográficas preferidas. Seu filme favorito, ' +
    filme + ', era uma fonte constante de inspiração. No universo das amizades, ' + nome + ' encontrava conforto na presença ' +
    'leal de ' + amigo + ', um amigo que estava sempre lá nos bons e maus momentos. Sonhador(a) por natureza, ' + nome + ' alimentava ' +
    'o desejo de explorar ' + lugar + ', um local mágico que sempre povoava seus pensamentos. Ao longo de sua jornada, ' +
    nome + ' encontrou inspiração em ' + alguem + ', uma figura que moldou sua visão de mundo e incentivou seus sonhos mais ambiciosos. A vida ' +
    'de ' + nome + ' era cheia de aventuras, mas havia uma coisa louca que ele(a) sempre quis fazer: ' + gostaria + '. Uma meta ousada que permanecia ' + 
    'em sua lista de desejos. Enquanto ' + nome + ' trilhava seu caminho, uma reflexão surgia: a possibilidade de desfazer ou refazer algo em sua vida. ' + 
    'Talvez, uma oportunidade para recomeçar e seguir uma nova direção. Quando pensava no futuro, ' + nome + ' imaginava trilhar o caminho da ' +
    profissao + ' e visualizava-se trabalhando em ' + trabalhar + '. Entretanto, nem tudo na vida era perfeito. Havia algo que ' + nome + 
    ' desejava poder desfazer ou refazer: ' + poder + '. Uma experiência que moldou sua jornada. Apesar de sua natureza amigável, havia algo que ' + nome +
    ' não suportava: ' + suporta + '. Uma discordância que adicionava tempero à sua história. E assim, ' + nome + ' continuava sua jornada, explorando o ' + 
    'colorido caleidoscópio da vida, enfrentando desafios, celebrando conquistas e aprendendo valiosas lições ao longo do caminho. ! </h2>');