

export const BEAUFORT_SCALE_DATA = [
    { force: 0, denomination: 'meteo.beaufort.denominations.calm', speedKnots: '< 1', seaState: 'meteo.beaufort.seaStates.mirror', waveHeight: '0m' },
    { force: 1, denomination: 'meteo.beaufort.denominations.lightAir', speedKnots: '1-3', seaState: 'meteo.beaufort.seaStates.ripples', waveHeight: '0.1m' },
    { force: 2, denomination: 'meteo.beaufort.denominations.lightBreeze', speedKnots: '4-6', seaState: 'meteo.beaufort.seaStates.smallWavelets', waveHeight: '0.2m' },
    { force: 3, denomination: 'meteo.beaufort.denominations.gentleBreeze', speedKnots: '7-10', seaState: 'meteo.beaufort.seaStates.largeWavelets', waveHeight: '0.6m' },
    { force: 4, denomination: 'meteo.beaufort.denominations.moderateBreeze', speedKnots: '11-16', seaState: 'meteo.beaufort.seaStates.smallWaves', waveHeight: '1m' },
    { force: 5, denomination: 'meteo.beaufort.denominations.freshBreeze', speedKnots: '17-21', seaState: 'meteo.beaufort.seaStates.moderateWaves', waveHeight: '2m' },
    { force: 6, denomination: 'meteo.beaufort.denominations.strongBreeze', speedKnots: '22-27', seaState: 'meteo.beaufort.seaStates.largeWaves', waveHeight: '3m' },
    { force: 7, denomination: 'meteo.beaufort.denominations.nearGale', speedKnots: '28-33', seaState: 'meteo.beaufort.seaStates.seaHeapsUp', waveHeight: '4m' },
    { force: 8, denomination: 'meteo.beaufort.denominations.gale', speedKnots: '34-40', seaState: 'meteo.beaufort.seaStates.highWaves', waveHeight: '5.5m' },
    { force: 9, denomination: 'meteo.beaufort.denominations.strongGale', speedKnots: '41-47', seaState: 'meteo.beaufort.seaStates.veryHighWaves', waveHeight: '7m' },
    { force: 10, denomination: 'meteo.beaufort.denominations.storm', speedKnots: '48-55', seaState: 'meteo.beaufort.seaStates.seaWhite', waveHeight: '9m' },
    { force: 11, denomination: 'meteo.beaufort.denominations.violentStorm', speedKnots: '56-63', seaState: 'meteo.beaufort.seaStates.exceptionallyHighWaves', waveHeight: '11.5m' },
    { force: 12, denomination: 'meteo.beaufort.denominations.hurricane', speedKnots: '> 64', seaState: 'meteo.beaufort.seaStates.airFilledWithFoam', waveHeight: '> 14m' },
];

export const DOUGLAS_SEA_SCALE = [
    { degree: 0, denomination: 'meteo.douglas.sea.denominations.calmGlassy', waveHeight: '0m' },
    { degree: 1, denomination: 'meteo.douglas.sea.denominations.calmRippled', waveHeight: '0 - 0.1m' },
    { degree: 2, denomination: 'meteo.douglas.sea.denominations.smooth', waveHeight: '0.1 - 0.5m' },
    { degree: 3, denomination: 'meteo.douglas.sea.denominations.slight', waveHeight: '0.5 - 1.25m' },
    { degree: 4, denomination: 'meteo.douglas.sea.denominations.moderate', waveHeight: '1.25 - 2.5m' },
    { degree: 5, denomination: 'meteo.douglas.sea.denominations.rough', waveHeight: '2.5 - 4m' },
    { degree: 6, denomination: 'meteo.douglas.sea.denominations.veryRough', waveHeight: '4 - 6m' },
    { degree: 7, denomination: 'meteo.douglas.sea.denominations.high', waveHeight: '6 - 9m' },
    { degree: 8, denomination: 'meteo.douglas.sea.denominations.veryHigh', waveHeight: '9 - 14m' },
    { degree: 9, denomination: 'meteo.douglas.sea.denominations.phenomenal', waveHeight: '> 14m' },
];

export const DOUGLAS_SWELL_SCALE = [
    { degree: 0, denomination: 'meteo.douglas.swell.denominations.noSwell', waveHeight: 'No swell' },
    { degree: 1, denomination: 'meteo.douglas.swell.denominations.lowSwell', waveHeight: '< 2m' },
    { degree: 2, denomination: 'meteo.douglas.swell.denominations.moderateSwell', waveHeight: '2 - 4m' },
    { degree: 3, denomination: 'meteo.douglas.swell.denominations.heavySwell', waveHeight: '> 4m' },
];

export const CLOUD_TYPES_DATA = [
    {
        type: 'Cirrus (Ci)',
        altitude: 'meteo.clouds.altitudes.high',
        description: 'meteo.clouds.descriptions.cirrus',
        imageUrl: '/images/clouds/cirrus.jpeg',
        hint: 'cirrus sky'
    },
    {
        type: 'Cirrocumulus (Cc)',
        altitude: 'meteo.clouds.altitudes.high',
        description: 'meteo.clouds.descriptions.cirrocumulus',
        imageUrl: '/images/clouds/cirrocumulus.jpeg',
        hint: 'cirrocumulus sky'
    },
    {
        type: 'Cirrostratus (Cs)',
        altitude: 'meteo.clouds.altitudes.high',
        description: 'meteo.clouds.descriptions.cirrostratus',
        imageUrl: '/images/clouds/cirrostratus.jpeg',
        hint: 'cirrostratus sky'
    },
    {
        type: 'Altocumulus (Ac)',
        altitude: 'meteo.clouds.altitudes.medium',
        description: 'meteo.clouds.descriptions.altocumulus',
        imageUrl: '/images/clouds/altocumulus.jpeg',
        hint: 'altocumulus clouds'
    },
    {
        type: 'Altostratus (As)',
        altitude: 'meteo.clouds.altitudes.medium',
        description: 'meteo.clouds.descriptions.altostratus',
        imageUrl: '/images/clouds/altostratus.jpeg',
        hint: 'altostratus layer'
    },
    {
        type: 'Nimbostratus (Ns)',
        altitude: 'meteo.clouds.altitudes.low',
        description: 'meteo.clouds.descriptions.nimbostratus',
        imageUrl: '/images/clouds/nimbostratus.jpeg',
        hint: 'grey clouds'
    },
    {
        type: 'Stratocumulus (Sc)',
        altitude: 'meteo.clouds.altitudes.low',
        description: 'meteo.clouds.descriptions.stratocumulus',
        imageUrl: '/images/clouds/stratocumulus.jpeg',
        hint: 'dramatic sky'
    },
    {
        type: 'Stratus (St)',
        altitude: 'meteo.clouds.altitudes.low',
        description: 'meteo.clouds.descriptions.stratus',
        imageUrl: '/images/clouds/stratus.jpeg',
        hint: 'cloudy sky'
    },
    {
        type: 'Cumulus (Cu)',
        altitude: 'meteo.clouds.altitudes.low',
        description: 'meteo.clouds.descriptions.cumulus',
        imageUrl: '/images/clouds/cumulus.jpeg',
        hint: 'puffy clouds'
    },
    {
        type: 'Cumulonimbus (Cb)',
        altitude: 'meteo.clouds.altitudes.vertical',
        description: 'meteo.clouds.descriptions.cumulonimbus',
        imageUrl: '/images/clouds/cumulonimbus.jpeg',
        hint: 'cumulonimbus storm'
    },
];