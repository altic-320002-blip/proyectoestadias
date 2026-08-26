// ============================================
// SISTEMA DE CITAS MÉDICAS - CÓDIGO COMPLETO
// ============================================

// ========== 1. DATOS GEOGRÁFICOS COMPLETOS DE MÉXICO ==========
const mexicoData = {
    "Aguascalientes": {
        municipios: {
            "Aguascalientes": ["Centro", "Norte", "Sur", "Oriente", "Poniente", "Jardines de la Concepción", "Buenavista", "Villa Magna", "Los Vergeles", "Pirámides", "Rodolfo Landeros", "Solidaridad", "Las Flores", "La Estación", "El Tapanco"],
            "Asientos": ["Asientos", "Ciénega Grande", "Pilotos", "Tlalican", "Lázaro Cárdenas", "El Refugio", "San Antonio", "La Fe", "La Gloria", "Clavellinas"],
            "Calvillo": ["Calvillo", "El Salitre", "La Labor", "Malpaso", "El Sauz", "Los Adobes", "Barranca del Muerto", "Chiquihuitero", "Colomos", "Tepetates"],
            "Cosío": ["Cosío", "La Punta", "El Refugio", "Zacatequillas", "La Concepción", "San José del Refugio", "El Soyate", "El Salero", "Los García"],
            "Jesús María": ["Jesús María", "General Ignacio Zaragoza", "Valladolid", "El Llano", "Corral de Barrancos", "Los Arquitos", "Poza Honda", "Paso Blanco", "El Chichimeco", "Los Ramírez"],
            "Pabellón de Arteaga": ["Pabellón de Arteaga", "Pabellón de Hidalgo", "El Copetillo", "San Luis de Letras", "El Rosario", "Santa Elena", "Las Ánimas", "El Saúz"],
            "Rincón de Romos": ["Rincón de Romos", "Pabellón de Hidalgo", "El Bajío", "San Antonio", "Las Cuevas", "El Valle", "Peñuelas", "Caldera", "Jesús Terán"],
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
            "Tecate": ["Tecate", "Loma Alta", "San Valentín", "El Hongo", "La Rumorosa", "Nueva Colonia Hindú", "La Cuchilla", "El Álamo", "Santa Anita", "Potrero", "Mi Ranchito", "El Florido"],
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
            "Calakmul": ["Xpujil", "Constitución", "Belén", "Nuevo Conhuas", "La Mancolona", "Dos Lagunas", "Veinte de Noviembre", "Santa Cruz", "Once de Mayo", "Candidato Aguilar"],
            "Calkiní": ["Calkiní", "Becal", "Dzitbalché", "Santa Cruz", "Nunkiní", "Bacabchén", "Chilam Balam", "San Antonio Sahcabchén", "San Luis", "Yaxché"],
            "Campeche": ["San Francisco de Campeche", "Lerma", "Champotón", "Hampolol", "Sihochac", "Samahil", "Imí", "San Antonio Cárdenas", "Chiná", "Tixmucuy", "Maya Tecún", "Xcalak"],
            "Candelaria": ["Candelaria", "El Naranjo", "Chekubul", "San Romero", "José María Morelos", "Arroyo San Francisco", "Nueva Rosita", "Valentín Gómez Farías", "Miguel Alemán", "Peyán"],
            "Carmen": ["Ciudad del Carmen", "Isla Aguada", "Atasta", "Sabancuy", "Zaragoza", "Punta Xen", "Monclova", "El Cuyo", "Licenciado Adolfo López Mateos", "San Manuel", "Playacar"],
            "Champotón": ["Champotón", "Maya Tecún", "Xculoc", "Pich", "El Refugio", "Tikínmul", "Chenkan", "San José de la Montaña", "Santa Cruz", "Chentukén"],
            "Hecelchakán": ["Hecelchakán", "Pocboc", "San Antonio Sahcabchén", "Santa Cruz", "Tikinmul", "Chencoy", "Nohalal", "San Carlos", "Pacayché", "San Martín"],
            "Hopelchén": ["Hopelchén", "Chencoh", "Sahcabchén", "Xmabén", "Yaxché", "Rancho Viejo", "Cibacab", "Santa Elena", "Tucupat", "Xmabén", "Unión del Sur"],
            "Palizada": ["Palizada", "Buenavista", "La Unión", "San Francisco", "Arroyo Negro", "Laguna de Términos", "Chicocon", "San Joaquín", "Santa Rosalía", "Nazareno"],
            "Tenabo": ["Tenabo", "Tinún", "Hampolol", "San Román", "Santa Cruz", "San Bernabé", "Pocboc", "Nacanché", "La Victoria", "San Luis"]
        }
    },
    "Chiapas": {
        municipios: {
            "San Cristóbal de las Casas": ["Centro", "San Felipe", "Ojo de Agua", "Cuxtitali", "Barrio del Cerrillo", "Santa Lucía", "Mexicanos", "San Diego", "Los Llanos", "Cuxtitali", "Cerrito", "Yalmuz", "Peje de Oro"],
            "Tuxtla Gutiérrez": ["Centro", "Terán", "La Pochota", "La Primavera", "Las Palmas", "Patria Nueva", "Paso Hondo", "San Agustín", "San Fernando", "Joyyo Mayu", "El Jobo", "Drenaje", "La Loma"],
            "Tapachula": ["Centro", "Buenos Aires", "Nuevo Centro", "Los Palacios", "Las Palmas", "Zacualpa", "Alvarado", "Santa Catarina", "San Rafael", "San Juan", "El Paraíso", "La Nueva Esperanza"],
            "Comitán": ["Centro", "La Pila", "San José", "El Calvario", "San Francisco", "El Rincón", "San José de la Montaña", "Zula", "Pacayal", "Colombia", "Villahermosa"],
            "Palenque": ["Palenque", "Bajadas Grandes", "Agua Blanca", "Chan Kai", "Nueva Esperanza", "El Capulín", "Pachán", "Catazajá", "San Alejandro", "San Miguel"],
            "Ocosingo": ["Ocosingo", "Taniperla", "San Cristóbal", "Patate", "Baja California", "Tucupate", "El Rosario", "Chiquival", "El Limón", "San Pedro"],
            "Huixtla": ["Huixtla", "Francisco I Madero", "Cantón Rincón", "Los Palacios", "La Libertad", "El Porvenir", "Nuevo México", "Santa Anita", "El Palmar", "Las Brisas"]
        }
    },
    "Chihuahua": {
        municipios: {
            "Juárez": ["Centro", "Anapra", "San Felipe", "Riveras del Bravo", "Parajes del Sur", "Misión de los Lagos", "Las Torres", "Puerta de Hierro", "Haciendas del Valle", "Cerrada del Rey", "Los Nogales", "Insurgentes", "Los Arcos", "Las Misiones", "Campestre"],
            "Chihuahua": ["Centro", "Saín Alto", "Dolores", "San Felipe", "Reforma", "Panorámico", "Tecnológico", "Ladrilleras", "Ávalos", "La Lima", "Quinta Santa Fe", "Villa del Sol", "Chihuahua 2000", "Los Nogales", "Vista del Norte"],
            "Cuauhtémoc": ["Centro", "Zootecnia", "La Trinidad", "Anáhuac", "Manuel Gómez Morín", "Ciudad Cuauhtémoc", "San Antonio de los Arenales", "Santa Rita", "Álvaro Obregón", "El Pedregal", "Las Cuadras", "San José", "Las Fuentes"],
            "Parral": ["Centro", "La Cruz", "San José", "Jardines", "Las Misiones", "Palmillas", "Las Gardenias", "Ampliación La Cruz", "Magallanes", "Privada del Rey", "Santo Domingo", "La Noria"],
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
            "Álvaro Obregón": ["Centro", "San Ángel", "Tlacopac", "El Ángel", "Olivar del Conde", "Colinas del Sur", "Florida", "Campestre", "Santa Lucía", "Ajusco", "Piloto", "El Toro", "Santa Rosa", "Lomas de los Ángeles", "La Joya"],
            "Azcapotzalco": ["Centro", "Reynosa Tamaulipas", "Clavería", "Monte Alto", "San Pedro Xalostoc", "Progreso", "San Salvador", "San Marcos", "Los Reyes", "Santa Bárbara", "Tepantongo"],
            "Benito Juárez": ["Centro", "Portales", "Del Valle", "Narvarte", "Mixcoac", "San Juan", "Insurgentes", "Actipan", "Noche Buena", "Xoco", "Las Águilas", "General Anaya"],
            "Coyoacán": ["Centro", "Villa Coyoacán", "Churubusco", "Pedregal", "San Francisco", "San Mateo", "Santa Úrsula", "Xotepingo", "Los Cedros", "Espartaco", "Adolfo Ruiz Cortines"],
            "Cuajimalpa": ["Centro", "San Pedro", "La Venta", "Manzanito", "Contadero", "Tepetongo", "Amado Nervo", "San Lorenzo", "El Molino", "El Yaqui", "Palo Alto", "Jesús del Monte"],
            "Cuauhtémoc": ["Centro", "Roma", "Condesa", "Doctores", "Tabacalera", "Santa María", "Buenavista", "Guerrero", "Morelos", "San Rafael", "Obrera", "Algarín", "Asturias", "Ampliación Asturias"],
            "Gustavo A. Madero": ["Centro", "Lindavista", "Ticomán", "La Villa", "Cruz", "Aragón", "San Juan de Aragón", "Santa Isabel", "Tepalcates", "Martín Carrera", "Progreso", "Gertrudis Sánchez", "Magdalena"],
            "Iztacalco": ["Centro", "Agrícola Oriental", "Zapotla", "Santa Anita", "San Pedro", "Reforma", "Tepeaca", "Militar Marte", "Juventino Rosas", "Carlos Zapata", "Pantalanes"],
            "Iztapalapa": ["Centro", "Santa Cruz", "Culhuacán", "Escuadrón", "Prado", "San Andrés", "Meyehualco", "Lomas de Zaragoza", "Ermita Zaragoza", "Santa María Aztahuacán", "San Lorenzo Tezonco", "Santa Catarina", "Paraje San Juan"],
            "Magdalena Contreras": ["Centro", "Barranca Seca", "San Bernabé", "Santa Teresa", "Tierra Unida", "La Carbonera", "El Tanque", "Las Águilas", "Tizampampano", "San Francisco"],
            "Miguel Hidalgo": ["Centro", "Polanco", "Lomas", "Bosque", "Granada", "San Joaquín", "Tacuba", "Popotla", "Anáhuac", "Argentina", "Legaria", "Reforma", "Montecito"],
            "Milpa Alta": ["Centro", "San Pablo", "Tecozautla", "San Francisco", "Villa Milpa Alta", "San Pedro Atocpan", "Santa Ana Tlacotenco", "San Juan Teponaxtla", "San Jerónimo Miacatlan", "La Concepción"],
            "Tláhuac": ["Centro", "San Pedro", "San Francisco", "Miguel Hidalgo", "San Nicolás", "Santa Catarina", "Zacatenco", "San José", "La Guadalupe", "Santiago", "Los Ángeles"],
            "Tlalpan": ["Centro", "San Pedro Mártir", "San Andrés", "Santa Úrsula", "Pedregal", "La Joya", "Fuentes Brotantes", "Lomas de Padierna", "San Miguel Topilejo", "San Bartolomé", "Parres", "El Capulín"],
            "Venustiano Carranza": ["Centro", "Penitenciaría", "Romero Rubio", "Jarochos", "Mercado", "Candelaria", "Zanja", "Morelos", "Valentín Gómez Farías", "Michoacán", "10 de Mayo", "Pénjamo"],
            "Xochimilco": ["Centro", "San Pedro", "San Juan", "Santa Inés", "San Francisco", "El Rosario", "Santa Cruz", "San Cristóbal", "Tulyehualco", "San Lucas", "Tepexpan", "Santiago Tepalcatlalpan"]
        }
    },
    "Coahuila": {
        municipios: {
            "Saltillo": ["Centro", "República", "Los Pinos", "Mirasiervo", "Valle Oriente", "Colinas de San José", "Latino Americano", "Buenavista", "Lomas de Lourdes", "Villa Florida", "San Sebastián", "San Esteban", "Los Olivos"],
            "Torreón": ["Centro", "Alianza", "La Joya", "San Isidro", "Los Ángeles", "Campestre", "Nueva California", "La Rosita", "Villa Jardín", "San Marcos", "Residencial", "Rincón La Merced"],
            "Monclova": ["Centro", "Primera", "Segunda", "Santiago", "Ciudad Industrial", "Las Américas", "Villa Florida", "Los Encino", "San Miguel", "Las Palmas", "Infonavit", "Estancias"],
            "Piedras Negras": ["Centro", "Ferrocarrilero", "El Morita", "La Salle", "Burócratas", "Los Olivos", "Santa María", "Bellavista", "Rivera", "Las Torres", "Satélite"],
            "Acuña": ["Centro", "Amistad", "San Luis", "Las Quintas", "Villa Hermosa", "El Pueblo", "Independencia", "Las Torres", "Villa Verde", "Residencial", "Brisas"],
            "Ramos Arizpe": ["Centro", "Los Pinos", "Santa María", "San Miguel", "Las Quintas", "La Joya", "Los Huertos", "Villalta", "San Ángel", "Parque Industrial"]
        }
    },
    "Colima": {
        municipios: {
            "Colima": ["Centro", "San Pablo", "Santa Bárbara", "El Tíbet", "La Estrella", "El Diezmo", "Las Víboras", "San Miguel", "El Alpuyeque", "El Trapiche", "El Chanal"],
            "Manzanillo": ["Centro", "Santiago", "Salagua", "Valle de las Garzas", "Olas Altas", "Miramar", "Paso del Río", "El Colomo", "Cuyutlán", "Camotlán", "El Naranjo", "Rincón de López"],
            "Tecomán": ["Centro", "Callejones", "San José", "Madrid", "El Real", "Cofradía", "Las Tunas", "El Chical", "Palo Alto", "La Salada", "Campo Cuatro"],
            "Armería": ["Centro", "Augusto Gómez Villanueva", "El Paraíso", "Periquillos", "Laguna de Agua", "Las Hadas", "Canarias", "Cuyutlán", "Bajada de Cuyutlán", "El Colomo"],
            "Villa de Álvarez": ["Centro", "El Trapiche", "San Felipe", "La Virgencita", "El Agostadero", "El Pitillal", "Monte Grande", "Tepames", "Buenos Aires", "El Bordo"],
            "Cuauhtémoc": ["Centro", "Pueblo Viejo", "Alzada", "Santa María", "San Bartolo", "El Calvario", "San José", "El Mixcuate", "La Presa", "Los Reyes"],
            "Minatitlán": ["Minatitlán", "San Antonio", "El Chavarín", "El Tivisal", "La Lima", "Potrerillos", "La Palmita", "El Tepeguaje", "Los Mezcales", "Plan de la Villa"]
        }
    },
    "Durango": {
        municipios: {
            "Durango": ["Centro", "San Juan", "Villa Florida", "Privada Bonanza", "Los Ángeles", "Nueva Vizcaya", "San José", "Las Palmas", "Industrial", "Cantera", "La Esperanza", "Insurgentes", "Misericordia"],
            "Gómez Palacio": ["Centro", "Los Ángeles", "Las Brisas", "San Eduardo", "El Campanario", "Lagos del Valle", "Jardines de la Cruz", "Villa Alejandra", "Las Misiones", "Las Magnolias", "Renacimiento"],
            "Lerdo": ["Centro", "Las Palmas", "San Antonio", "La Pequeña", "San Isidro", "San Francisco", "San José", "Nazaret", "La Luz", "La Estación"],
            "Santiago Papasquiaro": ["Centro", "El Bajío", "Los Sauces", "La Trinidad", "El Oro", "San Mateo", "San Lorenzo", "Llano Grande", "El Tule", "Potrero de los Medina"],
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
            "Valle de Chalco": ["Centro", "El Pino", "Santa Cruz", "Providencia", "La Candelaria", "San Miguel", "San José", "La Pasión", "Los Ángeles", "Héroes", "Independencia"],
            "Texcoco": ["Centro", "San Miguel", "Santa Úrsula", "Santo Tomás", "San Luis", "Los Ángeles", "La Concepción", "Santa Clara", "San Pedro", "San Nicolás", "Santiago"]
        }
    },
    "Guanajuato": {
        municipios: {
            "León": ["Centro", "Jardines", "Buenos Aires", "La Luz", "San Miguel", "La Gloria", "El Coecillo", "Obregón", "Lindavista", "Cerro Gordo", "San Juan Bosco", "Lomas de los Olivos", "Los Paraísos"],
            "Irapuato": ["Centro", "San José", "Las Palmas", "La Joya", "Las Haciendas", "Santa Lucía", "Los Olivos", "Misiones", "San Felipe", "Valle Verde", "Los Pinos", "Santa Fe"],
            "Celaya": ["Centro", "Las Flores", "Jardines", "Universidad", "Torres", "La Estación", "El Vergel", "Ribera", "San Juanico", "La Misión", "Villas del Sol", "Puerta Real"],
            "Guanajuato": ["Centro", "Paseo", "Presidencia", "San Javier", "Pastita", "Los Ángeles", "San Luisito", "Los Pinos", "Santa Fe", "El Caracol", "Mineral de Cata", "San Matías"],
            "Silao": ["Centro", "Jardines", "San Francisco", "San Juan", "La Gloria", "San Nicolás", "El Puertecito", "Santa Ana", "San Bernardo", "La Aldea", "Loma Bonita"],
            "Salamanca": ["Centro", "San José", "La Luz", "San Juanico", "El Carmen", "Lomas", "Sauz", "El Coecillo", "Los Ángeles", "Valle de Salamanca", "San Pedro"],
            "San Miguel de Allende": ["Centro", "San Antonio", "Guadalupe", "Santa Elena", "San Juan", "La Lejona", "Colonia San Luis", "El Cortijo", "Balcones", "La Esmeralda", "Lomas de San Miguel"],
            "Pénjamo": ["Centro", "El Cerrito", "San José", "La Estación", "Santa Ana", "El Ciprés", "San Isidro", "San Pedro", "Purísima", "San Juan", "El Sauz"]
        }
    },
    "Guerrero": {
        municipios: {
            "Acapulco": ["Centro", "Costera", "Caleta", "Caletilla", "Playas", "El Coloso", "Progreso", "Las Cruces", "Renacimiento", "Revolución", "Ciudad Renacimiento", "La Sabana", "San Isidro"],
            "Chilpancingo": ["Centro", "San Francisco", "San Rafael", "San Mateo", "El Cerrito", "Villa Alta", "Lomas de San Juan", "Mártires", "San Martín", "San Isidro", "Santa Cruz", "Los Pinos"],
            "Iguala": ["Centro", "San Francisco", "La Cantera", "Santa Teresa", "San Cayetano", "Lomas de Iguala", "Jardines", "El Capulín", "Las Palmas", "San Miguel", "Los Ángeles"],
            "Taxco": ["Centro", "La Joya", "San Juan", "Santa Anita", "San Miguel", "El Pedregal", "Casahuates", "El Calvario", "San Sebastián", "Santa Inés", "El Chorrillo"],
            "Zihuatanejo": ["Centro", "La Madera", "La Ropa", "Las Gatas", "Ixtapa", "El Hujal", "El Coacoyul", "San José", "Los Jorges", "La Boquita", "Laguna de Ixtapa"],
            "Zumpango": ["Centro", "San Miguel", "La Guadalupe", "La Soledad", "San Nicolás", "El Tamarindo", "El Naranjo", "El Capire", "San José", "La Estación"],
            "Atoyac": ["Centro", "San Luis", "La Laja", "El Espinal", "El Porvenir", "Las Tunas", "San Isidro", "La Barra", "La Unión", "Piedra Blanca"]
        }
    },
    "Hidalgo": {
        municipios: {
            "Pachuca": ["Centro", "Campestre", "San Javier", "Universidad", "Cubitos", "La Raza", "La Reforma", "El Arbolito", "Las Lomas", "San Antonio", "Venta Prieta", "Nuevo Hidalgo"],
            "Mineral de la Reforma": ["Centro", "Carboneras", "San Camilo", "Julián Villagrán", "El Saucillo", "El Venado", "Los Álamos", "La Colonia", "Santa María", "San Cristóbal"],
            "Tulancingo": ["Centro", "El Paraíso", "San Rafael", "Guadalupe", "Las Flores", "Los Ángeles", "San Isidro", "La Paloma", "San Miguel", "Santiago", "El Pedregal", "Jaltepec"],
            "Huejutla": ["Centro", "San Francisco", "La Ceiba", "Chililico", "Tehuetlán", "Jaltocán", "Tlanchinol", "Santa Catarina", "Cacatepec", "Ahuatempa", "Chalahuiyapa", "El Naranjal"],
            "Tizayuca": ["Centro", "Haciendas", "Ciudad del Sol", "Lomas de Tizayuca", "Villa Magna", "Real de Tizayuca", "San Lorenzo", "San Miguel", "Los Héroes", "El Pedregal"],
            "Actopan": ["Centro", "Boxaxni", "El Chamizal", "Daxtha", "La Estación", "San Jerónimo", "El Huixmi", "San Nicolás", "La Vega", "Baxcajay", "La Loma"]
        }
    },
    "Jalisco": {
        municipios: {
            "Guadalajara": ["Centro", "Americana", "Moderno", "Santa Teresita", "San Miguel de Mezquitán", "Atemajac", "Miravalle", "La Perla", "El Sauz", "El Mirador", "Los Belenes", "Lomas de la Primavera"],
            "Zapopan": ["Centro", "Andares", "Puerta de Hierro", "Las Fuentes", "El Colli", "Vallarta", "Los Molinos", "Tesistán", "Santa Ana Tepetitlán", "Nuevo México", "La Estancia"],
            "Tlaquepaque": ["Centro", "El Álamo", "San Sebastián", "Santa María", "Jardines", "El Tapatío", "La Calma", "San Pedro", "Loma Dorada", "Las Américas", "Vista Real"],
            "Puerto Vallarta": ["Centro", "Las Glorias", "El Pitillal", "Mismaloya", "Ixtapa", "Las Juntas", "Boca de Tomatlán", "El Tuito", "Cuale", "Las Palmas", "Lomas de Vallarta"],
            "Lagos de Moreno": ["Centro", "La Punta", "San Juan", "Santa María", "San Cristóbal", "Los Ángeles", "San Nicolás", "Paso de la Canoa", "El Tecuán", "Las Pintitas", "La Calera"],
            "Tonalá": ["Centro", "Paseos del Valle", "Lomas de Tonalá", "Las Fuentes", "La Jauja", "Jalisco", "San Francisco", "Santa Paula", "El Ranchito", "Las Pintas", "Tonaltecas"],
            "Autlán": ["Centro", "El Aguacate", "Francisco Villa", "Las Guásimas", "Manzanilla", "El Chante", "La Concepción", "San Miguel", "Santa María", "El Limón", "Chiquihuitlán"],
            "Cihuatlán": ["Centro", "Melaque", "San Patricio", "Barra de Navidad", "El Rebalse", "Cuastecomates", "La Manzanilla", "Las Trojes", "Punta Rosa", "Emiliano Zapata"]
        }
    },
    "Michoacán": {
        municipios: {
            "Morelia": ["Centro", "Chapultepec", "Vasco de Quiroga", "Las Américas", "Lomas de Morelia", "Vista Bella", "La Loma", "Félix Ireta", "Juan Pablo II", "Mariano Jiménez", "El Paraíso"],
            "Uruapan": ["Centro", "La Magdalena", "San Rafael", "Indeco", "Jardines", "Las Flores", "La Quinta", "Sánchez", "El Trébol", "Mango", "Calzada", "Agrícola"],
            "Lázaro Cárdenas": ["Centro", "La Mira", "El Valle", "Guacamayas", "Las Guacamayas", "La Orilla", "Buenavista", "Las Tunas", "El Habillal", "Los Olivos", "Punta Arena"],
            "Zamora": ["Centro", "La Estación", "El Carmen", "San Juan", "La Lagunilla", "Las Palmas", "El Campanario", "Los Nogales", "La Alameda", "San Rafael", "La Soledad"],
            "Zitácuaro": ["Centro", "San Miguel", "La Florida", "La Joya", "El Vergel", "San Juan", "Los Olivos", "El Rosario", "Santa María", "San Antonio", "Loma de Juárez"],
            "Apatzingán": ["Centro", "San Juan", "El Mirador", "La Ceiba", "Los Sabinos", "Santa Bárbara", "El Naranjo", "Capire", "El Capulín", "La Manzanilla", "Agua Fría"],
            "Pátzcuaro": ["Centro", "El Cerrito", "Las Letras", "San Miguel", "San Juan", "La Candelaria", "Los Tanques", "La Pacanda", "Janitzio", "Tzurumútaro", "Ihuatzio"]
        }
    },
    "Morelos": {
        municipios: {
            "Cuernavaca": ["Centro", "Lomas de Cuernavaca", "Rancho Cortés", "Colonia del Valle", "La Carolina", "Buenavista", "San Miguel", "Tetela", "Santiago", "San Jerónimo", "Ahuatepec", "Santiopa"],
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
            "San Blas": ["Centro", "Jalcocotán", "El Reventón", "Aticama", "Matanchén", "Playa Amor", "Las Islitas", "Pimientillo", "El Cora", "Chacalilla", "El Madrigaleño", "Puerto Viejo", "San Francisco"],
            "Santiago Ixcuintla": ["Centro", "La Presa", "Villa Juárez", "Pozo de Villa", "Tecualilla", "El Tamarindo", "Guamúchil", "San Pedro Lagunillas", "Cutzalapa", "Piloto", "El Capome", "Puerta de la Lima"],
            "Acaponeta": ["Centro", "Los Vázquez", "Mesa del Nayar", "El Resbalón", "Bajada del Cerro", "El Espinal", "Saycota", "El Limón", "La Cohetera", "San Miguel", "Tecuanilla", "El Caimanero"],
            "Tecuala": ["Centro", "Puerto Vallarta (Nayarit)", "Quimichis", "El Botadero", "La Concha", "Las Cebollas", "Palmar de Cuautla", "El Recodo", "El Limón", "San Felipe", "El Ciruelo"],
            "Ruiz": ["Centro", "El Venado", "Los Sauces", "San José", "El Jarretadero", "Los Pinos", "El Papalote", "Las Pilas", "La Cebadilla", "El Chaco", "El Colomo", "La Lima"],
            "Del Nayar": ["Centro", "Jesús María", "El Nayar", "Zoquipan", "Guadalupe Ocotán", "Santa Teresa", "Las Güeras", "Cuexcontitlán", "San Miguel", "El Rosario", "Los Llanitos", "La Cienega"],
            "Huajicori": ["Centro", "Las Cabras", "Santa Cruz", "Barajas", "Palo Grande", "El Mineral", "El Tecomate", "Las Flores", "El Aguajito", "San Antonio", "El Saucito", "La Cueva"],
            "La Yesca": ["Centro", "Amado Nervo", "Mesa del Nayar", "El Trapiche", "San Marcos", "El Salto", "Las Palmas", "La Cieneguilla", "El Tequezquite", "Los Sauces", "Santa Cruz", "El Tecolote"],
            "Ahuacatlán": ["Centro", "Jala", "Los Alacranes", "El Naranjito", "Zoatlán", "San José", "La Higuera", "El Macuchi", "Los Sandovales", "La Labor", "El Zopilote", "El Carrizo"],
            "Ixtlán del Río": ["Centro", "Camalotita", "Camajoa", "El Buruato", "Teponahuaxco", "San Pedro", "Las Palmas", "El Limón", "La Estancia", "Los Camachos", "El Pedregal"],
            "Jala": ["Centro", "Coapan", "El Cangrejo", "Santa Isabel", "Ahuacatlancillo", "El Carrizal", "Los Reyes", "San Pedro", "Mojahuitas", "El Trapiche", "El Naranjo", "La Torre"],
            "San Pedro Lagunillas": ["Centro", "Saycota", "El Llano", "Puerto Vallarta", "Los Gatos", "La Cienega", "Las Juntas", "El Tecomate", "Las Pilas", "El Tequezquite", "Las Palmas", "La Labor"]
        }
    },
    "Nuevo León": {
        municipios: {
            "Monterrey": ["Centro", "San Pedro", "Santa Catarina", "San Nicolás", "Apodaca", "Guadalupe", "Escobedo", "Juárez", "Cumbres", "Mitras", "Contry", "Tecnológico", "San Jerónimo", "Linda Vista", "Villa California"],
            "Guadalupe": ["Centro", "Pablo González", "Colonia", "Tolteca", "Azteca", "Lindavista", "Santa Cruz", "San Miguel", "Lomas de San Miguel", "Valle de Guadalupe", "Los Ángeles", "Cerro de la Silla"],
            "San Nicolás": ["Centro", "Nogales", "San Ángel", "Jardines", "Chapultepec", "Las Puentes", "Anáhuac", "Cumbres", "Las Lomas", "El Roble", "Los Sauces", "San Francisco"],
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
            "Puebla": ["Centro", "San Manuel", "La Paz", "El Carmen", "Analco", "Amalucan", "San Pablo", "San Baltazar", "Las Cuartillas", "Lomas de Angelópolis", "Real de Cholula", "Zavaleta", "La Libertad"],
            "Cholula": ["Centro", "Santiago", "Santa María", "San Pedro", "San Miguel", "San Andrés", "La Magdalena", "Misiones", "Real de Cholula", "Cristo Rey", "Los Ángeles"],
            "Atlixco": ["Centro", "San Martín", "La Libertad", "Santa Clara", "San Isidro", "San Pedro", "El León", "San Juan", "Santa Cruz", "Metepec", "Atempan"],
            "Tehuacán": ["Centro", "San José", "Santa Ana", "Magdalena", "El Carmen", "San Lorenzo", "San Jorge", "San Antonio", "La Pedrera", "Lomas", "La Paz", "Revolución"],
            "San Martín Texmelucan": ["Centro", "Loma Bonita", "San Cristóbal", "San Miguel", "Santa María", "San Rafael", "El Porvenir", "San Luis", "La Trinidad", "San Antonio"],
            "Izúcar de Matamoros": ["Centro", "San Francisco", "San Juan", "Santa Rita", "El Carmen", "Santiago", "La Purísima", "San José", "Valle de Izúcar", "Los Nogales"]
        }
    },
    "Querétaro": {
        municipios: {
            "Querétaro": ["Centro", "Juriquilla", "El Marqués", "Santa Rosa", "San Pedro", "San Pablo", "Peñuelas", "Santa Bárbara", "San José", "Satélite", "Los Álamos", "Carretas", "La Negreta", "El Mirador"],
            "San Juan del Río": ["Centro", "San José", "Santa Bárbara", "Lomas", "Santa Rosa", "La Sidra", "El Coto", "El Pedregal", "Los Ángeles", "San Miguel", "Las Fuentes"],
            "El Marqués": ["Centro", "La Cañada", "Colón", "Santa María", "Los Olvera", "San Miguel", "El Colorado", "La Pradera", "San Isidro", "El Salitre", "Zamorano"],
            "Corregidora": ["Centro", "El Pueblito", "San Rafael", "Cerrito Colorado", "Los Olvera", "Los Álamos", "El Mirador", "San Isidro", "El Oasis", "El Jaral", "Los Pinos"],
            "Pedro Escobedo": ["Centro", "San Miguel", "La Joya", "San Antonio", "La Lira", "Santa Fe", "San Juan", "El Piñón", "El Tepe", "San Nicolás", "Santa Bárbara"]
        }
    },
    "Quintana Roo": {
        municipios: {
            "Benito Juárez": ["Cancún", "Alfredo V Bonfil", "Puerto Morelos", "Leona Vicario", "Central", "Hacienda Real", "Villas Otoch", "La Joya", "Los Reyes", "Zona Hotelera"],
            "Solidaridad": ["Playa del Carmen", "Puerto Aventuras", "Akumal", "Chemuyil", "Xpu-Há", "Paamul", "El Tinto", "Ejido", "Villas Solidaridad", "Maya Pakal"],
            "Cozumel": ["San Miguel de Cozumel", "El Cedral", "Carretera Costera", "Corpus Christi", "Las Fincas", "Chen Tulum", "Zona Hotelera", "Quintas del Sol", "Colonia Militar"],
            "Tulum": ["Tulum Pueblo", "Tankah", "Macario Gómez", "Chanchen", "Manuel Antonio Hay", "Francisco Uh May", "Pino Suárez", "Chunyaxché", "Cobá"],
            "Othón P. Blanco": ["Chetumal", "Calderitas", "Subteniente López", "Huay Pix", "Laguna Guerrero", "Alfredo Bonfil", "Sergio Butrón Casas", "San Pedro", "La Unión"],
            "Felipe Carrillo Puerto": ["Felipe Carrillo Puerto", "Tepich", "Señor", "Chunhuhub", "Polyuc", "San Francisco", "Noh-Bec", "Tulum (FCP)", "El Naranjal"]
        }
    },
    "San Luis Potosí": {
        municipios: {
            "San Luis Potosí": ["Centro", "Himno Nacional", "Montecillo", "La Pila", "Lomas", "Morales", "Sauz", "San Miguel", "Las Piedras", "Satélite", "Balcones", "Tezozómoc", "Progreso", "San José"],
            "Soledad de Graciano Sánchez": ["Centro", "Primero de Mayo", "Los Ángeles", "San Luis Rey", "San Juan", "Las Haciendas", "Valle Dorado", "La Virgen", "Santa María", "Jardines"],
            "Ciudad Valles": ["Centro", "La Lima", "Alameda", "Jardines", "Morelos", "La Floresta", "San Luis", "Santa Fe", "El Prado", "Los Olivos", "Infonavit", "Las Misiones"],
            "Matehuala": ["Centro", "San José", "Los Ángeles", "Pedregales", "Santa Cruz", "San Francisco", "La Luz", "San Antonio", "La Joya", "Las Palmas", "Lomas", "La Peña"],
            "Rioverde": ["Centro", "Los Ángeles", "San José", "La Hincada", "Santa Rita", "San Nicolás", "El Capulín", "Las Piletas", "San Rafael", "El Jabalí", "San Miguel"],
            "Tamazunchale": ["Centro", "San Francisco", "San Miguel", "El Naranjal", "Coatitlamixtla", "Acatipa", "Cuichapa", "Huazalingo", "San Rafael", "Santa Martha", "El Olivo"]
        }
    },
    "Sinaloa": {
        municipios: {
            "Culiacán": ["Centro", "Bachigualato", "Las Quintas", "Universidad", "San Rafael", "Los Pinos", "Estanzuela", "Villa Posada", "Lomas", "El Palmito", "La Campiña", "Alturas", "Colinas", "El Barrio"],
            "Mazatlán": ["Centro", "Playa Sur", "Lomas", "Ferrocarrilera", "Sabalo", "Cerritos", "Marina Mazatlán", "El Toreo", "Miravalle", "Pradera", "Jardín", "Alameda", "Santa Fe"],
            "Los Mochis": ["Centro", "Jardines", "Las Fuentes", "Los Pinos", "La Esperanza", "Progreso", "Mochicahui", "Las Flores", "San Miguel", "Zaragoza", "Electricistas", "Antonio Rosales"],
            "Guasave": ["Centro", "El Burrión", "Tamazula", "León Fonseca", "Adolfo Ruiz Cortines", "San Rafael", "La Trinidad", "Juan José Ríos", "El Varal", "Orba", "Los Ángeles"],
            "Ahome": ["Centro", "El Fuerte", "Topolobampo", "Sinaloa de Leyva", "Tobogán", "Las Puentes", "Mochicahui", "San Miguel", "Bacorehuis", "San José", "El Colorado"]
        }
    },
    "Sonora": {
        municipios: {
            "Hermosillo": ["Centro", "Pitic", "Las Palmas", "Villa de Seris", "Buenavista", "La Laguna", "El Realito", "Sahuaro", "Los Olivos", "El Mirador", "Jardines", "San Benito"],
            "Ciudad Obregón": ["Centro", "Náinari", "Pueblo Yaqui", "Cajeme", "Esperanza", "Cocorit", "Pascual", "Marte", "San Isidro", "Lomas", "Universidad", "Las Palmas"],
            "Nogales": ["Centro", "Montecarlo", "La Mesa", "Jardines", "Lomas", "El Ranchito", "La Florida", "Esquema", "Solidaridad", "Los Álamos", "San José"],
            "San Luis Río Colorado": ["Centro", "El Coloso", "La Herradura", "Las Misiones", "Lázaro Cárdenas", "Nuevo San Luis", "Los Olivos", "El Mirador", "El Tesoro", "Las Palmas"],
            "Guaymas": ["Centro", "Miramar", "El Mirador", "Pitiplaya", "Cortinas", "San Carlos", "Las Playas", "La Manga", "La Barca", "Punta Arena", "La Colorada"]
        }
    },
    "Tabasco": {
        municipios: {
            "Villahermosa": ["Centro", "Gaviotas", "Atasta", "Lomas", "Laguna", "Sierra", "Prado", "Casa Blanca", "Tulipanes", "Colinas", "Carrizal", "Polígono", "Tabasco", "Alfa", "Paseo Tabasco"],
            "Cárdenas": ["Centro", "Poblado", "Santa Rosalía", "El Congo", "La Soledad", "Tierra Adentro", "La Curva", "Hacienda", "El Zapotal", "Las Flores", "El Trópico"],
            "Comalcalco": ["Centro", "Aldama", "Chichonal", "Parrilla", "Tacotalpa", "Oriente", "Grijalva", "Benito Juárez", "Miguel Hidalgo", "Jalpa", "La Luz"],
            "Paraíso": ["Centro", "Nicolás Bravo", "Puerto Ceiba", "El Bellote", "Chiltepec", "Pueblo Viejo", "La Unión", "La Isla", "Los Ángeles", "La Manga", "El Chinal"],
            "Centro": ["Centro", "Anacleto Canabal", "Medellín", "Tamulté", "Pueblo Nuevo", "Santa Fe", "Ocuiltzapotlan", "Acachapan", "Colmena", "Playas", "Rovirosa"]
        }
    },
    "Tamaulipas": {
        municipios: {
            "Reynosa": ["Centro", "Las Fuentes", "Los Ángeles", "San José", "Lomas", "Jardines", "Cumbres", "Tres de Mayo", "Ernesto Zedillo", "Villa Florida", "Misiones", "La Joya"],
            "Matamoros": ["Centro", "Santa Anita", "Águila", "Las Palmas", "Jardín", "Hacienda", "Lomas", "Real", "Miravalle", "Victoria", "Los Ángeles", "Los Fresnos"],
            "Nuevo Laredo": ["Centro", "Los Dos Laredos", "San Ignacio", "Campestre", "El Progresso", "Jardines", "Las Misiones", "Bellavista", "Vista Hermosa", "Solidaridad", "Conquistadores"],
            "Ciudad Victoria": ["Centro", "Las Flores", "San Luis", "La Sierrita", "La Ferrocarrilera", "El Mirador", "Lomas", "Satélite", "Jardines", "Militar", "La Libertad"],
            "Tampico": ["Centro", "Lomas", "Remes", "Tancol", "El Palmar", "Arenal", "Campestre", "Laguna", "San Luis", "Empleados", "Altavista", "Puerto", "Primavera"]
        }
    },
    "Tlaxcala": {
        municipios: {
            "Tlaxcala": ["Centro", "San Bernardino", "Tizatlán", "San Sebastián", "San Francisco", "Santa María", "San Miguel", "La Loma", "San Diego", "San Jorge", "San José", "Acxotla"],
            "Apizaco": ["Centro", "Jardines", "San José", "La Loma", "San Isidro", "Mario Rivera", "San Juan", "Granjas", "Unidad", "El Zapato", "Tecoatl", "Piedras Negras"],
            "Huamantla": ["Centro", "La Laguna", "San José", "San Francisco", "Las Flores", "Juárez", "La Loma", "Emiliano Zapata", "San Ángel", "San Ignacio", "El Molino"],
            "Chiautempan": ["Centro", "San Pedro", "Santa Ana", "San Bartolomé", "San Antonio", "La Aurora", "San Miguel", "El Calvario", "La Purísima", "San José", "Los Ángeles"],
            "Calpulalpan": ["Centro", "San Mateo", "La Esperanza", "San Luis", "San Antonio", "Santa Rita", "El Refugio", "San Juan", "San Felipe", "Los Reyes", "La Cañada"]
        }
    },
    "Veracruz": {
        municipios: {
            "Veracruz": ["Centro", "Boca del Río", "Costa Verde", "Las Amapolas", "Laguna", "Reforma", "Diaz Mirón", "Valente", "Río Medio", "El Coyol", "La Boticaria", "Los Pinos"],
            "Xalapa": ["Centro", "Ánimas", "Lomas", "San José", "Campestre", "Mision", "Primavera", "Cofradía", "Pacho", "Lomas Verdes", "Pedregal", "Jardines", "Ferrocarrilera"],
            "Coatzacoalcos": ["Centro", "Petrolera", "Pueblo Nuevo", "Allende", "Las Palmas", "Malibrán", "Florida", "Puerto", "Lázaro Cárdenas", "Guillermo Prieto", "El Palmar", "San Martín"],
            "Córdoba": ["Centro", "Lomas", "Linda Vista", "Jardines", "San José", "Los Olivos", "Versalles", "Santa Fe", "California", "Loma Alta", "Miraflores", "La Luz"],
            "Orizaba": ["Centro", "El Espinal", "San José", "Ahuilizapan", "Nogales", "Escape", "El Valle", "Bernal", "El Bosque", "Santa Gertrudis", "San Miguel", "El Carmen"]
        }
    },
    "Yucatán": {
        municipios: {
            "Mérida": ["Centro", "Montejo", "García Ginerés", "Altabrisa", "Itzimná", "Dolores", "Santa Ana", "Santiago", "San Sebastián", "San Juan", "Residencial", "Jardines", "Las Américas"],
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
function readStoredData(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        if (raw === null || raw === '') return fallback;
        const parsed = JSON.parse(raw);
        return parsed ?? fallback;
    } catch (error) {
        console.warn(`No se pudo leer ${key}:`, error);
        return fallback;
    }
}

let patients = readStoredData('hospital_patients', []).map(normalizePatientRecord).filter(p => p.curp !== 'FEPA921108MNTRN03' && p.name !== 'Ana Cristina Fernández Pérez');
let appointments = readStoredData('hospital_appointments', []).filter(a => a.patientId !== 1);
// Limpieza persistente del paciente demo en localStorage
try { localStorage.setItem('hospital_patients', JSON.stringify(patients)); } catch(e){}
try { localStorage.setItem('hospital_appointments', JSON.stringify(appointments)); } catch(e){}

let doctors = readStoredData('hospital_doctors', [
    { id: 1, name: 'Dr. Carlos Jiménez', area: 'Medicina General', email: 'carlos.jimenez@hospital.com', password: 'Doctor123' },
    { id: 2, name: 'Dra. Ana Rodríguez', area: 'Pediatría', email: 'ana.rodriguez@hospital.com', password: 'Doctor123' },
    { id: 3, name: 'Dr. Luis Fernández', area: 'Cardiología', email: 'luis.fernandez@hospital.com', password: 'Doctor123' }
]).map(normalizeDoctorRecord);
const DEFAULT_ADMIN = { email: 'admin@hospital.com', password: 'Admin123', selectedAppointmentId: null }; // Programador: cambie aquí el correo y contraseña del administrador principal
let admins = readStoredData('hospital_admins', [DEFAULT_ADMIN]);

// Asegurar que el administrador por defecto siempre exista con la contraseña del código,
// incluso si el navegador tenía datos previos en localStorage.
(function ensureDefaultAdmin() {
    const idx = admins.findIndex(a => (a.email || '').toLowerCase() === DEFAULT_ADMIN.email.toLowerCase());
    if (idx === -1) {
        admins.unshift(DEFAULT_ADMIN);
    } else if (admins[idx].password !== DEFAULT_ADMIN.password) {
        admins[idx].password = DEFAULT_ADMIN.password;
    } else {
        return;
    }
    try { localStorage.setItem('hospital_admins', JSON.stringify(admins)); } catch (e) { /* ignore */ }
})();
let adminLoggedIn = false;
let currentAdminEmail = '';
let doctorLoggedIn = false;
let currentDoctorEmail = '';
let nextPatientId = patients.length > 0 ? Math.max(...patients.map(p => p.id)) + 1 : 1;
let nextAppointmentId = appointments.length > 0 ? Math.max(...appointments.map(a => a.id)) + 1 : 1;
let nextDoctorId = doctors.length > 0 ? Math.max(...doctors.map(d => d.id || 0)) + 1 : 1;
let editingPatientId = null;
let dbPromise = null;

// ========== 3. FUNCIONES AUXILIARES ==========
function getDoctorLabel(doctor) {
    return doctor && doctor.name && doctor.area ? `${doctor.name} | ${doctor.area}` : '';
}

function normalizeDoctorRecord(doctor) {
    return {
        id: doctor.id ?? 0,
        name: doctor.name || '',
        area: doctor.area || 'General',
        email: doctor.email || '',
        password: doctor.password || '',
        dias_trabaja: doctor.dias_trabaja || 'L-V',
        hora_entrada: doctor.hora_entrada || '08:00:00',
        hora_salida: doctor.hora_salida || '18:00:00'
    };
}

function normalizeDoctorsData() {
    let changed = false;
    if (Array.isArray(doctors) && doctors.length > 0) {
        doctors = doctors.map((doc) => {
            if (typeof doc === 'string') {
                const parts = doc.split('|').map(p => p.trim());
                changed = true;
                return normalizeDoctorRecord({ name: parts[0] || doc, area: parts[1] || 'General' });
            }
            if (doc && typeof doc === 'object') {
                const normalized = normalizeDoctorRecord(doc);
                if (!doc.id || !doc.email || !doc.password) {
                    changed = true;
                }
                return normalized;
            }
            return doc;
        });
    }
    if (changed) saveData();
}

function normalizeAppointmentDoctorLabels() {
    let changed = false;
    appointments = appointments.map(app => {
        if (app.doctor && !app.doctor.includes('|')) {
            const match = doctors.find(d => d.name === app.doctor);
            if (match) {
                changed = true;
                return { ...app, doctor: getDoctorLabel(match) };
            }
        }
        return app;
    });
    if (changed) saveData();
}

function openDatabase() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
        const request = indexedDB.open('hospitalDb', 1);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const stores = [
                { name: 'patients', keyPath: 'id', autoIncrement: true },
                { name: 'appointments', keyPath: 'id', autoIncrement: true },
                { name: 'doctors', keyPath: 'id', autoIncrement: true },
                { name: 'admins', keyPath: 'email', autoIncrement: false }
            ];
            for (const storeDef of stores) {
                if (!db.objectStoreNames.contains(storeDef.name)) {
                    const store = db.createObjectStore(storeDef.name, {
                        keyPath: storeDef.keyPath,
                        autoIncrement: storeDef.autoIncrement
                    });
                    if (storeDef.name === 'patients') {
                        store.createIndex('email', 'email', { unique: false });
                        store.createIndex('curp', 'curp', { unique: false });
                    }
                    if (storeDef.name === 'doctors') {
                        store.createIndex('email', 'email', { unique: false });
                    }
                    if (storeDef.name === 'admins') {
                        store.createIndex('email', 'email', { unique: true });
                    }
                }
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
    return dbPromise;
}

async function saveCollectionToDatabase(storeName, items) {
    try {
        const db = await openDatabase();
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        store.clear();
        items.forEach((item) => store.put(item));
        await new Promise((resolve, reject) => {
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error);
        });
    } catch (error) {
        console.warn(`No se pudo sincronizar ${storeName} en IndexedDB:`, error);
    }
}

function saveData() {
    localStorage.setItem('hospital_patients', JSON.stringify(patients));
    localStorage.setItem('hospital_appointments', JSON.stringify(appointments));
    localStorage.setItem('hospital_doctors', JSON.stringify(doctors));
    localStorage.setItem('hospital_admins', JSON.stringify(admins));
    void saveCollectionToDatabase('patients', patients);
    void saveCollectionToDatabase('appointments', appointments);
    void saveCollectionToDatabase('doctors', doctors);
    void saveCollectionToDatabase('admins', admins);
}

// ========== MAPEOS FRONTEND <-> BACKEND ==========
// Backend usa campos en español; frontend usa camelCase en inglés.
function mapPacienteFromApi(p) {
    return {
        id: p.id,
        name: p.nombre || '',
        curp: p.curp || '',
        dob: p.fecha_nacimiento || '',
        gender: p.genero || '',
        phone: p.telefono || '',
        email: p.email || '',
        address: p.direccion || '',
        state: p.estado || '',
        city: p.municipio || '',
        population: p.localidad || '',
        zipCode: p.codigo_postal || '',
        bloodType: p.blood_type || '',
        registrationDate: p.fecha_registro || new Date().toISOString()
    };
}
function mapPacienteToApi(p) {
    return {
        nombre: p.name, curp: (p.curp || '').toUpperCase(), fecha_nacimiento: p.dob,
        genero: p.gender, telefono: p.phone, email: p.email, direccion: p.address,
        estado: p.state, municipio: p.city, localidad: p.population,
        codigo_postal: p.zipCode, blood_type: p.bloodType
    };
}
function mapMedicoFromApi(d) {
    return {
        id: d.id, name: d.nombre || '', area: d.area || '',
        email: d.email || '', phone: d.telefono || '', password: '',
        dias_trabaja: d.dias_trabaja || 'L-V',
        hora_entrada: d.hora_entrada || '08:00:00',
        hora_salida: d.hora_salida || '18:00:00'
    };
}
function mapMedicoToApi(d) {
    return {
        nombre: d.name, area: d.area, telefono: d.phone || '',
        email: (d.email || '').toLowerCase(), password: d.password || 'Doctor123',
        dias_trabaja: d.dias_trabaja || 'L-V',
        hora_entrada: d.hora_entrada || '08:00:00',
        hora_salida: d.hora_salida || '18:00:00'
    };
}
function mapCitaFromApi(c) {
    return {
        id: c.id,
        patientId: c.paciente_id,
        doctor: c.medico_nombre ? `${c.medico_nombre} | ${c.medico_area || ''}`.trim() : '',
        doctorId: c.medico_id,
        date: c.fecha || '',
        time: (c.hora || '').slice(0, 5),
        reason: c.motivo || '',
        status: c.estado || 'Agendada'
    };
}
function mapCitaToApi(c) {
    return {
        paciente_id: c.patientId, medico_id: c.doctorId || null,
        fecha: c.date, hora: c.time, motivo: c.reason, estado: c.status || 'Agendada'
    };
}
function mapAdminFromApi(a) {
    return { email: a.email, password: '', selectedAppointmentId: null };
}

// ========== SINCRONIZACION INICIAL DESDE LA API ==========
async function syncFromApi() {
    if (typeof apiGetPacientes !== 'function') return; // api.js no cargado
    try {
        const [pacientes, medicos, citas] = await Promise.all([
            apiGetPacientes(),
            apiGetMedicos(),
            apiGetCitas()
        ]);
        patients = pacientes.map(mapPacienteFromApi);
        doctors = medicos.map(mapMedicoFromApi);
        appointments = citas.map(mapCitaFromApi);
    } catch (e) {
        console.warn('syncFromApi parcial falló para pacientes/médicos/citas:', e.message);
    }
    try {
        const adminsApi = await apiGetAdmins();
        if (adminsApi && adminsApi.length) {
            admins = adminsApi.map(mapAdminFromApi);
        }
    } catch (_) {}
    normalizeAppointmentDoctorLabels();
    if (adminsApi && adminsApi.length) {
        admins = adminsApi.map(mapAdminFromApi);
    }
    nextPatientId = patients.length > 0 ? Math.max(...patients.map(p => p.id)) + 1 : 1;
    nextAppointmentId = appointments.length > 0 ? Math.max(...appointments.map(a => a.id)) + 1 : 1;
    nextDoctorId = doctors.length > 0 ? Math.max(...doctors.map(d => d.id || 0)) + 1 : 1;
    // Guardar en localStorage como cache offline
    saveData();
    // Refrescar vistas
    updatePatientSelect();
    updateDoctorSelect();
    renderPatientList?.();
    renderAdminPatientList?.();
    renderDoctorList?.();
    renderAgenda?.();
    renderDoctorAgenda?.();
    renderAdminList?.();
}

function validateCurp(curp) {
    if (typeof curp !== 'string') return false;
    const normalized = curp.trim().toUpperCase();
    if (normalized.length !== 18) return false;

    const regex = /^[A-Z][AEIOU][A-Z]{2}\d{6}[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z0-9]\d$/;
    if (!regex.test(normalized)) return false;

    const birthDate = normalized.slice(4, 10);
    const year = Number.parseInt(birthDate.slice(0, 2), 10);
    const month = Number.parseInt(birthDate.slice(2, 4), 10);
    const day = Number.parseInt(birthDate.slice(4, 6), 10);
    if (month < 1 || month > 12 || day < 1 || day > 31) return false;

    const currentYear = new Date().getFullYear() % 100;
    if (year > currentYear + 1) return false;

    const alphabet = '0123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';
    const weights = [13, 11, 7, 5, 3, 2, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67];
    let sum = 0;
    for (let index = 0; index < 17; index += 1) {
        const value = alphabet.indexOf(normalized[index]);
        if (value === -1) return false;
        sum += value * weights[index];
    }
    const checksum = (10 - (sum % 10)) % 10;
    return Number.parseInt(normalized[17], 10) === checksum;
}

function normalizePatientRecord(patient) {
    return {
        ...patient,
        id: patient.id ?? 0,
        name: patient.name || '',
        email: patient.email || '',
        phone: patient.phone || '',
        curp: (patient.curp || '').toUpperCase()
    };
}

function persistPatientData() {
    patients = patients.map(normalizePatientRecord);
    saveData();
}

// Helpers para persistir selección por usuario (admin)
function getSelectedAppointmentForCurrentUser() {
    try {
        if (adminLoggedIn && currentAdminEmail) {
            const adm = admins.find(a => a.email && a.email.toLowerCase() === currentAdminEmail.toLowerCase());
            if (adm && adm.selectedAppointmentId) return String(adm.selectedAppointmentId);
        }
        return localStorage.getItem('selectedAppointmentId');
    } catch (e) {
        return localStorage.getItem('selectedAppointmentId');
    }
}

function setSelectedAppointmentForCurrentUser(id) {
    try {
        if (adminLoggedIn && currentAdminEmail) {
            const adm = admins.find(a => a.email && a.email.toLowerCase() === currentAdminEmail.toLowerCase());
            if (adm) {
                adm.selectedAppointmentId = String(id);
                saveData();
                return;
            }
        }
        localStorage.setItem('selectedAppointmentId', String(id));
    } catch (e) { /* ignore */ }
}

function clearSelectedAppointmentIfMatchesId(removedId) {
    try {
        // limpiar en localStorage
        const ls = localStorage.getItem('selectedAppointmentId');
        if (ls && Number.parseInt(ls,10) === Number.parseInt(removedId,10)) {
            localStorage.removeItem('selectedAppointmentId');
        }
    } catch (e) { /* ignore */ }
    // limpiar en admins
    let changed = false;
    for (const adm of admins) {
        if (adm && adm.selectedAppointmentId && Number.parseInt(adm.selectedAppointmentId,10) === Number.parseInt(removedId,10)) {
            adm.selectedAppointmentId = null;
            changed = true;
        }
    }
    if (changed) saveData();
}

function clearSelectedAppointmentForCurrentUser() {
    try {
        // limpiar localStorage
        localStorage.removeItem('selectedAppointmentId');
    } catch (e) { /* ignore */ }
    // limpiar en admins
    let changed = false;
    for (const adm of admins) {
        if (adm && adm.selectedAppointmentId) {
            adm.selectedAppointmentId = null;
            changed = true;
        }
    }
    if (changed) saveData();
}

function applySelectionToCards() {
    try {
        const selId = getSelectedAppointmentForCurrentUser();
        for (const c of document.querySelectorAll('#agendaList .card')) {
            const cid = c.dataset.id;
            const btn = c.querySelector('.select-appointment-btn');
            const isSel = selId && Number.parseInt(selId,10) === Number.parseInt(cid,10);
            if (isSel) {
                c.classList.add('selected');
                if (btn) btn.textContent = 'Desmarcar';
            } else {
                c.classList.remove('selected');
                if (btn) btn.textContent = 'Marcar';
            }
        }
    } catch (e) { /* ignore */ }
}

function isAdminAuthorized() {
    return adminLoggedIn;
}

function requireAdminAuth() {
    if (!adminLoggedIn) {
        showMessage(document.getElementById('doctorLoginMsg'), 'Debe iniciar sesión como administrador para usar esta función.', true);
        return false;
    }
    return true;
}

function setAdminControlsState(enabled) {
    const buttonIds = ['#addDoctorBtn', '#addAdminBtn', '#refreshDoctorListBtn', '#downloadDoctorListExcelBtn'];
    const inputIds = ['#newDoctorName', '#newDoctorArea', '#newDoctorEmail', '#newDoctorPassword', '#newAdminEmail', '#newAdminPassword'];
    for (const selector of buttonIds) {
        const btn = document.querySelector(selector);
        if (btn) btn.disabled = !enabled;
    }
    for (const selector of inputIds) {
        const input = document.querySelector(selector);
        if (input) input.disabled = !enabled;
    }
}

function renderAdminAccess() {
    const adminContent = document.getElementById('adminContent');
    const doctorLoginCard = document.getElementById('doctorLoginCard');
    const logoutBtn = document.getElementById('adminLogoutBtn');
    const warning = document.getElementById('adminAccessWarning');
    if (!adminContent || !logoutBtn) return;

    // Tarjetas que el médico (y también el admin) pueden ver
    const doctorCards = [
        'cardAgenda',
        'cardDoctors',
        'cardAdmins',
        'cardPatients',
        'cardDoctorAgenda'
    ];

    const showDoctorCards = (show) => {
        for (const id of doctorCards) {
            const card = document.getElementById(id);
            if (card) card.style.display = show ? 'block' : 'none';
        }
    };

    if (adminLoggedIn) {
        if (doctorLoginCard) doctorLoginCard.style.display = 'none';
        adminContent.classList.remove('hidden');
        logoutBtn.style.display = 'inline-flex';
        if (warning) warning.innerHTML = '';
        showDoctorCards(true);
        setAdminControlsState(true);
        renderAdminPatientList();
        renderDoctorList();
        renderDoctorAgenda();
        renderAdminList();
        renderAgenda(document.getElementById('filterDate')?.value);
    } else if (doctorLoggedIn) {
        if (doctorLoginCard) doctorLoginCard.style.display = 'none';
        adminContent.classList.remove('hidden');
        logoutBtn.style.display = 'inline-flex';
        if (warning) warning.innerHTML = '';
        showDoctorCards(true);
        setAdminControlsState(false);
        renderAdminPatientList();
        renderDoctorList();
        renderAdminList();
        renderDoctorAgenda();
        renderAgenda(document.getElementById('filterDate')?.value);
    } else {
        if (doctorLoginCard) doctorLoginCard.style.display = 'block';
        adminContent.classList.remove('hidden');
        logoutBtn.style.display = 'none';
        if (warning) warning.innerHTML = '';
        showDoctorCards(false);
        setAdminControlsState(false);
    }
}

function renderAdminList() {
    const list = document.getElementById('adminList');
    if (!list) return;
    const searchInput = document.getElementById('adminSearch');
    const query = (searchInput?.value || '').trim().toLowerCase();
    const filteredAdmins = admins.filter(admin => {
        if (!query) return true;
        return (admin.email || '').toLowerCase().includes(query);
    });

    list.innerHTML = '';
    if (filteredAdmins.length === 0) {
        list.innerHTML = '<p class="info-text">No hay administradores que coincidan con la búsqueda.</p>';
        return;
    }

    for (const [index, admin] of filteredAdmins.entries()) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-info">
                <p><strong>Correo:</strong> ${admin.email}</p>
            </div>
            <div class="card-actions">
                ${admins.length > 1 ? `<button class="delete-admin-btn btn-danger" data-index="${index}"><i class="fas fa-trash"></i> Eliminar</button>` : ''}
            </div>
        `;
        list.appendChild(card);
    }

    for (const btn of list.querySelectorAll('.delete-admin-btn')) {
        btn.addEventListener('click', () => deleteAdmin(Number.parseInt(btn.dataset.index)));
    }
}

function loginAdmin() {
    const email = document.getElementById('doctorLoginEmail').value.trim().toLowerCase();
    const password = document.getElementById('doctorLoginPassword').value;
    if (!email || !password) {
        showMessage(document.getElementById('doctorLoginMsg'), 'Ingrese correo y contraseña', true);
        return;
    }

    const admin = admins.find(a => a.email.toLowerCase() === email && a.password === password);
    if (!admin) {
        showMessage(document.getElementById('doctorLoginMsg'), 'Correo o contraseña incorrectos', true);
        return;
    }

    adminLoggedIn = true;
    currentAdminEmail = admin.email;
    document.getElementById('doctorLoginEmail').value = '';
    document.getElementById('doctorLoginPassword').value = '';
    try { localStorage.setItem('hospital_admins', JSON.stringify(admins)); } catch (e) { /* ignore */ }
    renderAdminAccess();
    showMessage(document.getElementById('doctorLoginMsg'), `Bienvenido, ${admin.email}`);
}

function logoutAdmin() {
    adminLoggedIn = false;
    currentAdminEmail = '';
    doctorLoggedIn = false;
    currentDoctorEmail = '';
    try { localStorage.setItem('hospital_admins', JSON.stringify(admins)); } catch (e) { /* ignore */ }
    renderAdminAccess();
    showMessage(document.getElementById('doctorLoginMsg'), 'Sesión cerrada.');
}

async function loginDoctor() {
    const email = document.getElementById('doctorLoginEmail')?.value.trim().toLowerCase();
    const password = document.getElementById('doctorLoginPassword')?.value;
    const msg = document.getElementById('doctorLoginMsg');
    if (!email || !password) {
        showMessage(msg, 'Ingrese correo y contraseña.', true);
        return;
    }

    // 1. Intentar login contra la API (MySQL, contrasenas hasheadas con SHA2)
    if (typeof apiLogin === 'function') {
        try {
            const result = await apiLogin(email, password);
            if (result.role === 'admin') {
                adminLoggedIn = true;
                currentAdminEmail = result.user.email;
                document.getElementById('doctorLoginEmail').value = '';
                document.getElementById('doctorLoginPassword').value = '';
                renderAdminAccess();
                showMessage(msg, `Bienvenido, ${result.user.email}.`);
                return;
            }
            if (result.role === 'doctor') {
                doctorLoggedIn = true;
                currentDoctorEmail = result.user.email;
                document.getElementById('doctorLoginEmail').value = '';
                document.getElementById('doctorLoginPassword').value = '';
                renderAdminAccess();
                showMessage(msg, `Bienvenido médico, ${result.user.nombre}.`);
                return;
            }
        } catch (apiErr) {
            console.warn('Login API fallo, intentando verificacion local:', apiErr.message);
        }
    }

    // 2. Verificacion local (localStorage con contrasenas en texto plano)
    const admin = admins.find(a => a.email.toLowerCase() === email && a.password === password);
    if (admin) {
        adminLoggedIn = true;
        currentAdminEmail = admin.email;
        document.getElementById('doctorLoginEmail').value = '';
        document.getElementById('doctorLoginPassword').value = '';
        renderAdminAccess();
        showMessage(msg, `Bienvenido, ${admin.email}.`);
        return;
    }

    const doctor = doctors.find(d => d.email && d.email.toLowerCase() === email && d.password === password);
    if (!doctor) {
        showMessage(msg, 'Correo o contraseña incorrectos.', true);
        return;
    }

    doctorLoggedIn = true;
    currentDoctorEmail = doctor.email;
    document.getElementById('doctorLoginEmail').value = '';
    document.getElementById('doctorLoginPassword').value = '';
    renderAdminAccess();
    showMessage(msg, `Bienvenido médico, ${doctor.name}.`);
}

async function addAdmin(email, password) {
    if (!requireAdminAuth()) return;
    const adminEmail = email.trim().toLowerCase();
    const adminPassword = password;
    if (!adminEmail || !adminPassword) {
        showMessage(document.getElementById('doctorLoginMsg'), 'Ingrese correo y contraseña para el nuevo administrador.', true);
        return;
    }
    if (admins.some(a => a.email.toLowerCase() === adminEmail)) {
        showMessage(document.getElementById('doctorLoginMsg'), 'Ya existe un administrador con ese correo.', true);
        return;
    }
    try { await apiCreateAdmin({ email: adminEmail, password: adminPassword }); }
    catch (e) { console.warn('API create admin fallo, guardando solo local:', e.message); }
    admins.push({ email: adminEmail, password: adminPassword, selectedAppointmentId: null });
    saveData();
    renderAdminList();
    showMessage(document.getElementById('doctorLoginMsg'), `Administrador ${adminEmail} agregado.`);
}

async function deleteAdmin(index) {
    if (index < 0 || index >= admins.length) return;
    if (!confirm('¿Eliminar este administrador?')) return;
    const removed = admins[index];
    try {
        // Buscar id real del admin en la API
        const apiAdmins = await apiGetAdmins();
        const apiAdmin = apiAdmins.find(a => a.email.toLowerCase() === removed.email.toLowerCase());
        if (apiAdmin) await apiDeleteAdmin(apiAdmin.id);
    } catch (e) { console.warn('API delete admin fallo:', e.message); }
    admins.splice(index, 1);
    saveData();
    if (removed.email === currentAdminEmail) {
        logoutAdmin();
    } else {
        renderAdminList();
    }
}

function showMessage(element, msg, isError = false) {
    if (!element) return;
    element.innerHTML = `<div class="inline-message ${isError ? 'error' : 'success'}">${msg}</div>`;
    setTimeout(() => {
        if (element) element.innerHTML = '';
    }, 1400);
}

function updatePatientSelect() {
    const select = document.getElementById('appPatientId');
    if (!select) return;
    select.innerHTML = '<option value="">-- Elige un paciente registrado --</option>';
    for (const patient of patients) {
        const option = document.createElement('option');
        option.value = patient.id;
        option.textContent = `${patient.id} - ${patient.name} (${patient.curp})`;
        select.appendChild(option);
    }
    // Auto-seleccionar médico cuando se elige un paciente
    select.addEventListener('change', () => {
        const patientId = Number.parseInt(select.value);
        if (!patientId) {
            document.getElementById('appDoctor').value = '';
            return;
        }
        // Asignar médico basándose en el ID del paciente (round-robin)
        const doctorIndex = (patientId - 1) % doctors.length;
        const doctorSelect = document.getElementById('appDoctor');
        if (doctorSelect) {
            doctorSelect.value = doctors[doctorIndex] ? getDoctorLabel(doctors[doctorIndex]) : '';
        }
    });
}

function updateDoctorSelect(filterDias) {
    const doctorSelect = document.getElementById('appDoctor');
    if (!doctorSelect) return;
    doctorSelect.innerHTML = '<option value="">-- Elige un médico --</option>';
    let filteredDoctors = doctors;
    // Filtrar por días de trabajo según la fecha seleccionada
    if (filterDias) {
        const date = new Date(filterDias);
        const day = date.getDay(); // 0=Domingo, 1=Lunes, ..., 6=Sábado
        // Lunes (1) a Viernes (5) = L-V, Domingo (0) y Sábado (6) = S-D
        const esDiaUtil = day >= 1 && day <= 5;
        filteredDoctors = doctors.filter(d => {
            if (!d.dias_trabaja) return true; // Si no tiene dato, mostrar todos
            if (esDiaUtil && d.dias_trabaja === 'L-V') return true;
            if (!esDiaUtil && d.dias_trabaja === 'S-D') return true;
            return false;
        });
    }
    for (const doctor of filteredDoctors) {
        const option = document.createElement('option');
        option.value = getDoctorLabel(doctor);
        option.textContent = `${doctor.name} (${doctor.area})`;
        doctorSelect.appendChild(option);
    }
}

function renderPatientList() {
    const list = document.getElementById('patientList');
    if (!list) return;
    list.innerHTML = '';
    if (patients.length === 0) {
        list.innerHTML = '<p class="info-text">No hay pacientes registrados.</p>';
        return;
    }
    for (const patient of patients) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-info">
                <p><strong>ID:</strong> ${patient.id}</p>
                <p><strong>Nombre:</strong> ${patient.name}</p>
                <p><strong>CURP:</strong> ${patient.curp}</p>
                <p><strong>Teléfono:</strong> ${patient.phone}</p>
                <p><strong>Email:</strong> ${patient.email || 'N/A'}</p>
            </div>
        `;
        list.appendChild(card);
    }
}

