// Data for directory of emergency and contact numbers.

interface Contact {
    name: string;
    phones: string[];
    email: string | null;
    keywords: string[];
}

interface OtherContactCategory {
    category: string;
    items: Contact[];
}

interface DirectoryData {
    emergency: Contact[];
    other: OtherContactCategory[];
}


export const DIRECTORY_DATA: DirectoryData = {
    emergency: [
        {
            name: "Salvamento Marítimo",
            phones: ["112", "900 202 202"],
            email: "operaciones@sasemar.es",
            keywords: ["Emergencia", "Rescate", "Socorro", "Sasemar", "Costera"]
        },
        {
            name: "Guardia Civil del Mar",
            phones: ["062"],
            email: null,
            keywords: ["Policía", "Vigilancia", "Seguridad", "Denuncia"]
        },
        {
            name: "Servicio Radiomédico Español",
            phones: ["91 310 34 75"],
            email: "cr-radiomedico@seg-social.es",
            keywords: ["Médico", "Consulta", "Salud", "Accidente", "Radiomédico"]
        },
        {
            name: "Instituto Nacional de Toxicología",
            phones: ["91 562 04 20"],
            email: null,
            keywords: ["Veneno", "Intoxicación", "Químicos", "Toxicología"]
        },
    ],
    other: [
        {
            category: "Clubes Náuticos y Marinas",
            items: [
                { name: "Real Club Náutico de Barcelona", phones: ["932 21 65 21"], email: "info@rcnb.com", keywords: ["Barcelona", "Club", "Nautico"] },
                { name: "Real Club Náutico de Palma", phones: ["971 72 68 48"], email: "info@rcnp.es", keywords: ["Palma", "Mallorca", "Club"] },
                { name: "Monte Real Club de Yates de Baiona", phones: ["986 38 50 00"], email: "secretaria@mrcyb.es", keywords: ["Baiona", "Pontevedra", "Club"] },
                { name: "Real Club Marítimo del Abra", phones: ["944 63 76 00"], email: "rcma-rsc@rcma-rsc.com", keywords: ["Getxo", "Bilbao", "Bizkaia", "Abra"] },
                { name: "Real Club Náutico de Valencia", phones: ["963 67 90 11"], email: "oficinas@rcnv.es", keywords: ["Valencia", "Club", "Nautico"] },
                { name: "Real Club Náutico de La Coruña", phones: ["981 22 24 54"], email: "info@rcncoruna.com", keywords: ["A Coruña", "Galicia", "Club"] },
                { name: "Real Club Náutico de Gran Canaria", phones: ["928 24 34 45"], email: "oficinas@rcngc.com", keywords: ["Las Palmas", "Gran Canaria", "Club"] },
                { name: "Real Club Marítimo de Santander", phones: ["942 21 40 50"], email: "rcms@realclubmaritimodesantander.com", keywords: ["Santander", "Cantabria", "Club"] },
                { name: "Club de Mar de Almería", phones: ["950 23 07 80"], email: "oficinas@clubdemaralmeria.es", keywords: ["Almeria", "Andalucia", "Club"] },
                { name: "Puerto Banús", phones: ["952 90 98 00"], email: "info@puertobanus.com", keywords: ["Marbella", "Marina", "Puerto"] },
                { name: "Marina de Valencia", phones: ["963 46 20 07"], email: "info@marinadevalencia.com", keywords: ["Valencia", "Marina", "Puerto"] },
                { name: "Puerto Deportivo de Sotogrande", phones: ["956 79 00 00"], email: "info@puertosotogrande.com", keywords: ["Cadiz", "Sotogrande", "Marina"] },
                { name: "Marina de Dénia", phones: ["966 42 43 07"], email: "info@marinadedenia.com", keywords: ["Alicante", "Denia", "Marina"] },
                { name: "Port Adriano", phones: ["971 23 24 94"], email: "info@portadriano.com", keywords: ["Calvia", "Mallorca", "Marina"] },
                { name: "Marina Ibiza", phones: ["971 31 80 40"], email: "info@marinaibiza.com", keywords: ["Ibiza", "Marina"] },
                { name: "Port Tarraco", phones: ["977 24 41 73"], email: "info@porttarraco.com", keywords: ["Tarragona", "Marina"] },
                { name: "Puerto Deportivo de Gijón", phones: ["985 34 45 43"], email: "pdg@puertodeportivogijon.es", keywords: ["Gijon", "Asturias", "Marina"] }
            ]
        },
        {
            category: "Astilleros y Reparaciones",
            items: [
                { name: "Varadero de Palma", phones: ["971 45 46 00"], email: "info@varaderodepalma.com", keywords: ["Palma", "Reparacion", "Astillero", "Varadero"] },
                { name: "Astilleros de Mallorca", phones: ["971 71 06 45"], email: "info@astillerosdemallorca.com", keywords: ["Mallorca", "Astillero", "Mantenimiento"] },
                { name: "Rodman Polyships", phones: ["986 81 18 11"], email: "rodman@rodman.es", keywords: ["Pontevedra", "Astillero", "Construccion"] },
                { name: "MB92 Barcelona", phones: ["932 24 10 40"], email: "info@mb92.com", keywords: ["Barcelona", "Superyate", "Reparacion", "Mantenimiento"] },
                { name: "Astilleros Gondán", phones: ["985 63 62 50"], email: "gondan@gondan.com", keywords: ["Asturias", "Figueras", "Construccion"] },
                { name: "Navantia", phones: ["956 43 90 00"], email: null, keywords: ["Cadiz", "Cartagena", "Ferrol", "Militar", "Construccion"] },
                { name: "Varador 2000", phones: ["937 95 49 09"], email: "info@varador2000.com", keywords: ["Arenys de Mar", "Barcelona", "Reparacion", "Varadero"] },
                { name: "Astilleros Armón", phones: ["985 63 14 64"], email: null, keywords: ["Navia", "Asturias", "Gijon", "Vigo", "Construccion"] }
            ]
        },
        {
            category: "Tiendas y Efectos Navales",
            items: [
                 { name: "Accastillage Diffusion", phones: [], email: "info@accastillage-diffusion.es", keywords: ["Tienda", "Efectos", "Nautica", "AD", "Cadena"] },
                 { name: "Plastimo", phones: [], email: null, keywords: ["Tienda", "Seguridad", "Defensas", "Compas", "Fabricante"] },
                 { name: "Acastimar", phones: ["965 29 97 00"], email: "info@acastimar.com", keywords: ["Alicante", "Tienda"] },
                 { name: "Efectos Navales Jesús Betanzos", phones: ["986 23 20 03"], email: "info@jesusbetanzos.com", keywords: ["Vigo", "Galicia", "Tienda"] },
                 { name: "Lalizas", phones: ["933 00 75 00"], email: "spain@lalizas.com", keywords: ["Barcelona", "Seguridad", "Balsas", "Chalecos"] }
            ]
        },
        {
            category: "Formación Náutica (PER, PNB, etc.)",
            items: [
                { name: "Cenáutica", phones: ["900 83 40 30"], email: "info@cenautica.com", keywords: ["Formacion", "Escuela", "PER", "PNB", "Titulaciones", "Madrid", "Sevilla", "Barcelona"] },
                { name: "Escuela del Mar", phones: ["932 21 03 80"], email: "info@escoladelmar.com", keywords: ["Barcelona", "Escuela", "Formacion"] },
                { name: "Alavela", phones: ["914 48 51 51"], email: "info@alavela.es", keywords: ["Madrid", "Escuela", "Formacion"] },
                { name: "Escuela Náutica de Navarra", phones: ["948 22 89 23"], email: "info@escuelanauticanavarra.com", keywords: ["Navarra", "Pamplona", "Escuela"] },
                { name: "Instituto Náutico de Baleares", phones: ["971 71 85 85"], email: "info@inb.es", keywords: ["Baleares", "Palma", "Escuela"] }
            ]
        },
        {
            category: "Capitanías Marítimas",
            items: [
                { name: "Capitanía Marítima de A Coruña", phones: ["981 20 33 22"], email: "cm-acoruna@fomento.es", keywords: ["Capitania", "A Coruña", "Administracion"] },
                { name: "Capitanía Marítima de Alicante", phones: ["965 14 42 00"], email: "cm-alicante@fomento.es", keywords: ["Capitania", "Alicante", "Administracion"] },
                { name: "Capitanía Marítima de Almería", phones: ["950 27 00 48"], email: "cm-almeria@fomento.es", keywords: ["Capitania", "Almeria", "Administracion"] },
                { name: "Capitanía Marítima de Barcelona", phones: ["932 23 47 00"], email: "cm-barcelona@fomento.es", keywords: ["Capitania", "Barcelona", "Administracion"] },
                { name: "Capitanía Marítima de Bilbao", phones: ["944 23 58 79"], email: "cm-bilbao@fomento.es", keywords: ["Capitania", "Bilbao", "Bizkaia", "Administracion"] },
                { name: "Capitanía Marítima de Cádiz", phones: ["956 21 21 11"], email: "cm-cadiz@fomento.es", keywords: ["Capitania", "Cadiz", "Administracion"] },
                { name: "Capitanía Marítima de Cartagena", phones: ["968 50 17 48"], email: "cm-cartagena@fomento.es", keywords: ["Capitania", "Cartagena", "Murcia", "Administracion"] },
                { name: "Capitanía Marítima de Castellón", phones: ["964 28 39 33"], email: "cm-castellon@fomento.es", keywords: ["Capitania", "Castellon", "Administracion"] },
                { name: "Capitanía Marítima de Ceuta", phones: ["956 52 70 80"], email: "cm-ceuta@fomento.es", keywords: ["Capitania", "Ceuta", "Administracion"] },
                { name: "Capitanía Marítima de Gijón", phones: ["985 32 75 00"], email: "cm-gijon@fomento.es", keywords: ["Capitania", "Gijon", "Asturias", "Administracion"] },
                { name: "Capitanía Marítima de Huelva", phones: ["959 24 72 94"], email: "cm-huelva@fomento.es", keywords: ["Capitania", "Huelva", "Administracion"] },
                { name: "Capitanía Marítima de Ibiza", phones: ["971 31 03 33"], email: "cm-ibiza@fomento.es", keywords: ["Capitania", "Ibiza", "Baleares", "Administracion"] },
                { name: "Capitanía Marítima de Las Palmas", phones: ["928 46 72 26"], email: "cm-las_palmas@fomento.es", keywords: ["Capitania", "Las Palmas", "Canarias", "Administracion"] },
                { name: "Capitanía Marítima de Málaga", phones: ["952 21 44 27"], email: "cm-malaga@fomento.es", keywords: ["Capitania", "Malaga", "Administracion"] },
                { name: "Capitanía Marítima de Melilla", phones: ["952 68 34 33"], email: "cm-melilla@fomento.es", keywords: ["Capitania", "Melilla", "Administracion"] },
                { name: "Capitanía Marítima de Palma de Mallorca", phones: ["971 72 20 00"], email: "cm-mallorca@fomento.es", keywords: ["Capitania", "Palma", "Mallorca", "Administracion"] },
                { name: "Capitanía Marítima de Santander", phones: ["942 21 21 00"], email: "cm-santander@fomento.es", keywords: ["Capitania", "Santander", "Cantabria", "Administracion"] },
                { name: "Capitanía Marítima de Sevilla", phones: ["954 23 79 11"], email: "cm-sevilla@fomento.es", keywords: ["Capitania", "Sevilla", "Administracion"] },
                { name: "Capitanía Marítima de Tarragona", phones: ["977 24 07 07"], email: "cm-tarragona@fomento.es", keywords: ["Capitania", "Tarragona", "Administracion"] },
                { name: "Capitanía Marítima de Tenerife", phones: ["922 28 20 51"], email: "cm-tenerife@fomento.es", keywords: ["Capitania", "Tenerife", "Canarias", "Administracion"] },
                { name: "Capitanía Marítima de Valencia", phones: ["963 67 93 02"], email: "cm-valencia@fomento.es", keywords: ["Capitania", "Valencia", "Administracion"] },
                { name: "Capitanía Marítima de Vigo", phones: ["986 43 36 33"], email: "cm-vigo@fomento.es", keywords: ["Capitania", "Vigo", "Pontevedra", "Administracion"] },
                { name: "Dirección General de la Marina Mercante", phones: ["915 97 90 57"], email: null, keywords: ["Madrid", "DGMM", "Administracion", "Central"] }
            ]
        }
    ]
};
