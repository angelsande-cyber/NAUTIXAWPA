// COLREG rules for vessel lights and shapes simulator.
// Note: Positions are simplified for a 2D representation.
import React from 'react';

const commonSVG = {
    power_gt50: {
      side: <svg viewBox="0 0 200 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 10 70 C 10 50, 20 50, 30 50 L 170 50 C 180 50, 190 50, 190 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><rect x="30" y="35" width="40" height="15" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 30 50 L 170 50" strokeWidth="0.5" /><path d="M 10 70 L 190 70" strokeWidth="1.5" /></svg>,
      front: <svg viewBox="0 0 100 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 10 70 C 10 40, 90 40, 90 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><rect x="35" y="35" width="30" height="35" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 10 70 L 90 70" strokeWidth="1.5" /></svg>,
      back: <svg viewBox="0 0 100 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 10 70 C 10 40, 90 40, 90 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><rect x="35" y="35" width="30" height="35" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 10 70 L 90 70" strokeWidth="1.5" /></svg>,
    },
    power_lt50: {
      side: <svg viewBox="0 0 200 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 20 70 C 20 55, 40 55, 60 55 L 170 55 C 180 55, 180 60, 180 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><path d="M 80 40 h 50 v 15 h -50 z" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 60 55 L 170 55" strokeWidth="0.5" /><path d="M 20 70 L 180 70" strokeWidth="1.5" /></svg>,
      front: <svg viewBox="0 0 100 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 15 70 C 15 50, 85 50, 85 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><path d="M 35 40 h 30 v 30 h -30 z" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 15 70 L 85 70" strokeWidth="1.5" /></svg>,
      back: <svg viewBox="0 0 100 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 15 70 C 15 50, 85 50, 85 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><path d="M 35 40 h 30 v 30 h -30 z" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 15 70 L 85 70" strokeWidth="1.5" /></svg>,
    },
    sailing: {
      side: <svg viewBox="0 0 200 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 20 70 C 20 60, 180 60, 180 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><path d="M 100 10 L 100 65 M 60 65 L 140 65" strokeWidth="1" /><path d="M 102 15 C 150 25, 140 60, 102 63" fill="hsl(var(--muted-foreground)/.1)" strokeWidth="0.5" /><path d="M 20 70 L 180 70" strokeWidth="1.5" /></svg>,
      front: <svg viewBox="0 0 100 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 15 70 C 25 60, 75 60, 85 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><path d="M 50 10 L 50 65" strokeWidth="1" /><path d="M 15 70 L 85 70" strokeWidth="1.5" /></svg>,
      back: <svg viewBox="0 0 100 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 15 70 C 25 60, 75 60, 85 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><path d="M 50 10 L 50 65" strokeWidth="1" /><path d="M 15 70 L 85 70" strokeWidth="1.5" /></svg>,
    },
    fishing: {
      side: <svg viewBox="0 0 200 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 10 70 L 10 60 C 10 50, 20 50, 30 50 L 190 50 L 190 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><rect x="30" y="35" width="40" height="15" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 150 30 L 150 65 M 140 30 L 160 30" strokeWidth="1" /><path d="M 10 70 L 190 70" strokeWidth="1.5" /></svg>,
      front: <svg viewBox="0 0 100 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 10 70 C 10 50, 90 50, 90 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><rect x="35" y="35" width="30" height="35" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 10 70 L 90 70" strokeWidth="1.5" /></svg>,
      back: <svg viewBox="0 0 100 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 10 70 C 10 50, 90 50, 90 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><rect x="35" y="35" width="30" height="35" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 10 70 L 90 70" strokeWidth="1.5" /></svg>,
    },
     tug: {
      side: <svg viewBox="0 0 200 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 10 65 C 5 50, 150 50, 150 60 L 170 70 L 10 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><rect x="40" y="35" width="50" height="15" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 10 70 L 170 70" strokeWidth="1.5" /></svg>,
      front: <svg viewBox="0 0 100 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 15 70 C 15 50, 85 50, 85 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><rect x="40" y="35" width="20" height="35" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 15 70 L 85 70" strokeWidth="1.5" /></svg>,
      back: <svg viewBox="0 0 100 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 15 70 C 15 50, 85 50, 85 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><rect x="30" y="35" width="40" height="35" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 15 70 L 85 70" strokeWidth="1.5" /></svg>,
    },
    power_lt12: {
      side: <svg viewBox="0 0 200 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 30 70 C 30 60, 170 60, 170 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><path d="M 60 55 h 80 v 5 h -80 z" fill="hsl(var(--card))" strokeWidth="0.5" /><path d="M 30 70 L 170 70" strokeWidth="1.5" /></svg>,
      front: <svg viewBox="0 0 100 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 20 70 C 20 55, 80 55, 80 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><path d="M 20 70 L 80 70" strokeWidth="1.5" /></svg>,
      back: <svg viewBox="0 0 100 80" className="w-full h-full fill-current stroke-current text-foreground/50"><path d="M 20 70 C 20 55, 80 55, 80 70 Z" strokeWidth="1" fill="hsl(var(--muted))" /><path d="M 20 70 L 80 70" strokeWidth="1.5" /></svg>,
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
        explanation: "Un buque de P.M. en navegación exhibirá una luz de tope en proa (dos si eslora >50m, la de popa más alta), luces de costado y una luz de alcance.\n\nExcepciones:\n- <50m: La segunda luz de tope es opcional. Usará el esquema de un buque <50m.\n- <12m: Puede exhibir una luz blanca todo horizonte y luces de costado.\n- <7m y vel. max <7kn: Puede exhibir una luz blanca todo horizonte y, si es posible, luces de costado."
    },
    {
        id: 'R24',
        title: 'Remolque y Empuje',
        description: 'Remolcando por la popa (<200m).',
        svg: commonSVG.tug,
        lights: [
            { ...PDV_LIGHTS[0], desc: 'Luz de tope #1 (vertical)', position: { bow: { x: 50, y: 30 }, starboard: { x: 30, y: 30 }, stern: { x: 0, y: 0 } } },
            { id: 'masthead-2', color: 'white', desc: 'Luz de tope #2 (vertical)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 37 }, starboard: { x: 30, y: 37 }, stern: { x: 0, y: 0 } } },
            PDV_LIGHTS[2], PDV_LIGHTS[3],
            { id: 'towing-light', color: 'yellow', desc: 'Luz de remolque (135°)', arc: { bow: false, starboard: false, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 0, y: 0 }, stern: { x: 50, y: 45 } } },
        ],
        marks: [
             { id: 'diamond-tow', shape: 'diamond', desc: 'Una marca bicónica (solo si remolque > 200m).', position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Remolcador: Exhibe dos luces de tope en línea vertical. Si el remolque (desde la popa del remolcador a la del remolcado) es >200m, exhibirá tres luces. También luces de costado y una luz de remolque (amarilla) por encima de la de alcance.\nRemolcado: Exhibe luces de costado y de alcance.\nEmpuje/Abarloado: Si no forman una unidad compacta, el que empuja muestra dos luces de tope, de costado y de alcance. El empujado, luces de costado.\nMarca diurna: Si el remolque >200m, tanto el remolcador como el remolcado exhibirán una marca bicónica."
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
        explanation: "Debe exhibir luces de costado y luz de alcance. \n\nOpcionalmente, puede llevar en el tope del palo dos luces todo horizonte en vertical (roja sobre verde), pero no junto con las luces combinadas en un solo farol.\n\nUn velero <20m puede combinar las tres luces en un solo farol en el tope del palo.\n\nSi navega también a motor, debe exhibir de día una marca cónica con el vértice hacia abajo y mostrar las luces de un buque de P.M."
    },
    {
        id: 'R26',
        title: 'Buque de Pesca',
        description: 'Dedicado a la pesca de arrastre.',
        svg: commonSVG.fishing,
        lights: [
            { id: 'trawl-g', color: 'green', desc: 'Luz verde todo horizonte (Arrastre)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'trawl-w', color: 'white', desc: 'Luz blanca todo horizonte (debajo)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
            { ...PDV_LIGHTS[2], desc: 'Luces de costado (con arrancada)' },
            { ...PDV_LIGHTS[3], desc: 'Luces de costado (con arrancada)' },
            { ...PDV_LIGHTS[4], desc: 'Luz de alcance (con arrancada)' },
        ],
        marks: [
            { id: 'trawl-mark', shape: 'bicone-vertex-together', desc: 'Dos conos unidos por sus vértices.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ],
        explanation: "Pesca de Arrastre: Dos luces todo horizonte en vertical (verde sobre blanca). De día, dos conos unidos por el vértice.\n\nOtro tipo de Pesca (no de arrastre): Dos luces todo horizonte en vertical (roja sobre blanca). De día, la misma marca de dos conos.\n\nAmbos tipos, si tienen arrancada, añaden luces de costado y de alcance. Si el aparejo se extiende >150m horizontalmente, se añade una luz blanca todo horizonte o un cono con el vértice hacia arriba en la dirección del mismo."
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
        explanation: "Maniobra Restringida (dragado, buceo, etc.): Exhibe las señales mostradas (roja-blanca-roja y bola-bicónica-bola). Si tiene arrancada, añade las luces de un buque de P.M. (tope, costado, alcance).\n\nSin Gobierno: Exhibe dos luces rojas todo horizonte en vertical y, de día, dos bolas en vertical. Si tiene arrancada, añade luces de costado y de alcance (pero NO de tope)."
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
        explanation: "Fondeado: Exhibe una luz blanca todo horizonte en proa (y una segunda más baja en popa si eslora >= 50m). De día, una bola en proa. Los buques <50m pueden exhibir una sola luz blanca todo horizonte.\n\nVarado: Exhibe las luces de fondeo y, además, dos luces rojas todo horizonte en vertical. De día, tres bolas en línea vertical."
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
