// Data and SVG components for International Code of Signals number pennants.

import React from 'react';

// --- Pennants ---
const pennantShapeTapered = "M0,0 H20 L16,6 L20,12 H0 Z";
const Num1 = () => <svg viewBox="-0.5 -0.5 21 13" fill="none"><path d={pennantShapeTapered} fill="#fff"/><circle cx="8" cy="6" r="2.5" fill="#d72828"/><path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none"/></svg>;
const Num2 = () => <svg viewBox="-0.5 -0.5 21 13" fill="none"><path d={pennantShapeTapered} fill="#0058a7"/><circle cx="8" cy="6" r="2.5" fill="#fff"/><path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none"/></svg>;
const Num3 = () => <svg viewBox="-0.5 -0.5 21 13" fill="none"><path d="M0 0 H6.6 L5.2 6 L6.6 12 H0 Z" fill="#d72828" /><path d="M6.6 0 H13.3 L11.9 6 L13.3 12 H6.6 Z" fill="#fff" /><path d="M13.3 0 H20 L16 6 L20 12 H13.3 Z" fill="#0058a7" /><path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none"/></svg>;
const Num4 = () => <svg viewBox="-0.5 -0.5 21 13" fill="none"><path d={pennantShapeTapered} fill="#d72828" /><path d="M0 6 H20 M10 0 V12" stroke="#fff" strokeWidth="2.5" /><path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none"/></svg>;
const Num5 = () => <svg viewBox="-0.5 -0.5 21 13" fill="none"><path d="M0,0 H10 V12 H0 Z" fill="#0058a7" /><path d="M10,0 H20 L16,6 L20,12 H10Z" fill="#ffcd00" /><path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none"/></svg>;
const Num6 = () => <svg viewBox="-0.5 -0.5 21 13" fill="none"><path d="M0 0 H20 L16 6 H0Z" fill="#fff" /><path d="M0 6 H20 L16 12 H0Z" fill="#000" /><path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none"/></svg>;
const Num7 = () => <svg viewBox="-0.5 -0.5 21 13" fill="none"><path d="M0 0 H20 L16 6 H0Z" fill="#d72828" /><path d="M0 6 H20 L16 12 H0Z" fill="#ffcd00" /><path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none"/></svg>;
const Num8 = () => <svg viewBox="-0.5 -0.5 21 13" fill="none"><path d={pennantShapeTapered} fill="#fff" /><path d="M0 6 H20 M10 0 V12" stroke="#d72828" strokeWidth="2.5" /><path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none"/></svg>;
const Num9 = () => <svg viewBox="-0.5 -0.5 21 13" fill="none"><path d="M0 0 H10 V6 H0Z" fill="#d72828" /><path d="M10 0 H20 L16 6 H10Z" fill="#000" /><path d="M0 6 H10 V12 H0Z" fill="#ffcd00" /><path d="M10 6 H20 L16 12 H10Z" fill="#fff" /><path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none"/></svg>;
const Num0 = () => <svg viewBox="-0.5 -0.5 21 13" fill="none"><path d={pennantShapeTapered} fill="#ffcd00" /><rect x="5" y="2" width="10" height="8" fill="none" stroke="#d72828" strokeWidth="2" /><path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none"/></svg>;


// --- Data Arrays ---
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
