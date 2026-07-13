import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  obtenerProductos,
  type Producto,
} from '../../services/productosService'

export default function Revision() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [headerShadow, setHeaderShadow] = useState(false)
  const [productos, setProductos] = useState<Producto[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const onScroll = () => setHeaderShadow(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const datos = await obtenerProductos()
        setProductos(datos)
      } catch {
        setError('No se pudieron cargar los productos.')
      } finally {
        setCargando(false)
      }
    }
  
    cargarProductos()
  }, [])

  const scrollCarousel = (offset: number) => {
    carouselRef.current?.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">

{/* TopNavBar */}
<header className={`flex justify-between items-center px-margin-desktop h-20 w-full sticky top-0 z-50 bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline ${headerShadow ? "shadow-lg" : ""}`}>
<div className="flex items-center gap-stack-lg">
<a className="flex items-center gap-3 text-primary dark:text-primary-fixed" href="#">
<img src="/arenz-tech-logo.png" alt="ArEnz Tech" className="h-14 w-auto object-contain" />
<span className="font-label-bold text-headline-lg font-extrabold tracking-wide">ArEnz Tech</span>
</a>
</div>
<nav className="hidden md:flex gap-stack-lg items-center">
<Link className="font-label-bold text-label-bold uppercase text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" to="/nuevos-lanzamientos">NUEVOS LANZAMIENTOS</Link>
<a className="font-label-bold text-label-bold uppercase text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="#">HOMBRE</a>
<a className="font-label-bold text-label-bold uppercase text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="#">MUJER</a>
<a className="font-label-bold text-label-bold uppercase text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="#">NIÑOS</a>
<a className="font-label-bold text-label-bold uppercase text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="#">OFERTAS</a>
</nav>
<div className="flex items-center gap-stack-md">
<div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
<input className="bg-transparent border-none outline-none text-label-bold w-32 focus:w-48 transition-all" placeholder="Buscar" type="text"/>
</div>
<button className="material-symbols-outlined text-on-surface hover:text-secondary transition-colors scale-95 active:scale-90" data-icon="favorite">favorite</button>
<button className="material-symbols-outlined text-on-surface hover:text-secondary transition-colors scale-95 active:scale-90" data-icon="shopping_bag">shopping_bag</button>
<button className="md:hidden material-symbols-outlined" data-icon="menu">menu</button>
</div>
</header>
<main>
{/* Hero Section: Move to Zero */}
<section className="relative w-full h-[921px] overflow-hidden flex flex-col justify-end bg-black">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/hero-arenz.png')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
</div>
<div className="relative z-10 px-margin-desktop pb-stack-xl max-w-4xl">
<h1 className="font-display-2xl text-display-2xl text-white uppercase mb-stack-md">INNOVACIÓN EN CADA ACCESORIO</h1>
<p className="font-body-lg text-body-lg text-white/90 mb-stack-lg max-w-2xl leading-tight">
                    Elegimos productos confiables y de excelente calidad para que tu celular esté siempre protegido y conectado. Descubrí nuestra colección de accesorios pensados para tu día a día.
                </p>
<div className="flex flex-wrap gap-stack-md">
<button className="bg-white text-black px-10 py-4 font-label-bold uppercase hover:bg-secondary-container hover:text-white transition-all transform active:scale-95">VER PRODUCTOS</button>
<button className="border-2 border-white text-white px-10 py-4 font-label-bold uppercase hover:bg-white hover:text-black transition-all transform active:scale-95">CONOCÉ ARENZ TECH</button>
</div>
</div>
</section>
{/* Featured Collections Grid */}
<section className="py-stack-xl px-margin-desktop bg-surface">
<div className="flex justify-between items-end mb-stack-lg">
<h2 className="font-display-lg text-headline-lg uppercase">COLECCIONES DESTACADAS</h2>
<a className="font-label-bold text-label-bold underline uppercase hover:text-secondary transition-colors" href="#">VER TODO</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* Running */}
<div className="relative group cursor-pointer overflow-hidden aspect-[4/5]">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A dynamic, high-action close-up of a marathon runner's feet hitting the pavement in slow motion, water splashing from a small puddle. The runner is wearing advanced technical running shoes with a thick, responsive foam sole in a clean white and electric orange colorway. The lighting is crisp afternoon sun, creating sharp shadows. The aesthetic is clean, high-contrast, and focused on athletic engineering." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxSTjp6COPDqvkGCK_GqXO75IlZkS7SmhPH8ThOuMZ0nHvJ7vK2TwBg3mUMKIxCOSiOiIqIUNxS0WLjdoGBzKOaJx-6U-QJAIvcmmgJB43SFiC6dWr4cHv7hwrL3jg5RkGrdmFBmrQHE4zn5Ibb9DrtZnsvt2EWfJqw6X3OXRJBVp4OzNoLyG_6ERKTGNTijJG2z9f62XtWMCt1jr0fkerrzuYrX3_o6SjPeX2yP87iGx6x-YJKH1D')" }}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-10 left-10 text-white">
<h3 className="font-display-lg text-headline-lg uppercase mb-2">CASES</h3>
<button className="bg-white text-black px-6 py-2 font-label-bold uppercase text-label-sm">EXPLORAR</button>
</div>
</div>
{/* Basketball */}
<div className="relative group cursor-pointer overflow-hidden aspect-[4/5]">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="An intense, low-angle shot of a basketball player in mid-air performing a slam dunk on a gritty urban outdoor court. The player is silhouetted against a bright white sky, wearing a black performance jersey and high-top basketball sneakers. The scene is rendered in high-contrast black and white with a subtle grain texture, emphasizing raw energy and street-ball heritage." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRwG-bi0eiRF61gu-fNaQfTNSbI-xM9ltuXoEIi_DgWnhbj1CLAiNsOQOWL0LgwDX8pqKL7dnnNbJJG3u3wDE8S4UWG0fHPQOQCykvRATPs08vhwWvJJux2qf4yGBGQGC2s6m8IX0A9qu6zvHzL9EiLVqN2ceG4aHMzLLeQ9EHXrVtIBBLUt1gF15gXVKFLW5e4lyC_SUB6weYtfHCNmwaFGTdzj2ArYv-mJUXHcyItSQ2qRGwH7S5')" }}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-10 left-10 text-white">
<h3 className="font-display-lg text-headline-lg uppercase mb-2">ACCESORIOS</h3>
<button className="bg-white text-black px-6 py-2 font-label-bold uppercase text-label-sm">EXPLORAR</button>
</div>
</div>
{/* Lifestyle */}
<div className="relative group cursor-pointer overflow-hidden aspect-[4/5]">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A stylish lifestyle photograph of a person leaning against a minimalist concrete wall in an urban setting. They are wearing a premium fleece hoodie and iconic retro sneakers in a monochromatic grey and white palette. The lighting is soft and diffused, creating a modern, sophisticated look. The focus is on the textures of the fabric and the clean lines of the footwear design." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNKcRtCvHGyOm8_tmw5AWoxWEi2l04pc7SgCC_8Sow8NhO9JKhcbZq4tyLZ_kfksO4cnC08mlsxmTRPN9QIpDq1qHt_9EtQBYNXPWEFPoYntfaYTU_rXaPUVgaoEValmCEV1xWz-ONqL_4mTIup0H8On0t2Vl6FAqaXRYIArQQSWT3B6fu1KErNFwnKj5ZpnDHlihLxBp_lwMmVhfnADTseEDI3rGd8lxrMOWt6s1mzwpzIs23tE-9')" }}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-10 left-10 text-white">
<h3 className="font-display-lg text-headline-lg uppercase mb-2">NUEVO</h3>
<button className="bg-white text-black px-6 py-2 font-label-bold uppercase text-label-sm">EXPLORAR</button>
</div>
</div>
</div>
</section>
{/* Latest Drops Carousel */}
<section className="py-stack-xl bg-surface-container-low overflow-hidden">
<div className="px-margin-desktop flex justify-between items-center mb-stack-lg">
<h2 className="font-display-lg text-headline-lg uppercase">ÚLTIMOS LANZAMIENTOS</h2>
<div className="flex gap-stack-sm">
<button className="w-12 h-12 flex items-center justify-center border border-outline-variant hover:bg-primary hover:text-white transition-all" type="button" onClick={() => scrollCarousel(-320)}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-12 h-12 flex items-center justify-center border border-outline-variant hover:bg-primary hover:text-white transition-all" type="button" onClick={() => scrollCarousel(320)}>
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<div
  className="flex gap-gutter px-margin-desktop overflow-x-auto no-scrollbar snap-x snap-mandatory"
  ref={carouselRef}
