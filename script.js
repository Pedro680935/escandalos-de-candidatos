// Candidatos selecionados: lula, flavio, renan, zema, caiado, cury.
// Pablo Marçal (PRTB) teve a candidatura indeferida e não está na lista.
// Cada caso traz o "status" jurídico, para não misturar acusação com condenação.
// Status usados: "Condenação anulada", "Provas anuladas", "Denunciado", "Indiciado",
// "Em investigação", "Denúncia a órgão de controle", "Sem condenação", "Ação civil",
// "Sem registro encontrado"

const SEM_REGISTRO = [{
  titulo: "Corrupção, crimes e lavagem de dinheiro",
  casos: [{
    status: "Sem registro encontrado",
    texto: "Não encontrei processo, investigação ou condenação por corrupção ou lavagem de dinheiro contra este candidato. A busca foi limitada, então confira no site do TSE (DivulgaCandContas), que traz as certidões criminais."
  }]
}];

const candidatos = {
  lula: {
    nome: "Lula (PT)",
    foto: "imagens/Foto_oficial_de_Luiz_Inácio_Lula_da_Silva_(ombros)_denoise.jpg",
    areas: [
      {
        titulo: "Lava Jato (corrupção passiva e lavagem de dinheiro)",
        casos: [
          { status: "Condenação anulada", texto: "Triplex do Guarujá: condenado em 2017 por Sergio Moro por corrupção passiva e lavagem, por suposto benefício da OAS. Em 2021 o STF anulou as condenações por incompetência da 13ª Vara de Curitiba e depois reconheceu a parcialidade de Moro. O STF não julgou o mérito, então não houve absolvição." },
          { status: "Condenação anulada", texto: "Sítio de Atibaia: condenado em 2019 por reformas bancadas por empreiteiras. Anulado pela mesma decisão do STF em 2021." },
          { status: "Condenação anulada", texto: "Instituto Lula (sede e doações): ações ligadas à Odebrecht, incluídas na anulação de 2021. Hoje não há condenação criminal válida contra ele nesses casos." }
        ]
      },
      {
        titulo: "Mensalão (compra de apoio parlamentar)",
        casos: [
          { status: "Sem condenação", texto: "Esquema de pagamentos a deputados no 1º governo Lula (AP 470). Lula não foi réu. Foram condenados no STF figuras do PT como José Dirceu, José Genoino e Delúbio Soares." }
        ]
      },
      {
        titulo: "Caso envolvendo familiar (INSS)",
        casos: [
          { status: "Em investigação", texto: "Fábio Luís Lula da Silva (Lulinha), filho de Lula, é alvo de inquéritos no STF por suspeita de tráfico de influência e corrupção, ligados ao 'Careca do INSS'. A quebra de sigilo mostrou R$ 19,5 milhões movimentados entre 2022 e 2026, mas a defesa diz que não há elo com as fraudes do INSS. Não há denúncia nem condenação, e o próprio Lula não é investigado nesse caso." }
        ]
      }
    ]
  },

  flavio: {
    nome: "Flávio Bolsonaro (PL)",
    foto: "imagens/Flávio_Bolsonaro.jpg",
    areas: [
      {
        titulo: "Rachadinha na Alerj (peculato e lavagem de dinheiro)",
        casos: [
          { status: "Provas anuladas", texto: "Em 2020 o MP-RJ o denunciou, junto com Fabrício Queiroz, por organização criminosa, peculato, lavagem e apropriação indébita. A acusação falava em devolução de salários de assessores e lavagem via loja de chocolates e imóveis. Em 2021 o STJ anulou as provas por quebra de sigilo irregular e o caso não resultou em condenação." },
          { status: "Sem condenação", texto: "Ligação com Adriano da Nóbrega, ex-policial apontado como miliciano: Flávio empregou a mãe e a esposa dele no gabinete. A relação foi investigada no contexto da rachadinha, sem condenação." }
        ]
      },
      {
        titulo: "Banco Master e filme Dark Horse (Operação Compliance Zero)",
        casos: [
          { status: "Em investigação", texto: "Áudios mostram Flávio cobrando de Daniel Vorcaro, dono do Banco Master, dinheiro para o filme Dark Horse, sobre Jair Bolsonaro. Os documentos citam ao menos US$ 12,3 milhões (cerca de R$ 61 milhões), e outras reportagens falam em R$ 63,7 a 69 milhões. O Master foi liquidado e investigado por fraude financeira que pode custar R$ 50 bilhões ao FGC." },
          { status: "Em investigação", texto: "A PGR pediu, e o ministro André Mendonça autorizou, que a PF apure se emendas ou projetos de Flávio favoreceram o Master. Há também investigação sobre emendas destinadas a entidades ligadas à produtora do filme. Reportagem de setembro cita uma intimação a ele por causa do caso. Não há denúncia nem condenação." },
          { status: "Sem condenação", texto: "Atenção: a Justiça já mandou remover posts que ligavam a rachadinha ao caso Master, porque são casos separados e não há nexo entre eles." }
        ]
      }
    ]
  },

  renan: {
    nome: "Renan Santos (Missão)",
    foto: "imagens/Renan_Santos_-_Congresso_do_Partido_Missão,_2026_(cropped).jpg",
    areas: [
      {
        titulo: "Outros processos (não são casos de corrupção)",
        casos: [
          { status: "Ação civil", texto: "MPF processou Renan e o MBL por ofensas a indígenas do Baixo Tapajós (PA) e pede R$ 500 mil de indenização, retratação e retirada dos vídeos. É ação civil, não criminal, e ainda não foi julgada." }
        ]
      }
    ]
  },

  zema: {
    nome: "Romeu Zema (Novo)",
    foto: "imagens/Romeu_Zema.jpg",
    areas: [
      {
        titulo: "Governo de Minas: mineração e licenciamento ambiental",
        casos: [
          { status: "Em investigação", texto: "Operação Rejeito (PF, setembro de 2025): investiga fraudes em licenciamentos ambientais de mineração, com suposto lucro de R$ 1,5 bilhão. Foram presos o ex-presidente da Feam e um ex-deputado. Segundo reportagens, um decreto assinado por Zema em novembro de 2024, que flexibilizou regras, aparece nas conversas e nas apurações. Zema chamou o uso da máquina pública para fins privados de 'inaceitável'. Não encontrei informação de que ele seja investigado pessoalmente." }
        ]
      },
      {
        titulo: "Banco Master e Vorcaro",
        casos: [
          { status: "Denúncia a órgão de controle", texto: "Deputados estaduais acionaram o TCE-MG sobre a relação do governo Zema com uma mineradora ligada a Daniel Vorcaro (Serra do Curral) e com o crédito consignado do Master em Minas. Zema afirma que a doação de Henrique Vorcaro em 2022 foi ao partido, não à campanha, e que na época não havia suspeitas contra Vorcaro. Não há investigação criminal contra ele que eu tenha encontrado." }
        ]
      },
      {
        titulo: "Outros processos (não são casos de corrupção)",
        casos: [
          { status: "Denunciado", texto: "A PGR o denunciou no STJ por calúnia contra o ministro Gilmar Mendes, por um vídeo com fantoches sobre o caso Master, e pede indenização de R$ 162 mil. Não é crime de corrupção, e não encontrei o desfecho." },
          { status: "Denúncia a órgão de controle", texto: "O deputado Rogério Correia (PT-MG) o denunciou ao MPT e à PGR por contratos na educação, trabalho análogo à escravidão em empresa terceirizada e consignado ligado à Zema Financeira. É uma representação política de adversário, e não confirmei se virou investigação." }
        ]
      }
    ]
  },

  caiado: {
    nome: "Ronaldo Caiado (PSD)",
    foto: "imagens/Caiado.jpg",
    areas: [
      {
        titulo: "Governo de Goiás: Fundação Pró-Cerrado",
        casos: [
          { status: "Sem condenação", texto: "Reportagem do UOL revelou que o presidente da Fundação Pró-Cerrado, preso em operação da Polícia Civil de SP sob suspeita de lavar dinheiro para o PCC, tinha contratos de cerca de R$ 141 milhões com o governo de Goiás na gestão Caiado. O ministro Guilherme Boulos citou o caso. Caiado diz que a investigação trata só de atividades privadas, sem relação com os contratos estaduais, e moveu queixa-crime no STF contra Boulos. Não encontrei investigação formal contra Caiado." }
        ]
      }
    ]
  },

  cury: {
    nome: "Augusto Cury (Avante)",
    foto: "imagens/Augusto_Cury.jpg",
    areas: SEM_REGISTRO
  },






};


