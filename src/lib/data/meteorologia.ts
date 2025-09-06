

export const BEAUFORT_SCALE_DATA = [
    { force: 0, denomination: 'Calma', speedKnots: '< 1', seaState: 'Espejo', waveHeight: '0m' },
    { force: 1, denomination: 'Ventolina', speedKnots: '1-3', seaState: 'Rizos', waveHeight: '0.1m' },
    { force: 2, denomination: 'Brisa muy débil', speedKnots: '4-6', seaState: 'Olas pequeñas', waveHeight: '0.2m' },
    { force: 3, denomination: 'Brisa débil', speedKnots: '7-10', seaState: 'Olas pequeñas, crestas rompientes', waveHeight: '0.6m' },
    { force: 4, denomination: 'Brisa moderada', speedKnots: '11-16', seaState: 'Olas algo largas, borreguillos', waveHeight: '1m' },
    { force: 5, denomination: 'Brisa fresca', speedKnots: '17-21', seaState: 'Olas moderadas y alargadas, muchos borreguillos', waveHeight: '2m' },
    { force: 6, denomination: 'Brisa fuerte', speedKnots: '22-27', seaState: 'Olas grandes, crestas rompientes, espuma', waveHeight: '3m' },
    { force: 7, denomination: 'Viento fuerte', speedKnots: '28-33', seaState: 'Mar gruesa, espuma en hileras', waveHeight: '4m' },
    { force: 8, denomination: 'Temporal', speedKnots: '34-40', seaState: 'Olas altas con rompientes, espuma en hileras', waveHeight: '5.5m' },
    { force: 9, denomination: 'Temporal fuerte', speedKnots: '41-47', seaState: 'Olas muy altas, rompientes violentos, visibilidad reducida', waveHeight: '7m' },
    { force: 10, denomination: 'Temporal duro', speedKnots: '48-55', seaState: 'Olas muy gruesas, mar blanca, visibilidad muy reducida', waveHeight: '9m' },
    { force: 11, denomination: 'Temporal muy duro', speedKnots: '56-63', seaState: 'Olas excepcionalmente grandes, mar cubierta de espuma', waveHeight: '11.5m' },
    { force: 12, denomination: 'Huracán', speedKnots: '> 64', seaState: 'Aire lleno de espuma y rociones, visibilidad nula', waveHeight: '> 14m' },
];

export const DOUGLAS_SEA_SCALE = [
    { degree: 0, denomination: 'Calma', waveHeight: '0m' },
    { degree: 1, denomination: 'Rizada', waveHeight: '0 - 0.1m' },
    { degree: 2, denomination: 'Marejadilla', waveHeight: '0.1 - 0.5m' },
    { degree: 3, denomination: 'Marejada', waveHeight: '0.5 - 1.25m' },
    { degree: 4, denomination: 'Fuerte Marejada', waveHeight: '1.25 - 2.5m' },
    { degree: 5, denomination: 'Gruesa', waveHeight: '2.5 - 4m' },
    { degree: 6, denomination: 'Muy gruesa', waveHeight: '4 - 6m' },
    { degree: 7, denomination: 'Arbolada', waveHeight: '6 - 9m' },
    { degree: 8, denomination: 'Montañosa', waveHeight: '9 - 14m' },
    { degree: 9, denomination: 'Enorme', waveHeight: '> 14m' },
];

export const DOUGLAS_SWELL_SCALE = [
    { degree: 0, denomination: 'Calma', waveHeight: 'Sin oleaje' },
    { degree: 1, denomination: 'Débil', waveHeight: '< 2m' },
    { degree: 2, denomination: 'Moderado', waveHeight: '2 - 4m' },
    { degree: 3, denomination: 'Fuerte', waveHeight: '> 4m' },
];

