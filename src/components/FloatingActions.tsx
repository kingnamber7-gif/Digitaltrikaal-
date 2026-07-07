import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-4">
      {/* Phone Call Floating Button */}
      <a
        href="tel:+919352392906"
        id="floating-phone-btn"
        className="w-13 h-13 rounded-full bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] flex items-center justify-center shadow-[0_4px_20px_rgba(255,213,0,0.4)] hover:shadow-[0_4px_25px_rgba(255,213,0,0.6)] transition-all duration-300 hover:scale-110 active:scale-90 group relative"
        title="Call Us Now"
      >
        <Phone size={22} className="stroke-[2.5]" />
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#0A0A0A] border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
          Call +91 93523 92906
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919352392906"
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-90 group relative pulse-green"
        title="Chat on WhatsApp"
      >
        {/* We can use a custom WhatsApp SVG for high authenticity */}
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.574 1.97 14.101.945 11.472.945 6.035.945 1.611 5.316 1.607 10.744c-.002 1.706.452 3.375 1.314 4.869l-.951 3.472 3.563-.935zM17.51 14.54c-.302-.15-1.786-.879-2.062-.979-.277-.1-.478-.15-.678.15-.2.3-.778.979-.954 1.179-.177.2-.353.224-.655.075-1.2-.5-2.072-.924-2.888-2.317-.216-.369.216-.343.618-1.143.1-.2.05-.375-.025-.526-.075-.15-.678-1.63-.93-2.228-.246-.589-.496-.51-.678-.51-.176-.002-.377-.002-.578-.002-.2 0-.527.075-.803.376-.277.3-1.054 1.028-1.054 2.507s1.079 2.906 1.229 3.107c.15.2 2.124 3.227 5.143 4.529.718.31 1.28.496 1.718.634.721.23 1.377.198 1.897.12.58-.088 1.786-.73 2.037-1.43.25-.7.25-1.3.176-1.43-.076-.13-.277-.23-.58-.38z" />
        </svg>

        {/* Pulse effect rings */}
        <span className="absolute -inset-1 rounded-full border border-[#25D366] opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none"></span>

        {/* Tooltip */}
        <span className="absolute right-16 bg-[#0A0A0A] border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
          Chat on WhatsApp
        </span>
      </a>

      {/* Styled inline keyframe for WhatsApp green pulse */}
      <style>{`
        @keyframes pulseGreen {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        .pulse-green {
          animation: pulseGreen 2s infinite;
        }
      `}</style>
    </div>
  );
}
