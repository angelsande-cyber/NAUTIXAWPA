
// COLREG rules for vessel lights and shapes simulator.
// Note: Positions are simplified for a 2D representation.
import React from 'react';

const commonSVG = {
    power_gt50: { // Inspired by Container Ship
      side: <svg viewBox="0 0 200 80" className="w-full h-full"><g transform="translate(0, 10)"><path d="M 5 60 L 195 60 L 195 55 C 190 55, 185 40, 175 40 L 165 40 L 165 30 L 155 30 L 155 40 L 45 40 L 45 35 L 25 35 L 25 40 L 15 40 C 5 40, 5 55, 5 55 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 5 60 L 195 60" stroke="black" strokeWidth="1.5" /></g></svg>,
      front: <svg viewBox="0 0 100 80" className="w-full h-full"><g transform="translate(0, 10)"><path d="M 10 60 L 90 60 L 90 55 C 85 40, 75 30, 65 30 L 35 30 C 25 30, 15 40, 10 55 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 10 60 L 90 60" stroke="black" strokeWidth="1.5" /></g></svg>,
      back: <svg viewBox="0 0 100 80" className="w-full h-full"><g transform="translate(0, 10)"><path d="M 10 60 L 90 60 L 90 30 L 10 30 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 10 60 L 90 60" stroke="black" strokeWidth="1.5" /></g></svg>,
    },
    power_lt50: { // Inspired by Big Yacht
      side: <svg viewBox="0 0 200 80" className="w-full h-full"><g transform="translate(0, 5)"><path d="M 10 65 C 20 50, 190 55, 195 60 L 190 65 L 15 65 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 50 60 L 50 45 L 150 45 C 160 45, 160 55, 150 55 L 60 55 L 60 60 Z" fill="#333" stroke="black" strokeWidth="0.5" /><path d="M 65 40 L 130 40 L 125 45 L 70 45 Z" fill="#333" stroke="black" strokeWidth="0.5" /><path d="M 10 65 L 195 65" stroke="black" strokeWidth="1.5" /></g></svg>,
      front: <svg viewBox="0 0 100 80" className="w-full h-full"><g transform="translate(0, 5)"><path d="M 10 65 C 20 50, 80 50, 90 65 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 50 35 L 65 50 L 35 50 Z" fill="#333" stroke="black" strokeWidth="0.5"/><path d="M 30 50 H 70 V 65 H 30 Z" fill="#333" strokeWidth="0.5"/><path d="M 10 65 L 90 65" stroke="black" strokeWidth="1.5" /></g></svg>,
      back: <svg viewBox="0 0 100 80" className="w-full h-full"><g transform="translate(0, 5)"><path d="M 10 65 C 20 50, 80 50, 90 65 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 20 45 H 80 V 65 H 20 Z" fill="#333" stroke="black" strokeWidth="0.5"/><path d="M 10 65 L 90 65" stroke="black" strokeWidth="1.5" /></g></svg>,
    },
    sailing: { // Inspired by Sailboat
      side: <svg viewBox="0 0 200 80" className="w-full h-full"><g transform="translate(0, 5)"><path d="M 20 65 C 40 50, 160 50, 180 65 L 175 65 L 25 65 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 90 10 L 95 65 M 50 65 H 150" stroke="black" strokeWidth="1" /><path d="M 97 15 C 110 30, 110 50, 97 63" fill="#444" stroke="black" strokeWidth="0.5" /><path d="M 93 15 C 60 30, 70 63, 93 63" fill="#333" stroke="black" strokeWidth="0.5" /><path d="M 20 65 L 180 65" stroke="black" strokeWidth="1.5" /></g></svg>,
      front: <svg viewBox="0 0 100 80" className="w-full h-full"><g transform="translate(0, 5)"><path d="M 15 65 C 25 55, 75 55, 85 65 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 50 10 L 50 65" stroke="black" strokeWidth="1" /><path d="M 52 15 C 70 30, 65 63, 52 63" fill="#444" stroke="black" /><path d="M 15 65 L 85 65" stroke="black" strokeWidth="1.5" /></g></svg>,
      back: <svg viewBox="0 0 100 80" className="w-full h-full"><g transform="translate(0, 5)"><path d="M 15 65 C 25 55, 75 55, 85 65 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 50 10 L 50 65" stroke="black" strokeWidth="1" /><path d="M 48 15 C 30 30, 35 63, 48 63" fill="#444" stroke="black" /><path d="M 15 65 L 85 65" stroke="black" strokeWidth="1.5" /></g></svg>,
    },
    fishing: { // Inspired by Trawler
      side: <svg viewBox="0 0 200 80" className="w-full h-full"><g transform="translate(0, 10)"><path d="M 10 60 L 190 60 L 190 55 C 180 55, 170 45, 150 45 L 110 45 L 110 30 L 60 30 L 60 45 L 30 45 C 20 45, 15 50, 10 55 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 140 45 L 120 20 M 115 20 H 145" stroke="black" strokeWidth="1" /><path d="M 10 60 L 190 60" stroke="black" strokeWidth="1.5" /></g></svg>,
      front: <svg viewBox="0 0 100 80" className="w-full h-full"><g transform="translate(0, 10)"><path d="M 10 60 C 10 45, 90 45, 90 60 Z" stroke="black" strokeWidth="1" fill="black" /><rect x="30" y="30" width="40" height="30" fill="#333" stroke="black" strokeWidth="0.5" /><path d="M 10 60 L 90 60" stroke="black" strokeWidth="1.5" /></g></svg>,
      back: <svg viewBox="0 0 100 80" className="w-full h-full"><g transform="translate(0, 10)"><path d="M 10 60 C 10 45, 90 45, 90 60 Z" stroke="black" strokeWidth="1" fill="black" /><rect x="30" y="30" width="40" height="30" fill="#333" stroke="black" strokeWidth="0.5" /><path d="M 10 60 L 90 60" stroke="black" strokeWidth="1.5" /></g></svg>,
    },
     tug: { // Inspired by Small Ferry/Tug
      side: <svg viewBox="0 0 200 80" className="w-full h-full"><g transform="translate(0, 15)"><path d="M 20 55 L 180 55 L 180 45 L 140 45 L 140 30 L 60 30 L 60 45 L 20 45 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 20 55 L 180 55" stroke="black" strokeWidth="1.5" /></g></svg>,
      front: <svg viewBox="0 0 100 80" className="w-full h-full"><g transform="translate(0, 15)"><path d="M 20 55 L 80 55 L 80 30 L 20 30 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 20 55 L 80 55" stroke="black" strokeWidth="1.5" /></g></svg>,
      back: <svg viewBox="0 0 100 80" className="w-full h-full"><g transform="translate(0, 15)"><path d="M 20 55 L 80 55 L 80 30 L 20 30 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 20 55 L 80 55" stroke="black" strokeWidth="1.5" /></g></svg>,
    },
    power_lt12: { // Inspired by Speedboat
      side: <svg viewBox="0 0 200 80" className="w-full h-full"><g transform="translate(0, 10)"><path d="M 30 60 C 40 50, 170 50, 180 60 L 170 60 L 40 60 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 70 50 L 140 50 L 130 60 L 80 60 Z" fill="#333" stroke="black" strokeWidth="0.5" /><path d="M 30 60 L 180 60" stroke="black" strokeWidth="1.5" /></g></svg>,
      front: <svg viewBox="0 0 100 80" className="w-full h-full"><g transform="translate(0, 10)"><path d="M 20 60 C 30 50, 70 50, 80 60 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 20 60 L 80 60" stroke="black" strokeWidth="1.5" /></g></svg>,
      back: <svg viewBox="0 0 100 80" className="w-full h-full"><g transform="translate(0, 10)"><path d="M 20 60 L 80 60 L 80 55 L 20 55 Z" stroke="black" strokeWidth="1" fill="black" /><path d="M 20 60 L 80 60" stroke="black" strokeWidth="1.5" /></g></svg>,
    },
}

