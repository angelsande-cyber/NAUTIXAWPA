
// COLREG rules for vessel lights and shapes simulator.
// Note: Positions are simplified for a 2D representation.

const commonSVG = {
    // Inspired by container ship / cargo vessel
    power_gt50: { 
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 5 50 L 5 40 C 5 35, 10 35, 15 35 L 155 35 L 195 35 L 195 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 20 35 L 20 25 L 50 25 L 50 35 M 160 35 L 160 20 L 185 20 L 185 35 M 60 32 L 150 32 L 150 28 L 60 28 Z" fill="hsl(var(--card))" strokeWidth="1" /><path d="M 5 50 L 195 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 10 30, 90 30, 90 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 20 L 70 20 L 70 50 L 30 50 Z" fill="hsl(var(--card))" strokeWidth="1" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 10 30, 90 30, 90 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 20 L 70 20 L 70 50 L 30 50 Z" fill="hsl(var(--card))" strokeWidth="1" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
    },
    // Inspired by modern yacht
    power_lt50: {
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 L 10 45 C 20 35, 150 35, 190 48 L 190 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 50 42 C 60 30, 100 30, 120 42 L 110 48 L 60 48 Z" fill="hsl(var(--card))" strokeWidth="1.5"/><path d="M 10 50 L 190 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 20 30, 80 30, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 40 48 L 60 48 C 70 35, 30 35, 40 48 Z" fill="hsl(var(--card))" strokeWidth="1.5"/><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 20 30, 80 30, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 48 L 70 48 L 70 40 C 60 35, 40 35, 30 40 Z" fill="hsl(var(--card))" strokeWidth="1.5"/><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
    },
     // Inspired by speedboat
    power_lt12: {
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 15 50 L 20 42 C 30 40, 150 40, 170 45 L 190 48 L 190 52 L 185 52 C 150 55, 30 55, 15 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 40 45 L 60 45 L 70 42 L 50 42 Z" strokeWidth="1"/><path d="M 15 51 L 190 51" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 15 50 C 25 40, 75 40, 85 50 L 15 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 15 50 L 85 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 15 50 L 85 50 L 85 45 C 75 42, 25 42, 15 45 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 15 50 L 85 50" strokeWidth="2" /></svg>,
    },
    // Inspired by modern sloop
    sailing: {
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 20 40, 180 40, 190 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 90 10 L 90 48 M 50 48 L 130 48" strokeWidth="1.5"/><path d="M 92 12 C 140 25, 130 45, 92 46" fill="hsl(var(--muted-foreground)/.2)" strokeWidth="1"/><path d="M 10 50 L 190 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 40 40, 60 40, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 50 10 L 50 48" strokeWidth="1.5"/><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 40 40, 60 40, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 50 10 L 50 48" strokeWidth="1.5"/><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>
    },
    // Inspired by fishing trawler
    fishing: {
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 L 10 40 C 10 30, 20 30, 30 30 L 190 30 L 190 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 30 L 30 15 L 70 15 L 70 30" fill="hsl(var(--card))" strokeWidth="1"/><path d="M 150 15 L 150 48 M 140 15 L 160 15" strokeWidth="1.5"/><path d="M 10 50 L 190 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 10 35, 90 35, 90 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 35 20 L 65 20 L 65 50 L 35 50 Z" fill="hsl(var(--card))" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 10 35, 90 35, 90 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 35 20 L 65 20 L 65 50 L 35 50 Z" fill="hsl(var(--card))" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
    },
    // Inspired by harbor tug
     tug: {
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 45 C 5 30, 150 30, 150 40 L 170 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 50 30 L 50 15 L 80 15 L 80 30 Z" fill="hsl(var(--card))" strokeWidth="1.5"/><path d="M 10 50 L 170 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 10 35, 90 35, 90 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 40 30 L 40 15 L 60 15 L 60 30 Z" fill="hsl(var(--card))" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 L 90 50 L 90 40 C 80 35, 20 35, 10 40 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 30 L 30 15 L 70 15 L 70 30 Z" fill="hsl(var(--card))" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
    }
}

