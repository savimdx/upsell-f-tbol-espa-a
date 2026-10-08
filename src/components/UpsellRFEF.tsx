import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Check, 
  Lock, 
  Zap,
  ArrowRight
} from 'lucide-react';

const MOCKUP_PACK_IMG = "https://i.ibb.co/39KMvV3C/Chat-GPT-Image-1-de-set-de-2026-10-12-46.png";

interface UpsellRFEFProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellRFEF({ onAccept, onDecline }: UpsellRFEFProps) {
  const [secondsLeft, setSecondsLeft] = useState(1511); // 25:11

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 1 ? 1511 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // HOTMART - Sales Funnel Widget
  // script load and setup
  useEffect(() => {
    let mounted = false;

    const initSalesFunnel = () => {
      if (mounted) return;
      const checkoutElements = (window as any).checkoutElements;
      const container = document.getElementById('hotmart-sales-funnel');
      if (checkoutElements && container) {
        try {
          checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
          mounted = true;
        } catch (err) {
          console.error("Error initializing Hotmart sales funnel widget:", err);
        }
      }
    };

    if ((window as any).checkoutElements) {
      initSalesFunnel();
    } else {
      let script = document.querySelector(
        'script[src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"]'
      ) as HTMLScriptElement;

      if (!script) {
        script = document.createElement('script');
        script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
        script.async = true;
        document.head.appendChild(script);
      }

      script.addEventListener('load', () => {
        initSalesFunnel();
      }, { once: true });
    }

    const timer = setTimeout(() => {
      if (!mounted) {
        initSalesFunnel();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div id="downsell-page" className="relative min-h-screen bg-white text-slate-900 antialiased overflow-x-clip font-sans pb-16 selection:bg-orange-500 selection:text-white">
      
      {/* Soccer field line overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Subtle warm background highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* ================= 2. MENSAJE DE OFERTA ESPECIAL & 3. CUENTA REGRESIVA ================= */}
      <div className="bg-[#E61E05] text-white py-1.5 sm:py-2 px-3 shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex flex-row items-center justify-center gap-3 sm:gap-4 text-center">
          <div className="flex items-center gap-1 sm:gap-1.5 font-black tracking-wider text-xs sm:text-sm uppercase">
            <span className="text-sm sm:text-base select-none animate-pulse">🔥</span>
            <span>¡OFERTA ESPECIAL DISPONIBLE SÓLO HOY!</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#9c1202]/50 border border-white/10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-black font-mono tracking-wider">
            <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white animate-pulse" />
            <span>{formatTime(secondsLeft)}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8 relative z-10 space-y-8">
        
        {/* ================= 4. INDICACIÓN PASO 2 DE 4 & 5. PROGRESO ================= */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden max-w-3xl mx-auto text-slate-900">
          <div className="text-center">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black tracking-wide leading-snug uppercase text-slate-900">
              PASO 2 DE 4: <span className="text-orange-600">¡SÓLO QUEDAN UNOS SEGUNDOS!</span> TU PEDIDO PRINCIPAL YA ESTÁ RESERVADO
            </h2>
          </div>
          
          <div className="flex items-center justify-between gap-4 mt-6 max-w-2xl mx-auto">
            <div className="relative flex-1 bg-slate-100 h-4.5 rounded-full overflow-hidden border border-slate-200">
              <div 
                className="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(249,115,22,0.3)]"
                style={{ width: '85%' }}
              />
            </div>
            <span className="text-orange-600 text-sm sm:text-base font-black tracking-widest whitespace-nowrap uppercase">
              85% COMPLETADO
            </span>
          </div>
        </div>
        
        {/* ================= 6. TÍTULO PRINCIPAL & 7. SUBTÍTULO ================= */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-slate-900 uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600">
              ¡APROVECHA EL PACK ENTRENADOR DE ÉLITE
            </span> <br />
            <span>Y LLEVA TUS ENTRENAMIENTOS AL SIGUIENTE NIVEL!</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Una selección completa de 3 materiales prácticos con 309 ejercicios y tareas para preparar entrenamientos más estructurados, dinámicos y profesionales.
          </p>
        </div>

        {/* ================= COMPACT HERO CARD ================= */}
        <div className="flex flex-col gap-6 bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden items-center max-w-3xl mx-auto">
          
          {/* ================= 8. MOCKUP PRINCIPAL DEL PRODUCTO ================= */}
          <div className="w-full flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-[560px] flex items-center justify-center">
              <picture className="w-full flex items-center justify-center">
                <img 
                  src="https://i.ibb.co/39KMvV3C/Chat-GPT-Image-1-de-set-de-2026-10-12-46.png" 
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = MOCKUP_PACK_IMG;
                  }}
                  alt="🔥 Pack Entrenador de Élite - 309 Ejercicios y Tareas en Fútbol" 
                  className="w-full h-auto max-h-[520px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:scale-[1.02] block"
                  loading="eager"
                  // @ts-ignore
                  fetchPriority="high"
                  decoding="async"
                  width={640}
                  height={640}
                />
              </picture>
            </div>
          </div>

          {/* ================= 9. SECCIÓN LO QUE RECIBE EL CLIENTE ================= */}
          <div className="w-full space-y-4">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-orange-500 flex-shrink-0" />
              <span>Lo que recibes instantáneamente en tu correo electrónico:</span>
            </h3>

            {/* ================= 10. LISTA DE VENTAJAS ================= */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-slate-900">158 Ejercicios de Pase y Control en Fútbol</span> : Tareas prácticas para desarrollar la precisión técnica, el control orientado, la velocidad de circulación y el dominio del balón.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-slate-900">101 Tareas del Juego de Posición en Fútbol</span> : Ruegos y situaciones posicionales para mejorar la inteligencia táctica, la toma rápida de decisiones y el juego colectivo.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-slate-900">50 Ejercicios Físicos con Balón en Fútbol</span> : Circuitos integrados para trabajar velocidad, resistencia, explosividad y coordinación motriz sin perder el contacto con el balón.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-slate-900">Sesiones más dinámicas y variadas</span> : Planificaciones listas para usar que te ahorrarán horas de preparación y motivarán al máximo a tus jugadores.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-slate-900">Adaptable a todas las categorías</span> : Contenidos y progresiones perfectamente aplicables desde fútbol formativo hasta categorías juveniles y sénior.
                </p>
              </div>

              {/* ================= 11. MENSAJE DE ACCESO INMEDIATO ================= */}
              <div className="bg-orange-50/70 border border-orange-200 rounded-xl p-3.5 flex items-center gap-3">
                <Zap className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <p className="text-xs sm:text-sm font-bold text-orange-950">
                  Todo en un solo pack digital completo (3 materiales • 309 tareas), listo para consultar, descargar y aplicar en el campo.
                </p>
              </div>
            </div>

            {/* ================= 12. BLOQUE OFERTA, 13. PRECIO & 14. INFORMACIÓN DE PAGO ================= */}
            <div className="pt-6 border-t border-slate-200 flex flex-col items-center justify-center gap-4 text-center bg-orange-50/40 p-4 rounded-xl border border-orange-100">
              <div className="flex flex-col items-center justify-center gap-1.5 bg-white border-2 border-orange-500 px-3 sm:px-8 py-5 rounded-2xl w-full max-w-lg shadow-[0_0_20px_rgba(249,115,22,0.15)]">
                <span className="text-[11px] sm:text-xs text-orange-700 uppercase tracking-widest font-black">
                  OFERTA ESPECIAL EXCLUSIVA
                </span>
                <span className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider font-extrabold">
                  🔥 PACK ENTRENADOR DE ÉLITE
                </span>
                <span className="text-xs text-orange-600 uppercase tracking-widest font-black mt-1">
                  ACCESO PRIVILEGIADO HOY:
                </span>
                <div className="flex items-center justify-center text-[#FF5500] font-['Montserrat','Arial_Black',sans-serif] drop-shadow-[0_2px_8px_rgba(0,0,0,0.14)] py-1 whitespace-nowrap">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-[900] tracking-tight leading-none">
                    9 €
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider text-center font-bold">
                  Pago único • Acceso inmediato
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* ================= TARJETA INTERACTIVA DE OFERTA DE ALTA CONVERSIÓN ================= */}
        <div className="bg-gradient-to-b from-orange-50/80 via-white to-white border-2 border-orange-500 rounded-2xl p-6 text-center space-y-6 shadow-xl relative">
          
          <div className="space-y-1.5 pt-2">
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 uppercase tracking-tight">
              ¡LLEVA TUS ENTRENAMIENTOS AL SIGUIENTE NIVEL!
            </h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto font-medium">
              Haz clic a continuación para añadir esta oferta exclusiva a tu pedido. El pago es 100% seguro.
            </p>
          </div>

          {/* HOTMART - Sales Funnel Widget */}
          {/*- sales funnel container ---*/}
          <div className="w-full flex justify-center items-center my-2">
            <div id="hotmart-sales-funnel" className="w-full"></div>
          </div>
          {/*- script load and setup ---*/}
          {/* HOTMART - Sales Funnel Widget */}

          {/* ================= 17. ELEMENTOS DE CONFIANZA ================= */}
          <div className="flex justify-center items-center gap-5 text-[9px] font-mono text-slate-500 uppercase tracking-widest pt-2 border-t border-slate-200">
            <span className="flex items-center gap-1">🔒 PAGO SSL SEGURO</span>
            <span className="flex items-center gap-1">🛡️ GARANTÍA DE 7 DÍAS</span>
            <span className="flex items-center gap-1">⚡ DESCARGA DIGITAL INMEDIATA</span>
          </div>

        </div>

      </div>
    </div>
  );
}
