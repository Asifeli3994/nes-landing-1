import type { Topic } from '../../types';

export const cruzadas: Topic = {
  id: 'cruzadas',
  title: 'Las Cruzadas',
  subtitle: 'La guerra santa entre Occidente cristiano y el Islam',
  block: 'La Edad Media',
  period: 'S. XI – XIII',
  description:
    'Las Cruzadas fueron expediciones militares convocadas por los papas entre los siglos XI y XIII con el objetivo de recuperar los Santos Lugares de Palestina del dominio musulmán. Movilizaron a decenas de miles de combatientes europeos y transformaron profundamente las relaciones entre la Europa cristiana, el mundo islámico y el Imperio Bizantino.',
  tags: ['Cruzadas', 'Edad Media', 'Religión', 'Oriente Medio', 'Europa'],

  timeline: [
    {
      id: 'concilio-clermont',
      date: 'Nov 1095',
      title: 'Concilio de Clermont – Llamada de Urbano II',
      description:
        'El papa Urbano II convoca la Primera Cruzada ante el Concilio de Clermont, llamando a los caballeros cristianos a liberar Jerusalén del dominio turco selyúcida.',
      type: 'political',
      details:
        'El papa Urbano II pronunció un discurso inflamado en el que describía las profanaciones de los Santos Lugares por los turcos selyúcidas y pedía a los combatientes que abandonasen sus guerras fratricidas en Europa para dedicarse a la guerra santa. La multitud respondió con el grito de "Dios lo quiere" (Deus vult). A los cruzados se les prometió la indulgencia plenaria y la remisión de los pecados.',
    },
    {
      id: 'cruzada-pobres',
      date: 'Abr – Oct 1096',
      title: 'Cruzada de los Pobres',
      description:
        'El monje Pedro el Ermitaño lidera una multitud de campesinos hacia Tierra Santa. La expedición es aplastada por los turcos antes de llegar a Jerusalén.',
      type: 'military',
      details:
        'Antes de que los ejércitos de caballeros se pusiesen en marcha, decenas de miles de campesinos y pobres siguieron a Pedro el Ermitaño en una cruzada popular desorganizada. En su camino por el Rin cometieron masacres de judíos en ciudades alemanas. Al llegar a Asia Menor, el ejército turco selyúcida los destruyó casi por completo en Civitot (octubre 1096).',
    },
    {
      id: 'primera-cruzada',
      date: '1096 – 1099',
      title: 'Primera Cruzada',
      description:
        'Los ejércitos de la nobleza europea, liderados por Godofredo de Bouillón, Bohemundo de Tarento y Raimundo de Tolosa, marchan hacia Oriente.',
      type: 'military',
      details:
        'Cuatro grandes ejércitos de caballería, reclutados en Francia, el sur de Italia y el Sacro Imperio, partieron en 1096. Tomaron Nicea (1097), vencieron en Dorileom y resistieron el asedio de Antioquía (1097–1098). La marcha a través de Anatolia fue devastadora por el calor, la sed y las enfermedades, pero la determinación religiosa mantuvo unida a la expedición hasta las puertas de Jerusalén.',
    },
    {
      id: 'conquista-jerusalen',
      date: '15 Jul 1099',
      title: 'Conquista de Jerusalén',
      description:
        'Los cruzados toman Jerusalén tras un asedio de cinco semanas y perpetran una gran matanza de sus habitantes musulmanes y judíos.',
      type: 'military',
      details:
        'El 15 de julio de 1099, los cruzados entraron en Jerusalén tras escalar las murallas. Las crónicas, tanto cristianas como musulmanas, describieron una terrible masacre de la población civil. Godofredo de Bouillón fue elegido gobernante de la ciudad con el título de "Defensor del Santo Sepulcro", rehusando llamarse rey en la ciudad donde Cristo había muerto.',
    },
    {
      id: 'segunda-cruzada',
      date: '1147 – 1149',
      title: 'Segunda Cruzada',
      description:
        'Convocada por el papa Eugenio III tras la caída de Edesa (1144), la Segunda Cruzada fracasa en su intento de conquistar Damasco.',
      type: 'military',
      details:
        'Predicada por Bernardo de Claraval, la Segunda Cruzada fue liderada por el rey Luis VII de Francia y el emperador Conrado III de Alemania. El fracasado asedio de Damasco (julio 1148) fue un desastre estratégico: los cruzados perdieron la oportunidad de tomar una ciudad potencialmente aliada y se retiraron sin éxito. El fracaso dañó el prestigio de los estados cruzados.',
    },
    {
      id: 'saladino-reconquista-jerusalen',
      date: '2 Oct 1187',
      title: 'Saladino reconquista Jerusalén',
      description:
        'El sultán Saladino derrota a los cruzados en Hattin (julio) y reconquista Jerusalén el 2 de octubre de 1187, conmocionando a la Cristiandad.',
      type: 'military',
      details:
        'Saladino (Salah al-Din Yusuf ibn Ayyub) unificó Egipto y Siria y lanzó una ofensiva decisiva. En la batalla de Hattin (4 julio 1187) destruyó al ejército del Reino de Jerusalén, capturando al rey Guido de Lusignan y la Vera Cruz. La toma de Jerusalén fue relativamente misericordiosa: Saladino permitió la vida y la salida de los habitantes a cambio de rescate, en contraste con la masacre de 1099.',
    },
    {
      id: 'tercera-cruzada',
      date: '1189 – 1192',
      title: 'Tercera Cruzada: Ricardo I vs Saladino',
      description:
        'Ricardo Corazón de León, Felipe II de Francia y Federico Barbarroja lideran la Tercera Cruzada. Recuperan San Juan de Acre pero no Jerusalén.',
      type: 'military',
      details:
        'La muerte de Barbarroja ahogado en un río y la temprana vuelta a Francia de Felipe II dejaron a Ricardo I como líder principal. Ganó las batallas de Arsuf y Jaffa, y se acercó a Jerusalén dos veces sin atacar. El Tratado de Jaffa (1192) permitió a los peregrinos desarmados visitar los Santos Lugares, pero Jerusalén quedó en manos musulmanas. Ricardo y Saladino se convirtieron en rivales legendarios que se admiraban mutuamente.',
    },
    {
      id: 'cuarta-cruzada-constantinopla',
      date: '1202 – 1204',
      title: 'Cuarta Cruzada: Saqueo de Constantinopla',
      description:
        'Los cruzados desvían su ruta hacia Constantinopla, la capital cristiana más rica del mundo, y la saquean durante tres días.',
      type: 'military',
      details:
        'La Cuarta Cruzada fue desviada por intereses venecianos. En abril de 1204, los cruzados saquearon Constantinopla, capital del Imperio Bizantino cristiano. El botín fue inmenso: estatuas, reliquias, libros y tesoros fueron robados. Se instauró el efímero Imperio Latino de Constantinopla (1204–1261). El saqueo causó un odio duradero entre cristianos occidentales y orientales que dificultó la cooperación ante el avance otomano.',
    },
    {
      id: 'quinta-sexta-cruzadas',
      date: '1213 – 1229',
      title: 'Quinta y Sexta Cruzadas',
      description:
        'La Quinta Cruzada fracasa en Egipto. La Sexta, liderada por Federico II, recupera Jerusalén diplomáticamente mediante un tratado con el sultán.',
      type: 'political',
      details:
        'La Quinta Cruzada (1217–1221) atacó Egipto pero fracasó al intentar avanzar desde Damieta. La Sexta (1228–1229) fue única: el excomunulgado Federico II de Alemania negoció con el sultán Al-Kamil el Tratado de Jaffa (1229), que devolvía Jerusalén, Belén y Nazaret a los cristianos durante diez años. Los cruzados más fanáticos rechazaron el acuerdo por haberse alcanzado con "infieles".',
    },
    {
      id: 'caida-acre',
      date: '18 May 1291',
      title: 'Caída de Acre: Fin de las Cruzadas',
      description:
        'El sultanato mameluco conquista Acre, último gran bastión cruzado en Tierra Santa, poniendo fin a dos siglos de presencia cristiana en Palestina.',
      type: 'military',
      details:
        'El 18 de mayo de 1291, las fuerzas del sultán Al-Ashraf Jalil tomaron Acre (San Juan de Acre) tras un asedio de 43 días. La caída de la ciudad fue brutal: la mayoría de los defensores murieron o fueron esclavizados. Los supervivientes huyeron por mar a Chipre. Los últimos reductos cayeron semanas después. Fin de los Estados Cruzados en Tierra Santa.',
    },
  ],

  flashcards: [
    {
      id: 'fc-urbano-ii',
      front: 'Papa Urbano II',
      back: 'Papa (1088–1099) que convocó la Primera Cruzada en el Concilio de Clermont (1095). Su discurso prometió la remisión de los pecados a quienes combatiesen para liberar Jerusalén. La multitud respondió "Deus vult" (Dios lo quiere). No vivió para ver la toma de Jerusalén, muriendo dos semanas después.',
      category: 'person',
    },
    {
      id: 'fc-saladino',
      front: 'Saladino (Salah al-Din)',
      back: 'Sultán kurdo de Egipto y Siria (1138–1193). Unificó el mundo islámico y reconquistó Jerusalén en 1187 tras la victoria de Hattin. En contraste con la masacre cristiana de 1099, permitió la salida pacífica de los habitantes de Jerusalén. Su caballerosidad fue reconocida incluso por sus enemigos cruzados.',
      category: 'person',
    },
    {
      id: 'fc-ricardo-corazon-de-leon',
      front: 'Ricardo Corazón de León',
      back: 'Rey de Inglaterra (1157–1199) y líder de la Tercera Cruzada (1189–1192). Sus victorias militares en Arsuf y Jaffa le dieron reputación de gran guerrero. Negoció con Saladino el Tratado de Jaffa (1192) que permitía a los peregrinos visitar Jerusalén. Pasó solo 6 meses en Inglaterra durante su reinado.',
      category: 'person',
    },
    {
      id: 'fc-estados-cruzados',
      front: '¿Qué fueron los Estados Cruzados?',
      back: 'Los cuatro Estados Cruzados fundados tras la Primera Cruzada: el Reino de Jerusalén (1099–1291), el Condado de Trípoli (1102–1289), el Principado de Antioquía (1098–1268) y el Condado de Edesa (1098–1150). Fueron los primeros enclaves del feudalismo occidental en Oriente Próximo.',
      category: 'concept',
    },
    {
      id: 'fc-ordenes-militares',
      front: 'Órdenes Militares Cruzadas',
      back: 'Organizaciones de monjes-guerreros que combinaban los votos religiosos con la lucha armada. Las principales fueron: los Caballeros del Temple (Templarios, 1119), los Caballeros del Hospital (Hospitalarios, 1080) y los Caballeros Teutónicos (1190). Defendían las rutas de peregrinación y los Santos Lugares.',
      category: 'concept',
    },
    {
      id: 'fc-indulgencia',
      front: '¿Qué era la indulgencia plenaria en el contexto de las Cruzadas?',
      back: 'La indulgencia plenaria era la remisión total de los pecados concedida por el papa a quienes participaban en una Cruzada. Fue el principal incentivo religioso para los cruzados: morir en la guerra santa garantizaba la salvación eterna. Esta práctica sería uno de los puntos atacados por Lutero en la Reforma Protestante del siglo XVI.',
      category: 'concept',
    },
    {
      id: 'fc-hattin',
      front: 'Batalla de Hattin (1187)',
      back: 'Victoria decisiva de Saladino sobre el ejército cruzado del Reino de Jerusalén (4 de julio de 1187). El ejército cruzado, acosado por el calor y la sed, fue destruido. Cayeron prisioneros el rey Guido de Lusignan y la reliquia de la Vera Cruz. La derrota abrió Palestina a la reconquista musulmana, culminada con la toma de Jerusalén en octubre.',
      category: 'event',
    },
    {
      id: 'fc-cuarta-cruzada',
      front: '¿Por qué la Cuarta Cruzada saqueó Constantinopla?',
      back: 'La Cuarta Cruzada (1202–1204) fue desviada por los venecianos, que eran acreedores del transporte marítimo. Primero atacaron Zara (ciudad cristiana rival de Venecia) y luego aprovecharon disputas sucesorias bizantinas para atacar Constantinopla. El saqueo de 1204 causó un abismo entre el cristianismo latino y el ortodoxo griego.',
      category: 'event',
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: '¿En qué Concilio convocó el papa Urbano II la Primera Cruzada en 1095?',
      type: 'multiple-choice',
      options: ['Concilio de Nicea', 'Concilio de Clermont', 'Concilio de Trento', 'Concilio de Lyon'],
      correctIndex: 1,
      explanation:
        'El papa Urbano II convocó la Primera Cruzada en el Concilio de Clermont (Francia) en noviembre de 1095. Su discurso prometía la indulgencia plenaria a quienes combatiesen para liberar Jerusalén del dominio selyúcida. La multitud respondió con el grito "Deus vult" (Dios lo quiere).',
    },
    {
      id: 'q2',
      question: 'Los cruzados conquistaron Jerusalén en 1099 sin causar daños a la población civil.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. La conquista de Jerusalén el 15 de julio de 1099 fue acompañada de una brutal masacre de la población musulmana y judía de la ciudad. Las crónicas tanto cristianas como musulmanas documentan la violencia extrema. Este contraste con la toma pacífica de Saladino en 1187 fue muy comentado en las fuentes árabes.',
    },
    {
      id: 'q3',
      question: '¿Qué batalla de 1187 permitió a Saladino reconquistar Jerusalén?',
      type: 'multiple-choice',
      options: ['Batalla de Arsuf', 'Batalla de Antioquía', 'Batalla de Hattin', 'Batalla de Damieta'],
      correctIndex: 2,
      explanation:
        'La batalla de Hattin (4 de julio de 1187) fue la victoria decisiva de Saladino: destruyó al ejército del Reino de Jerusalén, capturó al rey Guido de Lusignan y se apoderó de la reliquia de la Vera Cruz. La derrota abrió Palestina a la reconquista, y Jerusalén cayó el 2 de octubre de 1187.',
    },
    {
      id: 'q4',
      question: '¿Cuál fue el resultado de la Tercera Cruzada (1189–1192)?',
      type: 'multiple-choice',
      options: [
        'Los cruzados reconquistaron Jerusalén',
        'Ricardo I negoció un tratado que permitía la visita de peregrinos pero no recuperó Jerusalén',
        'Los cruzados conquistaron Egipto',
        'La Cruzada fracasó completamente sin ningún acuerdo',
      ],
      correctIndex: 1,
      explanation:
        'La Tercera Cruzada terminó con el Tratado de Jaffa (1192): Ricardo Corazón de León y Saladino acordaron que los peregrinos desarmados podían visitar los Santos Lugares, pero Jerusalén permaneció bajo dominio musulmán. Ricardo se acercó dos veces a la ciudad pero no intentó asaltarla.',
    },
    {
      id: 'q5',
      question: 'La Cuarta Cruzada logró llegar a Tierra Santa y combatir a los musulmanes.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. La Cuarta Cruzada (1202–1204) nunca llegó a Tierra Santa. Fue desviada por los venecianos hacia Zara y luego hacia Constantinopla, capital del Imperio Bizantino cristiano, que fue saqueada en 1204. El papa Inocencio III condenó este desvío.',
    },
    {
      id: 'q6',
      question: '¿En qué año cayó Acre, el último gran bastión cruzado en Tierra Santa?',
      type: 'multiple-choice',
      options: ['1244', '1261', '1291', '1302'],
      correctIndex: 2,
      explanation:
        'Acre cayó el 18 de mayo de 1291 ante las fuerzas del sultán mameluco Al-Ashraf Jalil. Esta fecha marca el fin definitivo de los Estados Cruzados en Tierra Santa y el fracaso de dos siglos de esfuerzo militar europeo por mantener una presencia permanente en Palestina.',
    },
  ],

  glossary: [
    {
      term: 'Cruzada',
      definition:
        'Expedición militar convocada por el papa con carácter de guerra santa, con el objetivo principal de recuperar los Santos Lugares de Tierra Santa del dominio musulmán. Los participantes recibían una cruz (crux) como símbolo y la promesa de indulgencia plenaria.',
      type: 'concept',
    },
    {
      term: 'Indulgencia plenaria',
      definition:
        'Remisión total de los pecados concedida por el papa. En el contexto de las Cruzadas, fue el principal incentivo espiritual: participar en la guerra santa equivalía a borrar todos los pecados cometidos y garantizaba la salvación eterna. Su abuso fue uno de los detonantes de la Reforma Protestante.',
      type: 'concept',
    },
    {
      term: 'Saladino',
      definition:
        'Salah al-Din Yusuf ibn Ayyub (1138–1193). Sultán kurdo fundador de la dinastía Ayubí. Unificó Egipto y Siria, derrotó a los cruzados en Hattin (1187) y reconquistó Jerusalén. Su comportamiento caballeroso con los vencidos le granjeó respeto incluso entre sus enemigos occidentales.',
      type: 'person',
    },
    {
      term: 'Estados Cruzados',
      definition:
        'Los cuatro estados feudales fundados por los cruzados en Oriente Próximo tras la Primera Cruzada: el Reino de Jerusalén, el Condado de Edesa, el Principado de Antioquía y el Condado de Trípoli. Fueron entidades frágiles que dependían del apoyo militar de Occidente para sobrevivir.',
      type: 'concept',
    },
    {
      term: 'Órdenes Militares',
      definition:
        'Instituciones monástico-militares creadas durante las Cruzadas que combinaban los votos religiosos con la lucha armada. Las principales fueron los Templarios, los Hospitalarios y los Teutónicos. Defendían las rutas de peregrinación, gestionaban hospitales y acumularon grandes riquezas y poder.',
      type: 'movement',
    },
    {
      term: 'Reconquista de Jerusalén (1187)',
      definition:
        'Toma de Jerusalén por Saladino el 2 de octubre de 1187, 88 años después de la conquista cruzada. A diferencia de la masacre de 1099, Saladino permitió la vida de los habitantes a cambio de un rescate y autorizó su salida pacífica. La noticia conmocionó a Europa y desencadenó la Tercera Cruzada.',
      type: 'event',
    },
    {
      term: 'Mamelucos',
      definition:
        'Soldados esclavos de origen turco o caucásico que formaban la élite militar del Egipto musulmán. En 1250 tomaron el poder político en Egipto, fundando el Sultanato Mameluco. Detuvieron el avance mongol en Ain Yalut (1260) y destruyeron los últimos estados cruzados, culminando con la toma de Acre en 1291.',
      type: 'concept',
    },
  ],

  causeEffect: {
    causes: [
      {
        id: 'c1',
        text: 'Expansión turca selyúcida y amenaza al Imperio Bizantino',
        details:
          'Los turcos selyúcidas derrotaron al Imperio Bizantino en Manzikert (1071) y conquistaron gran parte de Anatolia. El emperador Alejo I Comneno pidió ayuda al papa ante la amenaza a Constantinopla, lo que motivó la convocatoria de la Primera Cruzada.',
      },
      {
        id: 'c2',
        text: 'Dificultades de los peregrinos cristianos en Tierra Santa',
        details:
          'Los turcos selyúcidas, menos tolerantes que los fatimíes, dificultaron la peregrinación cristiana a Jerusalén, cobrando impuestos abusivos y maltratando a los peregrinos. Los informes de estas persecuciones alimentaron la indignación en Occidente.',
      },
      {
        id: 'c3',
        text: 'Aspiraciones de poder del Papado y reforma gregoriana',
        details:
          'El papado reformado del siglo XI buscaba afirmar su liderazgo espiritual y político sobre la Cristiandad occidental. Convocar una guerra santa permitía al papa ejercer un papel de liderazgo que superaba al de reyes y emperadores.',
      },
      {
        id: 'c4',
        text: 'Violencia feudal interna y necesidad de canalizarla al exterior',
        details:
          'La nobleza europea practicaba una violencia endémica entre señores feudales. La Cruzada ofrecía una vía para desviar esta energía guerrera hacia un objetivo común legitimado por la religión, al tiempo que prometía tierras y riquezas en Oriente.',
      },
    ],
    event: {
      title: 'Las Cruzadas',
      date: '1096 – 1291',
      description:
        'Series de expediciones militares convocadas por el papado que intentaron, con éxito inicial y fracaso final, establecer y mantener una presencia cristiana en Tierra Santa durante casi dos siglos.',
    },
    shortTermEffects: [
      {
        id: 'e1',
        text: 'Fundación del Reino de Jerusalén y los Estados Cruzados',
        details:
          'La Primera Cruzada fundó cuatro estados feudales en Oriente Próximo que existieron durante un siglo o más, siendo los primeros enclaves del feudalismo occidental fuera de Europa.',
      },
      {
        id: 'e2',
        text: 'Masacres de judíos en Europa (pogromos del Rin, 1096)',
        details:
          'En su camino hacia Tierra Santa, los cruzados cometieron masacres de comunidades judías en el valle del Rin (Maguncia, Worms, Colonia), iniciando una tradición de persecución religiosa vinculada al fervor cruzado.',
      },
      {
        id: 'e3',
        text: 'Saqueo de Constantinopla (1204) y debilitamiento de Bizancio',
        details:
          'La Cuarta Cruzada saqueó Constantinopla en 1204, fracturando el Imperio Bizantino y debilitándolo irreversiblemente frente a la posterior amenaza otomana que llevaría a su caída en 1453.',
      },
      {
        id: 'e4',
        text: 'Auge de las Órdenes Militares y las repúblicas mercantiles italianas',
        details:
          'Las Cruzadas enriquecieron a Venecia, Génova y Pisa, que controlaban el transporte y el comercio con Oriente, y potenciaron a las Órdenes Militares como actores políticos y económicos de primer orden en Europa.',
      },
    ],
    longTermEffects: [
      {
        id: 'le1',
        text: 'Transferencia del conocimiento islámico a Europa occidental',
        details:
          'El contacto con el mundo islámico en Tierra Santa y la Península Ibérica facilitó la transmisión de la filosofía aristotélica, las matemáticas, la medicina y la astronomía árabes a Europa, contribuyendo al renacimiento intelectual del siglo XII.',
      },
      {
        id: 'le2',
        text: 'Refuerzo de la identidad religiosa y la intolerancia en Europa',
        details:
          'Las Cruzadas fortalecieron la identidad cristiana occidental definida en oposición al Islam, sembrando actitudes de intolerancia que se proyectaron sobre judíos y herejes en Europa y dificultaron el diálogo interreligioso durante siglos.',
      },
      {
        id: 'le3',
        text: 'Debilitamiento de la autoridad papal y el ideal cruzado',
        details:
          'Los fracasos sucesivos, especialmente el desvío de la Cuarta Cruzada contra Constantinopla, erosionaron la credibilidad moral del papado como convocante de guerras santas y contribuyeron a largo plazo a su pérdida de autoridad política en Europa.',
      },
    ],
  },
};
