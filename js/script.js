// ============================================
// SISTEMA DE CITAS MÉDICAS - CÓDIGO COMPLETO
// ============================================

// ========== 1. DATOS GEOGRÁFICOS COMPLETOS DE MÉXICO ==========
// objeto mexicoData contiene todos los estados, municipios y localidades de México
// Estructura anidada: { "Estado": { "Municipio": ["localidad1", "localidad2"] } }
// Se usa para cargar dinámicamente los selects de ciudad/población según el estado
const mexicoData = {
    "Aguascalientes": {
        municipios: {
            "Aguascalientes": ["Centro", "Norte", "Sur", "Oriente", "Poniente", "Jardines de la Concepción", "Buenavista", "Villa Magna", "Los Vergeles", "Pirámides", "Rodolfo Landeros", "Solidaridad", "Las Flores", "La Estación", "El Tapanco"],
            "Asientos": ["Asientos", "Ciencia Grande", "Pilotos", "Tlalican", "Lázaro Cárdenas", "El Refugio", "San Antonio", "La Fe", "La Gloria", "Clavellinas"],
            "Calvillo": ["Calvillo", "El Salitre", "La Labor", "Malpaso", "El Sauz", "Los Adobes", "Barranca del Muerto", "Chiquihuitero", "Colomos", "Tepetates"],
            "Cosío": ["Cosío", "La Punta", "El Refugio", "Zacatequillas", "La Concepción", "San José del Refugio", "El Soyate", "El Salero", "Los García"],
            "Jesús María": ["Jesús María", "General Ignacio Zaragoza", "Valladolid", "El Llano", "Corral de Barrancos", "Los Arquitos", "Poza Honda", "Paso Blanco", "El Chichimeco", "Los Ramírez"],
            "Pabellón de Arteaga": ["Pabellón de Arteaga", "Pabellón de Hidalgo", "El Copetillo", "San Luis de Letras", "El Rosario", "Santa Elena", "Las ánimas", "El Saúz"],
            "Rincón de Romos": ["Rincón de Romos", "Pabellón de Hidalgo", "El Bajío", "San Antonio", "Las Cuevas", "El Valle", "Peñuelas", "Caldera", "Jesús Táran"],
            "San José de Gracia": ["San José de Gracia", "La Congoja", "El Tule", "El Jocoqui", "Las Tablas", "El Tarasco", "La Florida", "El Pinal", "Las Canoas"],
            "Tepezalá": ["Tepezalá", "Carboneras", "San Antonio", "El Chayote", "La Victoria", "Mesillas", "Milpillas", "Jaltomate", "El Ocote"]
        }
    },
    "Baja California": {
        municipios: {
            "Ensenada": ["Ensenada", "Maneadero", "El Sauzal", "San Quintín", "Valle de Guadalupe", "La Misión", "Punta Banda", "Real del Castillo", "Ojos Negros", "San Vicente", "Villa de Jesús", "Erendira", "San Isidro", "Uruapan", "La Bufadora", "Punta Colonet"],
            "Mexicali": ["Mexicali", "San Felipe", "Santa Isabel", "Ciudad Morelos", "Ejido Sinaloa", "Puebla", "Progreso", "Delta", "González Ortega", "Campo Mosqueda", "Coahuila", "Nuevo León", "Tabasco", "Tamaulipas", "Veracruz 1", "Veracruz 2"],
            "Playas de Rosarito": ["Rosarito", "Primo Tapia", "Puerto Nuevo", "Misión de San Miguel", "Santa Anita", "El Descanso", "El Morro", "Popotla", "La Paloma", "Lomas de Rosarito"],
            "San Quintín": ["San Quintín", "El Rosario", "Camilo", "Santa María", "Lázaro Cárdenas", "San Simón", "Colonet", "Chapala", "El Pedregal", "Cristo Rey", "La Misión Vieja", "Jaramillo"],
            "Tecate": ["Tecate", "Loma Alta", "San Valentín", "El Hongo", "La Rumorosa", "Nueva Colonia Híndú", "La Cuchilla", "El Álamo", "Santa Anita", "Potrero", "Mi Ranchito", "El Florido"],
            "Tijuana": ["Tijuana", "Playas", "Otay", "La Mesa", "San Antonio de los Buenos", "El Refugio", "Villa del Prado", "La Presa", "Cerro Colorado", "Libertad", "San Luis", "Florido", "El Rubí", "Insurgentes", "Sánchez Taboada"]
        }
    },
    "Baja California Sur": {
        municipios: {
            "Comondú": ["Ciudad Constitución", "Puerto San Carlos", "Loreto", "San Juanico", "La Purísima", "San José de Comondú", "San Miguel de Comondú", "Los Mártires", "Boca de la Sierra", "San Javier", "Tihueca"],
            "La Paz": ["La Paz", "Todos Santos", "El Centenario", "Los Planes", "Pichilingue", "Chametla", "San Pedro", "El Mezquitito", "El Pescadero", "Cerro Calavera", "San Evaristo", "San Antonio", "El Rosario", "Las Pocitas"],
            "Loreto": ["Loreto", "Puerto Escondido", "San Javier", "Timbabichi", "La Ramona", "Juncalito", "Agua Verde", "El Horno", "Ensenada Blanca", "Ligui", "San Nicolás", "Santa Lucia"],
            "Los Cabos": ["Cabo San Lucas", "San José del Cabo", "Las Veredas", "El Tezal", "Chileno", "Santa Rosa", "La Ribera", "Santiago", "Miraflores", "Buenavista", "San Bartolo", "Todos Santos", "La Trinidad", "La Matanza"],
            "Mulegé": ["Santa Rosalía", "Mulegé", "Guerrero Negro", "Bahía Tortugas", "San Ignacio", "San Bruno", "Punta Prieta", "Los Angeles", "El Arco", "Asunción", "San Francisco de la Sierra", "Villa Alberto Alvarado"]
        }
    },
    "Campeche": {
        municipios: {
            "Calakmul": ["Xpujil", "Constituyente", "Belén", "Nuevo Conhuas", "La Mancolona", "Dos Lagunas", "Veinte de Noviembre", "Santa Cruz", "Once de Mayo", "Candidato Aguilar"],
            "Calkiní": ["Calkiní", "Becal", "Dzitbalché", "Santa Cruz", "Nunkiní", "Bacabchén", "Chilam Balam", "San Antonio Sahcabchén", "San Luis", "Yaxché"],
            "Campeche": ["San Francisco de Campeche", "Lerma", "Champotón", "Hampolol", "Sihochac", "Samahil", "Imí", "San Antonio Cárcenas", "Chiná", "Tixmucuy", "Maya Tecnú", "Xcalak"],
            "Candelaria": ["Candelaria", "El Naranjo", "Chekubul", "San Romero", "José María Morelos", "Arroyo San Francisco", "Nueva Rosita", "Valentín Gómez Farías", "Miguel Alemán", "Peyón"],
            "Carmen": ["Ciudad del Carmen", "Isla Aguada", "Atasta", "Sabancuy", "Zaragoza", "Punta Xen", "Monclova", "El Cuyo", "Licenciado Adolfo López Mateos", "San Manuel", "Playacar"],
            "Champotón": ["Champotón", "Maya Tecnú", "Xculoc", "Pich", "El Refugio", "Tikínmul", "Chenkan", "San José de la Montaña", "Santa Cruz", "Chentkún"],
            "Hecelchakán": ["Hecelchakán", "Pocboc", "San Antonio Sahcabchén", "Santa Cruz", "Tikinmul", "Chencoy", "Nohalal", "San Carlos", "Pacaycéh", "San Martín"],
            "Hopelchén": ["Hopelchén", "Chencoh", "Sahcabchén", "Xmabén", "Yaxché", "Rancho Viejo", "Cibacab", "Santa Elena", "Tucupat", "Xmabén", "Unión del Sur"],
            "Palizada": ["Palizada", "Buenavista", "La Unión", "San Francisco", "Arroyo Negro", "Laguna de Terminos", "Chiconco", "San Joaquín", "Santa Rosalía", "Nazareno"],
            "Tenabo": ["Tenabo", "Tinúm", "Hampolol", "San Román", "Santa Cruz", "San Bernabé", "Pocboc", "Nacanche", "La Victoria", "San Luis"]
        }
    },
    "Chiapas": {
        municipios: {
            "San Cristóbal de las Casas": ["Centro", "San Felipe", "Ojo de Agua", "Cuxtitali", "Barrio del Cerrillo", "Santa Lucía", "Mexicanos", "San Diego", "Los Llanos", "Cuxtitali", "Cerrito", "Yalmuz", "Peje de Oro"],
            "Tuxtla Gutiérrez": ["Centro", "Terán", "La Pochota", "La Primavera", "Las Palmas", "Patria Nueva", "Paso Hondo", "San Agustín", "San Fernando", "Joyyo Mayu", "El Jobo", "Drenaje", "La Loma"],
            "Tapachula": ["Centro", "Buenos Aires", "Nuevo Centro", "Los Palacios", "Las Palmas", "Zacualpa", "Alvarado", "Santa Catarina", "San Rafael", "San Juan", "El Paraíso", "La Nueva Esperanza"],
            "Comitlán": ["Centro", "La Pila", "San José", "El Calvario", "San Francisco", "El Rincón", "San José de la Montaña", "Zula", "Pacayal", "Colombia", "Villahermosa"],
            "Palenque": ["Palenque", "Bajadas Grandes", "Agua Blanca", "Chan Kai", "Nueva Esperanza", "El Capúlín", "Pachán", "Catazajá", "San Alejandro", "San Miguel"],
            "Ocosingo": ["Ocosingo", "Taniperla", "San Cristóbal", "Patate", "Bahía California", "Tucupate", "El Rosario", "Chiquival", "El León", "San Pedro"],
            "Huixtla": ["Huixtla", "Francisco I Madero", "Cantón Rincón", "Los Palacios", "La Libertad", "El Porvenir", "Nuevo México", "Santa Anita", "El Palmar", "Las Brisas"]
        }
    },
    "Chihuahua": {
        municipios: {
            "Juárez": ["Centro", "Anapra", "San Felipe", "Riveras del Bravo", "Parajes del Sur", "Misión de los Lagos", "Las Torres", "Puerta de Hierro", "Haciendas del Valle", "Cerrada del Rey", "Los Nogales", "Insurgentes", "Los Arcos", "Las Misiones", "Campestre"],
            "Chihuahua": ["Centro", "Sain Alto", "Dolores", "San Felipe", "Reforma", "Panorámico", "Tecnológico", "Ladrilleras", "Ávalos", "La Lima", "Quinta Santa Fe", "Villa del Sol", "Chihuahua 2000", "Los Nogales", "Vista del Norte"],
            "Cuauhtémoc": ["Centro", "Zootecnia", "La Trinidad", "Anáhuac", "Manuel Gómez Morín", "Ciudad Cuauhtémoc", "San Antonio de los Arenales", "Santa Rita", "Álvaro Obregón", "El Pedregal", "Las Cuadras", "San José", "Las Fuentes"],
            "Parral": ["Centro", "La Cruz", "San José", "Jardines", "Misiones", "Palmillas", "Las Gardenias", "Ampliación La Cruz", "Magallanes", "Privada del Rey", "Santo Domingo", "La Noria"],
            "Delicias": ["Centro", "Las Flores", "Bugambilias", "Las Américas", "Los Nogales", "San Ángel", "Valle Dorado", "San Juan", "Las Moras", "Los Naranjos", "Puerta de Coyame", "Los Álamos"],
            "Nuevo Casas Grandes": ["Centro", "San Antonio", "Las Palmas", "El Parque", "Los Ángeles", "La Cantera", "Los Nogales", "Colinas de Oriente", "Valle Escondido", "Los Sauces", "El Molino", "La Hacienda"],
            "Camargo": ["Centro", "San Felipe", "Alto Grande", "San Pedro", "La Paz", "Los Ángeles", "San Luis", "Villa Hermosa", "San Miguel", "San Pablo", "Guadalupe", "Santa Elena"],
            "Jiménez": ["Centro", "Lázaro Cárdenas", "Abraham González", "El Porvenir", "San Juan", "Santa Clara", "Los Chávez", "La Esperanza", "El Mirador", "Las Maravillas"],
            "Bocoyna": ["Creel", "San Ignacio", "Piedras Verdes", "Sisoguichi", "Huizarochi", "San Juanito", "Cieneguita", "El Yeso", "Panorama", "Aquiles Serdán"],
            "Batopilas": ["Batopilas", "Satevó", "San Ignacio", "Polanco", "Palo Colorado", "Guadalupe", "San Simón", "Los Llanos", "Santa Rita", "La Bufa"]
        }
    },
    "Ciudad de México": {
        municipios: {
            "Álvaro Obregón": ["Centro", "San Ángel", "Tlacopac", "Ángel", "Olivar del Conde", "Colinas del Sur", "Florida", "Campestre", "Santa Lucía", "Ajusco", "Piloto", "El Toro", "Santa Rosa", "Lomas de los ángeles", "La Joya"],
            "Azcapotzalco": ["Centro", "Reynosa Tamaulipas", "Clavería", "Monte Alto", "San Pedro Xalostoc", "Progreso", "San Salvador", "San Marcos", "Los Reyes", "Santa Bárbara", "Tepantongo"],
            "Benito Juárez": ["Centro", "Portales", "Del Valle", "Narvarte", "Mixcoac", "San Juan", "Insurgentes", "Actipan", "Noche Buena", "Xoco", "Las Águilas", "General Anaya"],
            "Coyoacán": ["Centro", "Villa Coyoacán", "Churubusco", "Pedregal", "San Francisco", "San Mateo", "Santa Úrsula", "Xotepingo", "Los Cedros", "Espartaco", "Adolfo Ruiz Cortines"],
            "Cuajimalpa": ["Centro", "San Pedro", "La Venta", "Manzanito", "Contadero", "Tepetongo", "Amado Nervo", "San Lorenzo", "El Yaqui", "Palo Alto", "Jesús del Monte"],
            "Cuauhtémoc": ["Centro", "Roma", "Condesa", "Doctores", "Tabacalera", "Santa María", "Buenavista", "Guerrero", "Morelos", "San Rafael", "Obrera", "Algarín", "Asturias", "Ampliación Asturias"],
            "Gustavo A. Madero": ["Centro", "Lindavista", "Ticomán", "La Villa", "Cruz", "Aragón", "San Juan de Aragón", "Santa Isabel", "Tepalcates", "Martín Carrera", "Progreso", "Gertrudis Sánchez", "Magdalena"],
            "Iztacalco": ["Centro", "Agrícola Oriental", "Zapotla", "Santa Anita", "San Pedro", "Reforma", "Tepeaca", "Militar Marte", "Juventino Rosas", "Carlos Zapata", "Pantalanes"],
            "Iztapalapa": ["Centro", "Santa Cruz", "Culhuacán", "Escuadrón", "Prado", "San Andrés", "Meyehualco", "Lomas de Zaragoza", "Ermita Zaragoza", "Santa María Aztahuacán", "San Lorenzo Tezonco", "Santa Catarina", "Paraje San Juan"],
            "Magdalena Contreras": ["Centro", "Barranca Seca", "San Bernabé", "Santa Teresa", "Tierra Unida", "La Carbonera", "El Tanque", "Las Águilas", "Tizampampano", "San Francisco"],
            "Miguel Hidalgo": ["Centro", "Polanco", "Lomas", "Bosque", "Granada", "San Juan", "Tacuba", "Popotla", "Anáhuac", "Argentina", "Legaria", "Reforma", "Montecito"],
            "Milpa Alta": ["Centro", "San Pablo", "Tecozautla", "San Francisco", "Villa Milpa Alta", "San Pedro Atocpan", "Santa Ana Tlacotenco", "San Juan Teponaxtla", "San Jerónimo Miacatlan", "La Concepción"],
            "Tlálpan": ["Centro", "San Pedro Mártir", "San Andrés", "Santa Úrsula", "Pedregal", "La Joya", "Fuentes Brotantes", "Lomas de Padierna", "San Miguel Topilejo", "San Bartolomé", "Parres", "El Capulín"],
            "Venustiano Carranza": ["Centro", "Penitenciaría", "Romero Rubio", "Jarochos", "Mercado", "Candelaria", "Zanja", "Morelos", "Valentín Gómez Farías", "Michoacán", "10 de Mayo", "Pénjamo"],
            "Xochimilco": ["Centro", "San Pedro", "San Juan", "Santa Inés", "San Francisco", "El Rosario", "Santa Cruz", "San Cristóbal", "Tulyehualco", "San Lucas", "Tepexpan", "Santiago Tepalcatlalpan"]
        }
    },
    "Coahuila": {
        municipios: {
            "Saltillo": ["Centro", "República", "Los Pinos", "Mirasiervo", "Valle Oriente", "Colinas de San José", "Latino Americano", "Buenavista", "Lomas de Lourdes", "Villa Florida", "San Sebastián", "San Esteban", "Los Olivos"],
            "Torreón": ["Centro", "Alianza", "La Joya", "San Isidro", "Los Ángeles", "Campestre", "Nueva California", "La Rosita", "Villa Jardín", "San Marcos", "Residencial", "Rincón La Mérced"],
            "Monclova": ["Centro", "Primera", "Segunda", "Santiago", "Ciudad Industrial", "Las Américas", "Villa Florida", "Los Encinos", "San Miguel", "Las Palmas", "Infonavit", "Estancias"],
            "Piedras Negras": ["Centro", "Ferroviario", "El Morita", "La Salle", "Burócratas", "Los Olivos", "Santa María", "Bellavista", "Rivera", "Las Torres", "Satelite"],
            "Acuña": ["Centro", "Amistad", "San Luis", "Las Quintas", "Villa Hermosa", "El Pueblo", "Independencia", "Las Torres", "Villa Verde", "Residencial", "Brisas"],
            "Ramos Arizpe": ["Centro", "Los Pinos", "Santa María", "San Miguel", "Las Quintas", "La Joya", "Los Huertos", "Villalta", "San Ángel", "Parque Industrial"]
        }
    },
    "Colima": {
        municipios: {
            "Colima": ["Centro", "San Pablo", "Santa Bárbara", "El Templo", "La Estrella", "El Diezmo", "Las Vivoras", "San Miguel", "El Alpuyque", "El Trapiche", "El Chanal"],
            "Manzanillo": ["Centro", "Santiago", "Salagua", "Valle de las Garzas", "Olas Altas", "Miramar", "Paso del Río", "El Colomo", "Cuyutlán", "Camotlán", "El Naranjo", "Rincón de López"],
            "Tecomán": ["Centro", "Callejones", "San José", "Madrid", "El Real", "Cofradía", "Las Tunas", "El Chical", "Palo Alto", "La Salada", "Campo Cuatro"],
            "Armería": ["Centro", "Augusto Gómez Villanueva", "El Paraíso", "Periquillos", "Laguna de Agua", "Las Hadas", "Canarias", "Cuyutlán", "Bajada de Cuyutlán", "El Colomo"],
            "Villa de Álvarez": ["Centro", "El Trapiche", "San Felipe", "La Virgencita", "El Agostadero", "El Pitillal", "Monte Grande", "Tepames", "Buenos Aires", "El Bordo"],
            "Cuauhtémoc": ["Centro", "Pueblo Viejo", "Alzada", "Santa María", "San Bartolo", "El Calvario", "San José", "El Mixcuate", "La Presa", "Los Reyes"],
            "Minatitlán": ["Minatitlán", "San Antonio", "El Chavarrín", "El Tivisal", "La Lima", "Potrerillos", "La Palmita", "El Tepeguaje", "Los Mezcales", "Plan de la Villa"]
        }
    },
    "Durango": {
        municipios: {
            "Durango": ["Centro", "San Juan", "Villa Florida", "Privada Bonanza", "Los Ángeles", "Nueva Vizcaya", "San José", "Las Palmas", "Industrial", "Cantera", "La Esperanza", "Insurgentes", "Misericordia"],
            "Gómez Palacio": ["Centro", "Los Ángeles", "Las Brisas", "San Eduardo", "El Campanario", "Lagos del Valle", "Jardines de la Cruz", "Villa Alejandra", "Las Misiones", "Las Magnolias", "Renacimiento"],
            "Lerdo": ["Centro", "Las Palmas", "San Antonio", "La Pequeña", "San Isidro", "San Francisco", "San José", "Nazaret", "La Luz", "La Estación"],
            "Santiago Papasquiaro": ["Centro", "El Bajío", "Los Sauces", "La Trinidad", "El Oro", "San Mateo", "San Lorenzo", "Lano Grande", "El Tule", "Potrero de los Medina"],
            "El Salto": ["Centro", "Santa María", "La Ventana", "El Epazote", "El Palmito", "Los Charcos", "La Guajolota", "El Torreón", "El Bayo", "San Juan"],
            "Canatlán": ["Centro", "San José", "El Ojo de Agua", "Los Chavarría", "Santa Rosa", "San Antonio", "El Saltito", "La Presa", "José María Morelos", "Las Mercedes"]
        }
    },
    "Estado de México": {
        municipios: {
            "Toluca": ["Centro", "Morelos", "San Felipe", "Santa Bárbara", "Universidad", "San Marcos", "Delegación", "Isidro Fabela", "San Pablo Autopan", "Vicente Guerrero", "La Joya", "Santiago Miltepec"],
            "Ecatepec": ["Centro", "Jardines de Morelos", "Las Américas", "Tulpetlac", "Santa Clara", "San Cristóbal", "Vista Hermosa", "El Salado", "Héroes", "México", "Río de Luz", "Guadalupe"],
            "Nezahualcóyotl": ["Centro", "Benito Juárez", "Mara Villa", "La Perla", "El Sol", "Agua Azul", "Las Águilas", "Luis Donaldo Colosio", "La Palma", "San Miguel", "Morelos", "Nueva Jerusalén"],
            "Naucalpan": ["Centro", "Satélite", "Lomas Verdes", "Echegaray", "San Esteban", "San Mateo", "San Juan", "Cuatro Vientos", "Tecamachalco", "Progreso", "Colinas de San Mateo"],
            "Tlalnepantla": ["Centro", "La Loma", "San Javier", "Los Reyes", "Industrias", "Santa Mónica", "Valle Ceylán", "Lomas Verdes", "La Presa", "San Andrés", "San Luis Tlatilco"],
            "Cuautitlán Izcalli": ["Centro", "Ex Hacienda", "La Quebrada", "Infonavit Norte", "Las Torres", "San Martín", "San Sebastián", "La Aurora", "El Rosario", "Los Ailes", "San Marcos"],
            "Atizapán de Zaragoza": ["Centro", "Lomas de Atizapán", "México", "Los Clubes", "El Calvario", "Las Alamedas", "El Pedregal", "San Francisco", "San José", "Campestre", "Villa de las Palmas"],
            "Chimalhuacán": ["Centro", "Transportistas", "Hidalgo", "El Molino", "Xochitenco", "La Laguna", "Buenavista", "San Lorenzo", "San Pablo", "Santa Cruz", "El Zapote"],
            "Valle de Chalco": ["Centro", "El Pino", "Santa Cruz", "Providencia", "La Candelaria", "San Miguel", "San José", "La Pasa", "Los Ángeles", "Héroes", "Independencia"],
            "Texcoco": ["Centro", "San Miguel", "Santa Úrsula", "Santo Tomás", "San Luis", "Los Ángeles", "La Concepción", "Santa Clara", "San Pedro", "San Nicolás", "Santiago"]
        }
    },
    "Guanajuato": {
        municipios: {
            "León": ["Centro", "Jardines", "Buenos Aires", "La Luz", "San Miguel", "La Gloria", "El Coecillo", "Obregón", "Lindavista", "Cerro Gordo", "San Juan Bosco", "Lomas de los Olivos", "Los Paraísos"],
            "Irapuato": ["Centro", "San José", "Las Palmas", "La Joya", "Las Haciendas", "Santa Lucía", "Los Olivos", "Misiones", "San Felipe", "Valle Verde", "Los Pinos", "Santa Fe"],
            "Celaya": ["Centro", "Las Flores", "Jardines", "Universidad", "Torres", "La Estación", "El Vergél", "Ribera", "San Juanico", "La Misión", "Villas del Sol", "Puerta Real"],
            "Guanajuato": ["Centro", "Paseo", "Presidencia", "San Javier", "Pastita", "Los Ángeles", "San Luisito", "Los Pinos", "Santa Fe", "El Caracol", "Mineral de Cata", "San Matías"],
            "Silao": ["Centro", "Jardines", "San Francisco", "San Juan", "La Gloria", "San Nicolás", "El Puertecito", "Santa Ana", "San Bernardo", "Loma Bonita"],
            "Salamanca": ["Centro", "San José", "La Luz", "San Juanico", "El Carmen", "Lomas", "Sauz", "El Coecillo", "Los Ángeles", "Valle de Salamanca", "San Pedro"],
            "San Miguel de Allende": ["Centro", "San Antonio", "Guadalupe", "Santa Elena", "San Juan", "La Lejona", "Colonia San Luis", "El Cortijo", "Balcones", "La Esmeralda", "Lomas de San Miguel"],
            "Pénjamo": ["Centro", "El Cerrito", "San José", "La Estación", "Santa Ana", "El Ciprés", "San Isidro", "San Pedro", "Purísima", "San Juan", "El Sauz"]
        }
    },
    "Guerrero": {
        municipios: {
            "Acapulco": ["Centro", "Costera", "Caleta", "Caletilla", "Playas", "El Coloso", "Progreso", "Las Cruces", "Revolución", "Ciudad Renovación", "La Sabana", "San Isidro"],
            "Chilpancingo": ["Centro", "San Francisco", "San Rafael", "San Mateo", "El Cerrito", "Villa Alta", "Lomas de San Juan", "Mártires", "San Martín", "San Isidro", "Santa Cruz", "Los Pinos"],
            "Iguala": ["Centro", "San Francisco", "La Cantera", "Santa Teresa", "San Cayetano", "Lomas de Iguala", "Jardines", "El Capulín", "Las Palmas", "San Miguel", "Los Ángeles"],
            "Zihuatanejo": ["Centro", "La Madera", "La Ropa", "Las Gatas", "Ixtapa", "El Hujal", "El Coacoyul", "San José", "Los Jorges", "La Boquita", "Laguna de Ixtapa"],
            "Zumpango": ["Centro", "San Miguel", "La Guadalupe", "La Soledad", "San Nicolás", "El Tamarindo", "El Naranjo", "El Capire", "San José", "La Estación"],
            "Atoyac": ["Centro", "San Luis", "La Laja", "El Porvenir", "Las Tunas", "San Isidro", "La Barra", "La Unión", "Piedra Blanca"]
        }
    },
    "Hidalgo": {
        municipios: {
            "Pachuca": ["Centro", "Campestre", "San Javier", "Universidad", "Cubitos", "La Raza", "La Reforma", "El Arbolito", "Lomas", "San Antonio", "Venta Prieta", "Nuevo Hidalgo"],
            "Mineral de la Reforma": ["Centro", "Carboneras", "San Camilo", "Julién Villagrán", "El Saucillo", "El Venado", "Los Álamos", "La Colonia", "Santa María", "San Cristóbal"],
            "Tulancingo": ["Centro", "El Paraíso", "San Rafael", "Guadalupe", "Las Flores", "Los Ángeles", "San Isidro", "La Paloma", "San Miguel", "Santiago", "El Pedregal", "Jaltepec"],
            "Huejutla": ["Centro", "San Francisco", "La Ceiba", "Chililico", "Tehuetlán", "Jaltocán", "Tlanchinol", "Santa Catarina", "Cacatepec", "Ahuatempa", "Chalahuiyapa", "El Naranjal"],
            "Tizayuca": ["Centro", "Haciendas", "Ciudad del Sol", "Lomas de Tizayuca", "Villa Magna", "Real de Tizayuca", "San Lorenzo", "San Miguel", "Los Héroes", "El Pedregal"],
            "Actopan": ["Centro", "Boxaxni", "El Chamizal", "Daxtha", "La Estación", "San Jerónimo", "El Huixmi", "San Nicolás", "La Vega", "Baxcajay", "La Loma"]
        }
    },
    "Jalisco": {
        municipios: {
            "Guadalajara": ["Centro", "Americana", "Moderno", "Santa Teresita", "San Miguel de Mezquíanten", "Atemajac", "Miravalle", "La Perla", "El Sauz", "El Mirador", "Los Belenes", "Lomas de la Primavera"],
            "Zapopan": ["Centro", "Andares", "Puerta de Hierro", "Las Fuentes", "El Colli", "Vallarta", "Los Molinos", "Tesistán", "Santa Ana Tepetitlán", "Nuevo México", "La Estancia"],
            "Tlaquepaque": ["Centro", "El Álamo", "San Sebastián", "Santa María", "Jardines", "El Tapatío", "La Calma", "San Pedro", "Loma Dorada", "Las Américas", "Vista Real"],
            "Puerto Vallarta": ["Centro", "Las Glorias", "El Pitillal", "Mismaloya", "Ixtapa", "Las Juntas", "Boca de Tomatlán", "El Tuito", "Cuale", "Las Palmas", "Lomas de Vallarta"],
            "Lagos de Moreno": ["Centro", "La Punta", "San Juan", "Santa María", "San Cristóbal", "Los Ángeles", "San Nicolás", "Paso de la Canoa", "El Tecuán", "Las Pintitas", "La Calera"],
            "Tonalá": ["Centro", "Paseos del Valle", "Lomas de Tonalá", "Las Fuentes", "La Jauja", "Jalisco", "San Francisco", "Santa Paula", "El Ranchito", "Las Pintas", "Tonaltecas"],
            "Autlán": ["Centro", "El Aguacate", "Francisco Villa", "Las Guásimas", "Manzanilla", "El Chante", "La Concepción", "San Miguel", "Santa María", "El Limón", "Chiquihuitlán"],
            "Cihuatlán": ["Centro", "Melaque", "San Patricio", "Barra de Navidad", "El Rebalse", "Cuastecomates", "La Manzquilla", "Las Trojes", "Punta Rosa", "Emiliano Zapata"]
        }
    },
    "Michoacán": {
        municipios: {
            "Morelia": ["Centro", "Chapultepec", "Vasco de Quiroga", "Las Américas", "Lomas de Morelia", "Vista Bella", "La Loma", "Félix Ireta", "Juan Pablo II", "Mariano Jiménez", "El Paraíso"],
            "Uruapan": ["Centro", "La Magdalena", "San Rafael", "Indeco", "Jardines", "Las Flores", "La Quinta", "Sánchez", "El Trébol", "Mango", "Calzada", "Agrícola"],
            "Lázaro Cárdenas": ["Centro", "La Mira", "El Valle", "Guacamayas", "Las Guacamayas", "La Orilla", "Buenavista", "Las Tunas", "El Habillal", "Los Olivos", "Punta Arena"],
            "Zamora": ["Centro", "La Estación", "El Carmen", "San Juan", "La Lagunilla", "Las Palmas", "El Campanario", "Los Nogales", "La Alameda", "San Rafael", "La Soledad"],
            "Zicuacaro": ["Centro", "San Miguel", "La Florida", "La Joya", "El Vergél", "San Juan", "Los Olivos", "El Rosario", "Santa María", "San Antonio", "Loma de Juárez"],
            "Apatzingán": ["Centro", "San Juan", "El Mirador", "La Ceiba", "Los Sabinos", "Santa Bárbara", "El Naranjo", "Capire", "El Capulín", "La Manzanilla", "Agua Fría"],
            "Patzcuaro": ["Centro", "El Cerrito", "Las Letras", "San Miguel", "San Juan", "La Candelaria", "Los Tanques", "La Pacanda", "Janitzio", "Tzumarútaro", "Ihuitzio"],
            "Uruapan": ["Centro", "La Magdalena", "San Rafael", "Indeco", "Jardines", "Las Flores", "La Quinta", "Sánchez", "El Trébol", "Mango", "Calzada", "Agrícola"]
        }
    },
    "Morelos": {
        municipios: {
            "Cuernavaca": ["Centro", "Lomas de Cuernavaca", "Ranch Cortés", "Colonia del Valle", "La Carolina", "Buenavista", "San Miguel", "Tetela", "Santiago", "San Jerónimo", "Ahuatepec", "Santiopa"],
            "Jiutepec": ["Centro", "Tejalpa", "Club de Golf", "Civac", "La Nopalera", "Progreso", "San Gaspar", "Los Héroes", "Calmeca", "La Joya", "Independencia"],
            "Cuautla": ["Centro", "San Diego", "Lomas de Cocoyoc", "Las Balsas", "Santa Bárbara", "El Almeal", "El Zarco", "El Paraíso", "La Estación", "Oaxtepec", "Casasano"],
            "Temixco": ["Centro", "Rubén Jaramillo", "Lomas de Temixco", "Progreso", "La Esperanza", "San Miguel", "San José", "Santa Úrsula", "Plan de Ayala", "Campo Real"],
            "Yautepec": ["Centro", "Oacalco", "Los Limones", "San Isidro", "San Juan", "Tlalnepantla", "Carlos Pacheco", "La Joya", "Los Arcos", "Santa Rosa"],
            "Jojutla": ["Centro", "Tehuixtla", "Los Abetos", "San Pedro", "Tilzapotla", "El Higuerón", "La Calera", "San Nicolás", "Santa María", "La Esperanza"]
        }
    },
    "Nayarit": {
        municipios: {
            "Rosamorada": ["Centro", "El Tamarindo", "Chilapa", "El Conchal", "La Goma", "San Isidro", "El Naranjo", "Majahuixtle", "Tecuitata", "El Carrizo", "Crucero de Rosamorada", "Paso Hondo", "El Resbalón", "El Limón", "San Blasito", "Pajaritos", "El Llano", "La Culebra", "Los Sauces"],
            "Tepic": ["Centro", "San Luis", "Puga", "Tomasach", "Villa Hidalgo", "Lomas", "Mojoneras", "La Cantera", "Pantanal", "Los Fresnos", "Zitania", "Nacional", "Los Sauces", "Magistral", "La Esperanza", "Cristal", "San Cayetano", "El Jocote", "La Fortuna", "El Mololoa"],
            "Bahía de Banderas": ["Centro", "Bucerías", "Valle de Banderas", "Sayulita", "La Cruz de Huanacaxtle", "San Vicente", "Lo de Marcos", "Punta Mita", "La Peñita de Jaltemba", "Jaltemba", "Rincón de Guayabitos", "Los Ayala", "El Monteón", "Corral del Risco", "El Colomo"],
            "Compostela": ["Centro", "Las Varas", "Zacualpan", "La Peñita de Jaltemba", "Guayabitos", "Rincón de Guayabitos", "Aticama", "El Capomo", "Paso de la Reina", "El Carrizal", "Juan Escutia", "Concepción del Valle", "La Laguna", "El Porvenir"],
            "Xalisco": ["Centro", "Pantanal", "El Rincón", "La Esperanza", "La Palmera", "Ojo de Agua", "San Antonio", "El Rosario", "Los Sauces", "San Francisco", "El Carrizal", "Los Otates", "El Maguey", "La Lima"],
            "San Blas": ["Centro", "Jalcocotán", "El Reventón", "Aticama", "Matanchén", "Playa Amor", "Las Islitas", "Pimientillo", "El Cora", "Chacalilla", "El Madrigal±o", "Puerto Viejo", "San Francisco"],
            "Santiago Ixcuintla": ["Centro", "La Presa", "Villa Juárez", "Pozo de Villa", "Tecualilla", "El Tamarindo", "Guamúchil", "San Pedro Lagunillas", "Cutzalapa", "Piloto", "El Capome", "Puerta de la Lima"],
            "Acaponeta": ["Centro", "Vázquez", "Mesa del Nayar", "El Resbalón", "Bajada del Cerro", "El Espinal", "Saycota", "El Limón", "La Cohetera", "San Miguel", "Tecuanilla", "El Caimanero"],
            "Tecuala": ["Centro", "Puerto Vallarta (Nayarit)", "Quimichis", "El Botadero", "La Concha", "Las Cebollas", "Palmar de Cuautla", "El Recodo", "El Limón", "San Felipe", "El Ciruelo"],
            "Ruiz": ["Centro", "El Venado", "Los Sauces", "San José", "El Jarretadero", "Los Pinos", "El Papalote", "Las Pilas", "La Cebadilla", "El Chaco", "El Colomo", "La Lima"],
            "Del Nayar": ["Centro", "Jesús María", "El Nayar", "Zoquipan", "Guadalupe Ocotán", "Santa Teresa", "Las Güeras", "Cuexcontitlán", "San Miguel", "El Rosario", "Los Llanitos", "La Cienega"],
            "Huajicori": ["Centro", "Las Cabras", "Santa Cruz", "Barajas", "Palo Grande", "El Mineral", "El Tecomate", "Las Flores", "El Aguajito", "San Antonio", "El Saucito", "La Cueva"],
            "La Yesca": ["Centro", "Amado Nervo", "Mesa del Nayar", "El Trapiche", "San Marcos", "El Salto", "Las Palmas", "La Cieneguilla", "El Tequezquite", "Los Sauces", "Santa Cruz", "El Tecolote"],
            "Ahuacatlán": ["Centro", "Jala", "Los Alacranes", "El Naranjito", "Zoatlán", "San José", "La Higuera", "El Macuchi", "Los Sandovales", "La Labor", "El Zopilote", "El Carrizo"],
            "Ixtlán del Río": ["Centro", "Camalotita", "Camajoa", "El Buruato", "Teponahuaxco", "San Pedro", "Las Palmas", "El Limón", "La Estancia", "Los Camachos", "El Pedregal"],
            "Jala": ["Centro", "Coapan", "El Cangrejo", "Santa Isabel", "Ahuacatillillo", "El Carrizal", "Los Reyes", "San Pedro", "Mojahuitas", "El Trapiche", "El Naranjo", "La Torre"],
            "San Pedro Lagunillas": ["Centro", "Saycota", "El Llano", "Puerto Vallarta", "Los Gatos", "La Cienega", "Las Juntas", "El Tecomate", "Las Pilas", "El Tequezquite", "Las Palmas", "La Labor"]
        }
    },
    "Nuevo León": {
        municipios: {
            "Monterrey": ["Centro", "San Pedro", "Santa Catarina", "San Nicolás", "Apodaca", "Guadalupe", "Escobedo", "Juárez", "Cumbres", "Mitras", "Contry", "San Jerónimo", "Linda Vista", "Villa California"],
            "Guadalupe": ["Centro", "Pablo González", "Colonia", "Tolteca", "Azteca", "Lindavista", "Santa Cruz", "San Miguel", "Lomas de San Miguel", "Valle de Guadalupe", "Los Ángeles", "Cerro de la Silla"],
            "San Nicolás": ["Centro", "Nogales", "San Ángel", "Jardines", "Chapultepec", "Las Puentes", "Anáhuac", "Cumbres", "Lomas", "El Roble", "Los Sauces", "San Francisco"],
            "Apodaca": ["Centro", "San Francisco", "Ciudad Apodaca", "Jardines de Apodaca", "Huasteca", "Misión San José", "Los Alcatraces", "El Parral", "Las Palmas", "Los Fresnos", "Santa Mónica"],
            "Santa Catarina": ["Centro", "La Fama", "San Pedro", "Pueblo Nuevo", "La Rosa", "El Álamo", "Los Alcatraces", "El Colector", "Valle Poniente", "El Mirador", "Las Palmas"],
            "San Pedro Garza García": ["Centro", "Valle Alto", "Colinas de San Pedro", "La Vista", "Lomas", "Pedregal", "Alta Vista", "El Chapote", "San Patricio", "Fuentes", "Santa Engracia"]
        }
    },
    "Oaxaca": {
        municipios: {
            "Oaxaca de Juárez": ["Centro", "San Felipe", "Jalatlaco", "San Luis Beltrán", "San José", "Xochimilco", "El Chopo", "Cruz Verde", "La Cascada", "La Soledad", "Santa Rosa", "San Juan"],
            "Juchitán": ["Centro", "Cheguigo", "Santa Rosa", "Quinta Sección", "Cuarta Sección", "Tercera Sección", "Segunda Sección", "El Espinal", "La Ventosa", "Chingachi", "San Isidro"],
            "Salina Cruz": ["Centro", "San Antonio", "Mirasol", "El Palmar", "Héroes", "Santa Rosa", "El Carrizal", "Guamúchil", "La Gloria", "Las Palmas", "Los Sabinos", "Rincón"],
            "Tuxtepec": ["Centro", "San Juan", "La Pequeña", "San Martín", "Loma Bonita", "San José", "San Lucas", "El Chirimoyo", "Los Mangos", "Paso del Toro", "Palmar", "Santa Anita"],
            "Huajuapan": ["Centro", "San José", "Sagrado", "Jardines", "Del Maestro", "La Merced", "Lomas", "El Marqués", "San Pedro", "Xochitlán", "Coyote", "Piedra Azul"],
            "Puerto Escondido": ["Centro", "El Morro", "Zicatela", "Bacocho", "Rinconada", "Marina", "California", "Benito Juárez", "San Pedro", "La Punta", "Carrizalillo", "Chivo", "Bajos de Chila"],
            "Pinotepa Nacional": ["Centro", "San Pedro", "San José", "San Nicolás", "Santa Cruz", "La Mixteca", "El Rosario", "San Isidro", "Chilpancingo", "Los Llanos", "Las Flores"]
        }
    },
    "Puebla": {
        municipios: {
            "Puebla": ["Centro", "San Manuel", "La Paz", "El Carmen", "Analco", "Amalucan", "San Pablo", "San Baltasar", "Las Cuartillas", "Lomas de Angelópolis", "Real de Cholula", "Zavaleta", "La Libertad"],
            "Cholula": ["Centro", "Santiago", "Santa María", "San Pedro", "San Miguel", "San Andrés", "La Magdalena", "Misiones", "Real de Cholula", "Cristo Rey", "Los Ángeles"],
            "Atlixco": ["Centro", "San Martín", "La Libertad", "Santa Clara", "San Isidro", "San Pedro", "El León", "San Juan", "Santa Cruz", "Metepec", "Atempan"],
            "Tehuacán": ["Centro", "San José", "Santa Ana", "Magdalena", "El Carmen", "San Lorenzo", "San Jorge", "San Antonio", "La Pedrera", "Lomas", "La Paz", "Revolución"],
            "San Martín Texmelucan": ["Centro", "Loma Bonita", "San Cristóbal", "San Miguel", "Santa María", "San Rafael", "El Paraíso", "San Luis", "La Trinidad", "San Antonio"],
            "Izarco de Matamoros": ["Centro", "San Francisco", "San Juan", "Santa Rita", "El Carmen", "Santiago", "La Purísima", "San José", "Valle de Izúcar", "Los Nogales"]
        }
    },
    "Querétaro": {
        municipios: {
            "Querétaro": ["Centro", "Juriquilla", "El Marqués", "Santa Rosa", "San Pedro", "San Pablo", "Peñuelas", "Santa Bárbara", "San José", "Satelite", "Los Álamos", "La Negreta", "El Mirador"],
            "San Juan del Río": ["Centro", "San José", "Santa Bárbara", "Lomas", "Santa Rosa", "La Sidra", "El Coto", "El Pedregal", "Los Ángeles", "San Miguel", "Las Fuentes"],
            "El Marqués": ["Centro", "La Cañada", "Colón", "Santa María", "Los Olvera", "San Miguel", "El Colorado", "La Pradera", "San Isidro", "El Salitre", "Zamorano"],
            "Corregidora": ["Centro", "El Pueblito", "San Rafael", "Cerro Colorado", "Los Olvera", "Los Álamos", "El Mirador", "San Isidro", "El Oasis", "El Jaral", "Los Pinos"],
            "Pedro Escobedo": ["Centro", "San Miguel", "La Joya", "San Antonio", "La Lira", "Santa Fe", "San Juan", "El Piñón", "El Tepe", "San Nicolás", "Santa Bárbara"]
        }
    },
    "Quintana Roo": {
        municipios: {
            "Benito Juárez": ["Cancún", "Alfredo V Bonfil", "Puerto Morelos", "Leona Vicario", "Central", "Hacienda Real", "Villas Otoch", "La Joya", "Los Reyes", "Zona Hotelera"],
            "Solidaridad": ["Playa del Carmen", "Puerto Aventuras", "Akumal", "Chemuyil", "Xpu-Há", "Paamul", "El Tinto", "Ejido", "Villas Solidaridad", "Maya Pakal"],
            "Cozumel": ["San Miguel de Cozumel", "El Cedral", "Carretera Costera", "Corpus Christi", "Las Fincas", "Chen Tulum", "Zona Hotelera", "Quintas del Sol", "Colonia Militar"],
            "Tulum": ["Tulum Pueblo", "Tankah", "Macario Gómez", "Chanchen", "Manuel Antonio Hay", "Francisco Uh May", "Pino Suárez", "Chunyaxché", "Cobá"],
            "Othón P. Blanco": ["Chetumal", "Calderitas", "Subteniente López", "Huay Pix", "Luna Guerrero", "Alfredo Bonfil", "Sergio Butrón Casas", "San Pedro", "La Unión"],
            "Felipe Carrillo Puerto": ["Felipe Carrillo Puerto", "Tepich", "Señor", "Chunhuhub", "Polyuc", "San Francisco", "Noh-Bec", "Tulum (FCP)", "El Naranjal"]
        }
    },
    "San Luis Potosí": {
        municipios: {
            "San Luis Potosí": ["Centro", "Himno Nacional", "Montecillo", "La Pila", "Lomas", "Morales", "Sauz", "San Miguel", "Las Piedras", "Satelite", "Balcones", "Tezozómoc", "Progreso", "San José"],
            "Soledad de Graciano Sánchez": ["Centro", "Primerio de Mayo", "Los Ángeles", "San Luis Rey", "San Juan", "Las Haciendas", "Valle Dorado", "La Virgen", "Santa María", "Jardines"],
            "Ciudad Valles": ["Centro", "La Lima", "Alameda", "Jardines", "Morelos", "La Floresta", "San Luis", "Santa Fe", "El Prado", "Los Olivos", "Infonavit", "Misiones"],
            "Matehuala": ["Centro", "San José", "Los Ángeles", "Pedregales", "Santa Cruz", "San Francisco", "La Luz", "San Antonio", "La Joya", "Las Palmas", "Lomas", "La Peña"],
            "Rioverde": ["Centro", "Los Ángeles", "San José", "La Hincada", "Santa Rita", "San Nicolás", "El Capulín", "Las Piletas", "San Rafael", "El Jabalí", "San Miguel"],
            "Tamazunchale": ["Centro", "San Francisco", "San Miguel", "El Naranjal", "Coatitlamixtla", "Acatipa", "Cuichapa", "Huazalingo", "San Rafael", "Santa Martha", "El Olivo"]
        }
    },
    "Sinaloa": {
        municipios: {
            "Culiacán": ["Centro", "Bachigualato", "Quintas", "Universidad", "San Rafael", "Los Pinos", "Estanzuela", "Villa Posada", "Lomas", "El Palmito", "La Campaña", "Alturas", "Colinas", "El Barrio"],
            "Mazatlán": ["Centro", "Playa Sur", "Lomas", "Ferroviaria", "Sabal", "Cerritos", "Marina Mazatlán", "El Toreo", "Miravalle", "Pradera", "Jardín", "Alameda", "Santa Fe"],
            "Los Mochis": ["Centro", "Jardines", "Las Fuentes", "Los Pinos", "La Esperanza", "Progreso", "Mochicahui", "Las Flores", "San Miguel", "Zaragoza", "Electricistas", "Antonio Rosales"],
            "Guasave": ["Centro", "El Burrión", "Tamazula", "León Fonseca", "Adolfo Ruiz Cortines", "San Rafael", "La Trinidad", "Juan José Ríos", "El Varal", "Orba", "Los Ángeles"],
            "Ahome": ["Centro", "El Fuerte", "Topolobampo", "Sinaloa de Leyva", "Tobogán", "Las Puentes", "Mochicahui", "San Miguel", "Bacorehuis", "San José", "El Colorado"]
        }
    },
    "Sonora": {
        municipios: {
            "Hermosillo": ["Centro", "Pitic", "Las Palmas", "Villa de Seris", "Buenavista", "La Laguna", "El Realito", "Sahuaro", "Los Olivos", "El Mirador", "Jardines", "San Benito"],
            "Ciudad Obregón": ["Centro", "Navojoa", "Pueblo Yaqui", "Cajeme", "Esperanza", "Cocorit", "Pascual", "Marte", "San Isidro", "Lomas", "Universidad", "Las Palmas"],
            "Nogales": ["Centro", "Montecristo", "La Mesa", "Jardines", "Lomas", "El Ranchito", "La Florida", "Esquema", "Solidaridad", "Los Álamos", "San José"],
            "San Luis Río Colorado": ["Centro", "El Coloso", "La Herradura", "Misiones", "Lázaro Cárdenas", "Nuevo San Luis", "Los Olivos", "El Mirador", "El Tesoro", "Las Palmas"],
            "Guaymas": ["Centro", "Miramar", "El Mirador", "Pitiplaya", "Cortinas", "San Carlos", "Las Playas", "La Manga", "La Colorada"]
        }
    },
    "Tabasco": {
        municipios: {
            "Villahermosa": ["Centro", "Gaviotas", "Atasta", "Lomas", "Laguna", "Sierra", "Prado", "Casa Blanca", "Tulipanes", "Colinas", "Carrizal", "Polígono", "Tabasco", "Alfa", "Paseo Tabasco"],
            "Cárdenas": ["Centro", "Poblado", "Santa Rosalía", "El Congo", "La Soledad", "Tierra Adentro", "La Curva", "Hacienda", "El Zapotal", "Las Flores", "El Trópico"],
            "Comalcalco": ["Centro", "Aldama", "Chichonal", "Parrilla", "Tacotalpa", "Oriente", "Grijalva", "Benito Juárez", "Miguel Hidalgo", "Jalpa", "La Luz"],
            "Paraíso": ["Centro", "Nicolás Bravo", "Puerto Ceiba", "El Bellote", "Chiltepec", "Pueblo Viejo", "La Unión", "La Isla", "Los Ángeles", "La Manga", "El Chinal"],
            "Centro": ["Centro", "Anacleto Canabal", "Medellín", "Tamulté", "Pueblo Nuevo", "Santa Fe", "Ocuiltzapotlán", "Acachapan", "Colmena", "Playas", "Rovirosa"]
        }
    },
    "Tamaulipas": {
        municipios: {
            "Reynosa": ["Centro", "Las Fuentes", "Los Ángeles", "San José", "Lomas", "Jardines", "Cumbres", "Tres de Mayo", "Ernesto Zedillo", "Villa Florida", "Misiones", "La Joya"],
            "Matamoros": ["Centro", "Santa Anita", "Águila", "Las Palmas", "Jardín", "Hacienda", "Lomas", "Real", "Miravalle", "Victoria", "Los Ángeles", "Los Fresnos"],
            "Nuevo Laredo": ["Centro", "Los Dos Laredos", "San Ignacio", "Campestre", "El Progresso", "Jardines", "Misiones", "Bellavista", "Vista Hermosa", "Solidaridad", "Conquistadores"],
            "Ciudad Victoria": ["Centro", "Las Flores", "San Luis", "La Sierrita", "La Ferrocarrilera", "El Mirador", "Lomas", "Satelite", "Jardines", "Militar", "La Libertad"],
            "Tampico": ["Centro", "Lomas", "Remes", "Tancol", "El Palmar", "Arenal", "Campestre", "Laguna", "San Luis", "Empleados", "Altavista", "Puerto", "Primavera"]
        }
    },
    "Tlaxcala": {
        municipios: {
            "Tlaxcala": ["Centro", "San Bernardino", "Tizatlán", "San Sebastián", "San Francisco", "Santa María", "San Miguel", "La Loma", "San Diego", "San Jorge", "San José", "Acxotla"],
            "Apizaco": ["Centro", "Jardines", "San José", "La Loma", "San Isidro", "Mario Rivera", "San Juan", "Granjas", "Unidad", "El Zapato", "Tecoatl", "Piedras Negras"],
            "Huamantla": ["Centro", "La Laguna", "San José", "San Francisco", "Las Flores", "Júarez", "La Loma", "Emiliano Zapata", "San Ángel", "San Ignacio", "El Molino"],
            "Chiautempan": ["Centro", "San Pedro", "Santa Ana", "San Bartolomé", "San Antonio", "La Aurora", "San Miguel", "El Calvario", "La Purísima", "San José", "Los Ángeles"],
            "Calpulalpan": ["Centro", "San Mateo", "La Esperanza", "San Luis", "San Antonio", "Santa Rita", "El Refugio", "San Juan", "San Felipe", "Los Reyes", "La Cañada"]
        }
    },
    "Veracruz": {
        municipios: {
            "Veracruz": ["Centro", "Boca del Río", "Costa Verde", "Amapolas", "Laguna", "Reforma", "Díaz Mirón", "Valente", "Río Medio", "El Coyol", "La Boticaria", "Los Pinos"],
            "Xalapa": ["Centro", "Ánimas", "Lomas", "San José", "Campestre", "Misión", "Primavera", "Cofradía", "Pacho", "Lomas Verdes", "Pedregal", "Jardines", "Ferroviaria"],
            "Coatzacoalcos": ["Centro", "Petrolera", "Pueblo Nuevo", "Allende", "Las Palmas", "Malibrán", "Florida", "Puerto", "Lázaro Cárdenas", "Guillermo Prieto", "El Palmar", "San Martín"],
            "Córdoba": ["Centro", "Lomas", "Linda Vista", "Jardines", "San José", "Los Olivos", "Versalles", "California", "Loma Alta", "Miraflores", "La Luz"],
            "Orizaba": ["Centro", "El Espinal", "San José", "Ahuilizapan", "Nogales", "Escape", "El Valle", "Bernal", "El Bosque", "Santa Gertrudis", "San Miguel", "El Carmen"]
        }
    },
    "Yucatán": {
        municipios: {
            "Mérida": ["Centro", "Montejo", "García Ginerés", "Altabrisa", "Itzimná", "Dolores", "Santa Ana", "Santiago", "San Sebastián", "San Juan", "Residencial", "Jardines", "Américas"],
            "Valladolid": ["Centro", "San Juan", "Santa Ana", "Santa Lucía", "San Carlos", "Candelaria", "Zací", "San José", "El Carmen", "La Corona", "San Román"],
            "Tizimín": ["Centro", "San José", "Santa Cruz", "El Roble", "El Progreso", "San Miguel", "San Manuel", "Santa María", "Los Ángeles", "La Trinidad", "San Manuel"],
            "Progreso": ["Centro", "Chuburná", "Chelem", "Dzilam", "San Antonio", "Santa Elena", "La Laguna", "Puerto Progreso", "Las Palmas", "La Ceiba", "Isla Perez"],
            "Umán": ["Centro", "Oxcum", "Kisin", "NocAc", "Dzibikak", "Santa Cruz", "San José", "Tesip", "Cuzamá", "Acanceh", "Ticul"]
        }
    },
    "Zacatecas": {
        municipios: {
            "Zacatecas": ["Centro", "Lomas", "González Ortega", "La Esmeralda", "Paseo", "San José", "Santa Rita", "Felipe Ángeles", "Militar", "Los Pinos", "La Encantada"],
            "Fresnillo": ["Centro", "La Palma", "Colinas del Padre", "Lomas", "Jardines", "Francisco Villa", "San Andrés", "Valparaíso", "Altamira", "La Florida", "Los Nogales"],
            "Jerez": ["Centro", "Santa Lucía", "El Paso", "San Miguel", "La Presa", "Los Ángeles", "Villas", "San Juan", "El Calvario", "La Estación", "La Mesa"],
            "Guadalupe": ["Centro", "Santa Mónica", "Tacoaleche", "La Luz", "Lomas", "Vista Hermosa", "San Miguel", "Santa Teresa", "La Zacatecana", "Real", "La Concepción"],
            "Sombrerete": ["Centro", "San Juan", "Santa Rita", "El Ojo", "Los Ángeles", "Vetagrande", "Plateros", "San Felipe", "San Martín", "Zóquite", "El Salado"]
        }
    }
};

