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
      {/* Restante do código */}

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
            <div>
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

            {/* Redes Sociais */}
            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="https://w.app/autoeletricadourso" className="hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={24} />
                </a>
                <a href="https://www.instagram.com/_oficinadourso_/" className="hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Adicionando a logo no footer */}
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <img
              src="https://i.postimg.cc/gj5ps7PY/Logo-urso.png" 
              alt="Logo da Oficina do Urso"
              className="h-12 mx-auto"
            />
            <p>&copy; 2024 Oficina do Urso. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