function renderAdminPatientList() {
    const list = document.getElementById('adminPatientList');
    if (!list) return;
    const searchInput = document.getElementById('patientSearch');
    const query = (searchInput?.value || '').trim().toLowerCase();
    const filteredPatients = patients.filter(patient => {
        if (!query) return true;
        const searchable = `${patient.id} ${patient.name} ${patient.curp || ''} ${patient.email || ''}`.toLowerCase();
        return searchable.includes(query);
    });

    list.innerHTML = '';
    if (filteredPatients.length === 0) {
        list.innerHTML = '<p class="info-text">No hay pacientes que coincidan con la búsqueda.</p>';
        return;
    }
    for (const patient of filteredPatients) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-info">
                <p><strong>ID:</strong> ${patient.id}</p>
                <p><strong>Nombre:</strong> ${patient.name}</p>
                <p><strong>CURP:</strong> ${patient.curp}</p>
                <p><strong>Teléfono:</strong> ${patient.phone}</p>
                <p><strong>Email:</strong> ${patient.email || 'N/A'}</p>
            </div>
            <div class="card-actions">
                <button class="edit-patient-btn" data-id="${patient.id}">Editar</button>
                <button class="delete-patient-btn btn-danger" data-id="${patient.id}"><i class="fas fa-trash"></i> Eliminar</button>
            </div>
        `;
        list.appendChild(card);
    }
    for (const btn of list.querySelectorAll('.edit-patient-btn')) {
        btn.addEventListener('click', () => editPatient(Number.parseInt(btn.dataset.id)));
    }
    for (const btn of list.querySelectorAll('.delete-patient-btn')) {
        btn.addEventListener('click', () => deletePatient(Number.parseInt(btn.dataset.id)));
    }
}

function renderDoctorList() {
    const list = document.getElementById('doctorList');
    if (!list) return;
    const searchInput = document.getElementById('doctorSearch');
    const query = (searchInput?.value || '').trim().toLowerCase();
    const filteredDoctors = doctors.filter(doctor => {
        if (!query) return true;
        const searchable = `${doctor.name} ${doctor.area}`.toLowerCase();
        return searchable.includes(query);
    });

    list.innerHTML = '';
    if (filteredDoctors.length === 0) {
        list.innerHTML = '<p class="info-text">No hay médicos que coincidan con la búsqueda.</p>';
        return;
    }
    for (const [index, doctor] of filteredDoctors.entries()) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-info">
                <p><strong>Nombre:</strong> ${doctor.name}</p>
                <p><strong>Área:</strong> ${doctor.area}</p>
                <p><strong>Correo:</strong> ${doctor.email || 'Sin correo'}</p>
            </div>
            <div class="card-actions">
                <button class="edit-doctor-btn" data-index="${index}">Editar</button>
                <button class="delete-doctor-btn btn-danger" data-index="${index}"><i class="fas fa-trash"></i> Eliminar</button>
            </div>
        `;
        list.appendChild(card);
    }
    for (const btn of list.querySelectorAll('.edit-doctor-btn')) {
        btn.addEventListener('click', () => editDoctor(Number.parseInt(btn.dataset.index)));
    }
    for (const btn of list.querySelectorAll('.delete-doctor-btn')) {
        btn.addEventListener('click', () => deleteDoctor(Number.parseInt(btn.dataset.index)));
    }
}

