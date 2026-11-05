import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleAlert,
  CircleHelp,
  Cloud,
  Compass,
  Computer,
  Laptop,
  MapPin,
  MessageCircle,
  Monitor,
  Network,
  RotateCcw,
  Router,
  Server,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import Image from "next/image";

import { CircuitArtwork, ContactLinks, Navigation } from "@/components/site-interactions";
import { TrainingProgression } from "@/components/training-progression";
import { WorkflowFlow } from "@/components/workflow-flow";
import { faqs, services, site, workSteps } from "@/lib/site-config";

const advisoryIcons = [Smartphone, Laptop, Router, Server, Cloud, Workflow, Sparkles] as const;

function SectionHeading({
  description,
  heading,
  id,
}: {
  description: string;
  heading: string;
  id?: string;
}) {
  return (
    <div className="section-heading">
      <h2 id={id}>{heading}</h2>
      <p>{description}</p>
    </div>
  );
}

function TrainingComparison() {
  return (
    <section aria-labelledby="learning-heading" className="comparison-section" id="comparaciones">
      <div className="container">
        <SectionHeading
          description="Conocer una herramienta es solo el inicio: la entiendes, la pruebas y la llevas a una necesidad concreta."
          heading="No es sumar herramientas. Es aprender a usarlas."
          id="learning-heading"
        />
        <div className="learning-comparison">
          <article className="comparison-side comparison-before">
            <div className="comparison-side-heading">
              <span className="comparison-symbol comparison-symbol-muted" aria-hidden="true">−</span>
              <div>
                <h3>Probar de todo no siempre ayuda</h3>
                <p>Más aplicaciones no significan más claridad</p>
              </div>
            </div>
            <ul className="friction-list">
              <li><span className="friction-mark" aria-hidden="true"><RotateCcw size={12} /></span> Abrir herramientas sin un objetivo claro</li>
              <li><span className="friction-mark" aria-hidden="true"><CircleHelp size={12} /></span> No saber cómo aplicarlas a tu tarea</li>
              <li><span className="friction-mark" aria-hidden="true"><span>···</span></span> Quedarte en pruebas aisladas</li>
            </ul>
          </article>

          <article className="comparison-side comparison-after">
            <div className="comparison-side-heading">
              <span className="comparison-symbol comparison-symbol-accent" aria-hidden="true">
                <Check size={18} strokeWidth={2} />
              </span>
              <div>
                <h3>Aprender para llevarlo a la práctica</h3>
                <p>Un recorrido acompañado, desde tu nivel y hacia tus objetivos.</p>
              </div>
            </div>
            <TrainingProgression />
          </article>
        </div>
        <p className="conceptual-note">
          Ejemplo de acompañamiento: cada capacitación se adapta a tus herramientas, nivel y objetivos.
        </p>
      </div>
    </section>
  );
}

