import type { Topic } from '../../types';

export const imperioRomano: Topic = {
  id: 'imperio-romano',
  title: 'El Imperio Romano',
  subtitle: 'De la República al dominio del mundo mediterráneo',
  block: 'El Mundo Antiguo',
  period: 'S. I a.C. – S. V d.C.',
  description:
    'El Imperio Romano nació de la transformación de la República romana tras un siglo de guerras civiles. Desde Augusto hasta la caída de Roma en 476 d.C., el Imperio dominó el mundo mediterráneo durante cinco siglos, dejando un legado imperecedero en el derecho, la ingeniería, la lengua y la organización política de Occidente.',
  tags: ['Roma', 'Imperio', 'Antigüedad', 'Política', 'Europa'],

  timeline: [
    {
      id: 'julio-cesar-dictador',
      date: '44 a.C.',
      title: 'Asesinato de Julio César',
      description:
        'Julio César, nombrado dictador perpetuo, es asesinado en los Idus de Marzo por un grupo de senadores republicanos liderados por Bruto y Casio.',
      type: 'political',
      details:
        'César había concentrado un poder sin precedentes: dictador perpetuo, general victorioso y reformador del Estado. Los conspiradores (más de 60 senadores) temían la instauración de una monarquía. Su muerte no salvó la República; al contrario, desencadenó nuevas guerras civiles que acelerarían la caída del sistema republicano y la transición al Imperio.',
    },
    {
      id: 'segundo-triunvirato',
      date: '43 a.C.',
      title: 'Segundo Triunvirato',
      description:
        'Octavio, Marco Antonio y Lépido forman el Segundo Triunvirato y se reparten el control del mundo romano tras derrotar a los asesinos de César.',
      type: 'political',
      details:
        'El triunvirato fue una alianza formal reconocida por ley (triumviri rei publicae constituendae). Tras derrotar a Bruto y Casio en la batalla de Filipos (42 a.C.), las tensiones entre Octavio y Marco Antonio crecieron. Mientras Octavio controlaba Occidente, Marco Antonio se asoció con Cleopatra VII de Egipto.',
    },
    {
      id: 'actium',
      date: '31 a.C.',
      title: 'Batalla de Actium',
      description:
        'Octavio derrota a Marco Antonio y Cleopatra en la batalla naval de Actium, convirtiéndose en el único dueño del mundo romano.',
      type: 'military',
      details:
        'La batalla de Actium, frente a las costas de Grecia, fue el enfrentamiento decisivo entre Occidente (Octavio) y Oriente (Antonio-Cleopatra). La flota de Agripa destrozó la escuadra antoniana. Marco Antonio y Cleopatra huyeron a Egipto, donde se suicidaron. Octavio anexionó Egipto como provincia personal, quedando como amo indiscutible del mundo mediterráneo.',
    },
    {
      id: 'principado-augusto',
      date: '27 a.C.',
      title: 'Augusto: Fundación del Principado',
      description:
        'El Senado otorga a Octavio el título de "Augustus". Mantiene las formas republicanas pero concentra todos los poderes, fundando el Principado.',
      type: 'political',
      details:
        'Augusto recibió el imperium proconsular sobre las provincias militares, la tribunicia potestas vitalicia y el título honorífico de Princeps (el primero entre los ciudadanos). No se llamó rey ni dictador, pero acumuló todos los poderes efectivos. Esta brillante solución política mantuvo la apariencia republicana mientras creaba de facto una monarquía. Su reinado duró hasta el 14 d.C.',
    },
    {
      id: 'pax-romana',
      date: '27 a.C. – 180 d.C.',
      title: 'Pax Romana',
      description:
        'Período de paz y prosperidad relativa que dura más de dos siglos. Las fronteras se estabilizan y el comercio florece en todo el mediterráneo.',
      type: 'political',
      details:
        'La Pax Romana se asocia con las dinastías Julio-Claudia, Flavia y Antonina. El Imperio alcanzó su máxima extensión bajo Trajano (98–117 d.C.), que incorporó Dacia, Arabia y Mesopotamia. El historiador Edward Gibbon describió el período de los Cinco Buenos Emperadores (Nerva, Trajano, Adriano, Antonino Pío, Marco Aurelio) como la época más feliz de la humanidad.',
    },
    {
      id: 'maximo-esplendor-trajano',
      date: '98 – 117 d.C.',
      title: 'Máximo Esplendor bajo Trajano',
      description:
        'El emperador hispano Trajano lleva el Imperio a su mayor extensión territorial, conquistando Dacia y Mesopotamia, y realiza grandes obras públicas.',
      type: 'political',
      details:
        'Nacido en Itálica (Hispania Baetica), Trajano fue el primer emperador provinciano. Sus conquistas de Dacia (101–102 y 105–106 d.C.) se inmortalizaron en la Columna Trajana de Roma. El Imperio alcanzó su mayor extensión: 5 millones de km². Impulsó un ambicioso programa de obras públicas: el Foro de Trajano, el Mercado de Trajano y una extensa red de calzadas.',
    },
    {
      id: 'crisis-siglo-iii',
      date: '235 – 284 d.C.',
      title: 'Crisis del Siglo III',
      description:
        'Período de anarquía militar, invasiones bárbaras, epidemias e inestabilidad económica que lleva al Imperio al borde del colapso.',
      type: 'political',
      details:
        'En 50 años, más de 50 emperadores se sucedieron, la mayoría asesinados por sus propias tropas. Las fronteras del Rin y el Danubio fueron atravesadas por germanos y el Imperio persa Sasánida presionó en Oriente. La crisis desarticuló el comercio, provocó inflación y demograficamente redujo la población. El Imperio casi se fracturó en tres partes (Imperio de las Galias, Palmira, Roma).',
    },
    {
      id: 'reformas-diocleciano',
      date: '284 – 305 d.C.',
      title: 'Reformas de Diocleciano',
      description:
        'Diocleciano estabiliza el Imperio con la Tetrarquía (gobierno de cuatro emperadores) y profundas reformas administrativas, militares y fiscales.',
      type: 'political',
      details:
        'Diocleciano dividió el Imperio en cuatro zonas de gobierno (Tetrarquía) con dos Augustos y dos Césares. Duplicó el ejército y reorganizó la administración en provincias más pequeñas. Su edicto de precios máximos (301 d.C.) intentó controlar la inflación. Lanzó la última gran persecución contra los cristianos (303–311 d.C.).',
    },
    {
      id: 'constantino-edicto-milan',
      date: '313 d.C.',
      title: 'Constantino y el Edicto de Milán',
      description:
        'Constantino I promulga el Edicto de Milán, legalizando el cristianismo y transformando la religión del Imperio. Funda Constantinopla.',
      type: 'political',
      details:
        'Tras unificar el Imperio derrotando a sus rivales, Constantino concedió libertad religiosa a los cristianos con el Edicto de Milán (313 d.C.) y apoyó activamente la Iglesia. En 325 presidió el Concilio de Nicea. En 330 trasladó la capital a Constantinopla (antigua Bizancio), en la orilla europea del Bósforo, punto estratégico entre Europa y Asia.',
    },
    {
      id: 'caida-roma',
      date: '476 d.C.',
      title: 'Caída del Imperio Romano de Occidente',
      description:
        'El caudillo hérulo Odoacro depone al último emperador romano de Occidente, Rómulo Augústulo, marcando el fin de la Antigüedad clásica.',
      type: 'political',
      details:
        'El 4 de septiembre de 476 d.C., Odoacro depuso a Rómulo Augústulo, un joven de apenas 16 años, y envió las insignias imperiales a Constantinopla. Aunque el Imperio de Oriente (Bizancio) sobreviviría casi mil años más, esta fecha convencional marca el fin del Imperio Romano de Occidente y el inicio de la Edad Media en la historiografía occidental.',
    },
  ],

  flashcards: [
    {
      id: 'fc-augusto',
      front: 'Augusto (Octavio)',
      back: 'Primer emperador romano (63 a.C.–14 d.C.). Sobrino nieto y heredero de Julio César. En 27 a.C. el Senado le otorgó el título de Augustus. Fundó el Principado manteniendo las formas republicanas mientras concentraba todo el poder. Su reinado de 41 años inauguró la Pax Romana.',
      category: 'person',
    },
    {
      id: 'fc-julio-cesar',
      front: 'Julio César',
      back: 'General y político romano (100–44 a.C.). Conquistó la Galia (58–50 a.C.), cruzó el Rubicón (49 a.C.) y venció en la guerra civil. Nombrado dictador perpetuo, fue asesinado en los Idus de Marzo (15 marzo 44 a.C.) por senadores republicanos. Su muerte aceleró el fin de la República.',
      category: 'person',
    },
    {
      id: 'fc-pax-romana',
      front: '¿Qué fue la Pax Romana?',
      back: 'Período de relativa paz y estabilidad que duró desde el reinado de Augusto (27 a.C.) hasta la muerte de Marco Aurelio (180 d.C.), más de dos siglos. Las fronteras se estabilizaron, el comercio florecio en todo el Mediterráneo y las ciudades prosperaron bajo una administración unificada.',
      category: 'concept',
    },
    {
      id: 'fc-trajano',
      front: 'Trajano',
      back: 'Emperador romano (98–117 d.C.) nacido en Itálica (Hispania). Primer emperador provincial. Llevó el Imperio a su máxima extensión territorial conquistando Dacia y Mesopotamia. Realizó grandes obras públicas: el Foro y la Columna Trajana. El Senado le dio el título de Optimus Princeps (el mejor príncipe).',
      category: 'person',
    },
    {
      id: 'fc-tetraquía',
      front: 'La Tetrarquía',
      back: 'Sistema de gobierno instaurado por Diocleciano en 293 d.C. que dividía el poder imperial entre cuatro gobernantes: dos Augustos (uno para Oriente y otro para Occidente) y dos Césares como sucesores designados. Intentó dar estabilidad tras la crisis del siglo III, aunque colapsó tras la abdicación de Diocleciano.',
      category: 'concept',
    },
    {
      id: 'fc-edicto-milan',
      front: 'Edicto de Milán (313 d.C.)',
      back: 'Acuerdo entre los emperadores Constantino y Licinio que proclamó la libertad religiosa en el Imperio Romano y legalizó el cristianismo. Puso fin a las persecuciones de los cristianos y fue el primer paso hacia la adopción del cristianismo como religión oficial del Estado romano.',
      category: 'event',
    },
    {
      id: 'fc-limes',
      front: '¿Qué era el Limes romano?',
      back: 'El Limes era el sistema de fronteras fortificadas del Imperio Romano, formado por una red de muros, fuertes (castra) y caminos militares a lo largo del Rin, el Danubio y en Britania (Muro de Adriano). Protegía las provincias de las incursiones de los pueblos bárbaros.',
      category: 'concept',
    },
    {
      id: 'fc-476',
      front: '¿Qué ocurrió el 4 de septiembre de 476 d.C.?',
      back: 'El caudillo hérulo Odoacro depuso al último emperador romano de Occidente, el joven Rómulo Augústulo. Esta fecha marca convencionalmente el fin del Imperio Romano de Occidente y el inicio de la Edad Media. El Imperio Romano de Oriente (Bizancio) sobrevivió hasta 1453.',
      category: 'date',
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: '¿Qué batalla de 31 a.C. convirtió a Octavio en el único dueño del mundo romano?',
      type: 'multiple-choice',
      options: ['Batalla de Filipos', 'Batalla de Actium', 'Batalla de Zama', 'Batalla del Rubicón'],
      correctIndex: 1,
      explanation:
        'La batalla de Actium (31 a.C.) enfrentó a Octavio (con Agripa) contra Marco Antonio y Cleopatra. La victoria de Octavio eliminó a su último rival y le dejó como dueño absoluto del Imperio. Marco Antonio y Cleopatra huyeron a Egipto, donde se suicidaron.',
    },
    {
      id: 'q2',
      question: 'Augusto se proclamó rey de Roma y abolió oficialmente la República.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. Augusto fue muy cuidadoso en mantener las formas republicanas. No se llamó rey ni dictador, sino Princeps (primer ciudadano). Acumuló todos los poderes reales (imperium, tribunicia potestas), pero mantuvo el Senado y las magistraturas republicanas para evitar la hostilidad que llevó al asesinato de César.',
    },
    {
      id: 'q3',
      question: '¿Cuál fue el origen geográfico del emperador Trajano?',
      type: 'multiple-choice',
      options: ['Roma', 'Grecia', 'Hispania', 'Galia'],
      correctIndex: 2,
      explanation:
        'Trajano nació en Itálica, en la Hispania Baetica (cerca de la actual Sevilla), siendo el primer emperador romano nacido fuera de Italia. Su origen hispano muestra la plena integración de las provincias occidentales en la cultura romana.',
    },
    {
      id: 'q4',
      question: '¿Qué sistema de gobierno instauró Diocleciano para estabilizar el Imperio?',
      type: 'multiple-choice',
      options: ['El Consulado', 'El Senado ampliado', 'La Tetrarquía', 'La Diarquía'],
      correctIndex: 2,
      explanation:
        'Diocleciano instituyó la Tetrarquía en 293 d.C.: cuatro gobernantes (dos Augustos y dos Césares) repartieron el gobierno del Imperio. El objetivo era garantizar la sucesión pacífica y una defensa más eficaz de las fronteras tras la caótica Crisis del Siglo III.',
    },
    {
      id: 'q5',
      question: 'El Edicto de Milán (313 d.C.) convirtió al cristianismo en la religión oficial del Imperio Romano.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. El Edicto de Milán (313 d.C.) legalizó el cristianismo y proclamó la libertad religiosa, pero no lo convirtió en religión oficial. El cristianismo se convirtió en religión del Estado con el Edicto de Tesalónica de Teodosio I en 380 d.C.',
    },
    {
      id: 'q6',
      question: '¿En qué año y ante quién capituló el último emperador romano de Occidente?',
      type: 'multiple-choice',
      options: [
        '410 d.C. ante los visigodos de Alarico',
        '455 d.C. ante los vándalos de Genserico',
        '476 d.C. ante el hérulo Odoacro',
        '480 d.C. ante los hunos de Atila',
      ],
      correctIndex: 2,
      explanation:
        'El 4 de septiembre de 476 d.C., Odoacro, caudillo de los hérulos, depuso al joven Rómulo Augústulo. Esta fecha marca convencionalmente el fin del Imperio Romano de Occidente e inaugura la Edad Media, aunque el Imperio Romano de Oriente (Bizancio) continuaría hasta 1453.',
    },
  ],

  glossary: [
    {
      term: 'Principado',
      definition:
        'Sistema de gobierno creado por Augusto que mantuvo las instituciones republicanas (Senado, magistraturas) mientras el Princeps concentraba el poder real. Fue una solución política brillante que evitó el rechazo que había sufrido César al mostrarse como monarca.',
      type: 'concept',
    },
    {
      term: 'Pax Romana',
      definition:
        'Período de relativa paz y prosperidad en el Imperio Romano desde Augusto hasta Marco Aurelio (27 a.C.–180 d.C.). Las fronteras se estabilizaron, el comercio mediterraneo floreció y las ciudades provinciales prosperaron bajo una administración unificada.',
      type: 'concept',
    },
    {
      term: 'Senado',
      definition:
        'Institución central de Roma formada inicialmente por patricios y luego por familias de rango senatorial. En la República era el órgano supremo de gobierno. En el Imperio conservó funciones honoríficas y legislativas, pero el poder real pasó al emperador.',
      type: 'concept',
    },
    {
      term: 'Legión',
      definition:
        'Unidad táctica básica del ejército romano compuesta por unos 5.000 soldados de infantería (legionarios) apoyados por caballería y tropas auxiliares. Las legiones eran la base del poder militar romano y también instrumentos de romanización de los territorios conquistados.',
      type: 'concept',
    },
    {
      term: 'Constantinopla',
      definition:
        'Ciudad fundada por Constantino I en 330 d.C. sobre la antigua Bizancio, en el estrecho del Bósforo. Se convirtió en la nueva capital del Imperio y, tras la caída de Roma, fue la capital del Imperio Romano de Oriente (Bizancio) hasta su conquista por los otomanos en 1453.',
      type: 'place',
    },
    {
      term: 'Crisis del Siglo III',
      definition:
        'Período de anarquía militar entre 235 y 284 d.C. caracterizado por la sucesión de más de 50 emperadores (la mayoría asesinados), invasiones bárbaras, epidemias, inflación y desintegración del comercio. El Imperio casi se fragmentó en tres partes antes de la estabilización con Diocleciano.',
      type: 'concept',
    },
    {
      term: 'Odoacro',
      definition:
        'Caudillo germánico de origen hérulo (434–493 d.C.) que el 4 de septiembre de 476 d.C. depuso al último emperador romano de Occidente, Rómulo Augústulo. Esta acción marca convencionalmente el fin del Imperio Romano de Occidente y el inicio de la Edad Media.',
      type: 'person',
    },
  ],

  causeEffect: {
    causes: [
      {
        id: 'c1',
        text: 'Guerras civiles y colapso del sistema republicano',
        details:
          'Un siglo de guerras civiles (Mario y Sila, César y Pompeyo, Octavio y Marco Antonio) mostró que la República no podía gestionar un Estado que controlaba el Mediterráneo entero. Las legiones obedecían a sus generales, no al Senado.',
      },
      {
        id: 'c2',
        text: 'Ambición de los líderes militares (generales victoriosos)',
        details:
          'Las conquistas crearon generales con inmenso poder personal (Pompeyo, César, Octavio). El control de las legiones y las riquezas provinciales convertía a estos hombres en poderes autónomos que el sistema republicano no podía controlar.',
      },
      {
        id: 'c3',
        text: 'Desequilibrios sociales y crisis del pequeño campesinado',
        details:
          'Las guerras y la llegada masiva de esclavos arruinaron a los pequeños agricultores itálicos, que emigraron a las ciudades creando una masa urbana empobrecida susceptible a los populares (demagogos) que prometían tierras y pan.',
      },
      {
        id: 'c4',
        text: 'Incapacidad del Senado para gobernar un Imperio mediterráneo',
        details:
          'El Senado, diseñado para gobernar una ciudad-estado, demostró ser incapaz de administrar eficientemente un territorio que iba de Britania a Mesopotamia. La corrupción de los gobernadores y las guerras provinciales evidenciaban la necesidad de un poder central más fuerte.',
      },
    ],
    event: {
      title: 'Fundación del Imperio Romano',
      date: '27 a.C.',
      description:
        'Octavio recibe el título de Augusto del Senado y funda el Principado, iniciando el período imperial que dominaría el mundo mediterráneo durante cinco siglos.',
    },
    shortTermEffects: [
      {
        id: 'e1',
        text: 'Estabilidad política y fin de las guerras civiles',
        details:
          'El fin de las guerras civiles tras Actium permitió una paz duradera. El Imperio estableció fronteras estables y una administración centralizada que garantizó orden interno durante generaciones.',
      },
      {
        id: 'e2',
        text: 'Expansión y consolidación del Imperio bajo Augusto y sus sucesores',
        details:
          'Augusto completó la conquista de Hispania (29–19 a.C.) y reorganizó las provincias. Sus sucesores añadieron Britania (43 d.C.), Dacia y otras regiones, llevando el Imperio a su máxima extensión bajo Trajano.',
      },
      {
        id: 'e3',
        text: 'Romanización de los territorios conquistados',
        details:
          'La Pax Romana facilitó la difusión masiva de la lengua latina, el derecho romano, la cultura urbana y las obras de ingeniería (calzadas, acueductos, anfiteatros) por todo el Imperio.',
      },
      {
        id: 'e4',
        text: 'Difusión del cristianismo por el Imperio',
        details:
          'La red de comunicaciones y la estabilidad del Imperio facilitaron la expansión del cristianismo desde Palestina hasta Roma y el resto del mundo mediterráneo durante los siglos I y II d.C.',
      },
    ],
    longTermEffects: [
      {
        id: 'le1',
        text: 'Legado del Derecho Romano en los sistemas jurídicos occidentales',
        details:
          'El Derecho Romano, sistematizado bajo el Imperio (especialmente el Corpus Iuris Civilis de Justiniano), es la base de los sistemas legales de toda Europa continental y América Latina, incluyendo el Código Civil español.',
      },
      {
        id: 'le2',
        text: 'El latín como origen de las lenguas romances',
        details:
          'La romanización lingüística fue tan profunda que el latín vulgar evolucionó hacia el español, francés, portugués, italiano, rumano y catalán, lenguas habladas hoy por más de 800 millones de personas.',
      },
      {
        id: 'le3',
        text: 'El Imperio Romano como modelo político de referencia en Europa',
        details:
          'El Sacro Imperio Romano Germánico, el Imperio carolingio, Bizancio y hasta Napoleón tomaron el Imperio Romano como modelo de legitimidad y organización política. La idea de una Europa unida bajo un solo poder sigue referenciando el modelo romano.',
      },
    ],
  },
};