const PDV_LIGHTS = [
    { id: 'masthead-fwd', color: 'white', desc: 'Luz de tope de proa (225°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 30 }, starboard: { x: 30, y: 30 }, stern: { x: 0, y: 0 } } },
    { id: 'masthead-aft', color: 'white', desc: 'Luz de tope de popa (225°, >50m)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 25 }, starboard: { x: 70, y: 25 }, stern: { x: 0, y: 0 } } },
    { id: 'sidelight-stbd', color: 'green', desc: 'Luz de costado de estribor (112.5°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 80, y: 60 }, starboard: { x: 50, y: 60 }, stern: { x: 0, y: 0 } } },
    { id: 'sidelight-port', color: 'red', desc: 'Luz de costado de babor (112.5°)', arc: { bow: true, starboard: false, stern: false }, position: { bow: { x: 20, y: 60 }, starboard: { x: 0, y: 0 }, stern: { x: 0, y: 0 } } },
    { id: 'sternlight', color: 'white', desc: 'Luz de alcance (135°)', arc: { bow: false, starboard: false, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 0, y: 0 }, stern: { x: 50, y: 55 } } },
];

export const COLREG_RULES_DATA = [
    {
        id: 'R23',
        title: 'Buque de Propulsión Mecánica',
        description: 'Buque de P.M. en navegación.',
        svg: commonSVG.power_gt50,
        lights: [
            {...PDV_LIGHTS[0]},
            {...PDV_LIGHTS[1]},
            {...PDV_LIGHTS[2]},
            {...PDV_LIGHTS[3]},
            {...PDV_LIGHTS[4]},
        ],
        marks: [],
        explanation: "Un buque de propulsión mecánica en navegación exhibirá una luz de tope en proa (y una segunda más alta en popa si su eslora es >= 50m), luces de costado y una luz de alcance.\n\nExcepciones:\n- <50m: La segunda luz de tope es opcional. El modelo que se muestra es de un buque <50m. \n- <12m: Puede exhibir una luz blanca todo horizonte y luces de costado (combinadas o separadas).\n- <7m y vel. max <7kn: Puede exhibir una luz blanca todo horizonte y, si es posible, luces de costado."
    },
    {
        id: 'R24',
        title: 'Remolque y Empuje',
        description: 'Remolcando por la popa.',
        svg: commonSVG.tug,
        lights: [
            { ...PDV_LIGHTS[0], desc: 'Luz de tope #1 (vertical)', position: { bow: { x: 50, y: 30 }, starboard: { x: 30, y: 30 }, stern: { x: 0, y: 0 } } },
            { id: 'masthead-2', color: 'white', desc: 'Luz de tope #2 (vertical)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 37 }, starboard: { x: 30, y: 37 }, stern: { x: 0, y: 0 } } },
            PDV_LIGHTS[2], PDV_LIGHTS[3],
            { ...PDV_LIGHTS[4], position: { bow: {x:0,y:0}, starboard:{x:0,y:0}, stern: {x:50, y: 40} } }, // Sternlight
            { id: 'towing-light', color: 'yellow', desc: 'Luz de remolque (135°)', arc: { bow: false, starboard: false, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 0, y: 0 }, stern: { x: 50, y: 35 } } },
        ],
        marks: [
             { id: 'diamond-tow', shape: 'diamond', desc: 'Una marca bicónica (solo si remolque > 200m).', position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Remolque: Exhibe dos luces de tope en línea vertical (tres si el remolque es >200m). Además, luces de costado y una luz de remolque (amarilla) por encima de la luz de alcance. El buque remolcado exhibe luces de costado y de alcance.\n\nEmpuje: Si no es una unidad compacta, el buque que empuja muestra luces de buque de P.M. Si es una unidad compacta, se considera un solo buque de P.M.\n\nMarca diurna: Si la longitud del remolque es >200m, tanto el remolcador como el remolcado exhibirán una marca bicónica donde sea más visible."
    },
    {
        id: 'R25',
        title: 'Buque de Vela',
        description: 'Un buque de vela navegando.',
        svg: commonSVG.sailing,
        lights: [
            PDV_LIGHTS[2], PDV_LIGHTS[3], PDV_LIGHTS[4]
        ],
        marks: [
            { id: 'cone-sailing-motor', shape: 'cone-down', desc: 'Marca cónica (si navega a motor).', position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Debe exhibir luces de costado y luz de alcance. \n\nOpcionalmente, puede llevar en el tope del palo dos luces todo horizonte en vertical (roja sobre verde), pero no junto con las luces combinadas en un solo farol.\n\nUn velero <20m puede combinar las tres luces (costado y alcance) en un solo farol en el tope del palo.\n\nSi navega también a motor, debe exhibir de día una marca cónica con el vértice hacia abajo y mostrar las luces de un buque de P.M."
    },
    {
        id: 'R26',
        title: 'Buque de Pesca',
        description: 'Dedicado a la pesca de arrastre.',
        svg: commonSVG.fishing,
        lights: [
            { id: 'trawl-g', color: 'green', desc: 'Verde todo horizonte (Arrastre)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'trawl-w', color: 'white', desc: 'Blanca todo horizonte (debajo)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
            { ...PDV_LIGHTS[2], desc: 'Luces de costado (con arrancada)' },
            { ...PDV_LIGHTS[3], desc: 'Luces de costado (con arrancada)' },
            { ...PDV_LIGHTS[4], desc: 'Luz de alcance (con arrancada)' },
        ],
        marks: [
            { id: 'trawl-mark', shape: 'cones-vertex-together', desc: 'Dos conos unidos por sus vértices.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Pesca de Arrastre: Dos luces todo horizonte en vertical (verde sobre blanca). De día, dos conos unidos por el vértice.\n\nOtro tipo de Pesca (no arrastre): Exhibirá dos luces todo horizonte en vertical (roja sobre blanca). De día, la misma marca.\n\nAmbos tipos, si tienen arrancada, añaden luces de costado y de alcance. Si el aparejo se extiende >150m horizontalmente, se añade una luz blanca todo horizonte o un cono con el vértice hacia arriba en la dirección del mismo."
    },
    {
        id: 'R27',
        title: 'Sin Gobierno / Maniobra Restringida',
        description: 'Buque con capacidad de maniobra restringida.',
        svg: commonSVG.power_gt50,
        lights: [
            { id: 'ram-r1', color: 'red', desc: 'Roja-Blanca-Roja todo horizonte en vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 50, y: 20 } } },
            { id: 'ram-w', color: 'white', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
            { id: 'ram-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 50, y: 36 } } },
            {...PDV_LIGHTS[0], desc: "Luces de P.M. (solo si tiene arrancada)"},
            {...PDV_LIGHTS[1], desc: ""},
            {...PDV_LIGHTS[2], desc: ""},
            {...PDV_LIGHTS[3], desc: ""},
            {...PDV_LIGHTS[4], desc: ""},
        ],
        marks: [
            { id: 'ram-b1', shape: 'ball', desc: 'Bola-Bicónica-Bola en vertical.', position: { bow: { x: 50, y: 15 }, starboard: { x: 40, y: 15 }, stern: { x: 50, y: 15 } } },
            { id: 'ram-d', shape: 'diamond', desc: '', position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
            { id: 'ram-b2', shape: 'ball', desc: '', position: { bow: { x: 50, y: 41 }, starboard: { x: 40, y: 41 }, stern: { x: 50, y: 41 } } },
        ],
        explanation: "Maniobra Restringida (dragado, operaciones submarinas, etc.): Exhibe las señales mostradas (roja-blanca-roja en vertical y bola-bicónica-bola). Si tiene arrancada, añade las luces normales de un buque de P.M. (topes, costados, alcance).\n\nSin Gobierno: Exhibe dos luces rojas todo horizonte en vertical y, de día, dos bolas en vertical. Si tiene arrancada, añade luces de costado y de alcance (pero NUNCA luces de tope)."
    },
    {
        id: 'R28',
        title: 'Restringido por Calado',
        description: 'Buque con navegación restringida por su calado.',
        svg: commonSVG.power_gt50,
        lights: [
            ...PDV_LIGHTS,
            { id: 'cbd-r1', color: 'red', desc: 'Tres luces rojas todo horizonte en vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 55, y: 20 } } },
            { id: 'cbd-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 55, y: 28 } } },
            { id: 'cbd-r3', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 55, y: 36 } } },
        ],
        marks: [
            { id: 'cylinder', shape: 'cylinder', desc: 'Un cilindro.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Un buque restringido por su calado, además de las luces de un buque de P.M., puede exhibir tres luces rojas todo horizonte en línea vertical o, de día, un cilindro."
    },
    {
        id: 'R30',
        title: 'Fondeado / Varado',
        description: 'Buque fondeado.',
        svg: commonSVG.power_gt50,
        lights: [
            { id: 'anchor-fwd', color: 'white', desc: 'Luz de fondeo todo horizonte en proa.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 30 }, starboard: { x: 20, y: 30 }, stern: { x: 50, y: 30 } } },
            { id: 'anchor-aft', color: 'white', desc: 'Luz de fondeo en popa (más baja, si >50m).', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 40 }, starboard: { x: 85, y: 55 }, stern: { x: 50, y: 40 } } },
        ],
        marks: [
            { id: 'ball', shape: 'ball', desc: 'Una bola en la proa.', position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Fondeado: Exhibe una luz blanca todo horizonte en proa (y una segunda más baja en popa si eslora >= 50m). De día, una bola en proa. Los buques <50m pueden exhibir una sola luz blanca todo horizonte. \n\nVarado: Exhibe las luces de fondeo y, además, dos luces rojas todo horizonte en vertical. De día, tres bolas en línea vertical."
    },
    {
        id: 'R29',
        title: 'Buque de Práctico',
        description: 'Buque en servicio de practicaje.',
        svg: commonSVG.power_lt50,
        lights: [
            { id: 'pilot-w', color: 'white', desc: 'Luz blanca todo horizonte.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'pilot-r', color: 'red', desc: 'Luz roja todo horizonte (debajo).', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
            { ...PDV_LIGHTS[2], desc: 'Luces de costado (si navega).' },
            { ...PDV_LIGHTS[3], desc: 'Luces de costado (si navega).' },
            { ...PDV_LIGHTS[4], desc: 'Luz de alcance (si navega).' },
        ],
        marks: [],
        explanation: "Exhibe dos luces todo horizonte en vertical: blanca sobre roja. Si está en navegación, muestra además las luces de costado y de alcance. Si está fondeado, muestra las luces de fondeo además de las de práctico. De día no exhibe marcas especiales, solo la bandera 'H'."
    },
];

    