function renderDoctorAgenda() {
    const container = document.getElementById('doctorAgendaList');
    if (!container) return;

    const persistedAppointments = readStoredData('hospital_appointments', []);
    if (Array.isArray(appointments) && appointments.length === 0 && Array.isArray(persistedAppointments) && persistedAppointments.length > 0) {
        appointments = persistedAppointments;
    }

    const persistedPatients = readStoredData('hospital_patients', []);
    if (Array.isArray(patients) && patients.length === 0 && Array.isArray(persistedPatients) && persistedPatients.length > 0) {
        patients = persistedPatients.map(normalizePatientRecord);
    }

    const searchInput = document.getElementById('doctorAgendaSearch');
    const query = (searchInput?.value || '').trim().toLowerCase();
    const filteredAppointments = appointments.filter(app => {
        if (!query) return true;
        const patient = patients.find(p => p.id === app.patientId);
        const searchable = `${app.id} ${patient ? patient.name : ''} ${app.doctor || ''} ${app.date || ''} ${app.time || ''}`.toLowerCase();
        return searchable.includes(query);
    });

    container.innerHTML = '';

    if (filteredAppointments.length === 0) {
        container.innerHTML = '<p class="info-text">No hay citas que coincidan con la búsqueda.</p>';
        return;
    }

    const grouped = {};
    for (const app of filteredAppointments) {
        const doctorKey = app.doctor || 'Médico sin asignar';
        if (!grouped[doctorKey]) grouped[doctorKey] = [];
        grouped[doctorKey].push(app);
    }

    const doctorNames = Object.keys(grouped).sort((a,b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
    for (const doctor of doctorNames) {
        const section = document.createElement('div');
        section.className = 'card';
        section.innerHTML = `<h3 class="mb-10">${doctor}</h3>`;
        const apps = grouped[doctor].sort((a,b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
        const html = apps.map(app => {
            const patient = patients.find(p => p.id === app.patientId);
            return `
                <div class="divider-line">
                    <p><strong>${patient ? patient.name : 'Paciente perdido'}</strong> | ID Paciente: ${app.patientId} | Cita: ${app.id} | Fecha: ${app.date} | Hora: ${app.time} | Estado: ${app.status}</p>
                    <p>Motivo: ${app.reason}</p>
                </div>
            `;
        }).join('');
        section.innerHTML += html;
        container.appendChild(section);
    }
}

function editPatient(id) {
    if (!requireAdminAuth()) return;
    const patient = patients.find(p => p.id === id);
    if (!patient) return;

    // Llenar datos en los steps
    document.getElementById('editPatientId').value = patient.id;
    document.getElementById('editPatName').value = patient.name;
    document.getElementById('editPatCurp').value = patient.curp;
    document.getElementById('editPatDob').value = patient.dob;
    document.getElementById('editPatGender').value = patient.gender;
    document.getElementById('editPatPhone').value = patient.phone;
    document.getElementById('editPatEmail').value = patient.email;
    document.getElementById('editPatAddress').value = patient.address;
    // Cargar estados en el select de edición
    const editStateSelect = document.getElementById('editPatState');
    editStateSelect.innerHTML = '<option value="">Seleccione un estado</option>';
    const estados = Object.keys(mexicoData).sort((a,b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
    for (const estado of estados) {
        const option = document.createElement('option');
        option.value = estado;
        option.textContent = estado;
        editStateSelect.appendChild(option);
    }
    
    // Seleccionar el estado del paciente con fallback
    let stateValue = '';
    const targetState = patient.state || '';
    for (let i = 0; i < editStateSelect.options.length; i++) {
        if (editStateSelect.options[i].value === targetState) {
            editStateSelect.selectedIndex = i;
            stateValue = editStateSelect.options[i].value;
            break;
        }
    }
    // Try case-insensitive match if exact match failed
    if (!stateValue && targetState) {
        for (let i = 0; i < editStateSelect.options.length; i++) {
            if (editStateSelect.options[i].value.toLowerCase() === targetState.toLowerCase()) {
                editStateSelect.selectedIndex = i;
                stateValue = editStateSelect.options[i].value;
                break;
            }
        }
    }
    // Ensure stateValue has a valid value
    // If no match found, use the first available state in the select
    if (!stateValue) {
        // Try to get the first option with a value (not the empty default)
        for (let i = 0; i < editStateSelect.options.length; i++) {
            if (editStateSelect.options[i].value !== '') {
                stateValue = editStateSelect.options[i].value;
                editStateSelect.selectedIndex = i;
                break;
            }
        }
    }
    
    // Cargar municipios después de seleccionar estado
    loadEditMunicipios(stateValue);
    
    // Pequeño delay para asegurar que el select de municipios se haya poblado
    setTimeout(() => {
        // Seleccionar el municipio del paciente si está en el select
        const citySelect = document.getElementById('editPatCity');
        const targetCity = patient.city || '';
        if (citySelect) {
            for (let i = 0; i < citySelect.options.length; i++) {
                if (citySelect.options[i].value === targetCity) {
                    citySelect.selectedIndex = i;
                    break;
                }
            }
        }
        // Cargar localidades después de seleccionar municipio
        const populationSelect = document.getElementById('editPatPopulation');
        loadEditLocalidades(stateValue, targetCity);
        
        // Establecer el valor de población después de que el select sea poblado
        if (populationSelect && patient.population) {
            populationSelect.value = patient.population;
        }
    }, 50);
    document.getElementById('editPatZipCode').value = patient.zipCode;
    document.getElementById('editPatBloodType').value = patient.bloodType;

    // Mostrar paso 1
    showStep(1);

    // Mostrar el modal
    document.getElementById('patientEditModal').style.display = 'block';

    // Evitar que se llene el formulario de registrar paciente
    editingPatientId = id;
    document.getElementById('patientMsg').innerHTML = '';
}

// Mostrar paso específico del wizard
function showStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > 3) return;
    const steps = [1, 2, 3];
    const activeStep = steps[stepNumber - 1];
    
    // Ocultar todos los panels
    document.querySelectorAll('.step-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Mostrar el panel activo
    document.getElementById(`step-${activeStep}`).classList.add('active');
    
    // Actualizar botones de navegación
    const step1Btn = document.getElementById('stepNext1');
    const step2Btn = document.getElementById('stepNext2');
    const stepPrev1 = document.getElementById('stepPrev1');
    const stepPrev2 = document.getElementById('stepPrev2');
    const stepPrev3 = document.getElementById('stepPrev3');
    const stepFinish = document.getElementById('stepFinish');
    
    step1Btn.style.display = 'none';
    step2Btn.style.display = 'none';
    stepPrev1.style.display = 'none';
    stepPrev2.style.display = 'none';
    stepPrev3.style.display = 'none';
    stepFinish.style.display = 'none';
    
    if (activeStep === 1) {
        step1Btn.style.display = 'inline-block';
        stepPrev1.style.display = 'none';
    } else if (activeStep === 2) {
        stepPrev1.style.display = 'inline-block';
        step1Btn.style.display = 'inline-block';
        step2Btn.style.display = 'inline-block';
    } else if (activeStep === 3) {
        stepPrev2.style.display = 'inline-block';
        stepFinish.style.display = 'inline-block';
    }
}

// Navegar siguiente paso
document.getElementById('stepNext1').addEventListener('click', () => {
    // Validar paso 1 antes de avanzar
    const name = document.getElementById('editPatName').value.trim();
    const curp = document.getElementById('editPatCurp').value.trim();
    const gender = document.getElementById('editPatGender').value;
    
    if (!name || !curp || !gender) {
        showMessage(document.getElementById('patientMsg'), 'Por favor complete los campos obligatorios del paso 1.', true);
        return;
    }
    
    // VALIDATION: Ensure state is selected
    const state = document.getElementById('editPatState').value;
    if (!state) {
        showMessage(document.getElementById('patientMsg'), 'Por favor seleccione un estado.', true);
        return;
    }
    
    // Note: municipios ya fueron cargados en editPatient, no es necesario cargarlos nuevamente
    // Cargar municipios después de nombre/género (solo si no estaban cargados)
    if (document.getElementById('editPatCity').options.length === 0) {
        loadEditMunicipios(state);
    }
    
    showStep(2);
});

document.getElementById('stepNext2').addEventListener('click', () => {
    const city = document.getElementById('editPatCity').value;
    const population = document.getElementById('editPatPopulation').value;
    
    if (!city || !population || city === '' || population === '') {
        showMessage(document.getElementById('patientMsg'), 'Por favor seleccione municipio y localidad.', true);
        return;
    }
    
    showStep(3);
    
    // Mostrar resumen de datos
    previewPatientData();
});

// Anterior paso
document.getElementById('stepPrev1').addEventListener('click', () => {
    // No hay anterior para paso 1
});

document.getElementById('stepPrev2').addEventListener('click', () => {
    showStep(1);
});

// Cerrar modal
document.querySelector('.modal-close').addEventListener('click', () => {
    document.getElementById('patientEditModal').style.display = 'none';
    document.getElementById('patientEditForm').reset();
    editingPatientId = null;
});
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('patientEditModal')) {
        document.getElementById('patientEditModal').style.display = 'none';
        document.getElementById('patientEditForm').reset();
        editingPatientId = null;
    }
});

// Manejar el envío final del formulario
document.getElementById('patientEditForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!requireAdminAuth()) return;

    const id = document.getElementById('editPatientId').value;
    const formData = {
        nombre: document.getElementById('editPatName').value.trim(),
        curp: document.getElementById('editPatCurp').value.trim().toUpperCase(),
        fecha_nacimiento: document.getElementById('editPatDob').value,
        genero: document.getElementById('editPatGender').value || '',
        telefono: document.getElementById('editPatPhone').value.trim(),
        email: document.getElementById('editPatEmail').value.trim(),
        direccion: document.getElementById('editPatAddress').value.trim(),
        estado: document.getElementById('editPatState').value || '',
        municipio: document.getElementById('editPatCity').value || '',
        localidad: document.getElementById('editPatPopulation').value || '',
        codigo_postal: document.getElementById('editPatZipCode').value.trim(),
        blood_type: document.getElementById('editPatBloodType').value || ''
    };

    try {
        const result = await apiUpdatePaciente(id, formData);
        // Actualizar la lista local
        const index = patients.findIndex(p => p.id === Number(id));
        if (index !== -1) {
            patients[index] = { ...patients[index], ...mapPacienteFromApi(result) };
            saveData();
        }
        renderAdminPatientList();
        renderPatientList();
        document.getElementById('patientEditModal').style.display = 'none';
        showMessage(document.getElementById('patientMsg'), 'Paciente actualizado correctamente.');
    } catch (err) {
        showMessage(document.getElementById('patientMsg'), 'Error al actualizar el paciente: ' + err.message, true);
    }
});
 // Manejar clic en botón Guardar cambios (el botón está fuera del formulario)
document.getElementById('stepFinish').addEventListener('click', () => {
    document.getElementById('patientEditForm').dispatchEvent(new Event('submit'));
});

// Mostrar resumen en el paso 3
function previewPatientData() {
    const preview = document.getElementById('preview-data');
    const patientId = document.getElementById('editPatientId').value;
    
    if (!patientId) {
        showMessage(document.getElementById('patientMsg'), 'ID de paciente inválido.', true);
        preview.innerHTML = '';
        return;
    }
    
    const patient = patients.find(p => p.id === Number(patientId));
    
    if (!patient) return;
    
    preview.innerHTML = `
        <p><strong>Nombre:</strong> ${patient.name}</p>
        <p><strong>CURP:</strong> ${patient.curp}</p>
        <p><strong>Teléfono:</strong> ${patient.phone}</p>
        <p><strong>Email:</strong> ${patient.email || 'N/A'}</p>
        <p><strong>Domicilio:</strong> ${patient.address}</p>
        <p><strong>Estado:</strong> ${patient.state}</p>
        <p><strong>Municipio:</strong> ${patient.city}</p>
        <p><strong>Localidad:</strong> ${patient.population}</p>
        <p><strong>Código Postal:</strong> ${patient.zipCode}</p>
        <p><strong>Tipo de Sangre:</strong> ${patient.bloodType}</p>
    `;
}

async function deletePatient(id) {
    if (!requireAdminAuth()) {
        showMessage(document.getElementById('patientMsg'), 'Debe iniciar sesión como administrador para eliminar pacientes.', true);
        return;
    }
    if (!confirm('⚠️ ¿Eliminar paciente y todas sus citas médicas?')) return;
    // 1. Eliminar de la base de datos MySQL (patrón idéntico al de citas médicas)
    let apiOk = false;
    try {
        await apiDeletePaciente(id);
        apiOk = true;
    } catch (e) {
        console.warn('API eliminar paciente falló, se eliminará localmente:', e.message);
    }
    // 2. Eliminar de la lista local de pacientes
    const patientIndex = patients.findIndex(p => p.id === id);
    if (patientIndex !== -1) patients.splice(patientIndex, 1);
    // 3. Eliminar citas asociadas localmente (mismo patrón que deleteAppointment)
    appointments = appointments.filter(app => app.patientId !== id);
    // 4. Guardar todos los cambios en localStorage y IndexedDB
    saveData();
    // 5. Limpiar selección de citas si corresponde
    for (const remApp of appointments) {
        if (remApp.patientId === id) {
            clearSelectedAppointmentIfMatchesId(remApp.id);
        }
    }
    // 6. Actualizar todas las vistas inmediatamente
    updatePatientSelect();
    renderPatientList();
    renderAdminPatientList();
    renderAgenda();
    renderDoctorAgenda();
    showMessage(document.getElementById('patientMsg'), apiOk ? 'Paciente eliminado correctamente del servidor y localmente.' : 'Paciente eliminado localmente (servidor no disponible).');
}

async function addDoctor(name, area, email, password) {
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
    const newDias = document.getElementById('newDoctorDias')?.value || 'L-V';
    const newEntrada = document.getElementById('newDoctorEntrada')?.value || '08:00';
    const newSalida = document.getElementById('newDoctorSalida')?.value || '18:00';
    const newDoctor = { id: nextDoctorId, name, area, email: emailNormalized, password, phone: '', dias_trabaja: newDias, hora_entrada: newEntrada, hora_salida: newSalida };
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

function editDoctor(index) {
    if (!requireAdminAuth()) return;
    const doctor = doctors[index];
    const originalName = doctor.name;
    const originalArea = doctor.area;
    const originalDias = doctor.dias_trabaja || 'L-V';
    const originalEntrada = doctor.hora_entrada || '08:00';
    const originalSalida = doctor.hora_salida || '18:00';
    const newName = prompt('Editar nombre de médico:', originalName);
    const newArea = prompt('Editar área del médico:', originalArea);
    const newDias = prompt('Editar días de trabajo (L-V o S-D):', originalDias);
    const newEntrada = prompt('Editar hora de entrada (HH:MM):', originalEntrada);
    const newSalida = prompt('Editar hora de salida (HH:MM):', originalSalida);
    if (!newName || !newArea || !newDias || !newEntrada || !newSalida) return;
    if (newDias !== 'L-V' && newDias !== 'S-D') {
        alert('Los días deben ser L-V o S-D');
        return;
    }
    if (!/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(newEntrada) || !/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(newSalida)) {
        alert('Las horas deben tener formato HH:MM');
        return;
    }
    doctor.name = newName;
    doctor.area = newArea;
    doctor.dias_trabaja = newDias;
    doctor.hora_entrada = newEntrada;
    doctor.hora_salida = newSalida;
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

async function deleteDoctor(index) {
    if (!requireAdminAuth()) return;
    const doctor = doctors[index];
    if (!doctor) return;
    if (!confirm(`⚠️ Eliminar al médico ${doctor.name} (${doctor.area})?`)) return;
    if (doctor.id) {
        try { await apiDeleteMedico(doctor.id); } catch (e) { console.warn('API delete medico fallo:', e.message); }
    }
    doctors.splice(index, 1);
    saveData();
    renderDoctorList();
    renderDoctorAgenda();
    updateDoctorSelect();
}

function sanitizeSheetName(name) {
    return name.replace(/[\\\/:*?\[\]|]/g, '_').substring(0, 31);
}

function escapeXml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function escapeCsv(value) {
    const str = String(value != null ? value : '');
    if (/[",\r\n]/.test(str)) {
        return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
}

async function downloadDoctorAgendaExcel() {
    const storedAppointments = readStoredData('hospital_appointments', []);
    const storedPatients = readStoredData('hospital_patients', []);
    const appointmentSource = Array.isArray(appointments) && appointments.length > 0 ? appointments : storedAppointments;
    const patientSource = Array.isArray(patients) && patients.length > 0 ? patients : storedPatients.map(normalizePatientRecord);

    if (!Array.isArray(appointmentSource) || appointmentSource.length === 0) {
        alert('No hay citas registradas para exportar.');
        return;
    }

    if (typeof ExcelJS === 'undefined') {
        alert('No se cargó la librería de Excel. Verifique su conexión a internet.');
        return;
    }

    // Agrupar citas por médico
    const grouped = {};
    for (const app of appointmentSource) {
        const doctorKey = app.doctor || 'Médico';
        if (!grouped[doctorKey]) grouped[doctorKey] = [];
        grouped[doctorKey].push(app);
    }
    const doctorsList = Object.keys(grouped).sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

    const headerCols = ['ID Cita', 'Paciente', 'ID Paciente', 'Fecha', 'Hora', 'Motivo', 'Estado'];
    const today = new Date();
    const fechaGen = today.toLocaleDateString('es-MX', { day: '2-digit', month: 'long', year: 'numeric' });
    const horaGen = today.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Hospital General Rosamorada';
    workbook.created = today;
    workbook.modified = today;
    const ws = workbook.addWorksheet('Agenda por Médico', {
        views: [{ state: 'frozen', ySplit: 4, xSplit: 0, activeCell: 'A5' }],
        properties: { defaultRowHeight: 18 }
    });

    ws.columns = [
        { width: 10 }, { width: 32 }, { width: 12 }, { width: 14 }, { width: 10 }, { width: 40 }, { width: 14 }
    ];

    // Estilos reutilizables
    const hospitalBlue = '0B4F8C';
    const hospitalBlueDark = '073561';
    const lightBlue = 'D6E4F0';
    const groupFill = '1F6FB2';
    const statusColors = {
        'Confirmada': '2E7D32',
        'Pendiente': 'F9A825',
        'Cancelada': 'C62828'
    };

    // Fila 1: Título
    ws.mergeCells('A1:G1');
    const titleCell = ws.getCell('A1');
    titleCell.value = 'Lista de citas ordenada por médico';
    titleCell.font = { name: 'Calibri', size: 18, bold: true, color: { argb: 'FFFFFF' } };
    titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
    titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: hospitalBlueDark } };
    ws.getRow(1).height = 30;

    // Fila 2: Subtítulo hospital
    ws.mergeCells('A2:G2');
    const subCell = ws.getCell('A2');
    subCell.value = 'Hospital General Rosamorada, Nayarit';
    subCell.font = { name: 'Calibri', size: 11, italic: true, color: { argb: 'FFFFFF' } };
    subCell.alignment = { horizontal: 'center', vertical: 'middle' };
    subCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: hospitalBlue } };
    ws.getRow(2).height = 20;

    // Fila 3: Fecha de generación
    ws.mergeCells('A3:G3');
    const genCell = ws.getCell('A3');
    genCell.value = `Reporte generado el ${fechaGen} a las ${horaGen}`;
    genCell.font = { name: 'Calibri', size: 10, color: { argb: '555555' } };
    genCell.alignment = { horizontal: 'center', vertical: 'middle' };
    genCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F2F6FA' } };
    ws.getRow(3).height = 18;

    // Fila 4 (encabezado de tabla)
    const headerRow = ws.getRow(4);
    headerRow.height = 24;
    for (let i = 0; i < headerCols.length; i++) {
        const cell = headerRow.getCell(i + 1);
        cell.value = headerCols[i];
        cell.font = { name: 'Calibri', size: 11, bold: true, color: { argb: 'FFFFFF' } };
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: hospitalBlue } };
        cell.border = {
            top: { style: 'thin', color: { argb: '073561' } },
            bottom: { style: 'medium', color: { argb: '073561' } },
            left: { style: 'thin', color: { argb: '073561' } },
            right: { style: 'thin', color: { argb: '073561' } }
        };
    }

    const thinBorder = {
        top: { style: 'thin', color: { argb: 'BFBFBF' } },
        bottom: { style: 'thin', color: { argb: 'BFBFBF' } },
        left: { style: 'thin', color: { argb: 'BFBFBF' } },
        right: { style: 'thin', color: { argb: 'BFBFBF' } }
    };

    let currentRow = 5;
    let doctorIndex = 0;

    for (const doctor of doctorsList) {
        const appointmentsForDoctor = grouped[doctor]
            .slice()
            .sort((a, b) => {
                const dateA = new Date(`${a.date} ${a.time}`);
                const dateB = new Date(`${b.date} ${b.time}`);
                return dateA - dateB;
            });

        // Fila separadora del médico
        ws.mergeCells(currentRow, 1, currentRow, 7);
        const docCell = ws.getCell(currentRow, 1);
        docCell.value = `MÉDICO: ${doctor}   (${appointmentsForDoctor.length} ${appointmentsForDoctor.length === 1 ? 'cita' : 'citas'})`;
        docCell.font = { name: 'Calibri', size: 12, bold: true, color: { argb: 'FFFFFF' } };
        docCell.alignment = { horizontal: 'left', vertical: 'middle', indent: 1 };
        docCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: groupFill } };
        ws.getRow(currentRow).height = 22;
        currentRow++;

        // Filas de citas
        appointmentsForDoctor.forEach((app, idx) => {
            const patient = patientSource.find(p => p.id === app.patientId);
            const patientName = patient ? patient.name : 'Paciente no encontrado';
            const reason = (app.reason || '').trim() || '—';
            const row = ws.getRow(currentRow);
            const isEven = idx % 2 === 1;
            const rowFill = isEven ? 'F2F6FA' : 'FFFFFF';
            const values = [app.id, patientName, app.patientId, app.date, app.time, reason, app.status];

            for (let c = 1; c <= 7; c++) {
                const cell = row.getCell(c);
                cell.value = values[c - 1];
                cell.border = thinBorder;
                cell.font = { name: 'Calibri', size: 10, color: { argb: '000000' } };
                cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: rowFill } };
                cell.alignment = {
                    horizontal: (c === 2 || c === 6) ? 'left' : 'center',
                    vertical: 'middle',
                    wrapText: c === 6
                };
            }
            // Color del estado
            const statusColor = statusColors[app.status];
            const statusCell = row.getCell(7);
            if (statusColor) {
                statusCell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: statusColor } };
            }
            row.height = 20;
            row.commit();
            currentRow++;
        });

        doctorIndex++;
    }

    // Autofiltro desde el header (fila 4) hasta el final
    ws.autoFilter = { from: { row: 4, column: 1 }, to: { row: currentRow - 1, column: 7 } };

    // Pie con total de citas
    ws.mergeCells(currentRow, 1, currentRow, 7);
    const footCell = ws.getCell(currentRow, 1);
    const totalCitas = appointmentSource.length;
    footCell.value = `Total de citas: ${totalCitas}   |   Médicos: ${doctorsList.length}`;
    footCell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: 'FFFFFF' } };
    footCell.alignment = { horizontal: 'center', vertical: 'middle' };
    footCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: hospitalBlueDark } };
    ws.getRow(currentRow).height = 20;

    // Propiedades del libro
    ws.headerFooter.oddHeader = '&L&GHospital General Rosamorada&C&GLista de citas por médico&R&G' + fechaGen;
    ws.headerFooter.oddFooter = '&CPage &P de &N';

    try {
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Agenda_de_Citas.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (err) {
        console.error('Error al generar Excel:', err);
        alert('Ocurrió un error al generar el archivo Excel.');
    }
}