function classeStatus(status) {
  if (status.indexOf("anulad") !== -1) return "anulada";
  if (status.indexOf("investiga") !== -1) return "investigacao";
  if (status.indexOf("Denunciado") !== -1) return "denunciado";
  if (status.indexOf("Sem") !== -1) return "neutro";
  return "outro";
}

function mostrarCandidato(id) {
  const candidato = candidatos[id];
  const caixa = document.getElementById("escandalos");

  let html = '<div class="cabecalho">';
  if (candidato.foto) {
    html += '<img class="foto" src="' + candidato.foto + '" alt="' + candidato.nome + '">';
  }
  html += "<h2>" + candidato.nome + "</h2></div>";
  html += '<p class="aviso">Investigação ou denúncia não é condenação. Cada caso mostra o status jurídico conhecido em 03/10/2026.</p>';

  for (const area of candidato.areas) {
    html += "<h3>" + area.titulo + "</h3><ul>";
    for (const caso of area.casos) {
      html += '<li><span class="status ' + classeStatus(caso.status) + '">' + caso.status + "</span> " + caso.texto + "</li>";
    }
    html += "</ul>";
  }

  caixa.innerHTML = html;
  caixa.style.display = "block";

  document.querySelectorAll(".botoes button").forEach(function (b) {
    b.classList.toggle("ativo", b.dataset.id === id);
  });
}

document.querySelectorAll(".botoes button").forEach(function (b) {
  b.addEventListener("click", function () { mostrarCandidato(b.dataset.id); });
});