const PDV_LIGHTS = [
    { id: 'masthead-fwd', color: 'white', desc: 'Luz de tope de proa (225°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 25 }, starboard: { x: 30, y: 25 }, stern: { x: 0, y: 0 } } },
    { id: 'masthead-aft', color: 'white', desc: 'Luz de tope de popa (225°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 20 }, starboard: { x: 70, y: 20 }, stern: { x: 0, y: 0 } } },
    { id: 'sidelight-stbd', color: 'green', desc: 'Luz de costado de estribor (112.5°)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 80, y: 50 }, starboard: { x: 50, y: 50 }, stern: { x: 0, y: 0 } } },
    { id: 'sidelight-port', color: 'red', desc: 'Luz de costado de babor (112.5°)', arc: { bow: true, starboard: false, stern: false }, position: { bow: { x: 20, y: 50 }, starboard: { x: 0, y: 0 }, stern: { x: 0, y: 0 } } },
    { id: 'sternlight', color: 'white', desc: 'Luz de alcance (135°)', arc: { bow: false, starboard: true, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
];

export const COLREG_RULES_DATA = [
    {
        category: 'Propulsión Mecánica',
        rules: [
            {
                id: 'R23a',
                title: 'Buque de P.M. en navegación',
                description: 'Buque de propulsión mecánica en navegación.',
                svg: commonSVG.power_gt50,
                lights: PDV_LIGHTS,
                marks: [],
                explanation: "Un buque de propulsión mecánica (P.M.) en navegación exhibirá:\n- Una luz de tope en proa (dos si >50m, la de popa más alta).\n- Luces de costado.\n- Una luz de alcance.\n\nExcepciones:\n- **<50m:** La segunda luz de tope es opcional.\n- **<12m:** Puede exhibir una luz blanca todo horizonte y luces de costado.\n- **<7m y vel. max <7kn:** Puede exhibir una luz blanca todo horizonte y, si es posible, luces de costado."
            },
             {
                id: 'R23c',
                title: 'Aerodeslizador',
                description: 'Navegando sin desplazamiento.',
                svg: commonSVG.power_lt50,
                lights: [
                    ...PDV_LIGHTS,
                    { id: 'hovercraft-flash', color: 'yellow', flash: true, desc: 'Luz amarilla centelleante todo horizonte', arc: { bow: true, starboard: true, stern: true }, position: { bow: {x: 50, y: 15}, starboard: {x:50, y:15}, stern: {x:50, y:15}}}
                ],
                marks: [],
                explanation: "Cuando un aerodeslizador navega sin desplazamiento (flotando sobre su colchón de aire), debe exhibir las luces de un buque de P.M. de su misma eslora y, además, una luz amarilla de destellos todo horizonte."
            },
        ]
    },
    {
        category: 'Remolque y Empuje',
        rules: [
            {
                id: 'R24a',
                title: 'Remolcando',
                description: 'Buque de P.M. remolcando por la popa.',
                svg: commonSVG.tug,
                lights: [
                    { ...PDV_LIGHTS[0], desc: 'Luz de tope #1 (vertical)', position: { bow: { x: 50, y: 25 }, starboard: { x: 30, y: 25 }, stern: { x: 0, y: 0 } } },
                    { id: 'masthead-2', color: 'white', desc: 'Luz de tope #2 (vertical)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 32 }, starboard: { x: 30, y: 32 }, stern: { x: 0, y: 0 } } },
                    PDV_LIGHTS[2], PDV_LIGHTS[3],
                    { id: 'towing-light', color: 'yellow', desc: 'Luz de remolque (135°)', arc: { bow: false, starboard: true, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
                ],
                marks: [
                     { id: 'diamond-tow', shape: 'diamond', desc: 'Una marca bicónica donde mejor pueda verse (solo si remolque > 200m).', position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "Un buque remolcando exhibe:\n- Dos luces de tope en línea vertical (tres si el remolque >200m).\n- Luces de costado.\n- Una luz de remolque (amarilla) por encima de la luz de alcance.\n\nDe día, si el remolque >200m, tanto el remolcador como el remolcado exhibirán una marca bicónica. El buque remolcado exhibe luces de costado y de alcance."
            },
             {
                id: 'R24c',
                title: 'Buque que empuja o remolca por el costado',
                description: 'Unidad que empuja o remolca abarloada.',
                svg: commonSVG.tug,
                lights: PDV_LIGHTS,
                marks: [],
                explanation: "Un buque que empuja y la unidad empujada, si están conectados de forma rígida formando una unidad compuesta, se consideran como un solo buque de P.M. y exhiben las luces correspondientes a su eslora.\nUn buque remolcando por el costado exhibe las luces de un buque de P.M., más dos luces de tope en vertical."
            },
        ]
    },
    {
        category: 'Vela y Remo',
        rules: [
            {
                id: 'R25a',
                title: 'Buque de vela en navegación',
                description: 'Un buque de vela navegando.',
                svg: commonSVG.sailing,
                lights: [
                    PDV_LIGHTS[2], PDV_LIGHTS[3], PDV_LIGHTS[4]
                ],
                marks: [],
                explanation: "Debe exhibir luces de costado y luz de alcance. \n\nOpcionalmente puede llevar:\n- Un farol combinado en el tope del palo (si <20m).\n- Dos luces todo horizonte en el tope del palo (roja sobre verde). Estas no deben mostrarse junto con el farol combinado."
            },
            {
                id: 'R25e',
                title: 'Velero navegando a motor',
                description: 'Un velero que usa su motor.',
                svg: commonSVG.sailing,
                lights: [PDV_LIGHTS[0], PDV_LIGHTS[2], PDV_LIGHTS[3], PDV_LIGHTS[4]],
                marks: [
                    { id: 'cone-down', shape: 'cone-down', desc: 'Un cono con el vértice hacia abajo.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "Un buque que navega a vela y simultáneamente a motor se considera un buque de propulsión mecánica a efectos de luces y marcas. De día debe exhibir, en el lugar más visible, una marca cónica con el vértice hacia abajo."
            }
        ]
    },
    {
        category: 'Pesca',
        rules: [
            {
                id: 'R26b',
                title: 'Pesca de Arrastre',
                description: 'Buque dedicado a la pesca de arrastre.',
                svg: commonSVG.fishing,
                lights: [
                    { id: 'trawl-g', color: 'green', desc: 'Luz verde todo horizonte', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'trawl-w', color: 'white', desc: 'Luz blanca todo horizonte (debajo)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
                    { ...PDV_LIGHTS[0], desc: "Luz de tope adicional (si >50m, detrás y más alta que la verde)"},
                    { ...PDV_LIGHTS[2], desc: 'Luz de costado de estribor (con arrancada)' },
                    { ...PDV_LIGHTS[3], desc: 'Luz de costado de babor (con arrancada)' },
                    { ...PDV_LIGHTS[4], desc: 'Luz de alcance (con arrancada)' },
                ],
                marks: [
                    { id: 'trawl-mark', shape: 'bicone-point-together', desc: 'Dos conos unidos por sus vértices.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "Un buque de arrastre muestra dos luces todo horizonte en vertical: verde sobre blanca.\n- Si tiene arrancada, también muestra luces de costado y alcance.\n- Si es >50m, debe mostrar una luz de tope a popa y más elevada que la luz verde.\n- De día exhibe dos conos unidos por el vértice."
            },
            {
                id: 'R26c',
                title: 'Pesca (excepto arrastre)',
                description: 'Buque dedicado a la pesca (no arrastre).',
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
                ],
                explanation: "Un pesquero que no sea de arrastre muestra dos luces todo horizonte en vertical: roja sobre blanca.\n- Si tiene arrancada, también muestra luces de costado y alcance.\n- Si el aparejo se extiende >150m, debe exhibir una luz blanca o un cono en la dirección del mismo."
            },
        ]
    },
    {
        category: 'Capacidad de Maniobra Restringida',
        rules: [
            {
                id: 'R27a',
                title: 'Buque sin gobierno',
                description: 'Buque que no puede maniobrar como es requerido.',
                svg: commonSVG.power_gt50,
                lights: [
                    { id: 'nuc-r1', color: 'red', desc: 'Dos luces rojas todo horizonte en línea vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'nuc-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
                    { ...PDV_LIGHTS[2], desc: 'Luz de costado de estribor (solo con arrancada)' },
                    { ...PDV_LIGHTS[3], desc: 'Luz de costado de babor (solo con arrancada)' },
                    { ...PDV_LIGHTS[4], desc: 'Luz de alcance (solo con arrancada)' },
                ],
                marks: [
                    { id: 'nuc-b1', shape: 'ball', desc: 'Dos bolas en línea vertical.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'nuc-b2', shape: 'ball', desc: '', position: { bow: { x: 50, y: 35 }, starboard: { x: 40, y: 35 }, stern: { x: 50, y: 35 } } },
                ],
                explanation: "Un buque sin gobierno (NUC), por una circunstancia excepcional, es incapaz de maniobrar. Si tiene arrancada, deberá mostrar adicionalmente las luces de costado y de alcance. De lo contrario, no mostrará ni luces de tope ni de alcance."
            },
            {
                id: 'R27b',
                title: 'Buque con maniobra restringida',
                description: 'Buque que por la naturaleza de su trabajo tiene su capacidad de maniobra restringida.',
                svg: commonSVG.power_gt50,
                lights: [
                    { id: 'ram-r1', color: 'red', desc: 'Roja-Blanca-Roja todo horizonte en vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 50, y: 20 } } },
                    { id: 'ram-w', color: 'white', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'ram-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 50, y: 36 } } },
                    {...PDV_LIGHTS[0], desc: "Luz de tope (solo con arrancada)"},
                    {...PDV_LIGHTS[2], desc: "Luz de costado (solo con arrancada)"},
                    {...PDV_LIGHTS[4], desc: "Luz de alcance (solo con arrancada)"}
                ],
                marks: [
                    { id: 'ram-b1', shape: 'ball', desc: 'Bola-Bicónica-Bola en vertical.', position: { bow: { x: 50, y: 15 }, starboard: { x: 40, y: 15 }, stern: { x: 50, y: 15 } } },
                    { id: 'ram-d', shape: 'diamond', desc: '', position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'ram-b2', shape: 'ball', desc: '', position: { bow: { x: 50, y: 41 }, starboard: { x: 40, y: 41 }, stern: { x: 50, y: 41 } } },
                ],
                explanation: "Si tiene arrancada, exhibirá además las luces de tope, de costado y de alcance. Cuando hay obstrucción, se indican con dos luces rojas (o dos bolas) en el lado obstruido, y dos verdes (o dos marcas bicónicas) en el lado libre."
            },
            {
                id: 'R27d',
                title: 'Operaciones de buceo o submarinas',
                description: 'Buque dedicado a operaciones que restringen maniobra, como buceo o dragado.',
                svg: commonSVG.power_lt50,
                lights: [
                     { id: 'ram-r1', color: 'red', desc: 'Roja-Blanca-Roja todo horizonte en vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 50, y: 20 } } },
                    { id: 'ram-w', color: 'white', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'ram-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 50, y: 36 } } },
                ],
                 marks: [
                    { id: 'ram-b1', shape: 'ball', desc: 'Bola-Bicónica-Bola en vertical.', position: { bow: { x: 50, y: 15 }, starboard: { x: 40, y: 15 }, stern: { x: 50, y: 15 } } },
                    { id: 'ram-d', shape: 'diamond', desc: '', position: { bow: { x: 50, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 50, y: 28 } } },
                    { id: 'ram-b2', shape: 'ball', desc: '', position: { bow: { x: 50, y: 41 }, starboard: { x: 40, y: 41 }, stern: { x: 50, y: 41 } } },
                    { id: 'flag-a', shape: 'ball', desc: 'Copia rígida de la bandera "A" del C.I.S.', position: { bow: {x:70, y:25}, starboard: {x:70, y:25}, stern: {x:70, y:25}} },
                ],
                explanation: "Aplica a dragaminas, dragas, buques de buceo, etc.\nDeben mostrar las señales de maniobra restringida. Los buques de buceo, si su tamaño lo impide, deben mostrar una copia rígida de la bandera 'A' del Código Internacional, de al menos 1m de altura."
            },
            {
                id: 'R28',
                title: 'Buque restringido por su calado',
                description: 'Buque que por su gran calado tiene su navegación muy restringida.',
                svg: commonSVG.power_gt50,
                lights: [
                    ...PDV_LIGHTS,
                    { id: 'cbd-r1', color: 'red', desc: 'Tres luces rojas todo horizonte en línea vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 55, y: 20 } } },
                    { id: 'cbd-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 55, y: 28 } } },
                    { id: 'cbd-r3', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 55, y: 36 } } },
                ],
                marks: [
                    { id: 'cylinder', shape: 'cylinder', desc: 'Un cilindro.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "Un buque restringido por su calado (CBD), además de las luces de un buque de P.M., puede exhibir tres luces rojas todo horizonte en línea vertical (noche) o un cilindro (día)."
            },
        ]
    },
     {
        category: 'Prácticos, Fondeo y Varamientos',
        rules: [
            {
                id: 'R29a',
                title: 'Buque de práctico en servicio',
                description: 'Buque dedicado al servicio de practicaje.',
                svg: commonSVG.power_lt50,
                lights: [
                    { id: 'pilot-w', color: 'white', desc: 'Luz blanca todo horizonte.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'pilot-r', color: 'red', desc: 'Luz roja todo horizonte (debajo).', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
                    { ...PDV_LIGHTS[2], desc: 'Luz de costado de estribor (si navega).' },
                    { ...PDV_LIGHTS[3], desc: 'Luz de costado de babor (si navega).' },
                    { ...PDV_LIGHTS[4], desc: 'Luz de alcance (si navega o fondeado).' },
                ],
                marks: [],
                explanation: "Un buque en servicio de practicaje exhibe dos luces todo horizonte en vertical: blanca sobre roja. Cuando está en navegación, muestra además las luces de costado y de alcance. Cuando está fondeado, muestra la luz o marca de fondeo además de las luces de práctico."
            },
            {
                id: 'R30a',
                title: 'Buque fondeado',
                description: 'Buque fondeado.',
                svg: commonSVG.power_gt50,
                lights: [
                    { id: 'anchor-fwd', color: 'white', desc: 'Luz de fondeo todo horizonte en proa.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'anchor-aft', color: 'white', desc: 'Luz de fondeo todo horizonte en popa (más baja, si >50m).', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 40 }, starboard: { x: 85, y: 40 }, stern: { x: 50, y: 40 } } },
                ],
                marks: [
                    { id: 'ball', shape: 'ball', desc: 'Una bola en la proa.', position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "Un buque fondeado exhibe una luz blanca todo horizonte (dos si >= 50m, la de proa más alta). De día, una bola en la proa. Opcionalmente pueden iluminar sus cubiertas.\nExcepciones: Buques <7m fondeados fuera de un canal o zona de tráfico pueden no exhibir señales."
            },
            {
                id: 'R30d',
                title: 'Buque varado',
                description: 'Buque varado.',
                svg: commonSVG.power_gt50,
                lights: [
                    { id: 'anchor-fwd', color: 'white', desc: 'Las dos luces blancas de fondeo.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'aground-r1', color: 'red', desc: 'Dos luces rojas todo horizonte en vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 30 }, starboard: { x: 45, y: 30 }, stern: { x: 55, y: 30 } } },
                    { id: 'aground-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 38 }, starboard: { x: 45, y: 38 }, stern: { x: 55, y: 38 } } },
                ],
                marks: [
                    { id: 'aground-b1', shape: 'ball', desc: 'Tres bolas en línea vertical.', position: { bow: { x: 55, y: 25 }, starboard: { x: 45, y: 25 }, stern: { x: 55, y: 25 } } },
                    { id: 'aground-b2', shape: 'ball', desc: '', position: { bow: { x: 55, y: 35 }, starboard: { x: 45, y: 35 }, stern: { x: 55, y: 35 } } },
                    { id: 'aground-b3', shape: 'ball', desc: '', position: { bow: { x: 55, y: 45 }, starboard: { x: 45, y: 45 }, stern: { x: 55, y: 45 } } },
                ],
                explanation: "Un buque varado exhibe las luces de fondeo y, además, dos luces rojas todo horizonte en línea vertical. De día, exhibe tres bolas en línea vertical en lugar de la bola de fondeo."
            },
        ]
    }
];
