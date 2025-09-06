// Data and SVG components for International Code of Signals number pennants.

import React from 'react';

// --- Pennants ---
const pennantShapeTapered = "M0,0 H20 L16,6 L20,12 H0 Z";

const Num0 = () => (
    <svg viewBox="-0.5 -0.5 21 13" fill="none">
        <defs>
            <clipPath id="clipPennant0">
                <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant0)">
            <path d="M0,0 H6.66 V12 H0Z" fill="#ffcd00" />
            <path d="M6.66,0 H13.33 V12 H6.66Z" fill="#d72828" />
            <path d="M13.33,0 H20 V12 H13.33Z" fill="#ffcd00" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num1 = () => <svg viewBox="-0.5 -0.5 21 13" fill="none"><path d={pennantShapeTapered} fill="#fff" stroke="#4A4A4A" strokeWidth="0.5" /><circle cx="8" cy="6" r="2.5" fill="#d72828"/></svg>;
const Num2 = () => <svg viewBox="-0.5 -0.5 21 13" fill="none"><path d={pennantShapeTapered} fill="#0058a7" stroke="#4A4A4A" strokeWidth="0.5"/><circle cx="8" cy="6" r="2.5" fill="#fff"/></svg>;
const Num3 = () => (
    <svg viewBox="-0.5 -0.5 21 13" fill="none">
        <defs>
            <clipPath id="clipPennant3">
                <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant3)">
            <path d="M0,0 H6.6 V12 H0Z" fill="#d72828" />
            <path d="M6.6,0 H13.3 V12 H6.6Z" fill="#fff" />
            <path d="M13.3,0 H20 V12 H13.3Z" fill="#0058a7" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num4 = () => (
    <svg viewBox="-0.5 -0.5 21 13" fill="none">
        <defs>
            <clipPath id="clipPennant4">
                <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant4)">
            <path d={pennantShapeTapered} fill="#d72828" />
            <path d="M-1 6 H21 M10 -1 V13" stroke="#fff" strokeWidth="2.5" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num5 = () => (
    <svg viewBox="-0.5 -0.5 21 13" fill="none">
        <defs>
            <clipPath id="clipPennant5">
                <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant5)">
            <path d="M0,0 H10 V12 H0 Z" fill="#ffcd00" />
            <path d="M10,0 H20 V12 H10 Z" fill="#0058a7" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num6 = () => (
    <svg viewBox="-0.5 -0.5 21 13" fill="none">
        <defs>
            <clipPath id="clipPennant6">
                <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant6)">
            <rect x="0" y="0" width="20" height="6" fill="#000" />
            <rect x="0" y="6" width="20" height="6" fill="#fff" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num7 = () => (
    <svg viewBox="-0.5 -0.5 21 13" fill="none">
        <defs>
            <clipPath id="clipPennant7">
                <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant7)">
            <rect x="0" y="0" width="20" height="6" fill="#ffcd00" />
            <rect x="0" y="6" width="20" height="6" fill="#d72828" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num8 = () => (
    <svg viewBox="-0.5 -0.5 21 13" fill="none">
        <defs>
            <clipPath id="clipPennant8">
                <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant8)">
            <path d={pennantShapeTapered} fill="#fff" />
            <path d="M-1 6 H21 M10 -1 V13" stroke="#d72828" strokeWidth="2.5" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num9 = () => (
    <svg viewBox="-0.5 -0.5 21 13" fill="none">
        <defs>
            <clipPath id="clipPennant9">
                <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant9)">
            <path d="M0,0 H10 V6 H0Z" fill="#fff" />
            <path d="M10,0 H20 V6 H10Z" fill="#d72828" />
            <path d="M0,6 H10 V12 H0Z" fill="#ffcd00" />
            <path d="M10,6 H20 V12 H10Z" fill="#000" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);

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
