const countries = {
  Argentina: [
    ["Buenos Aires", "Buenos Aires Province"],
    ["Catamarca", "Catamarca"],
    ["Chaco", "Chaco"],
    ["Chubut", "Chubut"],
    ["Ciudad Autónoma de Buenos Aires", "Buenos Aires (Autonomous City)"],
    ["Corrientes", "Corrientes"],
    ["Córdoba", "Córdoba"],
    ["Entre Ríos", "Entre Ríos"],
    ["Formosa", "Formosa"],
    ["Jujuy", "Jujuy"],
    ["La Pampa", "La Pampa"],
    ["La Rioja", "La Rioja"],
    ["Mendoza", "Mendoza"],
    ["Misiones", "Misiones"],
    ["Neuquén", "Neuquén"],
    ["Río Negro", "Río Negro"],
    ["Salta", "Salta"],
    ["San Juan", "San Juan"],
    ["San Luis", "San Luis"],
    ["Santa Cruz", "Santa Cruz"],
    ["Santa Fe", "Santa Fe"],
    ["Santiago Del Estero", "Santiago del Estero"],
    ["Tierra Del Fuego", "Tierra del Fuego"],
    ["Tucumán", "Tucumán"],
  ],
  Australia: [
    ["Australian Capital Territory", "Australian Capital Territory"],
    ["New South Wales", "New South Wales"],
    ["Northern Territory", "Northern Territory"],
    ["Queensland", "Queensland"],
    ["South Australia", "South Australia"],
    ["Tasmania", "Tasmania"],
    ["Victoria", "Victoria"],
    ["Western Australia", "Western Australia"],
  ],
  Brazil: [
    ["Acre", "Acre"],
    ["Alagoas", "Alagoas"],
    ["Amapá", "Amapá"],
    ["Amazonas", "Amazonas"],
    ["Bahia", "Bahia"],
    ["Ceará", "Ceará"],
    ["Distrito Federal", "Federal District"],
    ["Espírito Santo", "Espírito Santo"],
    ["Goiás", "Goiás"],
    ["Maranhão", "Maranhão"],
    ["Mato Grosso", "Mato Grosso"],
    ["Mato Grosso do Sul", "Mato Grosso do Sul"],
    ["Minas Gerais", "Minas Gerais"],
    ["Paraná", "Paraná"],
    ["Paraíba", "Paraíba"],
    ["Pará", "Pará"],
    ["Pernambuco", "Pernambuco"],
    ["Piauí", "Piauí"],
    ["Rio Grande do Norte", "Rio Grande do Norte"],
    ["Rio Grande do Sul", "Rio Grande do Sul"],
    ["Rio de Janeiro", "Rio de Janeiro"],
    ["Rondônia", "Rondônia"],
    ["Roraima", "Roraima"],
    ["Santa Catarina", "Santa Catarina"],
    ["Sergipe", "Sergipe"],
    ["São Paulo", "São Paulo"],
    ["Tocantins", "Tocantins"],
  ],
  Canada: [
    ["Alberta", "Alberta"],
    ["British Columbia", "British Columbia"],
    ["Manitoba", "Manitoba"],
    ["New Brunswick", "New Brunswick"],
    ["Newfoundland and Labrador", "Newfoundland and Labrador"],
    ["Northwest Territories", "Northwest Territories"],
    ["Nova Scotia", "Nova Scotia"],
    ["Nunavut", "Nunavut"],
    ["Ontario", "Ontario"],
    ["Prince Edward Island", "Prince Edward Island"],
    ["Quebec", "Quebec"],
    ["Saskatchewan", "Saskatchewan"],
    ["Yukon", "Yukon"],
  ],
  Chile: [
    ["Antofagasta", "Antofagasta"],
    ["Araucanía", "Araucanía"],
    ["Arica and Parinacota", "Arica y Parinacota"],
    ["Atacama", "Atacama"],
    ["Aysén", "Aysén"],
    ["Biobío", "Bío Bío"],
    ["Coquimbo", "Coquimbo"],
    ["Los Lagos", "Los Lagos"],
    ["Los Ríos", "Los Ríos"],
    ["Magallanes", "Magallanes Region"],
    ["Maule", "Maule"],
    ["O Higgins", "Libertador General Bernardo O’Higgins"],
    ["Santiago", "Santiago Metropolitan"],
    ["Tarapacá", "Tarapacá"],
    ["Valparaíso", "Valparaíso"],
    ["Ñuble", "Ñuble"],
  ],
  China: [
    ["Anhui", "Anhui"],
    ["Beijing", "Beijing"],
    ["Chongqing", "Chongqing"],
    ["Fujian", "Fujian"],
    ["Gansu", "Gansu"],
    ["Guangdong", "Guangdong"],
    ["Guangxi", "Guangxi"],
    ["Guizhou", "Guizhou"],
    ["Hainan", "Hainan"],
    ["Hebei", "Hebei"],
    ["Heilongjiang", "Heilongjiang"],
    ["Henan", "Henan"],
    ["Hubei", "Hubei"],
    ["Hunan", "Hunan"],
    ["Inner Mongolia", "Inner Mongolia"],
    ["Jiangsu", "Jiangsu"],
    ["Jiangxi", "Jiangxi"],
    ["Jilin", "Jilin"],
    ["Liaoning", "Liaoning"],
    ["Ningxia", "Ningxia"],
    ["Qinghai", "Qinghai"],
    ["Shaanxi", "Shaanxi"],
    ["Shandong", "Shandong"],
    ["Shanghai", "Shanghai"],
    ["Shanxi", "Shanxi"],
    ["Sichuan", "Sichuan"],
    ["Tianjin", "Tianjin"],
    ["Xinjiang", "Xinjiang"],
    ["Xizang", "Tibet"],
    ["Yunnan", "Yunnan"],
    ["Zhejiang", "Zhejiang"],
  ],
  Columbia: [
    ["Amazonas", "Amazonas"],
    ["Antioquia", "Antioquia"],
    ["Arauca", "Arauca"],
    ["Atlántico", "Atlántico"],
    ["Bogotá, D.C.", "Capital District"],
    ["Bolívar", "Bolívar"],
    ["Boyacá", "Boyacá"],
    ["Caldas", "Caldas"],
    ["Caquetá", "Caquetá"],
    ["Casanare", "Casanare"],
    ["Cauca", "Cauca"],
    ["Cesar", "Cesar"],
    ["Chocó", "Chocó"],
    ["Cundinamarca", "Cundinamarca"],
    ["Córdoba", "Córdoba"],
    ["Guainía", "Guainía"],
    ["Guaviare", "Guaviare"],
    ["Huila", "Huila"],
    ["La Guajira", "La Guajira"],
    ["Magdalena", "Magdalena"],
    ["Meta", "Meta"],
    ["Nariño", "Nariño"],
    ["Norte de Santander", "Norte de Santander"],
    ["Putumayo", "Putumayo"],
    ["Quindío", "Quindío"],
    ["Risaralda", "Risaralda"],
    [
      "San Andrés, Providencia y Santa Catalina",
      "San Andrés \u0026 Providencia",
    ],
    ["Santander", "Santander"],
    ["Sucre", "Sucre"],
    ["Tolima", "Tolima"],
    ["Valle del Cauca", "Valle del Cauca"],
    ["Vaupés", "Vaupés"],
    ["Vichada", "Vichada"],
  ],
  Egypt: [
    ["6th of October", "6th of October"],
    ["Al Sharqia", "Al Sharqia"],
    ["Alexandria", "Alexandria"],
    ["Aswan", "Aswan"],
    ["Asyut", "Asyut"],
    ["Beheira", "Beheira"],
    ["Beni Suef", "Beni Suef"],
    ["Cairo", "Cairo"],
    ["Dakahlia", "Dakahlia"],
    ["Damietta", "Damietta"],
    ["Faiyum", "Faiyum"],
    ["Gharbia", "Gharbia"],
    ["Giza", "Giza"],
    ["Helwan", "Helwan"],
    ["Ismailia", "Ismailia"],
    ["Kafr el-Sheikh", "Kafr el-Sheikh"],
    ["Luxor", "Luxor"],
    ["Matrouh", "Matrouh"],
    ["Minya", "Minya"],
    ["Monufia", "Monufia"],
    ["New Valley", "New Valley"],
    ["North Sinai", "North Sinai"],
    ["Port Said", "Port Said"],
    ["Qalyubia", "Qalyubia"],
    ["Qena", "Qena"],
    ["Red Sea", "Red Sea"],
    ["Sohag", "Sohag"],
    ["South Sinai", "South Sinai"],
    ["Suez", "Suez"],
  ],
  Guatemala: [
    ["Alta Verapaz", "Alta Verapaz"],
    ["Baja Verapaz", "Baja Verapaz"],
    ["Chimaltenango", "Chimaltenango"],
    ["Chiquimula", "Chiquimula"],
    ["El Progreso", "El Progreso"],
    ["Escuintla", "Escuintla"],
    ["Guatemala", "Guatemala"],
    ["Huehuetenango", "Huehuetenango"],
    ["Izabal", "Izabal"],
    ["Jalapa", "Jalapa"],
    ["Jutiapa", "Jutiapa"],
    ["Petén", "Petén"],
    ["Quetzaltenango", "Quetzaltenango"],
    ["Quiché", "Quiché"],
    ["Retalhuleu", "Retalhuleu"],
    ["Sacatepéquez", "Sacatepéquez"],
    ["San Marcos", "San Marcos"],
    ["Santa Rosa", "Santa Rosa"],
    ["Sololá", "Sololá"],
    ["Suchitepéquez", "Suchitepéquez"],
    ["Totonicapán", "Totonicapán"],
    ["Zacapa", "Zacapa"],
  ],
  India: [
    ["Andaman and Nicobar Islands", "Andaman and Nicobar Islands"],
    ["Andhra Pradesh", "Andhra Pradesh"],
    ["Arunachal Pradesh", "Arunachal Pradesh"],
    ["Assam", "Assam"],
    ["Bihar", "Bihar"],
    ["Chandigarh", "Chandigarh"],
    ["Chhattisgarh", "Chhattisgarh"],
    ["Dadra and Nagar Haveli", "Dadra and Nagar Haveli"],
    ["Daman and Diu", "Daman and Diu"],
    ["Delhi", "Delhi"],
    ["Goa", "Goa"],
    ["Gujarat", "Gujarat"],
    ["Haryana", "Haryana"],
    ["Himachal Pradesh", "Himachal Pradesh"],
    ["Jammu and Kashmir", "Jammu and Kashmir"],
    ["Jharkhand", "Jharkhand"],
    ["Karnataka", "Karnataka"],
    ["Kerala", "Kerala"],
    ["Ladakh", "Ladakh"],
    ["Lakshadweep", "Lakshadweep"],
    ["Madhya Pradesh", "Madhya Pradesh"],
    ["Maharashtra", "Maharashtra"],
    ["Manipur", "Manipur"],
    ["Meghalaya", "Meghalaya"],
    ["Mizoram", "Mizoram"],
    ["Nagaland", "Nagaland"],
    ["Odisha", "Odisha"],
    ["Puducherry", "Puducherry"],
    ["Punjab", "Punjab"],
    ["Rajasthan", "Rajasthan"],
    ["Sikkim", "Sikkim"],
    ["Tamil Nadu", "Tamil Nadu"],
    ["Telangana", "Telangana"],
    ["Tripura", "Tripura"],
    ["Uttar Pradesh", "Uttar Pradesh"],
    ["Uttarakhand", "Uttarakhand"],
    ["West Bengal", "West Bengal"],
  ],
  "Hong Kong": [
    ["Hong Kong Island", "Hong Kong Island"],
    ["Kowloon", "Kowloon"],
    ["New Territories", "New Territories"],
  ],
  Indonesia: [
    ["Aceh", "Aceh"],
    ["Bali", "Bali"],
    ["Bangka Belitung", "Bangka–Belitung Islands"],
    ["Banten", "Banten"],
    ["Bengkulu", "Bengkulu"],
    ["Gorontalo", "Gorontalo"],
    ["Jakarta", "Jakarta"],
    ["Jambi", "Jambi"],
    ["Jawa Barat", "West Java"],
    ["Jawa Tengah", "Central Java"],
    ["Jawa Timur", "East Java"],
    ["Kalimantan Barat", "West Kalimantan"],
    ["Kalimantan Selatan", "South Kalimantan"],
    ["Kalimantan Tengah", "Central Kalimantan"],
    ["Kalimantan Timur", "East Kalimantan"],
    ["Kalimantan Utara", "North Kalimantan"],
    ["Kepulauan Riau", "Riau Islands"],
    ["Lampung", "Lampung"],
    ["Maluku", "Maluku"],
    ["Maluku Utara", "North Maluku"],
    ["North Sumatra", "North Sumatra"],
    ["Nusa Tenggara Barat", "West Nusa Tenggara"],
    ["Nusa Tenggara Timur", "East Nusa Tenggara"],
    ["Papua", "Papua"],
    ["Papua Barat", "West Papua"],
    ["Riau", "Riau"],
    ["South Sumatra", "South Sumatra"],
    ["Sulawesi Barat", "West Sulawesi"],
    ["Sulawesi Selatan", "South Sulawesi"],
    ["Sulawesi Tengah", "Central Sulawesi"],
    ["Sulawesi Tenggara", "Southeast Sulawesi"],
    ["Sulawesi Utara", "North Sulawesi"],
    ["West Sumatra", "West Sumatra"],
    ["Yogyakarta", "Yogyakarta"],
  ],
  Ireland: [
    ["Carlow", "Carlow"],
    ["Cavan", "Cavan"],
    ["Clare", "Clare"],
    ["Cork", "Cork"],
    ["Donegal", "Donegal"],
    ["Dublin", "Dublin"],
    ["Galway", "Galway"],
    ["Kerry", "Kerry"],
    ["Kildare", "Kildare"],
    ["Kilkenny", "Kilkenny"],
    ["Laois", "Laois"],
    ["Leitrim", "Leitrim"],
    ["Limerick", "Limerick"],
    ["Longford", "Longford"],
    ["Louth", "Louth"],
    ["Mayo", "Mayo"],
    ["Meath", "Meath"],
    ["Monaghan", "Monaghan"],
    ["Offaly", "Offaly"],
    ["Roscommon", "Roscommon"],
    ["Sligo", "Sligo"],
    ["Tipperary", "Tipperary"],
    ["Waterford", "Waterford"],
    ["Westmeath", "Westmeath"],
    ["Wexford", "Wexford"],
    ["Wicklow", "Wicklow"],
  ],
  Italy: [
    ["Agrigento", "Agrigento"],
    ["Alessandria", "Alessandria"],
    ["Ancona", "Ancona"],
    ["Aosta", "Aosta"],
    ["Arezzo", "Arezzo"],
    ["Ascoli Piceno", "Ascoli Piceno"],
    ["Asti", "Asti"],
    ["Avellino", "Avellino"],
    ["Bari", "Bari"],
    ["Barletta-Andria-Trani", "Barletta-Andria-Trani"],
    ["Belluno", "Belluno"],
    ["Benevento", "Benevento"],
    ["Bergamo", "Bergamo"],
    ["Biella", "Biella"],
    ["Bologna", "Bologna"],
    ["Bolzano", "South Tyrol"],
    ["Brescia", "Brescia"],
    ["Brindisi", "Brindisi"],
    ["Cagliari", "Cagliari"],
    ["Caltanissetta", "Caltanissetta"],
    ["Campobasso", "Campobasso"],
    ["Carbonia-Iglesias", "Carbonia-Iglesias"],
    ["Caserta", "Caserta"],
    ["Catania", "Catania"],
    ["Catanzaro", "Catanzaro"],
    ["Chieti", "Chieti"],
    ["Como", "Como"],
    ["Cosenza", "Cosenza"],
    ["Cremona", "Cremona"],
    ["Crotone", "Crotone"],
    ["Cuneo", "Cuneo"],
    ["Enna", "Enna"],
    ["Fermo", "Fermo"],
    ["Ferrara", "Ferrara"],
    ["Firenze", "Florence"],
    ["Foggia", "Foggia"],
    ["Forlì-Cesena", "Forlì-Cesena"],
    ["Frosinone", "Frosinone"],
    ["Genova", "Genoa"],
    ["Gorizia", "Gorizia"],
    ["Grosseto", "Grosseto"],
    ["Imperia", "Imperia"],
    ["Isernia", "Isernia"],
    ["L'Aquila", "L’Aquila"],
    ["La Spezia", "La Spezia"],
    ["Latina", "Latina"],
    ["Lecce", "Lecce"],
    ["Lecco", "Lecco"],
    ["Livorno", "Livorno"],
    ["Lodi", "Lodi"],
    ["Lucca", "Lucca"],
    ["Macerata", "Macerata"],
    ["Mantova", "Mantua"],
    ["Massa-Carrara", "Massa and Carrara"],
    ["Matera", "Matera"],
    ["Medio Campidano", "Medio Campidano"],
    ["Messina", "Messina"],
    ["Milano", "Milan"],
    ["Modena", "Modena"],
    ["Monza e Brianza", "Monza and Brianza"],
    ["Napoli", "Naples"],
    ["Novara", "Novara"],
    ["Nuoro", "Nuoro"],
    ["Ogliastra", "Ogliastra"],
    ["Olbia-Tempio", "Olbia-Tempio"],
    ["Oristano", "Oristano"],
    ["Padova", "Padua"],
    ["Palermo", "Palermo"],
    ["Parma", "Parma"],
    ["Pavia", "Pavia"],
    ["Perugia", "Perugia"],
    ["Pesaro e Urbino", "Pesaro and Urbino"],
    ["Pescara", "Pescara"],
    ["Piacenza", "Piacenza"],
    ["Pisa", "Pisa"],
    ["Pistoia", "Pistoia"],
    ["Pordenone", "Pordenone"],
    ["Potenza", "Potenza"],
    ["Prato", "Prato"],
    ["Ragusa", "Ragusa"],
    ["Ravenna", "Ravenna"],
    ["Reggio Calabria", "Reggio Calabria"],
    ["Reggio Emilia", "Reggio Emilia"],
    ["Rieti", "Rieti"],
    ["Rimini", "Rimini"],
    ["Roma", "Rome"],
    ["Rovigo", "Rovigo"],
    ["Salerno", "Salerno"],
    ["Sassari", "Sassari"],
    ["Savona", "Savona"],
    ["Siena", "Siena"],
    ["Siracusa", "Syracuse"],
    ["Sondrio", "Sondrio"],
    ["Taranto", "Taranto"],
    ["Teramo", "Teramo"],
    ["Terni", "Terni"],
    ["Torino", "Turin"],
    ["Trapani", "Trapani"],
    ["Trento", "Trentino"],
    ["Treviso", "Treviso"],
    ["Trieste", "Trieste"],
    ["Udine", "Udine"],
    ["Varese", "Varese"],
    ["Venezia", "Venice"],
    ["Verbano-Cusio-Ossola", "Verbano-Cusio-Ossola"],
    ["Vercelli", "Vercelli"],
    ["Verona", "Verona"],
    ["Vibo Valentia", "Vibo Valentia"],
    ["Vicenza", "Vicenza"],
    ["Viterbo", "Viterbo"],
  ],
  Japan: [
    ["Aichi", "Aichi"],
    ["Akita", "Akita"],
    ["Aomori", "Aomori"],
    ["Chiba", "Chiba"],
    ["Ehime", "Ehime"],
    ["Fukui", "Fukui"],
    ["Fukuoka", "Fukuoka"],
    ["Fukushima", "Fukushima"],
    ["Gifu", "Gifu"],
    ["Gunma", "Gunma"],
    ["Hiroshima", "Hiroshima"],
    ["Hokkaidō", "Hokkaido"],
    ["Hyōgo", "Hyogo"],
    ["Ibaraki", "Ibaraki"],
    ["Ishikawa", "Ishikawa"],
    ["Iwate", "Iwate"],
    ["Kagawa", "Kagawa"],
    ["Kagoshima", "Kagoshima"],
    ["Kanagawa", "Kanagawa"],
    ["Kumamoto", "Kumamoto"],
    ["Kyōto", "Kyoto"],
    ["Kōchi", "Kochi"],
    ["Mie", "Mie"],
    ["Miyagi", "Miyagi"],
    ["Miyazaki", "Miyazaki"],
    ["Nagano", "Nagano"],
    ["Nagasaki", "Nagasaki"],
    ["Nara", "Nara"],
    ["Niigata", "Niigata"],
    ["Okayama", "Okayama"],
    ["Okinawa", "Okinawa"],
    ["Saga", "Saga"],
    ["Saitama", "Saitama"],
    ["Shiga", "Shiga"],
    ["Shimane", "Shimane"],
    ["Shizuoka", "Shizuoka"],
    ["Tochigi", "Tochigi"],
    ["Tokushima", "Tokushima"],
    ["Tottori", "Tottori"],
    ["Toyama", "Toyama"],
    ["Tōkyō", "Tokyo"],
    ["Wakayama", "Wakayama"],
    ["Yamagata", "Yamagata"],
    ["Yamaguchi", "Yamaguchi"],
    ["Yamanashi", "Yamanashi"],
    ["Ōita", "Oita"],
    ["Ōsaka", "Osaka"],
  ],
  Malaysia: [
    ["Johor", "Johor"],
    ["Kedah", "Kedah"],
    ["Kelantan", "Kelantan"],
    ["Kuala Lumpur", "Kuala Lumpur"],
    ["Labuan", "Labuan"],
    ["Melaka", "Malacca"],
    ["Negeri Sembilan", "Negeri Sembilan"],
    ["Pahang", "Pahang"],
    ["Penang", "Penang"],
    ["Perak", "Perak"],
    ["Perlis", "Perlis"],
    ["Putrajaya", "Putrajaya"],
    ["Sabah", "Sabah"],
    ["Sarawak", "Sarawak"],
    ["Selangor", "Selangor"],
    ["Terengganu", "Terengganu"],
  ],
  Mexico: [
    ["Aguascalientes", "Aguascalientes"],
    ["Baja California", "Baja California"],
    ["Baja California Sur", "Baja California Sur"],
    ["Campeche", "Campeche"],
    ["Chiapas", "Chiapas"],
    ["Chihuahua", "Chihuahua"],
    ["Ciudad de México", "Ciudad de Mexico"],
    ["Coahuila", "Coahuila"],
    ["Colima", "Colima"],
    ["Durango", "Durango"],
    ["Guanajuato", "Guanajuato"],
    ["Guerrero", "Guerrero"],
    ["Hidalgo", "Hidalgo"],
    ["Jalisco", "Jalisco"],
    ["Michoacán", "Michoacán"],
    ["Morelos", "Morelos"],
    ["México", "Mexico State"],
    ["Nayarit", "Nayarit"],
    ["Nuevo León", "Nuevo León"],
    ["Oaxaca", "Oaxaca"],
    ["Puebla", "Puebla"],
    ["Querétaro", "Querétaro"],
    ["Quintana Roo", "Quintana Roo"],
    ["San Luis Potosí", "San Luis Potosí"],
    ["Sinaloa", "Sinaloa"],
    ["Sonora", "Sonora"],
    ["Tabasco", "Tabasco"],
    ["Tamaulipas", "Tamaulipas"],
    ["Tlaxcala", "Tlaxcala"],
    ["Veracruz", "Veracruz"],
    ["Yucatán", "Yucatán"],
    ["Zacatecas", "Zacatecas"],
  ],
  "New Zealand": [
    ["Auckland", "Auckland"],
    ["Bay of Plenty", "Bay of Plenty"],
    ["Canterbury", "Canterbury"],
    ["Chatham Islands", "Chatham Islands"],
    ["Gisborne", "Gisborne"],
    ["Hawkes Bay", "Hawke’s Bay"],
    ["Manawatu-Wanganui", "Manawatu-Wanganui"],
    ["Marlborough", "Marlborough"],
    ["Nelson", "Nelson"],
    ["Northland", "Northland"],
    ["Otago", "Otago"],
    ["Southland", "Southland"],
    ["Taranaki", "Taranaki"],
    ["Tasman", "Tasman"],
    ["Waikato", "Waikato"],
    ["Wellington", "Wellington"],
    ["West Coast", "West Coast"],
  ],
  Nigeria: [
    ["Abia", "Abia"],
    ["Abuja Federal Capital Territory", "Federal Capital Territory"],
    ["Adamawa", "Adamawa"],
    ["Akwa Ibom", "Akwa Ibom"],
    ["Anambra", "Anambra"],
    ["Bauchi", "Bauchi"],
    ["Bayelsa", "Bayelsa"],
    ["Benue", "Benue"],
    ["Borno", "Borno"],
    ["Cross River", "Cross River"],
    ["Delta", "Delta"],
    ["Ebonyi", "Ebonyi"],
    ["Edo", "Edo"],
    ["Ekiti", "Ekiti"],
    ["Enugu", "Enugu"],
    ["Gombe", "Gombe"],
    ["Imo", "Imo"],
    ["Jigawa", "Jigawa"],
    ["Kaduna", "Kaduna"],
    ["Kano", "Kano"],
    ["Katsina", "Katsina"],
    ["Kebbi", "Kebbi"],
    ["Kogi", "Kogi"],
    ["Kwara", "Kwara"],
    ["Lagos", "Lagos"],
    ["Nasarawa", "Nasarawa"],
    ["Niger", "Niger"],
    ["Ogun", "Ogun"],
    ["Ondo", "Ondo"],
    ["Osun", "Osun"],
    ["Oyo", "Oyo"],
    ["Plateau", "Plateau"],
    ["Rivers", "Rivers"],
    ["Sokoto", "Sokoto"],
    ["Taraba", "Taraba"],
    ["Yobe", "Yobe"],
    ["Zamfara", "Zamfara"],
  ],
  Panama: [
    ["Bocas del Toro", "Bocas del Toro"],
    ["Chiriquí", "Chiriquí"],
    ["Coclé", "Coclé"],
    ["Colón", "Colón"],
    ["Darién", "Darién"],
    ["Emberá", "Emberá"],
    ["Herrera", "Herrera"],
    ["Kuna Yala", "Guna Yala"],
    ["Los Santos", "Los Santos"],
    ["Ngöbe-Buglé", "Ngöbe-Buglé"],
    ["Panamá", "Panamá"],
    ["Panamá Oeste", "West Panamá"],
    ["Veraguas", "Veraguas"],
  ],
  Peru: [
    ["Amazonas", "Amazonas"],
    ["Apurímac", "Apurímac"],
    ["Arequipa", "Arequipa"],
    ["Ayacucho", "Ayacucho"],
    ["Cajamarca", "Cajamarca"],
    ["Callao", "El Callao"],
    ["Cuzco", "Cusco"],
    ["Huancavelica", "Huancavelica"],
    ["Huánuco", "Huánuco"],
    ["Ica", "Ica"],
    ["Junín", "Junín"],
    ["La Libertad", "La Libertad"],
    ["Lambayeque", "Lambayeque"],
    ["Lima (departamento)", "Lima Region"],
    ["Lima (provincia)", "Lima"],
    ["Loreto", "Loreto"],
    ["Madre de Dios", "Madre de Dios"],
    ["Moquegua", "Moquegua"],
    ["Pasco", "Pasco"],
    ["Piura", "Piura"],
    ["Puno", "Puno"],
    ["San Martín", "San Martín"],
    ["Tacna", "Tacna"],
    ["Tumbes", "Tumbes"],
    ["Ucayali", "Ucayali"],
    ["Áncash", "Ancash"],
  ],
  Phillipines: [
    ["Abra", "Abra"],
    ["Agusan del Norte", "Agusan del Norte"],
    ["Agusan del Sur", "Agusan del Sur"],
    ["Aklan", "Aklan"],
    ["Albay", "Albay"],
    ["Antique", "Antique"],
    ["Apayao", "Apayao"],
    ["Aurora", "Aurora"],
    ["Basilan", "Basilan"],
    ["Bataan", "Bataan"],
    ["Batanes", "Batanes"],
    ["Batangas", "Batangas"],
    ["Benguet", "Benguet"],
    ["Biliran", "Biliran"],
    ["Bohol", "Bohol"],
    ["Bukidnon", "Bukidnon"],
    ["Bulacan", "Bulacan"],
    ["Cagayan", "Cagayan"],
    ["Camarines Norte", "Camarines Norte"],
    ["Camarines Sur", "Camarines Sur"],
    ["Camiguin", "Camiguin"],
    ["Capiz", "Capiz"],
    ["Catanduanes", "Catanduanes"],
    ["Cavite", "Cavite"],
    ["Cebu", "Cebu"],
    ["Cotabato", "Cotabato"],
    ["Davao Occidental", "Davao Occidental"],
    ["Davao Oriental", "Davao Oriental"],
    ["Davao de Oro", "Compostela Valley"],
    ["Davao del Norte", "Davao del Norte"],
    ["Davao del Sur", "Davao del Sur"],
    ["Dinagat Islands", "Dinagat Islands"],
    ["Eastern Samar", "Eastern Samar"],
    ["Guimaras", "Guimaras"],
    ["Ifugao", "Ifugao"],
    ["Ilocos Norte", "Ilocos Norte"],
    ["Ilocos Sur", "Ilocos Sur"],
    ["Iloilo", "Iloilo"],
    ["Isabela", "Isabela"],
    ["Kalinga", "Kalinga"],
    ["La Union", "La Union"],
    ["Laguna", "Laguna"],
    ["Lanao del Norte", "Lanao del Norte"],
    ["Lanao del Sur", "Lanao del Sur"],
    ["Leyte", "Leyte"],
    ["Maguindanao", "Maguindanao"],
    ["Marinduque", "Marinduque"],
    ["Masbate", "Masbate"],
    ["Metro Manila", "Metro Manila"],
    ["Misamis Occidental", "Misamis Occidental"],
    ["Misamis Oriental", "Misamis Oriental"],
    ["Mountain Province", "Mountain"],
    ["Negros Occidental", "Negros Occidental"],
    ["Negros Oriental", "Negros Oriental"],
    ["Northern Samar", "Northern Samar"],
    ["Nueva Ecija", "Nueva Ecija"],
    ["Nueva Vizcaya", "Nueva Vizcaya"],
    ["Occidental Mindoro", "Occidental Mindoro"],
    ["Oriental Mindoro", "Oriental Mindoro"],
    ["Palawan", "Palawan"],
    ["Pampanga", "Pampanga"],
    ["Pangasinan", "Pangasinan"],
    ["Quezon", "Quezon"],
    ["Quirino", "Quirino"],
    ["Rizal", "Rizal"],
    ["Romblon", "Romblon"],
    ["Samar", "Samar"],
    ["Sarangani", "Sarangani"],
    ["Siquijor", "Siquijor"],
    ["Sorsogon", "Sorsogon"],
    ["South Cotabato", "South Cotabato"],
    ["Southern Leyte", "Southern Leyte"],
    ["Sultan Kudarat", "Sultan Kudarat"],
    ["Sulu", "Sulu"],
    ["Surigao del Norte", "Surigao del Norte"],
    ["Surigao del Sur", "Surigao del Sur"],
    ["Tarlac", "Tarlac"],
    ["Tawi-Tawi", "Tawi-Tawi"],
    ["Zambales", "Zambales"],
    ["Zamboanga Sibugay", "Zamboanga Sibugay"],
    ["Zamboanga del Norte", "Zamboanga del Norte"],
    ["Zamboanga del Sur", "Zamboanga del Sur"],
  ],
  Portugal: [
    ["Aveiro", "Aveiro"],
    ["Açores", "Azores"],
    ["Beja", "Beja"],
    ["Braga", "Braga"],
    ["Bragança", "Bragança"],
    ["Castelo Branco", "Castelo Branco"],
    ["Coimbra", "Coimbra"],
    ["Faro", "Faro"],
    ["Guarda", "Guarda"],
    ["Leiria", "Leiria"],
    ["Lisboa", "Lisbon"],
    ["Madeira", "Madeira"],
    ["Portalegre", "Portalegre"],
    ["Porto", "Porto"],
    ["Santarém", "Santarém"],
    ["Setúbal", "Setúbal"],
    ["Viana do Castelo", "Viana do Castelo"],
    ["Vila Real", "Vila Real"],
    ["Viseu", "Viseu"],
    ["Évora", "Évora"],
  ],
  Romania: [
    ["Alba", "Alba"],
    ["Arad", "Arad"],
    ["Argeș", "Argeș"],
    ["Bacău", "Bacău"],
    ["Bihor", "Bihor"],
    ["Bistrița-Năsăud", "Bistriţa-Năsăud"],
    ["Botoșani", "Botoşani"],
    ["Brașov", "Braşov"],
    ["Brăila", "Brăila"],
    ["București", "Bucharest"],
    ["Buzău", "Buzău"],
    ["Caraș-Severin", "Caraș-Severin"],
    ["Cluj", "Cluj"],
    ["Constanța", "Constanța"],
    ["Covasna", "Covasna"],
    ["Călărași", "Călărași"],
    ["Dolj", "Dolj"],
    ["Dâmbovița", "Dâmbovița"],
    ["Galați", "Galați"],
    ["Giurgiu", "Giurgiu"],
    ["Gorj", "Gorj"],
    ["Harghita", "Harghita"],
    ["Hunedoara", "Hunedoara"],
    ["Ialomița", "Ialomița"],
    ["Iași", "Iași"],
    ["Ilfov", "Ilfov"],
    ["Maramureș", "Maramureş"],
    ["Mehedinți", "Mehedinți"],
    ["Mureș", "Mureş"],
    ["Neamț", "Neamţ"],
    ["Olt", "Olt"],
    ["Prahova", "Prahova"],
    ["Satu Mare", "Satu Mare"],
    ["Sibiu", "Sibiu"],
    ["Suceava", "Suceava"],
    ["Sălaj", "Sălaj"],
    ["Teleorman", "Teleorman"],
    ["Timiș", "Timiș"],
    ["Tulcea", "Tulcea"],
    ["Vaslui", "Vaslui"],
    ["Vrancea", "Vrancea"],
    ["Vâlcea", "Vâlcea"],
  ],
  Russia: [
    ["Altai Krai", "Altai Krai"],
    ["Altai Republic", "Altai"],
    ["Amur Oblast", "Amur"],
    ["Arkhangelsk Oblast", "Arkhangelsk"],
    ["Astrakhan Oblast", "Astrakhan"],
    ["Belgorod Oblast", "Belgorod"],
    ["Bryansk Oblast", "Bryansk"],
    ["Chechen Republic", "Chechen"],
    ["Chelyabinsk Oblast", "Chelyabinsk"],
    ["Chukotka Autonomous Okrug", "Chukotka Okrug"],
    ["Chuvash Republic", "Chuvash"],
    ["Irkutsk Oblast", "Irkutsk"],
    ["Ivanovo Oblast", "Ivanovo"],
    ["Jewish Autonomous Oblast", "Jewish"],
    ["Kabardino-Balkarian Republic", "Kabardino-Balkar"],
    ["Kaliningrad Oblast", "Kaliningrad"],
    ["Kaluga Oblast", "Kaluga"],
    ["Kamchatka Krai", "Kamchatka Krai"],
    ["Karachay–Cherkess Republic", "Karachay-Cherkess"],
    ["Kemerovo Oblast", "Kemerovo"],
    ["Khabarovsk Krai", "Khabarovsk Krai"],
    ["Khanty-Mansi Autonomous Okrug", "Khanty-Mansi"],
    ["Kirov Oblast", "Kirov"],
    ["Komi Republic", "Komi"],
    ["Kostroma Oblast", "Kostroma"],
    ["Krasnodar Krai", "Krasnodar Krai"],
    ["Krasnoyarsk Krai", "Krasnoyarsk Krai"],
    ["Kurgan Oblast", "Kurgan"],
    ["Kursk Oblast", "Kursk"],
    ["Leningrad Oblast", "Leningrad"],
    ["Lipetsk Oblast", "Lipetsk"],
    ["Magadan Oblast", "Magadan"],
    ["Mari El Republic", "Mari El"],
    ["Moscow", "Moscow"],
    ["Moscow Oblast", "Moscow Province"],
    ["Murmansk Oblast", "Murmansk"],
    ["Nizhny Novgorod Oblast", "Nizhny Novgorod"],
    ["Novgorod Oblast", "Novgorod"],
    ["Novosibirsk Oblast", "Novosibirsk"],
    ["Omsk Oblast", "Omsk"],
    ["Orenburg Oblast", "Orenburg"],
    ["Oryol Oblast", "Oryol"],
    ["Penza Oblast", "Penza"],
    ["Perm Krai", "Perm Krai"],
    ["Primorsky Krai", "Primorsky Krai"],
    ["Pskov Oblast", "Pskov"],
    ["Republic of Adygeya", "Adygea"],
    ["Republic of Bashkortostan", "Bashkortostan"],
    ["Republic of Buryatia", "Buryat"],
    ["Republic of Dagestan", "Dagestan"],
    ["Republic of Ingushetia", "Ingushetia"],
    ["Republic of Kalmykia", "Kalmykia"],
    ["Republic of Karelia", "Karelia"],
    ["Republic of Khakassia", "Khakassia"],
    ["Republic of Mordovia", "Mordovia"],
    ["Republic of North Ossetia–Alania", "North Ossetia-Alania"],
    ["Republic of Tatarstan", "Tatarstan"],
    ["Rostov Oblast", "Rostov"],
    ["Ryazan Oblast", "Ryazan"],
    ["Saint Petersburg", "Saint Petersburg"],
    ["Sakha Republic (Yakutia)", "Sakha"],
    ["Sakhalin Oblast", "Sakhalin"],
    ["Samara Oblast", "Samara"],
    ["Saratov Oblast", "Saratov"],
    ["Smolensk Oblast", "Smolensk"],
    ["Stavropol Krai", "Stavropol Krai"],
    ["Sverdlovsk Oblast", "Sverdlovsk"],
    ["Tambov Oblast", "Tambov"],
    ["Tomsk Oblast", "Tomsk"],
    ["Tula Oblast", "Tula"],
    ["Tver Oblast", "Tver"],
    ["Tyumen Oblast", "Tyumen"],
    ["Tyva Republic", "Tuva"],
    ["Udmurtia", "Udmurt"],
    ["Ulyanovsk Oblast", "Ulyanovsk"],
    ["Vladimir Oblast", "Vladimir"],
    ["Volgograd Oblast", "Volgograd"],
    ["Vologda Oblast", "Vologda"],
    ["Voronezh Oblast", "Voronezh"],
    ["Yamalo-Nenets Autonomous Okrug", "Yamalo-Nenets Okrug"],
    ["Yaroslavl Oblast", "Yaroslavl"],
    ["Zabaykalsky Krai", "Zabaykalsky Krai"],
  ],
  "South Africa": [
    ["Eastern Cape", "Eastern Cape"],
    ["Free State", "Free State"],
    ["Gauteng", "Gauteng"],
    ["KwaZulu-Natal", "KwaZulu-Natal"],
    ["Limpopo", "Limpopo"],
    ["Mpumalanga", "Mpumalanga"],
    ["North West", "North West"],
    ["Northern Cape", "Northern Cape"],
    ["Western Cape", "Western Cape"],
  ],
  "South Korea": [
    ["Busan", "Busan"],
    ["Chungbuk", "North Chungcheong"],
    ["Chungnam", "South Chungcheong"],
    ["Daegu", "Daegu"],
    ["Daejeon", "Daejeon"],
    ["Gangwon", "Gangwon"],
    ["Gwangju", "Gwangju City"],
    ["Gyeongbuk", "North Gyeongsang"],
    ["Gyeonggi", "Gyeonggi"],
    ["Gyeongnam", "South Gyeongsang"],
    ["Incheon", "Incheon"],
    ["Jeju", "Jeju"],
    ["Jeonbuk", "North Jeolla"],
    ["Jeonnam", "South Jeolla"],
    ["Sejong", "Sejong"],
    ["Seoul", "Seoul"],
    ["Ulsan", "Ulsan"],
  ],
  Spain: [
    ["A Coruña", "A Coruña"],
    ["Albacete", "Albacete"],
    ["Alicante", "Alicante"],
    ["Almería", "Almería"],
    ["Asturias", "Asturias Province"],
    ["Badajoz", "Badajoz"],
    ["Balears", "Balears Province"],
    ["Barcelona", "Barcelona"],
    ["Burgos", "Burgos"],
    ["Cantabria", "Cantabria Province"],
    ["Castellón", "Castellón"],
    ["Ceuta", "Ceuta"],
    ["Ciudad Real", "Ciudad Real"],
    ["Cuenca", "Cuenca"],
    ["Cáceres", "Cáceres"],
    ["Cádiz", "Cádiz"],
    ["Córdoba", "Córdoba"],
    ["Girona", "Girona"],
    ["Granada", "Granada"],
    ["Guadalajara", "Guadalajara"],
    ["Guipúzcoa", "Gipuzkoa"],
    ["Huelva", "Huelva"],
    ["Huesca", "Huesca"],
    ["Jaén", "Jaén"],
    ["La Rioja", "La Rioja Province"],
    ["Las Palmas", "Las Palmas"],
    ["León", "León"],
    ["Lleida", "Lleida"],
    ["Lugo", "Lugo"],
    ["Madrid", "Madrid Province"],
    ["Melilla", "Melilla"],
    ["Murcia", "Murcia"],
    ["Málaga", "Málaga"],
    ["Navarra", "Navarra"],
    ["Ourense", "Ourense"],
    ["Palencia", "Palencia"],
    ["Pontevedra", "Pontevedra"],
    ["Salamanca", "Salamanca"],
    ["Santa Cruz de Tenerife", "Santa Cruz de Tenerife"],
    ["Segovia", "Segovia"],
    ["Sevilla", "Seville"],
    ["Soria", "Soria"],
    ["Tarragona", "Tarragona"],
    ["Teruel", "Teruel"],
    ["Toledo", "Toledo"],
    ["Valencia", "Valencia"],
    ["Valladolid", "Valladolid"],
    ["Vizcaya", "Biscay"],
    ["Zamora", "Zamora"],
    ["Zaragoza", "Zaragoza"],
    ["Álava", "Álava"],
    ["Ávila", "Ávila"],
  ],
  Thailand: [
    ["Amnat Charoen", "Amnat Charoen"],
    ["Ang Thong", "Ang Thong"],
    ["Bangkok", "Bangkok"],
    ["Bueng Kan", "Bueng Kan"],
    ["Buriram", "Buri Ram"],
    ["Chachoengsao", "Chachoengsao"],
    ["Chai Nat", "Chai Nat"],
    ["Chaiyaphum", "Chaiyaphum"],
    ["Chanthaburi", "Chanthaburi"],
    ["Chiang Mai", "Chiang Mai"],
    ["Chiang Rai", "Chiang Rai"],
    ["Chon Buri", "Chon Buri"],
    ["Chumphon", "Chumphon"],
    ["Kalasin", "Kalasin"],
    ["Kamphaeng Phet", "Kamphaeng Phet"],
    ["Kanchanaburi", "Kanchanaburi"],
    ["Khon Kaen", "Khon Kaen"],
    ["Krabi", "Krabi"],
    ["Lampang", "Lampang"],
    ["Lamphun", "Lamphun"],
    ["Loei", "Loei"],
    ["Lopburi", "Lopburi"],
    ["Mae Hong Son", "Mae Hong Son"],
    ["Maha Sarakham", "Maha Sarakham"],
    ["Mukdahan", "Mukdahan"],
    ["Nakhon Nayok", "Nakhon Nayok"],
    ["Nakhon Pathom", "Nakhon Pathom"],
    ["Nakhon Phanom", "Nakhon Phanom"],
    ["Nakhon Ratchasima", "Nakhon Ratchasima"],
    ["Nakhon Sawan", "Nakhon Sawan"],
    ["Nakhon Si Thammarat", "Nakhon Si Thammarat"],
    ["Nan", "Nan"],
    ["Narathiwat", "Narathiwat"],
    ["Nong Bua Lam Phu", "Nong Bua Lam Phu"],
    ["Nong Khai", "Nong Khai"],
    ["Nonthaburi", "Nonthaburi"],
    ["Pathum Thani", "Pathum Thani"],
    ["Pattani", "Pattani"],
    ["Pattaya", "Pattaya"],
    ["Phangnga", "Phang Nga"],
    ["Phatthalung", "Phatthalung"],
    ["Phayao", "Phayao"],
    ["Phetchabun", "Phetchabun"],
    ["Phetchaburi", "Phetchaburi"],
    ["Phichit", "Phichit"],
    ["Phitsanulok", "Phitsanulok"],
    ["Phra Nakhon Si Ayutthaya", "Phra Nakhon Si Ayutthaya"],
    ["Phrae", "Phrae"],
    ["Phuket", "Phuket"],
    ["Prachin Buri", "Prachin Buri"],
    ["Prachuap Khiri Khan", "Prachuap Khiri Khan"],
    ["Ranong", "Ranong"],
    ["Ratchaburi", "Ratchaburi"],
    ["Rayong", "Rayong"],
    ["Roi Et", "Roi Et"],
    ["Sa Kaeo", "Sa Kaeo"],
    ["Sakon Nakhon", "Sakon Nakhon"],
    ["Samut Prakan", "Samut Prakan"],
    ["Samut Sakhon", "Samut Sakhon"],
    ["Samut Songkhram", "Samut Songkhram"],
    ["Saraburi", "Saraburi"],
    ["Satun", "Satun"],
    ["Sing Buri", "Sing Buri"],
    ["Sisaket", "Si Sa Ket"],
    ["Songkhla", "Songkhla"],
    ["Sukhothai", "Sukhothai"],
    ["Suphan Buri", "Suphanburi"],
    ["Surat Thani", "Surat Thani"],
    ["Surin", "Surin"],
    ["Tak", "Tak"],
    ["Trang", "Trang"],
    ["Trat", "Trat"],
    ["Ubon Ratchathani", "Ubon Ratchathani"],
    ["Udon Thani", "Udon Thani"],
    ["Uthai Thani", "Uthai Thani"],
    ["Uttaradit", "Uttaradit"],
    ["Yala", "Yala"],
    ["Yasothon", "Yasothon"],
  ],
  "United Arab Emirates": [
    ["Abu Dhabi", "Abu Dhabi"],
    ["Ajman", "Ajman"],
    ["Dubai", "Dubai"],
    ["Fujairah", "Fujairah"],
    ["Ras al-Khaimah", "Ras al-Khaimah"],
    ["Sharjah", "Sharjah"],
    ["Umm al-Quwain", "Umm al-Quwain"],
  ],
  "United Kingdom": [
    ["British Forces", "British Forces"],
    ["England", "England"],
    ["Northern Ireland", "Northern Ireland"],
    ["Scotland", "Scotland"],
    ["Wales", "Wales"],
  ],
  "United States": [
    ["Alabama", "Alabama"],
    ["Alaska", "Alaska"],
    ["American Samoa", "American Samoa"],
    ["Arizona", "Arizona"],
    ["Arkansas", "Arkansas"],
    ["Armed Forces Americas", "Armed Forces Americas"],
    ["Armed Forces Europe", "Armed Forces Europe"],
    ["Armed Forces Pacific", "Armed Forces Pacific"],
    ["California", "California"],
    ["Colorado", "Colorado"],
    ["Connecticut", "Connecticut"],
    ["Delaware", "Delaware"],
    ["District of Columbia", "Washington DC"],
    ["Federated States of Micronesia", "Micronesia"],
    ["Florida", "Florida"],
    ["Georgia", "Georgia"],
    ["Guam", "Guam"],
    ["Hawaii", "Hawaii"],
    ["Idaho", "Idaho"],
    ["Illinois", "Illinois"],
    ["Indiana", "Indiana"],
    ["Iowa", "Iowa"],
    ["Kansas", "Kansas"],
    ["Kentucky", "Kentucky"],
    ["Louisiana", "Louisiana"],
    ["Maine", "Maine"],
    ["Marshall Islands", "Marshall Islands"],
    ["Maryland", "Maryland"],
    ["Massachusetts", "Massachusetts"],
    ["Michigan", "Michigan"],
    ["Minnesota", "Minnesota"],
    ["Mississippi", "Mississippi"],
    ["Missouri", "Missouri"],
    ["Montana", "Montana"],
    ["Nebraska", "Nebraska"],
    ["Nevada", "Nevada"],
    ["New Hampshire", "New Hampshire"],
    ["New Jersey", "New Jersey"],
    ["New Mexico", "New Mexico"],
    ["New York", "New York"],
    ["North Carolina", "North Carolina"],
    ["North Dakota", "North Dakota"],
    ["Northern Mariana Islands", "Northern Mariana Islands"],
    ["Ohio", "Ohio"],
    ["Oklahoma", "Oklahoma"],
    ["Oregon", "Oregon"],
    ["Palau", "Palau"],
    ["Pennsylvania", "Pennsylvania"],
    ["Puerto Rico", "Puerto Rico"],
    ["Rhode Island", "Rhode Island"],
    ["South Carolina", "South Carolina"],
    ["South Dakota", "South Dakota"],
    ["Tennessee", "Tennessee"],
    ["Texas", "Texas"],
    ["Utah", "Utah"],
    ["Vermont", "Vermont"],
    ["Virgin Islands", "U.S. Virgin Islands"],
    ["Virginia", "Virginia"],
    ["Washington", "Washington"],
    ["West Virginia", "West Virginia"],
    ["Wisconsin", "Wisconsin"],
    ["Wyoming", "Wyoming"],
  ],
}

export default countries