// ========== 2. VARIABLES GLOBALES ==========
// readStoredData: Lee un dato del localStorage con manejo de errores
function readStoredData(key, fallback) {
    try {                                      // Intenta ejecutar la operación
        const raw = localStorage.getItem(key); // Obtiene el string guardado en localStorage por la clave especificada
        if (raw === null || raw === '') return fallback; // Si el dato es nulo o string vacío, retorna el valor por defecto
        const parsed = JSON.parse(raw);        // Convierte el string JSON a objeto JavaScript
        return parsed ?? fallback;             // Retorna los datos parseados o fallback si parsed es null
    } catch (error) {                          // Si ocurre un error (ej. localStorage lleno, JSON inválido)
        console.warn(`No se pudo leer ${key}:`, error); // Muestra un warning en la consola con el error
        return fallback;                       // Retorna el valor por defecto en caso de error
    }
}

// Variables globales del sistema de citas médicas
let patients = readStoredData('hospital_patients', []) // Arreglo de pacientes desde localStorage
    .map(normalizePatientRecord);            // Aplica normalizePatientRecord a cada paciente para estandarizar formato

let appointments = readStoredData('hospital_appointments', []); // Arreglo de citas desde localStorage (vacío por default)

let doctors = readStoredData('hospital_doctors', [ // Arreglo de doctors desde localStorage
    { id: 1, name: 'Dr. Carlos Jiménez', area: 'Medicina General', email: 'carlos.jimenez@hospital.com', password: 'Doctor123' }, // Doctor ejemplo 1
    { id: 2, name: 'Dra. Ana Rodríguez', area: 'Pediatría', email: 'ana.rodriguez@hospital.com', password: 'Doctor123' }, // Doctor ejemplo 2
    { id: 3, name: 'Dr. Luis Fernández', area: 'Cardiología', email: 'luis.fernandez@hospital.com', password: 'Doctor123' }  // Doctor ejemplo 3
]).map(normalizeDoctorRecord);               // Aplica normalizeDoctorRecord a cada doctor para estandarizar

