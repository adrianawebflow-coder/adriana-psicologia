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
      { type: 'p', text: 'La pandemia y el confinamiento dispararon la ansiedad, el insomnio y las fobias sociales en gran parte de la población, no solo en quienes pasaron la enfermedad. Sanitarios y psicólogos advierten de síntomas compatibles con el estrés postraumático, mientras el llamado «síndrome de la cabaña» y la sobreexposición mediática al virus se han consolidado como nuevos problemas de salud mental derivados de estos años.' },
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
      { type: 'p', text: 'Las redes sociales no causan por sí solas un trastorno de la conducta alimentaria, pero sí actúan como un factor de riesgo relevante al reforzar comparaciones constantes e ideales de belleza inalcanzables. El artículo explora cómo los algoritmos de Instagram y TikTok, pensados para mostrarnos más de lo que ya consumimos, pueden atrapar a quienes ya son vulnerables en un bucle de contenido centrado en el cuerpo y la comida.' },
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
      { type: 'p', text: 'La ortorexia es la preocupación obsesiva por seguir una alimentación saludable a través de normas cada vez más estrictas y restrictivas, un término todavía muy reciente que no figura en los manuales diagnósticos oficiales. El artículo repasa sus síntomas —desde la planificación obsesiva de las comidas hasta el aislamiento social— y recuerda que la rigidez alimentaria, lejos de ser sinónimo de salud, puede acabar perjudicando la calidad de vida.' },
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
      { type: 'p', text: 'Muchas dificultades a la hora de conocer pareja no vienen de la timidez ni de la falta de habilidades sociales, sino de expectativas poco realistas sobre lo que debe ser una cita. El artículo aborda el miedo al rechazo, la búsqueda de una persona «perfecta» y cómo la incompatibilidad, bien gestionada, puede ser incluso positiva en lugar de un obstáculo.' },
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
      { type: 'p', text: 'La autoestima infantil se construye día a día en la relación con la familia, y no consiste en creerse el mejor sino en darse permiso para equivocarse y volver a intentarlo. El artículo recoge consejos prácticos —centrarse en el proceso y no solo en el resultado, dar espacio y responsabilidades acordes a la edad— para que padres y madres acompañen ese proceso sin caer en la sobreprotección.' },
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
      { type: 'p', text: 'El auge del movimiento «realfooding» ha hecho que muchas más personas se fijen en lo que comen, algo positivo en general, pero especialistas en nutrición y psicología advierten de que vivirlo de forma rígida —en blanco o negro— puede derivar en problemas de alimentación en las personas más vulnerables. El artículo distingue entre el mensaje original y la interiorización extrema que algunos hacen de él.' },
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
      { type: 'p', text: 'Combinado con baja autoestima, perfeccionismo o baja tolerancia a la frustración, el ayuno intermitente puede convertirse en el caldo de cultivo de un trastorno de la conducta alimentaria. La psicóloga explica cómo tanto la dificultad para mantenerlo (que lleva al atracón) como sostenerlo en exceso (que altera la percepción del hambre y de la propia imagen corporal) generan un círculo vicioso difícil de romper sin ayuda profesional.' },
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
      { type: 'p', text: 'La Navidad es una época especialmente difícil para las personas en proceso de recuperación de un trastorno de la conducta alimentaria, no tanto por la comida en sí como por las tensiones familiares y los reencuentros con vínculos poco frecuentes durante el año. Con motivo del Día Internacional de la Lucha contra los TCA, el artículo ofrece pautas para acompañar a un ser querido durante estas fechas tan señaladas.' },
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
      { type: 'p', text: 'Cada vez más adolescentes y adultos jóvenes llegan a consulta con problemas de baja autoestima, depresión y dificultad para aceptar su imagen corporal ligados al uso compulsivo de redes sociales. El artículo, a partir de una conferencia sobre depresión en la generación Z, plantea la necesidad de acercar la salud mental a los jóvenes con estrategias distintas a las tradicionales.' },
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
      { type: 'p', text: 'La mayoría de las personas que acuden a terapia no tienen un trastorno mental grave, sino dificultades cotidianas que les cuesta afrontar solas. El artículo reivindica que pedir ayuda psicológica es un acto de valentía, no una señal de debilidad, y que la terapia sirve tanto para gestionar crisis puntuales como para el crecimiento personal.' },
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
      { type: 'p', text: 'Las apuestas sin dinero real, el anonimato de internet y la publicidad protagonizada por deportistas de élite hacen que cada vez más menores se acerquen a las apuestas online sin percibir el riesgo real. El artículo repasa los datos sobre abuso de tecnología entre adolescentes españoles y las graves consecuencias personales, sociales y económicas de la adicción al juego.' },
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
      { type: 'p', text: 'El síndrome de Morris es una condición genética rara en la que una persona con cromosomas XY desarrolla una apariencia física femenina debido a una insensibilidad completa a los andrógenos. Más allá del reto médico, el artículo se centra en el impacto emocional del diagnóstico —habitual en la adolescencia— y en la importancia del acompañamiento psicológico frente al rechazo social o la incomprensión.' },
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
      { type: 'p', text: 'La conocida como «crisis de los 25» combina incertidumbre económica, un mercado laboral que no cumple expectativas y la presión de las redes sociales por proyectar una vida perfecta. El artículo plantea esta etapa no como un bloqueo sino como una oportunidad para revisar prioridades y reorientar metas hacia lo que de verdad importa.' },
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
      { type: 'p', text: 'El artículo repasa técnicas de relajación accesibles para manejar el estrés cotidiano: la respiración diafragmática para calmar la respuesta de lucha o huida, la relajación muscular progresiva para liberar la tensión física acumulada, y la visualización activa para cambiar el estado de ánimo. Se completan con hábitos como el ejercicio regular o llevar un diario de gratitud.' },
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
      { type: 'p', text: 'La resiliencia es la capacidad de adaptarse al cambio y salir fortalecido de las adversidades, y se apoya en la autoestima, el apoyo social y la habilidad de aprender de las experiencias difíciles. El artículo defiende que se trata de una habilidad que se puede cultivar activamente, no de un rasgo con el que se nace.' },
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
      { type: 'p', text: 'Las Personas Altamente Sensibles (PAS) procesan la información sensorial de manera más profunda, lo que se traduce en mayor empatía pero también en mayor necesidad de aislarse para recargarse tras la sobreestimulación. El artículo advierte de que, si este rasgo no se comprende desde la infancia, puede derivar en ansiedad o depresión en la edad adulta.' },
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
      { type: 'p', text: 'Existe una falta de educación emocional que nos lleva a temer expresar la tristeza o el malestar, reforzada por la «falsa felicidad» que proyectan las redes sociales. El artículo defiende la introspección como herramienta para reconocer y gestionar todas las emociones, en lugar de construir «muros emocionales» para evitarlas.' },
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
      { type: 'p', text: 'Las personas perfeccionistas y autocríticas tienden a atribuir sus logros a la suerte o a factores externos, lo que alimenta el temor constante a ser «descubiertas» como un fraude. El artículo cita estudios que muestran una mayor incidencia en mujeres y en personas de 18 a 34 años, y plantea la ayuda psicológica como vía para reconocer y valorar los propios méritos.' },
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
      { type: 'p', text: 'Un estudio muestra que un porcentaje significativo de trabajadores, especialmente los menores de 25 años, sigue en contacto con su empresa durante las vacaciones. El artículo relaciona esta dificultad con el miedo a no ser «indispensable» y propone el ocio activo y el mindfulness como estrategias para lograr una desconexión real.' },
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
      { type: 'p', text: 'El Taijin Kyofusho es un miedo desproporcionado a que las propias acciones resulten molestas para los demás, con subtipos centrados en el rubor, la propia imagen corporal, el contacto visual o el olor corporal. El artículo señala la terapia de exposición y la reestructuración cognitiva como los tratamientos más efectivos.' },
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
      { type: 'p', text: 'A diferencia de cuando somos niños, de adultos solemos asociar pedir ayuda con debilidad, lo que retrasa la búsqueda de apoyo psicológico. El artículo reivindica que acudir a terapia debería normalizarse igual que ir al fisioterapeuta o al nutricionista, como una forma más de cuidar la salud.' },
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
      { type: 'p', text: 'La llamada «depresión sonriente» describe a personas que ocultan un profundo malestar emocional tras una apariencia de bienestar, a menudo por miedo al rechazo o por sentir que deben ser un pilar para los demás. El artículo recuerda que sonreír es un gesto voluntario, mientras que la tristeza responde a otra lógica, y que ocultarla dificulta pedir la ayuda necesaria.' },
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
      { type: 'p', text: 'El artículo desmonta creencias erróneas sobre la terapia: no se trata solo de desahogarse o recibir consejos, sino de un proceso guiado para modificar patrones de comportamiento que generan malestar. Tampoco es necesario tener un trastorno grave para beneficiarse de ella, ni buscar ayuda es signo de debilidad.' },
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
      { type: 'p', text: 'No existe un umbral de gravedad que haya que alcanzar antes de pedir ayuda psicológica: el malestar emocional, los conflictos o las dificultades cotidianas ya son razón suficiente. El artículo insiste en que ir a terapia es un acto de valentía que busca ordenar pensamientos y aprender a gestionar emociones, no un diagnóstico de enfermedad mental.' },
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
      { type: 'p', text: 'A pesar de los avances en la normalización de la salud mental, muchas personas siguen sin contar a su entorno que acuden al psicólogo por miedo a ser juzgadas o vistas como «débiles». El artículo celebra que las generaciones más jóvenes, apoyadas por podcasts y redes sociales, estén rompiendo poco a poco ese estigma.' },
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
      { type: 'p', text: 'Viajar no siempre es sinónimo de bienestar: el artículo repasa síndromes como el del viajero nostálgico, el síndrome de Ulises (asociado a la emigración prolongada) o el síndrome postvacacional, que dificulta la vuelta a la rutina. Un recorrido curioso por la relación, a veces compleja, entre los viajes y la salud mental.' },
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
      { type: 'p', text: 'La ergofobia es un miedo extremo al trabajo que puede llegar a impedir presentarse en el puesto, generalmente originado por experiencias laborales traumáticas previas. El artículo señala técnicas de relajación, reestructuración cognitiva y desensibilización sistemática como tratamientos eficaces.' },
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
      { type: 'p', text: 'La pregorexia es la obsesión, durante el embarazo, por evitar el aumento de peso mediante conductas alimentarias muy restrictivas, con riesgos de desnutrición materna y consecuencias para el desarrollo del bebé. El artículo señala la presión estética en redes sociales, con imágenes de embarazos y postpartos «perfectos», como uno de los factores que alimentan este trastorno.' },
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
      { type: 'p', text: 'La soledad no deseada en la vejez suele responder a tres pérdidas: de identidad, de autonomía y de sentido de pertenencia, y no se resuelve solo con medicación. El artículo, que recoge datos sobre la mayor incidencia en mujeres mayores que viven solas, reivindica el acompañamiento y las redes de apoyo social como la respuesta real frente a la medicalización.' },
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
      { type: 'p', text: 'Recurrir sistemáticamente al móvil o la tablet para calmar el llanto o el enfado de un niño puede reforzar ese comportamiento y privarle de la oportunidad de aprender a tolerar la frustración por sí mismo. El artículo, apoyado en una investigación de la Universidad de Michigan, señala también el riesgo de dependencia tecnológica y aislamiento social a largo plazo.' },
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
      { type: 'p', text: 'El artículo identifica distintos perfiles de sobreprotección parental —desde los «padres helicóptero» que vigilan cada paso hasta los «padres apisonadora» que eliminan cualquier obstáculo— y explica cómo generan niños más dependientes, con menos herramientas para enfrentar la frustración y mayor riesgo de sufrir acoso escolar. La alternativa pasa por guiar en lugar de sobreproteger.' },
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
      { type: 'p', text: 'El desarrollo emocional en la primera infancia depende en gran medida de cómo los padres gestionan la frustración de sus hijos: ceder siempre a sus deseos puede convertir una emoción adaptativa en un problema recurrente. El artículo repasa las señales de baja tolerancia a la frustración y cómo fomentar la paciencia y la adaptabilidad desde edades tempranas.' },
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
      { type: 'p', text: 'El artículo desmonta la creencia de que los errores de crianza causan siempre daño permanente, o que un buen padre debe saberlo todo. Propone en su lugar una crianza basada en la comunicación abierta, la empatía y los límites claros, entendiendo la educación de los hijos como un aprendizaje compartido y no un camino sin fallos.' },
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
      { type: 'p', text: 'El colecho puede reforzar el vínculo afectivo, facilitar la lactancia y reducir el llanto nocturno, pero también conlleva riesgos como la asfixia accidental o una mayor dependencia para dormir solos. El artículo recuerda que la decisión debe tomarse de forma informada, siguiendo pautas de seguridad y, si hay dudas, consultando con un pediatra.' },
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
      { type: 'p', text: 'La actividad física regular en la infancia aporta beneficios físicos, cognitivos, emocionales y sociales, desde un mejor rendimiento académico hasta mayor autoestima. El artículo ofrece consejos prácticos para fomentarla en el día a día: jugar al aire libre, limitar el tiempo de pantalla y convertir el ejercicio en una actividad familiar y divertida, no en una obligación.' },
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
      { type: 'p', text: 'Posponer la paternidad tiene desafíos como menos energía o mayor distancia generacional con los hijos, pero también beneficios como mayor estabilidad financiera, madurez emocional y una red de apoyo familiar más amplia. El artículo concluye que, más allá de la edad, lo esencial es el amor y el acompañamiento que se ofrece a lo largo de la crianza.' },
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
      { type: 'p', text: 'A diferencia del arbitraje, en la mediación el mediador no impone decisiones sino que facilita que las partes lleguen a un acuerdo, lo que suele producir soluciones más duraderas y satisfactorias. El artículo destaca el papel de los psicólogos mediadores, gracias a su formación en gestión emocional, y las ventajas de este proceso frente a la vía judicial tradicional.' },
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
      { type: 'p', text: 'Más de la mitad de las personas percibe un aumento del estrés y la ansiedad en los días previos a la Navidad, entre la presión de las compras, los compromisos sociales y la nostalgia por quienes ya no están. El artículo propone priorizar el autocuidado, ajustar expectativas y no sobrecargar la agenda como claves para vivir estas fechas de forma más saludable.' },
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
      { type: 'p', text: 'El término «matrimonio zombie» describe a parejas que evitan sistemáticamente el conflicto y acaban conviviendo con problemas no resueltos bajo una fachada de normalidad. El artículo, apoyado en el trabajo del psicólogo Andrew G. Marshall, defiende que discutir de forma constructiva es señal de que la relación importa, frente al silencio que termina por apagarla.' },
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
      { type: 'p', text: 'Las parejas LAT («Living Apart Together») mantienen una relación estable y comprometida sin compartir vivienda, una decisión de mutuo acuerdo habitual sobre todo entre personas que ya han pasado antes por la convivencia. El artículo señala que este modelo funciona mejor cuando ambas partes están de acuerdo y no hay inseguridad ni celos excesivos de por medio.' },
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
      { type: 'p', text: 'La dependencia emocional en pareja suele originarse en la infancia y en la forma en que aprendimos a vincularnos afectivamente, llevándonos a buscar en el otro lo que sentimos que nos falta. El artículo describe señales como la preocupación constante por agradar, la ansiedad o el miedo a la soledad como indicadores de que la relación no está siendo saludable.' },
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
      { type: 'p', text: 'El «síndrome del corazón roto» agrupa el conjunto de síntomas emocionales y físicos que aparecen tras una ruptura, una infidelidad o un amor no correspondido. El artículo aborda cada situación por separado y coincide en un mismo consejo: aceptar lo ocurrido y centrarse en reconstruir la propia vida en lugar de intentar forzar lo que ya no depende de nosotros.' },
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
      { type: 'p', text: 'Quienes sufren filofobia suelen buscar defectos en su pareja, o directamente enamorarse de personas inalcanzables, como forma inconsciente de evitar el compromiso. El artículo repasa el origen de este miedo —normalmente en experiencias emocionales no resueltas— y las terapias, como la cognitiva o la desensibilización, que ayudan a superarlo.' },
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
      { type: 'p', text: 'El síndrome de Otelo, o delirio de celos monosintomático, lleva a interpretar cualquier detalle mínimo en la pareja como una prueba de infidelidad, al margen de toda evidencia racional. El artículo advierte de su gravedad —puede derivar en violencia de género— y de la importancia de la terapia especializada para abordarlo.' },
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
      { type: 'p', text: 'El artículo describe el desamor como un proceso de duelo con etapas propias, desde la negación inicial y la desesperanza hasta la idealización de la expareja, la aceptación y, finalmente, la superación. Recuerda que avanzar entre fases no siempre es lineal y que buscar ayuda profesional puede ser necesario si la persona siente que se ha quedado bloqueada.' },
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
      { type: 'p', text: 'La anuptofobia es el miedo intenso a quedarse soltero, que suele tener su origen en carencias afectivas de la infancia y lleva a las personas a tolerar relaciones dañinas antes que enfrentar la soledad. El artículo señala la terapia cognitivo-conductual, y en concreto la desensibilización sistemática, como tratamiento eficaz.' },
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
      { type: 'p', text: 'El artículo recuerda que el amor, idealizado durante siglos, también tiene sus límites, y que confundir sufrimiento con amor verdadero puede sostener relaciones insatisfactorias durante años. Reivindica «intelectualizar» el amor —hablarlo, reflexionarlo— como forma de vivirlo de manera saludable en lugar de solo sentirlo.' },
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
      { type: 'p', text: 'El Síndrome de Madame Bovary, o bovarismo, describe a quienes solo saben vivir la fase inicial del enamoramiento y necesitan idealizar constantemente a su pareja para no enfrentar la soledad. El artículo lo vincula a carencias afectivas de la infancia y señala que, con ayuda profesional, es posible aprender a vincularse de forma más saludable.' },
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
      { type: 'p', text: 'En la dinámica Peter Pan–Wendy, una persona evita asumir responsabilidades adultas mientras la otra se hace cargo de todo, a menudo descuidándose a sí misma por baja autoestima y necesidad de aprobación. El artículo plantea que ambos roles deben trabajarse en terapia para construir una relación más equilibrada y recíproca.' },
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
      { type: 'p', text: 'El uso intensivo de redes sociales expone a los más jóvenes a contenidos e imágenes que pueden favorecer comparaciones corporales dañinas y actuar como factor de riesgo en trastornos como la anorexia o la bulimia. El artículo plantea la comunicación abierta en familia y la educación en un consumo crítico de redes como herramientas clave de prevención.' },
    ],
  },];

export function readMinutes(post: BlogPost): number {
  const words = post.body.reduce((sum, block) => sum + block.text.split(/\s+/).length, 0);
  return Math.max(1, Math.round(words / 200));
}

export const categories = ['Todos', 'Adolescentes', 'Adultos', 'Parejas', 'Familias'];
