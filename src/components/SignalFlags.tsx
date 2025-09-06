// Data and SVG components for International Code of Signals number pennants.

import React from 'react';

// --- Pennant Shape ---
const pennantShapeTapered = "M0,0 L25,-6 L25,-12 L0,-18 L0,0";

// --- Pennants ---
const Num0 = () => (
    <svg viewBox="-0.5 -18.5 26 20" fill="none">
        <defs>
            <clipPath id="clipPennant0">
                <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant0)">
            <rect x="0" y="-18" width="8.33" height="18" fill="#ffcd00" />
            <rect x="8.33" y="-18" width="8.34" height="18" fill="#d72828" />
            <rect x="16.67" y="-18" width="8.33" height="18" fill="#ffcd00" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num1 = () => (
    <svg viewBox="-0.5 -18.5 26 20" fill="none">
        <path d={pennantShapeTapered} fill="#fff" stroke="#4A4A4A" strokeWidth="0.5" />
        <circle cx="8" cy="-9" r="4" fill="#d72828"/>
    </svg>
);
const Num2 = () => (
    <svg viewBox="-0.5 -18.5 26 20" fill="none">
        <path d={pennantShapeTapered} fill="#0058a7" stroke="#4A4A4A" strokeWidth="0.5"/>
        <circle cx="8" cy="-9" r="4" fill="#fff"/>
    </svg>
);
const Num3 = () => (
    <svg viewBox="-0.5 -18.5 26 20" fill="none">
        <defs>
            <clipPath id="clipPennant3">
                <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant3)">
            <rect x="0" y="-18" width="8.3" height="18" fill="#d72828" />
            <rect x="8.3" y="-18" width="8.4" height="18" fill="#fff" />
            <rect x="16.7" y="-18" width="8.3" height="18" fill="#0058a7" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num4 = () => (
    <svg viewBox="-0.5 -18.5 26 20" fill="none">
        <defs>
            <clipPath id="clipPennant4">
                 <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant4)">
            <rect x="-1" y="-18" width="27" height="18" fill="#d72828" />
            <path d="M-1 -9 H26 M12.5 -18 V0" stroke="#fff" strokeWidth="3" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num5 = () => (
    <svg viewBox="-0.5 -18.5 26 20" fill="none">
        <defs>
            <clipPath id="clipPennant5">
                 <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant5)">
            <rect x="0" y="-18" width="12.5" height="18" fill="#ffcd00" />
            <rect x="12.5" y="-18" width="12.5" height="18" fill="#0058a7" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num6 = () => (
    <svg viewBox="-0.5 -18.5 26 20" fill="none">
        <defs>
            <clipPath id="clipPennant6">
                 <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant6)">
            <rect x="0" y="-18" width="25" height="9" fill="#000" />
            <rect x="0" y="-9" width="25" height="9" fill="#fff" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num7 = () => (
    <svg viewBox="-0.5 -18.5 26 20" fill="none">
        <defs>
            <clipPath id="clipPennant7">
                 <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant7)">
            <rect x="0" y="-18" width="25" height="9" fill="#ffcd00" />
            <rect x="0" y="-9" width="25" height="9" fill="#d72828" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num8 = () => (
    <svg viewBox="-0.5 -18.5 26 20" fill="none">
        <defs>
            <clipPath id="clipPennant8">
                 <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant8)">
            <rect x="-1" y="-18" width="27" height="18" fill="#fff" />
            <path d="M-1 -9 H26 M12.5 -18 V0" stroke="#d72828" strokeWidth="3" />
        </g>
        <path d={pennantShapeTapered} stroke="#4A4A4A" strokeWidth="0.5" fill="none" />
    </svg>
);
const Num9 = () => (
    <svg viewBox="-0.5 -18.5 26 20" fill="none">
        <defs>
            <clipPath id="clipPennant9">
                 <path d={pennantShapeTapered} />
            </clipPath>
        </defs>
        <g clipPath="url(#clipPennant9)">
            <rect x="0" y="-18" width="12.5" height="9" fill="#fff" />
            <rect x="12.5" y="-18" width="12.5" height="9" fill="#000" />
            <rect x="0" y="-9" width="12.5" height="9" fill="#d72828" />
            <rect x="12.5" y="-9" width="12.5" height="9" fill="#ffcd00" />
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
