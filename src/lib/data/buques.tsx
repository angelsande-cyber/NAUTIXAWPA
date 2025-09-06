// COLREG rules for vessel lights and shapes simulator.
// Note: Positions are simplified for a 2D representation.

const commonSVG = {
    power: {
        side: (
            <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50">
                <path d="M 10 50 C 20 20, 180 20, 190 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" />
                <path d="M 40 30 L 40 20 L 70 20 L 70 30 Z" strokeWidth="1.5"/>
                <path d="M 10 50 L 190 50" strokeWidth="2" />
            </svg>
        ),
        front: (
             <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50">
                <path d="M 10 50 C 40 20, 60 20, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" />
                <path d="M 40 30 L 40 20 L 60 20 L 60 30 Z" strokeWidth="1.5" />
                <path d="M 10 50 L 90 50" strokeWidth="2" />
            </svg>
        ),
        back: (
             <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50">
                <path d="M 10 50 C 40 20, 60 20, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" />
                <path d="M 30 30 L 30 20 L 70 20 L 70 30 Z" strokeWidth="1.5" />
                <path d="M 10 50 L 90 50" strokeWidth="2" />
            </svg>
        ),
    },
    sailing: {
        side: (
             <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50">
                <path d="M 10 50 C 20 20, 180 20, 190 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" />
                <path d="M 90 10 L 90 48 M 50 48 L 130 48" strokeWidth="1.5"/>
                <path d="M 92 12 C 120 25, 120 40, 92 46" fill="hsl(var(--muted-foreground)/.2)" strokeWidth="1"/>
                <path d="M 10 50 L 190 50" strokeWidth="2" />
            </svg>
        ),
        front: (
            <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50">
                <path d="M 10 50 C 40 20, 60 20, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" />
                <path d="M 50 10 L 50 48" strokeWidth="1.5"/>
                <path d="M 10 50 L 90 50" strokeWidth="2" />
            </svg>
        ),
        back: (
            <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50">
                <path d="M 10 50 C 40 20, 60 20, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" />
                <path d="M 50 10 L 50 48" strokeWidth="1.5"/>
                <path d="M 10 50 L 90 50" strokeWidth="2" />
            </svg>
        )
    },
    fishing: {
        side: (
             <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50">
                <path d="M 10 50 C 20 20, 180 20, 190 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" />
                <path d="M 40 30 L 40 20 L 70 20 L 70 30 Z" strokeWidth="1.5"/>
                <path d="M 150 15 L 150 48 M 140 15 L 160 15" strokeWidth="1.5"/>
                <path d="M 10 50 L 190 50" strokeWidth="2" />
            </svg>
        ),
        front: (
             <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50">
                <path d="M 10 50 C 40 20, 60 20, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" />
                <path d="M 40 30 L 40 20 L 60 20 L 60 30 Z" strokeWidth="1.5" />
                <path d="M 10 50 L 90 50" strokeWidth="2" />
            </svg>
        ),
        back: (
             <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50">
                <path d="M 10 50 C 40 20, 60 20, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" />
                <path d="M 30 30 L 30 20 L 70 20 L 70 30 Z" strokeWidth="1.5" />
                <path d="M 10 50 L 90 50" strokeWidth="2" />
            </svg>
        ),
    }
}

