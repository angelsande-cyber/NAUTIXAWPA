// Data for meteorology page, with hardcoded Spanish text.

export const METEO_DATA = {
    beaufortScale: [
        { force: 0, denomination: 'Calma', speedKnots: '< 1', waveHeight: '0', seaState: 'Espejo' },
        { force: 1, denomination: 'Ventolina', speedKnots: '1-3', waveHeight: '0.1', seaState: 'Rizos' },
        { force: 2, denomination: 'Brisa muy débil', speedKnots: '4-6', waveHeight: '0.2-0.3', seaState: 'Olas pequeñas' },
        { force: 3, denomination: 'Brisa débil', speedKnots: '7-10', waveHeight: '0.6-1.2', seaState: 'Borreguillos' },
        { force: 4, denomination: 'Brisa moderada', speedKnots: '11-16', waveHeight: '1-2', seaState: 'Olas, borreguillos' },
        { force: 5, denomination: 'Brisa fresca', speedKnots: '17-21', waveHeight: '2-3', seaState: 'Olas moderadas' },
        { force: 6, denomination: 'Brisa fuerte', speedKnots: '22-27', waveHeight: '3-4', seaState: 'Olas grandes, espuma' },
        { force: 7, denomination: 'Viento fuerte', speedKnots: '28-33', waveHeight: '4-5.5', seaState: 'Mar gruesa, espuma en rachas' },
        { force: 8, denomination: 'Viento duro', speedKnots: '34-40', waveHeight: '5.5-7.5', seaState: 'Mar muy gruesa, rompientes' },
        { force: 9, denomination: 'Viento muy duro', speedKnots: '41-47', waveHeight: '7-10', seaState: 'Mar arbolada, visibilidad reducida' },
        { force: 10, denomination: 'Temporal', speedKnots: '48-55', waveHeight: '9-12.5', seaState: 'Mar muy arbolada, grandes rompientes' },
        { force: 11, denomination: 'Temporal duro', speedKnots: '56-63', waveHeight: '11.5-16', seaState: 'Mar montañosa' },
        { force: 12, denomination: 'Huracán', speedKnots: '> 64', waveHeight: '> 14', seaState: 'Mar excepcional, visibilidad nula' },
    ],
    douglasSeaScale: [
        { degree: 0, denomination: 'Calma', waveHeight: '0' },
        { degree: 1, denomination: 'Rizada', waveHeight: '0 - 0.1' },
        { degree: 2, denomination: 'Marejadilla', waveHeight: '0.1 - 0.5' },
        { degree: 3, denomination: 'Marejada', waveHeight: '0.5 - 1.25' },
        { degree: 4, denomination: 'Fuerte marejada', waveHeight: '1.25 - 2.5' },
        { degree: 5, denomination: 'Gruesa', waveHeight: '2.5 - 4' },
        { degree: 6, denomination: 'Muy gruesa', waveHeight: '4 - 6' },
        { degree: 7, denomination: 'Arbolada', waveHeight: '6 - 9' },
        { degree: 8, denomination: 'Montañosa', waveHeight: '9 - 14' },
        { degree: 9, denomination: 'Mar enorme', waveHeight: '> 14' },
    ],
    douglasSwellScale: [
        { degree: 0, denomination: 'Sin oleaje', waveHeight: '0' },
        { degree: 1, denomination: 'Corta o baja', waveHeight: '< 2' },
        { degree: 2, denomination: 'Moderada', waveHeight: '2 - 4' },
        { degree: 3, denomination: 'Larga o alta', waveHeight: '> 4' },
    ]
};
