import './App.css'
import { useState, useEffect } from 'react'
import { Menu, X, Calendar, User, Trophy, Image, MessageCircle, Mail, ExternalLink, Play, Book } from 'lucide-react'

// Importar imágenes
import heroImage from './assets/eros_recio_hero_new.png'
import posterImage from './assets/camino_santo_grial_poster.png'
import oaxacaImage from './assets/eros_recio_bailando_oaxaca.jpg'
import entrevistaImage from './assets/eros_recio_entrevista.jpg'
import najarroImage from './assets/eros_recio_antonio_najarro.jpg'
import massamagrellImage from './assets/eros_recio_massamagrell.webp'
import corajeImage from './assets/coraje_cropped.png'
import grialatoImage from './assets/grialato_cropped.png'
import lavenusmexicoImage from './assets/lavenusmexico_cropped.png'
import sergioImage from './assets/sergio_cropped.png'
import superidadImage from './assets/superidad_cropped.png'
import subidownImage from './assets/subidown_image.png'
import celestinaImage from './assets/celestina_image.png'
import invencidoImage from './assets/invencido_image.jpg'
import pazyvidaImage from './assets/pazyvida.jpg'
import buscaFinMundoImage from './assets/busca_fin_mundo.jpg'
import carlomagnoImage from './assets/carlomagno.jpg'
import cesarDeTodoImage from './assets/cesardetodo.jpg'
import espedanzaImage from './assets/espedanza.jpg'
import sieteGigantesLibertadImage from './assets/siete_gigantes_libertad.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "trayectoria", "obras-en-cartel", "galeria", "libros", "cv", "contacto"]
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop - headerOffset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: User },
    { id: 'trayectoria', label: 'Trayectoria', icon: User },
    { id: 'obras-en-cartel', label: 'Obras en Cartel', icon: Play },
    { id: 'galeria', label: 'Galería', icon: Image },
    { id: 'libros', label: 'Libros', icon: Book },
    { id: 'cv', label: 'CV', icon: User },
    { id: 'contacto', label: 'Contacto', icon: Mail }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-gold">EROS RECIO</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'gold-text border-b-2 border-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-custom border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center w-full px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'gold-text bg-muted' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <IconComponent size={20} className="mr-3" />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-gold text-shadow animate-fadeInUp">
            EROS RECIO
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 silver-text text-shadow animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Bailarín, Actor y Embajador de la Superidad.
          </h2>
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            Un artista multidisciplinar en la vanguardia por la inclusión social de las personas especiales. Discapacidad y superación promueven la Superidad como ideal de crecimiento humano y artístico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={() => scrollToSection('trayectoria')}
              className="btn-gold px-8 py-3 rounded-lg font-semibold text-lg"
            >
              Ver Trayectoria
            </button>
            <button 
              onClick={() => scrollToSection('libros')}
              className="btn-silver px-8 py-3 rounded-lg font-semibold text-lg"
            >
              Conoce sus Libros
            </button>
          </div>
        </div>
      </section>

      {/* Trayectoria Section */}
      <section id="trayectoria" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-gold">Trayectoria</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un recorrido por los hitos más importantes de su carrera artística
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-slideInLeft">
                <img 
                  src={oaxacaImage} 
                  alt="Eros Recio bailando en Oaxaca" 
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
              <div className="animate-slideInRight">
                <h3 className="text-3xl font-bold mb-6 gold-text">Pionero de la Inclusión</h3>
                <p className="text-lg mb-6 leading-relaxed">
                  Eros Recio Peyró, nacido en Valencia en 1993, es reconocido mundialmente como el primer bailarín 
                  profesional con síndrome de Down. Su formación en el Conservatorio Profesional de Danza de Valencia 
                  le ha permitido dominar diversos estilos: capoeira, ballet, hip hop y bailes de salón.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Como Embajador de Buena Voluntad de la ONU, Eros representa a las personas con diversidad funcional 
                  y trabaja incansablemente por la inclusión social a través del arte y la cultura.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    Bailarín Profesional
                  </span>
                  <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                    Actor
                  </span>
                  <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    Embajador ONU
                  </span>
                </div>
              </div>
            </div>

            {/* Bandera de la Discapacidad */}
            <div className="bg-card rounded-lg p-8 mb-16 card-hover">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 gradient-gold">Bandera de la Discapacidad y la Superación</h3>
                <p className="text-lg text-muted-foreground">
                  Presentada oficialmente en la sede europea de la ONU el 3 de diciembre de 2017
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="text-primary-foreground" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 gold-text">ORO</h4>
                  <p className="text-muted-foreground">Representa la excelencia y la superación personal</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="text-secondary-foreground" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 silver-text">PLATA</h4>
                  <p className="text-muted-foreground">Simboliza la elegancia y el profesionalismo</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="text-accent-foreground" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 bronze-text">BRONCE</h4>
                  <p className="text-muted-foreground">Representa la calidez y la humanidad</p>
                </div>
              </div>
            </div>

            {/* Logros */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 card-hover">
                <h4 className="text-xl font-bold mb-3 gold-text">Reconocimiento Real</h4>
                <p className="text-muted-foreground">Reconocido por la Reina Letizia de España por su contribución a la inclusión social</p>
              </div>
              <div className="bg-card rounded-lg p-6 card-hover">
                <h4 className="text-xl font-bold mb-3 silver-text">INBA México</h4>
                <p className="text-muted-foreground">Reconocimiento del Instituto Nacional de Bellas Artes de México por promover la danza inclusiva</p>
              </div>
              <div className="bg-card rounded-lg p-6 card-hover">
                <h4 className="text-xl font-bold mb-3 bronze-text">Primer YouTuber</h4>
                <p className="text-muted-foreground">Primer YouTuber del mundo con síndrome de Down, dedicado a la inclusión de la discapacidad</p>
              </div>
            </div>

            {/* Camino del Santo Grial dentro de Trayectoria */}
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold">Camino del Santo Grial</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Un espectáculo único que narra la historia del Santo Cáliz a través de la danza
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-slideInLeft">
                <img 
                  src={posterImage} 
                  alt="Poster Camino del Santo Grial" 
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
              <div className="animate-slideInRight">
                <h4 className="text-2xl font-bold mb-6 gold-text">Una Obra Extraordinaria</h4>
                <p className="text-lg mb-6 leading-relaxed">
                  "Camino del Santo Grial" es un espectáculo de danza de una hora ininterrumpida que narra 
                  la historia del Santo Cáliz de la Catedral de Valencia. Con texto de su padre, fundador 
                  del Camino del Santo Grial, y bajo la dirección de Cristina Cantó García.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  La obra combina danza clásica, narración histórica y una profunda conexión espiritual, 
                  llevando al espectador en un viaje a través del tiempo y la tradición valenciana.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <User className="text-primary mr-3" size={20} />
                    <span><strong>Dirección:</strong> Cristina Cantó García</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="text-primary mr-3" size={20} />
                    <span><strong>Narración:</strong> César Vercher</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-primary mr-3" size={20} />
                    <span><strong>Duración:</strong> 1 hora ininterrumpida</span>
                  </div>
                </div>

                <button className="btn-gold px-8 py-3 rounded-lg font-semibold">
                  <Play className="inline mr-2" size={20} />
                  Ver Trailer
                </button>
              </div>
            </div>

            {/* Gira */}
            <div className="bg-card rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-8 text-center gradient-gold">Gira Nacional</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { ciudad: 'Valencia', venue: 'Artea Espai' },
                  { ciudad: 'Roma', venue: 'Teatro Internacional' },
                  { ciudad: 'Jerusalén', venue: 'Centro Cultural' },
                  { ciudad: 'Zaragoza', venue: 'Teatro Principal' },
                  { ciudad: 'Jaca-Huesca', venue: 'Teatro Municipal' },
                  { ciudad: 'Teruel', venue: 'Auditorio' }
                ].map((show, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 card-hover">
                    <h4 className="font-bold text-lg gold-text">{show.ciudad}</h4>
                    <p className="text-muted-foreground">{show.venue}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Obras en Cartel */}
            <div id="obras-en-cartel" className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-gold">Obras en Cartel</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Las producciones más destacadas de Eros Recio a lo largo de los años
                  </p>
                </div>

                <div className="space-y-16">
                  {[
                    {
                      year: '',
                      title: 'CARLOMAGNO',
                      description: 'Yo soy Europa. La vida del hombre que soñó la Unión Europea.',
                      image: carlomagnoImage
                    },
                    {
                      year: '',
                      title: 'CÉSAR DE TODO',
                      description: 'El príncipe de Maquiavelo y la familia Borgia en un espectáculo impactante.',
                      image: cesarDeTodoImage
                    },
                    {
                      year: '',
                      title: 'ESPEDANZA',
                      description: 'Bailando por la Superidad y el Futuro. Un espectáculo ameno y participativo.',
                      image: espedanzaImage
                    },
                    {
                      year: '',
                      title: 'EN BUSCA DEL FIN DEL MUNDO',
                      description: 'Una ópera artística para una caravana de solidaridad.',
                      image: buscaFinMundoImage
                    },
                    {
                      year: '2015',
                      title: 'LOS SIETE GIGANTES DE LA LIBERTAD',
                      description: 'Cuando la Libertad está en peligro, la propia Humanidad está en peligro. Esta obra relata la epopeya de los grandes bailarines que surgieron en zonas totalitarias y demostraron que con la Fe en la Libertad todo es posible',
                      image: sieteGigantesLibertadImage
                    },
                    {
                      year: '2014',
                      title: 'INVENCIDO',
                      description: 'Eros Recio interpreta aquí al bailarín Nijinsky y sus turbulentas relaciones con el empresario que le llevó a la fama. El drama humano que querer ser quien es.',
                      image: invencidoImage
                    },
                    {
                      year: '2013',
                      title: 'LA CELESTINA INFANTIL',
                      description: 'Por primera vez el personaje más problemático de la literatura española, se transforma radicalmente desde la crueldad a la bondad. Quien fue una mujer tan cuestionable se convierte en un hada del amor preocupada por los niños y por los ancianos.',
                      image: celestinaImage
                    },
                    {
                      year: '2012',
                      title: 'SUBIDOWN',
                      description: 'Primer espectáculo de Eros, que abre las puertas a las personas que llegan a nuestros lares con ansia de superación.',
                      image: subidownImage
                    }
                  ].map((obra, index) => (
                    <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slideInLeft`}>
                        <img 
                          src={obra.image} 
                          alt={obra.title} 
                          className="rounded-lg shadow-2xl w-full h-auto"
                        />
                      </div>
                      <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-slideInRight`}>
                        <div className="flex items-center mb-4">
                          <span className="text-3xl font-bold gold-text mr-4">{obra.year}</span>
                          <div className="h-px bg-gradient-to-r from-primary to-transparent flex-1"></div>
                        </div>
                        <h3 className="text-2xl font-bold mb-6 gradient-gold">{obra.title}</h3>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          {obra.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-gold">Galería</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Momentos destacados de la carrera artística de Eros Recio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-2xl card-hover">
              <img 
                src={oaxacaImage} 
                alt="Eros Recio bailando en Oaxaca" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Oaxaca, México</h3>
                  <p className="text-sm">Presentación internacional</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-2xl card-hover">
              <img 
                src={entrevistaImage} 
                alt="Eros Recio en entrevista" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Entrevista</h3>
                  <p className="text-sm">Medios de comunicación</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-2xl card-hover">
              <img 
                src={najarroImage} 
                alt="Eros Recio con Antonio Najarro" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Con Antonio Najarro</h3>
                  <p className="text-sm">Director del Ballet Nacional</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-2xl card-hover">
              <img 
                src={massamagrellImage} 
                alt="Eros Recio en Massamagrell" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Massamagrell</h3>
                  <p className="text-sm">Actuación local</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-2xl card-hover">
              <img 
                src={posterImage} 
                alt="Poster Camino del Santo Grial" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Camino del Santo Grial</h3>
                  <p className="text-sm">Poster oficial</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-2xl card-hover">
              <img 
                src={heroImage} 
                alt="Eros Recio bailando" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">En escena</h3>
                  <p className="text-sm">Momento artístico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Libros Section */}
      <section id="libros" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-gold">Libros</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre las publicaciones de Eros Recio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 card-hover">
              <img 
                src={superidadImage} 
                alt="Superidad - Libro" 
                className="rounded-lg shadow-2xl w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2 gold-text">Superidad</h3>
              <p className="text-sm text-muted-foreground mb-2">Año 2025</p>
              <p className="text-muted-foreground mb-4">Cómo superar la Discapacidad. Memorias de Eros Recio.</p>
              <button className="btn-gold px-4 py-2 rounded-lg font-semibold text-sm">
                <ExternalLink className="inline mr-2" size={16} />
                Más Información
              </button>
            </div>

            <div className="bg-card rounded-lg p-6 card-hover">
              <img 
                src={grialatoImage} 
                alt="El Grialato - Libro" 
                className="rounded-lg shadow-2xl w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2 gold-text">El Grialato</h3>
              <p className="text-sm text-muted-foreground mb-2">Año 2022</p>
              <p className="text-muted-foreground mb-4">El Camino del Santo Grial en Cómic</p>
              <button className="btn-gold px-4 py-2 rounded-lg font-semibold text-sm">
                <ExternalLink className="inline mr-2" size={16} />
                Más Información
              </button>
            </div>

            <div className="bg-card rounded-lg p-6 card-hover">
              <img 
                src={pazyvidaImage} 
                alt="Paz y Vida - Libro" 
                className="rounded-lg shadow-2xl w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2 gold-text">Paz y Vida</h3>
              <p className="text-sm text-muted-foreground mb-2">Año 2021</p>
              <p className="text-muted-foreground mb-4">Biografía ilustrada de Doctor Jerome Lejeune, descubridor genético del Síndrome de Down</p>
              <button className="btn-gold px-4 py-2 rounded-lg font-semibold text-sm">
                <ExternalLink className="inline mr-2" size={16} />
                Más Información
              </button>
            </div>

            <div className="bg-card rounded-lg p-6 card-hover">
              <img 
                src={lavenusmexicoImage} 
                alt="La Venus de México - Libro" 
                className="rounded-lg shadow-2xl w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2 gold-text">La Venus de México</h3>
              <p className="text-sm text-muted-foreground mb-2">Año 2019</p>
              <p className="text-muted-foreground mb-4">Relaciones sentimentales de las personas con diversidad funcional</p>
              <button className="btn-gold px-4 py-2 rounded-lg font-semibold text-sm">
                <ExternalLink className="inline mr-2" size={16} />
                Más Información
              </button>
            </div>

            <div className="bg-card rounded-lg p-6 card-hover">
              <img 
                src={corajeImage} 
                alt="Coraje - Libro" 
                className="rounded-lg shadow-2xl w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2 gold-text">Coraje</h3>
              <p className="text-sm text-muted-foreground mb-2">Año 2018</p>
              <p className="text-muted-foreground mb-4">El trato social a las personas con discapacidad</p>
              <button className="btn-gold px-4 py-2 rounded-lg font-semibold text-sm">
                <ExternalLink className="inline mr-2" size={16} />
                Más Información
              </button>
            </div>
          </div>
        </div>
      </section>





      {/* CV Section */}
      <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-gold">Currículum Vitae</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descarga o visualiza el currículum vitae completo de Eros Recio.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <a 
              href="/ReferencErosRecio.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-gold px-8 py-3 rounded-lg font-semibold text-lg mb-8"
            >
              <ExternalLink className="inline mr-2" size={20} />
              Descargar CV (PDF)
            </a>
            <div className="w-full h-[800px] max-w-4xl">
              <iframe 
                src="/ReferencErosRecio.pdf" 
                width="100%" 
                height="100%" 
                className="border-none rounded-lg shadow-lg"
                title="Eros Recio CV"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-gold">Contacto</h2>
            <p className="text-xl text-muted-foreground">
              Ponte en contacto para colaboraciones, presentaciones o más información
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 gold-text">Email</h3>
                  <p className="text-muted-foreground">contacto@erosrecio.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-secondary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 silver-text">Redes Sociales</h3>
                  <p className="text-muted-foreground">Síguenos en nuestras redes para estar al día</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-accent-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 bronze-text">Eventos</h3>
                  <p className="text-muted-foreground">Consulta disponibilidad para presentaciones</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-gold">Envía un mensaje</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tu mensaje..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full btn-gold px-6 py-3 rounded-lg font-semibold"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">&copy; 2024 Eros Recio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App


