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
                { name: "Puerto Banús", phones: ["952 90 98 00"], email: "info@puertobanus.com", keywords: ["Marbella", "Marina", "Puerto"] },
                { name: "Marina de Valencia", phones: ["963 46 20 07"], email: "info@marinadevalencia.com", keywords: ["Valencia", "Marina", "Puerto"] },
                { name: "Puerto Deportivo de Sotogrande", phones: ["956 79 00 00"], email: "info@puertosotogrande.com", keywords: ["Cadiz", "Sotogrande", "Marina"] }
            ]
        },
        {
            category: "Astilleros y Reparaciones",
            items: [
                { name: "Varadero de Palma", phones: ["971 45 46 00"], email: "info@varaderodepalma.com", keywords: ["Palma", "Reparacion", "Astillero"] },
                { name: "Astilleros de Mallorca", phones: ["971 71 06 45"], email: "info@astillerosdemallorca.com", keywords: ["Mallorca", "Astillero", "Mantenimiento"] },
                { name: "Rodman Polyships", phones: ["986 81 18 11"], email: "rodman@rodman.es", keywords: ["Pontevedra", "Astillero", "Construccion"] }
            ]
        }
    ]
};