>
  {cargando ? (
    <p>Cargando productos...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    productos.map((producto) => (
      <div
        key={producto.id}
        className="product-card flex-shrink-0 w-80 snap-start"
      >
        <div className="aspect-square bg-white overflow-hidden mb-stack-md">
          <img
            className="zoom-img w-full h-full object-cover transition-transform duration-500"
            src="/nike-producto.png"
            alt={producto.nombre}
          />
        </div>

        <div className="space-y-1">
          <h4 className="font-label-bold text-label-bold uppercase">
            {producto.nombre}
          </h4>

          <p className="text-on-surface-variant text-label-sm">
            {producto.descripcion}
          </p>

          <p className="font-label-bold mt-2">
            ${producto.precio.toFixed(2)}
          </p>

          <p className="text-sm">
            Stock: {producto.cantidad}
          </p>
        </div>
      </div>
    ))
  )}
</div>
</section>
{/* Newsletter / Membership Promo */}
<section className="py-stack-xl px-margin-desktop bg-primary text-on-primary">
<div className="max-w-4xl mx-auto text-center">
<h2 className="font-display-lg text-display-lg uppercase mb-stack-md">HAZTE MIEMBRO</h2>
<p className="font-body-lg text-body-lg mb-stack-lg opacity-80">
                    Únete a la comunidad que impulsa el progreso de los atletas. Accede de forma exclusiva a los últimos lanzamientos, ventas solo para miembros y consejos de expertos.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-stack-md">
