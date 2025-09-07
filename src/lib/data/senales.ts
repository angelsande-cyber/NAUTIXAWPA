{
    "lightTerms": {
        "F": { "es": "Fija", "en": "Fixed" },
        "FL": { "es": "Destellos", "en": "Flashing" },
        "LFL": { "es": "Destellos Largos", "en": "Long-Flashing" },
        "OC": { "es": "Ocultaciones", "en": "Occulting" },
        "ISO": { "es": "Isofase", "en": "Isophase" },
        "Q": { "es": "Destellos Rápidos", "en": "Quick" },
        "VQ": { "es": "Destellos muy Rápidos", "en": "Very Quick" },
        "IQ": { "es": "Destellos Rápidos Interrumpidos", "en": "Interrupted Quick" },
        "MO": { "es": "Código Morse", "en": "Morse Code" },
        "AL": { "es": "Alternativa", "en": "Alternating" },
        "W": { "es": "Blanca", "en": "White" },
        "R": { "es": "Roja", "en": "Red" },
        "G": { "es": "Verde", "en": "Green" },
        "Y": { "es": "Amarilla", "en": "Yellow" },
        "BU": { "es": "Azul", "en": "Blue" },
        "VI": { "es": "Violeta", "en": "Violet" }
    },
    "ialaBuoyData": [
        {
            "category": "signals.buoyage.categories.lateral",
            "type": { "es": "Babor", "en": "Port" },
            "region": "A",
            "shape": "can",
            "colors": ["red"],
            "topmark": { "shape": "can", "color": "red" },
            "characteristic": "Fl R 4s",
            "purpose": { "es": "Indica el lado de babor de un canal al venir de la mar.", "en": "Indicates the port side of a channel when returning from sea." },
            "mnemonic": { "es": "Al entrar, verde a estribor (verde con verde), rojo a babor (rojo con rojo).", "en": "When returning, green to starboard (green with green), red to port (red with red)." }
        },
        {
            "category": "signals.buoyage.categories.lateral",
            "type": { "es": "Estribor", "en": "Starboard" },
            "region": "A",
            "shape": "conical",
            "colors": ["green"],
            "topmark": { "shape": "cone-up", "color": "green" },
            "characteristic": "Fl G 4s",
            "purpose": { "es": "Indica el lado de estribor de un canal al venir de la mar.", "en": "Indicates the starboard side of a channel when returning from sea." },
            "mnemonic": { "es": "Al entrar, verde a estribor (verde con verde), rojo a babor (rojo con rojo).", "en": "When returning, green to starboard (green with green), red to port (red with red)." }
        },
        {
            "category": "signals.buoyage.categories.lateral",
            "type": { "es": "Babor", "en": "Port" },
            "region": "B",
            "shape": "conical",
            "colors": ["red"],
            "topmark": { "shape": "cone-up", "color": "red" },
            "characteristic": "Fl R 2.5s",
            "purpose": { "es": "Indica el lado de babor de un canal al venir de la mar.", "en": "Indicates the port side of a channel when returning from sea." },
            "mnemonic": { "es": "Red Right Returning (Rojo a Estribor Regresando).", "en": "Red Right Returning." }
        },
        {
            "category": "signals.buoyage.categories.lateral",
            "type": { "es": "Estribor", "en": "Starboard" },
            "region": "B",
            "shape": "can",
            "colors": ["green"],
            "topmark": { "shape": "can", "color": "green" },
            "characteristic": "Fl G 2.5s",
            "purpose": { "es": "Indica el lado de estribor de un canal al venir de la mar.", "en": "Indicates the starboard side of a channel when returning from sea." },
            "mnemonic": { "es": "Red Right Returning (Rojo a Estribor Regresando).", "en": "Red Right Returning." }
        },
        {
            "category": "signals.buoyage.categories.cardinal",
            "type": { "es": "Norte", "en": "North" },
            "shape": "pillar",
            "colors": ["black", "yellow"],
            "topmark": { "shape": "cones-up", "color": "black" },
            "characteristic": "VQ or Q",
            "purpose": { "es": "Indica que las aguas seguras se encuentran al Norte.", "en": "Indicates that safe water lies to the North." },
            "mnemonic": { "es": "Dos conos hacia arriba (Norte). Luz blanca de destellos continuos.", "en": "Two cones pointing up (North). Continuous quick white flashing light." }
        },
        {
            "category": "signals.buoyage.categories.cardinal",
            "type": { "es": "Sur", "en": "South" },
            "shape": "pillar",
            "colors": ["yellow", "black"],
            "topmark": { "shape": "cones-down", "color": "black" },
            "characteristic": "VQ(6)+LFl 15s",
            "purpose": { "es": "Indica que las aguas seguras se encuentran al Sur.", "en": "Indicates that safe water lies to the South." },
            "mnemonic": { "es": "Dos conos hacia abajo (Sur). 6 destellos + 1 largo.", "en": "Two cones pointing down (South). 6 flashes + 1 long flash." }
        },
        {
            "category": "signals.buoyage.categories.cardinal",
            "type": { "es": "Este", "en": "East" },
            "shape": "pillar",
            "colors": ["black", "yellow", "black"],
            "topmark": { "shape": "cones-base-base", "color": "black" },
            "characteristic": "VQ(3) 5s",
            "purpose": { "es": "Indica que las aguas seguras se encuentran al Este.", "en": "Indicates that safe water lies to the East." },
            "mnemonic": { "es": "Conos opuestos por la base (huevo de pascua). 3 destellos cada 5s.", "en": "Cones opposite by base (like an Easter egg). 3 flashes every 5s." }
        },
        {
            "category": "signals.buoyage.categories.cardinal",
            "type": { "es": "Oeste", "en": "West" },
            "shape": "pillar",
            "colors": ["yellow", "black", "yellow"],
            "topmark": { "shape": "cones-vertex-together", "color": "black" },
            "characteristic": "VQ(9) 10s",
            "purpose": { "es": "Indica que las aguas seguras se encuentran al Oeste.", "en": "Indicates that safe water lies to the West." },
            "mnemonic": { "es": "Conos unidos por el vértice (copa de vino). 9 destellos cada 10s.", "en": "Cones joined by vertex (like a wine glass). 9 flashes every 10s." }
        },
        {
            "category": "signals.buoyage.categories.special",
            "type": { "es": "Peligro Aislado", "en": "Isolated Danger" },
            "shape": "pillar",
            "colors": ["black", "red", "black"],
            "topmark": { "shape": "spheres-2", "color": "black" },
            "characteristic": "Fl(2) W 5s",
            "purpose": { "es": "Se fondea sobre un peligro de extensión reducida.", "en": "Erected on a danger of limited extent." },
            "mnemonic": { "es": "Dos esferas negras, dos destellos blancos.", "en": "Two black spheres, two white flashes." }
        },
        {
            "category": "signals.buoyage.categories.special",
            "type": { "es": "Aguas Seguras", "en": "Safe Water" },
            "shape": "spherical",
            "colors": ["red", "white"],
            "topmark": { "shape": "sphere", "color": "red" },
            "characteristic": "LFl W 10s or Mo(A) W",
            "purpose": { "es": "Indica aguas navegables alrededor de la marca, como la entrada a un canal.", "en": "Indicates navigable water all around the mark, such as a channel entrance." },
            "mnemonic": { "es": "Marca esférica con franjas verticales. Luz blanca isofase, de ocultaciones o destello largo.", "en": "Spherical mark with vertical stripes. White isophase, occulting, or long-flashing light." }
        },
        {
            "category": "signals.buoyage.categories.special",
            "type": { "es": "Especial", "en": "Special" },
            "shape": "any",
            "colors": ["yellow"],
            "topmark": { "shape": "cross", "color": "yellow" },
            "characteristic": "Fl Y 5s",
            "purpose": { "es": "Indica una zona o característica especial (zona militar, cable, tubería, ODAS).", "en": "Indicates a special area or feature (military zone, cable, pipeline, ODAS)." },
            "mnemonic": { "es": "Completamente amarilla, con una 'X' como marca de tope. Luz amarilla.", "en": "Completely yellow, with an 'X' as a topmark. Yellow light." }
        }
    ]
}
]]></content>
  </change>
  <change>
    <file>/public/data/sonidos.json</file>
    <content><![CDATA`[
    {
        "id": "maneuver_stbd",
        "title": "Maniobra a Estribor",
        "description": "Un buque de propulsión mecánica en navegación, cuando maniobra estando a la vista de otro.",
        "signal": "● (Una pitada corta)",
        "sequence": ["short"],
        "rule": "Regla 34(a)"
    },
    {
        "id": "maneuver_port",
        "title": "Maniobra a Babor",
        "description": "Un buque de propulsión mecánica en navegación, cuando maniobra estando a la vista de otro.",
        "signal": "● ● (Dos pitadas cortas)",
        "sequence": ["short", "short"],
        "rule": "Regla 34(a)"
    },
    {
        "id": "maneuver_astern",
        "title": "Dando Atrás",
        "description": "Un buque de propulsión mecánica en navegación, cuando sus máquinas dan atrás.",
        "signal": "● ● ● (Tres pitadas cortas)",
        "sequence": ["short", "short", "short"],
        "rule": "Regla 34(a)"
    },
    {
        "id": "overtake_stbd",
        "title": "Adelanto por Estribor",
        "description": "Intención de adelantar a otro buque por su banda de estribor.",
        "signal": "▬ ▬ ● (Dos largas y una corta)",
        "sequence": ["long", "long", "short"],
        "rule": "Regla 34(c)"
    },
    {
        "id": "overtake_port",
        "title": "Adelanto por Babor",
        "description": "Intención de adelantar a otro buque por su banda de babor.",
        "signal": "▬ ▬ ● ● (Dos largas y dos cortas)",
        "sequence": ["long", "long", "short", "short"],
        "rule": "Regla 34(c)"
    },
    {
        "id": "overtake_agree",
        "title": "Conformidad al Adelantamiento",
        "description": "Respuesta del buque que va a ser adelantado, si está de acuerdo.",
        "signal": "▬ ● ▬ ● (Larga, corta, larga, corta)",
        "sequence": ["long", "short", "long", "short"],
        "rule": "Regla 34(c)"
    },
    {
        "id": "warning_doubt",
        "title": "Señal de Duda / Advertencia",
        "description": "Cuando un buque no comprende las intenciones del otro, o duda de si el otro está tomando la acción debida.",
        "signal": "● ● ● ● ● (Cinco o más pitadas cortas)",
        "sequence": ["short", "short", "short", "short", "short"],
        "rule": "Regla 34(d)"
    },
    {
        "id": "warning_bend",
        "title": "Advertencia en Recodo",
        "description": "Buque acercándose a un recodo o zona de un canal donde otros buques pueden quedar ocultos.",
        "signal": "▬ (Una pitada larga)",
        "sequence": ["long"],
        "rule": "Regla 34(e)"
    },
    {
        "id": "restricted_vis_power_making_way",
        "title": "Buque de P.M. con arrancada",
        "description": "Visibilidad reducida. Buque de propulsión mecánica con arrancada.",
        "signal": "▬ (Una pitada larga a intervalos <= 2 min)",
        "sequence": ["long"],
        "rule": "Regla 35(a)"
    },
    {
        "id": "restricted_vis_power_stopped",
        "title": "Buque de P.M. parado",
        "description": "Visibilidad reducida. Buque de propulsión mecánica parado y sin arrancada.",
        "signal": "▬ ▬ (Dos pitadas largas a intervalos <= 2 min)",
        "sequence": ["long", "long"],
        "rule": "Regla 35(b)"
    },
    {
        "id": "restricted_vis_special",
        "title": "Buque especial (Vela, Pesca, NUC, RAM...)",
        "description": "Visibilidad reducida. Buques sin gobierno, con maniobra restringida, restringido por su calado, de vela, de pesca o remolcador.",
        "signal": "▬ ● ● (Una larga y dos cortas a intervalos <= 2 min)",
        "sequence": ["long", "short", "short"],
        "rule": "Regla 35(c)"
    },
    {
        "id": "restricted_vis_towed",
        "title": "Buque remolcado (si hay tripulación)",
        "description": "Visibilidad reducida. Último buque de un remolque, si va tripulado.",
        "signal": "▬ ● ● ● (Una larga y tres cortas a intervalos <= 2 min)",
        "sequence": ["long", "short", "short", "short"],
        "rule": "Regla 35(e)"
    },
    {
        "id": "restricted_vis_anchored_lt100",
        "title": "Fondeado (< 100m)",
        "description": "Visibilidad reducida. Buque fondeado, eslora inferior a 100m.",
        "signal": "🔔 (Campanadas rápidas por 5s a intervalos <= 1 min)",
        "sequence": ["bell"],
        "rule": "Regla 35(g)"
    },
    {
        "id": "restricted_vis_anchored_gt100",
        "title": "Fondeado (> 100m)",
        "description": "Visibilidad reducida. Buque fondeado, eslora igual o superior a 100m.",
        "signal": "🔔 (Proa) + 🔔🔔🔔 (Popa) (Campanadas + Gong a intervalos <= 1 min)",
        "sequence": ["bell", "gong"],
        "rule": "Regla 35(g)"
    },
    {
        "id": "restricted_vis_aground",
        "title": "Varado",
        "description": "Visibilidad reducida. Buque varado.",
        "signal": "●● 🔔 ●● (Dos golpes de campana, campanada, dos golpes)",
        "sequence": ["bell-stroke", "bell-stroke", "bell", "bell-stroke", "bell-stroke"],
        "rule": "Regla 35(h)"
    },
    {
        "id": "pilot",
        "title": "Buque de Práctico",
        "description": "Buque en servicio de practicaje.",
        "signal": "● ● ● ● (Cuatro pitadas cortas)",
        "sequence": ["short", "short", "short", "short"],
        "rule": "Regla 35(k)"
    }
]
`