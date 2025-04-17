const realChampionsData = [
  { club: "Real Madrid", years: [1956, 1957, 1958, 1959, 1960, 1962, 1964, 1966, 1981, 1998, 2000, 2002, 2014, 2016, 2017, 2018, 2022, 2024], finals: 18 },
  { club: "Milan", years: [1958, 1963, 1969, 1973, 1993, 1994, 1995, 2003, 2005, 2007], finals: 10 },
  { club: "Liverpool", years: [1977, 1978, 1981, 1984, 1985, 2005, 2007, 2018, 2019, 2022], finals: 10 },
  { club: "Bayern de Munique", years: [1974, 1975, 1976, 1982, 1987, 1999, 2001, 2010, 2012, 2013, 2020], finals: 11 },
  { club: "Barcelona", years: [1961, 1986, 1992, 1994, 2006, 2009, 2011, 2015], finals: 8 },
  { club: "Juventus", years: [1973, 1983, 1985, 1996, 1997, 1998, 2003, 2015, 2017], finals: 9 },
  { club: "Benfica", years: [1961, 1962, 1963, 1965, 1968, 1988, 1990], finals: 7 },
  { club: "Ajax", years: [1969, 1971, 1972, 1973, 1995, 1996], finals: 6 },
  { club: "Manchester United", years: [1968, 1999, 2008, 2009, 2011], finals: 5 },
  { club: "Inter de Milão", years: [1964, 1965, 1967, 1972, 2001, 2010, 2023], finals: 7 },
  { club: "Chelsea", years: [2008, 2012, 2021], finals: 3 },
  { club: "Nottingham Forest", years: [1979, 1980], finals: 2 },
  { club: "Porto", years: [1987, 2004], finals: 2 },
  { club: "Celtic", years: [1967, 1970], finals: 2 },
  { club: "Feyenoord", years: [1970], finals: 1 },
  { club: "Aston Villa", years: [1982], finals: 1 },
  { club: "Hamburgo", years: [1980, 1983], finals: 2 },
  { club: "Steaua Bucareste", years: [1986, 1989], finals: 2 },
  { club: "PSV Eindhoven", years: [1988], finals: 1 },
  { club: "Estrela Vermelha", years: [1991], finals: 1 },
  { club: "Olympique de Marseille", years: [1991, 1993], finals: 2 },
  { club: "Borussia Dortmund", years: [1997, 2013], finals: 2 },
  { club: "Manchester City", years: [2021, 2023], finals: 2 },
  { club: "Arsenal", years: [], finals: 1 }, // Adicionado por relevância histórica
  { club: "Atlético de Madrid", years: [], finals: 3 }, // Adicionado por relevância histórica
  { club: "Roma", years: [], finals: 1 }, // Adicionado por relevância histórica
  { club: "Leeds United", years: [], finals: 1 }, // Adicionado por relevância histórica
  { club: "Stade de Reims", years: [], finals: 2 }, // Adicionado por relevância histórica
]



const selecionsData = [
  "Real Madrid", "Manchester City", "Bayern de Munique", "Liverpool", "Paris Saint-Germain",
  "Inter de Milão", "Chelsea", "Manchester United", "RB Leipzig", "Roma",
  "Barcelona", "Atlético de Madrid", "Bayer Leverkusen", "Arsenal", "Juventus",
  "Borussia Dortmund", "Ajax", "Villarreal", "Benfica", "Porto",
  "Atalanta", "Sevilla", "Tottenham Hotspur", "Napoli", "Feyenoord",
  "PSV Eindhoven", "Milan", "West Ham United", "Real Sociedad", "Sporting CP",
  "Eintracht Frankfurt", "Lazio", "Shakhtar Donetsk", "Rangers", "Olympique de Marseille",
  "Club Brugge", "Dinamo Zagreb", "Celtic", "Red Bull Salzburg", "Galatasaray",
  "Olympiakos", "Slavia Praga", "Young Boys", "Basel", "Fenerbahçe",
  "Sparta Praga", "Union Berlin", "Lille", "Nice", "Fiorentina",
  "Real Betis", "Monaco", "Anderlecht", "AZ Alkmaar", "Braga",
  "Dynamo Kyiv", "Trabzonspor", "KRC Genk", "Copenhagen", "Lokomotiv Moscou",
  "Molde", "LASK", "Sheriff Tiraspol", "Bodo/Glimt", "Maccabi Haifa",
  "Partizan", "Sturm Graz", "Ferencváros", "HJK Helsinki", "Zorya Luhansk",
  "Midtjylland", "PAOK", "AEK Atenas", "Ludogorets", "Qarabağ", "Aston Villa", "Hamburgo", "Steaua Bucareste",
  "Estrela Vermelha","Stade de Reims","Leeds United"
];


export { realChampionsData, selecionsData };