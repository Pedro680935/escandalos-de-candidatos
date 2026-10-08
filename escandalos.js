// ============================================================
// escandalos.js — SÓ DADOS dos escândalos.
// Carregue ANTES do script.js no HTML.
// As chaves (banco-master, lava-jato...) precisam ser iguais aos
// data-id dos botões no index.html.
// Texto longo: use crases (``) e uma linha em branco para separar parágrafos.
// Status aceitos: ver CLASSE_POR_STATUS no script.js.
// ============================================================

const escandalos = {

  // ----------------------------------------------------------
  "banco-master": {
    nome: "Banco Master",
    areas: [
      {
        titulo: "O caso Banco Master e Daniel Vorcaro",
        casos: [
          {
            status: "Em investigação",
            texto: `O Banco Master cresceu muito sob o comando de Daniel Vorcaro. Entre 2019 e 2024, o patrimônio líquido saltou de R$ 200 milhões para R$ 4,7 bilhões, e a carteira de crédito foi de R$ 1,4 bilhão para R$ 40 bilhões.

A Operação Compliance Zero começou em novembro de 2025 para investigar suspeitas de fraude na venda de carteiras de crédito do Master ao BRB. Vorcaro foi preso na primeira fase, em 18 de novembro, e o Banco Central decretou a liquidação do banco no mesmo período.

O Master também captou ao menos R$ 4,4 bilhões de institutos de previdência de estados e municípios, o que amplia o impacto do caso sobre servidores públicos. Além disso, Vorcaro mantinha um grupo de WhatsApp com dois servidores do Banco Central, de quem recebia informações sigilosas.

A fraude financeira pode custar cerca de R$ 50 bilhões ao Fundo Garantidor de Créditos (FGC).`
          }
        ]
      },
      {
        titulo: "A crise dentro do STF",
        casos: [
          {
            status: "Em investigação",
            texto: `Dias Toffoli (nov/2025 a fev/2026): ficou com a relatoria e foi criticado pelo sigilo absoluto e por tirar a custódia das provas da Polícia Federal. A PF encontrou mensagens de 2022 que ligam Vorcaro a Toffoli, e o ministro se declarou suspeito.`
          },
          {
            status: "Em investigação",
            texto: `André Mendonça (fev a set/2026): reduziu o grau de sigilo e limitou a atuação da PF. Mandou prender o ex-presidente do BRB, Paulo Henrique Costa, e abriu a Petição 16.662 com o material do celular de Vorcaro.`
          },
          {
            status: "Em investigação",
            texto: `Alexandre de Moraes: em setembro veio a público um relatório da PF de 218 páginas com 52 mensagens de Vorcaro a Moraes nas semanas anteriores à primeira prisão, além de contratos com o escritório da esposa do ministro.

Moraes nega irregularidades e acusou Mendonça de ocultar 180 peças do processo.`
          },
          {
            status: "Em investigação",
            texto: `Edson Fachin (set/2026 em diante): assumiu o controle dos procedimentos e deu 24 horas para Mendonça enviar tudo à Presidência do STF. Gilmar Mendes chegou a comparar a condução do caso à Lava Jato, e Mendonça rejeitou a comparação.`
          }
        ]
      },
      {
        titulo: "Delação e ameaças (pontos sem confirmação)",
        casos: [
          {
            status: "Em investigação",
            texto: `O status da delação de Vorcaro aparece de forma conflitante nas fontes. Uma cronologia diz que ele teria desistido, enquanto outra afirma que Mendonça não aceitaria um acordo que escolhesse de antemão quem seria implicado.

Uma cronologia de imprensa ainda registra, como em apuração, que Vorcaro ameaçaria expor ministros do STF e o PGR se o pai não recebesse prisão domiciliar.

Esses pontos devem ser tratados como não confirmados.`
          }
        ]
      },
      {
        titulo: "Política e eleição",
        casos: [
          {
            status: "Em investigação",
            texto: `Flávio Bolsonaro (Dark Horse): áudios mostram cobrança de recursos a Vorcaro para o filme sobre Jair Bolsonaro, e a PF apura se emendas ou projetos favoreceram o Master. Não há denúncia nem condenação.`
          },
          {
            status: "Sem condenação",
            texto: `Jaques Wagner (governo Lula) também aparece citado no caso. Não há denúncia nem condenação conhecidas.

Os dois campos políticos usam o Master como arma eleitoral, e há CPMI e pedidos de CPI em disputa. Ser citado ou investigado não equivale a ser condenado.`
          }
        ]
      }
    ]
  },


  // ----------------------------------------------------------
  "lava-jato": {
    nome: "Operação Lava Jato (Petrolão)",
    areas: [
      {
        titulo: "Contexto geral",
        casos: [{
          status: "Neutro",
          texto: `A Operação Lava Jato começou em 17 de março de 2014, em Curitiba (PR), investigando inicialmente doleiros que lavavam dinheiro por meio de postos de combustíveis e lava-jatos de carros, o que deu nome à operação. Entre os investigados estava Alberto Youssef.

As apurações revelaram um esquema bem maior de corrupção na Petrobras: grandes empreiteiras formavam cartel, combinavam preços de contratos e pagavam propinas a ex-diretores da estatal, a operadores financeiros e a agentes políticos. Parte do dinheiro abastecia partidos e campanhas eleitorais.

A operação teve dezenas de fases, centenas de mandados e acordos de colaboração premiada e de leniência. O maior envolveu a Odebrecht (hoje Novonor) e a Braskem, que em 2016 admitiram propinas em vários países e fecharam acordos com Brasil, EUA e Suíça. Os valores globais passaram de US$ 3 bilhões.

A força-tarefa foi dissolvida em 2021. Desde então, o legado é disputado: de um lado, o maior esforço anticorrupção da história do país; de outro, críticas a abusos processuais, à atuação do então juiz Sergio Moro e a decisões do STF que anularam condenações e provas.`
        }]
      },
      {
        titulo: "Anulações: Lula e parcialidade de Moro",
        casos: [
          {
            status: "Condenação anulada",
            texto: `Lula foi condenado em 2017 no caso do tríplex do Guarujá e depois no do sítio de Atibaia. Ficou preso de abril de 2018 a novembro de 2019.

Em março de 2021, o ministro Edson Fachin anulou as condenações por entender que a 13ª Vara Federal de Curitiba não era competente, já que os casos não tinham relação direta com os desvios da Petrobras. Os processos voltaram à estaca zero e, em grande parte, foram arquivados ou prescreveram.

A anulação não é absolvição: o mérito não foi julgado.`
          },
          {
            status: "Condenação anulada",
            texto: `A Segunda Turma do STF reconheceu a parcialidade de Moro no caso do tríplex. A "Vaza Jato", série de mensagens entre Moro e procuradores divulgada pelo The Intercept Brasil a partir de 2019, alimentou a tese de coordenação indevida entre juiz e acusação.

As mensagens, obtidas por hackers, foram depois periciadas e usadas pela defesa de Lula com autorização do STF.`
          }
        ]
      },
      {
        titulo: "Anulação das provas da Odebrecht",
        casos: [{
          status: "Provas anuladas",
          texto: `Em setembro de 2023, o ministro Dias Toffoli declarou imprestáveis as provas do acordo de leniência da Odebrecht, sob o argumento de que os sistemas de comunicação da empresa teriam sido manipulados ou obtidos de forma irregular. A decisão foi estendida a outros réus e atingiu ações em várias instâncias.

Críticos dizem que isso enfraquece o combate à corrupção, já que as empresas admitiram os pagamentos. Defensores afirmam que se corrigiram ilegalidades na cadeia de custódia das provas.

Após as decisões, muitas defesas pediram a extensão dos efeitos. Várias ações foram anuladas ou devolvidas a outros juízos, e algumas terminaram por prescrição.`
        }]
      },
      {
        titulo: "Denunciados e réus",
        casos: [
          {
            status: "Denunciado",
            texto: `Executivos de Odebrecht, OAS, Andrade Gutierrez e Camargo Corrêa foram denunciados por corrupção, lavagem e cartel. Muitos fecharam colaboração premiada em troca de redução de pena. Marcelo Odebrecht chegou a ser condenado a 19 anos, depois reduzidos por acordo.

Os ex-diretores da Petrobras Paulo Roberto Costa, Nestor Cerveró, Renato Duque e Pedro Barusco foram denunciados por receber propinas. Costa e Barusco colaboraram e ampliaram a investigação.`
          },
          {
            status: "Denunciado",
            texto: `No núcleo político, houve denúncias contra parlamentares, ex-ministros e dirigentes partidários, muitas no STF, por causa do foro privilegiado. Michel Temer foi denunciado duas vezes em 2017 pela PGR, e a Câmara não autorizou o prosseguimento.

Fernando Collor foi condenado pelo STF em 2023 em caso ligado à BR Distribuidora.`
          }
        ]
      },
      {
        titulo: "Investigações em andamento",
        casos: [
          {
            status: "Em investigação",
            texto: `Após o enfraquecimento da operação, passaram a ser apuradas condutas de procuradores, juízes e outros agentes que atuaram nela, em órgãos como CNMP e CNJ. Os temas incluem a condução de acordos e o uso de recursos. Abrir uma investigação não equivale a condenação.`
          },
          {
            status: "Em investigação",
            texto: `Em 2018, um acordo da Petrobras com autoridades dos EUA previa que cerca de US$ 682 milhões ficassem sob controle de uma fundação ligada à força-tarefa. O STF suspendeu o arranjo em 2019 e o dinheiro foi destinado a outros fins, como educação e combate a incêndios. O episódio ainda rende apurações sobre a legalidade do fundo.`
          }
        ]
      },
      {
        titulo: "Sem condenação",
        casos: [{
          status: "Sem condenação",
          texto: `Muita gente investigada, citada em delações ou denunciada nunca foi condenada. Houve arquivamentos por falta de provas, prescrição, rejeição de denúncia e absolvições. A ausência de condenação não prova culpa nem inocência: indica só que não há sentença condenatória definitiva.`
        }]
      }
    ]
  },

  // ----------------------------------------------------------
  "mensalao": {
    nome: "Escândalo do Mensalão (2005)",
    areas: [
      {
        titulo: "Contexto geral",
        casos: [
          {
            status: "Neutro",
            texto: `O Mensalão veio a público em junho de 2005, quando o então deputado Roberto Jefferson (PTB) disse em entrevista à Folha de S.Paulo que o governo pagava uma mesada a parlamentares da base em troca de apoio no Congresso. A denúncia abalou o primeiro governo Lula e levou à saída de José Dirceu da Casa Civil.

A investigação apontou um esquema de recursos operado por Marcos Valério e suas agências de publicidade, com empréstimos de bancos como o Rural e o BMG. O dinheiro teria abastecido partidos aliados e políticos. O tesoureiro do PT, Delúbio Soares, admitiu recursos "não contabilizados", enquanto a defesa de vários réus sustentou que se tratava de caixa dois eleitoral, e não de compra de votos.

O caso passou pela CPMI dos Correios e, depois, pelo STF, na Ação Penal 470, considerada um dos julgamentos mais longos e midiáticos da história da Corte.`
          }
        ]
      },
      {
        titulo: "A denúncia e o julgamento no STF",
        casos: [
          {
            status: "Denunciado",
            texto: `Em 2006, o Procurador-Geral da República denunciou 40 pessoas por crimes como formação de quadrilha, corrupção ativa e passiva, peculato, lavagem de dinheiro e gestão fraudulenta. O STF recebeu a denúncia em 2007, e o julgamento começou em agosto de 2012, sob relatoria do ministro Joaquim Barbosa.

Ao final, a maioria dos réus que chegaram a julgamento foi condenada, e um grupo menor foi absolvido. A Corte também discutiu se o crime de formação de quadrilha estava configurado, ponto que mudou com os embargos infringentes de 2013 e 2014, aceitos pelo Tribunal.`
          },
          {
            status: "Condenado",
            texto: `Foram condenados no STF, entre outros, José Dirceu, José Genoino, Delúbio Soares, Marcos Valério, Roberto Jefferson, Valdemar Costa Neto e João Paulo Cunha. As penas variaram conforme o crime e o réu, e as prisões começaram em novembro de 2013.

Houve ajustes depois dos embargos: alguns condenados tiveram a pena por formação de quadrilha afastada, o que reduziu o tempo de prisão. Parte dos réus cumpriu pena em regime fechado, semiaberto ou aberto, e alguns receberam benefícios ao longo dos anos.`
          }
        ]
      },
      {
        titulo: "O papel de Lula",
        casos: [
          {
            status: "Sem condenação",
            texto: `Lula era presidente quando o esquema veio a público, mas não foi denunciado nem réu na Ação Penal 470. Em 2005, disse publicamente ter se sentido traído e afirmou que o PT precisava pedir desculpas ao país.

Adversários sustentam que o presidente se beneficiou politicamente do esquema, enquanto o PT e aliados dizem que o julgamento foi politizado. A denúncia da PGR apontou José Dirceu como figura central da articulação, e Lula não aparece entre os acusados.`
          }
        ]
      },
      {
        titulo: "O \"mensalão tucano\" (Minas Gerais)",
        casos: [
          {
            status: "Condenado",
            texto: `O chamado mensalão mineiro, ligado à campanha de 1998 do então governador Eduardo Azeredo (PSDB), usou o mesmo operador, Marcos Valério. Azeredo foi condenado na Justiça de Minas por peculato e lavagem de dinheiro e passou a cumprir pena depois que o recurso se esgotou.

O caso é citado como exemplo de que o esquema de financiamento não se limitou a um partido. A demora entre os fatos e a condenação também alimentou críticas à lentidão da Justiça.`
          }
        ]
      },
      {
        titulo: "Efeitos políticos e legado",
        casos: [
          {
            status: "Neutro",
            texto: `O Mensalão marcou a política brasileira porque levou à prisão de figuras de primeiro escalão de um partido no poder. Ele também antecipou debates que voltariam na Lava Jato, como o uso de delações, o financiamento eleitoral e o foro privilegiado.

Parte dos condenados voltou à vida política e, anos depois, alguns foram alvo de novos processos. Dirceu, por exemplo, foi condenado também na Lava Jato, em decisão posteriormente questionada. Sempre confira a situação atual de cada nome nos tribunais.`
          }
        ]
      }
    ]
  },

  // ----------------------------------------------------------
  "inss": {
    nome: "Caso do INSS",
    areas: [
      {
        titulo: "Contexto geral: a Operação Sem Desconto",
        casos: [
          {
            status: "Neutro",
            texto: `A Operação Sem Desconto, deflagrada pela Polícia Federal e pela CGU em abril de 2025, investiga descontos associativos feitos diretamente sobre aposentadorias e pensões do INSS, em muitos casos sem autorização dos beneficiários. As entidades atuavam por meio de acordos de cooperação técnica com o instituto.

As estimativas apontam que cerca de R$ 6,3 bilhões foram descontados entre 2019 e 2024. Milhões de aposentados e pensionistas tiveram algum desconto indevido, e a AGU passou a organizar o ressarcimento.

O então presidente do INSS, Alessandro Stefanutto, foi demitido no dia em que a operação veio a público, e o ministro da Previdência, Carlos Lupi, deixou o cargo pouco depois. O caso foi para o STF, sob relatoria do ministro André Mendonça, e também gerou uma CPMI no Congresso.`
          }
        ]
      },
      {
        titulo: "Indiciados pela Polícia Federal",
        casos: [
          {
            status: "Indiciado",
            texto: `Em julho de 2026, a PF concluiu o primeiro inquérito e indiciou 48 pessoas ligadas ao caso da Conafer, entre elas o ex-presidente do INSS Alessandro Stefanutto e o empresário Antônio Carlos Camilo Antunes, conhecido como "Careca do INSS". O relatório está sob sigilo.

Segundo a imprensa, a PF concluiu que Stefanutto teria recebido até R$ 250 mil por mês em propina para deixar de fiscalizar entidades suspeitas. Os investigados negam ou não se manifestaram, e a defesa de Antunes disse não ter tido acesso aos autos.

Indiciamento não é denúncia. Cabe à PGR decidir entre denunciar, pedir novas diligências ou arquivar. Não localizei, até esta data, informação de que a denúncia tenha sido apresentada.`
          }
        ]
      },
      {
        titulo: "Prisões e fases da operação",
        casos: [
          {
            status: "Em investigação",
            texto: `A Operação Cambota, desdobramento da Sem Desconto, levou à prisão de Antunes e do empresário Maurício Camisotti em setembro de 2025. Em dezembro do mesmo ano, uma nova fase autorizada por Mendonça previu 16 mandados de prisão preventiva e 52 de busca e apreensão em vários estados.

A PF afirma que Antunes seria o "dono de fato" de uma entidade de pescadores, a CBPA, responsável por descontos indevidos. Os advogados contestam as acusações.

Prisão preventiva é medida cautelar, e não condenação. As investigações continuam em várias frentes, com novas fases e inquéritos.`
          }
        ]
      },
      {
        titulo: "Repercussão política",
        casos: [
          {
            status: "Sem condenação",
            texto: `Os descontos cresceram ao longo de 2019 a 2024, período que atravessa o governo Bolsonaro e o início do governo Lula. Por isso, os dois lados se acusam de omissão ou de benefício político, e a CPMI virou palco dessa disputa.

Reportagens ligaram o caso a pessoas próximas do presidente. O filho de Lula, Fábio Luís (Lulinha), é alvo de inquéritos no STF por suspeita de tráfico de influência ligada ao "Careca do INSS", e a defesa nega vínculo com as fraudes. O próprio Lula não é investigado nesse caso. Reportagens também citaram um sindicato ligado ao irmão do presidente, e os envolvidos negam irregularidades.

Até onde pude verificar, não há condenação de nenhum político por esse caso.`
          }
        ]
      },
      {
        titulo: "Ressarcimento das vítimas",
        casos: [
          {
            status: "Neutro",
            texto: `A AGU defendeu o ressarcimento administrativo dos aposentados, sem necessidade de processo judicial, e o STF suspendeu a prescrição para que as vítimas pudessem buscar indenização. A avaliação oficial foi de que milhões de beneficiários foram atingidos.

Quem teve desconto que não reconhece pode consultar o extrato no Meu INSS e pedir o cancelamento e o ressarcimento pelos canais oficiais.`
          }
        ]
      }
    ]
  },

  // ----------------------------------------------------------
  "em-nome-do-pai": {
    nome: 'Operação "Em Nome do Pai"',
    areas: [
      {
        titulo: "O que é a operação",
        casos: [
          {
            status: "Em investigação",
            texto: `A Polícia Federal deflagrou a Operação "Em Nome do Pai" em 8 de outubro de 2026, para apurar possível favorecimento a empresas dos setores imobiliário e de construção civil por meio de decisões judiciais. Foram cumpridos seis mandados de busca e apreensão em Icaraí, bairro de Niterói (RJ).

Os mandados foram expedidos pelo ministro Og Fernandes, do Superior Tribunal de Justiça, já que o investigado principal é um desembargador. Os fatos em apuração podem caracterizar organização criminosa, corrupção e lavagem de dinheiro.

Trata-se de um caso muito recente, e as informações abaixo podem mudar nos próximos dias.`
          }
        ]
      },
      {
        titulo: "Quem são os alvos",
        casos: [
          {
            status: "Em investigação",
            texto: `Segundo a imprensa, o alvo principal é o desembargador Alexandre Eduardo Scisinio, do Tribunal de Justiça do Rio de Janeiro, que atuou como juiz titular em Niterói antes de ser promovido a desembargador em 2021.

A operação também mira familiares do magistrado (esposa, dois filhos e cunhada) e uma advogada. Em um dos endereços, atribuído a um dos filhos, os agentes apreenderam R$ 27 mil em espécie.

Ser alvo de busca e apreensão não significa ser réu. Até o momento não há indiciamento, denúncia ou condenação.`
          }
        ]
      },
      {
        titulo: "O que a PF suspeita",
        casos: [
          {
            status: "Em investigação",
            texto: `De acordo com a PF, as decisões judiciais investigadas ocorriam enquanto vantagens indevidas seriam repassadas à família do magistrado. Os benefícios incluiriam imóveis, descontos comerciais excepcionais, pagamentos indiretos e o uso de interpostas pessoas e empresas ligadas aos investigados.

Os atos de corrupção apurados teriam ocorrido quando o magistrado atuava na primeira instância. A PF diz que os supostos atos de lavagem de dinheiro se prolongaram no tempo, o que permitiu as buscas atuais.

Tudo isso é hipótese de investigação, e os investigados têm direito à ampla defesa.`
          }
        ]
      },
      {
        titulo: "Origem do caso e próximos passos",
        casos: [
          {
            status: "Em investigação",
            texto: `A investigação começou com elementos enviados pela Corregedoria-Geral do TJRJ, que abriu um procedimento administrativo para apurar a conduta do magistrado. Esse procedimento corre em paralelo à investigação criminal.

O Tribunal de Justiça informou que não comentaria o andamento das apurações. A PF agora analisa o material apreendido. Os próximos passos possíveis são novas diligências, indiciamento, denúncia pela PGR ou arquivamento.`
          },
          {
            status: "Sem condenação",
            texto: `Até a data desta atualização, ninguém foi condenado neste caso. A presunção de inocência vale para todos os investigados até uma eventual condenação definitiva.`
          }
        ]
      }
    ]
  },

  // ----------------------------------------------------------
  // ATENÇÃO: o título deste botão é genérico. Montei com casos públicos conhecidos
  // de desvios na saúde. Se você tinha outro recorte em mente, me diga.
  "desvios-saude": {
    nome: "Desvios em verbas públicas e saúde (INSS e medicamentos)",
    areas: [
      {
        titulo: "Contexto geral",
        casos: [
          {
            status: "Neutro",
            texto: `A saúde é uma das áreas mais visadas por fraudes com dinheiro público no Brasil, por reunir contratos grandes, compras emergenciais e muitas emendas parlamentares. Os desvios aparecem em superfaturamento de medicamentos e equipamentos, contratos com empresas de fachada, desvio de verbas em organizações sociais e descontos indevidos em benefícios.

O caso dos descontos no INSS, tratado em um botão próprio, é o exemplo mais recente de fraude contra beneficiários. Este bloco reúne episódios ligados à compra de bens e serviços de saúde.

Cada episódio tem situação jurídica própria, e várias investigações ainda estão abertas.`
          }
        ]
      },
      {
        titulo: "Máfia das Sanguessugas (ambulâncias)",
        casos: [
          {
            status: "Condenado",
            texto: `A Operação Sanguessuga, de 2006, revelou um esquema em que a empresa Planam e seus donos, os Vedoin, combinavam com parlamentares emendas para comprar ambulâncias superfaturadas, em troca de comissões. O caso atingiu dezenas de parlamentares, e a CPI das Ambulâncias pediu a cassação de vários.

Os donos da empresa foram condenados. Entre os parlamentares houve cassações, renúncias e absolvições, e vários processos terminaram prescritos. A situação de cada político deve ser conferida individualmente.`
          }
        ]
      },
      {
        titulo: "Compras na pandemia",
        casos: [
          {
            status: "Em investigação",
            texto: `Durante a covid-19, várias operações apuraram superfaturamento em respiradores, hospitais de campanha e vacinas. A Operação Placebo, de 2020, mirou contratos de saúde no Rio de Janeiro e levou à investigação do então governador Wilson Witzel, que sofreu impeachment em 2021. Witzel nega as acusações.

No plano federal, a CPI da Covid, em 2021, examinou a negociação da vacina Covaxin, com a empresa Precisa Medicamentos, e outros contratos. O relatório final pediu o indiciamento de dezenas de pessoas, mas a CPI não tem poder de condenar, e os desdobramentos criminais seguiram em outras instâncias.`
          },
          {
            status: "Sem condenação",
            texto: `A maior parte das pessoas citadas na CPI e nas operações da pandemia não tem condenação definitiva. Vários casos foram arquivados, outros seguem em andamento e alguns estão em fase de recurso. Antes de publicar o nome de qualquer pessoa, confira o andamento no tribunal competente.`
          }
        ]
      },
      {
        titulo: "Medicamentos e fiscalização",
        casos: [
          {
            status: "Neutro",
            texto: `Fraudes com medicamentos incluem compras com preço acima do mercado, entrega de produtos em quantidade menor que a contratada e desvio de remédios de farmácias populares e hospitais. Os principais órgãos de controle são a CGU, o TCU, os tribunais de contas estaduais e o Ministério Público.

Para consultar contratos e repasses, use o Portal da Transparência e os portais de transparência de estados e municípios.`
          }
        ]
      }
    ]
  }
};