<button className="bg-white text-black px-10 py-4 font-label-bold uppercase hover:bg-secondary-container hover:text-white transition-all transform active:scale-95">ÚNETE</button>
<button className="border border-white/50 text-white px-10 py-4 font-label-bold uppercase hover:bg-white/10 transition-all transform active:scale-95">INICIAR SESIÓN</button>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="w-full py-stack-xl px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container">
{/* Logo and About */}
<div className="col-span-1">
<div className="mb-stack-md">
<img src="/arenz-tech-logo.png" alt="ArEnz Tech" className="h-16 w-auto object-contain mb-2" />
<div className="font-label-bold text-headline-lg font-extrabold tracking-wide text-on-primary dark:text-on-primary-container">ArEnz Tech</div>
</div>
<p className="font-label-sm text-label-sm text-outline-variant dark:text-outline mb-stack-md leading-relaxed">
                Empoderando atletas en todo el mundo. Superando los límites del potencial humano a través de la innovación sostenible y el diseño de élite.
            </p>
<div className="flex gap-stack-md">
<span className="material-symbols-outlined cursor-pointer hover:text-secondary-fixed transition-colors">public</span>
<span className="material-symbols-outlined cursor-pointer hover:text-secondary-fixed transition-colors">language</span>
<span className="material-symbols-outlined cursor-pointer hover:text-secondary-fixed transition-colors">share</span>
</div>
</div>
{/* Shop Links */}
<div className="flex flex-col space-y-stack-sm">
<h5 className="font-label-bold text-label-bold uppercase mb-2">Comprar Apex</h5>
<Link className="font-label-sm text-label-sm text-outline-variant dark:text-outline hover:text-on-primary transition-colors" to="/nuevos-lanzamientos">NUEVOS LANZAMIENTOS</Link>
<a className="font-label-sm text-label-sm text-outline-variant dark:text-outline hover:text-on-primary transition-colors" href="#">BUSCAR TIENDA</a>
<a className="font-label-sm text-label-sm text-outline-variant dark:text-outline hover:text-on-primary transition-colors" href="#">HAZTE MIEMBRO</a>
<a className="font-label-sm text-label-sm text-outline-variant dark:text-outline hover:text-on-primary transition-colors" href="#">DESCUENTOS PARA ESTUDIANTES</a>
</div>
{/* Help Links */}
<div className="flex flex-col space-y-stack-sm">
<h5 className="font-label-bold text-label-bold uppercase mb-2">AYUDA</h5>
<a className="font-label-sm text-label-sm text-outline-variant dark:text-outline hover:text-on-primary transition-colors" href="#">ESTADO DEL PEDIDO</a>
<a className="font-label-sm text-label-sm text-outline-variant dark:text-outline hover:text-on-primary transition-colors" href="#">ENVÍO</a>
<a className="font-label-sm text-label-sm text-outline-variant dark:text-outline hover:text-on-primary transition-colors" href="#">DEVOLUCIONES</a>
<a className="font-label-sm text-label-sm text-outline-variant dark:text-outline hover:text-on-primary transition-colors" href="#">OPCIONES DE PAGO</a>
<a className="font-label-sm text-label-sm text-outline-variant dark:text-outline hover:text-on-primary transition-colors" href="#">CONTACTO</a>
</div>
{/* Legal */}
<div className="flex flex-col justify-between">
<div>
<h5 className="font-label-bold text-label-bold uppercase mb-2">Conectar</h5>
<p className="font-label-sm text-label-sm text-outline-variant dark:text-outline">Mantente al día con lo último en rendimiento.</p>
</div>
<div className="mt-stack-lg border-t border-white/10 pt-stack-md">
<p className="font-label-sm text-label-sm uppercase tracking-wide opacity-60">© 2024 ArEnz Tech. TODOS LOS DERECHOS RESERVADOS</p>
</div>
</div>
</footer>


    </div>
  )
}
