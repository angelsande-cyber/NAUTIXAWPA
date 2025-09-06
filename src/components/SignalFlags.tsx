// Data and SVG components for International Code of Signals flags.

import React from 'react';

// --- Flag SVG Components ---

const FlagA = () => <svg viewBox="0 0 20 12"><path d="M0,0 H12 V12 H0Z" fill="#fff" /><path d="M12,0 L20,6 L12,12 Z" fill="#0058a7" /></svg>;
const FlagB = () => <svg viewBox="0 0 20 12"><path d="M0,0 H20 V12 H0Z" fill="#d72828" /><path d="M20,0 L8,6 L20,12 Z" fill="#fff" /></svg>;
const FlagC = () => <svg viewBox="0 0 15 12"><path d="M0,0 H15 V2.4 H0Z" fill="#0058a7"/><path d="M0,2.4 H15 V4.8 H0Z" fill="#fff"/><path d="M0,4.8 H15 V7.2 H0Z" fill="#d72828"/><path d="M0,7.2 H15 V9.6 H0Z" fill="#fff"/><path d="M0,9.6 H15 V12 H0Z" fill="#0058a7"/></svg>;
const FlagD = () => <svg viewBox="0 0 15 12"><path d="M0,0 H15 V12 H0Z" fill="#ffcd00"/><path d="M0,4 H15 V8 H0Z" fill="#0058a7"/></svg>;
const FlagE = () => <svg viewBox="0 0 15 12"><path d="M0,0 H15 V6 H0Z" fill="#0058a7"/><path d="M0,6 H15 V12 H0Z" fill="#d72828"/></svg>;
const FlagF = () => <svg viewBox="0 0 15 12"><path d="M0 0 H15 V12 H0Z" fill="#fff"/><path d="M7.5 0 L15 6 L7.5 12 L0 6 Z" fill="#d72828"/></svg>;
const FlagG = () => <svg viewBox="0 0 15 12"><path d="M0,0 H2.5 V12 H0Z M5,0 H7.5 V12 H5Z M10,0 H12.5 V12 H10Z" fill="#ffcd00" /><path d="M2.5,0 H5 V12 H2.5Z M7.5,0 H10 V12 H7.5Z M12.5,0 H15 V12 H12.5Z" fill="#0058a7" /></svg>;
const FlagH = () => <svg viewBox="0 0 15 12"><path d="M0,0 H7.5 V12 H0Z" fill="#fff"/><path d="M7.5,0 H15 V12 H7.5Z" fill="#d72828"/></svg>;
const FlagI = () => <svg viewBox="0 0 15 12"><path d="M0 0 H15 V12 H0Z" fill="#ffcd00"/><circle cx="7.5" cy="6" r="3" fill="#000"/></svg>;
const FlagJ = () => <svg viewBox="0 0 15 12"><path d="M0,0 H15 V12 H0Z" fill="#0058a7"/><path d="M0,4 H15 V8 H0Z" fill="#fff"/></svg>;
const FlagK = () => <svg viewBox="0 0 15 12"><path d="M0,0 H7.5 V12 H0Z" fill="#ffcd00"/><path d="M7.5,0 H15 V12 H7.5Z" fill="#0058a7"/></svg>;
const FlagL = () => <svg viewBox="0 0 15 12"><rect width="7.5" height="6" fill="#ffcd00" /><rect x="7.5" width="7.5" height="6" fill="#000" /><rect y="6" width="7.5" height="6" fill="#000" /><rect x="7.5" y="6" width="7.5" height="6" fill="#ffcd00" /></svg>;
const FlagM = () => <svg viewBox="0 0 15 12"><path d="M0 0 H15 V12 H0Z" fill="#0058a7"/><path d="M0 0 L15 12 M0 12 L15 0" stroke="#fff" strokeWidth="2.5"/></svg>;
const FlagN = () => <svg viewBox="0 0 15 12"><rect width="3.75" height="3" fill="#0058a7" /><rect x="3.75" width="3.75" height="3" fill="#fff" /><rect x="7.5" width="3.75" height="3" fill="#0058a7" /><rect x="11.25" width="3.75" height="3" fill="#fff" /><rect y="3" width="3.75" height="3" fill="#fff" /><rect x="3.75" y="3" width="3.75" height="3" fill="#0058a7" /><rect x="7.5" y="3" width="3.75" height="3" fill="#fff" /><rect x="11.25" y="3" width="3.75" height="3" fill="#0058a7" /><rect y="6" width="3.75" height="3" fill="#0058a7" /><rect x="3.75" y="6" width="3.75" height="3" fill="#fff" /><rect x="7.5" y="6" width="3.75" height="3" fill="#0058a7" /><rect x="11.25" y="6" width="3.75" height="3" fill="#fff" /><rect y="9" width="3.75" height="3" fill="#fff" /><rect x="3.75" y="9" width="3.75" height="3" fill="#0058a7" /><rect x="7.5" y="9" width="3.75" height="3" fill="#fff" /><rect x="11.25" y="9" width="3.75" height="3" fill="#0058a7" /></svg>;
const FlagO = () => <svg viewBox="0 0 15 12"><path d="M0 0 H15 V12 H0Z" fill="#ffcd00"/><path d="M0 0 L15 12 V0 Z" fill="#d72828"/></svg>;
const FlagP = () => <svg viewBox="0 0 15 12"><path d="M0 0 H15 V12 H0Z" fill="#0058a7"/><path d="M3 3 H12 V9 H3Z" fill="#fff"/></svg>;
const FlagQ = () => <svg viewBox="0 0 15 12"><path d="M0 0 H15 V12 H0Z" fill="#ffcd00"/></svg>;
const FlagR = () => <svg viewBox="0 0 15 12"><path d="M0 0 H15 V12 H0Z" fill="#d72828"/><path d="M0 6 H15 M7.5 0 V12" stroke="#ffcd00" strokeWidth="3"/></svg>;
const FlagS = () => <svg viewBox="0 0 15 12"><path d="M0 0 H15 V12 H0Z" fill="#fff"/><path d="M3 3 H12 V9 H3Z" fill="#0058a7"/></svg>;
const FlagT = () => <svg viewBox="0 0 15 12"><path d="M0 0 H5 V12 H0Z" fill="#d72828"/><path d="M5 0 H10 V12 H5Z" fill="#fff"/><path d="M10 0 H15 V12 H10Z" fill="#0058a7"/></svg>;
const FlagU = () => <svg viewBox="0 0 15 12"><rect width="7.5" height="6" fill="#d72828" /><rect x="7.5" width="7.5" height="6" fill="#fff" /><rect y="6" width="7.5" height="6" fill="#fff" /><rect x="7.5" y="6" width="7.5" height="6" fill="#d72828" /></svg>;
const FlagV = () => <svg viewBox="0 0 15 12"><path d="M0 0 H15 V12 H0Z" fill="#fff"/><path d="M0 0 L15 12 M0 12 L15 0" stroke="#d72828" strokeWidth="2.5"/></svg>;
const FlagW = () => <svg viewBox="0 0 15 12"><path d="M0 0 H15 V12 H0Z" fill="#0058a7"/><path d="M2 2 H13 V10 H2Z" fill="#fff"/><path d="M4 4 H11 V8 H4Z" fill="#d72828"/></svg>;
const FlagX = () => <svg viewBox="0 0 15 12"><path d="M0 0 H15 V12 H0Z" fill="#fff"/><path d="M0 6 H15 M7.5 0 V12" stroke="#0058a7" strokeWidth="2.5"/></svg>;
const FlagY = () => (
    <svg viewBox="0 0 15 12">
        <defs>
            <pattern id="pattern-y" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="4" height="8" fill="#d72828"/>
                <rect x="4" width="4" height="8" fill="#ffcd00"/>
            </pattern>
        </defs>
        <rect width="15" height="12" fill="url(#pattern-y)"/>
    </svg>
);
const FlagZ = () => <svg viewBox="0 0 15 12"><path d="M0,0 L15,0 L7.5,6 Z" fill="#ffcd00"/><path d="M0,12 L0,0 L7.5,6 Z" fill="#0058a7"/><path d="M15,12 L0,12 L7.5,6 Z" fill="#d72828"/><path d="M15,0 L15,12 L7.5,6 Z" fill="#000"/></svg>;


