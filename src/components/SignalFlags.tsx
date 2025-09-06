// Data and SVG components for International Code of Signals number pennants.

import React from 'react';

// --- Pennant Shape ---
const pennantShapeTapered = "M0,0 L20,6 L20,12 L12,0 L0,0";

// --- Pennants ---
const Num0 = () => (
    <svg viewBox="-0.5 -0.5 21 13" fill="none">
        <defs>
            <clipPath id="clipPennant0">
                <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant0)">
            <rect x="0" y="0" width="6.67" height="12" fill="#ffcd00" />
            <rect x="6.67" y="0" width="6.66" height="12" fill="#d72828" />
            <rect x="13.33" y="0" width="6.67" height="12" fill="#ffcd00" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num1 = () => (
    <svg viewBox="-0.5 -0.5 21 13" fill="none">
        <path d={pennantShapeTapered} fill="#fff" stroke="#4A4A4A" strokeWidth="0.5" />
        <circle cx="8" cy="6" r="2.5" fill="#d72828"/>
    </svg>
);
const Num2 = () => (
    <svg viewBox="-0.5 -0.5 21 13" fill="none">
        <path d={pennantShapeTapered} fill="#0058a7" stroke="#4A4A4A" strokeWidth="0.5"/>
        <circle cx="8" cy="6" r="2.5" fill="#fff"/>
    </svg>
);
const Num3 = () => (
    <svg viewBox="-0.5 -0.5 21 13" fill="none">
        <defs>
            <clipPath id="clipPennant3">
                <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant3)">
            <rect x="0" y="0" width="6.6" height="12" fill="#d72828" />
            <rect x="6.6" y="0" width="6.8" height="12" fill="#fff" />
            <rect x="13.4" y="0" width="6.6" height="12" fill="#0058a7" />
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
            <rect width="20" height="12" fill="#d72828" />
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
            <path d="M0 0 H10 V12 H0 Z" fill="#ffcd00" />
            <path d="M10 0 H20 V12 H10 Z" fill="#0058a7" />
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
            <rect width="20" height="12" fill="#fff" />
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
            <path d="M0 0 H10 V6 H0Z" fill="#fff" />
            <path d="M10 0 H20 V6 H10Z" fill="#000" />
            <path d="M0 6 H10 V12 H0Z" fill="#d72828" />
            <path d="M10 6 H20 V12 H10Z" fill="#ffcd00" />
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
