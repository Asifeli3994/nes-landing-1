import type { Topic } from '../../types';

export const democraciaAteniense: Topic = {
  id: 'democracia-ateniense',
  title: 'La Democracia Ateniense',
  subtitle: 'El nacimiento del gobierno del pueblo',
  block: 'El Mundo Antiguo',
  period: 'S. VI – IV a.C.',
  description:
    'Atenas desarrolló entre los siglos VI y IV a.C. el primer sistema de gobierno democrático de la historia occidental. Las reformas de Clístenes (508 a.C.) y el esplendor de la época de Pericles sentaron las bases de la participación ciudadana, la asamblea popular y la ley como fundamento del poder político.',
  tags: ['Grecia', 'Democracia', 'Política', 'Atenas', 'Antigüedad'],

  timeline: [
    {
      id: 'reformas-solon',
      date: '594 a.C.',
      title: 'Reformas de Solón',
      description:
        'El legislador Solón introduce reformas que alivian las deudas del campesinado y reorganizan la sociedad ateniense en clases censitarias.',
      type: 'political',
      details:
        'Solón abolió la esclavitud por deudas (seisachtheia), reorganizó la ciudadanía en cuatro clases según la riqueza y abrió el arcontado a las dos clases superiores. Creó la Boulé (Consejo de los Cuatrocientos) y fortaleció el tribunal popular (Heliea). Sus reformas no establecieron la democracia plena, pero sentaron sus fundamentos al romper el monopolio aristocrático del poder.',
    },
    {
      id: 'tirania-pisistrato',
      date: '546 a.C.',
      title: 'Tiranía de Pisístrato',
      description:
        'Pisístrato toma el poder por tercera vez y se consolida como tirano de Atenas, impulsando obras públicas y el comercio.',
      type: 'political',
      details:
        'Aunque fue un tirano, Pisístrato respetó en gran medida las leyes de Solón y fomentó el desarrollo económico de Atenas. Financió festivales religiosos (Panateneas, Dionisias), impulsó la cerámica ática y distribuyó tierras a los campesinos pobres. Su gobierno paradójicamente preparó el terreno económico y cultural para el posterior auge democrático.',
    },
    {
      id: 'reformas-clistenes',
      date: '508 a.C.',
      title: 'Reformas de Clístenes',
      description:
        'Clístenes reorganiza Atenas en diez tribus territoriales y crea la Boulé de los Quinientos, fundando la democracia ateniense.',
      type: 'political',
      details:
        'Clístenes dividió el Ática en 139 demos (municipios) y reorganizó la ciudadanía en 10 tribus artificiales (phylai), mezclando deliberadamente a ciudadanos de distintas regiones para debilitar los lazos de clientela aristocrática. Creó la nueva Boulé (Consejo de los Quinientos), con 50 representantes de cada tribu elegidos por sorteo, que preparaba los asuntos de la Ecclesia. Introdujo también el ostracismo.',
    },
    {
      id: 'guerras-medicas',
      date: '490 – 479 a.C.',
      title: 'Guerras Médicas',
      description:
        'Atenas lidera la resistencia griega frente a las invasiones persas. Las victorias de Maratón y Salamina elevan el prestigio ateniense.',
      type: 'military',
      details:
        'La victoria de Maratón (490 a.C.) frente al ejército de Darío I y el triunfo naval de Salamina (480 a.C.) bajo Temístocles contra Jerjes convirtieron a Atenas en la potencia hegemónica del Egeo. El protagonismo de los hoplitas (ciudadanos) y los remeros (thetes) de la flota reforzó las demandas democráticas: quien defiende la polis merece participar en su gobierno.',
    },
    {
      id: 'reformas-efialtes',
      date: '462 a.C.',
      title: 'Reformas de Efialtes',
      description:
        'Efialtes despoja al Areópago de sus poderes políticos y transfiere sus funciones a la Ecclesia, la Boulé y los tribunales populares.',
      type: 'political',
      details:
        'Efialtes eliminó los poderes de supervisión del Areópago, el antiguo consejo aristocrático, y los distribuyó entre los organismos democráticos. Aunque fue asesinado poco después, sus reformas fueron continuadas por Pericles y marcaron la transición hacia la democracia radical ateniense.',
    },
    {
      id: 'edad-oro-pericles',
      date: '461 – 429 a.C.',
      title: 'La Edad de Oro de Pericles',
      description:
        'Bajo el liderazgo de Pericles, Atenas alcanza su máximo esplendor político, cultural y artístico. Se construye el Partenón.',
      type: 'cultural',
      details:
        'Pericles consolidó la democracia radical introduciendo el misthós (pago por el ejercicio de cargos públicos), lo que permitió a los ciudadanos más pobres participar activamente. Supervisó la construcción del Partenón y los Propileos en la Acrópolis. Atenas se convirtió en el centro cultural del mundo griego, con figuras como Sófocles, Eurípides, Fidias y Sócrates.',
    },
    {
      id: 'guerra-peloponeso',
      date: '431 – 404 a.C.',
      title: 'Guerra del Peloponeso',
      description:
        'Atenas y Esparta se enfrentan en una devastadora guerra que termina con la derrota ateniense y el colapso de su imperio.',
      type: 'military',
      details:
        'El conflicto entre la Atenas democrática y la Esparta oligárquica dividió el mundo griego. La peste de 430 a.C. mató a Pericles y un tercio de la población ateniense. La catastrófica expedición a Sicilia (415–413 a.C.) destruyó la flota ateniense. En 404 a.C., Atenas se rindió y aceptó las condiciones espartanas, incluida la instalación del gobierno oligárquico de los Treinta Tiranos.',
    },
    {
      id: 'treinta-tiranos',
      date: '404 – 403 a.C.',
      title: 'Los Treinta Tiranos',
      description:
        'Oligarquía promovida por Esparta que gobierna Atenas mediante el terror, ejecutando a más de 1.500 ciudadanos.',
      type: 'political',
      details:
        'Los Treinta Tiranos, liderados por Critias, instauraron un régimen de terror que eliminó a opositores políticos y confiscó propiedades. Su brutal gobierno duró apenas ocho meses: el demócrata Trasíbulo reunió un ejército de exiliados y derrocó a la oligarquía, restaurando la democracia en 403 a.C.',
    },
    {
      id: 'juicio-socrates',
      date: '399 a.C.',
      title: 'Juicio y Muerte de Sócrates',
      description:
        'Sócrates es juzgado y condenado a muerte por impiedad y corrupción de la juventud, revelando las tensiones de la democracia ateniense.',
      type: 'cultural',
      details:
        'El juicio de Sócrates ante un tribunal de 501 ciudadanos es uno de los episodios más debatidos de la historia del pensamiento. Acusado de no reconocer los dioses de la ciudad y de corromper a la juventud, fue condenado por 280 votos frente a 221. Rechazó huir y bebió la cicuta. Su discípulo Platón interpretó el juicio como la condena de la democracia irracional a la sabiduría.',
    },
    {
      id: 'hegemonia-macedonia',
      date: '338 a.C.',
      title: 'Batalla de Queronea',
      description:
        'Filipo II de Macedonia derrota a Atenas y Tebas, poniendo fin a la independencia política de las ciudades-estado griegas.',
      type: 'military',
      details:
        'La batalla de Queronea marcó el fin de la era clásica de las poleis independientes. Filipo II unificó Grecia bajo su hegemonía y su hijo Alejandro Magno llevaría la cultura griega hasta los confines de Asia. La democracia ateniense continuó formalmente, pero bajo la tutela macedónica perdió su carácter soberano.',
    },
  ],

  flashcards: [
    {
      id: 'fc-ecclesia',
      front: '¿Qué era la Ecclesia?',
      back: 'La Ecclesia o Asamblea era el órgano soberano de la democracia ateniense. Podía participar todo ciudadano varón libre mayor de 18 años. Se reunía unas 40 veces al año en la colina de la Pnyx para votar leyes, declarar guerras y elegir estrategos.',
      category: 'concept',
    },
    {
      id: 'fc-clistenes',
      front: 'Clístenes',
      back: 'Político ateniense (570–507 a.C.) considerado el padre de la democracia. En 508 a.C. reorganizó Atenas en 10 tribus territoriales, creó la Boulé de los Quinientos y el ostracismo. Rompió el poder de las familias aristocráticas al mezclar ciudadanos de distintas regiones.',
      category: 'person',
    },
    {
      id: 'fc-pericles',
      front: 'Pericles',
      back: 'Estadista ateniense (495–429 a.C.) que lideró Atenas durante su época dorada. Introdujo el pago por cargos públicos (misthós), supervisó la construcción del Partenón y consolidó el Imperio Ático. Murió durante la gran peste del 430 a.C.',
      category: 'person',
    },
    {
      id: 'fc-ostracismo',
      front: '¿En qué consistía el ostracismo?',
      back: 'El ostracismo era un mecanismo de la democracia ateniense para exiliar por 10 años, sin juicio ni deshonor, a ciudadanos considerados peligrosos para la polis. Cada año, si 6.000 ciudadanos votaban, el más nombrado en ostraka (trozos de cerámica) era desterrado.',
      category: 'concept',
    },
    {
      id: 'fc-boule',
      front: '¿Qué era la Boulé?',
      back: 'La Boulé o Consejo de los Quinientos era el órgano ejecutivo de la democracia ateniense. Compuesto por 500 ciudadanos elegidos por sorteo (50 por cada una de las 10 tribus), preparaba los decretos que luego votaba la Ecclesia y supervisaba la administración cotidiana.',
      category: 'concept',
    },
    {
      id: 'fc-agora',
      front: '¿Qué era el Ágora en Atenas?',
      back: 'El Ágora era la plaza pública central de Atenas, corazón de la vida cívica, comercial y filosófica. Era el espacio donde se debatía, se comerciaba y se administraba justicia. Sócrates impartía allí sus enseñanzas y en sus pórticos (stoas) se desarrolló la escuela estoica.',
      category: 'place',
    },
    {
      id: 'fc-misthoforia',
      front: 'Misthoforía (μισθοφορία)',
      back: 'El pago (misthós) introducido por Pericles a los ciudadanos que ejercían cargos públicos (jueces, consejeros, magistrados). Fue fundamental para la democracia radical: permitió a los ciudadanos más pobres participar en la vida política sin perder su sustento diario.',
      category: 'concept',
    },
    {
      id: 'fc-estrategia',
      front: '¿Quiénes eran los estrategos?',
      back: 'Los estrategos eran los diez generales elegidos anualmente por votación directa en la Ecclesia (no por sorteo). Era el cargo más importante de Atenas, ya que combinaba el mando militar y civil. Pericles fue reelegido estratego durante más de 30 años consecutivos.',
      category: 'concept',
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: '¿A quién se considera el fundador de la democracia ateniense por sus reformas del año 508 a.C.?',
      type: 'multiple-choice',
      options: ['Solón', 'Pericles', 'Clístenes', 'Efialtes'],
      correctIndex: 2,
      explanation:
        'Clístenes reorganizó Atenas en 10 tribus territoriales y creó la Boulé de los Quinientos en 508 a.C., rompiendo el poder aristocrático. Es considerado el padre de la democracia ateniense, aunque Solón lo preparó y Pericles lo perfeccionó.',
    },
    {
      id: 'q2',
      question: 'En la democracia ateniense, todos los habitantes de Atenas podían participar en la Ecclesia.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. Solo podían participar los ciudadanos varones libres mayores de 18 años nacidos de padre ateniense. Quedaban excluidas las mujeres, los esclavos (que eran una parte importante de la población) y los metecos (extranjeros residentes).',
    },
    {
      id: 'q3',
      question: '¿En qué consistía el ostracismo en la democracia ateniense?',
      type: 'multiple-choice',
      options: [
        'La ejecución pública de traidores',
        'El exilio temporal de diez años sin juicio ni deshonor',
        'La confiscación de bienes a ciudadanos ricos',
        'La exclusión permanente de la ciudadanía',
      ],
      correctIndex: 1,
      explanation:
        'El ostracismo permitía exiliar durante 10 años a un ciudadano considerado peligroso para la democracia. Se votaba anualmente con trozos de cerámica (ostraka) y requería un mínimo de 6.000 votos para ser válido. No era un castigo deshonroso ni conllevaba pérdida de bienes.',
    },
    {
      id: 'q4',
      question: '¿Qué reforma introdujo Pericles para favorecer la participación de los ciudadanos más pobres?',
      type: 'multiple-choice',
      options: [
        'La abolición de la esclavitud',
        'El reparto de tierras entre el campesinado',
        'El pago (misthós) por el ejercicio de cargos públicos',
        'La apertura del ostracismo a todas las clases',
      ],
      correctIndex: 2,
      explanation:
        'Pericles introdujo el misthós, una remuneración para quienes ejercían cargos públicos (jueces, consejeros, etc.). Esto fue fundamental para la democracia radical, ya que permitió a los ciudadanos más humildes participar en la vida política sin perder sus ingresos diarios.',
    },
    {
      id: 'q5',
      question: '¿En qué año terminó la Guerra del Peloponeso con la derrota de Atenas?',
      type: 'multiple-choice',
      options: ['431 a.C.', '421 a.C.', '413 a.C.', '404 a.C.'],
      correctIndex: 3,
      explanation:
        'La Guerra del Peloponeso terminó en 404 a.C. con la rendición de Atenas ante Esparta. Tras 27 años de conflicto, Atenas fue obligada a demoler sus Muros Largos, disolver su flota y aceptar la instalación del gobierno oligárquico de los Treinta Tiranos.',
    },
    {
      id: 'q6',
      question: 'La batalla de Queronea (338 a.C.) marcó el fin de la independencia política de las ciudades-estado griegas.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 0,
      explanation:
        'VERDADERO. La victoria de Filipo II de Macedonia en Queronea sobre la coalición de Atenas y Tebas puso fin a la era de las poleis independientes. Las ciudades-estado perdieron su soberanía real y quedaron bajo la hegemonía macedónica, aunque mantuvieron sus instituciones formalmente.',
    },
  ],

  glossary: [
    {
      term: 'Democracia',
      definition:
        'Del griego demos (pueblo) y kratos (poder). Sistema de gobierno en el que el poder reside en el conjunto de los ciudadanos, que lo ejercen directamente o a través de representantes. Atenas fue la primera democracia directa de la historia occidental.',
      type: 'concept',
    },
    {
      term: 'Polis',
      definition:
        'Ciudad-estado griega que constituía la unidad política básica del mundo antiguo. Comprendía una ciudad con sus territorios circundantes y era autónoma en su gobierno, leyes y culto religioso. Atenas era la polis más grande e influyente de Grecia.',
      type: 'concept',
    },
    {
      term: 'Ecclesia',
      definition:
        'Asamblea popular soberana de la democracia ateniense. Se reunía unas 40 veces al año en la Pnyx y podía participar todo ciudadano varón libre mayor de 18 años. Votaba leyes, declaraba guerras, elegía estrategos y controlaba al gobierno.',
      type: 'concept',
    },
    {
      term: 'Clístenes',
      definition:
        'Político ateniense (570–507 a.C.), padre de la democracia. Sus reformas de 508 a.C. reorganizaron Atenas en 10 tribus territoriales, crearon la Boulé de los Quinientos e introdujeron el ostracismo, rompiendo el poder de las aristocracias familiares.',
      type: 'person',
    },
    {
      term: 'Ostracismo',
      definition:
        'Mecanismo democrático ateniense por el que la Ecclesia podía exiliar durante 10 años a un ciudadano considerado peligroso para la democracia. Los ciudadanos escribían el nombre en trozos de cerámica (ostraka) y si se reunían 6.000 votos, el más nombrado era desterrado.',
      type: 'concept',
    },
    {
      term: 'Areópago',
      definition:
        'Antiguo consejo aristocrático ateniense que se reunía en la colina del mismo nombre. Antes de las reformas de Efialtes (462 a.C.) tenía amplios poderes políticos y de supervisión. Efialtes lo despojó de estas funciones, conservando solo sus atribuciones judiciales en casos de homicidio.',
      type: 'place',
    },
    {
      term: 'Meteco',
      definition:
        'Extranjero residente en Atenas que no gozaba de la ciudadanía plena. Pagaba impuestos, podía ser reclutado para el ejército y tenía acceso al comercio, pero no podía participar en la Ecclesia ni poseer tierras en el Ática. Muchos artesanos y comerciantes eran metecos.',
      type: 'concept',
    },
  ],

  causeEffect: {
    causes: [
      {
        id: 'c1',
        text: 'Crisis del modelo aristocrático y conflictos entre élites',
        details:
          'Las luchas entre familias aristocráticas (Alcmeónidas, Filaidas) por el control de Atenas crearon inestabilidad política y abrieron la posibilidad de reformas que limitasen el poder exclusivo de la nobleza.',
      },
      {
        id: 'c2',
        text: 'Endeudamiento y descontento del campesinado',
        details:
          'Los pequeños agricultores del Ática se endeudaban con los aristócratas y llegaban a perder su libertad. La presión social del campesinado y los artesanos exigió reformas que Solón y luego Clístenes fueron concediendo.',
      },
      {
        id: 'c3',
        text: 'Auge de los hoplitas y la clase media guerrera',
        details:
          'El surgimiento de la falange hoplita (soldados de infantería que se costeaban su propio equipo) creó una clase media guerrera que exigió participación política a cambio de defender militarmente la ciudad.',
      },
      {
        id: 'c4',
        text: 'Influencia de la filosofía y el pensamiento racional',
        details:
          'El pensamiento racional jónico y la tradición de debate público en el ágora crearon una cultura política que valoraba la argumentación, la ley y la justificación del poder, incompatible con la tiranía arbitraria.',
      },
    ],
    event: {
      title: 'Nacimiento de la Democracia Ateniense',
      date: '508 a.C.',
      description:
        'Las reformas de Clístenes establecieron los principios fundamentales del gobierno democrático: participación ciudadana, igualdad ante la ley (isonomia) y poder de la asamblea popular.',
    },
    shortTermEffects: [
      {
        id: 'e1',
        text: 'Creación de la Boulé de los Quinientos y el sistema de tribus',
        details:
          'La nueva estructura administrativa basada en 10 tribus territoriales rompió las lealtades aristocráticas locales y permitió una representación más equitativa en el Consejo.',
      },
      {
        id: 'e2',
        text: 'Consolidación del poder ciudadano frente a las tiranías',
        details:
          'Las reformas democráticas hicieron muy difícil el regreso de una tiranía personal: el ostracismo fue diseñado precisamente para prevenir la concentración del poder en una sola persona.',
      },
      {
        id: 'e3',
        text: 'Mayor participación popular en la defensa de la polis',
        details:
          'La vinculación entre ciudadanía y defensa militar se reforzó: los remeros de la flota (thetes) que vencieron en Salamina reclamaron y obtuvieron mayor participación política.',
      },
      {
        id: 'e4',
        text: 'Florecimiento cultural y filosófico del siglo V a.C.',
        details:
          'La democracia creó el ambiente de libertad intelectual que permitió el apogeo de la tragedia, la filosofía socrática, la historiografía de Tucídides y el arte del Partenón.',
      },
    ],
    longTermEffects: [
      {
        id: 'le1',
        text: 'Legado del concepto de soberanía popular en Occidente',
        details:
          'La idea griega de que el poder reside en el pueblo y debe ejercerse colectivamente fue recuperada en el Renacimiento y la Ilustración, siendo fundamento de las democracias modernas.',
      },
      {
        id: 'le2',
        text: 'Principio de igualdad ante la ley (isonomia)',
        details:
          'La isonomia ateniense, la igualdad de todos los ciudadanos ante la ley, es el antecedente directo del principio de igualdad jurídica que sustenta los sistemas constitucionales modernos.',
      },
      {
        id: 'le3',
        text: 'Críticas y debates sobre los límites de la democracia',
        details:
          'Las obras de Platón y Aristóteles analizaron críticamente la democracia ateniense, estableciendo los términos del debate político occidental sobre las ventajas e inconvenientes de los distintos sistemas de gobierno durante más de dos milenios.',
      },
    ],
  },
};