const DEFAULT_ADMIN = { email: 'admin@hospital.com', password: 'Admin123', selectedAppointmentId: null }; // Objeto admin por defecto
// Programador: cambie aquí el correo y contraseña del administrador principal
let admins = readStoredData('hospital_admins', [DEFAULT_ADMIN]); // Arreglio de admins desde localStorage, inicia con el admin por defecto

// IIFE: Asegura que el admin por defecto siempre exista en localStorage
// Incluso si el usuario borra datos, este código recrea el admin con la contraseña correcta
(function ensureDefaultAdmin() {
    const idx = admins.findIndex(a => (a.email || '').toLowerCase() === DEFAULT_ADMIN.email.toLowerCase()); // Busca índice donde coincida el email (minúsculas)
    if (idx === -1) {                         // Si no encuentra el admin (findIndex retorna -1 cuando no hay coincidencias)
        admins.unshift(DEFAULT_ADMIN);         // Agrega el admin por defecto al inicio del arreglo
    } else if (admins[idx].password !== DEFAULT_ADMIN.password) { // Si existe pero contraseña es diferente
        admins[idx].password = DEFAULT_ADMIN.password; // Actualiza la contraseña a la padrón
    } else {                                  // Si el admin ya está correcto
        return;                               // Sale de la función, no hace nada
    }
    try { localStorage.setItem('hospital_admins', JSON.stringify(admins)); } catch (e) { /* ignore */ } // Guarda en localStorage, ignora errores cualquier fallo
})(); // Los paréntesis al final ejecutan inmediatamente la función

