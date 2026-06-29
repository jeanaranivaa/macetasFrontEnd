import { useState } from "react";
import { Search, Heart, User, ShoppingBag, Star, ChevronLeft, ChevronRight, MessageSquare, Phone, Mail } from "lucide-react";
import logoMacetas from "../assets/logoMacetas.png";

export default function Home() {
  // Estado para los filtros de "Más vendidos"
  const [activeTab, setActiveTab] = useState("MACETAS");

  // Mock de productos para "Más vendidos"
  const bestSellers = [
    { id: 1, name: "Maceta redonda de arcilla", price: "$12.00", rating: "4.5", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80", type: "MACETAS" },
    { id: 2, name: "Maceta blanca de piso", price: "$18.00", rating: "4.8", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=500&q=80", type: "MACETAS" },
    { id: 3, name: "Maceta para interiores", price: "$10.00", rating: "4.2", img: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=500&q=80", type: "MACETAS" },
    { id: 4, name: "Maceta colgante minimalista", price: "$15.00", rating: "4.6", img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=500&q=80", type: "MACETAS" }
  ];

  // Mock de productos para "Nuevos Productos"
  const newProducts = [
    { id: 5, name: "Digital Gift Card", price: "$25.00", rating: "5.0", img: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=500&q=80", isGiftCard: true },
    { id: 6, name: "Macetitas de Caritas", price: "$14.00", rating: "4.9", img: "https://images.unsplash.com/photo-1535134265089-2eb48215584e?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Macetas Estilo Cubo de Cristal", price: "$22.00", rating: "4.7", img: "https://images.unsplash.com/photo-1520412098697-663f45ac555b?auto=format&fit=crop&w=500&q=80" }
  ];

  // Mock de testimonios ("Clientes Felices")
  const testimonials = [
    { id: 1, name: "Mariela Martinez", date: "Hace 2 semanas", text: "Me encantó la maceta de arcilla, el empaque vino super protegido y llegó antes de tiempo a mi casa. Excelente servicio.", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
    { id: 2, name: "Zulma Cruz", date: "Hace 1 mes", text: "Compré tres velas aromáticas y huelen riquísimo, el cuarto se impregna super rápido. Recomiendo al 100%.", rating: 5, avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" },
    { id: 3, name: "Roberto Flores", date: "Hace 3 días", text: "Excelente atención al cliente, me resolvieron unas dudas sobre el cuidado de mis plantas de inmediato por WhatsApp.", rating: 5, avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80" },
    { id: 4, name: "Jason Castro", date: "Hace 1 semana", text: "La Gift Card digital es un regalazo, se la mandé a mi madre por su cumpleaños y le fascinó poder elegir sus propias macetas.", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fcfdfc] font-sans antialiased text-zinc-800 selection:bg-[#064225]/10 selection:text-[#064225]">
      
      {/* ================= BARRA DE NAVEGACIÓN COMPLETA ================= */}
      <header className="w-full bg-white border-b border-zinc-100 sticky top-0 z-50 shadow-xs">
        <div className="w-full bg-[#064225] text-white text-center py-2 text-xs font-medium tracking-wide">
          Envío gratis a compras mayores de $15.00
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button className="text-zinc-700 hover:text-[#064225] transition-colors cursor-pointer p-2">
            <Search size={20} />
          </button>
          <div className="flex items-center justify-center cursor-pointer">
            <img src={logoMacetas} alt="Macetas Logo" className="h-12 object-contain" />
          </div>
          <div className="flex items-center gap-4 text-zinc-700">
            <button className="hover:text-[#064225] transition-colors cursor-pointer p-1"><Heart size={20} /></button>
            <button className="hover:text-[#064225] transition-colors cursor-pointer p-1"><User size={20} /></button>
            <button className="hover:text-[#064225] transition-colors cursor-pointer p-1"><ShoppingBag size={20} /></button>
          </div>
        </div>

        <nav className="w-full border-t border-zinc-100 bg-white hidden sm:block">
          <ul className="flex items-center justify-center gap-8 py-3 text-xs font-semibold text-[#064225]/90 tracking-wide uppercase">
            {["Lo más Vendido", "Macetas", "Velas", "Otros", "Plantas y Cuidados", "Ofertas", "Nosotros"].map((cat) => (
              <li key={cat} className="hover:text-[#032d18] cursor-pointer transition-colors relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#064225] hover:after:w-full after:transition-all">
                {cat}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ================= HERO BANNER PRINCIPAL ================= */}
      <div className="w-full h-[520px] relative overflow-hidden bg-zinc-200">
        <img 
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=80" 
          alt="Estantería con Macetas y Plantas organizadas" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* ================= CONTENIDO CENTRAL DEL BOCETO ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-20">
        
        {/* 1. SECCIÓN: MÁS VENDIDOS */}
        <section className="w-full flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5">
            <h2 className="text-2xl font-bold text-[#064225] tracking-tight">Más vendidos</h2>
            
            <div className="flex flex-wrap items-center gap-2">
              {["MACETAS", "VELAS", "PA REGALOS", "COMBOS"].map((tab) => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer tracking-wider
                    ${activeTab === tab ? "bg-[#064225] text-white shadow-md" : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="hidden md:flex items-center gap-2">
              <button className="p-2 rounded-full border border-zinc-200 text-zinc-400 hover:text-zinc-700 bg-white shadow-xs cursor-pointer"><ChevronLeft size={16} /></button>
              <button className="p-2 rounded-full border border-zinc-200 text-zinc-400 hover:text-zinc-700 bg-white shadow-xs cursor-pointer"><ChevronRight size={16} /></button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map((prod) => (
              <div key={prod.id} className="group bg-white rounded-xl overflow-hidden flex flex-col transition-all duration-300">
                <div className="w-full aspect-[4/5] bg-zinc-50 relative rounded-xl overflow-hidden mb-3 shadow-xs border border-zinc-100">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center gap-1 text-[10px] font-bold text-zinc-800 shadow-xs">
                    <Star size={10} className="fill-amber-400 text-amber-400" /> {prod.rating}
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 px-1">
                  <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">Macetas</span>
                  <h3 className="text-sm font-semibold text-[#064225] tracking-tight line-clamp-1 group-hover:underline">{prod.name}</h3>
                  <p className="text-xs font-bold text-zinc-900 mt-0.5">{prod.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* 2. SECCIÓN: COLECCIONES */}
        <section className="w-full flex flex-col gap-6">
          <div className="border-b border-zinc-100 pb-4">
            <h2 className="text-2xl font-bold text-[#064225] tracking-tight">Colecciones</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "MACETAS", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&q=80" },
              { title: "VELAS", img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=400&q=80" },
              { title: "PLANTAS", img: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=400&q=80" },
              { title: "COMBOS", img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=400&q=80" }
            ].map((col) => (
              <div key={col.title} className="w-full aspect-square relative rounded-xl overflow-hidden group cursor-pointer shadow-xs border border-zinc-100">
                <img src={col.img} alt={col.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="font-bold text-base tracking-widest uppercase">{col.title}</h3>
                  <span className="text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium tracking-wide">Ver más →</span>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* 3. SECCIÓN: ¿NECESITAS AYUDA? */}
        <section className="w-full bg-[#f4f6f4] rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 border border-zinc-200/40 shadow-xs">
          <div className="flex flex-col gap-2 max-w-md">
            <h2 className="text-xl font-bold text-[#064225] tracking-tight">¿Necesitas ayuda?</h2>
            <p className="text-xs text-zinc-600 leading-relaxed font-normal">
              Te asistimos para encontrar tu planta ideal y maceta perfecta. Escríbenos o danos una llamada para darte consejos personalizados de mantenimiento y decoración para tus espacios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
            <a href="#chat" className="flex items-center justify-center gap-3 bg-white hover:bg-zinc-50 border border-zinc-200/80 rounded-xl px-6 py-4 transition-all shadow-xs group">
              <MessageSquare size={18} className="text-[#064225]" />
              <div className="flex flex-col items-start">
                <span className="text-xs font-bold text-[#064225]">Chat</span>
                <span className="text-[10px] text-zinc-400 font-normal">Asistencia en vivo por WhatsApp</span>
              </div>
            </a>
            <a href="#call" className="flex items-center justify-center gap-3 bg-white hover:bg-zinc-50 border border-zinc-200/80 rounded-xl px-6 py-4 transition-all shadow-xs group">
              <Phone size={18} className="text-[#064225]" />
              <div className="flex flex-col items-start">
                <span className="text-xs font-bold text-[#064225]">Llamada</span>
                <span className="text-[10px] text-zinc-400 font-normal">Lunes a Viernes 8am - 5pm</span>
              </div>
            </a>
            <a href="#email" className="flex items-center justify-center gap-3 bg-white hover:bg-zinc-50 border border-zinc-200/80 rounded-xl px-6 py-4 transition-all shadow-xs group">
              <Mail size={18} className="text-[#064225]" />
              <div className="flex flex-col items-start">
                <span className="text-xs font-bold text-[#064225]">Email</span>
                <span className="text-[10px] text-zinc-400 font-normal">Correos y cotizaciones especiales</span>
              </div>
            </a>
          </div>
        </section>


        {/* 4. SECCIÓN: NUEVOS PRODUCTOS */}
        <section className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <h2 className="text-2xl font-bold text-[#064225] tracking-tight">Nuevos Productos</h2>
            <a href="#todos" className="text-xs font-bold text-[#064225] hover:underline tracking-tight">
              Descubrir más productos &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newProducts.map((prod) => (
              <div key={prod.id} className="group bg-white rounded-xl overflow-hidden flex flex-col transition-all duration-300">
                <div className="w-full aspect-[4/5] bg-zinc-50 relative rounded-xl overflow-hidden mb-3 shadow-xs border border-zinc-100">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                  
                  {prod.isGiftCard && (
                    <div className="absolute top-3 left-3 bg-[#064225] text-white text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      Mas Venta
                    </div>
                  )}
                  
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center gap-1 text-[10px] font-bold text-zinc-800 shadow-xs">
                    <Star size={10} className="fill-amber-400 text-amber-400" /> {prod.rating}
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 px-1">
                  <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">Macetas</span>
                  <h3 className="text-sm font-semibold text-[#064225] tracking-tight line-clamp-1 group-hover:underline">{prod.name}</h3>
                  <p className="text-xs font-bold text-zinc-900 mt-0.5">{prod.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* 5. SECCIÓN: CLIENTES FELICES */}
        <section className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <h2 className="text-2xl font-bold text-[#064225] tracking-tight">Clientes Felices</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full border border-zinc-200 text-zinc-400 hover:text-zinc-700 bg-white shadow-xs cursor-pointer"><ChevronLeft size={16} /></button>
              <button className="p-2 rounded-full border border-zinc-200 text-zinc-400 hover:text-zinc-700 bg-white shadow-xs cursor-pointer"><ChevronRight size={16} /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-xl border border-zinc-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] p-5 flex flex-col gap-3 justify-between">
                <div className="flex flex-col gap-2">
                  {/* Estrellas en fila */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal line-clamp-4">
                    "{t.text}"
                  </p>
                </div>
                
                {/* Info del Cliente */}
                <div className="flex items-center gap-3 border-t border-zinc-100 pt-3 mt-1">
                  <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#064225] tracking-tight">{t.name}</span>
                    <span className="text-[10px] text-zinc-400 font-normal">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ================= FOOTER COMPLETO DEL BOCETO ================= */}
      <footer className="w-full bg-[#e9ebe9] border-t border-zinc-200/80 pt-16 pb-6 text-zinc-700 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          
          <div>
            <h4 className="font-bold text-[#064225] uppercase tracking-wider mb-5">Servicio al Cliente</h4>
            <ul className="flex flex-col gap-3 text-zinc-600 font-medium">
              <li className="hover:underline hover:text-[#064225] cursor-pointer">Preguntas Frecuentes</li>
              <li className="hover:underline hover:text-[#064225] cursor-pointer">Contáctanos</li>
              <li className="hover:underline hover:text-[#064225] cursor-pointer">Reembolsos</li>
              <li className="hover:underline hover:text-[#064225] cursor-pointer">Políticas de Envío</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#064225] uppercase tracking-wider mb-5">Información</h4>
            <ul className="flex flex-col gap-3 text-zinc-600 font-medium">
              <li className="hover:underline hover:text-[#064225] cursor-pointer">Mi Cuenta</li>
              <li className="hover:underline hover:text-[#064225] cursor-pointer">Tiendas</li>
              <li className="hover:underline hover:text-[#064225] cursor-pointer">Sobre Nosotros</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#064225] uppercase tracking-wider mb-5">Siguenos</h4>
            <ul className="flex flex-col gap-3 text-zinc-600 font-medium">
              <li className="hover:underline hover:text-[#064225] cursor-pointer">Ver Pedidos</li>
              <li className="hover:underline hover:text-[#064225] cursor-pointer">Cupones de Descuento</li>
              <li className="hover:underline hover:text-[#064225] cursor-pointer">Preguntas de Clientes</li>
            </ul>
          </div>

          {/* Caja Newsletter */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#064225] text-sm tracking-tight">Mantente al Tanto</h4>
            <p className="text-zinc-600 leading-relaxed font-normal">
              Recibe un cupón de descuento en tu primer compra y entérate de lanzamientos y promociones especiales.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <input 
                type="email" 
                placeholder="Ingresa tu correo" 
                className="w-full h-11 px-4 rounded-md bg-white border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#064225] focus:border-[#064225] transition-all"
              />
              <button className="w-full h-11 rounded-md bg-[#064225] text-white font-semibold hover:bg-[#032d18] transition-colors cursor-pointer shadow-sm tracking-wide">
                Suscribirse
              </button>
            </div>
          </div>

        </div>

        {/* Línea final e Identidad de Marca */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-300/70 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={logoMacetas} alt="Macetas Mini" className="h-8 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          <p className="text-zinc-500 text-[11px] font-normal">&copy; 2026 Macetas S.A. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}