export const CLOUD_TYPES_DATA = [
    {
        type: 'Cirrus (Ci)',
        altitude: 'Altas (>6000m)',
        description: 'Fibrosas, blancas, delicadas, en forma de filamentos o bancos estrechos. Compuestas de cristales de hielo. No suelen producir precipitación.',
        imageUrl: 'https://picsum.photos/id/12/400/200',
        hint: 'cirrus clouds'
    },
    {
        type: 'Cirrocumulus (Cc)',
        altitude: 'Altas (>6000m)',
        description: 'Bancos o capas delgadas de nubes blancas, sin sombras, compuestas por elementos muy pequeños en forma de granos, rizos, etc. (cielo aborregado).',
        imageUrl: 'https://images.pexels.com/photos/3329095/pexels-photo-3329095.jpeg?auto=compress&cs=tinysrgb&w=400',
        hint: 'cirrocumulus sky'
    },
    {
        type: 'Cirrostratus (Cs)',
        altitude: 'Altas (>6000m)',
        description: 'Velo nuboso transparente y blanquecino, de aspecto fibroso o liso, que cubre total o parcialmente el cielo. Producen el fenómeno del halo solar o lunar.',
        imageUrl: 'https://images.pexels.com/photos/4210918/pexels-photo-4210918.jpeg?auto=compress&cs=tinysrgb&w=400',
        hint: 'cirrostratus sky'
    },
    {
        type: 'Altocumulus (Ac)',
        altitude: 'Medias (2000-6000m)',
        description: 'Banco o capa de nubes blancas o grises, que tienen generalmente sombras propias. Pueden tener aspecto de losas, rodillos, etc.',
        imageUrl: 'https://images.pexels.com/photos/19808316/pexels-photo-19808316.jpeg?auto=compress&cs=tinysrgb&w=400',
        hint: 'altocumulus clouds'
    },
    {
        type: 'Altostratus (As)',
        altitude: 'Medias (2000-6000m)',
        description: 'Capa nubosa grisácea o azulada, de aspecto estriado, fibroso o uniforme, que cubre total o parcialmente el cielo. El sol puede verse como a través de un vidrio esmerilado.',
        imageUrl: 'https://images.pexels.com/photos/29056965/pexels-photo-29056965.jpeg?auto=compress&cs=tinysrgb&w=400',
        hint: 'altostratus layer'
    },
    {
        type: 'Nimbostratus (Ns)',
        altitude: 'Bajas (<2000m)',
        description: 'Capa nubosa gris, a menudo oscura, de aspecto amorfo y base difusa por la precipitación continua de lluvia o nieve que llega al suelo.',
        imageUrl: 'https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=compress&cs=tinysrgb&w=400',
        hint: 'grey clouds'
    },
    {
        type: 'Stratocumulus (Sc)',
        altitude: 'Bajas (<2000m)',
        description: 'Banco, capa o faja de nubes grises o blanquecinas que casi siempre tienen partes oscuras. Con aspecto de mosaico, masas redondeadas, etc.',
        imageUrl: 'https://images.pexels.com/photos/33175900/pexels-photo-33175900.jpeg?auto=compress&cs=tinysrgb&w=400',
        hint: 'dramatic sky'
    },
    {
        type: 'Stratus (St)',
        altitude: 'Bajas (<2000m)',
        description: 'Capa nubosa generalmente gris, con base bastante uniforme, pudiendo dar lugar a llovizna, prismas de hielo o cinarra. Similar a la niebla, pero sin tocar el suelo.',
        imageUrl: 'https://images.pexels.com/photos/3797929/pexels-photo-3797929.jpeg?auto=compress&cs=tinysrgb&w=400',
        hint: 'cloudy sky'
    },
    {
        type: 'Cumulus (Cu)',
        altitude: 'Bajas (<2000m)',
        description: 'Nubes separadas, generalmente densas y con contornos bien definidos, que se desarrollan verticalmente en forma de cúpulas o torres. Su parte superior iluminada por el sol es de un blanco brillante, mientras que su base es relativamente oscura y horizontal.',
        imageUrl: 'https://images.pexels.com/photos/33709203/pexels-photo-33709203.jpeg?auto=compress&cs=tinysrgb&w=400',
        hint: 'puffy clouds'
    },
    {
        type: 'Cumulonimbus (Cb)',
        altitude: 'Desarrollo vertical',
        description: 'Nube densa y potente, con un considerable desarrollo vertical, en forma de montaña o enormes torres. Asociada a tormentas, chubascos, granizo y tornados. Su cima suele tener forma de yunque.',
        imageUrl: 'https://images.pexels.com/photos/10590545/pexels-photo-10590545.jpeg?auto=compress&cs=tinysrgb&w=400',
        hint: 'cumulonimbus storm'
    },
];