let adminLoggedIn = false;                   // Bandera: ¿ha iniciado sesión un admin?
let currentAdminEmail = '';                  // Almacena el email del admin que cerró sesión
let doctorLoggedIn = false;                  // Bandera: ¿ha iniciado sesión un doctor?
let currentDoctorEmail = '';                 // Almacena el email del doctor que cerró sesión
let nextPatientId = patients.length > 0 ? Math.max(...patients.map(p => p.id)) + 1 : 1; // Siguiente ID para paciente (calculado del mayor + 1, o 1 si vacío)
let nextAppointmentId = appointments.length > 0 ? Math.max(...appointments.map(a => a.id)) + 1 : 1; // Siguiente ID para cita
let nextDoctorId = doctors.length > 0 ? Math.max(...doctors.map(d => d.id || 0)) + 1 : 1; // Siguiente ID para doctor
let editingPatientId = null;               // ID del paciente que se está editando en este momento
let dbPromise = null;                        // Promesa para conexión a IndexedDB (base de datos)

// ========== 3. FUNCIONES AUXILIARES ==========
// getDoctorLabel: Retorna una etiqueta "Nombre | Área" para un doctor
function getDoctorLabel(doctor) {
    return doctor && doctor.name && doctor.area ? `${doctor.name} | ${doctor.area}` : ''; // Si doctor existe con nombre y área, retorna "Nombre | Área", sino string vacío
}

