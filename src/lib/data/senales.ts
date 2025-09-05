export const LIGHT_CHARACTERISTIC_TERMS: { [key: string]: { es: string; en: string; } } = {
  'F': { es: 'Fija', en: 'Fixed' },
  'FL': { es: 'Destellos', en: 'Flashing' },
  'LFL': { es: 'Destellos largos', en: 'Long-Flashing' },
  'OC': { es: 'Ocultaciones', en: 'Occulting' },
  'ISO': { es: 'Isofase', en: 'Isophase' },
  'Q': { es: 'Destellos rápidos', en: 'Quick' },
  'VQ': { es: 'Destellos muy rápidos', en: 'Very Quick' },
  'IQ': { es: 'Destellos rápidos interrumpidos', en: 'Interrupted Quick' },
  'MO': { es: 'Código Morse', en: 'Morse Code' },
  'FFL': { es: 'Destello fijo y destellos', en: 'Fixed and Flashing' },
  'AL': { es: 'Alterna', en: 'Alternating' },
  'U': { es: 'Ultra Rápida', en: 'Ultra Quick' },
  'W': { es: 'Blanco', en: 'White' },
  'R': { es: 'Rojo', en: 'Red' },
  'G': { es: 'Verde', en: 'Green' },
  'Y': { es: 'Amarillo', en: 'Yellow' },
  'BU': { es: 'Azul', en: 'Blue' },
  'VI': { es: 'Violeta', en: 'Violet' },
};

export const IALA_BUOY_DATA = [
    // region A is default
    { category: 'Marcas Laterales', type: 'Babor', region: 'A', shape: 'can', colors: ['red'], topmark: { shape: 'can', color: 'red' }, characteristic: 'Fl R 4s', purpose: 'Región A: Dejar por babor (izquierda) al entrar a puerto.', mnemonic: "Al entrar, el rojo a babor. Mnemotecnia: 'Red Port Left' (tiene las mismas letras)." },
    { category: 'Marcas Laterales', type: 'Estribor', region: 'A', shape: 'conical', colors: ['green'], topmark: { shape: 'cone-up', color: 'green' }, characteristic: 'Fl G 4s', purpose: 'Región A: Dejar por estribor (derecha) al entrar a puerto.', mnemonic: "Al entrar, el verde a estribor. Un truco es recordar que 'verde' y 'derecha' no comparten vocales." },
    // region B
    { category: 'Marcas Laterales', type: 'Babor', region: 'B', shape: 'can', colors: ['green'], topmark: { shape: 'can', color: 'green' }, characteristic: 'Fl G 4s', purpose: 'Región B: Dejar por babor (izquierda) al entrar a puerto.', mnemonic: "Al entrar, el verde a babor. La Región B invierte los colores de las marcas laterales respecto a la A." },
    { category: 'Marcas Laterales', type: 'Estribor', region: 'B', shape: 'conical', colors: ['red'], topmark: { shape: 'cone-up', color: 'red' }, characteristic: 'Fl R 4s', purpose: 'Región B: Dejar por estribor (derecha) al entrar a puerto.', mnemonic: "Al entrar, el rojo a estribor. 'There is some red port left in the can' (Hay algo de vino tinto de Oporto en la lata) es un dicho para recordar la Región A; la B es lo contrario." },
    // others
    { category: 'Marcas Cardinales', type: 'Norte', shape: 'pillar', colors: ['black', 'yellow'], topmark: { shape: 'cones-up', color: 'black' }, characteristic: 'VQ W 1s', purpose: 'Aguas seguras al Norte de la marca.', mnemonic: "Debes pasar al Norte de esta marca. Los dos conos apuntan hacia arriba (Norte en la brújula)." },
    { category: 'Marcas Cardinales', type: 'Este', shape: 'pillar', colors: ['black', 'yellow', 'black'], topmark: { shape: 'cones-base-base', color: 'black' }, characteristic: 'VQ(3) W 5s', purpose: 'Aguas seguras al Este de la marca.', mnemonic: "Debes pasar al Este. Los conos forman una figura similar a un huevo ('Egg' en inglés, para 'East')." },
    { category: 'Marcas Cardinales', type: 'Sur', shape: 'pillar', colors: ['yellow', 'black'], topmark: { shape: 'cones-down', color: 'black' }, characteristic: 'VQ(6)+LFl W 10s', purpose: 'Aguas seguras al Sur de la marca.', mnemonic: "Debes pasar al Sur. Los dos conos apuntan hacia abajo (Sur en la brújula)." },
    { category: 'Marcas Cardinales', type: 'Oeste', shape: 'pillar', colors: ['yellow', 'black', 'yellow'], topmark: { shape: 'cones-point-point', color: 'black' }, characteristic: 'VQ(9) W 15s', purpose: 'Aguas seguras al Oeste de la marca.', mnemonic: "Debes pasar al Oeste. Los conos unidos por el vértice se asemejan a una copa de vino ('Wine glass' en inglés, para 'West')." },
    { category: 'Peligro Aislado', type: 'Marca de Peligro Aislado', shape: 'pillar', colors: ['black', 'red', 'black'], topmark: { shape: 'spheres-2', color: 'black' }, characteristic: 'Fl(2) W 5s', purpose: 'Indica un peligro de extensión reducida.', mnemonic: "Navegable por todos lados. Dos esferas negras son la marca más importante. Dos destellos blancos." },
    { category: 'Aguas Seguras', type: 'Marca de Aguas Seguras', shape: 'spherical', colors: ['red', 'white'], topmark: { shape: 'sphere', color: 'red' }, characteristic: 'Iso W 6s', purpose: 'Aguas navegables en todas sus bandas.', mnemonic: "Indica aguas seguras a su alrededor, como una marca de mitad de canal. Es la única con franjas verticales." },
    { category: 'Marcas Especiales', type: 'Marca Especial', shape: 'optional', colors: ['yellow'], topmark: { shape: 'cross', color: 'yellow' }, characteristic: 'Fl Y 5s', purpose: 'Indica una zona o configuración especial (cables, ODAS, etc.).', mnemonic: "Su propósito se encuentra en la carta náutica. No es una marca de ayuda a la navegación per se." },
];
