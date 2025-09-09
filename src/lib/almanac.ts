

// ---------------------------- Tipos ----------------------------
export type AlmanacInput = {
    year: number;
    month: number; // 1-12
    day: number; // 1-31
    hour?: number; // 0-23 (UT1)
    minute?: number;
    second?: number;
    deltaT?: number; // segundos (TDT-UT)
};

export type SunOutput = {
    RA: number; // grados
    Dec: number; // grados
    GHA: number; // grados
    SD: number; // arco-segundos (aprox)
    HP: number; // arco-segundos (aprox)
};

export type AriesOutput = { GHA: number };

export type AlmanacOutput = {
    JD: number;
    JDE: number; // JD + deltaT/86400
    T: number; // Siglos julianos desde J2000 (UT1)
    TE: number; // Siglos julianos TDT
    GMST: number; // grados
    GAST: number; // grados
    EOT: number; // minutos (ecuación del tiempo)
    PMG_sun: { h: number; m: number; s: number };
    Aries: AriesOutput;
    Sun: SunOutput;
};


// ---------------------------- Matemáticas base ----------------------------
const PI = Math.PI;
const dtr = PI / 180; // grados → radianes
const rtd = 180 / PI; // radianes → grados

const sind = (x: number) => Math.sin(x * dtr);
const cosd = (x: number) => Math.cos(x * dtr);
const asind = (x: number) => Math.asin(x) * rtd;
const atan2d = (y: number, x: number) => Math.atan2(y, x) * rtd;

const norm360 = (x: number) => ((x % 360) + 360) % 360;

// ---------------------------- Julian Date ----------------------------
function julianDate(input: Required<Omit<AlmanacInput, 'deltaT'>>) {
    let { year, month, day, hour, minute, second } = input;
    if (month <= 2) {
        year -= 1;
        month += 12;
    }
    const A = Math.floor(year / 100);
    const B = 2 - A + Math.floor(A / 4);
    const dayFraction = (hour + minute / 60 + second / 3600) / 24;
    const JD0h =
        Math.floor(365.25 * (year + 4716)) +
        Math.floor(30.6001 * (month + 1)) +
        day +
        B -
        1524.5;
    return JD0h + dayFraction;
}

// ---------------------------- Oblicuidad & Nutación (simplificadas) ----------------------------
function meanObliquityArcsec(TE: number) {
    return 84381.448 - 46.8150 * TE - 0.00059 * TE * TE + 0.001813 * TE * TE * TE;
}

function nutation(TE: number) {
    // Términos dominantes (IAU 1980)
    const Mm = 134.96298139 + 198.867398056 * TE + (477000 * TE) + 0.00869722222 * TE * TE + (TE * TE * TE) / 56250;
    const M = 357.52772333 + 359.05034 * TE + (35640 * TE) - 0.00016027778 * TE * TE - (TE * TE * TE) / 300000;
    const F = 93.27191028 + 82.017538055 * TE + (483120 * TE) - 0.0036825 * TE * TE + (TE * TE * TE) / 327272.7273;
    const D = 297.85036306 + 307.11148 * TE + (444960 * TE) - 0.001914166667 * TE * TE + (TE * TE * TE) / 189473.6842;
    const omega = 125.04452222 - 134.136260833 * TE - (1800 * TE) + 0.002070833333 * TE * TE + (TE * TE * TE) / 450000;

    const terms: Array<[number, number, number, number, number, number, number]> = [
        [0, 0, 0, 0, 1, -171996, 92025], [0, 0, 2, -2, 2, -13187, 5736],
        [0, 0, 2, 0, 2, -2274, 977], [0, 0, 0, 0, 2, 2062, -895],
        [0, 1, 0, 0, 0, -131, 0],
    ];

    let dpsi = 0, deps = 0;
    for (const [Dd, Md, Mmd, Fd, Om, cpsi, ceps] of terms) {
        const arg = Dd * D + Md * M + Mmd * Mm + Fd * F + Om * omega;
        dpsi += cpsi * sind(arg) / 10000;
        deps += ceps * cosd(arg) / 10000;
    }

    const eps0 = meanObliquityArcsec(TE) / 3600;
    const eps = eps0 + deps / 3600;
    return { dpsi: dpsi / 3600, deps: deps / 3600, eps0, eps };
}

// ---------------------------- GMST/GAST ----------------------------
function gmstDegrees(JD: number) {
    const T = (JD - 2451545.0) / 36525;
    const GMSTh = 6.697374558 + 2400.051336 * T + 0.000025862 * T * T + 1.00273790935 * ((JD + 0.5) % 1) * 24;
    return norm360(GMSTh * 15);
}