// normalizeDoctorRecord: Convierte un objeto doctor crudo en formato normalizado consistente
function normalizeDoctorRecord(doctor) {
    return {                                      // Retorna un nuevo objeto con campos padronizados
        id: doctor.id ?? 0,                       // ID del doctor, default 0 si no existe
        name: doctor.name || '',                  // Nombre, vacío si no existe
        area: doctor.area || 'General',          // Área, default "General" si no existe
        email: doctor.email || '',                // Email, vacío si no existe
        password: doctor.password || '',          // Contraseña, vacío si no existe
        dias_disponibles: doctor.dias_disponibles || 'Lunes,Martes,Miercoles,Jueves,Viernes', // Días disponibles default L-M-Mar-Mie-Jue-Vie
        turno: doctor.turno || 'Lunes a Viernes'  // Turno default "Lunes a Viernes"
    };
}

// normalizeDoctorsData: Normaliza todos los datos de doctors después de cargarlos
function normalizeDoctorsData() {
    let changed = false;                         // Bandera si hubo modificaciones en los datos
    if (Array.isArray(doctors) && doctors.length > 0) { // Si doctors es arreglo y tiene elementos
        doctors = doctors.map((doc) => {         // Itera sobre cada doctor en el arreglo
            if (typeof doc === 'string') {       // Si el doctor viene como string (formato antiguo "Nombre | Área")
                const parts = doc.split('|').map(p => p.trim()); // Divide por "|" y quita espacios en blanco
                changed = true;                   // Marca que hubo cambio de formato
                return normalizeDoctorRecord({ name: parts[0] || doc, area: parts[1] || 'General' }); // Normaliza el registro
            }
            if (doc && typeof doc === 'object') { // Si es un objeto JSON
                const normalized = normalizeDoctorRecord(doc); // Normaliza el registro
                if (!doc.id || !doc.email || !doc.password) { // Si faltan campos obligatorios (id, email, password)
                    changed = true;                   // Marca cambio
                }
                return normalized;                 // Retorna el objeto normalizado
            }
            return doc;                             // Si no coincide con ninguno, retorna tal cual
        });
    }
    if (changed) saveData();                     // Si hubo cambios, guarda el arreglo actualizado en localStorage
}

