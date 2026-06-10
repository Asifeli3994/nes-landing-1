import type { Topic } from '../../types';

export const reformaProtestante: Topic = {
  id: 'reforma-protestante',
  title: 'La Reforma Protestante',
  subtitle: 'La ruptura de la unidad cristiana de Europa',
  block: 'La Edad Moderna',
  period: '1517 – 1648',
  description:
    'La Reforma Protestante fue el movimiento religioso iniciado por Martín Lutero en 1517 que rompió la unidad de la Iglesia católica en Europa occidental. A partir de las 95 tesis clavadas en Wittenberg, el protestantismo se extendió por el continente en sus diversas variantes (luteranismo, calvinismo, anglicanismo), desencadenando guerras religiosas y una profunda transformación política, cultural y social que culminó con la Paz de Westfalia de 1648.',
  tags: ['Reforma', 'Religión', 'Protestantismo', 'Europa', 'Siglo XVI'],

  timeline: [
    {
      id: 'tesis-lutero',
      date: '31 Oct 1517',
      title: 'Las 95 Tesis de Martín Lutero',
      description:
        'El monje agustino Martín Lutero clava sus 95 tesis en la puerta de la iglesia del castillo de Wittenberg, denunciando la venta de indulgencias y otros abusos de la Iglesia.',
      type: 'cultural',
      details:
        'Lutero redactó sus "Disputatio pro declaratione virtutis indulgentiarum" como una invitación académica al debate teológico. Condenaba la venta de indulgencias promovida por el dominico Johann Tetzel para financiar la basílica de San Pedro. Gracias a la imprenta de Gutenberg, las tesis se tradujeron al alemán y se difundieron por toda Europa en pocas semanas, convirtiendo una disputa local en una crisis continental.',
    },
    {
      id: 'dieta-worms',
      date: 'Abr 1521',
      title: 'Dieta de Worms: Lutero ante el Emperador',
      description:
        'El emperador Carlos V convoca a Lutero ante la Dieta de Worms. Lutero se niega a retractarse de sus escritos y es declarado hereje y proscrito del Imperio. Se refugia en el castillo de Wartburg.',
      type: 'political',
      details:
        'Ante el emperador y los príncipes del Imperio, Lutero pronunció sus célebres palabras: "Aquí estoy, no puedo hacer otra cosa". El Edicto de Worms lo declaró hereje, ordenando la destrucción de sus libros y su captura. El príncipe elector Federico III de Sajonia lo escondió en el castillo de Wartburg, donde Lutero tradujo el Nuevo Testamento al alemán, elemento clave para la unificación de la lengua alemana.',
    },
    {
      id: 'prensa-reforma',
      date: '1517 – 1530',
      title: 'La imprenta como motor de la Reforma',
      description:
        'La imprenta de Gutenberg permite la difusión masiva de textos reformistas. Entre 1517 y 1520 se imprimen más de 300.000 copias de los escritos de Lutero, transformando el debate religioso en un fenómeno de masas.',
      type: 'cultural',
      details:
        'La imprenta fue el instrumento decisivo de la Reforma. Por primera vez, las ideas podían difundirse más rápido que la censura eclesiástica. Lutero comprendió su potencial y usó el alemán vernáculo, no el latín, para llegar al pueblo. Sus panfletos y catecismos educaron a la población en los principios protestantes y fomentaron la alfabetización en Europa central.',
    },
    {
      id: 'calvino-ginebra',
      date: '1536 – 1564',
      title: 'Calvino y la Reforma en Ginebra',
      description:
        'Juan Calvino publica "La institución de la religión cristiana" (1536) y establece una teocracia protestante en Ginebra. El calvinismo se extiende por Francia, los Países Bajos, Escocia y Hungría.',
      type: 'political',
      details:
        'Calvino desarrolló una doctrina más sistemática que Lutero, con la predestinación como eje central: Dios ha determinado de antemano quiénes serán salvados. Ginebra se convirtió en la "Roma protestante", un modelo de ciudad religiosa con estricto control moral. El calvinismo influyó profundamente en la ética del trabajo y el capitalismo según Max Weber.',
    },
    {
      id: 'iglesia-anglicana',
      date: '1534',
      title: 'Enrique VIII y la Iglesia Anglicana',
      description:
        'El rey Enrique VIII de Inglaterra promulga el Acta de Supremacía, proclamándose jefe de la Iglesia de Inglaterra. La ruptura con Roma fue motivada por el rechazo papal a anular su matrimonio con Catalina de Aragón.',
      type: 'political',
      details:
        'Enrique VIII deseaba divorciarse de Catalina de Aragón, tía del emperador Carlos V, para casarse con Ana Bolena. El papa Clemente VII, presionado por Carlos V, se negó a anular el matrimonio. En 1534 el Acta de Supremacía convirtió al rey en cabeza de la Iglesia de Inglaterra. A diferencia del luteranismo, el anglicanismo mantuvo la estructura episcopal y muchas prácticas católicas.',
    },
    {
      id: 'concilio-trento',
      date: '1545 – 1563',
      title: 'Concilio de Trento: la Contrarreforma',
      description:
        'La Iglesia católica celebra el Concilio de Trento para responder a la Reforma protestante. Reafirma la doctrina católica (indulgencias, sacramentos, purgatorio) y emprende una profunda reforma interna.',
      type: 'cultural',
      details:
        'El Concilio de Trento (1545-1563) definió los dogmas católicos frente a las críticas protestantes: confirmó los siete sacramentos, el valor de las indulgencias y la Vulgata latina como texto bíblico oficial. También impulsó la educación del clero (seminarios), prohibió los abusos más flagrantes y potenció la Compañía de Jesús (jesuitas) fundada por Ignacio de Loyola como brazo intelectual y misionero de la Contrarreforma.',
    },
    {
      id: 'guerra-esmalcalda',
      date: '1546 – 1547',
      title: 'Guerra de Esmalcalda',
      description:
        'Carlos V derrota a la Liga de Esmalcalda (alianza de príncipes protestantes alemanes) en la batalla de Mühlberg. Sin embargo, no puede imponer el catolicismo en el Imperio.',
      type: 'military',
      details:
        'La Liga de Esmalcalda fue formada en 1531 por los príncipes luteranos del Imperio para defender sus derechos religiosos. Tras la victoria de Carlos V en Mühlberg (1547), el Interim de Augsburgo intentó imponer una solución de compromiso que ninguna parte aceptó. La victoria militar no se tradujo en victoria religiosa: el protestantismo estaba demasiado arraigado.',
    },
    {
      id: 'paz-augsburgo',
      date: 'Sep 1555',
      title: 'Paz de Augsburgo',
      description:
        'Carlos V firma la Paz de Augsburgo con los príncipes protestantes alemanes. Establece el principio "cuius regio, eius religio": cada príncipe decide la religión de sus súbditos.',
      type: 'political',
      details:
        'La Paz de Augsburgo reconoció oficialmente el luteranismo en el Imperio y estableció que la religión del territorio dependería de la del gobernante (cuius regio, eius religio). Sin embargo, excluía a calvinistas y otras confesiones. No resolvió el problema de fondo y la tensión religiosa continuó hasta desembocar en la Guerra de los Treinta Años.',
    },
    {
      id: 'guerras-religion-francia',
      date: '1562 – 1598',
      title: 'Guerras de Religión en Francia',
      description:
        'Francia sufre ocho guerras civiles entre católicos y hugonotes (protestantes calvinistas). La Masacre de San Bartolomé (1572) causa la muerte de miles de hugonotes. Concluyen con el Edicto de Nantes de 1598.',
      type: 'military',
      details:
        'En la noche de San Bartolomé (23-24 agosto 1572) fueron asesinados entre 5.000 y 30.000 hugonotes por orden de la regente Catalina de Médici. El edicto de Nantes (1598) del rey Enrique IV (hugonote convertido al catolicismo) garantizó la libertad de culto a los protestantes, siendo uno de los primeros documentos de tolerancia religiosa en Europa.',
    },
    {
      id: 'guerra-treinta-anos',
      date: '1618 – 1648',
      title: 'Guerra de los Treinta Años y Paz de Westfalia',
      description:
        'El conflicto más devastador de la Europa del siglo XVII, iniciado en Bohemia, involucra a toda Europa. La Paz de Westfalia (1648) redefine el mapa político y religioso del continente y establece los fundamentos del sistema de Estados modernos.',
      type: 'military',
      details:
        'Comenzó con la Defenestración de Praga (1618) cuando los protestantes bohemios arrojaron a los enviados del emperador por una ventana. Se extendió a toda Europa con la participación de España, Francia, Suecia, Dinamarca y los príncipes alemanes. La Paz de Westfalia reconoció el calvinismo, confirmó la soberanía de los príncipes alemanes y sentó las bases del derecho internacional moderno basado en la soberanía de los Estados.',
    },
  ],

  flashcards: [
    {
      id: 'fc-lutero',
      front: 'Martín Lutero',
      back: 'Monje agustino alemán (1483–1546). Clavó sus 95 tesis en Wittenberg el 31 de octubre de 1517. Defendía que la salvación se obtiene solo por la fe (sola fide), no por obras o indulgencias. Fundador del luteranismo. Tradujo la Biblia al alemán.',
      category: 'person',
    },
    {
      id: 'fc-calvino',
      front: 'Juan Calvino y la predestinación',
      back: 'Reformador francés (1509–1564) establecido en Ginebra. Desarrolló la doctrina de la predestinación: Dios determina de antemano quién se salva. Organizó Ginebra como teocracia protestante. Su influencia se extendió por Francia (hugonotes), Países Bajos, Escocia y América del Norte.',
      category: 'person',
    },
    {
      id: 'fc-95-tesis',
      front: '¿Cuál fue el contenido y la importancia de las 95 Tesis (1517)?',
      back: 'Lutero denunció la venta de indulgencias (perdón de pecados a cambio de dinero) como contraria a las Escrituras. Afirmaba que la salvación viene solo de la fe, no de obras o pagos. La imprenta las difundió por toda Europa en semanas, convirtiendo el debate en un movimiento continental.',
      category: 'event',
    },
    {
      id: 'fc-indulgencias',
      front: 'Indulgencias',
      back: 'Documentos papales que concedían el perdón total o parcial de las penas temporales del pecado a cambio de limosna u obras pías. Su venta masiva por Johann Tetzel para financiar la basílica de San Pedro fue el detonante de las 95 tesis de Lutero.',
      category: 'concept',
    },
    {
      id: 'fc-concilio-trento',
      front: 'Concilio de Trento (1545–1563)',
      back: 'Concilio ecuménico convocado por la Iglesia católica como respuesta a la Reforma. Reafirmó los dogmas católicos (siete sacramentos, purgatorio, Vulgata), reformó el clero mediante seminarios y potenció los jesuitas. Definió la doctrina católica que permanecería hasta el Concilio Vaticano II (1962-1965).',
      category: 'event',
    },
    {
      id: 'fc-cuius-regio',
      front: 'Cuius regio, eius religio',
      back: 'Principio establecido en la Paz de Augsburgo (1555): "quien gobierna el territorio, determina la religión". Cada príncipe del Imperio elegía entre catolicismo y luteranismo, y sus súbditos debían seguirle o emigrar. Fue el primer reconocimiento legal del pluralismo religioso en Europa.',
      category: 'concept',
    },
    {
      id: 'fc-contrarreforma',
      front: 'Contrarreforma (Reforma Católica)',
      back: 'Movimiento de renovación interna de la Iglesia católica en respuesta a la Reforma protestante. Sus pilares fueron: el Concilio de Trento, los jesuitas (fundados por Ignacio de Loyola en 1540), la Inquisición reforzada y el arte barroco como instrumento de persuasión religiosa.',
      category: 'concept',
    },
    {
      id: 'fc-westfalia',
      front: 'Paz de Westfalia (1648)',
      back: 'Tratados de paz que pusieron fin a la Guerra de los Treinta Años y a la Guerra de los Ochenta Años. Reconoció la soberanía de los Estados europeos, el calvinismo como confesión legal y el fin de la hegemonía de los Habsburgo. Se considera el origen del sistema de Estados modernos y el derecho internacional.',
      category: 'event',
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: '¿En qué año y ciudad clavó Lutero sus 95 Tesis?',
      type: 'multiple-choice',
      options: [
        'En 1519, en Augsburgo',
        'En 1517, en Wittenberg',
        'En 1521, en Worms',
        'En 1536, en Ginebra',
      ],
      correctIndex: 1,
      explanation:
        'Lutero clavó sus 95 Tesis en la puerta de la iglesia del castillo de Wittenberg el 31 de octubre de 1517. Esta fecha es considerada el inicio oficial de la Reforma Protestante y se celebra como el Día de la Reforma en los países luteranos.',
    },
    {
      id: 'q2',
      question: 'El anglicanismo fue fundado por razones teológicas similares a las del luteranismo.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. La ruptura de Enrique VIII con Roma fue fundamentalmente política y personal: el papa se negó a anular su matrimonio con Catalina de Aragón. No hubo una motivación teológica profunda como en Lutero o Calvino; la doctrina anglicana se fue definiendo gradualmente y conservó muchos elementos católicos.',
    },
    {
      id: 'q3',
      question: '¿Qué principio estableció la Paz de Augsburgo (1555) para resolver el conflicto religioso en el Imperio?',
      type: 'multiple-choice',
      options: [
        'La libertad de culto para todos los súbditos del Imperio',
        'El catolicismo como única religión del Imperio',
        'Cuius regio, eius religio: la religión del territorio depende de su gobernante',
        'La separación entre Iglesia y Estado',
      ],
      correctIndex: 2,
      explanation:
        'La Paz de Augsburgo estableció el principio "cuius regio, eius religio": cada príncipe del Imperio determinaba la religión de su territorio, eligiendo entre catolicismo y luteranismo. Los súbditos que no compartieran la fe de su gobernante podían emigrar sin perder sus bienes.',
    },
    {
      id: 'q4',
      question: '¿Cuál fue el papel de la imprenta en la difusión de la Reforma Protestante?',
      type: 'multiple-choice',
      options: [
        'Fue utilizada exclusivamente por la Iglesia católica para difundir su respuesta',
        'No tuvo ninguna influencia, ya que la mayoría de la población era analfabeta',
        'Permitió la difusión masiva y rápida de los textos reformistas, superando la censura eclesiástica',
        'Fue inventada por Lutero específicamente para difundir sus ideas',
      ],
      correctIndex: 2,
      explanation:
        'La imprenta de Gutenberg (inventada hacia 1450) fue el instrumento decisivo de la Reforma. Las 95 Tesis se difundieron por toda Europa en pocas semanas. Entre 1517 y 1520 se imprimieron más de 300.000 copias de los escritos de Lutero. Por primera vez las ideas podían circular más rápido que la censura.',
    },
    {
      id: 'q5',
      question: '¿Qué fue la Masacre de San Bartolomé (1572)?',
      type: 'multiple-choice',
      options: [
        'El asesinato del rey Enrique IV de Francia por un fanático católico',
        'La persecución y ejecución masiva de hugonotes franceses en París y otras ciudades',
        'El saqueo de Roma por las tropas del emperador Carlos V',
        'La ejecución de los líderes protestantes alemanes tras la batalla de Mühlberg',
      ],
      correctIndex: 1,
      explanation:
        'En la noche del 23 al 24 de agosto de 1572 (víspera de San Bartolomé), las autoridades católicas francesas ordenaron la masacre de los líderes hugonotes congregados en París para una boda. El asesinato se extendió por toda Francia y causó entre 5.000 y 30.000 víctimas protestantes.',
    },
    {
      id: 'q6',
      question: 'La Paz de Westfalia (1648) estableció los fundamentos del sistema internacional de Estados soberanos.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 0,
      explanation:
        'VERDADERO. La Paz de Westfalia reconoció la soberanía territorial de los Estados europeos como principio básico del orden internacional. Limitó la autoridad del papa y el emperador sobre los asuntos internos de cada Estado. Este principio de soberanía sigue siendo el fundamento del derecho internacional contemporáneo.',
    },
  ],

  glossary: [
    {
      term: 'Luteranismo',
      definition:
        'Primera gran corriente protestante, fundada por Martín Lutero. Sus principios son: sola fide (salvación solo por la fe), sola scriptura (la Biblia como única autoridad) y el sacerdocio universal de los fieles. Se extendió por Alemania, Escandinavia y los países bálticos.',
      type: 'movement',
    },
    {
      term: 'Calvinismo',
      definition:
        'Corriente protestante fundada por Juan Calvino en Ginebra. Caracterizada por la doctrina de la predestinación y una ética rigurosa del trabajo y la moral pública. Se extendió por Francia (hugonotes), Países Bajos, Escocia, Hungría y, más tarde, Nueva Inglaterra.',
      type: 'movement',
    },
    {
      term: 'Indulgencias',
      definition:
        'En la doctrina católica, remisión total o parcial de las penas temporales del pecado concedida por la Iglesia. Su venta masiva en el siglo XVI para financiar la construcción de la basílica de San Pedro fue el detonante inmediato de las 95 Tesis de Lutero.',
      type: 'concept',
    },
    {
      term: 'Contrarreforma',
      definition:
        'Movimiento de renovación y reafirmación del catolicismo en respuesta a la Reforma protestante. Sus instrumentos principales fueron el Concilio de Trento (1545-1563), la Compañía de Jesús (jesuitas), la Inquisición reforzada y el arte barroco como propaganda religiosa.',
      type: 'movement',
    },
    {
      term: 'Hugonotes',
      definition:
        'Nombre dado a los protestantes calvinistas franceses. Sufrieron una intensa persecución, culminando en la Masacre de San Bartolomé (1572). El Edicto de Nantes (1598) les concedió libertad de culto, revocada por Luis XIV en 1685, lo que provocó el exilio de 200.000 hugonotes.',
      type: 'concept',
    },
    {
      term: 'Jesuitas (Compañía de Jesús)',
      definition:
        'Orden religiosa fundada por Ignacio de Loyola en 1540. Fue el principal instrumento intelectual y misionero de la Contrarreforma. Fundaron universidades en toda Europa y misiones en América, Asia y África. Conocidos por su rigor intelectual y obediencia absoluta al papa.',
      type: 'concept',
    },
    {
      term: 'Sola Scriptura',
      definition:
        'Principio protestante (especialmente luterano) que afirma que la Biblia es la única fuente de autoridad religiosa, por encima de la tradición eclesiástica y los decretos papales. Condujo a la traducción de la Biblia a las lenguas vernáculas y al fomento de la alfabetización.',
      type: 'concept',
    },
  ],

  causeEffect: {
    causes: [
      {
        id: 'c1',
        text: 'Corrupción y abusos de la Iglesia católica',
        details:
          'La venta de indulgencias, la simonía (venta de cargos eclesiásticos), el absentismo de los obispos y el lujo ostentoso del papado generaron un profundo descontento entre los fieles y los propios clérigos. El papa León X necesitaba fondos para construir la basílica de San Pedro y autorizó la venta masiva de indulgencias.',
      },
      {
        id: 'c2',
        text: 'El humanismo renacentista y la crítica textual bíblica',
        details:
          'El humanismo (Erasmo de Rotterdam) promovió el retorno a las fuentes originales (Ad fontes) y la crítica filológica de los textos sagrados. Erasmo editó el Nuevo Testamento en griego (1516) y demostró errores en la Vulgata latina oficial, debilitando la autoridad de la Iglesia como única intérprete de las Escrituras.',
      },
      {
        id: 'c3',
        text: 'La imprenta de Gutenberg y la difusión del conocimiento',
        details:
          'Inventada hacia 1450, la imprenta permitió la reproducción masiva y barata de textos. Por primera vez las ideas reformistas podían superar el control eclesiástico. Las 95 Tesis de Lutero se imprimieron y distribuyeron por toda Europa en pocas semanas, algo imposible en la era del manuscrito.',
      },
      {
        id: 'c4',
        text: 'Intereses políticos de los príncipes alemanes contra el papado y el Emperador',
        details:
          'Muchos príncipes alemanes apoyaron a Lutero no solo por convicción religiosa, sino para confiscar las riquezas de la Iglesia en sus territorios y aumentar su autonomía frente al poder del Emperador y del papa. La Reforma fue también un instrumento de emancipación política frente al poder universal de los Habsburgo.',
      },
    ],
    event: {
      title: 'La Reforma Protestante',
      date: '1517 – 1648',
      description:
        'La publicación de las 95 Tesis de Lutero en 1517 desencadenó una ruptura irreversible en la unidad cristiana de Europa occidental. En los siguientes 130 años, el protestantismo se fragmentó en múltiples corrientes (luteranismo, calvinismo, anglicanismo) y provocó guerras religiosas que culminaron en la Paz de Westfalia (1648), redefiniendo el mapa político y religioso de Europa.',
    },
    shortTermEffects: [
      {
        id: 'e1',
        text: 'Ruptura de la unidad religiosa de Europa occidental',
        details:
          'Europa se dividió entre territorios católicos (sur: España, Italia, Francia en su mayor parte) y protestantes (norte: Alemania luterana, Escandinavia, Inglaterra, Suiza calvinista). Esta división religiosa se superpuso a tensiones políticas y generó décadas de conflictos.',
      },
      {
        id: 'e2',
        text: 'Guerras de Religión: Esmalcalda, Países Bajos, Francia, Treinta Años',
        details:
          'La Reforma desencadenó una serie de conflictos armados: la Guerra de Esmalcalda (1546-47), la Revuelta de los Países Bajos contra España (1568-1648), las Guerras de Religión francesas (1562-1598) y la devastadora Guerra de los Treinta Años (1618-1648), que mató entre un tercio y la mitad de la población alemana.',
      },
      {
        id: 'e3',
        text: 'Concilio de Trento y la Contrarreforma católica',
        details:
          'Como respuesta directa a la Reforma, la Iglesia católica convocó el Concilio de Trento (1545-1563), que reafirmó sus dogmas, reformó el clero y lanzó la Contrarreforma con los jesuitas como vanguardia. Lejos de debilitarse, el catolicismo se renovó y expandió por el mundo a través de las misiones.',
      },
      {
        id: 'e4',
        text: 'Difusión de la alfabetización y las lenguas vernáculas',
        details:
          'La necesidad protestante de que cada creyente leyese la Biblia directamente impulsó la traducción de las Escrituras a las lenguas nacionales (Lutero al alemán, Tyndale al inglés) y fomentó la alfabetización. Esto aceleró el desarrollo de las literaturas nacionales y contribuyó a fijar las lenguas vernáculas modernas.',
      },
    ],
    longTermEffects: [
      {
        id: 'le1',
        text: 'Origen del Estado laico y la separación Iglesia-Estado',
        details:
          'La ruptura de la unidad religiosa hizo insostenible la idea de un Estado confesional único. La Paz de Westfalia (1648) consagró el principio de soberanía estatal sobre los asuntos religiosos internos, sentando las bases del Estado laico y de la tolerancia religiosa que se desarrollarían en los siglos XVII y XVIII.',
      },
      {
        id: 'le2',
        text: 'Influencia en el pensamiento ilustrado y las revoluciones modernas',
        details:
          'El libre examen bíblico protestante impulsó el pensamiento crítico y la autonomía intelectual del individuo, valores que influyeron en la Ilustración. El calvinismo, con su valoración positiva del trabajo y la prosperidad como señales de elección divina, fue relacionado por Max Weber con el surgimiento del capitalismo moderno.',
      },
      {
        id: 'le3',
        text: 'Consolidación del sistema de Estados soberanos modernos',
        details:
          'La Paz de Westfalia (1648) es considerada el acta fundacional del sistema internacional de Estados soberanos. Al reconocer la soberanía de cada Estado en sus asuntos internos (incluida la religión), se sentaron las bases del derecho internacional moderno, vigentes hasta el siglo XXI.',
      },
    ],
  },
};
