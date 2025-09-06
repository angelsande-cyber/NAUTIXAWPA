// Simplified COLREG rules for vessel lights and shapes simulator

const shipSVG = {
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
}

export const COLREG_RULES_DATA = [
    {
        rule: 'R23a',
        title: 'Buque de propulsión mecánica en navegación',
        description: 'Buque de eslora > 50m.',
        svg: shipSVG,
        lights: [
            { id: 'masthead-fwd', color: 'white', desc: 'Luz de tope de proa (225°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 25 }, starboard: { x: 30, y: 25 }, stern: { x: 0, y: 0 } } },
            { id: 'masthead-aft', color: 'white', desc: 'Luz de tope de popa (225°, más alta)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 20 }, starboard: { x: 70, y: 20 }, stern: { x: 0, y: 0 } } },
            { id: 'sidelight-stbd', color: 'green', desc: 'Luz de costado de estribor (112.5°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 80, y: 50 }, starboard: { x: 50, y: 50 }, stern: { x: 0, y: 0 } } },
            { id: 'sidelight-port', color: 'red', desc: 'Luz de costado de babor (112.5°)', arc: { bow: true, starboard: false, stern: false }, position: { bow: { x: 20, y: 50 }, starboard: { x: 0, y: 0 }, stern: { x: 0, y: 0 } } },
            { id: 'sternlight', color: 'white', desc: 'Luz de alcance (135°)', arc: { bow: false, starboard: true, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
        ],
        marks: []
    },
    {
        rule: 'R25a',
        title: 'Buque de vela en navegación',
        description: 'Muestra luces de costado y de alcance. Puede mostrar dos luces todo horizonte (roja sobre verde) en el tope del palo.',
        svg: shipSVG,
        lights: [
            { id: 'sidelight-stbd', color: 'green', desc: 'Luz de costado de estribor (112.5°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 80, y: 50 }, starboard: { x: 50, y: 50 }, stern: { x: 0, y: 0 } } },
            { id: 'sidelight-port', color: 'red', desc: 'Luz de costado de babor (112.5°)', arc: { bow: true, starboard: false, stern: false }, position: { bow: { x: 20, y: 50 }, starboard: { x: 0, y: 0 }, stern: { x: 0, y: 0 } } },
            { id: 'sternlight', color: 'white', desc: 'Luz de alcance (135°)', arc: { bow: false, starboard: true, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
            { id: 'allround-red', color: 'red', desc: 'Luz roja todo horizonte (opcional)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 15 }, starboard: { x: 30, y: 15 }, stern: { x: 50, y: 15 } } },
            { id: 'allround-green', color: 'green', desc: 'Luz verde todo horizonte (opcional)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 22 }, starboard: { x: 30, y: 22 }, stern: { x: 50, y: 22 } } },
        ],
        marks: [
            { id: 'cone-down', shape: 'cone-down', desc: 'Un cono con el vértice hacia abajo (si usa propulsión mecánica).', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ]
    },
    {
        rule: 'R30a',
        title: 'Buque fondeado',
        description: 'Buque > 50m fondeado. Debe mostrar luces de fondeo y las luces de cubierta si es > 100m.',
        svg: shipSVG,
        lights: [
            { id: 'anchor-fwd', color: 'white', desc: 'Luz de fondeo todo horizonte en proa', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'anchor-aft', color: 'white', desc: 'Luz de fondeo todo horizonte en popa (más baja)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 40 }, starboard: { x: 85, y: 40 }, stern: { x: 50, y: 40 } } },
        ],
        marks: [
            { id: 'ball', shape: 'ball', desc: 'Una bola en la proa.', position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
        ]
    },
    {
        rule: 'R28',
        title: 'Buque restringido por su calado',
        description: 'Además de las luces de un buque de propulsión mecánica.',
        svg: shipSVG,
        lights: [
            { id: 'masthead-fwd', color: 'white', desc: 'Luz de tope de proa', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 25 }, starboard: { x: 30, y: 25 }, stern: { x: 0, y: 0 } } },
            { id: 'masthead-aft', color: 'white', desc: 'Luz de tope de popa', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 20 }, starboard: { x: 70, y: 20 }, stern: { x: 0, y: 0 } } },
            { id: 'sidelight-stbd', color: 'green', desc: 'Luz de costado de estribor', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 80, y: 50 }, starboard: { x: 50, y: 50 }, stern: { x: 0, y: 0 } } },
            { id: 'sidelight-port', color: 'red', desc: 'Luz de costado de babor', arc: { bow: true, starboard: false, stern: false }, position: { bow: { x: 20, y: 50 }, starboard: { x: 0, y: 0 }, stern: { x: 0, y: 0 } } },
            { id: 'sternlight', color: 'white', desc: 'Luz de alcance', arc: { bow: false, starboard: true, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
            { id: 'ram-1', color: 'red', desc: 'Tres luces rojas todo horizonte en línea vertical', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 55, y: 20 } } },
            { id: 'ram-2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 55, y: 28 } } },
            { id: 'ram-3', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 55, y: 36 } } },
        ],
        marks: [
            { id: 'cylinder', shape: 'cylinder', desc: 'Un cilindro.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ]
    },
    {
        rule: 'R26b',
        title: 'Buque de pesca (Arrastre)',
        description: 'Mostrando luces para un buque de arrastre. Además de las luces de costado y alcance si tiene arrancada.',
        svg: shipSVG,
        lights: [
            { id: 'trawl-g', color: 'green', desc: 'Luz verde todo horizonte', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
            { id: 'trawl-w', color: 'white', desc: 'Luz blanca todo horizonte (debajo de la verde)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
            { id: 'sidelight-stbd', color: 'green', desc: 'Luz de costado de estribor (con arrancada)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 80, y: 50 }, starboard: { x: 50, y: 50 }, stern: { x: 0, y: 0 } } },
            { id: 'sidelight-port', color: 'red', desc: 'Luz de costado de babor (con arrancada)', arc: { bow: true, starboard: false, stern: false }, position: { bow: { x: 20, y: 50 }, starboard: { x: 0, y: 0 }, stern: { x: 0, y: 0 } } },
            { id: 'sternlight', color: 'white', desc: 'Luz de alcance (con arrancada)', arc: { bow: false, starboard: true, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
        ],
        marks: [
            { id: 'cones-together', shape: 'cones-point-point', desc: 'Dos conos unidos por sus vértices.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
        ]
    }
];