// ========== 4. FUNCIONES GEOGRÁFICAS ==========

// ========== 4. FUNCIONES GEOGRÁFICAS ==========
function loadStates() {
    const stateSelect = document.getElementById('patState');
    if (!stateSelect) return;
    
    stateSelect.innerHTML = '<option value="">Seleccione un estado</option>';
    const estados = Object.keys(mexicoData).sort((a,b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
    for (const estado of estados) {
        const option = document.createElement('option');
        option.value = estado;
        option.textContent = estado;
        stateSelect.appendChild(option);
    }
}

function loadMunicipios(estado) {
    const citySelect = document.getElementById('patCity');
    const populationSelect = document.getElementById('patPopulation');
    
    if (!estado || !mexicoData[estado]) {
        citySelect.innerHTML = '<option value="">Primero seleccione un estado</option>';
        populationSelect.innerHTML = '<option value="">Primero seleccione un municipio</option>';
        citySelect.disabled = true;
        populationSelect.disabled = true;
        return;
    }
    
    citySelect.disabled = false;
    citySelect.innerHTML = '<option value="">Seleccione un municipio</option>';
    
    const municipios = Object.keys(mexicoData[estado].municipios).sort((a,b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
    for (const municipio of municipios) {
        const option = document.createElement('option');
        option.value = municipio;
        option.textContent = municipio;
        citySelect.appendChild(option);
    }
    
    populationSelect.innerHTML = '<option value="">Primero seleccione un municipio</option>';
    populationSelect.disabled = true;
}

function loadLocalidades(estado, municipio) {
    const populationSelect = document.getElementById('patPopulation');
    
    if (!estado || !municipio || !mexicoData[estado]?.municipios[municipio]) {
        populationSelect.innerHTML = '<option value="">Primero seleccione un municipio</option>';
        populationSelect.disabled = true;
        return;
    }
    
    populationSelect.disabled = false;
    populationSelect.innerHTML = '<option value="">Seleccione una localidad</option>';
    
    const localidades = mexicoData[estado].municipios[municipio];
    for (const localidad of localidades) {
        const option = document.createElement('option');
        option.value = localidad;
        option.textContent = localidad;
        populationSelect.appendChild(option);
    }
}

function loadEditMunicipios(estado) {
    const citySelect = document.getElementById('editPatCity');
    const populationSelect = document.getElementById('editPatPopulation');
    
    if (!estado || !mexicoData[estado]) {
        citySelect.innerHTML = '<option value="">Primero seleccione un estado</option>';
        populationSelect.innerHTML = '<option value="">Primero seleccione un municipio</option>';
        citySelect.disabled = true;
        populationSelect.disabled = true;
        return;
    }
    
    citySelect.disabled = false;
    citySelect.innerHTML = '<option value="">Seleccione un municipio</option>';
    
    const normalizedEstado = estado.trim();
    const normalizedKeys = Object.keys(mexicoData[estado].municipios).map(k => k.trim());
    
    // Build the municipalities list (display sorted, but keep original keys)
    const municipios = Object.keys(mexicoData[estado].municipios).sort((a,b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
    for (const municipio of municipios) {
        const option = document.createElement('option');
        option.value = municipio;
        option.textContent = municipio;
        citySelect.appendChild(option);
    }
    
    populationSelect.innerHTML = '<option value="">Primero seleccione un municipio</option>';
    populationSelect.disabled = true;
}

function loadEditLocalidades(estado, municipio) {
    const populationSelect = document.getElementById('editPatPopulation');
    
    if (!estado || !municipio) {
        populationSelect.innerHTML = '<option value="">Primero seleccione un municipio</option>';
        populationSelect.disabled = true;
        return;
    }
    
    // Normalizar: quitar espacios y poner minúsculas para matching
    const normalizedMunicipio = municipio.trim();
    const normalizedKeys = Object.keys(mexicoData[estado]?.municipios || {}).map(k => k.trim());
    
    // Buscar match exacto o caso-insensitive en las keys
    let foundMunicipio = null;
    for (const key of normalizedKeys) {
        if (key.toLowerCase() === normalizedMunicipio.toLowerCase()) {
            foundMunicipio = key;
            break;
        }
    }
    
    // Si no encuentra el municipality en mexicoData, intentar con cualquier municipality que tenga localidades
    if (!foundMunicipio) {
        for (const [key, value] of Object.entries(mexicoData[estado]?.municipios || {})) {
            if (value && value.length > 0) {
                foundMunicipio = key;
                break;
            }
        }
    }
    
    if (!foundMunicipio || !mexicoData[estado]?.municipios[foundMunicipio]) {
        // Fallback: aviso en lugar de leave vacío
        populationSelect.innerHTML = '<option value="">No hay datos de localidad disponibles</option>';
        populationSelect.disabled = true;
        console.log('Localidades no disponibles para municipality:', municipio, 'en estado:', estado);
        return;
    }
    
    populationSelect.disabled = false;
    populationSelect.innerHTML = '<option value="">Seleccione una localidad</option>';
    
    const localidades = mexicoData[estado].municipios[foundMunicipio];
    if (!localidades || localidades.length === 0) {
        populationSelect.innerHTML = '<option value="">No hay localidades registradas</option>';
        populationSelect.disabled = true;
        return;
    }
    
    for (const localidad of localidades) {
        const option = document.createElement('option');
        option.value = localidad;
        option.textContent = localidad;
        populationSelect.appendChild(option);
    }
}

// ========== 5. FUNCIONES DE AGENDA Y CITAS ==========
function renderAgenda(filterDate = null) {
    const agendaDiv = document.getElementById('agendaList');
    if (!agendaDiv) return;
    const searchInput = document.getElementById('agendaSearch');
    const query = (searchInput?.value || '').trim().toLowerCase();

    let filteredApps = [...appointments];
    if (filterDate) {
        filteredApps = filteredApps.filter(app => app.date === filterDate);
    }
    if (query) {
        filteredApps = filteredApps.filter(app => {
            const patient = patients.find(p => p.id === app.patientId);
            const searchable = `${app.id} ${patient ? patient.name : ''} ${app.doctor || ''} ${app.date || ''} ${app.time || ''}`.toLowerCase();
            return searchable.includes(query);
        });
    }

    if (filteredApps.length === 0) {
        agendaDiv.innerHTML = '<p class="info-text">No hay citas que coincidan con la búsqueda.</p>';
        return;
    }

    agendaDiv.innerHTML = '';
    filteredApps.sort((a,b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
    
    for (const app of filteredApps) {
        const patient = patients.find(p => p.id === app.patientId);
        const patientName = patient ? patient.name : 'Paciente no encontrado';
        
        const isSelected = getSelectedAppointmentForCurrentUser() === String(app.id);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-info">
                <p><strong>ID Cita:</strong> ${app.id}</p>
                <p><strong>Paciente:</strong> ${patientName}</p>
                <p><strong>Médico:</strong> ${app.doctor}</p>
                <p><strong>Fecha:</strong> ${app.date} | <strong>Hora:</strong> ${app.time}</p>
                <p><strong>Motivo:</strong> ${app.reason}</p>
                <p><strong>Estado:</strong> ${app.status}</p>
            </div>
            <div class="card-actions">
                ${app.status === 'Agendada' ? `<button class="reschedule-btn" data-id="${app.id}" data-action="reschedule">Reagendar</button>` : ''}
                ${app.status !== 'Cancelada' ? `<button data-id="${app.id}" data-action="cancel" class="btn-warning">Cancelar</button>` : ''}
                <button class="select-appointment-btn btn-secondary" data-id="${app.id}">${isSelected ? 'Desmarcar' : 'Marcar'}</button>
                <button data-id="${app.id}" data-action="delete" class="btn-danger"><i class="fas fa-trash"></i> Eliminar</button>
            </div>
        `;
        // permitir clic en la tarjeta para autocompletar el campo QR
        card.dataset.id = app.id;
        for (const button of card.querySelectorAll('button')) {
            button.addEventListener('click', (e) => e.stopPropagation());
        }
        card.addEventListener('click', () => {
            // Quitar selección de otras tarjetas
            const others = agendaDiv.querySelectorAll('.card.selected');
            for (const o of others) o.classList.remove('selected');

            // Marcar esta tarjeta
            card.classList.add('selected');
            // Persistir selección
            setSelectedAppointmentForCurrentUser(app.id);

            const input = document.getElementById('qrAppointmentId');
            const select = document.getElementById('qrAppointmentSelect');
            if (input) input.value = app.id;
            if (select) select.value = String(app.id);
            // Abrir la pestaña QR si existe
            const qrTabBtn = document.querySelector('.tab-btn[data-tab="qr"]');
            if (qrTabBtn) qrTabBtn.click();
            // Generar QR automáticamente al hacer click
            try {
                generateQR();
            } catch (err) {
                console.error('Error auto-generando QR:', err);
            }
        });
        agendaDiv.appendChild(card);
    }

    // Eventos para botones
    for (const btn of document.querySelectorAll('[data-action="cancel"]')) {
        btn.addEventListener('click', (e) => {
            const id = Number.parseInt(btn.dataset.id);
            cancelAppointment(id);
        });
    }
    for (const btn of document.querySelectorAll('[data-action="reschedule"]')) {
        btn.addEventListener('click', (e) => {
            const id = Number.parseInt(btn.dataset.id);
            rescheduleAppointment(id);
        });
    }
    // NUEVO: Evento para Eliminar
    for (const btn of document.querySelectorAll('[data-action="delete"]')) {
        btn.addEventListener('click', (e) => {
            const id = Number.parseInt(btn.dataset.id);
            deleteAppointment(id);
        });
    }
    // Evento para Marcar/Desmarcar cita
    for (const btn of document.querySelectorAll('.select-appointment-btn')) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = Number.parseInt(btn.dataset.id);
            const currentSel = getSelectedAppointmentForCurrentUser();
            if (currentSel && Number.parseInt(currentSel,10) === id) {
                // desmarcar
                clearSelectedAppointmentForCurrentUser();
                applySelectionToCards();
            } else {
                // marcar y generar QR automáticamente (sin abrir la pestaña)
                setSelectedAppointmentForCurrentUser(id);
                applySelectionToCards();
                const input = document.getElementById('qrAppointmentId');
                const select = document.getElementById('qrAppointmentSelect');
                if (input) input.value = id;
                if (select) select.value = String(id);
                try {
                    generateQR();
                    const qrMsgDiv = document.getElementById('qrMsg');
                    // generateQR() already shows a message with download link, no duplicate needed
                } catch (err) {
                    console.error('Error generando QR desde botón Marcar:', err);
                }
            }
        });
    }
    // Restaurar selección previa si existe
    try {
        const selId = getSelectedAppointmentForCurrentUser();
        if (selId) {
            const numId = Number.parseInt(selId, 10);
            for (const c of agendaDiv.querySelectorAll('.card')) {
                if (Number.parseInt(c.dataset.id, 10) === numId) {
                    c.classList.add('selected');
                    break;
                }
            }
        }
    } catch (e) { /* ignore */ }
    // Actualizar select de QR después de renderizar agenda
    if (typeof populateQrSelect === 'function') populateQrSelect();
}

function populateQrSelect() {
    const sel = document.getElementById('qrAppointmentSelect');
    if (!sel) return;
    // conservar selección previa
    const prev = sel.value;
    sel.innerHTML = '<option value="">-- Seleccione una cita --</option>';
    const upcoming = appointments.slice().sort((a,b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
    for (const app of upcoming) {
        const patient = patients.find(p => p.id === app.patientId);
        const text = `#${app.id} | ${app.date} ${app.time} | ${patient ? patient.name : 'Paciente desconocido'} | ${app.doctor}`;
        const opt = document.createElement('option');
        opt.value = String(app.id);
        opt.textContent = text;
        sel.appendChild(opt);
    }
    if (prev) sel.value = prev;
}

function cancelAppointment(id) {
    if (confirm('¿Cancelar esta cita médica?')) {
        const index = appointments.findIndex(a => a.id === id);
        if (index !== -1) {
            appointments[index].status = 'Cancelada';
            saveData();
            renderAgenda(document.getElementById('filterDate')?.value);
            renderDoctorAgenda();
            showMessage(document.getElementById('appMsg'), 'Cita cancelada correctamente.');
        }
    }
}

// Función para ELIMINAR cita permanentemente
function deleteAppointment(id) {
    if (confirm('⚠️ ¿Eliminar permanentemente esta cita médica?\nEsta acción no se puede deshacer.')) {
        const index = appointments.findIndex(a => a.id === id);
        if (index !== -1) {
            // Eliminar la cita del arreglo
            const removed = appointments.splice(index, 1)[0];
            saveData();
            renderDoctorAgenda();
            // Si la cita eliminada estaba seleccionada, limpiar la persistencia
            try {
                clearSelectedAppointmentIfMatchesId(removed.id);
            } catch (e) { /* ignore */ }
            renderAgenda(document.getElementById('filterDate')?.value);
            showMessage(document.getElementById('appMsg'), `🗑️ Cita #${id} eliminada permanentemente.`);
        }
    }
}

function rescheduleAppointment(id) {
    const newDate = prompt('Ingrese nueva fecha (YYYY-MM-DD):');
    const newTime = prompt('Ingrese nueva hora (HH:MM):');
    if (newDate && newTime) {
        const app = appointments.find(a => a.id === id);
        if (app) {
            app.date = newDate;
            app.time = newTime;
            app.status = 'Reagendada';
            saveData();
            renderAgenda(document.getElementById('filterDate')?.value);
            renderDoctorAgenda();
            showMessage(document.getElementById('appMsg'), `Cita #${id} reagendada para ${newDate} ${newTime}`);
        }
    }
}

function searchHistory() {
    const searchTerm = document.getElementById('searchPatient').value.toLowerCase();
    const historyDiv = document.getElementById('historyResult');
    if (!searchTerm) {
        historyDiv.innerHTML = '<p class="info-text">Ingrese nombre, CURP o correo del paciente.</p>';
        return;
    }
    const matchedPatients = patients.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        (p.curp && p.curp.toLowerCase().includes(searchTerm)) ||
        p.email.toLowerCase().includes(searchTerm)
    );
    if (matchedPatients.length === 0) {
        historyDiv.innerHTML = '<p class="info-text">Paciente no encontrado.</p>';
        return;
    }
    let html = '';
    for (const patient of matchedPatients) {
        const patientApps = appointments.filter(a => a.patientId === patient.id);
        html += `<div class="mb-30">
                <h3 class="section-title">📋 ${patient.name}</h3>
                    <p><strong>CURP:</strong> ${patient.curp || 'N/A'} | <strong>Teléfono:</strong> ${patient.phone} | <strong>Correo:</strong> ${patient.email}</p>`;
        if (patientApps.length === 0) {
            html += '<p class="info-text">No tiene citas registradas.</p>';
        } else {
            html += '<div class="card-list">';
            for (const app of patientApps) {
                html += `<div class="card"><div class="card-info">
                    <p><strong>Cita #${app.id}</strong> | ${app.date} ${app.time} | Dr. ${app.doctor}</p>
                    <p>Motivo: ${app.reason} | Estado: ${app.status}</p>
                </div></div>`;
            }
            html += '</div>';
        }
        html += '</div>';
    }
    historyDiv.innerHTML = html;
}

// ============================================
// FUNCIÓN QR 
// ============================================

function generateQR() {

    const appIdInput = document.getElementById('qrAppointmentId');
    const qrContainer = document.getElementById('qrcode');

    if (!appIdInput) {
        alert('No se encontró el campo ID de cita');
        return;
    }

    if (!qrContainer) {
        alert('No se encontró el contenedor QR');
        return;
    }

    const appId = String(appIdInput.value || '').trim();

    if (!appId) {
        alert('Ingrese el ID de la cita');
        appIdInput.focus();
        return;
    }

    const idNum = Number.parseInt(appId, 10);
    if (Number.isNaN(idNum)) {
        alert('ID de cita inválido. Ingrese un número válido.');
        appIdInput.focus();
        return;
    }

    // Buscar por ID numérico (soporta ids guardados como number o string)
    const app = appointments.find(a => Number.parseInt(a.id, 10) === idNum);

    if (!app) {
        alert('No existe ninguna cita con ese ID');
        console.debug('generateQR: ID buscado=', idNum, 'appointments=', appointments);
        return;
    }

    const patient = patients.find(p => p.id == app.patientId);

    // Generar URL para descarga automática de PDF con datos incrustados
    const qrUrl = new URL('download-cita.html', window.location.href);
    qrUrl.searchParams.set('id', app.id);
    qrUrl.searchParams.set('n', patient?.name || 'Paciente Desconocido');
    qrUrl.searchParams.set('c', patient?.curp || 'N/A');
    qrUrl.searchParams.set('p', patient?.phone || 'N/A');
    qrUrl.searchParams.set('e', patient?.email || 'N/A');
    qrUrl.searchParams.set('b', patient?.bloodType || 'N/A');
    qrUrl.searchParams.set('d', app.date || 'N/A');
    qrUrl.searchParams.set('t', app.time || 'N/A');
    qrUrl.searchParams.set('doc', app.doctor || 'N/A');
    qrUrl.searchParams.set('r', app.reason || 'Consulta General');
    qrUrl.searchParams.set('s', app.status || 'Agendada');
    const qrData = qrUrl.toString();

    qrContainer.innerHTML = '';

    if (typeof QRCode === 'undefined') {

        qrContainer.innerHTML = `
            <div class="box-alert">
                Error: Librería QRCode no cargada
            </div>
        `;

        return;
    }

    try {

        new QRCode(qrContainer, {
            text: qrData,
            width: 220,
            height: 220,
            correctLevel: QRCode.CorrectLevel.L
        });

        const infoDiv = document.createElement('div');

        infoDiv.className = 'mt-15';

        infoDiv.innerHTML = `
            <p><strong>Cita:</strong> ${app.id}</p>
            <p><strong>Paciente:</strong> ${patient ? patient.name : 'N/A'}</p>
            <p><strong>Fecha:</strong> ${app.date}</p>
            <p><strong>Hora:</strong> ${app.time}</p>
            <p><strong>Médico:</strong> ${app.doctor}</p>
        `;

        qrContainer.appendChild(infoDiv);

        const msgDiv = document.getElementById('qrMsg');
        if (msgDiv) {
            showMessage(msgDiv, `✅ QR generado para cita #${app.id}. Escanea el código para descargar el comprobante automáticamente.`);
        }

    } catch (error) {
        console.error('Error al generar QR:', error);
        alert('❌ Error al generar QR: ' + error.message);
        qrContainer.innerHTML = `
            <div class="box-alert-strong">
                ❌ ERROR QR: ${error.message}
            </div>
        `;
    }
}

// ========== 6. FUNCIÓN DE DATOS DE PRUEBA ==========
function loadDemoData() {
    return;
}

// ========== 7. EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', () => {
    // Eliminar paciente demo Ana Cristina Fernández Pérez del localStorage
    try {
        if (localStorage.getItem('hospital_patients')) {
            let arr = JSON.parse(localStorage.getItem('hospital_patients'));
            arr = arr.filter(p => p.curp !== 'FEPA921108MNTRN03' && p.name !== 'Ana Cristina Fernández Pérez');
            localStorage.setItem('hospital_patients', JSON.stringify(arr));
        }
        if (localStorage.getItem('hospital_appointments')) {
            let appts = JSON.parse(localStorage.getItem('hospital_appointments'));
            // Filtrar citas del paciente demo (patientId 1 o curp)
            appts = appts.filter(a => a.patientId !== 1);
            localStorage.setItem('hospital_appointments', JSON.stringify(appts));
        }
    } catch(e) {}
    // Cargar datos demo si no existen
    if (patients.length === 0) {
        const storedPatients = localStorage.getItem('hospital_patients');
        if (!storedPatients || JSON.parse(storedPatients).length === 0) {
            loadDemoData();
        } else {
            patients = JSON.parse(storedPatients);
            appointments = JSON.parse(localStorage.getItem('hospital_appointments') || '[]');
            doctors = JSON.parse(localStorage.getItem('hospital_doctors')) || doctors;
            normalizeDoctorsData();
            normalizeAppointmentDoctorLabels();
            nextPatientId = patients.length > 0 ? Math.max(...patients.map(p => p.id)) + 1 : 1;
            nextAppointmentId = appointments.length > 0 ? Math.max(...appointments.map(a => a.id)) + 1 : 1;
        }
    } else {
        doctors = JSON.parse(localStorage.getItem('hospital_doctors')) || doctors;
        normalizeDoctorsData();
        normalizeAppointmentDoctorLabels();
    }

    // === Sincronizacion inicial con el backend MySQL (si esta disponible) ===
    async function doSync() {
        try {
            await syncFromApi();
        } catch (e) {
            console.warn("Sincronización automática falló:", e.message);
        }
    }
    doSync();
    // Sincronización automática cada 5 segundos para casi tiempo real en todos los dispositivos
    setInterval(doSync, 5000);
    
    // Cargar estados geográficos
    loadStates();
    
    // Eventos geográficos
    const stateSelect = document.getElementById('patState');
    const citySelect = document.getElementById('patCity');
    
    if (stateSelect) {
        stateSelect.addEventListener('change', (e) => {
            loadMunicipios(e.target.value);
        });
    }
    
    if (citySelect) {
        citySelect.addEventListener('change', (e) => {
            const estado = document.getElementById('patState').value;
            loadLocalidades(estado, e.target.value);
        });
    }
    
    // Event listener for edit patient modal city select
    const editCitySelect = document.getElementById('editPatCity');
    if (editCitySelect) {
        editCitySelect.addEventListener('change', (e) => {
            const estado = document.getElementById('editPatState').value;
            loadEditLocalidades(estado, e.target.value);
        });
    }
    
    updatePatientSelect();
    updateDoctorSelect();
    renderPatientList();
    renderDoctorList();
    renderDoctorAgenda();
    renderAgenda();
    renderAdminAccess();
    
    // Tabs
    const tabs = document.querySelectorAll('.tab-btn');
    for (const btn of tabs) {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            for (const content of document.querySelectorAll('.tab-content')) {
                content.classList.remove('active');
            }
            document.getElementById(tabId).classList.add('active');
            for (const t of tabs) t.classList.remove('active');
            btn.classList.add('active');
            
            if (tabId === 'history') document.getElementById('historyResult').innerHTML = '';
            if (tabId === 'admin') {
                renderAdminAccess();
            }
        });
    }
    
    document.getElementById('doctorLoginBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        loginDoctor();
    });
    document.getElementById('adminLogoutBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        logoutAdmin();
    });
    document.getElementById('addAdminBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('newAdminEmail').value.trim();
        const password = document.getElementById('newAdminPassword').value;
        if (!email || !password) {
            showMessage(document.getElementById('doctorLoginMsg'), 'Ingrese correo y contraseña para el nuevo administrador.', true);
            return;
        }
        addAdmin(email, password);
        document.getElementById('newAdminEmail').value = '';
        document.getElementById('newAdminPassword').value = '';
    });
    document.getElementById('filterBtn')?.addEventListener('click', () => {
        renderAgenda(document.getElementById('filterDate').value);
    });
    document.getElementById('agendaSearch')?.addEventListener('input', () => renderAgenda(document.getElementById('filterDate')?.value));
    document.getElementById('doctorSearch')?.addEventListener('input', renderDoctorList);
    document.getElementById('adminSearch')?.addEventListener('input', renderAdminList);
    document.getElementById('patientSearch')?.addEventListener('input', renderAdminPatientList);
    document.getElementById('refreshPatientsBtn')?.addEventListener('click', async () => {
        try {
            await syncFromApi();
            showMessage(document.getElementById('patientMsg'), 'Datos actualizados desde el servidor.');
        } catch (e) {
            showMessage(document.getElementById('patientMsg'), 'No se pudo actualizar desde el servidor. Usando datos locales.', true);
        }
    });
    document.getElementById('doctorAgendaSearch')?.addEventListener('input', renderDoctorAgenda);
    document.getElementById('resetAgenda')?.addEventListener('click', () => {
        document.getElementById('filterDate').value = '';
        renderAgenda();
    });
    document.getElementById('searchHistoryBtn')?.addEventListener('click', searchHistory);
    document.getElementById('generateQRBtn')?.addEventListener('click', generateQR);
    // Select de citas para QR
    const qrSelect = document.getElementById('qrAppointmentSelect');
    if (qrSelect) {
        qrSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            const input = document.getElementById('qrAppointmentId');
            if (input) input.value = val;
        });
    }
    // Filtrar médicos por día de la semana al cambiar la fecha de cita
    document.getElementById('appDate')?.addEventListener('change', (e) => {
        const date = e.target.value;
        updateDoctorSelect(date);
    });
    document.getElementById('addDoctorBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.getElementById('newDoctorName').value.trim();
        const area = document.getElementById('newDoctorArea').value.trim();
        const email = document.getElementById('newDoctorEmail').value.trim();
        const password = document.getElementById('newDoctorPassword').value;
        addDoctor(name, area, email, password);
        document.getElementById('newDoctorName').value = '';
        document.getElementById('newDoctorArea').value = '';
        document.getElementById('newDoctorEmail').value = '';
        document.getElementById('newDoctorPassword').value = '';
    });
    document.getElementById('refreshDoctorListBtn')?.addEventListener('click', () => {
        renderDoctorAgenda();
        showMessage(document.getElementById('appMsg'), 'Lista de citas por médico actualizada.');
    });
    document.getElementById('downloadDoctorListExcelBtn')?.addEventListener('click', downloadDoctorAgendaExcel);
});