// --- Pennants ---
const pennantShape = "M0 0 H15 L20 6 L15 12 H0 Z";
const Num1 = () => <svg viewBox="0 0 20 12"><path d={pennantShape} fill="#fff"/><circle cx="7" cy="6" r="2.2" fill="#d72828"/></svg>;
const Num2 = () => <svg viewBox="0 0 20 12"><path d={pennantShape} fill="#0058a7"/><circle cx="7" cy="6" r="2.2" fill="#fff"/></svg>;
const Num3 = () => <svg viewBox="0 0 20 12"><path d={pennantShape} fill="#d72828" /><path d="M0,0 H6.6 V12 H0Z" fill="#fff" /><path d="M6.6,0 H13.2 V12 H6.6Z" fill="#0058a7" /></svg>;
const Num4 = () => <svg viewBox="0 0 20 12"><path d={pennantShape} fill="#d72828" /><path d="M0 6 H14 M7 0 V12" stroke="#fff" strokeWidth="2" /></svg>;
const Num5 = () => <svg viewBox="0 0 20 12"><path d={pennantShape} fill="#ffcd00" /><path d="M0,0 H10 V12 H0Z" fill="#0058a7" /></svg>;
const Num6 = () => <svg viewBox="0 0 20 12"><path d={pennantShape} fill="#000" /><path d="M0,0 H20 L15,6 H0Z" fill="#fff" /></svg>;
const Num7 = () => <svg viewBox="0 0 20 12"><path d={pennantShape} fill="#ffcd00" /><path d="M0,0 H20 L15,6 H0Z" fill="#d72828" /></svg>;
const Num8 = () => <svg viewBox="0 0 20 12"><path d={pennantShape} fill="#fff" /><path d="M0 6 H14 M7 0 V12" stroke="#d72828" strokeWidth="2" /></svg>;
const Num9 = () => <svg viewBox="0 0 20 12"><path d={pennantShape} fill="#fff" /><path d="M10 0 H20 L15 6 H10Z" fill="#000" /><path d="M0 6 H10 V12 H0Z" fill="#d72828" /><path d="M10 6 L15 6 L20 12 H10Z" fill="#ffcd00" /></svg>;
const Num0 = () => <svg viewBox="0 0 20 12"><path d={pennantShape} fill="#ffcd00" /><path d="M5 2 h10 v8 h-10 Z" fill="none" stroke="#d72828" strokeWidth="1.5" /></svg>;


