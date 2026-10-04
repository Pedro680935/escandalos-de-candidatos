// Cada caso tem um "status" jurídico para não misturar acusação com condenação.
// Status possíveis: "Condenação válida", "Condenação anulada", "Em investigação",
// "Denunciado", "Provas anuladas", "Sem condenação", "Ação civil"

const candidatos = {
  lula: {
    nome: "Lula (PT)",
    foto: "imagens/Foto_oficial_de_Luiz_Inácio_Lula_da_Silva_(ombros)_denoise.jpg",
    areas: [
      {
        titulo: "Lava Jato (corrupção passiva e lavagem de dinheiro)",
        casos: [
          {
            status: "Condenação anulada",
            texto: "Triplex do Guarujá: condenado em 2017 por Sergio Moro por corrupção passiva e lavagem, por suposto benefício da OAS. Em 2021 o STF anulou as condenações por incompetência da 13ª Vara de Curitiba e depois reconheceu a parcialidade de Moro. O STF não julgou o mérito, então não houve absolvição."
          },
          {
            status: "Condenação anulada",
            texto: "Sítio de Atibaia: condenado em 2019 por reformas bancadas por empreiteiras. Anulado pela mesma decisão do STF em 2021."
          },
          {
            status: "Condenação anulada",
            texto: "Instituto Lula (sede e doações): ações ligadas à Odebrecht, incluídas na anulação de 2021. Hoje não há condenação criminal válida contra ele nesses casos."
          }
        ]
      },
      {
        titulo: "Mensalão (compra de apoio parlamentar)",
        casos: [
          {
            status: "Sem condenação",
            texto: "Esquema de pagamentos a deputados no 1º governo Lula (AP 470). Lula não foi réu. Foram condenados no STF figuras do PT como José Dirceu, José Genoino e Delúbio Soares."
          }
        ]
      },
      {
        titulo: "Caso envolvendo familiar (INSS)",
        casos: [
          {
            status: "Em investigação",
            texto: "Fábio Luís Lula da Silva (Lulinha), filho de Lula, é alvo de inquéritos no STF por suspeita de tráfico de influência e corrupção, ligados ao 'Careca do INSS'. A quebra de sigilo mostrou R$ 19,5 milhões movimentados entre 2022 e 2026, mas a defesa diz que não há elo com as fraudes do INSS. Não há denúncia nem condenação, e o próprio Lula não é investigado nesse caso."
          }
        ]
      }
    ]
  },

  renan: {
    nome: "Renan Santos (Missão)",
    foto: "imagens/Renan_Santos_-_Congresso_do_Partido_Missão,_2026_(cropped_2).jpg",
    areas: [
      {
        titulo: "Finanças do MBL (lavagem de dinheiro)",
        casos: [
          {
            status: "Em investigação",
            texto: "O Ministério Público de SP ampliou, há alguns anos, uma investigação sobre as finanças da família de Renan e do MBL, para apurar uso de doações, contas de terceiros e empresas da família para ocultar patrimônio. A defesa nega qualquer ato ilícito. Não encontrei denúncia nem condenação, e o desfecho atual do caso não está claro."
          }
        ]
      },
      {
        titulo: "Outros processos (não são casos de corrupção)",
        casos: [
          {
            status: "Ação civil",
            texto: "MPF processou Renan e o MBL por ofensas a indígenas do Baixo Tapajós (PA) e pede R$ 500 mil de indenização, retratação e retirada dos vídeos. É ação civil, não criminal, e ainda não foi julgada."
          }
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
          {
            status: "Provas anuladas",
            texto: "Em 2020 o MP-RJ o denunciou, junto com Fabrício Queiroz, por organização criminosa, peculato, lavagem e apropriação indébita. A acusação falava em devolução de salários de assessores e lavagem via loja de chocolates e imóveis. Em 2021 o STJ anulou as provas por quebra de sigilo irregular e o caso não resultou em condenação."
          },
          {
            status: "Sem condenação",
            texto: "Ligação com Adriano da Nóbrega, ex-policial apontado como miliciano: Flávio empregou a mãe e a esposa dele no gabinete. A relação foi investigada no contexto da rachadinha, sem condenação."
          }
        ]
      },
      {
        titulo: "Banco Master e filme Dark Horse (Operação Compliance Zero)",
        casos: [
          {
            status: "Em investigação",
            texto: "Áudios mostram Flávio cobrando de Daniel Vorcaro, dono do Banco Master, dinheiro para o filme Dark Horse, sobre Jair Bolsonaro. Os documentos citam ao menos US$ 12,3 milhões (cerca de R$ 61 milhões), e outras reportagens falam em R$ 63,7 a 69 milhões. O Master foi liquidado e investigado por fraude financeira que pode custar R$ 50 bilhões ao FGC."
          },
          {
            status: "Em investigação",
            texto: "A PGR pediu, e o ministro André Mendonça autorizou, que a PF apure se emendas ou projetos de Flávio favoreceram o Master. Há também investigação sobre emendas destinadas a entidades ligadas à produtora do filme. Não há denúncia nem condenação."
          },
          {
            status: "Sem condenação",
            texto: "Atenção: a Justiça já mandou remover posts que ligavam a rachadinha ao caso Master, porque são casos separados e não há nexo entre eles."
          }
        ]
      }
    ]
  }
};

function mostrarProposta(id) {
  const candidato = candidatos[id];
  const caixa = document.getElementById("propostas");

  let html = '<img class="foto" src="' + candidato.foto + '" alt="' + candidato.nome + '">';
  html += "<h2>" + candidato.nome + "</h2>";
  html += '<p class="aviso"><em>Investigação ou denúncia não é condenação. Cada caso mostra o status jurídico conhecido.</em></p>';

  for (const area of candidato.areas) {
    html += "<h3>" + area.titulo + "</h3><ul>";
    for (const caso of area.casos) {
      html += "<li><strong>[" + caso.status + "]</strong> " + caso.texto + "</li>";
    }
    html += "</ul>";
  }

  caixa.innerHTML = html;
  caixa.style.display = "block";
}