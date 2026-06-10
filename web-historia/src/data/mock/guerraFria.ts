import type { Topic } from '../../types';

export const guerraFria: Topic = {
  id: 'guerra-fria',
  title: 'La Guerra Fría',
  subtitle: 'La confrontación entre dos superpotencias (1947–1991)',
  block: 'El Siglo XX y XXI',
  period: '1947 – 1991',
  description:
    'La Guerra Fría fue el enfrentamiento político, ideológico, económico y militar entre los Estados Unidos y la Unión Soviética que dominó las relaciones internacionales desde el final de la Segunda Guerra Mundial (1945) hasta la disolución de la URSS en 1991. Sin llegar a una guerra directa entre las dos superpotencias, el conflicto se libró a través de guerras por delegación, la carrera de armamentos nucleares, la carrera espacial y la competencia por la influencia en el Tercer Mundo.',
  tags: ['Guerra Fría', 'Siglo XX', 'USA', 'URSS', 'Geopolítica'],

  timeline: [
    {
      id: 'doctrina-truman',
      date: 'Mar 1947',
      title: 'Doctrina Truman',
      description:
        'El presidente Harry Truman anuncia ante el Congreso estadounidense el apoyo a todos los pueblos que resistan la dominación soviética. Se convierte en la doctrina de contención del comunismo.',
      type: 'political',
      details:
        'En el contexto de la guerra civil griega y la presión soviética sobre Turquía, Truman pidió al Congreso 400 millones de dólares de ayuda militar. Afirmó que "la política de EE.UU. debe apoyar a los pueblos libres que resisten las tentativas de sometimiento". Esta doctrina de "contención" (containment), formulada por el diplomático George Kennan, guiaría la política exterior estadounidense durante toda la Guerra Fría.',
    },
    {
      id: 'plan-marshall',
      date: 'Jun 1947',
      title: 'Plan Marshall',
      description:
        'El secretario de Estado George Marshall propone un programa masivo de ayuda económica de EE.UU. para la reconstrucción de Europa occidental. La URSS rechaza el plan y prohíbe a sus satélites aceptarlo.',
      type: 'political',
      details:
        'EE.UU. invirtió 13.000 millones de dólares (equivalente a más de 140.000 millones actuales) en la recuperación económica de Europa occidental entre 1948 y 1952. El objetivo explícito era la reconstrucción económica; el objetivo implícito era frenar la expansión del comunismo en países empobrecidos. La URSS respondió creando el Comecon (Consejo de Ayuda Mutua Económica) para coordinar las economías del bloque oriental.',
    },
    {
      id: 'bloqueo-berlin',
      date: '1948 – 1949',
      title: 'Bloqueo de Berlín',
      description:
        'La URSS bloquea los accesos terrestres a Berlín occidental. EE.UU. y sus aliados responden con el puente aéreo de Berlín, abasteciendo la ciudad durante 11 meses con vuelos continuos.',
      type: 'military',
      details:
        'El 24 de junio de 1948, Stalin bloqueó todas las vías terrestres y fluviales hacia Berlín occidental para forzar a las potencias occidentales a abandonar la ciudad. La respuesta aliada fue el mayor puente aéreo de la historia: 200.000 vuelos en 11 meses transportaron 2,3 millones de toneladas de suministros. Stalin levantó el bloqueo el 12 de mayo de 1949, reconociendo el fracaso de la operación. El episodio aceleró la creación de la OTAN (abril 1949) y la República Federal Alemana.',
    },
    {
      id: 'guerra-corea',
      date: '1950 – 1953',
      title: 'Guerra de Corea',
      description:
        'Corea del Norte (apoyada por China y la URSS) invade Corea del Sur. EE.UU. y la ONU intervienen militarmente. El conflicto termina con un armisticio en el paralelo 38, línea de partida original, sin tratado de paz.',
      type: 'military',
      details:
        'La guerra de Corea (1950-1953) fue el primer conflicto armado directo de la Guerra Fría. Murieron más de 3 millones de civiles y militares. EE.UU. lideró una coalición de 16 países bajo mandato de la ONU. Cuando las fuerzas de MacArthur llegaron al río Yalu (frontera con China), China intervino con 300.000 voluntarios. El armisticio de Panmunjom (1953) restableció la frontera en el paralelo 38 y convirtió la península en una zona desmilitarizada que persiste hasta hoy.',
    },
    {
      id: 'sputnik-carrera-espacial',
      date: 'Oct 1957',
      title: 'Sputnik y el inicio de la carrera espacial',
      description:
        'La URSS lanza el Sputnik 1, el primer satélite artificial de la historia. El "shock del Sputnik" sacude a EE.UU., que crea la NASA en 1958 para competir en el espacio.',
      type: 'cultural',
      details:
        'El 4 de octubre de 1957, la URSS demostró al mundo su superioridad tecnológica lanzando el primer satélite artificial. En noviembre, Sputnik 2 llevó al espacio a la perra Laika, primer ser vivo en órbita. El "shock del Sputnik" provocó una revolución en la educación científica estadounidense y el lanzamiento del programa espacial NASA (1958). La carrera espacial culminó con el alunizaje del Apolo 11 el 20 de julio de 1969.',
    },
    {
      id: 'muro-berlin',
      date: 'Ago 1961',
      title: 'Construcción del Muro de Berlín',
      description:
        'La RDA construye el Muro de Berlín para detener la huida masiva de alemanes orientales hacia occidente. El Muro divide físicamente la ciudad y se convierte en el símbolo más poderoso de la Guerra Fría.',
      type: 'political',
      details:
        'Antes de 1961, más de 3,5 millones de alemanes orientales habían huido al oeste, muchos de ellos cualificados (médicos, ingenieros, profesores). Para detener el colapso económico, la RDA construyó el Muro en la madrugada del 13 de agosto de 1961. Con 155 km de longitud y vigilado por guardias con orden de disparar, el Muro mató a más de 140 personas que intentaron cruzarlo. Cayó el 9 de noviembre de 1989 ante la presión popular.',
    },
    {
      id: 'crisis-misiles-cuba',
      date: 'Oct 1962',
      title: 'Crisis de los Misiles de Cuba',
      description:
        'EE.UU. descubre que la URSS instala misiles nucleares en Cuba. Durante 13 días el mundo estuvo al borde de la guerra nuclear. Se resuelve con la retirada soviética de los misiles a cambio de garantías sobre Cuba.',
      type: 'military',
      details:
        'El 16 de octubre de 1962, fotografías de un U-2 revelaron la construcción de rampas de misiles soviéticos en Cuba. Kennedy impuso un bloqueo naval y exigió la retirada. Kruschev cedió a cambio de la promesa de EE.UU. de no invadir Cuba y el retiro secreto de misiles estadounidenses de Turquía. Los 13 días de octubre de 1962 son el momento de mayor peligro de guerra nuclear de la historia. El episodio llevó a la creación del teléfono rojo Moscú-Washington.',
    },
    {
      id: 'guerra-vietnam',
      date: '1955 – 1975',
      title: 'Guerra de Vietnam',
      description:
        'EE.UU. interviene militarmente en Vietnam del Sur para impedir la reunificación comunista del país. Tras 20 años de conflicto y 58.000 soldados estadounidenses muertos, EE.UU. se retira en 1973. Vietnam se unifica bajo el comunismo en 1975.',
      type: 'military',
      details:
        'El conflicto causó entre 1,5 y 3,5 millones de muertes vietnamitas. La derrota de EE.UU. fue el primer fracaso militar estadounidense importante y generó un profundo trauma social (síndrome de Vietnam). Los movimientos pacifistas y el impacto televisivo de la guerra cambiaron la opinión pública mundial. La caída de Saigón el 30 de abril de 1975 completó la victoria comunista y la reunificación de Vietnam.',
    },
    {
      id: 'caida-muro',
      date: '9 Nov 1989',
      title: 'Caída del Muro de Berlín',
      description:
        'Bajo la presión de las manifestaciones populares en la RDA, el régimen comunista alemán abre los puestos fronterizos. Miles de berlineses derriban el Muro, marcando el fin simbólico de la Guerra Fría y el inicio de la reunificación alemana.',
      type: 'political',
      details:
        'La caída del Muro de Berlín fue consecuencia directa de las reformas de Gorbachov (glasnost y perestroika) y de las revoluciones de terciopelo que barrían Europa del Este. El 9 de noviembre de 1989, un portavoz del gobierno de la RDA anunció por error que la apertura de fronteras era inmediata. Miles de berlineses salieron a la calle y comenzaron a derribar el Muro con picos y mazos. Alemania se reunificó el 3 de octubre de 1990.',
    },
    {
      id: 'disolucion-urss',
      date: '25 Dic 1991',
      title: 'Disolución de la URSS',
      description:
        'Mijail Gorbachov dimite como presidente de la URSS. La bandera soviética es arriada del Kremlin. Quince repúblicas exsoviéticas se convierten en Estados independientes. La Guerra Fría concluye con la victoria del bloque occidental.',
      type: 'political',
      details:
        'Tras el fallido golpe de Estado de agosto de 1991, las repúblicas soviéticas declararon su independencia una tras otra. El 8 de diciembre de 1991, los presidentes de Rusia, Ucrania y Bielorrusia firmaron los Acuerdos de Belavezha disolviendo la URSS. El 25 de diciembre, Gorbachov dimitió y transfirió los códigos nucleares a Boris Yeltsin. La Guerra Fría terminó sin tratado de paz, dejando a EE.UU. como única superpotencia.',
    },
  ],

  flashcards: [
    {
      id: 'fc-doctrina-truman',
      front: 'Doctrina Truman (1947)',
      back: 'Política exterior de EE.UU. anunciada por el presidente Truman en marzo de 1947. Comprometía apoyo económico y militar a los pueblos amenazados por el comunismo. Formalizó la estrategia de "contención" (containment) del comunismo soviético que guiaría la política exterior estadounidense durante toda la Guerra Fría.',
      category: 'concept',
    },
    {
      id: 'fc-plan-marshall',
      front: 'Plan Marshall (1948–1952)',
      back: 'Programa de ayuda económica de EE.UU. para la reconstrucción de Europa occidental. Invirtió 13.000 millones de dólares en 16 países europeos. Aceleró la recuperación económica occidental y fue el instrumento de vinculación de Europa al bloque capitalista. La URSS prohibió a sus satélites participar.',
      category: 'event',
    },
    {
      id: 'fc-otan-varsovia',
      front: 'OTAN vs. Pacto de Varsovia',
      back: 'OTAN (1949): Alianza militar de EE.UU. y Europa occidental. Pacto de Varsovia (1955): Alianza militar soviética con los países del bloque oriental. Ambas eran alianzas de defensa colectiva que materializaban la división de Europa en dos bloques militares enfrentados durante la Guerra Fría.',
      category: 'concept',
    },
    {
      id: 'fc-crisis-misiles',
      front: 'Crisis de los Misiles de Cuba (octubre 1962)',
      back: 'Momento de mayor peligro nuclear de la Historia. EE.UU. descubrió misiles soviéticos en Cuba y estableció un bloqueo naval. Tras 13 días de tensión máxima, Kruschev retiró los misiles a cambio de la promesa de EE.UU. de no invadir Cuba y la retirada secreta de misiles estadounidenses de Turquía.',
      category: 'event',
    },
    {
      id: 'fc-gorbachov',
      front: 'Mijail Gorbachov y sus reformas',
      back: 'Secretario General del PCUS (1985–1991). Lanzó la glasnost (transparencia informativa) y la perestroika (reestructuración económica) para modernizar la URSS. Sus reformas desencadenaron procesos que llevaron a la caída del comunismo en Europa del Este y a la disolución de la URSS en 1991.',
      category: 'person',
    },
    {
      id: 'fc-carrera-armamentos',
      front: 'Carrera de Armamentos',
      back: 'Competencia entre EE.UU. y la URSS por la supremacía nuclear y militar. La URSS probó su primera bomba atómica en 1949 y su primera bomba de hidrógeno en 1953. Ambas potencias acumularon miles de ojivas nucleares bajo la doctrina de la MAD (Destrucción Mutua Asegurada), que garantizaba que ninguna pudiera atacar sin ser destruida.',
      category: 'concept',
    },
    {
      id: 'fc-muro-berlin',
      front: 'El Muro de Berlín (1961–1989)',
      back: 'Barrera física construida por la RDA el 13 de agosto de 1961 para evitar la emigración masiva hacia occidente. Símbolo de la división de Europa. Con 155 km de longitud, mató a más de 140 personas que intentaron cruzarlo. Cayó el 9 de noviembre de 1989 ante la presión popular, marcando el fin simbólico de la Guerra Fría.',
      category: 'event',
    },
    {
      id: 'fc-detente',
      front: 'Distensión (Détente)',
      back: 'Período de reducción de tensiones entre EE.UU. y la URSS durante los años 1970. Culminó en los acuerdos SALT I (1972) y SALT II (1979) de limitación de armas estratégicas, la visita de Nixon a China (1972) y la Conferencia de Helsinki (1975) sobre seguridad y cooperación en Europa. Interrumpida por la invasión soviética de Afganistán (1979).',
      category: 'concept',
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: '¿En qué consistió la Doctrina Truman de 1947?',
      type: 'multiple-choice',
      options: [
        'Un programa de ayuda económica para la reconstrucción de Europa',
        'El compromiso de EE.UU. de apoyar a los pueblos que resistieran la dominación comunista',
        'La propuesta de crear una alianza militar entre EE.UU. y Europa occidental',
        'Un plan de desnuclearización bilateral con la URSS',
      ],
      correctIndex: 1,
      explanation:
        'La Doctrina Truman (marzo 1947) comprometió a EE.UU. a apoyar económica y militarmente a los pueblos libres que resistieran la dominación comunista. Formalizó la estrategia de "contención" del comunismo y fue la respuesta a la presión soviética sobre Grecia y Turquía.',
    },
    {
      id: 'q2',
      question: 'La crisis de los misiles de Cuba (1962) se resolvió con una invasión militar de EE.UU. a Cuba.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. La crisis se resolvió diplomáticamente: la URSS retiró sus misiles de Cuba a cambio de la promesa de EE.UU. de no invadir Cuba y la retirada secreta de misiles estadounidenses de Turquía. Fue el momento de mayor peligro nuclear de la Historia, resuelto por negociación directa entre Kennedy y Kruschev.',
    },
    {
      id: 'q3',
      question: '¿Cuál fue el significado histórico del lanzamiento del Sputnik soviético en 1957?',
      type: 'multiple-choice',
      options: [
        'Fue el primer misil nuclear intercontinental capaz de alcanzar EE.UU.',
        'Demostró la superioridad tecnológica soviética e inició la carrera espacial entre las dos superpotencias',
        'Permitió a la URSS espiar las instalaciones militares estadounidenses',
        'Fue el primer intento fallido de llegar a la Luna',
      ],
      correctIndex: 1,
      explanation:
        'El Sputnik 1 (4 octubre 1957) fue el primer satélite artificial de la historia. El "shock del Sputnik" demostró que la URSS estaba tecnológicamente adelantada a EE.UU. y desató la carrera espacial. EE.UU. respondió creando la NASA (1958), que culminó llevando al hombre a la Luna en 1969.',
    },
    {
      id: 'q4',
      question: '¿Qué fueron la glasnost y la perestroika de Gorbachov?',
      type: 'multiple-choice',
      options: [
        'Dos tipos de misiles soviéticos en la crisis de Cuba',
        'Los dos bloques militares de la Guerra Fría (OTAN y Pacto de Varsovia)',
        'Reformas soviéticas de transparencia informativa y reestructuración económica que aceleraron el fin de la URSS',
        'Los tratados de paz que pusieron fin a la Guerra Fría',
      ],
      correctIndex: 2,
      explanation:
        'Gorbachov lanzó la glasnost (apertura o transparencia informativa) y la perestroika (reestructuración económica) desde 1985 para modernizar la URSS. Paradójicamente, estas reformas liberalizadoras desencadenaron fuerzas que llevaron a la caída del comunismo en Europa del Este y a la disolución de la propia URSS en 1991.',
    },
    {
      id: 'q5',
      question: '¿Por qué se construyó el Muro de Berlín en 1961?',
      type: 'multiple-choice',
      options: [
        'Para defenderse de una posible invasión militar de Alemania occidental',
        'Para detener la emigración masiva de ciudadanos de la RDA hacia Berlín occidental',
        'Para separar las zonas de ocupación establecidas tras la Segunda Guerra Mundial',
        'Para responder al bloqueo económico impuesto por las potencias occidentales',
      ],
      correctIndex: 1,
      explanation:
        'El Muro fue construido el 13 de agosto de 1961 para detener la huida masiva de ciudadanos de la República Democrática Alemana hacia occidente: antes de 1961, más de 3,5 millones de alemanes orientales, muchos altamente cualificados, habían emigrado al oeste, lo que amenazaba con colapsar la economía del régimen comunista.',
    },
    {
      id: 'q6',
      question: 'El Plan Marshall (1948–1952) fue un programa de ayuda económica de EE.UU. que también se ofreció a los países del bloque soviético.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 0,
      explanation:
        'VERDADERO. El Plan Marshall se ofreció inicialmente a todos los países europeos, incluida la URSS. Sin embargo, Stalin lo rechazó y prohibió a los países de su órbita (Polonia, Checoslovaquia, etc.) que lo aceptaran, al considerarlo un instrumento de dominación capitalista estadounidense. Este rechazo profundizó la división de Europa en dos bloques.',
    },
  ],

  glossary: [
    {
      term: 'Contención (Containment)',
      definition:
        'Estrategia de política exterior de EE.UU. formulada por el diplomático George Kennan en 1946-1947. Propugnaba impedir la expansión del comunismo soviético más allá de sus fronteras, sin atacar directamente a la URSS. Fue la doctrina fundamental de EE.UU. durante toda la Guerra Fría, instrumentalizada a través de la Doctrina Truman, el Plan Marshall y la OTAN.',
      type: 'concept',
    },
    {
      term: 'Bloque occidental / bloque oriental',
      definition:
        'División del mundo durante la Guerra Fría en dos esferas de influencia: el bloque occidental (EE.UU. y sus aliados capitalistas y democráticos, organizados en la OTAN) y el bloque oriental (URSS y los países comunistas de Europa del Este, organizados en el Pacto de Varsovia y el Comecon).',
      type: 'concept',
    },
    {
      term: 'Destrucción Mutua Asegurada (MAD)',
      definition:
        'Doctrina de disuasión nuclear basada en la certeza de que cualquier ataque nuclear de una superpotencia provocaría una respuesta devastadora de la otra, asegurando la destrucción de ambas. La MAD fue paradójicamente la principal garantía de paz entre EE.UU. y la URSS: ninguna podía atacar sin ser aniquilada.',
      type: 'concept',
    },
    {
      term: 'Telón de Acero',
      definition:
        'Expresión acuñada por Winston Churchill en su discurso de Fulton (Missouri, marzo 1946) para describir la frontera ideológica, política y física que dividía Europa en dos bloques durante la Guerra Fría. Al este quedaban los países bajo dominio soviético; al oeste, los aliados de EE.UU.',
      type: 'concept',
    },
    {
      term: 'Carrera espacial',
      definition:
        'Competencia tecnológica entre EE.UU. y la URSS por la conquista del espacio. La URSS lanzó el Sputnik (1957), primer satélite, y puso en órbita al primer hombre (Gagarin, 1961). EE.UU. respondió con la NASA (1958) y culminó con el alunizaje del Apolo 11 (1969). Fue tanto una demostración tecnológica como un instrumento de propaganda ideológica.',
      type: 'concept',
    },
    {
      term: 'Perestroika y Glasnost',
      definition:
        'Reformas lanzadas por Gorbachov desde 1985. La perestroika (reestructuración) buscaba modernizar la economía soviética introduciendo elementos de mercado. La glasnost (transparencia o apertura) permitía la crítica pública y la libertad informativa. Ambas reformas desencadenaron procesos que llevaron al colapso del comunismo y la disolución de la URSS.',
      type: 'concept',
    },
    {
      term: 'Guerra por delegación (Guerra proxy)',
      definition:
        'Conflictos armados financiados o apoyados indirectamente por EE.UU. y la URSS en países terceros, evitando la confrontación directa nuclear. Ejemplos: Guerra de Corea (1950-53), Guerra de Vietnam (1955-75), conflictos en Angola, Afganistán, Nicaragua y El Salvador. Permitían a las superpotencias competir por la influencia global sin arriesgarse a una guerra nuclear.',
      type: 'concept',
    },
  ],

  causeEffect: {
    causes: [
      {
        id: 'c1',
        text: 'División de Europa tras la Segunda Guerra Mundial',
        details:
          'Las conferencias de Yalta y Potsdam (1945) dividieron Europa en zonas de influencia. La URSS impuso regímenes comunistas en los países de Europa oriental liberados por el Ejército Rojo. El mundo quedó dividido entre democracias capitalistas lideradas por EE.UU. y dictaduras comunistas lideradas por la URSS, con intereses y valores antagónicos.',
      },
      {
        id: 'c2',
        text: 'Incompatibilidad ideológica: capitalismo vs. comunismo',
        details:
          'EE.UU. defendía la democracia liberal y el capitalismo; la URSS, el marxismo-leninismo y la economía planificada. Cada superpotencia veía el sistema del otro como una amenaza existencial. Esta rivalidad ideológica era irreconciliable y determinó todas las decisiones políticas y militares de ambos bloques durante 45 años.',
      },
      {
        id: 'c3',
        text: 'La bomba atómica y el desequilibrio de poder',
        details:
          'El monopolio nuclear de EE.UU. (1945-1949) creó una profunda desconfianza soviética. Cuando la URSS probó su propia bomba atómica en 1949, rompió el monopolio pero inauguró la carrera de armamentos nucleares. La posesión de armas de destrucción masiva por ambas partes hizo que cualquier confrontación directa pudiera desembocar en una guerra nuclear catastrófica.',
      },
      {
        id: 'c4',
        text: 'Expansionismo soviético en Europa del Este y Asia',
        details:
          'La instalación de gobiernos comunistas en Polonia, Checoslovaquia, Hungría, Rumanía, Bulgaria y la República Democrática Alemana entre 1945 y 1949, junto con el apoyo soviético a los comunistas en la guerra civil china y en Corea, convenció a EE.UU. de que Stalin buscaba la dominación mundial, haciendo inevitable la política de contención.',
      },
    ],
    event: {
      title: 'La Guerra Fría',
      date: '1947 – 1991',
      description:
        'EE.UU. y la URSS compitieron durante 44 años por la hegemonía mundial sin llegar a una guerra directa entre ellos, gracias a la disuasión nuclear. El conflicto se manifestó en guerras por delegación, la carrera armamentística y espacial, crisis diplomáticas (Berlín, Cuba) y la competencia por influencia en el Tercer Mundo.',
    },
    shortTermEffects: [
      {
        id: 'e1',
        text: 'División del mundo en dos bloques militares (OTAN y Pacto de Varsovia)',
        details:
          'EE.UU. creó la OTAN en 1949 como alianza militar de Occidente. La URSS respondió con el Pacto de Varsovia en 1955. Europa quedó dividida físicamente por el Telón de Acero. El mundo se bipolarizó y los países en desarrollo se convirtieron en campo de batalla de la competencia entre los dos bloques.',
      },
      {
        id: 'e2',
        text: 'Carrera de armamentos nucleares y la amenaza de destrucción total',
        details:
          'Ambas superpotencias acumularon arsenales nucleares capaces de destruir varias veces la civilización humana. La doctrina de la Destrucción Mutua Asegurada (MAD) fue una "paz del terror" que impidió la guerra directa pero mantuvo al mundo bajo la amenaza permanente de un apocalipsis nuclear.',
      },
      {
        id: 'e3',
        text: 'Guerras por delegación en Asia, África y América Latina',
        details:
          'EE.UU. y la URSS financiaron y armaron a sus aliados en decenas de conflictos regionales: Corea (1950-53), Vietnam (1955-75), Angola (1975-2002), Afganistán (1979-89), Nicaragua (1979-90). Estas guerras causaron millones de muertes y devastaron a los países del Tercer Mundo que sirvieron de escenario de la rivalidad de las superpotencias.',
      },
      {
        id: 'e4',
        text: 'Carrera espacial: del Sputnik a la Luna',
        details:
          'La rivalidad tecnológica se trasladó al espacio. La URSS lideró inicialmente con el Sputnik (1957), Laika (1957), Gagarin (1961) y la primera caminata espacial (1965). EE.UU. llegó a la Luna el 20 de julio de 1969 con el Apolo 11, reivindicando su superioridad tecnológica y simbólica.',
      },
    ],
    longTermEffects: [
      {
        id: 'le1',
        text: 'EE.UU. como única superpotencia y el orden unipolar (1991–2000s)',
        details:
          'La disolución de la URSS dejó a EE.UU. como única superpotencia mundial, inaugurando un orden internacional unipolar. La OTAN se expandió hacia el este incorporando a los antiguos países comunistas. EE.UU. lideró una política exterior intervencionista (Golfo Pérsico, Yugoslavia, Iraq, Afganistán) sin el contrapeso soviético.',
      },
      {
        id: 'le2',
        text: 'Emergencia de la Rusia postsoviética y nuevas tensiones geopolíticas',
        details:
          'La disolución de la URSS creó 15 nuevos Estados. Rusia, heredera del arsenal nuclear soviético, vivió una caótica transición hacia el capitalismo bajo Yeltsin. La expansión de la OTAN hacia el este fue percibida por Rusia como una amenaza, generando tensiones que resurgieron en el siglo XXI con las crisis de Georgia (2008) y Ucrania (2014 y 2022).',
      },
      {
        id: 'le3',
        text: 'Difusión global del modelo democrático-liberal y la economía de mercado',
        details:
          'La victoria occidental en la Guerra Fría supuso la expansión de la democracia liberal y el capitalismo como modelos dominantes a escala global. Los países de Europa del Este adoptaron democracias multipartidistas y economías de mercado e ingresaron en la UE y la OTAN. Francis Fukuyama habló del "fin de la Historia" como triunfo definitivo de la democracia liberal, aunque el auge de autoritarismos en el siglo XXI puso en cuestión esa tesis.',
      },
    ],
  },
};
