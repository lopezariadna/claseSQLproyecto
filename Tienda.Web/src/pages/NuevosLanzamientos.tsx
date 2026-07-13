import { Link } from 'react-router-dom'

export default function NuevosLanzamientos() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary selection:text-white">

<nav className="bg-surface dark:bg-surface-dim flex justify-between items-center px-margin-desktop h-20 w-full sticky top-0 z-50 border-b border-outline-variant dark:border-outline">
<Link to="/reclamar/revision" className="flex items-center gap-3 text-primary dark:text-primary-fixed">
<img src="/arenz-tech-logo.png" alt="ArEnz Tech" className="h-14 w-auto object-contain" />
<span className="font-label-bold text-headline-lg font-extrabold tracking-wide">ArEnz Tech</span>
</Link>
<div className="hidden md:flex items-center space-x-stack-lg">
<Link className="font-label-bold text-label-bold uppercase text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 hover:text-secondary transition-colors duration-200" to="/nuevos-lanzamientos">NUEVOS LANZAMIENTOS</Link>
<a className="font-label-bold text-label-bold uppercase text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary transition-colors duration-200" href="#">HOMBRE</a>
<a className="font-label-bold text-label-bold uppercase text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary transition-colors duration-200" href="#">MUJER</a>
<a className="font-label-bold text-label-bold uppercase text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary transition-colors duration-200" href="#">NIÑOS</a>
<a className="font-label-bold text-label-bold uppercase text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary transition-colors duration-200" href="#">OFERTAS</a>
</div>
<div className="flex items-center space-x-stack-md">
<div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-label-sm w-32" placeholder="Buscar" type="text"/>
</div>
<button className="scale-95 active:scale-90 transition-transform" type="button"><span className="material-symbols-outlined text-on-surface">favorite</span></button>
<button className="scale-95 active:scale-90 transition-transform" type="button"><span className="material-symbols-outlined text-on-surface">shopping_bag</span></button>
</div>
</nav>
<main className="max-w-[1440px] mx-auto flex">
<aside className="bg-surface dark:bg-surface-dim h-[calc(100vh-80px)] w-[280px] sticky top-20 border-r border-outline-variant dark:border-outline hidden lg:flex flex-col p-stack-lg space-y-stack-md overflow-y-auto">
<div className="mb-stack-lg">
<h2 className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed">FILTROS</h2>
<p className="font-label-sm text-label-sm text-on-surface-variant">Refina tu búsqueda</p>
</div>
<div className="space-y-stack-md">
<div className="border-b border-outline-variant pb-stack-sm cursor-pointer group">
<div className="flex justify-between items-center py-2">
<span className="font-label-bold text-label-bold text-primary group-hover:text-secondary transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">category</span> Categoría
</span>
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
<div className="border-b border-outline-variant pb-stack-sm cursor-pointer group">
<div className="flex justify-between items-center py-2">
<span className="font-label-bold text-label-bold text-primary group-hover:text-secondary transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">straighten</span> Talla
</span>
<span className="material-symbols-outlined">expand_more</span>
</div>
<div className="grid grid-cols-3 gap-2 mt-2">
<button className="border border-outline-variant py-2 text-label-sm hover:border-primary" type="button">US 8</button>
<button className="border border-outline-variant py-2 text-label-sm hover:border-primary bg-primary text-white" type="button">US 9</button>
<button className="border border-outline-variant py-2 text-label-sm hover:border-primary" type="button">US 10</button>
<button className="border border-outline-variant py-2 text-label-sm hover:border-primary" type="button">US 11</button>
<button className="border border-outline-variant py-2 text-label-sm hover:border-primary" type="button">US 12</button>
</div>
</div>
<div className="border-b border-outline-variant pb-stack-sm cursor-pointer group">
<div className="flex justify-between items-center py-2">
<span className="font-label-bold text-label-bold text-primary group-hover:text-secondary transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">palette</span> Color
</span>
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
<div className="border-b border-outline-variant pb-stack-sm cursor-pointer group">
<div className="flex justify-between items-center py-2">
<span className="font-label-bold text-label-bold text-primary group-hover:text-secondary transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">payments</span> Rango de precio
</span>
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
<div className="border-b border-outline-variant pb-stack-sm cursor-pointer group">
<div className="flex justify-between items-center py-2">
<span className="font-label-bold text-label-bold text-primary group-hover:text-secondary transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">eco</span> Sostenibilidad
</span>
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
</aside>
<section className="flex-1 p-margin-desktop">
<div className="flex flex-col md:flex-row justify-between items-end mb-stack-xl gap-stack-md">
<div>
<h1 className="font-display-2xl text-display-2xl uppercase">NUEVOS LANZAMIENTOS (24)</h1>
<p className="text-on-surface-variant font-body-lg">Lleva tu rendimiento al siguiente nivel con nuestra última innovación técnica.</p>
</div>
<div className="flex items-center space-x-stack-md border-b border-primary pb-2 cursor-pointer">
<span className="font-label-bold">ORDENAR POR: DESTACADOS</span>
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
<article className="product-card bg-white group cursor-pointer transition-all duration-300">
<div className="relative aspect-[4/5] overflow-hidden bg-[#F5F5F5] flex items-center justify-center">
<img className="product-image w-full h-full object-cover transition-transform duration-500" alt="Zapatilla running negra con acentos naranja" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgAJ4uqTF-8KUzIpBjdcV2kLGnHQy0FMk7bCq0qLSblpvuLMXbtCKx7GCbbrHMIlsQSWzHtLohm4cK2jI_D5RTBb1vQtux65Rx9Z9QfZYYQjOB3pQgyP3PjmrXoqZ01LLgED_dAwBwWqVUHR-rjHrBtPyAia1ZIPoafHUPo8eNfD0CcrGVBE3_3Ct3WDpMB2UuWafh8ATwFU6Resba-o9_cAumyPWs0moq_7qOKEHBwxGpYmed6r5t"/>
<div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 font-label-bold text-[12px]">NUEVO LANZAMIENTO</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex justify-center space-x-2">
<div className="w-4 h-4 rounded-full bg-black border border-outline"></div>
<div className="w-4 h-4 rounded-full bg-secondary border border-outline"></div>
<div className="w-4 h-4 rounded-full bg-white border border-outline"></div>
</div>
</div>
<div className="p-stack-md flex flex-col space-y-1">
<h3 className="font-label-bold text-body-md uppercase group-hover:text-secondary transition-colors">Apex Alpha Runner Gen-1</h3>
<p className="text-on-surface-variant text-label-sm">Zapatillas de running para hombre</p>
<p className="font-bold text-body-md mt-2">$185.00</p>
</div>
</article>
<article className="product-card bg-white group cursor-pointer transition-all duration-300">
<div className="relative aspect-[4/5] overflow-hidden bg-[#F5F5F5] flex items-center justify-center">
<img className="product-image w-full h-full object-cover transition-transform duration-500" alt="Zapatilla de baloncesto blanca" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbdGbG8rRiOOJKjf20hUh4BieWkNLpjUf-zd7MXeiDVibsvcNcbytdDttzt3zjhiEol2Ct4jdCnyDbtNGfdUq96LBDVO6JHIYFc6IWxgTLD9U1WYu0yexW3qVMV5NwZ-Ctnq0lf3y4KE0PD6Wyy7yivFqR7-Bch2x8RFNs54FlLby2NmZBrvTcGMUBSVM0aBSkyvB6vJP0_rZonJQui6hPHu7-ezm1-4nkGdrWqIeOierCjGLUd6zt"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex justify-center space-x-2">
<div className="w-4 h-4 rounded-full bg-white border border-outline"></div>
<div className="w-4 h-4 rounded-full bg-gray-400 border border-outline"></div>
</div>
</div>
<div className="p-stack-md flex flex-col space-y-1">
<h3 className="font-label-bold text-body-md uppercase group-hover:text-secondary transition-colors">Summit Court Pro</h3>
<p className="text-on-surface-variant text-label-sm">Rendimiento en baloncesto</p>
<p className="font-bold text-body-md mt-2">$210.00</p>
</div>
</article>
<article className="product-card bg-white group cursor-pointer transition-all duration-300">
<div className="relative aspect-[4/5] overflow-hidden bg-[#F5F5F5] flex items-center justify-center">
<img className="product-image w-full h-full object-cover transition-transform duration-500" alt="Zapatilla de senderismo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk9VKm92Sjgyrw58AN1xEDeCGRevKT7rBR4lHs5ffWmCbhJiZee-JG4qLgv5l8zVArovYd4fq-y1jN12zfI7I_y2xhtoGppFO9gaWba2lDY8OvDbazOx054m1YCBfmMBlArEzEZXRSsPXkVZSubpkbeuTrYbYZ03klzbKco3VGWF44CioEmzjbkGKec1AAirUziYNNvxnzEHlu2cfhJpsJnJkw4bqIk3LOYw-5fApbEglYroRHoewr"/>
<div className="absolute top-4 right-4"><span className="material-symbols-outlined text-primary">eco</span></div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex justify-center space-x-2">
<div className="w-4 h-4 rounded-full bg-red-600 border border-outline"></div>
<div className="w-4 h-4 rounded-full bg-stone-700 border border-outline"></div>
</div>
</div>
<div className="p-stack-md flex flex-col space-y-1">
<h3 className="font-label-bold text-body-md uppercase group-hover:text-secondary transition-colors">Terra Peak Waterproof</h3>
<p className="text-on-surface-variant text-label-sm">Outdoor y senderismo</p>
<p className="font-bold text-body-md mt-2">$160.00</p>
</div>
</article>
<article className="product-card bg-white group cursor-pointer transition-all duration-300">
<div className="relative aspect-[4/5] overflow-hidden bg-[#F5F5F5] flex items-center justify-center">
<img className="product-image w-full h-full object-cover transition-transform duration-500" alt="Zapatilla lifestyle beige" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACZxJa640YU-LAWlflCZRXTRRiEAqyOPl2DyLajjnsKt1nLEF_P-HOzobg-WcDLnhSgRUQpWtzYiTem4gSpgcQhSTZF48Szwem3rKnqc4gwuPuEHwva5TbnbVj0QA7CrGBNmboa9V9ckB2RbRVEIXR51oZ9IEG2qJ4C_6bAHbRXzrDTfOjST6QsaSXyl_SbUY1ul5kgAkk6A5A4TLh5VH2fn1cdithK79ztRnTcbS4YUCNRcu-WcLn"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex justify-center space-x-2">
<div className="w-4 h-4 rounded-full bg-orange-100 border border-outline"></div>
<div className="w-4 h-4 rounded-full bg-orange-50 border border-outline"></div>
</div>
</div>
<div className="p-stack-md flex flex-col space-y-1">
<h3 className="font-label-bold text-body-md uppercase group-hover:text-secondary transition-colors">Urban Ease Suede</h3>
<p className="text-on-surface-variant text-label-sm">Lifestyle y casual</p>
<p className="font-bold text-body-md mt-2">$125.00</p>
</div>
</article>
<article className="product-card bg-white group cursor-pointer transition-all duration-300">
<div className="relative aspect-[4/5] overflow-hidden bg-[#F5F5F5] flex items-center justify-center">
<img className="product-image w-full h-full object-cover transition-transform duration-500" alt="Spike de atletismo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwwyFKjIP1EJR-3048bDi16VCrdTo5foGj0vO_UsxVsBGnZEDKFAJdJXm-Y0gJAa_pvnR0zk44AwH8VLVC1mdKSDnxxbp6ANDbuWGyPPEsW8A5HYoAEiWWbxDBe1AvUSxlH5q_C7K_1ewJl3pxLf3Vd5Ry_6hoZLYATyueOaBcScaDD0PSZtR5YxwhGlpcttO8CBK9nFbG940H_wdVx9kRkAa3d8rhvLNpsfXx-hlAzP1boqtksaz7"/>
<div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 font-label-bold text-[12px]">SERIE ELITE</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex justify-center space-x-2">
<div className="w-4 h-4 rounded-full bg-yellow-400 border border-outline"></div>
</div>
</div>
<div className="p-stack-md flex flex-col space-y-1">
<h3 className="font-label-bold text-body-md uppercase group-hover:text-secondary transition-colors">Sonic Bolt Spike</h3>
<p className="text-on-surface-variant text-label-sm">Rendimiento en atletismo</p>
<p className="font-bold text-body-md mt-2">$245.00</p>
</div>
</article>
<article className="product-card bg-white group cursor-pointer transition-all duration-300">
<div className="relative aspect-[4/5] overflow-hidden bg-[#F5F5F5] flex items-center justify-center">
<img className="product-image w-full h-full object-cover transition-transform duration-500" alt="Zapatilla de entrenamiento" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpbPnJF0a2jFbhQpibjcoWpWoAr--9ZTEY2GIjpZ46hCBkPPLO37WYillxmUzVSR_kH9oIb5upO-b2TpucSJYRMJjJnxpm_gIwJ8vwyCisDRKpAPp8TnX5yXKEEhrfBiFFyIBR4SLr23AN_cOMSTFPxKF-1lc0jItLuAjLWT9cDOkvnfDQPwzJVLQiFu-YSMWDlng2tF-LipLtY6Ghkg7GsgtLIg56RJQQ1jxwhBWLIQytEC9w9pV1"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex justify-center space-x-2">
<div className="w-4 h-4 rounded-full bg-gray-500 border border-outline"></div>
<div className="w-4 h-4 rounded-full bg-black border border-outline"></div>
</div>
</div>
<div className="p-stack-md flex flex-col space-y-1">
<h3 className="font-label-bold text-body-md uppercase group-hover:text-secondary transition-colors">Core Strength Trainer</h3>
<p className="text-on-surface-variant text-label-sm">Gimnasio y entrenamiento</p>
<p className="font-bold text-body-md mt-2">$140.00</p>
</div>
</article>
</div>
<div className="mt-stack-xl flex justify-center items-center space-x-stack-md">
<button className="p-3 border border-outline-variant hover:border-primary transition-colors" type="button">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<div className="flex space-x-2">
<button className="w-10 h-10 flex items-center justify-center bg-primary text-white font-bold" type="button">1</button>
<button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container transition-colors" type="button">2</button>
<button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container transition-colors" type="button">3</button>
<button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container transition-colors" type="button">4</button>
</div>
<button className="p-3 border border-outline-variant hover:border-primary transition-colors" type="button">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</section>
</main>
<footer className="bg-primary dark:bg-primary-container w-full py-stack-xl px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter mt-stack-xl">
<div className="col-span-1 md:col-span-1 flex flex-col space-y-stack-md">
<div>
<img src="/arenz-tech-logo.png" alt="ArEnz Tech" className="h-16 w-auto object-contain mb-2" />
<div className="font-label-bold text-headline-lg font-extrabold tracking-wide text-on-primary dark:text-on-primary-container">ArEnz Tech</div>
</div>
<p className="text-outline-variant font-label-sm max-w-xs">Superando los límites del rendimiento humano a través de un diseño sin concesiones y una ingeniería de élite.</p>
</div>
<div className="flex flex-col space-y-4">
<h4 className="font-label-bold text-white uppercase mb-2">TIENDA</h4>
<Link className="font-label-sm text-outline-variant hover:text-secondary-fixed transition-colors" to="/nuevos-lanzamientos">NUEVOS LANZAMIENTOS</Link>
<a className="font-label-sm text-outline-variant hover:text-secondary-fixed transition-colors" href="#">HOMBRE</a>
<a className="font-label-sm text-outline-variant hover:text-secondary-fixed transition-colors" href="#">MUJER</a>
<a className="font-label-sm text-outline-variant hover:text-secondary-fixed transition-colors" href="#">NIÑOS</a>
<a className="font-label-sm text-outline-variant hover:text-secondary-fixed transition-colors" href="#">OFERTAS</a>
</div>
<div className="flex flex-col space-y-4">
<h4 className="font-label-bold text-white uppercase mb-2">AYUDA</h4>
<a className="font-label-sm text-outline-variant hover:text-secondary-fixed transition-colors" href="#">BUSCAR TIENDA</a>
<a className="font-label-sm text-outline-variant hover:text-secondary-fixed transition-colors" href="#">ESTADO DEL PEDIDO</a>
<a className="font-label-sm text-outline-variant hover:text-secondary-fixed transition-colors" href="#">ENVÍOS</a>
<a className="font-label-sm text-outline-variant hover:text-secondary-fixed transition-colors" href="#">DEVOLUCIONES</a>
<a className="font-label-sm text-outline-variant hover:text-secondary-fixed transition-colors" href="#">OPCIONES DE PAGO</a>
<a className="font-label-sm text-outline-variant hover:text-secondary-fixed transition-colors" href="#">CONTACTO</a>
</div>
<div className="flex flex-col space-y-stack-md">
<h4 className="font-label-bold text-white uppercase mb-2">MANTENTE CONECTADO</h4>
<div className="flex space-x-4">
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all" type="button">
<span className="material-symbols-outlined">share</span>
</button>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all" type="button">
<span className="material-symbols-outlined">public</span>
</button>
</div>
<div className="pt-stack-md">
<p className="font-label-sm text-outline-variant uppercase">© 2024 ArEnz Tech. TODOS LOS DERECHOS RESERVADOS</p>
</div>
</div>
</footer>

    </div>
  )
}
