// COLREG rules for vessel lights and shapes simulator.
// Note: Positions are simplified for a 2D representation.

const commonSVG = {
    power: { // Generic power-driven vessel
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 20 20, 180 20, 190 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 40 30 L 40 20 L 70 20 L 70 30 Z" strokeWidth="1.5"/><path d="M 10 50 L 190 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 40 20, 60 20, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 40 30 L 40 20 L 60 20 L 60 30 Z" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 40 20, 60 20, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 30 L 30 20 L 70 20 L 70 30 Z" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
    },
    sailing: {
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 20 20, 180 20, 190 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 90 10 L 90 48 M 50 48 L 130 48" strokeWidth="1.5"/><path d="M 92 12 C 120 25, 120 40, 92 46" fill="hsl(var(--muted-foreground)/.2)" strokeWidth="1"/><path d="M 10 50 L 190 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 40 20, 60 20, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 50 10 L 50 48" strokeWidth="1.5"/><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 40 20, 60 20, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 50 10 L 50 48" strokeWidth="1.5"/><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>
    },
    fishing: {
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 20 20, 180 20, 190 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 40 30 L 40 20 L 70 20 L 70 30 Z" strokeWidth="1.5"/><path d="M 150 15 L 150 48 M 140 15 L 160 15" strokeWidth="1.5"/><path d="M 10 50 L 190 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 40 20, 60 20, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 40 30 L 40 20 L 60 20 L 60 30 Z" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 40 20, 60 20, 90 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 30 L 30 20 L 70 20 L 70 30 Z" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
    },
     tug: {
        side: <svg viewBox="0 0 200 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 40 C 5 20, 150 20, 150 40 L 170 50 L 10 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 50 30 L 50 15 L 80 15 L 80 30 Z" strokeWidth="1.5"/><path d="M 10 50 L 170 50" strokeWidth="2" /></svg>,
        front: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 10 25, 90 25, 90 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 40 30 L 40 15 L 60 15 L 60 30 Z" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
        back: <svg viewBox="0 0 100 60" className="w-full h-full stroke-current fill-current text-foreground opacity-50"><path d="M 10 50 C 10 25, 90 25, 90 50 Z" fill="hsl(var(--muted))" strokeWidth="1.5" /><path d="M 30 30 L 30 15 L 70 15 L 70 30 Z" strokeWidth="1.5" /><path d="M 10 50 L 90 50" strokeWidth="2" /></svg>,
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
                id: 'R23a-gt50',
                title: 'Buque de P.M. en navegación (>50m)',
                description: 'Buque de eslora > 50m en navegación.',
                svg: commonSVG.power,
                lights: PDV_LIGHTS,
                marks: [],
                explanation: "Un buque de P.M. de eslora igual o superior a 50m debe exhibir:\n- Dos luces de tope (la de proa más baja que la de popa).\n- Luces de costado.\n- Luz de alcance."
            },
            {
                id: 'R23a-lt50',
                title: 'Buque de P.M. en navegación (<50m)',
                description: 'Buque de eslora < 50m en navegación.',
                svg: commonSVG.power,
                lights: [PDV_LIGHTS[0], PDV_LIGHTS[2], PDV_LIGHTS[3], PDV_LIGHTS[4]],
                marks: [],
                explanation: "Un buque de P.M. de eslora inferior a 50m debe exhibir:\n- Una luz de tope (la segunda es opcional).\n- Luces de costado.\n- Luz de alcance."
            },
            {
                id: 'R23a-lt12',
                title: 'Buque de P.M. en navegación (<12m)',
                description: 'Buque de eslora < 12m en navegación.',
                svg: commonSVG.power,
                lights: [
                    { id: 'allround-white', color: 'white', desc: 'Luz blanca todo horizonte', arc: { bow: true, starboard: true, stern: true}, position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } },
                    PDV_LIGHTS[2], PDV_LIGHTS[3]
                ],
                marks: [],
                explanation: "Un buque de P.M. de eslora inferior a 12m puede exhibir, en lugar de las luces de un buque mayor, una luz blanca todo horizonte y las luces de costado."
            },
             {
                id: 'R23c',
                title: 'Aerodeslizador',
                description: 'Navegando sin desplazamiento.',
                svg: commonSVG.power,
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
                id: 'R24a-lt200',
                title: 'Remolcando (remolque < 200m)',
                description: 'Buque remolcando y longitud de remolque < 200m.',
                svg: commonSVG.tug,
                lights: [
                    { ...PDV_LIGHTS[0], desc: 'Luz de tope #1 (vertical)', position: { bow: { x: 50, y: 25 }, starboard: { x: 30, y: 25 }, stern: { x: 0, y: 0 } } },
                    { id: 'masthead-2', color: 'white', desc: 'Luz de tope #2 (vertical)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 32 }, starboard: { x: 30, y: 32 }, stern: { x: 0, y: 0 } } },
                    PDV_LIGHTS[2], PDV_LIGHTS[3],
                    { id: 'towing-light', color: 'yellow', desc: 'Luz de remolque (135°)', arc: { bow: false, starboard: true, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
                ],
                marks: [
                     { id: 'diamond-tow', shape: 'diamond', desc: 'Una marca bicónica donde mejor pueda verse (solo si remolque > 200m).', position: { bow: { x: 0, y: 0 }, starboard: { x: 0, y: 0 }, stern: { x: 0, y: 0 } } },
                ],
                explanation: "Un buque remolcando exhibe dos luces de tope en línea vertical. La luz de alcance es reemplazada por una luz de remolque amarilla. El objeto remolcado debe exhibir luces de costado y de alcance."
            },
            {
                id: 'R24a-gt200',
                title: 'Remolcando (remolque > 200m)',
                description: 'Buque remolcando y longitud de remolque > 200m.',
                svg: commonSVG.tug,
                lights: [
                    { ...PDV_LIGHTS[0], desc: 'Luz de tope #1 (vertical)', position: { bow: { x: 50, y: 25 }, starboard: { x: 30, y: 25 }, stern: { x: 0, y: 0 } } },
                    { id: 'masthead-2', color: 'white', desc: 'Luz de tope #2 (vertical)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 32 }, starboard: { x: 30, y: 32 }, stern: { x: 0, y: 0 } } },
                    { id: 'masthead-3', color: 'white', desc: 'Luz de tope #3 (vertical)', arc: { bow: true, starboard: true, stern: false }, position: { bow: { x: 50, y: 39 }, starboard: { x: 30, y: 39 }, stern: { x: 0, y: 0 } } },
                    PDV_LIGHTS[2], PDV_LIGHTS[3],
                    { id: 'towing-light', color: 'yellow', desc: 'Luz de remolque (135°)', arc: { bow: false, starboard: true, stern: true }, position: { bow: { x: 0, y: 0 }, starboard: { x: 95, y: 45 }, stern: { x: 50, y: 45 } } },
                ],
                marks: [
                    { id: 'diamond-tow', shape: 'diamond', desc: 'Una marca bicónica en el remolcador y en el remolcado.', position: { bow: { x: 50, y: 25 }, starboard: { x: 50, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "Si la longitud del remolque (desde la popa del remolcador al extremo del remolcado) es mayor de 200m, se exhiben tres luces de tope en vertical. De día, tanto el remolcador como el remolcado exhiben una marca bicónica."
            },
             {
                id: 'R24c',
                title: 'Buque que empuja',
                description: 'Unidad que empuja conectada de forma rígida.',
                svg: commonSVG.tug,
                lights: PDV_LIGHTS,
                marks: [],
                explanation: "Un buque que empuja y la unidad empujada, si están conectados de forma rígida formando una unidad compuesta, se consideran como un solo buque de propulsión mecánica y exhiben las luces correspondientes a su eslora."
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
                explanation: "Debe exhibir luces de costado y luz de alcance. Puede llevarlas en un farol combinado en el tope del palo (para esloras < 20m)."
            },
            {
                id: 'R25a-optional',
                title: 'Buque de vela (con luces opcionales)',
                description: 'Un buque de vela con luces opcionales en el palo.',
                svg: commonSVG.sailing,
                lights: [
                    PDV_LIGHTS[2], PDV_LIGHTS[3], PDV_LIGHTS[4],
                    { id: 'allround-red-sail', color: 'red', desc: 'Luz roja todo horizonte (opcional)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 15 }, starboard: { x: 90, y: 15 }, stern: { x: 50, y: 15 } } },
                    { id: 'allround-green-sail', color: 'green', desc: 'Luz verde todo horizonte (opcional, debajo)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 22 }, starboard: { x: 90, y: 22 }, stern: { x: 50, y: 22 } } },
                ],
                marks: [],
                explanation: "Además de las luces básicas, un velero puede exhibir en el tope del palo dos luces todo horizonte en línea vertical: roja sobre verde. Estas luces no deben mostrarse junto con el farol combinado."
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
                explanation: "Un buque que navega a vela y simultáneamente a motor se considera un buque de propulsión mecánica. De día debe exhibir, en el lugar más visible, una marca cónica con el vértice hacia abajo."
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
                    { ...PDV_LIGHTS[0], desc: "Luz de tope adicional (detrás y más alta que la verde)"},
                    { ...PDV_LIGHTS[2], desc: 'Luz de costado de estribor (con arrancada)' },
                    { ...PDV_LIGHTS[3], desc: 'Luz de costado de babor (con arrancada)' },
                    { ...PDV_LIGHTS[4], desc: 'Luz de alcance (con arrancada)' },
                ],
                marks: [
                    { id: 'trawl-mark', shape: 'bicone-point-together', desc: 'Dos conos unidos por sus vértices.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "Señales para un buque de arrastre: dos luces todo horizonte en línea vertical, verde sobre blanca. Si tiene arrancada, también muestra luces de costado y alcance. Si es >50m, debe mostrar una luz de tope a popa y más elevada que la luz verde."
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
                explanation: "Señales para un buque de pesca que no sea de arrastre: dos luces todo horizonte en línea vertical, roja sobre blanca. Si tiene arrancada, también muestra luces de costado y alcance."
            },
            {
                id: 'R26d',
                title: 'Pesca (aparejo > 150m)',
                description: 'Pesca con aparejo extendido más de 150m horizontalmente.',
                svg: commonSVG.fishing,
                lights: [
                    { id: 'fish-r', color: 'red', desc: 'Luz roja todo horizonte', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'fish-w', color: 'white', desc: 'Luz blanca todo horizonte (debajo)', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 33 }, starboard: { x: 40, y: 33 }, stern: { x: 50, y: 33 } } },
                    { id: 'gear-light', color: 'white', desc: 'Luz blanca todo horizonte hacia el aparejo', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 80, y: 40 }, starboard: { x: 150, y: 40 }, stern: { x: 80, y: 40 } } },
                ],
                marks: [
                    { id: 'trawl-mark', shape: 'bicone-point-together', desc: 'Dos conos unidos por sus vértices.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'gear-mark', shape: 'cone-up', desc: 'Cono con vértice hacia arriba en dirección al aparejo.', position: { bow: { x: 80, y: 40 }, starboard: { x: 150, y: 40 }, stern: { x: 80, y: 40 } } },
                ],
                explanation: "Cuando un buque de pesca tiene su aparejo extendido más de 150m horizontalmente desde el buque, debe exhibir una luz blanca todo horizonte (noche) o un cono con el vértice hacia arriba (día) en la dirección del aparejo."
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
                svg: commonSVG.power,
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
                explanation: "Un buque sin gobierno, por alguna circunstancia excepcional, es incapaz de maniobrar. Si tiene arrancada, deberá mostrar adicionalmente las luces de costado y de alcance."
            },
            {
                id: 'R27b',
                title: 'Buque con maniobra restringida',
                description: 'Buque que por la naturaleza de su trabajo tiene su capacidad de maniobra restringida.',
                svg: commonSVG.power,
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
                title: 'Operaciones de buceo',
                description: 'Buque dedicado a operaciones de buceo.',
                svg: commonSVG.power,
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
                explanation: "Un buque dedicado a operaciones de buceo debe mostrar las señales de maniobra restringida. Además, de día, una copia rígida de la bandera 'A' del Código Internacional de Señales. Los buques <12m que no puedan exhibir las marcas y luces de maniobra restringida, mostrarán solo la bandera 'A'."
            },
            {
                id: 'R28',
                title: 'Buque restringido por su calado',
                description: 'Buque que por su gran calado tiene su navegación muy restringida.',
                svg: commonSVG.power,
                lights: [
                    ...PDV_LIGHTS,
                    { id: 'cbd-r1', color: 'red', desc: 'Tres luces rojas todo horizonte en línea vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 20 }, starboard: { x: 40, y: 20 }, stern: { x: 55, y: 20 } } },
                    { id: 'cbd-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 28 }, starboard: { x: 40, y: 28 }, stern: { x: 55, y: 28 } } },
                    { id: 'cbd-r3', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 36 }, starboard: { x: 40, y: 36 }, stern: { x: 55, y: 36 } } },
                ],
                marks: [
                    { id: 'cylinder', shape: 'cylinder', desc: 'Un cilindro.', position: { bow: { x: 50, y: 25 }, starboard: { x: 40, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "Un buque restringido por su calado, además de las luces de un buque de P.M., puede exhibir tres luces rojas todo horizonte en línea vertical (noche) o un cilindro (día)."
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
                svg: commonSVG.power,
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
                description: 'Buque > 50m fondeado.',
                svg: commonSVG.power,
                lights: [
                    { id: 'anchor-fwd', color: 'white', desc: 'Luz de fondeo todo horizonte en proa.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'anchor-aft', color: 'white', desc: 'Luz de fondeo todo horizonte en popa (más baja).', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 40 }, starboard: { x: 85, y: 40 }, stern: { x: 50, y: 40 } } },
                ],
                marks: [
                    { id: 'ball', shape: 'ball', desc: 'Una bola en la proa.', position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
                ],
                explanation: "Un buque fondeado de eslora >= 50m exhibe dos luces blancas todo horizonte (proa y popa, la de proa más alta) y de día una bola en la proa. Los buques de eslora < 50m pueden mostrar solo una luz blanca todo horizonte. Opcionalmente pueden iluminar sus cubiertas."
            },
            {
                id: 'R30d',
                title: 'Buque varado',
                description: 'Buque varado.',
                svg: commonSVG.power,
                lights: [
                    { id: 'anchor-fwd', color: 'white', desc: 'Dos luces blancas de fondeo.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 50, y: 25 }, starboard: { x: 20, y: 25 }, stern: { x: 50, y: 25 } } },
                    { id: 'aground-r1', color: 'red', desc: 'Dos luces rojas todo horizonte en vertical.', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 30 }, starboard: { x: 45, y: 30 }, stern: { x: 55, y: 30 } } },
                    { id: 'aground-r2', color: 'red', desc: '', arc: { bow: true, starboard: true, stern: true }, position: { bow: { x: 55, y: 38 }, starboard: { x: 45, y: 38 }, stern: { x_55: 38 } } },
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