// normalizeAppointmentDoctorLabels: Normaliza las etiquetas de doctors en las citas
function normalizeAppointmentDoctorLabels() {
    let changed = false;                         // Bandera de cambios
    appointments = appointments.map(app => {     // Itera sobre cada cita en el arreglo
        if (app.doctor && !app.doctor.includes('|')) { // Si la cita tiene doctor y no tiene formato "Nombre | Área"
            const match = doctors.find(d => d.name === app.doctor); // Busca un doctor con nombre igual en el arreglo
            if (match) {                         // Si encuentra coincidencia
                changed = true;                   // Marca cambio
                return { ...app, doctor: getDoctorLabel(match) }; // Retorna cita con label normalizado "Nombre | Área"
            }
        }
        return app;                             // Si no hay cambios, retorna la cita original
    });
    if (changed) saveData();                     // Si hubo normalizaciones, guarda en localStorage
}

// ========== 4. GESTIÓN DE MÉDICOS ==========

// addDoctor: Agrega un nuevo médico al sistema
async function addDoctor(name, area, email, password, turno = 'Lunes a Viernes') {
    if (!requireAdminAuth()) return;
    if (!name || !area || !email || !password) {
        alert('Ingrese nombre, área, correo y contraseña del médico.');
        return;
    }
    const emailNormalized = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalized)) {
        alert('Ingrese un correo válido para el médico.');
        return;
    }
    if (password.length < 6) {
        alert('La contraseña del médico debe tener al menos 6 caracteres.');
        return;
    }
    if (doctors.some(doc => doc.email && doc.email.toLowerCase() === emailNormalized)) {
        alert('Ya existe un médico con ese correo.');
        return;
    }
    // Mapear turno a dias_disponibles para consistencia
    const diaMap = {
        'Lunes a Viernes': 'Lunes,Martes,Miercoles,Jueves,Viernes',
        'Sabado y Domingo': 'Sabado,Domingo',
        'Lunes a Domingo': 'Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo'
    };
    const diasDisponibles = diaMap[turno] || 'Lunes,Martes,Miercoles,Jueves,Viernes';
    const newDoctor = { id: nextDoctorId, name, area, email: emailNormalized, password, phone: '', turno: turno, dias_disponibles: diasDisponibles };
    try {
        const created = await apiCreateMedico(mapMedicoToApi(newDoctor));
        if (created && created.id) newDoctor.id = created.id;
    } catch (e) {
        console.warn('API create medico fallo, guardando solo local:', e.message);
    }
    nextDoctorId = Math.max(nextDoctorId, newDoctor.id + 1);
    doctors.push(newDoctor);
    saveData();
    renderDoctorList();
    updateDoctorSelect();
}

