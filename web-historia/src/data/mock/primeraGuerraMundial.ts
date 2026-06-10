import type { Topic } from '../../types';

export const primeraGuerraMundial: Topic = {
  id: 'primera-guerra-mundial',
  title: 'La Primera Guerra Mundial',
  subtitle: 'La Gran Guerra (1914–1918)',
  block: 'La Edad Contemporánea',
  period: '1914 – 1918',
  description:
    'Conflicto bélico global que enfrentó a las principales potencias europeas en dos bloques: la Triple Entente (Francia, Reino Unido, Rusia) y las Potencias Centrales (Alemania, Austria-Hungría, Imperio Otomano). Fue el conflicto más devastador hasta entonces conocido.',
  tags: ['Guerra', 'Siglo XX', 'Europa', 'Imperialismo', 'Trincheras'],

  timeline: [
    {
      id: 'asesinato-francisco-fernando',
      date: '28 Jun 1914',
      title: 'Asesinato del Archiduque Francisco Fernando',
      description:
        'El heredero al trono austro-húngaro es asesinado en Sarajevo por el nacionalista serbio Gavrilo Princip.',
      type: 'political',
      details:
        'Gavrilo Princip, miembro de la organización secreta "La Mano Negra", disparó al Archiduque Francisco Fernando y su esposa Sofía durante una visita oficial a Sarajevo. Este magnicidio fue el detonante inmediato de la guerra, aunque las causas profundas llevaban décadas gestándose.',
    },
    {
      id: 'ultimatum-austria-serbia',
      date: 'Jul 1914',
      title: 'Ultimátum austro-húngaro a Serbia',
      description:
        'Austria-Hungría presenta un durísimo ultimátum a Serbia con 10 condiciones. Al ser rechazado parcialmente, declara la guerra.',
      type: 'political',
    },
    {
      id: 'declaraciones-guerra',
      date: 'Ago 1914',
      title: 'Cadena de declaraciones de guerra',
      description:
        'En pocos días el conflicto se extiende: Alemania declara la guerra a Rusia y Francia; el Reino Unido entra en guerra tras la invasión alemana de Bélgica.',
      type: 'military',
      details:
        'El sistema de alianzas convirtió el conflicto austro-serbio en una guerra europea en cuestión de días. Las alianzas militares (Triple Entente vs. Triple Alianza), los planes de movilización automáticos y la rivalidad imperial aceleraron la escalada.',
    },
    {
      id: 'plan-schlieffen',
      date: 'Ago–Sep 1914',
      title: 'Plan Schlieffen y Batalla del Marne',
      description:
        'Alemania invade Bélgica y Francia siguiendo el Plan Schlieffen. La Batalla del Marne detiene el avance alemán y frustra la guerra relámpago.',
      type: 'military',
      details:
        'El Plan Schlieffen preveía una guerra de dos frentes: una victoria rápida en el oeste (6 semanas) antes de volverse contra Rusia. La resistencia francesa y el contraataque en el Marne frustraron el plan, iniciando la guerra de posiciones.',
    },
    {
      id: 'guerra-trincheras',
      date: '1914 – 1917',
      title: 'Guerra de Trincheras en el Frente Occidental',
      description:
        'El frente se estabiliza en más de 700 km de trincheras. Millones de soldados viven en condiciones inhumanas con apenas avances territoriales.',
      type: 'military',
      details:
        'Las trincheras crearon un frente estático desde el Canal de la Mancha hasta Suiza. Batallas como Verdún (700.000 bajas) y el Somme (1 millón de bajas) mostraron la futilidad de los ataques frontales frente a ametralladoras y artillería.',
    },
    {
      id: 'batalla-verdu',
      date: 'Feb–Dic 1916',
      title: 'Batalla de Verdún',
      description:
        'La más larga de la guerra. Alemania intenta "sangrar" a Francia. Más de 700.000 bajas entre ambos bandos en 10 meses de combate.',
      type: 'military',
    },
    {
      id: 'eeuu-guerra',
      date: 'Abr 1917',
      title: 'Estados Unidos entra en la guerra',
      description:
        'Tras la guerra submarina alemana sin restricciones y el Telegrama Zimmermann, EE.UU. declara la guerra a Alemania.',
      type: 'political',
      details:
        'El presidente Wilson justificó la entrada con el lema "hacer el mundo seguro para la democracia". La llegada de 2 millones de soldados americanos inclinó definitivamente la balanza a favor de la Entente.',
    },
    {
      id: 'revolucion-rusa',
      date: '1917',
      title: 'Revolución Rusa y salida de Rusia',
      description:
        'La Revolución Bolchevique lleva a Rusia a firmar la paz por separado (Tratado de Brest-Litovsk), liberando tropas alemanas para el frente occidental.',
      type: 'political',
    },
    {
      id: 'armisticio',
      date: '11 Nov 1918',
      title: 'Armisticio: Fin de la Gran Guerra',
      description:
        'A las 11:00 del 11 de noviembre de 1918 entran en vigor los armisticios. Alemania capitula. La guerra ha causado más de 20 millones de muertos.',
      type: 'military',
      details:
        'El armisticio fue firmado en un vagón de tren en el bosque de Compiègne. La guerra dejó 20 millones de muertos y 21 millones de heridos. El mapa de Europa quedó completamente transformado con la desaparición de cuatro imperios.',
    },
    {
      id: 'tratado-versalles',
      date: 'Jun 1919',
      title: 'Tratado de Versalles',
      description:
        'El tratado de paz impone duras condiciones a Alemania: pérdida de territorios, pago de reparaciones y la "cláusula de culpabilidad".',
      type: 'political',
      details:
        'El Artículo 231 (cláusula de culpabilidad de guerra) responsabilizaba a Alemania de todos los daños causados. Las reparaciones millonarias y la humillación nacional alimentaron el resentimiento que llevaría al ascenso del nazismo.',
    },
  ],

  flashcards: [
    {
      id: 'fc-main',
      front: 'Las causas de la IGM: M.A.I.N.',
      back: 'M – Militarismo (carrera armamentística)\nA – Alianzas (Triple Entente vs Triple Alianza)\nI – Imperialismo (rivalidad colonial)\nN – Nacionalismo (tensiones étnicas y territoriales)',
      category: 'concept',
    },
    {
      id: 'fc-francisco-fernando',
      front: 'Archiduque Francisco Fernando',
      back: 'Heredero al trono del Imperio Austro-Húngaro. Su asesinato en Sarajevo el 28 de junio de 1914 por Gavrilo Princip fue el detonante inmediato de la Primera Guerra Mundial.',
      category: 'person',
    },
    {
      id: 'fc-kaiser',
      front: 'Kaiser Guillermo II',
      back: 'Emperador alemán (1888–1918). Impulsó la política de "Weltpolitik" (política mundial) y la expansión militar alemana. Abdicó en noviembre de 1918 al final de la guerra.',
      category: 'person',
    },
    {
      id: 'fc-wilson',
      front: 'Los 14 Puntos de Wilson',
      back: 'Propuesta de paz del presidente estadounidense Woodrow Wilson (enero 1918): libre determinación de los pueblos, reducción de armamentos, libertad de comercio y creación de la Sociedad de Naciones.',
      category: 'concept',
    },
    {
      id: 'fc-triple-entente',
      front: 'Triple Entente',
      back: 'Alianza formada por Francia, Reino Unido y Rusia. Opuesta a las Potencias Centrales (Alemania, Austria-Hungría e Imperio Otomano). Italia, inicialmente en la Triple Alianza, se unió a la Entente en 1915.',
      category: 'concept',
    },
    {
      id: 'fc-armisticio',
      front: '¿Cuándo terminó la Primera Guerra Mundial?',
      back: '11 de noviembre de 1918 a las 11:00 horas. El armisticio fue firmado en el bosque de Compiègne (Francia). Causó más de 20 millones de muertos.',
      category: 'date',
    },
    {
      id: 'fc-versalles',
      front: 'Tratado de Versalles (1919)',
      back: 'Tratado de paz que impuso duras condiciones a Alemania: pérdida del 13% de su territorio, pago de 132.000 millones de marcos en reparaciones y la "cláusula de culpabilidad" (art. 231). Semilla de la IIGM.',
      category: 'event',
    },
    {
      id: 'fc-verdun',
      front: 'Batalla de Verdún (1916)',
      back: 'La batalla más larga de la guerra (febrero–diciembre 1916). Alemania intentó "sangrar" a Francia. Resultado: más de 700.000 bajas entre ambos bandos sin variación significativa del frente.',
      category: 'event',
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: '¿Quién asesinó al Archiduque Francisco Fernando?',
      type: 'multiple-choice',
      options: ['Franz Kafka', 'Gavrilo Princip', 'Kaiser Guillermo II', 'Woodrow Wilson'],
      correctIndex: 1,
      explanation:
        'Gavrilo Princip, miembro de la organización nacionalista serbia "La Mano Negra", asesinó al Archiduque Francisco Fernando en Sarajevo el 28 de junio de 1914.',
    },
    {
      id: 'q2',
      question: 'La Primera Guerra Mundial terminó en 1919 con la firma del Tratado de Versalles.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. La guerra terminó con el armisticio del 11 de noviembre de 1918. El Tratado de Versalles fue el tratado de paz firmado en 1919, pero no fue el fin del conflicto bélico.',
    },
    {
      id: 'q3',
      question: '¿Qué significan las siglas M.A.I.N. en el contexto de las causas de la IGM?',
      type: 'multiple-choice',
      options: [
        'Monarquía, Armamento, Imperialismo, Naciones',
        'Militarismo, Alianzas, Imperialismo, Nacionalismo',
        'Movilización, Acuerdos, Invasión, Neutralidad',
        'Mercantilismo, Acero, Industria, Nobleza',
      ],
      correctIndex: 1,
      explanation:
        'M.A.I.N. son las cuatro causas principales de la Primera Guerra Mundial: Militarismo (carrera armamentística), Alianzas (sistema de tratados), Imperialismo (rivalidad colonial) y Nacionalismo (tensiones étnicas).',
    },
    {
      id: 'q4',
      question: '¿En qué año declaró la guerra Estados Unidos a Alemania?',
      type: 'multiple-choice',
      options: ['1914', '1915', '1916', '1917'],
      correctIndex: 3,
      explanation:
        'EE.UU. declaró la guerra a Alemania en abril de 1917, tras la guerra submarina sin restricciones y el Telegrama Zimmermann (en el que Alemania proponía a México atacar a EE.UU. a cambio de territorios).',
    },
    {
      id: 'q5',
      question: '¿Qué artículo del Tratado de Versalles establecía la "culpabilidad" de Alemania?',
      type: 'multiple-choice',
      options: ['Artículo 1', 'Artículo 48', 'Artículo 231', 'Artículo 14'],
      correctIndex: 2,
      explanation:
        'El Artículo 231 (cláusula de culpabilidad de guerra) responsabilizaba a Alemania y sus aliados de todos los daños de la guerra, justificando las reparaciones económicas.',
    },
    {
      id: 'q6',
      question: 'La Revolución Rusa de 1917 hizo que Rusia siguiera combatiendo con más fuerza.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. La Revolución Bolchevique llevó a Rusia a negociar la paz con Alemania. El Tratado de Brest-Litovsk (marzo 1918) sacó a Rusia de la guerra, liberando tropas alemanas para el frente occidental.',
    },
  ],

  glossary: [
    {
      term: 'Imperialismo',
      definition:
        'Política de expansión territorial y económica de los países europeos sobre África, Asia y otras regiones. La rivalidad imperial fue una de las causas de la IGM.',
      type: 'concept',
    },
    {
      term: 'Militarismo',
      definition:
        'Ideología que exalta el poder militar y la guerra. La carrera armamentística entre las potencias europeas, especialmente entre el Reino Unido y Alemania, tensó las relaciones internacionales antes de 1914.',
      type: 'concept',
    },
    {
      term: 'Triple Entente',
      definition:
        'Alianza defensiva entre Francia, Reino Unido y Rusia. Se formó como respuesta a la Triple Alianza (Alemania, Austria-Hungría e Italia).',
      type: 'concept',
    },
    {
      term: 'Trincheras',
      definition:
        'Sistema de zanjas defensivas de más de 700 km en el frente occidental. Símbolo de la guerra de posiciones de la IGM, donde millones de soldados vivieron en condiciones inhumanas durante años.',
      type: 'concept',
    },
    {
      term: 'Armisticio',
      definition:
        'Acuerdo para cesar las hostilidades. El armisticio del 11 de noviembre de 1918 a las 11:00 puso fin a los combates de la Primera Guerra Mundial.',
      type: 'concept',
    },
    {
      term: 'Gavrilo Princip',
      definition:
        'Nacionalista bosnio de origen serbio (1894–1918), miembro de la organización "La Mano Negra". Asesinó al Archiduque Francisco Fernando en Sarajevo el 28 de junio de 1914.',
      type: 'person',
    },
    {
      term: 'Plan Schlieffen',
      definition:
        'Plan de guerra alemán que preveía una victoria rápida en el frente occidental (invadiendo Francia a través de Bélgica en 6 semanas) antes de volverse contra Rusia en el este. Fracasó en la Batalla del Marne.',
      type: 'concept',
    },
  ],

  causeEffect: {
    causes: [
      {
        id: 'c1',
        text: 'Militarismo y carrera armamentística',
        details:
          'Las principales potencias habían duplicado sus ejércitos y flotas en los años previos. Alemania y el Reino Unido protagonizaron una rivalidad naval intensa.',
      },
      {
        id: 'c2',
        text: 'Sistema de alianzas europeas',
        details:
          'La Triple Entente (Francia, UK, Rusia) vs la Triple Alianza (Alemania, Austria-Hungría, Italia) convirtieron cualquier conflicto local en una guerra continental.',
      },
      {
        id: 'c3',
        text: 'Imperialismo y rivalidad colonial',
        details:
          'Las potencias europeas competían por territorios en África y Asia. Crisis como la de Marruecos (1905, 1911) tensaron las relaciones.',
      },
      {
        id: 'c4',
        text: 'Nacionalismo explosivo en los Balcanes',
        details:
          'El declive del Imperio Otomano y el panslavismo generaron tensiones en los Balcanes. Serbia quería unificar a los eslavos del sur bajo su liderazgo.',
      },
      {
        id: 'c5',
        text: 'Asesinato de Francisco Fernando (detonante)',
        details:
          'El magnicidio del 28 de junio de 1914 fue el detonante inmediato que activó el sistema de alianzas y movilizaciones automáticas.',
      },
    ],
    event: {
      title: 'Primera Guerra Mundial',
      date: '1914 – 1918',
      description:
        'El primer conflicto de escala mundial causó más de 20 millones de muertos, destruyó cuatro imperios y rediseñó completamente el mapa de Europa.',
    },
    shortTermEffects: [
      {
        id: 'e1',
        text: 'Más de 20 millones de muertos',
        details:
          'Entre bajas militares y civiles, la guerra causó una mortandad sin precedentes, a la que se sumó la pandemia de gripe española (1918).',
      },
      {
        id: 'e2',
        text: 'Colapso de cuatro imperios',
        details:
          'Desaparecieron el Imperio Alemán, el Austro-Húngaro, el Otomano y el Imperio Ruso. Europa fue completamente redibujada.',
      },
      {
        id: 'e3',
        text: 'Revolución Rusa (1917)',
        details:
          'La guerra precipitó la caída del zar y la Revolución Bolchevique, que transformó Rusia en la URSS.',
      },
      {
        id: 'e4',
        text: 'Tratado de Versalles y humillación de Alemania',
        details:
          'Las duras condiciones impuestas a Alemania (reparaciones, pérdida territorial, cláusula de culpabilidad) generaron un profundo resentimiento.',
      },
    ],
    longTermEffects: [
      {
        id: 'le1',
        text: 'Ascenso del fascismo y el nazismo',
        details:
          'La crisis económica, el desempleo y la humillación del Tratado de Versalles favorecieron el auge de los movimientos fascistas en Italia y Alemania.',
      },
      {
        id: 'le2',
        text: 'Creación de la Sociedad de Naciones',
        details:
          'Propuesta por Wilson, fue el primer organismo internacional de seguridad colectiva. Su fracaso para prevenir nuevos conflictos llevó a la creación de la ONU en 1945.',
      },
      {
        id: 'le3',
        text: 'Semilla de la Segunda Guerra Mundial',
        details:
          'Las condiciones del Tratado de Versalles y la Gran Depresión de 1929 crearon el caldo de cultivo para el ascenso de Hitler y el estallido de la IIGM.',
      },
      {
        id: 'le4',
        text: 'Rediseño del mapa de Oriente Medio',
        details:
          'La desintegración del Imperio Otomano, los acuerdos Sykes-Picot y la Declaración Balfour sentaron las bases de los conflictos actuales en Oriente Medio.',
      },
    ],
  },
};