// Registrar paciente
document.getElementById('patientForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('patName').value.trim();
    const curp = document.getElementById('patCurp').value.trim().toUpperCase();
    const dob = document.getElementById('patDob').value;
    const gender = document.getElementById('patGender').value;
    const phone = document.getElementById('patPhone').value.trim();
    const email = document.getElementById('patEmail').value.trim();
    const address = document.getElementById('patAddress').value.trim();
    const state = document.getElementById('patState').value;
    const city = document.getElementById('patCity').value;
    const population = document.getElementById('patPopulation').value;
    const zipCode = document.getElementById('patZipCode').value.trim();
    const bloodType = document.getElementById('patBloodType').value;
    
    if (!name || !curp || !dob || !gender || !phone || !address || !state || !city || !population) {
        showMessage(document.getElementById('patientMsg'), 'Todos los campos marcados son obligatorios', true);
        return;
    }

    if (!validateCurp(curp)) {
        showMessage(document.getElementById('patientMsg'), 'La CURP no es válida. Debe tener 18 caracteres, formato real y dígito verificador correcto.', true);
        document.getElementById('curpFeedback')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
    }

    const duplicateCurp = patients.some(p => p.curp === curp && p.id !== editingPatientId);
    if (duplicateCurp) {
        showMessage(document.getElementById('patientMsg'), 'Ya existe un paciente registrado con esta CURP. No puede usarse dos veces.', true);
        document.getElementById('curpFeedback')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
    }

    if (editingPatientId) {
        const patient = patients.find(p => p.id === editingPatientId);
        if (patient) {
            patient.name = name;
            patient.curp = curp;
            patient.dob = dob;
            patient.gender = gender;
            patient.phone = phone;
            patient.email = email || '';
            patient.address = address;
            patient.state = state;
            patient.city = city;
            patient.population = population;
            patient.zipCode = zipCode || '';
            patient.bloodType = bloodType || '';
            // Persistir en API (si esta disponible)
            try { await apiUpdatePaciente(patient.id, mapPacienteToApi(patient)); } catch (e) { console.warn('API update paciente fallo:', e.message); }
            saveData();
            renderPatientList();
            renderAdminPatientList();
            updatePatientSelect();
            showMessage(document.getElementById('patientMsg'), `✅ Paciente #${editingPatientId} actualizado.`);
            editingPatientId = null;
        }
    } else {
        const newPatient = {
            id: nextPatientId,
            name, curp, dob, gender, phone, email: email || '', address,
            state, city, population, zipCode: zipCode || '', bloodType: bloodType || '',
            registrationDate: new Date().toISOString()
        };
        // Persistir en API primero (devuelve el ID real)
        try {
            const created = await apiCreatePaciente(mapPacienteToApi(newPatient));
            if (created && created.id) newPatient.id = created.id;
        } catch (e) {
            if (e.status === 409) {
                showMessage(document.getElementById('patientMsg'), 'Esta CURP ya está registrada en la base de datos.', true);
                return;
            }
            console.warn('API create paciente fallo, guardando solo local:', e.message);
        }
        nextPatientId = Math.max(nextPatientId, newPatient.id + 1);
        patients.push(newPatient);
        saveData();
        updatePatientSelect();
        renderPatientList();
        showMessage(document.getElementById('patientMsg'), `✅ Paciente ${name} registrado con ID ${newPatient.id}`);
    }
    document.getElementById('patientForm').reset();
    editingPatientId = null;
    loadStates();
    document.getElementById('patCity').innerHTML = '<option value="">Primero seleccione un estado</option>';
    document.getElementById('patCity').disabled = true;
    document.getElementById('patPopulation').innerHTML = '<option value="">Primero seleccione un municipio</option>';
    document.getElementById('patPopulation').disabled = true;
});