// editDoctor: Edita un médico existente en la lista
function editDoctor(index) {
    if (!requireAdminAuth()) return;
    const doctor = doctors[index];
    const originalName = doctor.name;
    const originalArea = doctor.area;
    const newName = prompt('Editar nombre de médico:', originalName);
    const newArea = prompt('Editar área del médico:', originalArea);
    const turnoOptions = ['Lunes a Viernes', 'Sabado y Domingo', 'Lunes a Domingo'];
    let newTurno = prompt('Editar turno del médico:\n' + turnoOptions.map((t, i) => `${i + 1}. ${t}`).join('\n') + '\n\nOpción actual: ' + (doctor.turno || 'Lunes a Viernes'), doctor.turno || 'Lunes a Viernes');
    if (newTurno) {
        const idx = parseInt(newTurno);
        if (!isNaN(idx) && idx >= 1 && idx <= turnoOptions.length) {
            newTurno = turnoOptions[idx - 1];
        }
    }
    if (!newName || !newArea) return;
    doctor.name = newName;
    doctor.area = newArea;
    doctor.turno = newTurno || 'Lunes a Viernes';
    // Validar y actualizar dias_disponibles para que coincida con el turno
    const diaMap = {
        'Lunes a Viernes': 'Lunes,Martes,Miercoles,Jueves,Viernes',
        'Sabado y Domingo': 'Sabado,Domingo',
        'Lunes a Domingo': 'Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo'
    };
    doctor.dias_disponibles = diaMap[doctor.turno] || 'Lunes,Martes,Miercoles,Jueves,Viernes';
    for (const app of appointments) {
        if (app.doctor === `${originalName} | ${originalArea}`) {
            app.doctor = `${newName} | ${newArea}`;
        }
    }
    saveData();
    renderDoctorList();
    renderDoctorAgenda();
    updateDoctorSelect();
}

// openDatabase: Inicializa conexión a IndexedDB
function openDatabase() {
    if (dbPromise) return dbPromise;            // Si ya tenemos una promesa cacheada, la retorna (evita abrir dos veces)
    dbPromise = new Promise((resolve, reject) => { // Crea una nueva promesa para la operación asíncrona
        const request = indexedDB.open('hospitalDb', 1); // Abre o crea la BD IndexedDB con nombre 'hospitalDb', versión 1
        request.onupgradeneeded = (event) => {   // Ejecutado cuando la BD se crea por primera vez o se actualiza la versión
            const db = event.target.result;      // Obtiene la referencia a la base de datos recién creada
            const stores = [                    // Define los almacenes (tables) que se crearán en la BD
                // 'patients': {},           // Almacén de pacientes (comentado)
                // 'appointments': {},       // Almacén de citas (comentado)
                // 'doctors': {},            // Almacén de doctors (comentado)
                // 'admins': {}              // Almacén de admins (comentado)
            ];
        };
    });
}