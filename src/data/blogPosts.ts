export interface BlogPostBlock {
  type: 'p' | 'h2';
  text: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date?: string;
  author: {
    name: string;
    role: string;
  };
  body: BlogPostBlock[];
}

export const posts: BlogPost[] = [
  {
    slug: 'fomo-miedo-verano-adolescentes',
    title: 'FOMO, el miedo que crece en verano entre los jóvenes y adolescentes',
    excerpt: 'Un tipo de ansiedad social que provoca miedo a perderse algo, y que se agrava en verano con la exposición constante a la vida "ideal" de los demás en redes sociales.',
    category: 'Adolescentes',
    image: '/images/Adolescentes/650f146cbecf38efdac2ccfa_Blog - 2(1).png',
    date: '03/09/2021',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
    body: [
      { type: 'p', text: 'Estrés, ansiedad, irritabilidad, insomnio o fobias sociales son algunas de las nuevas preocupaciones que la población está experimentando dada la situación que ha dejado el coronavirus en la "nueva normalidad", que ya se ha convertido en el pan de cada día para toda la humanidad.' },
      { type: 'p', text: 'Sin embargo, estos síntomas no solo se dan en personas que han pasado la enfermedad. Son patologías aún más extendidas que el propio virus, ya que van acompañadas de la incertidumbre que rodea a la estabilidad económica, los cambios sociales y los propios problemas personales que cada individuo pueda tener. Concentradas principalmente en el periodo del confinamiento y prolongadas en los meses posteriores.' },
      { type: 'p', text: 'Los profesionales de la salud y la psicología llevan meses advirtiendo de que esto es uno de los problemas derivados de la pandemia, y no debe pasarse por alto. En este sentido, el profesor de la Facultad de Psicología y coordinador del PsiCall UCM, explica que personal sanitario, pacientes de coronavirus ya curados y personas con trastornos mentales anteriores a la llegada del covid-19 "tendrían más síntomas compatibles con el estrés postraumático".' },
      { type: 'p', text: 'Aunque la pandemia esté siendo un duro golpe para todos los grupos poblacionales, el psicólogo Adrián Garrido asegura que, mediante un estudio realizado por el Instituto Centta, las personas mayores poseen "más herramientas" y una mejor capacidad de adaptación a situaciones de inestabilidad general.' },
      { type: 'p', text: 'Mientras, por otro lado, también destacan en su investigación que las personas con hijos a su cargo presentan más cuadros de "ansiedad o miedo a la incertidumbre" por la responsabilidad que lleva su cuidado.' },
      { type: 'h2', text: 'Fobias sociales y la influencia de los medios en tiempos de pandemia' },
      { type: 'p', text: 'Los expertos se refieren al "síndrome de la cabaña", muy generalizado en las fases de la desescalada en España, al miedo que muchas personas experimentaron al tener que volver a salir a la calle tras pasar varios meses en cuarentena. Sin embargo, el experto de PsiCall UCM asegura que este cuadro patológico se manifiesta en "grados", es decir, al igual que la ansiedad, no se expresa de la misma manera en unas personas que en otras.' },
      { type: 'p', text: 'Adriana Esteban, también psicóloga del Instituto Centta, desvela a este medio que dicho síndrome ya se considera un problema social, dado que sus efectos "limitan seriamente la vida de las personas". Del mismo modo, reconoce que mucha gente sigue padeciéndolo, y advierte de que si este se prolonga en el tiempo aumentarían las probabilidades de desarrollar una depresión.' },
      { type: 'p', text: 'Asimismo, otros miedos más experimentados durante los últimos meses ha sido la "agorafobia" o miedo a permanecer en espacios públicos muy concurridos o el estrés que pueda generar relacionarse de forma privada con conocidos, amigos o familiares. A esto se suma el propio miedo al futuro, el "qué pasará", que al mismo tiempo se ve condicionado por el temor al virus, aún presente.' },
      { type: 'p', text: 'Por otro lado, tanto los medios de comunicación como las redes sociales han jugado un papel primordial durante este año a la hora de informar sobre la última hora relacionada con el virus, a nivel nacional y mundial. No obstante, los psicólogos alertan que la sobreexposición a tanta información puede resultar dañina para la propia salud mental, y recuerdan la importancia de consultar fuentes contrastadas e informaciones oficiales acerca del virus para mayor seguridad.' },
      { type: 'p', text: 'Múltiples programas de televisión, en principio dedicados al entretenimiento y el ocio, rediseñaron sus formatos durante la cuarentena obligatoria en España para ofrecer opiniones de expertos y otros datos relacionados con la pandemia, generando contradicción de puntos de vista en la audiencia.' },
      { type: 'p', text: 'Los expertos de la psicología consultados por este medio se apoyan en un estudio estadounidense que analizó la cotidianidad y consumo televisivo de las personas durante el confinamiento, que demostró que dicha exposición provocó altos niveles de depresión.' },
      { type: 'h2', text: 'La importancia de la conexión entre la mente y el cuerpo' },
      { type: 'p', text: 'Todos los pensamientos y sensaciones que una persona puede sentir siempre acaban teniendo algún efecto a nivel físico, es por ello que la ansiedad, el estrés o la incertidumbre experimentados por culpa del virus, a pesar de no haberlo padecido, han terminado por pasar factura.' },
      { type: 'p', text: 'Una enfermera de salud mental del Hospital ManchaCentro de Alcázar de San Juan recuerda la importancia de atender a la "somatización"; las personas que no atienden, en un primer momento, a los síntomas psicológicos que puedan estar desarrollando pueden tener posteriormente consecuencias físicas. "El cuerpo traduce lo que la mente no ve", aseguraba en una entrevista a El Plural.' },
      { type: 'p', text: 'Del mismo modo, invita a la gente que padezca estas patologías mentales derivadas de la pandemia a que siga una "dieta saludable, higiene del sueño y ejercicio diario". Paralelamente, ofrece clases de yoga y "grupos de relajación con un máximo de seis personas desde mayo" a las personas que lo requieran, otra buena técnica que permite "aprovechar la oportunidad que nos da la pandemia para pararnos y ver lo que somos y lo que nos rodea", abriendo así una ventana al lado positivo en unos tiempos tan inciertos.' },
    ],
  },
  {
    slug: 'secuelas-invisibles',
    title: 'Las secuelas invisibles: los miedos, fobias y estragos psicológicos que el coronavirus está dejando como huella permanente',
    excerpt: 'La pandemia dejó un rastro de ansiedad, estrés postraumático y síndrome de la cabaña que los profesionales de la salud mental llevan meses observando.',
    category: 'Adolescentes',
    image: '/images/Adolescentes/6507427c8898be5169a3fbff_Blog-1.png',
    date: '03/09/2021',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'La pandemia y el confinamiento dispararon la ansiedad, el insomnio y las fobias sociales en gran parte de la población, no solo en quienes pasaron la enfermedad, según psicólogos del PsiCall UCM e Instituto Centta. El artículo describe el «síndrome de la cabaña» (miedo a volver a salir tras el confinamiento), la sobreexposición mediática al virus como factor de malestar añadido, y recuerda la conexión entre mente y cuerpo: la ansiedad no gestionada también pasa factura física, por lo que se recomienda buscar apoyo psicológico, dieta e higiene de sueño adecuadas.' },
    ],
  },
  {
    slug: 'algoritmos-de-instagram-y-tiktok',
    title: '¿Están los algoritmos de Instagram y TikTok reavivando los peores fantasmas de la cultura de la dieta?',
    excerpt: 'Las imágenes corporales «perfectas» que devuelven las redes sociales pueden actuar como factor de riesgo en los trastornos de la conducta alimentaria.',
    category: 'Adolescentes',
    image: '/images/Adolescentes/650f164f4a76afdca29c47e0_Blog - 3(1).png',
    date: '16/06/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Las redes sociales no causan por sí solas un trastorno de la conducta alimentaria (TCA), pero sí son un factor de riesgo relevante, según Adriana Esteban, al devolver un reflejo filtrado y aspiracional del cuerpo. El artículo explica cómo los algoritmos de Instagram y TikTok, diseñados para mostrar más de lo que ya consumimos, pueden convertir una búsqueda puntual sobre dieta o ejercicio en un bucle de contenido dañino para quien ya es vulnerable, cita a varias psicólogas y nutricionistas especializadas en TCA, y cierra con una lista de estrategias de prevención: contenido diverso, avisos de contenido sensible, restringir cuentas «proana»/«promia», ayuda en línea y más transparencia algorítmica.' },
    ],
  },
  {
    slug: 'que-es-la-ortorexia',
    title: 'Qué es la ortorexia y por qué comerte un donut o helado de vez en cuando no es malo',
    excerpt: 'La preocupación obsesiva por comer «sano» puede convertirse en una dieta rígida y restrictiva con consecuencias físicas y emocionales.',
    category: 'Adolescentes',
    image: '/images/Adolescentes/650f1a0594ef9ab77583b6c1_Blog - 4(1).png',
    date: '18/09/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'La ortorexia es la preocupación obsesiva por comer «sano» a través de reglas estrictas y restrictivas, un término acuñado en el año 2000 por Steven Bratman que todavía no figura en el DSM-V. Adriana Esteban explica sus síntomas (obsesión por ingredientes, planificación rígida de comidas, aislamiento social, culpa) y advierte de que, en los casos más graves, puede derivar en anorexia o bulimia. El artículo recomienda la «regla del 80-20» y la flexibilidad cognitiva como antídoto frente a la rigidez, recordando que comer un donut o un helado de vez en cuando no es incompatible con una alimentación sana.' },
    ],
  },
  {
    slug: 'mis-citas',
    title: 'Mis citas no funcionan, ¿qué estoy haciendo mal?',
    excerpt: 'A menudo el problema no está en la falta de habilidades sociales, sino en unas expectativas poco ajustadas a la realidad de conocer a alguien.',
    category: 'Adultos',
    image: '/images/Adultos/6516a5b658203abfd8e80f2e_Blog - 5(1).png',
    date: '21/08/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'A partir de la pregunta que hacen algunos pacientes en consulta, Adriana Esteban y Adrián Garrido (Instituto Centta) explican que las citas «que no funcionan» suelen deberse a expectativas poco ajustadas a la realidad, más que a falta de habilidades sociales. El artículo repasa si la timidez o la incompatibilidad son realmente un problema, el papel de la autoestima al conocer gente nueva, y ofrece consejos concretos sobre autenticidad, gestión del miedo al rechazo y cómo evitar «bloquearse» en una cita, insistiendo en que ligar es una habilidad que se entrena con la práctica.' },
    ],
  },
  {
    slug: 'como-fortalecer',
    title: 'Cómo fortalecer la autoestima de los niños para que se adapten mejor a los problemas de la vida',
    excerpt: 'La familia es la pieza clave para ayudar a los niños a construir una relación sana consigo mismos desde edades tempranas.',
    category: 'Adolescentes',
    image: '/images/Adolescentes/6516aad14e3fb42aa1a1b2c6_Blog - 6(1).png',
    date: '21/12/2022',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Con aportaciones de Santos Solano (Educar es todo) y Adriana Esteban, el artículo explica que la autoestima infantil se construye desde la familia y no depende de ser «el mejor», sino de aprender a equivocarse y volver a intentarlo. Ofrece cinco consejos concretos: centrarse en el proceso y no en el resultado, dar espacio y responsabilidades acordes a la edad, evitar etiquetas y comparaciones, cuidar la autoexigencia que se traslada a los hijos, y cuidar los pequeños detalles de la relación con ellos.' },
    ],
  },
  {
    slug: 'comida-real',
    title: 'Comida real: ¿realmente es sinónimo de comer saludable?',
    excerpt: 'El movimiento «realfooding» ha popularizado comer sin procesados, pero llevado al extremo puede favorecer problemas con la alimentación.',
    category: 'Adolescentes',
    image: '/images/Adolescentes/6516acaf1d2c66f7763aaa2b_Blog - 6.1(1).png',
    date: '22/09/2021',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'A raíz del movimiento «realfooding» del nutricionista Carlos Ríos, el artículo recoge las voces de varios nutricionistas (Nutrygente, Instituto Centta) y de la psicóloga Adriana Esteban sobre cómo un mensaje en principio positivo —priorizar alimentos no procesados— puede, vivido con rigidez y perfeccionismo, convertirse en un factor de riesgo para desarrollar un trastorno de la conducta alimentaria encubierto. Advierte de la culpa asociada a «romper» la dieta y reivindica moverse «en los grises»: comer real es también disfrutar del acto de comer, no solo cumplir reglas nutricionales.' },
    ],
  },
  {
    slug: 'el-ayuno',
    title: 'El ayuno intermitente aumenta el riesgo de sufrir trastornos alimentarios, según advierte una experta',
    excerpt: 'Sostener el ayuno demasiado tiempo, o no poder sostenerlo, son dos caminos que pueden derivar en atracones o en distorsión de la imagen corporal.',
    category: 'Adolescentes',
    image: '/images/Adolescentes/6516ad901d2c66f7763b6ba0_Blog - 8(1).png',
    date: '30/11/2020',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Adriana Esteban (Instituto Centta) advierte de que el ayuno intermitente puede ser un desencadenante de trastornos de la conducta alimentaria, sobre todo en personas con baja autoestima, perfeccionismo o impulsividad, ya sea por la dificultad de sostenerlo (que lleva al atracón) o por sostenerlo demasiado tiempo (que altera la percepción de hambre y la imagen corporal). El artículo enumera señales de alarma —rigidez extrema, obsesión por el cuerpo, aislamiento social, cambios de humor— y recomienda que cualquier ayuno se haga bajo supervisión profesional.' },
    ],
  },
  {
    slug: 'blog-1-el-reto-al-que-se-enfrentan-las-personas-con-un-trastorno-de',
    title: 'El reto al que se enfrentan las personas con un trastorno de alimentación en diciembre y en Navidad: 3 consejos de una psicóloga',
    excerpt: 'Las comidas familiares y los reencuentros navideños son un desafío añadido para quienes están en proceso de recuperación de un TCA.',
    category: 'Familias',
    image: '/images/Familias/657dd479873eb41f12216f60_blog1-fam.png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Con motivo del Día Internacional de la Lucha contra los TCA (30 de noviembre), Adriana Esteban explica por qué la Navidad es una época especialmente dura para quienes están en recuperación: no tanto por la comida en sí, sino por las tensiones familiares y los reencuentros con vínculos poco frecuentes durante el año. Ofrece tres consejos concretos para las familias: negociar la estructura de las celebraciones dando margen de decisión a la persona, fomentar la comunicación asertiva sobre expectativas y miedos, y facilitar la autorregulación respetando sus ritmos y ofreciendo vínculos seguros a los que acudir.' },
    ],
  },
  {
    slug: 'depresion-en-jovenes',
    title: 'La depresión en jóvenes se asocia cada vez más al uso de redes sociales',
    excerpt: 'Psicólogos y psiquiatras observan un aumento de consultas de jóvenes vinculadas al abuso de redes sociales y la comparación social constante.',
    category: 'Adolescentes',
    image: '/images/Adultos/652abfa1eca739a172fa1866_Blog---3(1).png',
    date: '17/03/2022',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'A partir de la conferencia «Millennials y Generación Z. Depresión invisible» (Lundbeck), el artículo alerta del aumento de consultas de jóvenes de 20 a 34 años relacionadas con el abuso de redes sociales, la comparación constante y la baja autoestima, con previsión de que la depresión sea la principal causa de incapacidad laboral en 2030. Señala la reluctancia de los adolescentes a pedir ayuda y plantea estrategias innovadoras, como acercar la atención de salud mental a espacios culturales y sociales juveniles fuera del entorno clínico tradicional.' },
    ],
  },
  {
    slug: 'hay-que-estar-loco',
    title: '¿Hay que estar "loco" para ir al psicólogo?',
    excerpt: 'Desmontamos el estigma histórico que asocia la terapia psicológica únicamente a los trastornos mentales graves.',
    category: 'Adolescentes',
    image: '/images/Adolescentes/652ac163c44250fcf51a2a45_Blog---3(1).png',
    date: '05/06/2022',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El artículo desmonta el estigma histórico que asocia ir al psicólogo con estar «loco», recordando que esa etiqueta se refería a trastornos graves con alucinaciones o delirios, mientras que la mayoría de quienes acuden a terapia solo buscan gestionar dificultades cotidianas. Defiende que la psicoterapia es para cualquier persona que quiera mejorar su bienestar emocional, y que pedir ayuda es un acto de valentía y autocuidado, no una señal de debilidad.' },
    ],
  },
  {
    slug: 'apuestas-online',
    title: 'Apuestas online y menores: un juego muy peligroso',
    excerpt: 'El juego «gratuito» sin dinero real actúa como puerta de entrada a la ludopatía entre adolescentes.',
    category: 'Adolescentes',
    image: '/images/Adolescentes/652ac3c09d35bedf6573cf8a_Blog---3(1).png',
    date: '24/08/2022',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El artículo repasa la Estrategia Nacional Contra las Adicciones 2017-2024 y datos de una encuesta en secundaria que muestra que el 23,8% de las chicas y el 18,3% de los chicos de 14-18 años abusan de las TIC. Explica cómo las apuestas «sin dinero» actúan como puerta de entrada para menores, reduciendo su percepción de riesgo hasta que empiezan a apostar dinero real, favorecidas por el anonimato de internet y la publicidad de deportistas de élite. En España hay 500.000 personas diagnosticadas con adicción al juego, con consecuencias graves a nivel personal, social y económico.' },
    ],
  },
  {
    slug: 'el-sindrome-de-morris',
    title: 'El síndrome de Morris y sus consecuencias emocionales.',
    excerpt: 'Una condición genética poco conocida que plantea importantes desafíos de identidad y aceptación social.',
    category: 'Adolescentes',
    image: '/images/Adolescentes/652ac7bd18743b5da302a1ac_Blog---3(1).png',
    date: '12/09/2022',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El Síndrome de Morris (o Síndrome de Insensibilidad Completa a los Andrógenos) es una condición genética rara en la que una persona con cromosomas XY desarrolla una apariencia física femenina por una mutación en el receptor de andrógenos, careciendo de útero y ovarios. Suele detectarse en la adolescencia, al no aparecer la menstruación, y el artículo pone el foco en el impacto emocional del diagnóstico —desde la insatisfacción corporal hasta el rechazo social—, defendiendo la importancia del apoyo psicológico integral frente a los desafíos médicos y sociales que conlleva.' },
    ],
  },
  {
    slug: 'has-pasado-ya-por-la-crisis-de-los-25',
    title: '¿Has pasado ya por la crisis de los 25?',
    excerpt: 'Incertidumbre laboral, presión por el éxito y comparación en redes convergen en una crisis vital cada vez más habitual en la veintena.',
    category: 'Adolescentes',
    image: '/images/Adolescentes/652ac86af3d93c3006a59112_Blog---3(1).png',
    date: '03/11/2022',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'La «crisis de los 25» describe la confusión y sensación de estar atrapado que muchas personas sienten en la veintena, alimentada por la incertidumbre económica, un mercado laboral que decepciona expectativas y la presión de las redes sociales por proyectar una «vida perfecta». El artículo desglosa tres ejes de esta crisis —la búsqueda del trabajo perfecto, la priorización extrema de la independencia y la «falsa espiritualidad» centrada en lo material— y la plantea como una oportunidad de crecimiento y reorientación hacia lo que realmente importa, más que como un callejón sin salida.' },
    ],
  },
  {
    slug: 'tecnicas-para-gestionar-el-estres-y-la-ansiedad',
    title: 'Técnicas para gestionar el estrés y la ansiedad',
    excerpt: 'Respiración diafragmática, relajación muscular progresiva y visualización activa, tres herramientas sencillas para el día a día.',
    category: 'Adolescentes',
    image: '/images/Adolescentes/652ac8cd4a2afe3559f50ff9_Blog---3(1).png',
    date: '19/12/2022',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El artículo repasa tres técnicas de relajación centrales —respiración diafragmática, relajación muscular progresiva (en tres etapas) y visualización activa— explicando su base fisiológica y sus beneficios para reducir la frecuencia cardíaca, la tensión física y la rumiación negativa. Las complementa con hábitos cotidianos: ejercicio regular, diario de gratitud, música relajante, aprender a decir «no», dedicar tiempo a aficiones y, cuando haga falta, acudir a terapia, recordando que no existe una solución única y que conviene combinar varias estrategias según cada persona.' },
    ],
  },
  {
    slug: 'la-resiliencia-como-superar',
    title: 'La resiliencia: cómo superar las adversidades y crecer como individuo.',
    excerpt: 'La resiliencia no es un rasgo innato, sino una capacidad que se entrena a lo largo de la vida.',
    category: 'Adultos',
    image: '/images/Adultos/652ea51aef00efb8fddcdf03_Blog---3(1).png',
    date: '22/02/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'La resiliencia —la capacidad de enfrentar la adversidad y salir fortalecido de ella— no es un rasgo innato sino una habilidad que se entrena a lo largo de la vida. El artículo identifica sus componentes clave: la capacidad de adaptarse al cambio sin negar las emociones difíciles, una autoestima y autoconfianza sólidas, una red de apoyo social a la que acudir, y la capacidad de aprender de las experiencias negativas en lugar de vivirlas como un obstáculo insuperable.' },
    ],
  },
  {
    slug: 'sindrome-pas',
    title: 'Síndrome PAS: Personas Altamente Sensibles.',
    excerpt: 'En torno al 15-20% de la población procesa los estímulos del entorno de forma mucho más intensa y profunda.',
    category: 'Adultos',
    image: '/images/Adultos/652ea6782a7bd3d02bcf83bf_Blog---3(1).png',
    date: '15/04/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Las Personas Altamente Sensibles (PAS), un rasgo que afecta a entre el 15 y el 20% de la población según la Asociación Española de Profesionales Altamente Sensibles, procesan la información sensorial de forma más profunda: son más sensibles al ruido o la violencia, tienen alta empatía, pero también necesitan más tiempo de aislamiento para recargarse, lo que a veces se confunde con timidez. El artículo advierte de que, si este rasgo no se comprende ni gestiona desde la infancia, puede derivar en ansiedad o depresión en la edad adulta.' },
    ],
  },
  {
    slug: 'por-que-tenemos-miedo-a-sentir',
    title: '¿Por qué tenemos miedo a sentir?',
    excerpt: 'No se nos ha educado para gestionar emociones «negativas» como la tristeza, y las redes sociales no ayudan.',
    category: 'Adultos',
    image: '/images/Adultos/652ea7470f678188d2e30e7e_Blog---3(1).png',
    date: '07/05/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El artículo aborda la dificultad para expresar emociones «negativas» como la tristeza, contrastando cómo la sociedad acepta fácilmente una lesión física pero juzga el malestar emocional. Señala la «falsa felicidad» de redes como Instagram como un factor de presión añadido, cita al psicólogo Leocadio Martín y su concepto de «muros emocionales» como mecanismos de defensa, y defiende la introspección como vía para sentir y gestionar todas las emociones en lugar de reprimirlas.' },
    ],
  },
  {
    slug: 'el-gran-conocido-sindrome-del-impostor',
    title: 'El gran conocido Síndrome del Impostor',
    excerpt: 'Atribuir los propios logros a la suerte en lugar de al mérito propio es más frecuente de lo que parece, sobre todo entre mujeres y jóvenes.',
    category: 'Adultos',
    image: '/images/Adultos/652ea7dff8adb24ea0fadfd2_Blog---3(1).png',
    date: '02/07/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El síndrome del impostor afecta a personas perfeccionistas y autocríticas que atribuyen sus logros a la suerte en lugar de a su propio mérito, alimentando un temor constante a ser «descubiertas». El artículo cita un estudio de la Universidad de Cincinnati según el cual 2 de cada 3 mujeres lo han experimentado alguna vez, y que hasta el 86% de las personas de 18 a 34 años dicen haberlo sentido, frente a una menor incidencia entre los 45 y 54 años. Plantea la ayuda psicológica como vía para reconocer y valorar los propios logros.' },
    ],
  },
  {
    slug: 'por-que-cuesta-desconectar-del-trabajo-en-vacaciones',
    title: '¿Por qué cuesta desconectar del trabajo en vacaciones?',
    excerpt: 'Casi un tercio de los trabajadores no logra desconectar del todo durante las vacaciones, sobre todo los más jóvenes.',
    category: 'Adultos',
    image: '/images/Adultos/652ea823d40a967479c31b85_Blog---3(1).png',
    date: '26/08/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Un estudio de Randstad revela que el 30% de los trabajadores no logra desconectar del todo durante sus vacaciones, con un 48,6% entre los menores de 25 años y más dificultad entre los hombres que entre las mujeres. El artículo vincula esta incapacidad al miedo a no ser indispensable y a la necesidad de control, y propone el ocio activo, el mindfulness y la confianza en el equipo (para quienes dirigen personas) como estrategias para lograr una desconexión real.' },
    ],
  },
  {
    slug: 'copy-template-copy-7',
    title: 'Taijin Kyofusho: la fobia a molestar a los demás.',
    excerpt: 'Un síndrome de origen japonés centrado en el miedo a resultar incómodo u ofensivo para otras personas.',
    category: 'Adultos',
    image: '/images/Adultos/652ea869de7381add0699fd6_Blog---3(1).png',
    date: '13/10/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Taijin Kyofusho es un síndrome de origen japonés caracterizado por el miedo desproporcionado a que las propias acciones resulten molestas u ofensivas para los demás, con síntomas físicos intensos (náuseas, taquicardia, sudoración). El artículo describe sus cuatro subtipos —centrados en sonrojarse, la propia imagen corporal, el contacto visual o el olor corporal— y señala la terapia de exposición y la reestructuración cognitiva como los tratamientos más efectivos.' },
    ],
  },
  {
    slug: 'copy-template-copy-8',
    title: '¿Por qué nos cuesta tanto pedir ayuda?',
    excerpt: 'El miedo al juicio ajeno y la creencia de que pedir ayuda es debilidad frenan a muchos adultos a la hora de buscar apoyo.',
    category: 'Adultos',
    image: '/images/Adultos/652ea9113af6cccdd7d9c1b0_Blog---3(1).png',
    date: '28/11/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El artículo explora por qué, a diferencia de cuando somos niños, de adultos nos cuesta pedir ayuda: el egocentrismo, el miedo a confesar un problema y el temor al juicio ajeno son las principales barreras. Defiende que pedir ayuda no es un signo de debilidad sino de valentía, y reivindica normalizar acudir al psicólogo igual que se normaliza ir al fisioterapeuta o al nutricionista, en un contexto en el que hablar de terapia cada vez está menos estigmatizado.' },
    ],
  },
  {
    slug: 'fingir-que-todo-va-bien',
    title: 'Fingir que todo va bien: un síntoma de la "depresión sonriente"',
    excerpt: 'Ocultar el malestar detrás de una sonrisa es más común de lo que parece, especialmente en perfiles percibidos como «fuertes».',
    category: 'Adultos',
    image: '/images/Adultos/652ea994b1c6979a7b6c2bd1_Blog---3(1).png',
    date: '15/01/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'La «depresión sonriente» describe a personas que ocultan un profundo malestar tras una apariencia de bienestar, especialmente quienes ocupan roles de liderazgo o se perciben como «fuertes». El artículo cita un estudio del Instituto de Psiquiatría del King\'s College según el cual el 71% de las personas con depresión ocultan su problema por miedo al rechazo o la discriminación, y distingue entre la sonrisa (un gesto voluntario) y la tristeza (una emoción que responde a otra lógica), insistiendo en la importancia de la apertura para poder pedir ayuda.' },
    ],
  },
  {
    slug: 'para-que-sirve-ir-al-psicologo',
    title: '¿Para qué sirve ir al psicólogo?',
    excerpt: 'Desmontamos algunos de los mitos más habituales sobre qué es y qué no es una terapia psicológica.',
    category: 'Adultos',
    image: '/images/Adultos/652ea9d176f1f986ba2a22ae_Blog---3(1).png',
    date: '04/03/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El artículo desmonta cuatro mitos habituales sobre la terapia psicológica: que consiste solo en desahogarse y recibir consejos (en realidad busca modificar el comportamiento con base científica), que es solo para problemas graves, que ir al psicólogo es signo de debilidad, y que la terapia es interminable. Explica que un psicólogo ayuda a acceder a la vía más directa para modificar aquello que genera malestar, sin necesidad de haber vivido personalmente cada situación para poder ayudar a superarla.' },
    ],
  },
  {
    slug: 'cuando-es-el-momento-adecuado',
    title: '¿Cuándo es el momento adecuado para acudir a terapia?',
    excerpt: 'No hace falta esperar a una crisis grave: cualquier malestar que afecte al día a día es motivo suficiente.',
    category: 'Adultos',
    image: '/images/Adultos/652eab0ed40a967479c7f863_Blog---3(1).png',
    date: '09/06/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El artículo insiste en que no hace falta estar «loco» ni esperar a una crisis grave para acudir a terapia: el malestar, las emociones desagradables o los conflictos cotidianos ya son motivo suficiente. Explica que ir al psicólogo no busca un diagnóstico sino ordenar pensamientos y aprender a gestionar emociones desde la objetividad de un profesional, y que dar ese paso es un acto de valentía, un mensaje de querer mejorar y crecer.' },
    ],
  },
  {
    slug: 'por-que-evitamos-decir',
    title: '¿Por qué evitamos decir que vamos al psicólogo?',
    excerpt: 'El estigma en torno a la salud mental sigue haciendo que muchas personas oculten que están en terapia.',
    category: 'Adultos',
    image: '/images/Adultos/652eac2b105a03291f4bf5e0_Blog---3(1).png',
    date: '21/07/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'A pesar de los avances en la percepción de la salud mental, muchas personas siguen sin contar que van al psicólogo por miedo a ser juzgadas o vistas como incompetentes. El artículo destaca que las generaciones más jóvenes, apoyadas por YouTube, podcasts y blogs de psicólogos, están normalizando hablar de terapia abiertamente, y recuerda que las razones para acudir van desde la ansiedad y el estrés laboral hasta mejorar la comunicación en pareja.' },
    ],
  },
  {
    slug: 'si-te-consideras-viajero',
    title: 'Si te consideras viajero es posible que hayas experimentado alguna de estas crisis.',
    excerpt: 'Del síndrome de Ulises a la dromomanía: los trastornos psicológicos menos conocidos asociados a viajar.',
    category: 'Adultos',
    image: '/images/Adultos/652eac689f372e9babb5dc15_Blog---3(1).png',
    date: '18/09/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El artículo repasa varios síndromes psicológicos asociados a los viajes: el trastorno del viajero nostálgico (repetir siempre el mismo itinerario), el síndrome de Ulises (estrés crónico del emigrante), la «crisis del boarding pass» (pánico al viajar solo), la dromomanía (necesidad constante de estar en movimiento) y el síndrome postvacacional, que dificulta volver a la rutina y afecta sobre todo a mayores de 45 años. Menciona también otros menos frecuentes, como el síndrome de Jerusalén o el complejo del turista.' },
    ],
  },
  {
    slug: 'el-panico-al-trabajo-existe',
    title: 'El pánico al trabajo existe y se llama Ergofobia',
    excerpt: 'Un miedo intenso al entorno laboral que suele tener su origen en experiencias traumáticas previas.',
    category: 'Adultos',
    image: '/images/Adultos/652eb43801b729ad7465e5f2_Blog---3(1).png',
    date: '19/12/2023',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'La ergofobia es un miedo extremo al entorno laboral que puede impedir incluso presentarse en el puesto de trabajo, generalmente originado por experiencias traumáticas previas en ese contexto. El artículo señala las técnicas de relajación, la reestructuración cognitiva y la desensibilización sistemática como los tratamientos más eficaces, insistiendo en que reconocer el problema es el primer paso para poder tratarlo.' },
    ],
  },
  {
    slug: 'pregorexia-la-peligrosa',
    title: 'Pregorexia, la peligrosa obsesión por no coger peso durante el embarazo',
    excerpt: 'La presión estética también alcanza el embarazo, con riesgos serios tanto para la madre como para el bebé.',
    category: 'Familias',
    image: '/images/Familias/657352eef877db5493806e1a_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'La pregorexia es la obsesión, durante el embarazo, por evitar el aumento de peso mediante conductas alimentarias muy restrictivas, con riesgos serios tanto para la madre (desnutrición, problemas cardiovasculares) como para el bebé (bajo peso al nacer, parto prematuro, en casos extremos muerte fetal). El artículo señala la presión social y mediática sobre el «cuerpo perfecto» durante y después del embarazo como uno de los factores desencadenantes, y defiende la detección temprana como clave para prevenir sus consecuencias más graves.' },
    ],
  },
  {
    slug: 'fam-post-2-la-soledad-en-las-personas-mayores-una-epidemia-silenciosa',
    title: 'La soledad en las personas mayores: una epidemia silenciosa.',
    excerpt: 'El aumento del consumo de ansiolíticos entre mayores esconde, muchas veces, un problema de aislamiento social.',
    category: 'Familias',
    image: '/images/Familias/657355fdb0b09181f3e2d04d_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'A partir de una campaña de la Association Amics de la Gent Gran, el artículo alerta del aumento del consumo de antidepresivos y ansiolíticos entre personas mayores como forma de combatir la soledad no deseada, un problema que según el INE afecta especialmente a las mujeres (41,3% de las mayores de 85 años viven solas, frente al 21,9% de los hombres). Explica que el aislamiento en la vejez responde a tres pérdidas —de identidad, autonomía y sentido de pertenencia— y que la solución no pasa por medicalizar la soledad, sino por redes de apoyo social sólidas.' },
    ],
  },
  {
    slug: 'la-soledad-en-las-personas-mayores-una-epidemia-silenciosa',
    title: '¿Por qué no debemos usar dispositivos móviles para tranquilizar o entretener a nuestros hijos?',
    excerpt: 'Usar la pantalla como «chupete emocional» puede dificultar que los niños aprendan a gestionar sus propias emociones.',
    category: 'Familias',
    image: '/images/Familias/657356b8bedaef68814c1688_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El psicólogo José Moreno desaconseja usar móviles o tablets para calmar o entretener a los niños, apoyándose en un estudio de la Universidad de Michigan que vincula este hábito con más dificultades socioemocionales. El artículo detalla tres razones: refuerza la ira como estrategia para conseguir lo que se quiere, impide aprender a tolerar la frustración, y puede favorecer dependencia y aislamiento social a largo plazo, defendiendo establecer límites tecnológicos claros desde edades tempranas.' },
    ],
  },
  {
    slug: 'sobreproteccion-y-parentalidad-madres-agenda-padres-helicoptero-e-hijos-burbuja',
    title: 'Sobreprotección y parentalidad: madres agenda, padres helicóptero e hijos burbuja.',
    excerpt: '«Madres agenda», «padres helicóptero» y «padres apisonadora»: los distintos estilos de sobreprotección y sus consecuencias.',
    category: 'Familias',
    image: '/images/Familias/657357c9b09a020a48871761_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Citando a la profesora Carmen Velasco, el artículo señala un aumento de la inmadurez y dependencia infantil en los últimos 15 años, vinculado a distintos estilos de sobreprotección: «madres agenda», «padres helicóptero», «padres apisonadora» y «padres guardaespaldas». Explica que los niños sobreprotegidos desarrollan menos recursos para enfrentar la vida, mayor riesgo de ansiedad y de sufrir acoso escolar, y defiende que los padres deben guiar en lugar de sobreproteger, estableciendo límites y aprendiendo a decir «no».' },
    ],
  },
  {
    slug: 'el-desarrollo-emocional-en-la-infancia-y-la-importancia-de-manejar-la-frustracion',
    title: 'El desarrollo emocional en la infancia y la importancia de manejar la frustración.',
    excerpt: 'Entre los 3 y los 6 años se sientan las bases de la inteligencia emocional, y aprender a tolerar la frustración es clave.',
    category: 'Familias',
    image: '/images/Familias/6573585bdef7f86f043f9b72_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Entre los 3 y los 6 años se sientan las bases de la inteligencia emocional infantil, y aprender a tolerar la frustración es una de las piezas clave de ese desarrollo. El artículo explica que ceder siempre a los deseos de los hijos puede convertir la frustración —una emoción adaptativa— en un problema recurrente, y enumera señales de baja tolerancia en adolescentes (exigencia, necesidad de gratificación inmediata, resistencia al cambio) que aumentan el riesgo de ansiedad, defendiendo un entorno seguro donde experimentarla desde pequeños.' },
    ],
  },
  {
    slug: 'desmontando-los-mitos-del-rol-parental-en-el-desarrollo-de-los-hijos',
    title: 'Desmontando los mitos del rol parental en el desarrollo de los hijos.',
    excerpt: 'Ser buen padre o madre no significa ser perfecto, ni tener siempre todas las respuestas.',
    category: 'Familias',
    image: '/images/Familias/657359acbedaef68814daa7e_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El artículo desmonta la idea de que los errores de crianza causan siempre daño permanente, o que los padres deben ser «superhéroes» que lo saben todo y cargan con toda la responsabilidad del desarrollo de sus hijos. Defiende una crianza basada en la comunicación abierta, la empatía y los límites claros, recordando que el entorno, la genética y otras variables también influyen, y que ser buen padre o madre tiene que ver con la dedicación y el aprendizaje conjunto, no con la perfección.' },
    ],
  },
  {
    slug: 'colecho-padres-que-duermen-con-sus-hijos',
    title: 'Colecho: padres que duermen con sus hijos.',
    excerpt: 'Compartir cama o habitación con los hijos tiene beneficios para el vínculo, pero también riesgos que conviene conocer.',
    category: 'Familias',
    image: '/images/Familias/65735a19309e23b6e8f2a7a5_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El artículo pesa los beneficios del colecho —mayor sensación de seguridad, apoyo a la lactancia, más sueño REM, menos llanto nocturno y vínculos más fuertes— frente a sus riesgos, principalmente el de asfixia, la posible dependencia para dormir solos y su compleja relación con la muerte súbita del lactante, mayor si se comparte cama con fumadores o en superficies blandas. Concluye que la decisión debe tomarse de forma informada, siguiendo pautas de seguridad y, ante la duda, consultando con un pediatra.' },
    ],
  },
  {
    slug: 'la-importancia-de-la-actividad-fisica-en-la-infancia-beneficios-y-consejos',
    title: 'La importancia de la actividad física en la infancia: Beneficios y consejos.',
    excerpt: 'El ejercicio en la infancia no solo fortalece el cuerpo: también mejora el estado de ánimo y las habilidades sociales.',
    category: 'Familias',
    image: '/images/Familias/65735ad1986640b3908d4ef0_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'La actividad física regular en la infancia aporta beneficios físicos, cognitivos (mejor concentración y rendimiento académico), emocionales (libera endorfinas, mejora autoestima) y sociales (cooperación, empatía). El artículo ofrece siete consejos prácticos para fomentarla: juego activo al aire libre, ser modelo a seguir, limitar el tiempo de pantalla, hacer actividades en familia, variar las propuestas, mantenerlas divertidas y cuidar la seguridad con el equipo de protección adecuado.' },
    ],
  },
  {
    slug: 'fam-post-9-los-desafios-y-beneficios-de-la-paternidad-tardia',
    title: 'Los desafíos y beneficios de la paternidad tardía.',
    excerpt: 'Tener hijos más tarde implica menos energía física, pero también más madurez emocional y estabilidad.',
    category: 'Familias',
    image: '/images/Familias/657db25bbc2a732559038ccc_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Posponer la paternidad, cada vez más frecuente, tiene desafíos —menos energía, menos años por delante con los hijos, mayores riesgos de salud, distancia generacional— pero también beneficios claros: mayor estabilidad financiera, madurez emocional, una red de apoyo familiar más amplia y experiencia de vida para transmitir. El artículo concluye que, independientemente de la edad, lo esencial es el amor, el apoyo y el cuidado que se ofrece a lo largo de la crianza.' },
    ],
  },
  {
    slug: 'fam-post-10-la-mediacion-y-su-relacion-con-la-psicologia-y-el-derecho',
    title: 'La mediación y su relación con la psicología y el derecho.',
    excerpt: 'Un proceso de resolución de conflictos que gana terreno como alternativa a los tribunales.',
    category: 'Familias',
    image: '/images/Familias/657db4696ceef1e1bfae4308_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'La mediación es una alternativa a la vía judicial en la que un mediador —que puede venir del derecho, el trabajo social o la psicología— no impone decisiones, sino que facilita que las partes lleguen a un acuerdo voluntario. El artículo destaca la ventaja de los psicólogos mediadores por su formación en gestión emocional, señala que en España la Ley de Mediación Familiar fija un máximo de 3 meses (prorrogables), y resalta su capacidad de ahorrar tiempo, dinero y reducir la ansiedad frente al litigio tradicional.' },
    ],
  },
  {
    slug: 'fam-post-11-luces-y-sombras-de-la-navidad-como-nos-afecta',
    title: 'Luces y sombras de la navidad: ¿cómo nos afecta?',
    excerpt: 'Regalos, comidas familiares y la ausencia de seres queridos hacen de diciembre un mes emocionalmente intenso.',
    category: 'Familias',
    image: '/images/Familias/657db4d765f702738e52da12_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Un 52% de las personas percibe un aumento de estrés y ansiedad en los días previos a la Navidad, según recoge el artículo, debido a las compras, la planificación de comidas, la presión social de los regalos, el sedentarismo invernal y la sobrealimentación. Señala también la nostalgia por los seres queridos ausentes como uno de los aspectos más emotivos de estas fechas, y recomienda priorizar el autocuidado, el descanso, el ejercicio y ajustar expectativas para disfrutar de las festividades sin sentirse abrumado.' },
    ],
  },
  {
    slug: 'que-son-los-matrimonios-zombies',
    title: '¿Qué son los matrimonios zombies?',
    excerpt: 'Parejas que, por evitar el conflicto, terminan enterrando sus problemas hasta perder la conexión emocional.',
    category: 'Parejas',
    image: '/images/Parejas/657dbb968a67513e871c5a2e_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El psicólogo Andrew G. Marshall acuñó el término «matrimonio zombie» para describir a parejas que evitan sistemáticamente el conflicto y acaban enterrando problemas no resueltos bajo una fachada de normalidad. El artículo explica que evitar discutir no protege la relación sino que impide resolver lo que falla, y que estas parejas suelen pasar tiempo juntas solo en compañía de otros, con una intimidad cada vez más rutinaria, citando el libro de Marshall «Te quiero pero ya no estoy enamorado de ti» como referencia del fenómeno.' },
    ],
  },
  {
    slug: 'par-post-2-conoces-a-las-parejas-lat',
    title: '¿Conoces a las "parejas LAT"?',
    excerpt: 'Comprometidas pero sin convivir bajo el mismo techo: una tendencia creciente en parejas ya asentadas.',
    category: 'Parejas',
    image: '/images/Parejas/657dbc73c049d6cdc16544c5_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Las parejas LAT («Living Apart Together») mantienen una relación estable y comprometida sin vivir juntas, una decisión de mutuo acuerdo habitual entre personas de en torno a 45 años que ya han pasado antes por la convivencia o la crianza. El artículo señala que este modelo no suele darse en parejas que quieren tener hijos, y que su éxito depende de que ambas partes estén de acuerdo y no presenten inseguridad, control excesivo o celos.' },
    ],
  },
  {
    slug: 'par-post-3-como-saber-si-existe-dependencia-en-una-relacion-de-pareja',
    title: '¿Cómo saber si existe dependencia en una relación de pareja?',
    excerpt: 'Buscar en el otro lo que nos falta a nosotros mismos suele ser el origen de los vínculos más dependientes.',
    category: 'Parejas',
    image: '/images/Parejas/657dbd1b7deb1a34cc1689b4_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'La dependencia emocional en pareja suele originarse en las experiencias de apego de la infancia —exceso de protección o carencia afectiva— que llevan a buscar en el otro lo que sentimos que nos falta, replicando patrones observados en nuestros padres. El artículo describe señales como sentirse limitado o anulado, la preocupación constante por agradar o evitar el conflicto, y emociones como ansiedad, desconfianza o miedo a la soledad como indicadores de que la relación no es saludable.' },
    ],
  },
  {
    slug: 'par-post-4-te-suena-el-sindrome-del-corazon-roto',
    title: '¿Te suena el síndrome del corazón roto?',
    excerpt: 'Rupturas, infidelidades o amores no correspondidos pueden desencadenar un intenso malestar emocional y físico.',
    category: 'Parejas',
    image: '/images/Parejas/657dbd4bc5d6a9ae6e00fbd4_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El «síndrome del corazón roto» agrupa el malestar emocional y físico que aparece tras una ruptura, al descubrir una infidelidad o discrepancia con la persona amada, o por un amor no correspondido. El artículo aborda cada situación por separado —la importancia de aceptar el fin de la relación sin forzar un reencuentro, gestionar la disonancia cognitiva ante una traición, o no dejar que un rechazo afecte a la autoestima— y coincide en centrarse en reconstruir la propia vida emocional.' },
    ],
  },
  {
    slug: 'par-post-5-la-filofobia-o-miedo-a-enamorarse',
    title: 'La filofobia o miedo a enamorarse.',
    excerpt: 'El temor al compromiso puede llevar a sabotear inconscientemente cualquier relación antes de que avance.',
    category: 'Parejas',
    image: '/images/Parejas/657dbd7dbc4124991c4cebc7_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'La filofobia es un trastorno del estado de ánimo que dificulta enamorarse o comprometerse, con síntomas de ansiedad que pueden llegar al ataque de pánico. El artículo explica cómo quienes la sufren buscan defectos en su pareja o se enamoran de personas inalcanzables para justificar, sin saberlo, su propio miedo al compromiso, y señala terapias eficaces como la cognitiva, la desensibilización afectiva o la hipnoterapia para tratarla.' },
    ],
  },
  {
    slug: 'par-post-6-el-sindrome-de-otelo-en-las-relaciones-de-pareja',
    title: 'El Síndrome de Otelo en las relaciones de pareja.',
    excerpt: 'Un delirio de celos que no responde a pruebas ni a la lógica, y que puede tener consecuencias muy graves.',
    category: 'Parejas',
    image: '/images/Parejas/657dbdad7888a218656aa848_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El síndrome de Otelo, o delirio de celos monosintomático —nombrado por la obra de Shakespeare—, lleva a interpretar cualquier detalle mínimo (un cambio de marca, unos minutos de retraso) como prueba de infidelidad, al margen de toda evidencia racional. El artículo advierte de su gravedad, ya que puede desembocar en violencia de género, y señala la psicoterapia especializada, y en casos concretos los fármacos antipsicóticos, como vías de tratamiento.' },
    ],
  },
  {
    slug: 'par-post-7-atravesando-las-etapas-del-desamor',
    title: 'Atravesando las etapas del desamor.',
    excerpt: 'Una ruptura es un duelo con fases propias: negación, desesperanza, idealización, aceptación y superación.',
    category: 'Parejas',
    image: '/images/Parejas/657dbde6f03cf9096f76a8e7_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Una ruptura es un proceso de duelo con cinco etapas: asimilación de la pérdida (negación, enfado), desesperanza (riesgo de caer en un estado depresivo), ansiedad (idealización de la expareja, necesidad de cortar el contacto), aceptación (reconstruir la vida sin la otra persona) y superación (hablar de la ruptura sin dolor abrumador). El artículo recuerda que el orden y la duración de estas etapas varían, y que buscar ayuda profesional puede ser necesario si uno siente que se ha quedado estancado.' },
    ],
  },
  {
    slug: 'par-post-8-existe-un-nombre-para-definir-el-miedo-a-quedarse-soltero-anuptofobia',
    title: 'Existe un nombre para definir el miedo a quedarse soltero: Anuptofobia.',
    excerpt: 'El pánico a la soltería puede llevar a aferrarse a relaciones traumáticas solo por miedo a estar solo.',
    category: 'Parejas',
    image: '/images/Parejas/657dbe7a8bc9567a381fc69e_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'La anuptofobia es el miedo intenso a quedarse soltero, que lleva a quienes la sufren a aferrarse de forma irracional a relaciones traumáticas antes que enfrentar la soledad. El artículo vincula su origen a carencias afectivas o exceso de protección en la infancia, describe síntomas como ansiedad extrema y ataques de pánico, y señala la Terapia Cognitivo Conductual —en particular la desensibilización sistemática— como tratamiento eficaz.' },
    ],
  },
  {
    slug: 'enfermos-de-amor-y-relaciones-toxicas',
    title: 'Enfermos de amor y relaciones tóxicas.',
    excerpt: '"Estar enfermo de amor" no es solo una metáfora: el amor también puede volverse dañino si no se cuida.',
    category: 'Parejas',
    image: '/images/Parejas/657dbf57963417183b45a90f_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El artículo recorre la larga historia de la idea de que el amor puede ser una «enfermedad» —desde el Egipto antiguo hasta Galeno— para reflexionar sobre el amor tóxico y la tendencia a trivializar el proceso de enamorarse. Cita a Frank Trullis sobre el amor no correspondido como causa frecuente de suicidio y de celos sexuales en homicidios, y defiende «intelectualizar» el amor —hablarlo, reflexionarlo— para vivirlo de forma saludable en lugar de solo sentirlo.' },
    ],
  },
  {
    slug: 'en-busqueda-del-amor-ideal-el-sindrome-de-madame-bovary',
    title: 'En búsqueda del amor ideal: el Síndrome de Madame Bovary.',
    excerpt: 'Cuando el enamoramiento inicial nunca es suficiente y cada relación termina en decepción.',
    category: 'Parejas',
    image: '/images/Parejas/657dbed63f2b4be6c68b8afb_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El Síndrome de Madame Bovary, o bovarismo, describe a personas que solo saben vivir la fase inicial del enamoramiento, idealizando a su pareja hasta que aparecen sus defectos, momento en el que la relación se convierte en frustración y suelen buscar otra de inmediato para no enfrentar la soledad. El artículo vincula este patrón a carencias afectivas o de abandono en la infancia, y señala que con ayuda profesional es posible aprender a vincularse de forma más saludable.' },
    ],
  },
  {
    slug: 'el-sindrome-de-peter-pan-y-wendy-en-la-dinamica-de-pareja',
    title: 'El Síndrome de Peter Pan y Wendy en la dinámica de pareja.',
    excerpt: 'Cuando uno se resiste a madurar y el otro asume todas las responsabilidades de la relación.',
    category: 'Parejas',
    image: '/images/Parejas/657dbfbeb742222e40fdbf35_Blog---3(1).png',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'El Síndrome de Peter Pan describe a personas que se resisten a madurar y asumir responsabilidades adultas, mientras que quienes tienen «complejo de Wendy» asumen esas responsabilidades por ellas y se descuidan a sí mismas por baja autoestima. El artículo explica que esta dinámica de pareja puede tener consecuencias negativas para ambas partes, y que la terapia ayuda a que cada una trabaje sus propios desafíos —límites y autoestima en un caso, asunción de responsabilidades en el otro— hacia una relación más recíproca.' },
    ],
  },
  {
    slug: 'blog-post-1',
    title: 'Así puedes evitar que las redes sociales fomenten la anorexia y la bulimia en tus hijos.',
    excerpt: 'Pautas para acompañar a los más jóvenes en un entorno digital que expone constantemente a comparaciones sobre el cuerpo.',
    category: 'Adolescentes',
    image: '/images/Parejas/647097c60d72f61b1a90a69f_evitar-efectos-negativos-redes-sociales-proteger-ninos-trastornos-alimentarios_98.webp',
    date: '11/01/2022',
    author: {
      name: 'Adriana Esteban Labelle',
      role: 'Psicóloga colegiada M-35913',
    },
        body: [
      { type: 'p', text: 'Con motivo del Día de la Lucha contra los TCA, Adriana Esteban explica que el riesgo de desarrollar un trastorno de la conducta alimentaria aumenta en redes sociales, que han crecido un 20% desde la pandemia entre niños y adolescentes, al perseguir un ideal estético inalcanzable y convertir los «me gusta» en medida de autoestima. El artículo recomienda a las familias fomentar el espíritu crítico de los hijos —preguntar en vez de sentenciar, estimular su propio criterio— y reducir el tiempo de exposición como claves de prevención, recordando que a terapia no viene quien tiene problemas, sino quien decide resolverlos.' },
    ],
  },];

export function readMinutes(post: BlogPost): number {
  const words = post.body.reduce((sum, block) => sum + block.text.split(/\s+/).length, 0);
  return Math.max(1, Math.round(words / 200));
}

export const categories = ['Todos', 'Adolescentes', 'Adultos', 'Parejas', 'Familias'];
