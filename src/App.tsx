import { Car, MapPin, Phone, Mail, Clock, Instagram, Wrench, MessageCircle } from 'lucide-react';

const brands = [
  {
    name: "Moura",
    logo: "https://i.postimg.cc/QMjCQNwq/imagem-2025-04-24-112451616.png",
  },
  {
    name: "Heliar",
    logo: "https://i.postimg.cc/YS89bKwB/imagem-2025-04-24-112538627.png",
  },
  {
    name: "ACDelco",
    logo: "https://i.postimg.cc/mDDrnXbz/imagem-2025-04-24-112605189.png",
  },
  {
    name: "BOSCH",
    logo: "https://i.postimg.cc/0N5m8Ckx/imagem-2025-04-24-112741100.png",
  },
  {
    name: "HERBO",
    logo: "https://i.postimg.cc/pXNF9vWs/imagem-2025-04-24-112835814.png",
  },
  {
    name: "REIFOR",
    logo: "https://i.postimg.cc/ZqqBkKH5/imagem-2025-04-24-112912316.png",
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
    {/* Header */}
<header className="bg-blue-900 text-white py-4">
  <div className="container mx-auto px-4 flex justify-between items-center">
    <div className="flex items-center gap-4">
      {/* Logo aumentada */}
      <img 
        src="https://i.postimg.cc/j5q6p8RK/Whats-App-Image-2025-02-27-at-18-41-25.jpg" 
        alt="Auto Elétrica do Urso Logo" 
        className="h-19 w-19 rounded-full object-cover"
      />
      {/* Título aumentado */}
      <h1 className="text-4xl font-bold">Oficina do Urso</h1>
    </div>
    <nav className="hidden md:flex gap-6">
      <a href="#services" className="hover:text-yellow-400">Serviços</a>
      <a href="#brands" className="hover:text-yellow-400">Marcas</a>
      <a href="#location" className="hover:text-yellow-400">Localização</a>
      <a href="#contact" className="hover:text-yellow-400">Contato</a>
    </nav>
  </div>
</header>
 
       {/* Hero Section */}  
       <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">  
         <div className="container mx-auto px-4 text-center">  
           <h2 className="text-4xl font-bold mb-4">Auto Elétrica e Mecânica em geral</h2>  
           <p className="text-xl text-gray-300 mb-8">Soluções completas para seu veículo</p>  
           <a   
             href="https://w.app/autoeletricadourso"
             className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition"  
             target="_blank"  
             rel="noopener noreferrer"  
           >  
             Agende um Serviço  
           </a>  
         </div>  
       </div>  
 
       {/* Services */}
       <section id="services" className="py-16 bg-white">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Nossos Serviços</h2>
           <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
               <Car className="text-yellow-400 w-12 h-12 mb-4" />
               <h3 className="text-xl font-semibold mb-2">Diagnóstico Eletrônico</h3>
               <p className="text-gray-600">Análise completa do sistema elétrico do seu veículo</p>
             </div>
             <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
               <Wrench className="text-yellow-400 w-12 h-12 mb-4" />
               <h3 className="text-xl font-semibold mb-2">Reparo de Alternadores</h3>
               <p className="text-gray-600">Manutenção e substituição de componentes elétricos</p>
             </div>
             <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
               <Car className="text-yellow-400 w-12 h-12 mb-4" />
               <h3 className="text-xl font-semibold mb-2">Instalação de Acessórios</h3>
               <p className="text-gray-600">Instalação profissional de equipamentos elétricos</p>
             </div>
           </div>
         </div>
       </section>
 
       {/* Brands */}
       <section id="brands" className="py-16 bg-gray-100">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Marcas Atendidas</h2>
           <div className="grid md:grid-cols-3 gap-8">
             {brands.map((brand, index) => (
               <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                 <img
                   src={brand.logo}
                   alt={`Logo ${brand.name}`}
                   className="w-full h-32 object-contain mb-4"
                 />
                 <h3 className="text-xl font-semibold text-center text-blue-900">{brand.name}</h3>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Location */}
       <section id="location" className="py-16 bg-white">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Nossa Localização</h2>
           <div className="aspect-w-16 aspect-h-9">
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d305.36630940781447!2d-46.51113347320697!3d-23.451082620372528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8ab685bea91f%3A0xf6a63b72210022!2sR.%20Su%C3%AD%C3%A7a%2C%20120%20-%20Jardim%20Sao%20Francisco%2C%20Guarulhos%20-%20SP%2C%2007195-090!5e0!3m2!1spt-BR!2sbr!4v1739982231206!5m2!1spt-BR!2sbr"
               width="100%"
               height="450"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               className="rounded-lg shadow-md"
             ></iframe>
           </div>
         </div>
       </section>

{/* Footer */}
<footer className="bg-blue-900 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8">
      {/* Contato */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-bold mb-4">Contato</h3>
        <div className="flex items-center gap-2">
          <Phone size={20} />
          <span>Fixo: (11) 4307-1068</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={20} />
          <span>Cel: (11) 97072-7635</span>
        </div>
        <p className="flex items-center gap-2">
          <Mail size={20} />
          ofc.dourso@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={20} />
          Rua Suiça, 120 - Guarulhos/SP
        </p>
      </div>

      {/* Horário de Funcionamento */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <Clock size={20} />
            Segunda a Sexta: 8h às 18h
          </p>
          <p className="flex items-center ml-6">Sábado: Fechado</p>
          <p className="flex items-center ml-6">Domingo: Fechado</p>
        </div>
      </div>

      {/* Redes Sociais e Logo */}
      <div className="flex flex-col space-y-4 items-center">
        <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
        <div className="flex gap-4">
          <a href="https://w.app/autoeletricadourso" className="hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={24} />
          </a>
          <a href="https://www.instagram.com/_oficinadourso_/" className="hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </a>
        </div>
        {/* Logo aumentada em mais 40% */}
        <img
          src="https://i.postimg.cc/gj5ps7PY/Logo-urso.png"
          alt="Logo da Oficina do Urso"
          className="h-48 w-48 object-cover"
        />
      </div>
    </div>

    <div className="mt-8 pt-8 border-t border-blue-800 text-center">
      <p>&copy; 2024 Oficina do Urso. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;
