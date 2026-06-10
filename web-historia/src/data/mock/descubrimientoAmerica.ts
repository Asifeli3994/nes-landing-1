import type { Topic } from '../../types';

export const descubrimientoAmerica: Topic = {
  id: 'descubrimiento-america',
  title: 'El Descubrimiento de América',
  subtitle: 'La conquista del Nuevo Mundo (1492–1521)',
  block: 'La Edad Moderna',
  period: '1492 – 1521',
  description:
    'La llegada de Cristóbal Colón a América en 1492, bajo el patrocinio de los Reyes Católicos, abrió una nueva era en la historia mundial. Los viajes de exploración y las posteriores conquistas de los imperios azteca e inca transformaron radicalmente dos continentes, iniciando un intercambio global de productos, enfermedades y culturas conocido como el Intercambio Colombino.',
  tags: ['América', 'Exploración', 'Siglo XVI', 'España', 'Conquista'],

  timeline: [
    {
      id: 'capitulaciones-santa-fe',
      date: 'Abr 1492',
      title: 'Capitulaciones de Santa Fe',
      description:
        'Los Reyes Católicos firman con Colón las Capitulaciones de Santa Fe, concediéndole los títulos de Almirante, Virrey y Gobernador de las tierras por descubrir.',
      type: 'political',
      details:
        'Firmadas en el campamento de Santa Fe (Granada), estas capitulaciones establecían que Colón recibiría el 10% de todas las riquezas obtenidas y el derecho hereditario a gobernar los nuevos territorios. El acuerdo fue negociado en plena Reconquista, lo que explica la disponibilidad de recursos de la Corona.',
    },
    {
      id: 'llegada-america',
      date: '12 Oct 1492',
      title: 'Llegada de Colón a América',
      description:
        'La expedición de Colón arriba a la isla de Guanahaní (Bahamas), bautizada como San Salvador. Colón creyó haber llegado a las Indias orientales.',
      type: 'political',
      details:
        'La flota formada por la Santa María, la Pinta y la Niña partió de Palos de la Frontera el 3 de agosto de 1492. Tras 70 días de navegación, un marinero de la Pinta divisó tierra. Colón realizaría cuatro viajes en total hasta 1504, sin saber jamás que había llegado a un continente desconocido para los europeos.',
    },
    {
      id: 'tratado-tordesillas',
      date: '7 Jun 1494',
      title: 'Tratado de Tordesillas',
      description:
        'España y Portugal acuerdan repartirse el mundo mediante una línea imaginaria trazada a 370 leguas al oeste de las islas de Cabo Verde.',
      type: 'political',
      details:
        'Mediado por el papa Alejandro VI, el tratado estableció que los territorios al oeste de la línea pertenecerían a España y los del este a Portugal. Esto explica por qué Brasil habla portugués. El tratado fue ratificado en Tordesillas (Valladolid) por los monarcas de ambas naciones.',
    },
    {
      id: 'colon-cuarto-viaje',
      date: '1502 – 1504',
      title: 'Cuarto viaje de Colón',
      description:
        'En su último viaje, Colón explora la costa centroamericana. Muere en 1506 sin reconocer la magnitud de su descubrimiento.',
      type: 'political',
    },
    {
      id: 'amerigo-vespucio',
      date: '1503 – 1507',
      title: 'Américo Vespucio reconoce un Nuevo Continente',
      description:
        'El navegante florentino Américo Vespucio concluye que las tierras descubiertas son un continente desconocido. En 1507 el cartógrafo Waldseemüller bautiza el nuevo mundo con el nombre "América".',
      type: 'cultural',
    },
    {
      id: 'conquista-cuba-caribe',
      date: '1511 – 1515',
      title: 'Conquista del Caribe y Cuba',
      description:
        'Diego Velázquez de Cuéllar conquista Cuba (1511). El Caribe se convierte en la base de operaciones para la conquista del continente americano.',
      type: 'military',
    },
    {
      id: 'conquista-mexico',
      date: '1519 – 1521',
      title: 'Conquista del Imperio Azteca por Hernán Cortés',
      description:
        'Hernán Cortés lidera la conquista del Imperio Mexica. Tras aliarse con pueblos sometidos por los aztecas, toma Tenochtitlán y captura a Moctezuma II.',
      type: 'military',
      details:
        'Cortés partió de Cuba en 1519 con 500 hombres. Su alianza con los tlaxcaltecas, enemigos de los aztecas, fue clave. Tras la "Noche Triste" (1520), Cortés reorganizó sus fuerzas y tomó Tenochtitlán en agosto de 1521. La derrota azteca se debió también a las epidemias de viruela que diezmaron a la población indígena.',
    },
    {
      id: 'conquista-peru',
      date: '1532 – 1535',
      title: 'Conquista del Imperio Inca por Francisco Pizarro',
      description:
        'Francisco Pizarro captura al inca Atahualpa en Cajamarca (1532) y exige un rescate en oro. Pese a pagarlo, Atahualpa es ejecutado y el Imperio Inca se desintegra.',
      type: 'military',
      details:
        'Pizarro contaba con apenas 168 hombres frente a miles de guerreros incas. La guerra civil inca entre Atahualpa y Huáscar, las enfermedades traídas por los europeos y la superioridad tecnológica (caballos y armas de fuego) facilitaron la conquista. Cuzco cayó en 1533 y Lima fue fundada en 1535.',
    },
    {
      id: 'encomienda-sistema',
      date: '1503 – 1542',
      title: 'Sistema de Encomiendas',
      description:
        'La Corona española establece el sistema de encomiendas, por el que los colonos españoles reciben indígenas para trabajar a cambio de evangelizarlos y protegerlos. En la práctica derivó en una forma de esclavitud.',
      type: 'social',
      details:
        'Las Leyes de Burgos (1512) intentaron regular el trato a los indígenas sin éxito. Fray Bartolomé de las Casas denunció los abusos ante la Corona. Las Leyes Nuevas (1542) abolieron la encomienda, provocando una rebelión de los colonos. El sistema fue paulatinamente reformado pero los abusos continuaron.',
    },
    {
      id: 'colapso-demografico',
      date: '1492 – 1600',
      title: 'Colapso demográfico indígena',
      description:
        'Las enfermedades europeas (viruela, sarampión, gripe) y la violencia de la conquista provocan la muerte del 90% de la población indígena del Caribe y gran parte del continente.',
      type: 'social',
      details:
        'Se calcula que la población indígena de América Central pasó de 25 millones en 1519 a apenas 1,3 millones en 1595. La catástrofe demográfica fue la mayor de la historia de la humanidad. La escasez de mano de obra indígena impulsó la trata transatlántica de esclavos africanos.',
    },
  ],

  flashcards: [
    {
      id: 'fc-colon',
      front: 'Cristóbal Colón',
      back: 'Navegante genovés (1451–1506) al servicio de los Reyes Católicos. Llegó a América el 12 de octubre de 1492. Realizó cuatro viajes al Nuevo Mundo. Murió convencido de haber llegado a Asia.',
      category: 'person',
    },
    {
      id: 'fc-capitulaciones',
      front: '¿Qué eran las Capitulaciones de Santa Fe (1492)?',
      back: 'Contrato firmado entre los Reyes Católicos y Colón en abril de 1492. Le concedían los títulos de Almirante, Virrey y Gobernador de las tierras por descubrir, más el 10% de las riquezas obtenidas.',
      category: 'event',
    },
    {
      id: 'fc-tordesillas',
      front: 'Tratado de Tordesillas (1494)',
      back: 'Acuerdo entre España y Portugal que dividía el mundo en dos zonas de exploración mediante una línea a 370 leguas al oeste de Cabo Verde. España al oeste, Portugal al este. Explica por qué Brasil es lusófono.',
      category: 'event',
    },
    {
      id: 'fc-cortes',
      front: 'Hernán Cortés y la conquista azteca',
      back: 'Conquistador español (1485–1547). Partió de Cuba en 1519 con 500 hombres. Aliado con los tlaxcaltecas, tomó Tenochtitlán en 1521 y puso fin al Imperio Mexica. Fundó la Nueva España.',
      category: 'person',
    },
    {
      id: 'fc-pizarro',
      front: 'Francisco Pizarro y la conquista inca',
      back: 'Conquistador español (c.1478–1541). Con 168 hombres capturó al inca Atahualpa en Cajamarca (1532). Ejecutó a Atahualpa pese al rescate en oro y conquistó el Imperio Inca para España.',
      category: 'person',
    },
    {
      id: 'fc-encomienda',
      front: 'Sistema de Encomienda',
      back: 'Institución colonial por la que la Corona cedía a un encomendero español un grupo de indígenas para trabajar. A cambio, debía evangelizarlos y protegerlos. En la práctica supuso explotación y trabajo forzado.',
      category: 'concept',
    },
    {
      id: 'fc-intercambio-colombino',
      front: 'Intercambio Colombino',
      back: 'Transferencia global de plantas, animales, culturas y enfermedades entre América, Europa, África y Asia tras 1492. Europa recibió patata, maíz, tomate y cacao; América recibió caballo, trigo y enfermedades letales.',
      category: 'concept',
    },
    {
      id: 'fc-bartolome',
      front: 'Bartolomé de las Casas',
      back: 'Fraile dominico (1484–1566), primer defensor de los derechos indígenas. Denunció los abusos de los encomenderos en su "Brevísima relación de la destrucción de las Indias" (1542). Impulsó las Leyes Nuevas.',
      category: 'person',
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: '¿En qué fecha llegó Cristóbal Colón a América por primera vez?',
      type: 'multiple-choice',
      options: ['3 de agosto de 1492', '12 de octubre de 1492', '7 de junio de 1494', '2 de enero de 1492'],
      correctIndex: 1,
      explanation:
        'Colón llegó a la isla de Guanahaní (Bahamas) el 12 de octubre de 1492. Esta fecha es considerada el Día de la Hispanidad en España. La expedición había partido de Palos de la Frontera el 3 de agosto.',
    },
    {
      id: 'q2',
      question: 'El Tratado de Tordesillas de 1494 fue firmado entre España y Francia.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. El Tratado de Tordesillas fue firmado entre España y Portugal en 1494. Dividía el mundo mediante una línea a 370 leguas al oeste de las islas de Cabo Verde: lo que quedara al oeste sería de España y lo del este de Portugal.',
    },
    {
      id: 'q3',
      question: '¿Qué alianza fue clave para que Hernán Cortés conquistase el Imperio Azteca?',
      type: 'multiple-choice',
      options: ['La alianza con los mayas', 'La alianza con los tlaxcaltecas', 'La alianza con los incas', 'La alianza con los caribes'],
      correctIndex: 1,
      explanation:
        'La alianza con los tlaxcaltecas, pueblo enemigo de los aztecas y sometido por ellos, fue fundamental para la conquista. Aportaron miles de guerreros y conocimiento del terreno. Sin este apoyo, Cortés no habría podido derrotar al Imperio Mexica.',
    },
    {
      id: 'q4',
      question: '¿Quién fue el último gran inca capturado por Francisco Pizarro en Cajamarca en 1532?',
      type: 'multiple-choice',
      options: ['Huáscar', 'Moctezuma II', 'Atahualpa', 'Túpac Yupanqui'],
      correctIndex: 2,
      explanation:
        'Atahualpa fue capturado por Pizarro en la Batalla de Cajamarca (1532). Ofreció un enorme rescate en oro y plata para ser liberado, pero fue ejecutado igualmente en 1533, lo que desencadenó la caída del Imperio Inca.',
    },
    {
      id: 'q5',
      question: '¿Cuál fue la principal consecuencia demográfica de la conquista para la población indígena americana?',
      type: 'multiple-choice',
      options: [
        'Un ligero descenso de la población',
        'La población se mantuvo estable gracias a la evangelización',
        'Un colapso demográfico del 90% por enfermedades y violencia',
        'Un aumento de la población por mestizaje',
      ],
      correctIndex: 2,
      explanation:
        'Las enfermedades europeas (viruela, sarampión, gripe) contra las que los indígenas no tenían inmunidad, combinadas con la violencia y el trabajo forzado, causaron la muerte de aproximadamente el 90% de la población indígena del Caribe y gran parte del continente en el siglo XVI.',
    },
    {
      id: 'q6',
      question: 'Bartolomé de las Casas fue un encomendero que defendió el sistema de trabajo indígena forzado.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. Bartolomé de las Casas fue un fraile dominico que renunció a su encomienda y se convirtió en el principal defensor de los derechos indígenas. Su obra "Brevísima relación de la destrucción de las Indias" denunció los abusos coloniales y contribuyó a la promulgación de las Leyes Nuevas de 1542.',
    },
  ],

  glossary: [
    {
      term: 'Capitulaciones',
      definition:
        'Contratos firmados entre la Corona española y los conquistadores en los que se fijaban los derechos y obligaciones de ambas partes para una expedición de descubrimiento o conquista. Las más famosas son las Capitulaciones de Santa Fe (1492) con Colón.',
      type: 'concept',
    },
    {
      term: 'Encomienda',
      definition:
        'Institución colonial española por la que la Corona cedía a un encomendero un grupo de indígenas para que trabajase para él a cambio de evangelizarlos y protegerlos. En la práctica derivó en una forma de explotación laboral y cuasi-esclavitud.',
      type: 'concept',
    },
    {
      term: 'Intercambio Colombino',
      definition:
        'Término acuñado por el historiador Alfred Crosby para describir la transferencia de plantas, animales, culturas y enfermedades entre el Viejo Mundo (Europa, África, Asia) y el Nuevo Mundo (América) a partir de 1492.',
      type: 'concept',
    },
    {
      term: 'Tenochtitlán',
      definition:
        'Capital del Imperio Azteca o Mexica, fundada en 1325 en una isla del lago Texcoco (actual Ciudad de México). Fue conquistada por Hernán Cortés en 1521. En su apogeo tenía más de 200.000 habitantes, mayor que muchas ciudades europeas de la época.',
      type: 'place',
    },
    {
      term: 'Reyes Católicos',
      definition:
        'Denominación de Fernando II de Aragón e Isabel I de Castilla, monarcas que unificaron España, completaron la Reconquista con la toma de Granada (1492) y financiaron las expediciones de Colón al Nuevo Mundo.',
      type: 'person',
    },
    {
      term: 'Virreinato',
      definition:
        'División administrativa de los territorios americanos bajo el control español. El virrey representaba al rey con plenos poderes. Los primeros virreinatos fueron el de Nueva España (1535) y el del Perú (1542).',
      type: 'concept',
    },
    {
      term: 'Mestizaje',
      definition:
        'Proceso de mezcla biológica y cultural entre europeos, indígenas americanos y africanos en las colonias españolas. Dio lugar a una sociedad colonial estratificada en castas (peninsulares, criollos, mestizos, indígenas, esclavos).',
      type: 'concept',
    },
  ],

  causeEffect: {
    causes: [
      {
        id: 'c1',
        text: 'Búsqueda de rutas comerciales a Asia',
        details:
          'El control otomano del Mediterráneo oriental dificultaba el comercio de especias con Asia. España buscaba una ruta alternativa hacia las Indias navegando hacia el oeste, lo que motivó el patrocinio de las expediciones de Colón.',
      },
      {
        id: 'c2',
        text: 'Apoyo de los Reyes Católicos y unificación de España',
        details:
          'La recién completada Reconquista (toma de Granada, enero 1492) liberó recursos militares y económicos. Los Reyes Católicos vieron en la exploración oceánica una vía para extender su poder e influencia y propagar el catolicismo.',
      },
      {
        id: 'c3',
        text: 'Avances náuticos y cartográficos europeos',
        details:
          'Las mejoras en la carabela, el astrolabio, la brújula y los conocimientos cartográficos acumulados durante la expansión portuguesa por África permitieron viajes oceánicos de larga duración con mayor seguridad.',
      },
      {
        id: 'c4',
        text: 'Ambición de gloria y riqueza de los conquistadores',
        details:
          'La figura del conquistador, hidalgo sin fortuna heredada, vio en América la oportunidad de ascenso social y riqueza. El modelo de conquista era autónomo: los conquistadores financiaban sus propias expediciones esperando recibir tierras e indígenas como recompensa.',
      },
    ],
    event: {
      title: 'Descubrimiento y conquista de América',
      date: '1492 – 1521',
      description:
        'El primer viaje de Colón en 1492 abrió las Américas a la colonización europea. En menos de 30 años, España conquistó los imperios azteca e inca, los dos más poderosos del continente, sentando las bases del Imperio colonial español.',
    },
    shortTermEffects: [
      {
        id: 'e1',
        text: 'Colapso demográfico de la población indígena',
        details:
          'Las epidemias de viruela y sarampión, sin precedentes entre poblaciones sin inmunidad, combinadas con la violencia y el trabajo forzado, mataron al 90% de los indígenas del Caribe en pocas décadas.',
      },
      {
        id: 'e2',
        text: 'Afluencia masiva de metales preciosos a España',
        details:
          'El oro y la plata americanos (especialmente de las minas de Potosí y Zacatecas) enriquecieron a la Corona española y financiaron las guerras de Carlos I y Felipe II, pero también generaron inflación en toda Europa.',
      },
      {
        id: 'e3',
        text: 'Establecimiento del sistema colonial y la encomienda',
        details:
          'España implantó virreinatos, audiencias y el sistema de encomiendas para organizar y explotar los nuevos territorios. La evangelización masiva de los indígenas fue una prioridad de la Corona y de las órdenes religiosas.',
      },
      {
        id: 'e4',
        text: 'Inicio del comercio triangular y la trata de esclavos africanos',
        details:
          'El colapso demográfico indígena generó escasez de mano de obra. España autorizó la importación de esclavos africanos, sentando las bases del comercio triangular entre Europa, África y América.',
      },
    ],
    longTermEffects: [
      {
        id: 'le1',
        text: 'Intercambio Colombino: transformación global de la alimentación',
        details:
          'El maíz, la patata, el tomate, el cacao y la mandioca de América revolucionaron la dieta europea y africana, permitiendo un aumento de la población mundial. Europa exportó trigo, caña de azúcar y ganadería, que transformaron el paisaje americano.',
      },
      {
        id: 'le2',
        text: 'Formación del mundo hispanoamericano',
        details:
          'El mestizaje biológico y cultural entre europeos, indígenas y africanos creó nuevas sociedades y culturas en América Latina, que comparten lengua, religión e historia con España pero con identidades propias.',
      },
      {
        id: 'le3',
        text: 'Hegemonía española en Europa y rivalidad con otras potencias',
        details:
          'Las riquezas americanas convirtieron a España en la primera potencia mundial durante el siglo XVI. Esta hegemonía provocó la rivalidad de Inglaterra, Francia y los Países Bajos, que buscaron sus propios imperios coloniales.',
      },
    ],
  },
};
