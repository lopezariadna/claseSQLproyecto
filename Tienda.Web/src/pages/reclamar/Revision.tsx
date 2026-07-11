import { useEffect, useRef, useState } from 'react'

export default function Revision() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [headerShadow, setHeaderShadow] = useState(false)

  useEffect(() => {
    const onScroll = () => setHeaderShadow(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollCarousel = (offset: number) => {
    carouselRef.current?.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">

{/* TopNavBar */}
<header className={`flex justify-between items-center px-margin-desktop h-20 w-full sticky top-0 z-50 bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline ${headerShadow ? "shadow-lg" : ""}`}>
<div className="flex items-center gap-stack-lg">
<a className="font-display-lg text-headline-lg font-black tracking-tighter text-primary dark:text-primary-fixed" href="#">APEX ATHLETICS</a>
</div>
<nav className="hidden md:flex gap-stack-lg items-center">
<a className="font-label-bold text-label-bold uppercase text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="#">NUEVOS LANZAMIENTOS</a>
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
<div className="w-full h-full bg-cover bg-center opacity-80" data-alt="A cinematic wide-angle shot of a diverse group of high-performance athletes sprinting across a futuristic recycled track during a foggy sunrise. The lighting is low-key and dramatic, highlighting the sleek silhouettes and reflective textures of sustainable sportswear. The color palette is dominated by deep obsidian blacks, ethereal greys, and sharp neon orange accents. The overall mood is powerful, urgent, and focused on environmental innovation." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDS5YjCfK0-nq8RoNzflmSMYDV4X8irfw7xM8kjC1yQVamqMZvcx5Kj8VjyWqoXE9vILCtBaoeSKn2MK1_MH_IZL95udzgSdUD5s0dZ7LOiVfEenKymudmLeBXIley2bqmjQpepbzxeioCJZn6C1h2BhQxWlTzfRJTHxNK2rKjpo2DiXoTUUvoABE5xmLr31wpOyDH2XQItVCjrDXaXKsG3InppGiHYHOQV5YFxcUczIiDpTmJNHrV')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
</div>
<div className="relative z-10 px-margin-desktop pb-stack-xl max-w-4xl">
<span className="font-label-bold text-label-bold text-secondary-container uppercase tracking-widest mb-stack-sm block">SOSTENIBILIDAD EN MOVIMIENTO</span>
<h1 className="font-display-2xl text-display-2xl text-white uppercase mb-stack-md">MOVE TO ZERO</h1>
<p className="font-body-lg text-body-lg text-white/90 mb-stack-lg max-w-2xl leading-tight">
                    Nuestro camino hacia el cero carbono y cero residuos. Descubre el calzado de mayor rendimiento diseñado con materiales reciclados sin comprometer la velocidad o la potencia.
                </p>
<div className="flex flex-wrap gap-stack-md">
<button className="bg-white text-black px-10 py-4 font-label-bold uppercase hover:bg-secondary-container hover:text-white transition-all transform active:scale-95">COMPRAR SOSTENIBLE</button>
<button className="border-2 border-white text-white px-10 py-4 font-label-bold uppercase hover:bg-white hover:text-black transition-all transform active:scale-95">NUESTRA MISIÓN</button>
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
<h3 className="font-display-lg text-headline-lg uppercase mb-2">RUNNING</h3>
<button className="bg-white text-black px-6 py-2 font-label-bold uppercase text-label-sm">EXPLORAR</button>
</div>
</div>
{/* Basketball */}
<div className="relative group cursor-pointer overflow-hidden aspect-[4/5]">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="An intense, low-angle shot of a basketball player in mid-air performing a slam dunk on a gritty urban outdoor court. The player is silhouetted against a bright white sky, wearing a black performance jersey and high-top basketball sneakers. The scene is rendered in high-contrast black and white with a subtle grain texture, emphasizing raw energy and street-ball heritage." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRwG-bi0eiRF61gu-fNaQfTNSbI-xM9ltuXoEIi_DgWnhbj1CLAiNsOQOWL0LgwDX8pqKL7dnnNbJJG3u3wDE8S4UWG0fHPQOQCykvRATPs08vhwWvJJux2qf4yGBGQGC2s6m8IX0A9qu6zvHzL9EiLVqN2ceG4aHMzLLeQ9EHXrVtIBBLUt1gF15gXVKFLW5e4lyC_SUB6weYtfHCNmwaFGTdzj2ArYv-mJUXHcyItSQ2qRGwH7S5')" }}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-10 left-10 text-white">
<h3 className="font-display-lg text-headline-lg uppercase mb-2">BASKETBALL</h3>
<button className="bg-white text-black px-6 py-2 font-label-bold uppercase text-label-sm">EXPLORAR</button>
</div>
</div>
{/* Lifestyle */}
<div className="relative group cursor-pointer overflow-hidden aspect-[4/5]">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A stylish lifestyle photograph of a person leaning against a minimalist concrete wall in an urban setting. They are wearing a premium fleece hoodie and iconic retro sneakers in a monochromatic grey and white palette. The lighting is soft and diffused, creating a modern, sophisticated look. The focus is on the textures of the fabric and the clean lines of the footwear design." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNKcRtCvHGyOm8_tmw5AWoxWEi2l04pc7SgCC_8Sow8NhO9JKhcbZq4tyLZ_kfksO4cnC08mlsxmTRPN9QIpDq1qHt_9EtQBYNXPWEFPoYntfaYTU_rXaPUVgaoEValmCEV1xWz-ONqL_4mTIup0H8On0t2Vl6FAqaXRYIArQQSWT3B6fu1KErNFwnKj5ZpnDHlihLxBp_lwMmVhfnADTseEDI3rGd8lxrMOWt6s1mzwpzIs23tE-9')" }}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-10 left-10 text-white">
<h3 className="font-display-lg text-headline-lg uppercase mb-2">LIFESTYLE</h3>
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
<div className="flex gap-gutter px-margin-desktop overflow-x-auto no-scrollbar snap-x snap-mandatory" ref={carouselRef}>
{/* Product Card 1 */}
<div className="product-card flex-shrink-0 w-80 snap-start">
<div className="aspect-square bg-white overflow-hidden mb-stack-md">
<img className="zoom-img w-full h-full object-cover transition-transform duration-500" data-alt="Product shot of a sleek, all-black performance running shoe featuring a carbon-fiber plate and a translucent mesh upper. The shoe is positioned at a 45-degree angle on a pristine white background. High-key studio lighting emphasizes the sharp angles and intricate textures. The style is minimalist and high-end, highlighting the premium engineering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwKHKfvtTRixAhOdJe0aOFZHdFt4ebuzWFcRgJyaROR_jXyHh5AQqcL-GDFQ-uvZZPiSyoaEPUNvKfSistf1lv04-m5vJVxutGgkWv3jsi64VOp-UJMh08o3P7SdCwT7j2PH_ABozmymd5ncLZFASa2Icjo5qauFj6aFu5BqxHk5rN8leL0PQAAbWLGY8zR6AXdDcktZmvifxr_hqF0Dyy6ZtdTihE7VzZkkEMYEdJVS5olanQqc4R"/>
</div>
<div className="space-y-1">
<p className="font-label-bold text-secondary-container text-label-sm uppercase">PRÓXIMAMENTE</p>
<h4 className="font-label-bold text-label-bold uppercase">Apex Velocity Elite</h4>
<p className="text-on-surface-variant text-label-sm">Road Running Shoes</p>
<p className="font-label-bold mt-2">$245.00</p>
</div>
</div>
{/* Product Card 2 */}
<div className="product-card flex-shrink-0 w-80 snap-start">
<div className="aspect-square bg-white overflow-hidden mb-stack-md">
<img className="zoom-img w-full h-full object-cover transition-transform duration-500" data-alt="A clean studio product photograph of a modern basketball high-top sneaker in a vibrant 'Electric Orange' and 'Deep Slate' colorway. The shoe is suspended in mid-air, showing off the multi-directional traction pattern on the outsole. The lighting is bright and even, casting subtle soft shadows on a light grey background. Professional, high-contrast, and focused on design detail." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkGCledbgp3d1sYxMAGdtz3LTCG22o9mQqazzFQCKUX0-kpUVZjIsjlt8pPs8v_pYTNaQrvwUmqVuG7ryV-CmpX2OE-fPXPdPHOtVP2gdMxedn3FAzAQrj8mwCdaC6GQ01JuIh_6jqqiOn0FHkn-X-JXOuye8xrgWC_vyYPlzAsSojnGUm1TVGVoB5q63QNiVTD6k4uYkyvUvDZOvHQmMCwYjXC3wuswZKonVzerffz2UKE_6q2Gyc"/>
</div>
<div className="space-y-1">
<p className="font-label-bold text-primary text-label-sm uppercase">EXCLUSIVO PARA MIEMBROS</p>
<h4 className="font-label-bold text-label-bold uppercase">Court Crusher G1</h4>
<p className="text-on-surface-variant text-label-sm">Basketball Shoes</p>
<p className="font-label-bold mt-2">$180.00</p>
</div>
</div>
{/* Product Card 3 */}
<div className="product-card flex-shrink-0 w-80 snap-start">
<div className="aspect-square bg-white overflow-hidden mb-stack-md">
<img className="zoom-img w-full h-full object-cover transition-transform duration-500" data-alt="Detailed close-up of a minimalist lifestyle sneaker made from premium white pebbled leather with a black recycled rubber sole. The shoe features a clean silhouette and subtle embossed logo. Shot in a high-key studio setting on a stark white background with sharp, clear definition. The aesthetic is extremely modern and high-fashion." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHiKdEN1uSIzA1hLUGtPmRHNvuD7Wxu4GtuofvlKvllwnt8IaFfYnOmB71N-99kK1Batzn68Zv3jYzLXmYikEbp4Z-E0AuIWL1vHFSJdZVoqDHmvxzrjHZOBBqf6XJzhjhyH6eEXSEebPAUxnyM84Z0kEDB1EwT_2MgR8KWxvxpX7Czdf6OCuLbCXCGF5_butmn8QOmR7bRlOa8cjabMUcLMgyYkMBRgp6osCBiWjwlBp35tpQDWUF"/>
</div>
<div className="space-y-1">
<p className="font-label-bold text-on-surface-variant text-label-sm uppercase">RECIÉN LLEGADO</p>
<h4 className="font-label-bold text-label-bold uppercase">Urban Core Low</h4>
<p className="text-on-surface-variant text-label-sm">Lifestyle Shoes</p>
<p className="font-label-bold mt-2">$130.00</p>
</div>
</div>
{/* Product Card 4 */}
<div className="product-card flex-shrink-0 w-80 snap-start">
<div className="aspect-square bg-white overflow-hidden mb-stack-md">
<img className="zoom-img w-full h-full object-cover transition-transform duration-500" data-alt="A product shot of a futuristic athletic jacket in a deep obsidian black with reflective silver piping and a high-collar design. The jacket is displayed on an invisible mannequin to show the tailored, athletic fit. The background is a cool-toned light grey with subtle gradient lighting that highlights the waterproof tech-fabric texture. Minimalist and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmz5vkP-ifQDVInRqp9ybJ_Huwe66VtS4FqIWko-UalUMbuTSm7EOzO1YSccer5jKxl_Opmm4n8y8vekcPMnmYWZ8EAz5oNlmWK7Z3Xa3RX1rci9_RdQP-ySvMrHfLxknALL7p9EIlIw6Jsix0B0S4UiCm_DBjViL712V9iq_jx9aKIjgF2CgMq2RSl1ntnrYRJzzXcX72gawVusV7UlTQFLPg3L7JfdT_jG6V2rIRod1BHTkn77uK"/>
</div>
<div className="space-y-1">
<p className="font-label-bold text-on-surface-variant text-label-sm uppercase">MÁS VENDIDO</p>
<h4 className="font-label-bold text-label-bold uppercase">Storm-Fit Tech Shell</h4>
<p className="text-on-surface-variant text-label-sm">Athletic Outerwear</p>
<p className="font-label-bold mt-2">$210.00</p>
</div>
</div>
{/* Product Card 5 */}
<div className="product-card flex-shrink-0 w-80 snap-start">
<div className="aspect-square bg-white overflow-hidden mb-stack-md">
<img className="zoom-img w-full h-full object-cover transition-transform duration-500" data-alt="A studio shot of a high-performance running singlet in a neon lime green breathable mesh fabric. The garment is laid flat on a clean white surface with sharp geometric styling. The lighting is direct and bright, emphasizing the lightweight, porous nature of the material. The aesthetic is vibrant, technical, and high-performance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlNa9NhEGpxYppemY8NyKGMRyLZzp7tgjQPQSqF0f01y4jJn3uspNFGuwq_kqX7mxaScd3xqvYgJFodE-YTzDCm7AW4V0WBRaFYidRb48-yLFOWXaeK19sqIRO6A6g2SIqubvX6fpRKH_gyBpyZHRaXQyf98GDsVpsD_-lE3GsWOXFYsi8aFisnHBr_Ej2rVWsPuesShOhgwbgB5zBjP4SXoL2k6ukvpKq07Brc68sG8V0Q6OVGXZD"/>
</div>
<div className="space-y-1">
<p className="font-label-bold text-secondary-container text-label-sm uppercase">Edición Limitada</p>
<h4 className="font-label-bold text-label-bold uppercase">Aero-Breathe Singlet</h4>
<p className="text-on-surface-variant text-label-sm">Running Apparel</p>
<p className="font-label-bold mt-2">$65.00</p>
</div>
</div>
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
<div className="font-display-lg text-headline-lg text-on-primary dark:text-on-primary-container mb-stack-md">APEX ATHLETICS</div>
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
<a className="font-label-sm text-label-sm text-outline-variant dark:text-outline hover:text-on-primary transition-colors" href="#">NUEVOS LANZAMIENTOS</a>
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
<p className="font-label-sm text-label-sm uppercase tracking-tighter opacity-60">© 2024 APEX ATHLETICS. TODOS LOS DERECHOS RESERVADOS</p>
</div>
</div>
</footer>


    </div>
  )
}