// --- Data Arrays ---

export const LETTERS = [
    { letter: "A", word: "Alfa", flag: <FlagA />, meaning: "Tengo un buzo sumergido; manténgase alejado de mí y a poca velocidad." },
    { letter: "B", word: "Bravo", flag: <FlagB />, meaning: "Estoy cargando, descargando o transportando mercancías peligrosas." },
    { letter: "C", word: "Charlie", flag: <FlagC />, meaning: "Sí (Afirmativo)." },
    { letter: "D", word: "Delta", flag: <FlagD />, meaning: "Manténgase alejado de mí, maniobro con dificultad." },
    { letter: "E", word: "Echo", flag: <FlagE />, meaning: "Estoy cayendo a estribor." },
    { letter: "F", word: "Foxtrot", flag: <FlagF />, meaning: "Tengo avería, póngase en comunicación conmigo." },
    { letter: "G", word: "Golf", flag: <FlagG />, meaning: "Necesito un práctico." },
    { letter: "H", word: "Hotel", flag: <FlagH />, meaning: "Tengo un práctico a bordo." },
    { letter: "I", word: "India", flag: <FlagI />, meaning: "Estoy cayendo a babor." },
    { letter: "J", word: "Juliett", flag: <FlagJ />, meaning: "Tengo incendio y llevo mercancías peligrosas, manténgase alejado." },
    { letter: "K", word: "Kilo", flag: <FlagK />, meaning: "Deseo comunicar con usted." },
    { letter: "L", word: "Lima", flag: <FlagL />, meaning: "Pare su buque inmediatamente." },
    { letter: "M", word: "Mike", flag: <FlagM />, meaning: "Mi buque está parado y sin arrancada." },
    { letter: "N", word: "November", flag: <FlagN />, meaning: "No (Negativo)." },
    { letter: "O", word: "Oscar", flag: <FlagO />, meaning: "¡Hombre al agua!" },
    { letter: "P", word: "Papa", flag: <FlagP />, meaning: "En puerto: Todo el personal debe regresar a bordo. En la mar: Mis redes se han enganchado en un obstáculo." },
    { letter: "Q", word: "Quebec", flag: <FlagQ />, meaning: "Mi buque está 'sano' y pido libre plática." },
    { letter: "R", word: "Romeo", flag: <FlagR />, meaning: "Buque con arrancada (no tiene significado como bandera única)." },
    { letter: "S", word: "Sierra", flag: <FlagS />, meaning: "Estoy dando atrás." },
    { letter: "T", word: "Tango", flag: <FlagT />, meaning: "Manténgase alejado de mí. Pesca de arrastre en pareja." },
    { letter: "U", word: "Uniform", flag: <FlagU />, meaning: "Se dirige usted hacia un peligro." },
    { letter: "V", word: "Victor", flag: <FlagV />, meaning: "Necesito auxilio." },
    { letter: "W", word: "Whiskey", flag: <FlagW />, meaning: "Necesito asistencia médica." },
    { letter: "X", word: "X-ray", flag: <FlagX />, meaning: "Suspenda usted lo que está haciendo y preste atención a mis señales." },
    { letter: "Y", word: "Yankee", flag: <FlagY />, meaning: "Estoy garreando." },
    { letter: "Z", word: "Zulu", flag: <FlagZ />, meaning: "Necesito un remolcador." },
];

export const NUMBERS = [
    { digit: "1", pronunciation: "Unaone", flag: <Num1 /> },
    { digit: "2", pronunciation: "Bisstwo", flag: <Num2 /> },
    { digit: "3", pronunciation: "Terrathree", flag: <Num3 /> },
    { digit: "4", pronunciation: "Kartefour", flag: <Num4 /> },
    { digit: "5", pronunciation: "Pantafive", flag: <Num5 /> },
    { digit: "6", pronunciation: "Soxisix", flag: <Num6 /> },
    { digit: "7", pronunciation: "Setteseven", flag: <Num7 /> },
    { digit: "8", pronunciation: "Oktoeight", flag: <Num8 /> },
    { digit: "9", pronunciation: "Novenine", flag: <Num9 /> },
    { digit: "0", pronunciation: "Nadazero", flag: <Num0 /> },
];