function ServiceCompositions() {
  return (
    <section aria-labelledby="services-heading" className="services-section" id="servicios">
      <div className="container">
        <SectionHeading
          description="Un apoyo claro y práctico, tanto si estás resolviendo algo puntual como si quieres mejorar tu manera de trabajar."
          heading="Un buen punto de partida para cada necesidad."
          id="services-heading"
        />

        <div className="services-layout">
          <article className="service-feature service-training" id={services[0].id}>
            <div className="service-copy">
              <span className="service-kicker">{services[0].category}</span>
              <h3>{services[0].title}</h3>
              <p>{services[0].description}</p>
              <a className="text-link" href="#proceso">
                Ver cómo trabajamos
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
            <div className="learning-board" aria-label="Herramientas digitales que pueden ser tema de capacitación">
              <div className="learning-board-heading">
                <span><Sparkles aria-hidden="true" size={17} /> Aprender haciendo</span>
              </div>
              <div className="learning-chips">
                {services[0].examples.map((item, index) => (
                  <span className={`learning-chip learning-chip-${index + 1}`} key={item}>
                    <Image alt="" height={19} src={`/brands/${["chatgpt", "claude", "gemini", "n8n"][index]}.svg`} width={19} />
                    {item}
                  </span>
                ))}
              </div>
              <svg aria-label="Progreso conceptual: de lo básico a la autonomía" className="learning-growth-graph" role="img" viewBox="0 0 360 70">
                <path className="learning-graph-grid" d="M22 13H348M22 37H348M22 61H348" />
                <path className="learning-graph-area" d="M24 55C68 53 73 43 112 44s48-16 82-14 48-13 72-15 47-8 76-5v51H24Z" />
                <path className="learning-graph-line" d="M24 55C68 53 73 43 112 44s48-16 82-14 48-13 72-15 47-8 76-5" />
                <circle cx="24" cy="55" r="4" />
                <circle cx="112" cy="44" r="4" />
                <circle cx="194" cy="30" r="4" />
                <circle cx="266" cy="15" r="4" />
                <circle cx="342" cy="10" r="4" />
                <text x="22" y="69">Explorar</text>
                <text textAnchor="end" x="346" y="69">Usar con autonomía</text>
              </svg>
            </div>
          </article>

          <article className="service-feature service-advice" id={services[1].id}>
            <div className="service-copy">
              <span className="service-kicker">{services[1].category}</span>
              <h3>{services[1].title}</h3>
              <p>{services[1].description}</p>
              <a className="text-link" href="#compra">
                Conocer el enfoque
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
            <div className="device-drawing" aria-hidden="true">
              <Computer aria-hidden="true" className="advice-computer-icon" strokeWidth={1.15} />
              <span>Elegir con criterio, sin perder de vista tu uso</span>
            </div>
          </article>

          <article className="service-feature service-automation" id={services[2].id}>
            <div className="service-copy">
              <span className="service-kicker">{services[2].category}</span>
              <h3>{services[2].title}</h3>
              <p>{services[2].description}</p>
              <a className="text-link" href="#automatizacion">
                Ver un flujo de ejemplo
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
            <div className="service-workflow-mini" aria-hidden="true">
              <div className="mini-node">
                <span className="mini-node-icon"><MessageCircle size={16} /></span>
                <span>Entrada</span>
              </div>
              <span className="mini-connector" />
              <div className="mini-node mini-node-active">
                <span className="mini-node-icon"><Workflow size={16} /></span>
                <span>Proceso</span>
              </div>
              <span className="mini-connector" />
              <div className="mini-node">
                <span className="mini-node-icon"><Check size={16} /></span>
                <span>Resultado</span>
              </div>
            </div>
          </article>

          <article className="service-feature service-support" id={services[3].id}>
            <div className="service-copy">
              <span className="service-kicker">{services[3].category}</span>
              <h3>{services[3].title}</h3>
              <p>{services[3].description}</p>
              <a className="text-link" href="#modalidad">
                Conocer la modalidad
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
            <div className="support-visual" aria-hidden="true">
              <span className="support-device">
                <Image
                  alt=""
                  className="support-photo"
                  fill
                  sizes="(max-width: 700px) 80vw, 360px"
                  src="/remote-support.jpg"
                />
                <span className="support-photo-badge"><Laptop aria-hidden="true" size={15} /> Conexión remota</span>
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function BuyingComparison() {
  return (
    <section aria-labelledby="buying-heading" className="buying-section" id="compra">
      <div className="container">
        <SectionHeading
          description="Asesoramiento para personas, profesionales y organizaciones, desde un equipo individual hasta una infraestructura de trabajo."
          heading="Primero lo que necesitas. Después, el equipo."
          id="buying-heading"
        />
        <div className="buying-layout">
          <div className="buying-copy">
            <p className="buying-lede">
              Un equipo bien elegido combina los componentes adecuados, el rendimiento que necesitas y un precio más conveniente.
            </p>
            <p>
              Una pequeña inversión en asesoramiento puede evitar gastos innecesarios y ayudarte a encontrar un sistema más acorde a tu uso y presupuesto.
            </p>
            <a className="text-link" href="#servicios">
              Consultar sobre asesoramiento
              <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
          <div className="fit-visual" aria-labelledby="fit-visual-heading">
            <h3 className="fit-visual-title" id="fit-visual-heading">La diferencia está en elegir para tu uso</h3>
            <div className="fit-scenarios">
              <article className="fit-scenario fit-scenario-risk">
                <div className="fit-scenario-heading">
                  <span className="fit-scenario-icon" aria-hidden="true"><CircleAlert size={16} /></span>
                  <div>
                    <span className="fit-scenario-label">Compra sin asesoramiento</span>
                    <h3>Equipo más de lo necesario</h3>
                  </div>
                </div>
                <div className="computer-comparison-visual computer-comparison-risk">
                  <Monitor aria-hidden="true" className="comparison-monitor" size={75} strokeWidth={1.15} />
                  <ul className="computer-specs">
                    <li><strong>CPU</strong> Ryzen 3 4100</li>
                    <li><strong>RAM</strong> 8 GB</li>
                    <li><strong>SSD</strong> 256 GB</li>
                  </ul>
                </div>
                <div className="computer-comparison-details">
                  <span>Puede ser más de lo que hace falta</span>
                  <strong>Precio de ejemplo: ARS 1.500.000</strong>
                </div>
              </article>
              <article className="fit-scenario fit-scenario-fit">
                <div className="fit-scenario-heading">
                  <span className="fit-scenario-icon" aria-hidden="true"><Check size={16} /></span>
                  <div>
                    <span className="fit-scenario-label">Compra con asesoramiento</span>
                    <h3>Rendimiento que sí aprovechas</h3>
                  </div>
                </div>
                <div className="computer-comparison-visual computer-comparison-fit">
                  <Monitor aria-hidden="true" className="comparison-monitor" size={75} strokeWidth={1.15} />
                  <ul className="computer-specs">
                    <li><strong>CPU</strong> Ryzen 5 5600</li>
                    <li><strong>RAM</strong> 16 GB</li>
                    <li><strong>SSD NVMe</strong> 512 GB</li>
                  </ul>
                </div>
                <div className="computer-comparison-details">
                  <span>Componentes equilibrados y buen rendimiento</span>
                  <strong>Precio de ejemplo: ARS 1.050.000</strong>
                </div>
              </article>
            </div>
            <p className="fit-visual-caption">Ejemplo ficticio para comparar perfiles: no es una cotización vigente ni un precio de mercado.</p>
          </div>
        </div>
        <div aria-label="Áreas de asesoramiento tecnológico" className="advice-scope">
          <p>También te orientamos para elegir:</p>
          <ul>
            {site.advisoryScope.map((item, index) => {
              const AdvisoryIcon = advisoryIcons[index] ?? Laptop;

              return (
                <li key={item}>
                  <AdvisoryIcon aria-hidden="true" size={15} />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="purchase-steps">
          <span><i>01</i> Entender el uso</span>
          <ArrowRight aria-hidden="true" size={16} />
          <span><i>02</i> Considerar el presupuesto</span>
          <ArrowRight aria-hidden="true" size={16} />
          <span><i>03</i> Comparar alternativas</span>
        </div>
      </div>
    </section>
  );
}

function WorkflowComparison() {
  return (
    <section aria-labelledby="workflow-heading" className="workflow-section" id="automatizacion">
      <div className="container workflow-container">
        <div className="workflow-intro">
          <SectionHeading
            description="Cuando tus herramientas no se conectan, alguien debe hacer de puente. Los flujos de trabajo pueden encargarse de los pasos repetitivos."
            heading="Menos pasos manuales. Un flujo que entiendes."
            id="workflow-heading"
          />
          <p>
            Cuéntanos qué parte de tu trabajo quieres automatizar. Diseñamos la solución y te explicamos qué hace en cada paso.
          </p>
          <a className="button button-dark" href="#proceso">
            Explorar el proceso
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
          <span className="workflow-footnote">Cada flujo se define según el proceso y las herramientas disponibles.</span>
        </div>

        <div className="workflow-board">
          <div className="workflow-board-top">
            <span className="workflow-board-name"><Workflow aria-hidden="true" size={16} /> Un flujo explicado</span>
            <span className="workflow-status"><i aria-hidden="true" /> Ejemplo conceptual</span>
          </div>
          <div
            aria-hidden="true"
            className="workflow-flow-frame"
          >
            <WorkflowFlow />
          </div>
          <p className="sr-only">
            El flujo empieza con información recibida, conecta herramientas y aplica reglas definidas, y termina en un resultado con un aviso al equipo.
          </p>
          <div className="workflow-board-bottom">
            <span>Entrada <ArrowDown aria-hidden="true" size={13} /> herramientas y reglas <ArrowDown aria-hidden="true" size={13} /> resultado explicado</span>
            <span>La lógica, paso a paso.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section aria-labelledby="process-heading" className="process-section" id="proceso">
      <div className="container">
        <SectionHeading
          description="Un camino sencillo, con expectativas claras desde la primera conversación hasta la entrega."
          heading="Así trabajamos contigo."
          id="process-heading"
        />
        <ol className="process-list">
          {workSteps.map((step, index) => (
            <li className="process-step" key={step.title}>
              <span className="process-marker" aria-hidden="true">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              <div className="process-copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < workSteps.length - 1 && <span className="process-connector" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section aria-labelledby="modality-heading" className="audience-section" id="modalidad">
      <div className="container audience-layout">
        <div className="audience-intro">
          <span aria-hidden="true" className="audience-mark"><Compass size={23} strokeWidth={1.6} /></span>
          <h2 id="modality-heading">Tecnología para personas y equipos.</h2>
          <p>
            Particulares, profesionales, empresas y PyMEs: analizamos cada situación para proponer una solución a la medida de tus objetivos.
          </p>
        </div>
        <div className="audience-facts">
          <div className="audience-fact">
            <span className="audience-fact-icon"><MapPin aria-hidden="true" size={18} /></span>
            <div>
              <h3>Formosa y más allá</h3>
              <p>Atención inicial en Formosa, con servicios remotos para otras regiones.</p>
            </div>
          </div>
          <div className="audience-fact">
            <span className="audience-fact-icon"><Laptop aria-hidden="true" size={18} /></span>
            <div>
              <h3>A distancia, siempre cerca</h3>
              <p>Trabajamos principalmente en forma remota y coordinamos visitas cuando se necesitan.</p>
            </div>
          </div>
          <div className="audience-fact">
            <span className="audience-fact-icon"><Network aria-hidden="true" size={18} /></span>
            <div>
              <h3>Soluciones con claridad</h3>
              <p>Explicamos qué se hizo y cómo puedes aprovecharlo después.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section aria-labelledby="faq-heading" className="faq-section" id="preguntas">
      <div className="container faq-layout">
        <div className="faq-intro">
          <CircleHelp aria-hidden="true" className="faq-icon" size={25} strokeWidth={1.7} />
          <h2 id="faq-heading">Resolvamos algunas dudas.</h2>
          <p>Todo lo que conviene saber antes de empezar.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}<span className="faq-toggle" aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCallout() {
  return (
    <section aria-labelledby="contact-heading" className="contact-section" id="contacto">
      <div className="container contact-layout">
        <div className="contact-copy">
          <span className="contact-orbit" aria-hidden="true"><ArrowDown size={18} /></span>
          <h2 id="contact-heading">Tu próximo paso tecnológico empieza aquí.</h2>
          <p>Cuéntanos qué necesitas mejorar. Buscaremos el camino adecuado para ti.</p>
        </div>
        <div className="contact-card">
          <span className="contact-status">
            <i aria-hidden="true" />
            Canales oficiales
          </span>
          <ContactLinks variant="prominent" />
          <p className="contact-meetings">
            Si hace falta conversar, coordinamos una llamada por {site.contact.meetingOptions}
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a aria-label="Gravity Digital, volver al inicio" className="brand footer-brand" href="#inicio">
          <Image alt="" className="brand-mark" height={72} src="/gravity-mark.png" width={72} />
          <span className="brand-name">{site.name}</span>
        </a>
        <div className="footer-slogan">
          <p>{site.slogan}</p>
          <span>{site.coverage}</span>
        </div>
        <nav aria-label="Navegación del pie de página" className="footer-nav">
          {site.navigation.slice(0, 3).map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
          <a href="#contacto">Contacto</a>
          <a href={site.contact.instagram.href} rel="noreferrer" target="_blank">Instagram</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {site.name}</span>
        <a href="#inicio">Volver arriba <ArrowUpRight aria-hidden="true" size={14} /></a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
      <Navigation />
      <main id="contenido">
        <section aria-labelledby="hero-heading" className="hero-section" id="inicio">
          <div className="hero-grain" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="hero-slogan">{site.slogan}</p>
              <h1 id="hero-heading">La tecnología tiene más potencial del que imaginas.</h1>
              <p className="hero-description">
                Aprende a aprovechar herramientas digitales, encuentra el equipo adecuado y mejora tus procesos con apoyo que se adapta a ti.
              </p>
              <div className="hero-actions">
                <a className="button button-accent" href="#servicios">
                  Conocer nuestros servicios
                  <ArrowDown aria-hidden="true" size={17} />
                </a>
                <a className="hero-text-link" href="#proceso">Cómo trabajamos</a>
              </div>
              <p className="hero-location"><MapPin aria-hidden="true" size={14} /> Formosa · Atención principalmente remota</p>
            </div>
            <CircuitArtwork />
          </div>
          <div className="hero-bottom-line" aria-hidden="true">
            <span>Aprender</span><span>Elegir</span><span>Conectar</span><span>Resolver</span>
          </div>
        </section>

        <section aria-label="Nuestra manera de trabajar" className="principles-strip">
          <div className="container principles-layout">
            <p>La tecnología,</p>
            <span className="principle-divider" aria-hidden="true" />
            <p>explicada con claridad.</p>
            <span className="principle-note">Soluciones que entiendes y puedes aprovechar.</span>
          </div>
        </section>

        <TrainingComparison />
        <ServiceCompositions />
        <BuyingComparison />
        <WorkflowComparison />
        <HowWeWork />
        <AudienceSection />
        <FAQSection />
        <ContactCallout />
      </main>
      <Footer />
    </>
  );
}