const PDV_LIGHTS = [
    { id: 'masthead-fwd', color: 'white', desc: 'Luz de tope de proa (225°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 25 }, starboard: { x: 30, y: 25 }, stern: { x: 0, y: 0 } } },
    { id: 'masthead-aft', color: 'white', desc: 'Luz de tope de popa (225°, más alta, >50m)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 20 }, starboard: { x: 70, y: 20 }, stern: { x: 0, y: 0 } } },
    { id: 'sidelight-stbd', color: 'green', desc: 'Luz de costado de estribor (112.5°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 80, y: 50 }, starboard: { x: 50, y: 50 }, stern: { x: 0, y: 0 } } },
    { id: 'sidelight-port', color: 'red', desc: 'Luz de costado de babor (112.5°)', arc: { bow: true, starboard: false, stern: false }, position: { bow: { x: 20, y: 50 }, starboard: { x: 0, y: 0 }, stern: { x: 0, y: 0 } } },
    { id: 'sternlight', color: 'white', desc: 'Luz de alcance (135°)', arc: { bow: false, starboard: true, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
];

export const COLREG_RULES_DATA = [
    {
        rule: 'R23a',
        title: 'Buque de propulsión mecánica en navegación',
        description: 'Buque de eslora > 50m. Las luces de costado y alcance indican que está en navegación. Las luces de tope que es de propulsión mecánica.',
        svg: commonSVG.power,
        lights: PDV_LIGHTS,
        marks: []
    },
    {
        rule: 'R24a',
        title: 'Buque remolcador (remolque < 200m)',
        description: 'Dos luces de tope indican remolque. La luz amarilla de remolque sustituye a la luz de alcance en el remolcador.',
        svg: commonSVG.power,
        lights: [
            { ...PDV_LIGHTS[0], desc: 'Luz de tope #1' },
            { id: 'masthead-2', color: 'white', desc: 'Luz de tope #2', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 32 }, starboard: { x: 30, y: 32 }, stern: { x: 0, y: 0 } } },
            PDV_LIGHTS[2], PDV_LIGHTS[3],
            { id: 'towing-light', color: 'yellow', desc: 'Luz de remolque (135°)', arc: { bow: false, starboard: true, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
        ],
        marks: []
    },
    {
        rule: 'R24a-long',
        title: 'Buque remolcador (remolque > 200m)',
        description: 'Tres luces de tope indican remolque > 200m. Se exhibe una marca bicónica de día.',
        svg: commonSVG.power,
        lights: [
            { ...PDV_LIGHTS[0], desc: 'Luz de tope #1' },
            { id: 'masthead-2', color: 'white', desc: 'Luz de tope #2', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 32 }, starboard: { x: 30, y: 32 }, stern: { x: 0, y: 0 } } },
            { id: 'masthead-3', color: 'white', desc: 'Luz de tope #3', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 39 }, starboard: { x: 30, y: 39 }, stern: { x: 0, y: 0 } } },
            PDV_LIGHTS[2], PDV_LIGHTS[3],
            { id: 'towing-light', color: 'yellow', desc: 'Luz de remolque (135°)', arc: { bow: false, starboard: true, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
        ],
        marks: [
            { id: 'diamond', shape: 'diamond', desc: 'Una marca bicónica en el remolcador y en el remolcado.', position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } },
        ]
    },
    {
        rule: 'R25a',
        title: 'Buque de vela en navegación',
        description: 'Muestra luces de costado y de alcance. Opcional: dos luces todo horizonte (roja sobre verde) en el tope del palo.',
        svg: commonSVG.sailing,
        lights: [
            PDV_LIGHTS[2], PDV_LIGHTS[3], PDV_LIGHTS[4],
            { id: 'allround-red-sail', color: 'red', desc: 'Luz roja todo horizonte (opcional)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 15 }, starboard: { x: 90, y: 15 }, stern: { x: 50, y: 15 } } },
            { id: 'allround-green-sail', color: 'green', desc: 'Luz verde todo horizonte (opcional, debajo de roja)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 22 }, starboard: { x: 90, y: 22 }, stern: { x: 50, y: 22 } } },
        ],
        marks: [
            { id: 'cone-down', shape: 'cone-down', desc: 'Un cono con el vértice hacia abajo (si navega a motor).', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ]
    },
    {
        rule: 'R26b',
        title: 'Buque de pesca (Arrastre)',
        description: 'Verde sobre blanca todo horizonte. Con arrancada, muestra además luces de costado y alcance.',
        svg: commonSVG.fishing,
        lights: [
            { id: 'trawl-g', color: 'green', desc: 'Luz verde todo horizonte', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'trawl-w', color: 'white', desc: 'Luz blanca todo horizonte (debajo)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
            { ...PDV_LIGHTS[2], desc: 'Luz de costado de estribor (con arrancada)' },
            { ...PDV_LIGHTS[3], desc: 'Luz de costado de babor (con arrancada)' },
            { ...PDV_LIGHTS[4], desc: 'Luz de alcance (con arrancada)' },
        ],
        marks: [
            { id: 'trawl-mark', shape: 'bicone-point-together', desc: 'Dos conos unidos por sus vértices.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ]
    },
    {
        rule: 'R26c',
        title: 'Buque de pesca (Artes distintas al arrastre)',
        description: 'Roja sobre blanca todo horizonte. Con arrancada, muestra además luces de costado y alcance.',
        svg: commonSVG.fishing,
        lights: [
            { id: 'fish-r', color: 'red', desc: 'Luz roja todo horizonte', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'fish-w', color: 'white', desc: 'Luz blanca todo horizonte (debajo)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
            { ...PDV_LIGHTS[2], desc: 'Luz de costado de estribor (con arrancada)' },
            { ...PDV_LIGHTS[3], desc: 'Luz de costado de babor (con arrancada)' },
            { ...PDV_LIGHTS[4], desc: 'Luz de alcance (con arrancada)' },
        ],
        marks: [
            { id: 'trawl-mark', shape: 'bicone-point-together', desc: 'Dos conos unidos por sus vértices.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ]
    },
    {
        rule: 'R27a',
        title: 'Buque sin gobierno',
        description: 'No puede maniobrar. No debe mostrar luces de costado/alcance a menos que tenga arrancada.',
        svg: commonSVG.power,
        lights: [
            { id: 'nuc-r1', color: 'red', desc: 'Dos luces rojas todo horizonte en línea vertical', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'nuc-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
        ],
        marks: [
            { id: 'nuc-b1', shape: 'ball', desc: 'Dos bolas en línea vertical', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'nuc-b2', shape: 'ball', desc: '', position: { bow: { x: 50, y: 35 }, starboard: { x: 40, y: 35 }, stern: { x: 50, y: 35 } } },
        ]
    },
    {
        rule: 'R27b',
        title: 'Buque con maniobra restringida',
        description: 'Por la naturaleza de su trabajo, no puede apartarse. Con arrancada, muestra además luces de tope, costado y alcance.',
        svg: commonSVG.power,
        lights: [
            { id: 'ram-r1', color: 'red', desc: 'Roja-Blanca-Roja todo horizonte en vertical', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 50, y: 20 } } },
            { id: 'ram-w', color: 'white', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
            { id: 'ram-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 50, y: 36 } } },
        ],
        marks: [
            { id: 'ram-b1', shape: 'ball', desc: 'Bola-Bicónica-Bola en vertical', position: { bow: { x: 50, y: 15 }, starboard: { x: 40, y: 15 }, stern: { x: 50, y: 15 } } },
            { id: 'ram-d', shape: 'diamond', desc: '', position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
            { id: 'ram-b2', shape: 'ball', desc: '', position: { bow: { x: 50, y: 41 }, starboard: { x: 40, y: 41 }, stern: { x: 50, y: 41 } } },
        ]
    },
    {
        rule: 'R28',
        title: 'Buque restringido por su calado',
        description: 'Además de las luces de un buque de propulsión mecánica.',
        svg: commonSVG.power,
        lights: [
            ...PDV_LIGHTS,
            { id: 'cbd-r1', color: 'red', desc: 'Tres luces rojas todo horizonte en línea vertical', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 55, y: 20 } } },
            { id: 'cbd-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 55, y: 28 } } },
            { id: 'cbd-r3', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 55, y: 36 } } },
        ],
        marks: [
            { id: 'cylinder', shape: 'cylinder', desc: 'Un cilindro.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ]
    },
     {
        rule: 'R29a',
        title: 'Buque de práctico en servicio',
        description: 'Blanca sobre roja todo horizonte. Adicionalmente, si está en navegación, las luces de costado y alcance. Si está fondeado, la luz de fondeo.',
        svg: commonSVG.power,
        lights: [
            { id: 'pilot-w', color: 'white', desc: 'Luz blanca todo horizonte', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'pilot-r', color: 'red', desc: 'Luz roja todo horizonte (debajo)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
            { ...PDV_LIGHTS[2], desc: 'Luz de costado de estribor (si navega)' },
            { ...PDV_LIGHTS[3], desc: 'Luz de costado de babor (si navega)' },
            { ...PDV_LIGHTS[4], desc: 'Luz de alcance (si navega)' },
        ],
        marks: []
    },
    {
        rule: 'R30a',
        title: 'Buque fondeado',
        description: 'Buque > 50m fondeado. Muestra una luz blanca todo horizonte en proa y otra más baja en popa.',
        svg: commonSVG.power,
        lights: [
            { id: 'anchor-fwd', color: 'white', desc: 'Luz de fondeo todo horizonte en proa', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'anchor-aft', color: 'white', desc: 'Luz de fondeo todo horizonte en popa (más baja)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 40 }, starboard: { x: 85, y: 40 }, stern: { x: 50, y: 40 } } },
        ],
        marks: [
            { id: 'ball', shape: 'ball', desc: 'Una bola en la proa.', position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
        ]
    },
    {
        rule: 'R30d',
        title: 'Buque varado',
        description: 'Además de las luces de fondeo, muestra dos luces rojas todo horizonte en vertical.',
        svg: commonSVG.power,
        lights: [
            { id: 'anchor-fwd', color: 'white', desc: 'Luz de fondeo en proa', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'aground-r1', color: 'red', desc: 'Dos luces rojas todo horizonte en vertical', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 30 }, starboard: { x: 45, y: 30 }, stern: { x: 55, y: 30 } } },
            { id: 'aground-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 38 }, starboard: { x: 45, y: 38 }, stern: { x: 55, y: 38 } } },
        ],
        marks: [
            { id: 'aground-b1', shape: 'ball', desc: 'Tres bolas en línea vertical', position: { bow: { x: 55, y: 25 }, starboard: { x: 45, y: 25 }, stern: { x: 55, y: 25 } } },
            { id: 'aground-b2', shape: 'ball', desc: '', position: { bow: { x: 55, y: 35 }, starboard: { x: 45, y: 35 }, stern: { x: 55, y: 35 } } },
            { id: 'aground-b3', shape: 'ball', desc: '', position: { bow: { x: 55, y: 45 }, starboard: { x: 45, y: 45 }, stern: { x: 55, y: 45 } } },
        ]
    },
];