// === Validación en tiempo real de CURP ===
(function setupCurpLiveValidation() {
    const curpInput = document.getElementById('patCurp');
    const feedback = document.getElementById('curpFeedback');
    const dobInput = document.getElementById('patDob');
    const genderInput = document.getElementById('patGender');
    if (!curpInput || !feedback) return;

    const STATES_BY_CODE = {
        'AS': 'Aguascalientes', 'BC': 'Baja California', 'BS': 'Baja California Sur',
        'CC': 'Campeche', 'CL': 'Coahuila', 'CM': 'Colima', 'CS': 'Chiapas',
        'CH': 'Chihuahua', 'DF': 'Ciudad de México', 'DG': 'Durango', 'GT': 'Guanajuato',
        'GR': 'Guerrero', 'HG': 'Hidalgo', 'JC': 'Jalisco', 'MC': 'México',
        'MN': 'Michoacán', 'MS': 'Morelos', 'NT': 'Nayarit', 'NL': 'Nuevo León',
        'OC': 'Oaxaca', 'PL': 'Puebla', 'QT': 'Querétaro', 'QR': 'Quintana Roo',
        'SP': 'San Luis Potosí', 'SL': 'Sinaloa', 'SR': 'Sonora', 'TC': 'Tabasco',
        'TS': 'Tlaxcala', 'TL': 'Tlaxcala', 'VZ': 'Veracruz', 'YN': 'Yucatán',
        'ZS': 'Zacatecas'
    };

    function inferDobFromCurp(curp) {
        if (!curp || curp.length < 10) return null;
        const year2 = Number.parseInt(curp.slice(4, 6), 10);
        const month = curp.slice(6, 8);
        const day = curp.slice(8, 10);
        const fullYear = year2 > 30 ? 1900 + year2 : 2000 + year2;
        if (!/^\d{2}$/.test(month) || !/^\d{2}$/.test(day)) return null;
        const m = Number.parseInt(month, 10);
        const d = Number.parseInt(day, 10);
        if (m < 1 || m > 12 || d < 1 || d > 31) return null;
        return `${fullYear}-${month}-${day}`;
    }

    function inferGenderFromCurp(curp) {
        if (!curp || curp.length < 11) return '';
        return curp[10] === 'H' ? 'Masculino' : curp[10] === 'M' ? 'Femenino' : '';
    }

    function inferStateFromCurp(curp) {
        if (!curp || curp.length < 13) return '';
        const code = curp.slice(11, 13);
        return STATES_BY_CODE[code] || '';
    }

    function renderFeedback(state, message) {
        const icon = document.createElement('span');
        icon.className = 'curp-icon';
        feedback.className = `curp-feedback ${state}`;
        feedback.innerHTML = '';
        feedback.appendChild(icon);
        const txt = document.createElement('span');
        txt.textContent = message;
        feedback.appendChild(txt);
    }

    function clearFeedback() {
        feedback.className = 'curp-feedback';
        feedback.innerHTML = '';
    }

    function checkCurp() {
        const raw = curpInput.value.trim().toUpperCase();
        curpInput.value = raw; // forzar mayúsculas en el input
        if (raw.length === 0) { clearFeedback(); return; }
        if (raw.length < 18) {
            renderFeedback('invalid', `CURP incompleta: ${raw.length}/18 caracteres.`);
            return;
        }
        if (!validateCurp(raw)) {
            renderFeedback('invalid', 'CURP no válida: formato o dígito verificador incorrecto.');
            return;
        }
        const duplicate = patients.some(p => p.curp === raw && p.id !== editingPatientId);
        if (duplicate) {
            renderFeedback('duplicate', 'Esta CURP ya está registrada con otro paciente.');
            return;
        }
        renderFeedback('valid', 'CURP válida y disponible.');
        // Autocompletar fecha de nacimiento y sexo si están vacíos
        const inferredDob = inferDobFromCurp(raw);
        if (inferredDob && dobInput && !dobInput.value) dobInput.value = inferredDob;
        const inferredGender = inferGenderFromCurp(raw);
        if (inferredGender && genderInput && !genderInput.value) {
            genderInput.value = inferredGender;
        }
        // Información contextual (se sobreescribe el mensaje en el feedback manteniendo el estado válido)
        const inferredState = inferStateFromCurp(raw);
        if (inferredState) {
            const stateInfo = document.createElement('span');
            stateInfo.style.marginLeft = '6px';
            stateInfo.style.fontWeight = '500';
            stateInfo.style.opacity = '0.85';
            stateInfo.textContent = `(Estado: ${inferredState})`;
            feedback.appendChild(stateInfo);
        }
    }

    curpInput.addEventListener('input', checkCurp);
    curpInput.addEventListener('blur', checkCurp);
    // Revisar también cuando cambian los datos (por si se edita desde administración)
    document.addEventListener('patientsUpdated', checkCurp);
})();

