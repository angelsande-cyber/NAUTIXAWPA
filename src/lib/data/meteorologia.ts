// Data for meteorology page, using translation keys.

export const METEO_DATA = {
    beaufortScaleKeys: [
        { force: 0, denomination: 'meteo.beaufort.denominations.0', speedKnots: 'meteo.beaufort.speedKnots.0', waveHeight: 'meteo.beaufort.waveHeight.0', seaState: 'meteo.beaufort.seaState.0' },
        { force: 1, denomination: 'meteo.beaufort.denominations.1', speedKnots: 'meteo.beaufort.speedKnots.1', waveHeight: 'meteo.beaufort.waveHeight.1', seaState: 'meteo.beaufort.seaState.1' },
        { force: 2, denomination: 'meteo.beaufort.denominations.2', speedKnots: 'meteo.beaufort.speedKnots.2', waveHeight: 'meteo.beaufort.waveHeight.2', seaState: 'meteo.beaufort.seaState.2' },
        { force: 3, denomination: 'meteo.beaufort.denominations.3', speedKnots: 'meteo.beaufort.speedKnots.3', waveHeight: 'meteo.beaufort.waveHeight.3', seaState: 'meteo.beaufort.seaState.3' },
        { force: 4, denomination: 'meteo.beaufort.denominations.4', speedKnots: 'meteo.beaufort.speedKnots.4', waveHeight: 'meteo.beaufort.waveHeight.4', seaState: 'meteo.beaufort.seaState.4' },
        { force: 5, denomination: 'meteo.beaufort.denominations.5', speedKnots: 'meteo.beaufort.speedKnots.5', waveHeight: 'meteo.beaufort.waveHeight.5', seaState: 'meteo.beaufort.seaState.5' },
        { force: 6, denomination: 'meteo.beaufort.denominations.6', speedKnots: 'meteo.beaufort.speedKnots.6', waveHeight: 'meteo.beaufort.waveHeight.6', seaState: 'meteo.beaufort.seaState.6' },
        { force: 7, denomination: 'meteo.beaufort.denominations.7', speedKnots: 'meteo.beaufort.speedKnots.7', waveHeight: 'meteo.beaufort.waveHeight.7', seaState: 'meteo.beaufort.seaState.7' },
        { force: 8, denomination: 'meteo.beaufort.denominations.8', speedKnots: 'meteo.beaufort.speedKnots.8', waveHeight: 'meteo.beaufort.waveHeight.8', seaState: 'meteo.beaufort.seaState.8' },
        { force: 9, denomination: 'meteo.beaufort.denominations.9', speedKnots: 'meteo.beaufort.speedKnots.9', waveHeight: 'meteo.beaufort.waveHeight.9', seaState: 'meteo.beaufort.seaState.9' },
        { force: 10, denomination: 'meteo.beaufort.denominations.10', speedKnots: 'meteo.beaufort.speedKnots.10', waveHeight: 'meteo.beaufort.waveHeight.10', seaState: 'meteo.beaufort.seaState.10' },
        { force: 11, denomination: 'meteo.beaufort.denominations.11', speedKnots: 'meteo.beaufort.speedKnots.11', waveHeight: 'meteo.beaufort.waveHeight.11', seaState: 'meteo.beaufort.seaState.11' },
        { force: 12, denomination: 'meteo.beaufort.denominations.12', speedKnots: 'meteo.beaufort.speedKnots.12', waveHeight: 'meteo.beaufort.waveHeight.12', seaState: 'meteo.beaufort.seaState.12' },
    ],
    douglasSeaScaleKeys: [
        { degree: 0, denomination: 'meteo.douglas.sea.d0', waveHeight: 'meteo.douglas.sea.waveHeight.0' },
        { degree: 1, denomination: 'meteo.douglas.sea.d1', waveHeight: 'meteo.douglas.sea.waveHeight.1' },
        { degree: 2, denomination: 'meteo.douglas.sea.d2', waveHeight: 'meteo.douglas.sea.waveHeight.2' },
        { degree: 3, denomination: 'meteo.douglas.sea.d3', waveHeight: 'meteo.douglas.sea.waveHeight.3' },
        { degree: 4, denomination: 'meteo.douglas.sea.d4', waveHeight: 'meteo.douglas.sea.waveHeight.4' },
        { degree: 5, denomination: 'meteo.douglas.sea.d5', waveHeight: 'meteo.douglas.sea.waveHeight.5' },
        { degree: 6, denomination: 'meteo.douglas.sea.d6', waveHeight: 'meteo.douglas.sea.waveHeight.6' },
        { degree: 7, denomination: 'meteo.douglas.sea.d7', waveHeight: 'meteo.douglas.sea.waveHeight.7' },
        { degree: 8, denomination: 'meteo.douglas.sea.d8', waveHeight: 'meteo.douglas.sea.waveHeight.8' },
        { degree: 9, denomination: 'meteo.douglas.sea.d9', waveHeight: 'meteo.douglas.sea.waveHeight.9' },
    ],
    douglasSwellScaleKeys: [
        { degree: 0, denomination: 'meteo.douglas.swell.d0', waveHeight: 'meteo.douglas.swell.waveHeight.0' },
        { degree: 1, denomination: 'meteo.douglas.swell.d1', waveHeight: 'meteo.douglas.swell.waveHeight.1' },
        { degree: 2, denomination: 'meteo.douglas.swell.d2', waveHeight: 'meteo.douglas.swell.waveHeight.2' },
        { degree: 3, denomination: 'meteo.douglas.swell.d3', waveHeight: 'meteo.douglas.swell.waveHeight.3' },
    ],
    cloudTypeKeys: [
        { type: 'meteo.clouds.types.cirrus.name', altitude: 'meteo.clouds.types.cirrus.altitude', description: 'meteo.clouds.types.cirrus.description', imageUrl: '/images/clouds/cirrus.jpeg', hint: 'cirrus wispy' },
        { type: 'meteo.clouds.types.cirrocumulus.name', altitude: 'meteo.clouds.types.cirrocumulus.altitude', description: 'meteo.clouds.types.cirrocumulus.description', imageUrl: '/images/clouds/cirrocumulus.jpeg', hint: 'cirrocumulus mackerel' },
        { type: 'meteo.clouds.types.cirrostratus.name', altitude: 'meteo.clouds.types.cirrostratus.altitude', description: 'meteo.clouds.types.cirrostratus.description', imageUrl: '/images/clouds/cirrostratus.jpeg', hint: 'cirrostratus halo' },
        { type: 'meteo.clouds.types.altocumulus.name', altitude: 'meteo.clouds.types.altocumulus.altitude', description: 'meteo.clouds.types.altocumulus.description', imageUrl: '/images/clouds/altocumulus.jpeg', hint: 'altocumulus midlevel' },
        { type: 'meteo.clouds.types.altostratus.name', altitude: 'meteo.clouds.types.altostratus.altitude', description: 'meteo.clouds.types.altostratus.description', imageUrl: '/images/clouds/altostratus.jpeg', hint: 'altostratus sheet' },
        { type: 'meteo.clouds.types.nimbostratus.name', altitude: 'meteo.clouds.types.nimbostratus.altitude', description: 'meteo.clouds.types.nimbostratus.description', imageUrl: '/images/clouds/nimbostratus.jpeg', hint: 'nimbostratus rain' },
        { type: 'meteo.clouds.types.stratus.name', altitude: 'meteo.clouds.types.stratus.altitude', description: 'meteo.clouds.types.stratus.description', imageUrl: '/images/clouds/stratus.jpeg', hint: 'stratus layer' },
        { type: 'meteo.clouds.types.stratocumulus.name', altitude: 'meteo.clouds.types.stratocumulus.altitude', description: 'meteo.clouds.types.stratocumulus.description', imageUrl: '/images/clouds/stratocumulus.jpeg', hint: 'stratocumulus low' },
        { type: 'meteo.clouds.types.cumulus.name', altitude: 'meteo.clouds.types.cumulus.altitude', description: 'meteo.clouds.types.cumulus.description', imageUrl: '/images/clouds/cumulus.jpeg', hint: 'cumulus fluffy' },
        { type: 'meteo.clouds.types.cumulonimbus.name', altitude: 'meteo.clouds.types.cumulonimbus.altitude', description: 'meteo.clouds.types.cumulonimbus.description', imageUrl: '/images/clouds/cumulonimbus.jpeg', hint: 'cumulonimbus storm' }
    ]
};
