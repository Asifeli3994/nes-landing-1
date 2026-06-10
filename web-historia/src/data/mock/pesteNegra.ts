import type { Topic } from '../../types';

export const pesteNegra: Topic = {
  id: 'peste-negra',
  title: 'La Peste Negra',
  subtitle: 'La gran mortandad que transformó la Europa medieval',
  block: 'La Edad Media',
  period: '1347 – 1353',
  description:
    'La Peste Negra fue la pandemia de peste bubónica que asoló Europa entre 1347 y 1353, matando entre un tercio y la mitad de su población total. Llegada desde Asia Central a través del comercio marítimo mediterráneo, devastó ciudades y campos, desestructuró el sistema feudal y provocó transformaciones sociales, religiosas y económicas de largo alcance que aceleraron el fin de la Edad Media.',
  tags: ['Peste Negra', 'Edad Media', 'Epidemia', 'Europa', 'Sociedad'],

  timeline: [
    {
      id: 'origen-asia',
      date: '1330 – 1346',
      title: 'Origen en Asia Central',
      description:
        'La epidemia se origina en Asia Central, posiblemente en las estepas de Asia Central, y se extiende por las rutas comerciales de la Ruta de la Seda hacia Occidente.',
      type: 'social',
      details:
        'Los historiadores sitúan el origen de la pandemia en las poblaciones de roedores silvestres de Asia Central (actual Kirguistán o China noroccidental). La bacteria Yersinia pestis circulaba entre marmotas y ratas. Las crónicas mongolas del período registran una gran mortandad. El comercio por la Ruta de la Seda y los movimientos de tropas facilitaron su expansión westward.',
    },
    {
      id: 'caffa-crimea',
      date: '1346',
      title: 'Asedio de Caffa: La Plaga llega a Europa',
      description:
        'Los mongoles asedian la ciudad genovesa de Caffa (Crimea) y catapultan cadáveres infectados sobre sus murallas, desencadenando el contagio en los barcos que huyen hacia Italia.',
      type: 'military',
      details:
        'La ciudad portuaria genovesa de Caffa (actual Feodosia, Ucrania) fue asediada por los mongoles de la Horda de Oro. Según el notario genovés Gabriele de Mussis, los mongoles usaron sus trebuchets para lanzar cuerpos de apestados sobre las murallas. Los genoveses que huyeron en barco llevaron la enfermedad consigo al Mediterráneo occidental.',
    },
    {
      id: 'llegada-sicilia',
      date: 'Oct 1347',
      title: 'Llegada a Messina (Sicilia)',
      description:
        'Doce barcos genoveses procedentes de Caffa atracan en Messina con la mayoría de sus tripulantes muertos o gravemente enfermos. La plaga entra en Europa occidental.',
      type: 'social',
      details:
        'En octubre de 1347, doce galeras genovesas atracaron en el puerto de Messina. Los habitantes quedaron horrorizados: la mayoría de los marineros estaban muertos y los vivos presentaban bubones negros supurantes en las axilas e ingles, fiebre altísima y delirio. Las autoridades ordenaron la salida inmediata de los barcos del puerto, pero ya era demasiado tarde: la epidemia había saltado a tierra.',
    },
    {
      id: 'expansion-italia',
      date: '1347 – 1348',
      title: 'Expansión por Italia',
      description:
        'La plaga se extiende rápidamente por las ciudades italianas: Messina, Catania, Palermo, Génova, Pisa, Florencia, Venecia. Algunas ciudades pierden la mitad de su población.',
      type: 'social',
      details:
        'Florencia perdió entre 45.000 y 65.000 habitantes (un 50–60% de su población). Giovanni Boccaccio, testigo ocular, describió el horror en el prólogo del Decamerón: montones de cadáveres en las calles, el colapso de las normas sociales, familias que abandonaban a sus enfermos. Venecia instituyó el primer sistema de cuarentena formal de la historia (40 días de aislamiento para los barcos).',
    },
    {
      id: 'expansion-europa',
      date: '1348 – 1349',
      title: 'Expansión por el resto de Europa',
      description:
        'La epidemia se extiende por Francia, España, Inglaterra, Alemania y Europa central. París pierde 50.000 personas; Inglaterra entre un tercio y la mitad de su población.',
      type: 'social',
      details:
        'La plaga cruzó los Alpes hacia Francia a comienzos de 1348 y llegó a París en verano. De Francia saltó a la Península Ibérica (murió el rey Alfonso XI de Castilla en 1350) y a Inglaterra, donde llegó en agosto de 1348 por el puerto de Melcombe Regis. El invierno no detuvo la epidemia en el norte de Europa. En algunos monasterios murió el 90% de los religiosos.',
    },
    {
      id: 'persecucion-judios',
      date: '1348 – 1349',
      title: 'Persecución de los Judíos',
      description:
        'Se extienden rumores de que los judíos han envenenado los pozos. Se producen masacres de comunidades judías en toda Europa, especialmente en Alemania y Francia.',
      type: 'social',
      details:
        'La búsqueda de un culpable convirtió a las comunidades judías en chivos expiatorios. Bajo tortura, algunos judíos confesaron haber envenenado pozos (confusiones falsas). Se produjeron pogromos masivos: en Estrasburgo (febrero 1349) fueron quemados unos 2.000 judíos; en Maguncia, Colonia y otras ciudades del Rin, comunidades enteras fueron exterminadas. El papa Clemente VI condenó estas persecuciones, pero sus decretos fueron ignorados.',
    },
    {
      id: 'flagelantes',
      date: '1348 – 1350',
      title: 'Movimiento de los Flagelantes',
      description:
        'Grupos de penitentes recorren Europa azotándose en público para expiar los pecados de la humanidad e implorar el fin de la epidemia.',
      type: 'social',
      details:
        'Las procesiones de flagelantes recorrían las ciudades y pueblos de Europa central: grupos de 50 a 500 hombres que se golpeaban con látigos con puntas metálicas mientras cantaban himnos penitenciales. El movimiento tenía carácter autónomo y llegó a desafiar la autoridad eclesiástica. El papa Clemente VI los condenó en 1349 y los reyes prohibieron sus procesiones, reprimiendo violentamente el movimiento.',
    },
    {
      id: 'escasez-clero',
      date: '1348 – 1351',
      title: 'Crisis del Clero y la Iglesia',
      description:
        'La mortalidad del clero, que atendía a los moribundos, fue devastadora. La Iglesia ordenó sacerdotes sin la debida formación, dañando su autoridad espiritual.',
      type: 'cultural',
      details:
        'La Iglesia perdió entre el 30% y el 50% de su clero. Para cubrir las vacantes, los obispos ordenaron sacerdotes con escasa formación teológica y de dudosa moralidad. La incapacidad de la Iglesia para explicar el desastre o detenerlo con oraciones erosionó su credibilidad espiritual y contribuyó a largo plazo a las corrientes de reforma religiosa del siglo XV.',
    },
    {
      id: 'crisis-feudal',
      date: '1349 – 1355',
      title: 'Colapso del Sistema Feudal',
      description:
        'La escasez masiva de mano de obra campesina trastorna las relaciones feudales: los campesinos supervivientes exigen mejores condiciones y libertad de movimiento.',
      type: 'social',
      details:
        'Con un tercio o más de la población muerta, los campesinos supervivientes tenían un poder de negociación sin precedentes. Podían exigir salarios más altos, mejores condiciones o simplemente marcharse a otra señoría. Los señores feudales intentaron contrarrestar esto con leyes de trabajo forzoso (como el Estatuto de Trabajadores inglés de 1351), pero la lógica económica favorecía a los trabajadores.',
    },
    {
      id: 'fin-primera-ola',
      date: '1353',
      title: 'Fin de la Primera Ola de la Epidemia',
      description:
        'La primera y más mortífera ola de la epidemia remite en la mayoría de Europa hacia 1353, aunque la peste regresará en oleadas periódicas durante los siglos XIV y XV.',
      type: 'social',
      details:
        'La epidemia no desapareció por completo: regresó en 1361 (la "Plaga de los Niños", que golpeó especialmente a los nacidos después de 1347), en 1369, 1374 y en oleadas sucesivas hasta el siglo XVIII. La peste endémica mantuvo la población europea por debajo de los niveles anteriores a 1347 durante más de un siglo.',
    },
  ],

  flashcards: [
    {
      id: 'fc-yersinia-pestis',
      front: '¿Qué bacteria causó la Peste Negra?',
      back: 'La Peste Negra fue causada por la bacteria Yersinia pestis, identificada en 1894 por Alexandre Yersin. Se transmitía principalmente a través de la picadura de pulgas infectadas que vivían en ratas negras (Rattus rattus). También podía propagarse por vía respiratoria en su forma pneumónica, la más letal.',
      category: 'concept',
    },
    {
      id: 'fc-tipos-peste',
      front: 'Tipos de Peste Negra',
      back: 'Existían tres formas: 1) Bubónica (la más común): bubones en axilas, ingles y cuello, fiebre alta, mortalidad 30–75%; 2) Septicémica: infección de la sangre, manchas negras en la piel (el "negro" del nombre), casi siempre mortal; 3) Pneumónica: infección pulmonar transmisible por el aire, mortalidad cercana al 100%.',
      category: 'concept',
    },
    {
      id: 'fc-mortalidad',
      front: '¿Cuánta población europea mató la Peste Negra?',
      back: 'Las estimaciones modernas calculan que la Peste Negra mató entre el 30% y el 50% de la población europea entre 1347 y 1353, es decir, entre 25 y 50 millones de personas. Algunas regiones sufrieron más: Florencia perdió el 50–60% de su población; ciertas zonas rurales quedaron casi despobladas.',
      category: 'concept',
    },
    {
      id: 'fc-boccaccio',
      front: 'Giovanni Boccaccio y el Decamerón',
      back: 'Giovanni Boccaccio (1313–1375) fue testigo de la Peste Negra en Florencia. En el prólogo del Decamerón (1348–1353) describió con detalle el horror de la epidemia: cadáveres en las calles, el colapso de los vínculos sociales y familiares, y la mezcla de desesperación y desenfreno. La obra narra cómo un grupo de jóvenes huye de la ciudad y se cuenta cuentos para distraerse.',
      category: 'person',
    },
    {
      id: 'fc-flagelantes',
      front: '¿Quiénes eran los Flagelantes?',
      back: 'Los Flagelantes fueron un movimiento penitencial que recorrió Europa central entre 1348 y 1350. Grupos de hombres (50 a 500) se azotaban públicamente con látigos de puntas metálicas como penitencia colectiva para aplacar la ira divina. El papa Clemente VI los condenó en 1349 y los monarcas los reprimieron, pero expresaban la desesperación espiritual de la época.',
      category: 'movement',
    },
    {
      id: 'fc-cuarentena',
      front: '¿De dónde viene la palabra "cuarentena"?',
      back: 'La palabra "cuarentena" deriva del veneciano quarantina giorni, "cuarenta días". Venecia instituyó en 1377 el sistema formal de cuarentena: los barcos procedentes de zonas infectadas debían anclar durante 40 días antes de desembarcar. El número 40 tenía resonancias bíblicas (40 días en el desierto, diluvio). Ragusa (Dubrovnik) había establecido un sistema similar en 1377.',
      category: 'concept',
    },
    {
      id: 'fc-danza-macabra',
      front: '¿Qué fue la Danza Macabra (Danse Macabre)?',
      back: 'La Danza Macabra fue un género artístico surgido tras la Peste Negra que representaba a la Muerte (como esqueleto) llevándose a personajes de todos los estamentos sociales (papa, rey, obispo, campesino) en una danza igualitaria. Expresaba la obsesión medieval por la muerte y la vanidad de las distinciones sociales ante ella. Se reprodujo en frescos, grabados y obras literarias del siglo XIV y XV.',
      category: 'concept',
    },
    {
      id: 'fc-escasez-mano-obra',
      front: 'Consecuencias económicas de la Peste Negra',
      back: 'La mortalidad masiva provocó una grave escasez de mano de obra campesina. Los trabajadores supervivientes pudieron exigir salarios más altos y mejores condiciones. Los señores feudales intentaron contrarrestarlo con leyes de trabajo forzoso (Estatuto de Trabajadores inglés, 1351), pero a largo plazo el poder del campesinado aumentó, acelerando el declive del feudalismo.',
      category: 'concept',
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: '¿Por qué puerto siciliano entró la Peste Negra en Europa occidental en octubre de 1347?',
      type: 'multiple-choice',
      options: ['Palermo', 'Catania', 'Messina', 'Siracusa'],
      correctIndex: 2,
      explanation:
        'La Peste Negra llegó a Europa occidental en octubre de 1347 cuando doce galeras genovesas procedentes de Caffa (Crimea) atracaron en Messina. La mayoría de sus tripulantes estaban muertos o moribundos con bubones negros supurantes. Las autoridades ordenaron que los barcos abandonasen el puerto, pero la plaga ya había saltado a tierra.',
    },
    {
      id: 'q2',
      question: 'La Peste Negra mató aproximadamente al 10% de la población europea.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. Las estimaciones modernas calculan que la Peste Negra mató entre el 30% y el 50% de la población europea entre 1347 y 1353, es decir, entre 25 y 50 millones de personas. Fue la catástrofe demográfica más grave de la historia de Europa hasta entonces.',
    },
    {
      id: 'q3',
      question: '¿Cuál fue la causa principal por la que se culpó a los judíos de propagar la Peste Negra?',
      type: 'multiple-choice',
      options: [
        'Porque tenían mayor mortalidad por la enfermedad',
        'Porque sus médicos no sabían curarla',
        'Por rumores de que habían envenenado los pozos, respaldados por confesiones obtenidas bajo tortura',
        'Porque vivían cerca de los puertos donde llegaron los barcos infectados',
      ],
      correctIndex: 2,
      explanation:
        'Se extendió el rumor de que los judíos habían envenenado los pozos, y bajo tortura algunos confesaron (confesiones falsas). Esto desencadenó una ola de pogromos: en Estrasburgo (1349) quemaron a unos 2.000 judíos, y se cometieron masacres en Maguncia, Colonia y otras ciudades del Rin. El papa Clemente VI condenó estas persecuciones sin éxito.',
    },
    {
      id: 'q4',
      question: '¿Qué eran los Flagelantes y cuál fue la reacción de la Iglesia?',
      type: 'multiple-choice',
      options: [
        'Médicos que usaban azotes como remedio; la Iglesia los apoyó',
        'Penitentes que se azotaban públicamente; el papa los condenó en 1349',
        'Monjes que cuidaban a los enfermos; la Iglesia los canonizó',
        'Predicadores que anunciaban el fin del mundo; la Iglesia los ignoró',
      ],
      correctIndex: 1,
      explanation:
        'Los Flagelantes eran grupos de penitentes que recorrían Europa azotándose públicamente con látigos de puntas metálicas para expiar los pecados de la humanidad. El papa Clemente VI los condenó en 1349 porque su movimiento era autónomo y desafiaba la autoridad eclesiástica, y los monarcas procedieron a reprimirlos.',
    },
    {
      id: 'q5',
      question: '¿Qué ciudad instituyó el primer sistema formal de cuarentena de la historia como medida contra la plaga?',
      type: 'multiple-choice',
      options: ['Florencia', 'Génova', 'Venecia', 'Barcelona'],
      correctIndex: 2,
      explanation:
        'Venecia instituyó el sistema de cuarentena: los barcos procedentes de zonas infectadas debían anclar durante 40 días (quarantina giorni) antes de desembarcar. De esta práctica deriva la palabra "cuarentena". Ragusa (Dubrovnik) estableció una medida similar en 1377.',
    },
    {
      id: 'q6',
      question: 'La Peste Negra contribuyó al debilitamiento del sistema feudal porque aumentó la disponibilidad de mano de obra campesina.',
      type: 'true-false',
      options: ['Verdadero', 'Falso'],
      correctIndex: 1,
      explanation:
        'FALSO. La Peste Negra redujo drásticamente la mano de obra disponible. La escasez de campesinos fue lo que fortaleció su posición negociadora: los supervivientes podían exigir mejores condiciones o marcharse a otra señoría. Fue la escasez (no la abundancia) de trabajadores lo que erosionó el sistema feudal.',
    },
  ],

  glossary: [
    {
      term: 'Peste bubónica',
      definition:
        'Forma más común de la Peste Negra, causada por la bacteria Yersinia pestis transmitida por la picadura de pulgas de rata. Sus síntomas característicos son los bubones: inflamaciones dolorosas de los ganglios linfáticos en ingles, axilas y cuello, acompañadas de fiebre alta, vómitos y delirio. Sin tratamiento, tiene una mortalidad del 30–75%.',
      type: 'concept',
    },
    {
      term: 'Yersinia pestis',
      definition:
        'Bacteria gramnegativa responsable de la Peste Negra. Fue identificada en 1894 por el médico franco-suizo Alexandre Yersin durante una epidemia en Hong Kong. Vive en roedores (reservorio natural) y se transmite a los humanos a través de la picadura de pulgas infectadas.',
      type: 'concept',
    },
    {
      term: 'Flagelantes',
      definition:
        'Movimiento penitencial surgido durante la Peste Negra en Europa central (1348–1350). Sus miembros recorrían las ciudades en procesión, azotándose públicamente para expiar los pecados de la humanidad e implorar el fin de la epidemia. El papa Clemente VI los condenó en 1349 por su autonomía respecto a la jerarquía eclesiástica.',
      type: 'movement',
    },
    {
      term: 'Cuarentena',
      definition:
        'Período de aislamiento preventivo impuesto a personas, barcos o mercancías procedentes de zonas con enfermedades infecciosas. El término deriva del veneciano quarantina giorni (40 días). Venecia instituyó el primer sistema de cuarentena formal como respuesta a la Peste Negra, estableciendo una isla de aislamiento (lazareto).',
      type: 'concept',
    },
    {
      term: 'Danza Macabra',
      definition:
        'Género artístico y literario surgido tras la Peste Negra que representa a la Muerte personificada (como esqueleto) llevándose en una danza a personas de todos los estamentos sociales, desde el papa al campesino. Expresaba la obsesión medieval por la muerte y la igualdad de todos ante ella, siendo un testimonio del impacto psicológico de la epidemia.',
      type: 'concept',
    },
    {
      term: 'Decamerón',
      definition:
        'Obra literaria de Giovanni Boccaccio (1348–1353) ambientada en la Florencia de la Peste Negra. En su prólogo describe la epidemia con detalle descarnado. La obra narra cómo diez jóvenes huyen de la ciudad y se cuentan cien novelas durante diez días. Es un monumento literario del siglo XIV y uno de los testimonios más vívidos de la Peste Negra.',
      type: 'concept',
    },
    {
      term: 'Crisis del feudalismo',
      definition:
        'Proceso de desintegración del sistema feudal medieval acelerado por la Peste Negra. La mortalidad masiva causó una grave escasez de mano de obra campesina, que empoderó a los supervivientes para exigir mejores condiciones. Los señores feudales respondieron con leyes coercitivas, pero la presión económica y social llevó a revueltas campesinas (Jacquerie francesa 1358, Revuelta de los Campesinos inglesa 1381) que erosionaron las bases del feudalismo.',
      type: 'concept',
    },
  ],

  causeEffect: {
    causes: [
      {
        id: 'c1',
        text: 'Expansión de la bacteria Yersinia pestis desde Asia Central por las rutas comerciales',
        details:
          'La bacteria circulaba endémicamente en las poblaciones de roedores silvestres de Asia Central. El comercio por la Ruta de la Seda, los movimientos de tropas mongoles y la actividad de los puertos del Mar Negro facilitaron su expansión hacia Europa occidental.',
      },
      {
        id: 'c2',
        text: 'Densidad urbana y condiciones higiénicas precarias en las ciudades medievales',
        details:
          'Las ciudades medievales estaban superpobladas, carecían de sistemas de alcantarillado y convivían con ratas negras (vector principal de la enfermedad). El almacenamiento de grano en los hogares atraía a las ratas y, con ellas, a las pulgas infectadas. Las condiciones ideales para una pandemia.',
      },
      {
        id: 'c3',
        text: 'Integración comercial del Mediterráneo y los mercados europeos',
        details:
          'El siglo XIII y principios del XIV vieron una expansión sin precedentes del comercio europeo. La densa red de rutas marítimas y terrestres que conectaba los puertos del Mar Negro con Venecia, Génova y los mercados del norte de Europa fue también la autopista de la propagación de la epidemia.',
      },
      {
        id: 'c4',
        text: 'Desnutrición y debilitamiento inmunológico por el Gran Hambre (1315–1322)',
        details:
          'Europa había sufrido el Gran Hambre de 1315–1322, que causó millones de muertes y debilitó a la población superviviente. La malnutrición generalizada redujo la resistencia inmunológica de las personas, haciéndolas más vulnerables a enfermedades infecciosas como la peste cuando llegó a mediados del siglo XIV.',
      },
    ],
    event: {
      title: 'La Peste Negra',
      date: '1347 – 1353',
      description:
        'La pandemia de peste bubónica devastó Europa entre 1347 y 1353, matando entre el 30% y el 50% de la población en la primera oleada, con mortalidades locales que llegaron al 60–70% en algunas ciudades y regiones.',
    },
    shortTermEffects: [
      {
        id: 'e1',
        text: 'Mortandad masiva: entre 25 y 50 millones de muertos en Europa',
        details:
          'La primera oleada (1347–1353) mató entre un tercio y la mitad de la población europea. Ciudades como Florencia, Hamburgo o Aviñón perdieron entre el 50% y el 60% de sus habitantes. Las aldeas rurales fueron abandonadas (pueblos fantasma o deserted villages).',
      },
      {
        id: 'e2',
        text: 'Persecuciones antisemitas y masacres de comunidades judías',
        details:
          'El miedo y la búsqueda de culpables desencadenó pogromos masivos contra las comunidades judías en toda Europa, especialmente en el valle del Rin. Muchos judíos huyeron hacia Polonia y Lituania, cuyo rey Casimiro III el Grande los acogió, desplazando el centro de la diáspora asquenazí hacia Europa oriental.',
      },
      {
        id: 'e3',
        text: 'Crisis de autoridad de la Iglesia y del clero',
        details:
          'La Iglesia perdió entre el 30% y el 50% de su clero. La incapacidad de la religión para explicar o detener la epidemia erosionó la confianza en la institución eclesiástica. Para cubrir las vacantes, se ordenaron sacerdotes sin formación adecuada, dañando la calidad espiritual del clero.',
      },
      {
        id: 'e4',
        text: 'Escasez de mano de obra y empoderamiento del campesinado',
        details:
          'Con un tercio de la población muerta, los trabajadores supervivientes podían exigir salarios más altos y mejores condiciones. Las leyes de trabajo forzoso promulgadas por los señores (Estatuto de Trabajadores, 1351) no pudieron contener la transformación de las relaciones laborales.',
      },
    ],
    longTermEffects: [
      {
        id: 'le1',
        text: 'Aceleración del declive del sistema feudal y la servidumbre',
        details:
          'La escasez persistente de mano de obra agrícola fue minando las bases económicas del feudalismo. A lo largo del siglo XV, la servidumbre desapareció en la mayor parte de Europa occidental. Los campesinos conquistaron mayor libertad personal y de movimiento, transformando las relaciones campo-ciudad.',
      },
      {
        id: 'le2',
        text: 'Transformación de la mentalidad religiosa y artística: obsesión por la muerte',
        details:
          'La experiencia traumática de la epidemia transformó profundamente la sensibilidad religiosa y artística medieval. La Danza Macabra, las representaciones realistas de cadáveres (transis), el género del ars moriendi (arte de morir bien) y una mayor devoción personal e individualista fueron consecuencias culturales directas de la Peste.',
      },
      {
        id: 'le3',
        text: 'Impulso indirecto al Renacimiento y la Reforma Protestante',
        details:
          'El debilitamiento de la autoridad eclesiástica y el fortalecimiento del individualismo que siguieron a la Peste contribuyeron al ambiente intelectual que permitió el Humanismo renacentista y, a más largo plazo, la Reforma Protestante del siglo XVI, que cuestionó la mediación de la Iglesia entre Dios y los fieles.',
      },
    ],
  },
};
