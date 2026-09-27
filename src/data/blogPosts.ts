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
    excerpt: 'Proceso en el que una persona explora sus emociones, pensamientos y comportamientos para adquirir herramientas de crecimiento personal y bienestar emocional.',
    category: 'Parejas',
    image: '/images/Adolescentes/650f146cbecf38efdac2ccfa_Blog - 2(1).png',
    author: {
      name: 'Adriana Esteban',
      role: 'Psicóloga sanitaria',
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
];

export function readMinutes(post: BlogPost): number {
  const words = post.body.reduce((sum, block) => sum + block.text.split(/\s+/).length, 0);
  return Math.max(1, Math.round(words / 200));
}

export const categories = ['Todos', 'Adultos', 'Parejas', 'Familias'];