// Programar cita
document.getElementById('appointmentForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const patientId = Number.parseInt(document.getElementById('appPatientId').value);
    const doctor = document.getElementById('appDoctor').value;
    const date = document.getElementById('appDate').value;
    const time = document.getElementById('appTime').value;
    const reason = document.getElementById('appReason').value;

if (!patientId || !doctor || !date || !time) {
        showMessage(document.getElementById('appMsg'), 'Complete todos los campos', true);
        return;
    }

// Determinar qué días trabaja el médico seleccionado
    const doctorRecord = doctors.find(d => `${d.name} | ${d.area}` === doctor || d.name === doctor);
    const doctorWorksOnWeekday = doctorRecord ? doctorRecord.dias_trabaja === 'L-V' : false;
    const isWeekend = new Date(date).getDay() === 0 || new Date(date).getDay() === 6;
    
    // Verificar que el médico fue encontrado y trabaja en el día seleccionado
    if (!doctorRecord) {
        showMessage(document.getElementById('appMsg'), 'No se encontró el médico seleccionado', true);
        return;
    }
    
    // Verificar que el médico trabaje en el día seleccionado
    if (isWeekend && !doctorWorksOnWeekday) {
        showMessage(document.getElementById('appMsg'), 'Este médico no trabaja los fines de semana', true);
        return;
    }
    if (!isWeekend && !doctorWorksOnWeekday) {
        showMessage(document.getElementById('appMsg'), 'Este médico no trabaja en días hábiles', true);
        return;
    }
    
    // Validar horario no repetido para este médico
    const existing = appointments.find(a => a.doctor === doctor && a.date === date && a.time === time && a.status !== 'Cancelada');
    if (existing) {
        showMessage(document.getElementById('appMsg'), 'Horario no disponible para este médico', true);
        return;
    }
    
    const doctorId = doctorRecord?.id || null;
    
    const newApp = {
        id: nextAppointmentId,
        patientId, doctor, doctorId, date, time, reason: reason || 'Consulta general',
        status: 'Agendada', createdDate: new Date().toISOString()
    };
    try {
        const created = await apiCreateCita(mapCitaToApi(newApp));
        if (created && created.id) newApp.id = created.id;
    } catch (err) { console.warn('API create cita fallo, guardando solo local:', err.message); }
    nextAppointmentId = Math.max(nextAppointmentId, newApp.id + 1);
    appointments.push(newApp);
    saveData();
    renderAgenda();
    renderDoctorAgenda();
    
    const patient = patients.find(p => p.id === patientId);
    if(patient && patient.email){
        setTimeout(() => {
            alert(`📧 Recordatorio: ${patient.name}, tiene cita el ${date} a las ${time} con ${doctor}.`);
        }, 500);
    }
    
    showMessage(document.getElementById('appMsg'), `✅ Cita programada con ID ${newApp.id}. Se enviará recordatorio.`);
    document.getElementById('appointmentForm').reset();
    document.getElementById('appPatientId').value = '';
});