function gastDegrees(JD: number, TE: number) {
    const gmst = gmstDegrees(JD);
    const { dpsi, eps } = nutation(TE);
    const eqeq = dpsi * Math.cos(eps * dtr) * rtd;
    return norm360(gmst + eqeq);
}

// ---------------------------- Sol (NOAA/NREL) ----------------------------
function sunPosition(JDE: number): Omit<SunOutput, 'GHA'> & { EOTmin: number } {
    const T = (JDE - 2451545) / 36525;
    const L0 = norm360(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
    const M = norm360(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
    const e = 0.016708634 - 0.000042037 * T - 0.0000001267 * T * T;
    const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * sind(M) +
        (0.019993 - 0.000101 * T) * sind(2 * M) + 0.000289 * sind(3 * M);
    const trueLong = L0 + C;
    const omega = 125.04 - 1934.136 * T;
    const lambda = trueLong - 0.00569 - 0.00478 * sind(omega);
    const eps0 = 23 + meanObliquityArcsec(T) / 3600;
    const eps = eps0 + 0.00256 * cosd(omega);
    const RA = norm360(atan2d(cosd(eps) * sind(lambda), cosd(lambda)));
    const Dec = asind(sind(eps) * sind(lambda));
    const y = Math.tan((eps * dtr) / 2) ** 2;
    const E = 4 * rtd * (y * sind(2 * L0) - 2 * e * sind(M) + 4 * e * y * sind(M) * cosd(2 * L0) - 0.5 * y * y * sind(4 * L0) - 1.25 * e * e * sind(2 * M));
    const SD = 959.63;
    const HP = 8.794;
    return { RA, Dec, SD, HP, EOTmin: E };
}

// ---------------------------- GHA / PMG ----------------------------
function ghaFromRA(JD: number, TE: number, RAdeg: number): number {
    const GAST = gastDegrees(JD, TE);
    return norm360(GAST - RAdeg);
}

function pmgFromEOT(EOTmin: number) {
    const PMG = 12 - EOTmin / 60;
    const h = Math.floor(PMG);
    const m = Math.floor(60 * (PMG - h));
    const s = Math.round(3600 * (PMG - h - m / 60));
    return { h, m, s };
}

// ---------------------------- Formateadores ----------------------------
export function fmtGHA(x: number) {
    const deg = Math.floor(x);
    let min = Math.round(600 * (x - deg)) / 10;
    if (min >= 60) {
        min -= 60;
        return `${String(deg + 1).padStart(3, '0')}º ${min.toFixed(1).padStart(4, '0')}'`;
    }
    return `${String(deg).padStart(3, '0')}º ${min.toFixed(1).padStart(4, '0')}'`;
}

export function fmtDec(x: number) {
    const sign = x < 0 ? 'S' : 'N';
    const A = Math.abs(x);
    const deg = Math.floor(A);
    let min = Math.round(600 * (A - deg)) / 10;
    if (min >= 60) {
        min -= 60;
        return `${sign} ${String(deg + 1).padStart(2, '0')}º ${min.toFixed(1).padStart(4, '0')}'`;
    }
    return `${sign} ${String(deg).padStart(2, '0')}º ${min.toFixed(1).padStart(4, '0')}'`;
}

export function fmtSidTime(deg: number) {
    const h = Math.floor(deg / 15);
    const m = Math.floor((deg / 15 - h) * 60);
    const s = (((deg / 15 - h) * 60 - m) * 60).toFixed(2);
    return `${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(5,'0')}s`;
}

// ---------------------------- Cálculo maestro ----------------------------
export function computeAlmanac(input: AlmanacInput): AlmanacOutput {
    const { year, month, day, hour = 0, minute = 0, second = 0, deltaT = 0 } = input;
    const baseInput = { year, month, day, hour, minute, second };
    
    if(!year || !month || !day) {
        const now = new Date();
        baseInput.year = now.getUTCFullYear();
        baseInput.month = now.getUTCMonth() + 1;
        baseInput.day = now.getUTCDate();
    }


    const JD = julianDate(baseInput);
    const JDE = JD + deltaT / 86400;
    const T = (JD - 2451545) / 36525;
    const TE = (JDE - 2451545) / 36525;

    const GMST = gmstDegrees(JD);
    const GAST = gastDegrees(JD, TE);

    const sun0 = sunPosition(JDE);
    const Sun_GHA = ghaFromRA(JD, TE, sun0.RA);
    const PMGsun = pmgFromEOT(sun0.EOTmin);

    const Aries_GHA = GAST;

    return {
        JD, JDE, T, TE, GMST, GAST,
        EOT: sun0.EOTmin,
        PMG_sun: PMGsun,
        Aries: { GHA: Aries_GHA },
        Sun: { RA: sun0.RA, Dec: sun0.Dec, GHA: Sun_GHA, SD: sun0.SD, HP: sun0.HP },
    };
}
