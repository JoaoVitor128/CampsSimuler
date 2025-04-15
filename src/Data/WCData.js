const realChampionsData = [
    { selecion: "Brasil", years: [1958, 1962, 1970, 1994, 2002]},
    { selecion: "Alemanha", years: [1954, 1974, 1990, 2014]},
    { selecion: "Itália", years: [1934, 1938, 1982, 2006] },
    { selecion: "Argentina", years: [1978, 1986, 2022] },
    { selecion: "França", years: [1998, 2018] },
    { selecion: "Uruguai", years: [1930, 1950] },
    { selecion: "Inglaterra", years: [1966] },
    { selecion: "Espanha", years: [2010]},
];

const selecionsData = [
    "Brasil", "Alemanha", "Itália", "Argentina", "França", "Uruguai", "Inglaterra", "Espanha",
    // África (CAF)
    "Argélia", "Angola", "Benin", "Botsuana", "Burquina Faso", "Burundi",
    "Cabo Verde", "Camarões", "Chade", "Comores", "Congo", "RD Congo",
    "Djibuti", "Egito", "Guiné Equatorial", "Eritreia", "Eswatini", "Etiópia",
    "Gabão", "Gâmbia", "Gana", "Guiné", "Guiné-Bissau", "Costa do Marfim",
    "Quênia", "Lesoto", "Libéria", "Líbia", "Madagáscar", "Malawi", "Mali",
    "Mauritânia", "Maurício", "Marrocos", "Moçambique", "Namíbia", "Níger",
    "Nigéria", "Ruanda", "São Tomé e Príncipe", "Senegal", "Serra Leoa",
    "Somália", "África do Sul", "Sudão", "Sudão do Sul", "Tanzânia", "Togo",
    "Tunísia", "Uganda", "Zâmbia", "Zimbábue",
  
    // Ásia (AFC)
    "Afeganistão", "Arábia Saudita", "Austrália", "Bahrein", "Bangladesh",
    "Butão", "Brunei", "Camboja", "China", "Coreia do Norte", "Coreia do Sul",
    "Emirados Árabes Unidos", "Filipinas", "Índia", "Indonésia", "Irã",
    "Iraque", "Japão", "Jordânia", "Kuwait", "Quirguistão", "Laos", "Líbano",
    "Malásia", "Maldivas", "Mongólia", "Mianmar", "Nepal", "Omã", "Paquistão",
    "Palestina", "Catar", "Singapura", "Síria", "Tajiquistão", "Tailândia",
    "Timor-Leste", "Turcomenistão", "Uzbequistão", "Vietnã", "Iémen",
  
    // Europa (UEFA)
    "Albânia", "Andorra", "Armênia", "Áustria", "Azerbaijão", "Bielorrússia",
    "Bélgica", "Bósnia e Herzegovina", "Bulgária", "Croácia", "Chipre",
    "Tchéquia", "Dinamarca", "Escócia", "Estônia", "Ilhas Faroe", "Finlândia",
    "Geórgia", "Grécia", "Hungria", "Islândia", "Irlanda", "Irlanda do Norte",
    "Israel", "Cazaquistão", "Kosovo", "Letônia", "Liechtenstein", "Lituânia",
    "Luxemburgo", "Macedônia do Norte", "Malta", "Moldávia", "Montenegro",
    "Holanda", "Noruega", "Polônia", "Portugal", "Romênia", "Rússia", "San Marino",
    "Sérvia", "Eslováquia", "Eslovênia", "Espanha", "Suécia", "Suíça", "Turquia",
    "Ucrânia", "País de Gales",
  
    // América do Norte, Central e Caribe (CONCACAF)
    "Antígua e Barbuda", "Aruba", "Bahamas", "Barbados", "Belize", "Bermudas",
    "Canadá", "Cayman Islands", "Costa Rica", "Cuba", "Curaçao", "Dominica",
    "El Salvador", "Granada", "Guatemala", "Guiana", "Haiti", "Honduras",
    "Jamaica", "México", "Montserrat", "Nicarágua", "Panamá", "Porto Rico",
    "República Dominicana", "Santa Lúcia", "São Cristóvão e Nevis", 
    "São Vicente e Granadinas", "Suriname", "Trinidad e Tobago", "Ilhas Virgens Americanas",
    "Ilhas Virgens Britânicas",
  
    // América do Sul (CONMEBOL)
    "Bolívia", "Chile", "Colômbia", "Equador", "Paraguai", "Peru", "Venezuela",
  
    // Oceania (OFC)
    "Ilhas Cook", "Fiji", "Ilhas Salomão", "Nova Caledônia", "Nova Zelândia",
    "Papua-Nova Guiné", "Samoa", "Samoa Americana", "Tonga", "Taiti", "Vanuatu"
];

export { realChampionsData, selecionsData };