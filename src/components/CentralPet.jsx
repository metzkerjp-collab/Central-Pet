export default function CentralPet() {
  const sections = [
    {
      title: "Animais de Rua",
      desc: "Cadastro de animais resgatados, pedidos de ajuda e adoção responsável.",
      icon: "🐾",
    },
    {
      title: "Mapa Pet",
      desc: "Encontre petshops, clínicas, ONGs e casas de adoção perto de você.",
      icon: "📍",
    },
    {
      title: "Pets Desaparecidos",
      desc: "Sistema com IA para comparar animais encontrados e desaparecidos.",
      icon: "🤖",
    },
    {
      title: "Loja Pet",
      desc: "Produtos para animais com parte da renda destinada ao resgate animal.",
      icon: "🛒",
    },
    {
      title: "SOS Resgate",
      desc: "Alerta rápido para ONGs, veterinários e voluntários parceiros.",
      icon: "🚑",
    },
    {
      title: "Carteirinha Digital",
      desc: "Vacinas, consultas e documentos salvos online com segurança.",
      icon: "💳",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* HEADER */}
      <header className="bg-[#1E90FF] text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div
              className="bg-[#FF7A00] rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-md"
              aria-label="logo"
            >
              🐾
            </div>
            <div>
              <h1 className="text-3xl font-bold">Central Pet</h1>
              <p className="text-sm opacity-90">
                Conectando vidas e salvando patas.
              </p>
            </div>
          </div>

          <nav
            className="hidden md:flex gap-6 font-medium"
            aria-label="Navegação principal"
          >
            <a href="#sobre" className="hover:text-orange-300 transition">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-orange-300 transition">
              Serviços
            </a>
            <a href="#parcerias" className="hover:text-orange-300 transition">
              Parcerias
            </a>
            <a href="#contato" className="hover:text-orange-300 transition">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#1E90FF] to-[#1E90FF] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              A maior rede de proteção animal do Brasil
            </h2>

            <p className="text-lg opacity-95 mb-8 leading-relaxed">
              Plataforma inteligente para adoção, resgate, localização de
              serviços pet, animais desaparecidos e carteira digital para pets.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FF7A00] hover:bg-[#E06700] transition px-8 py-4 rounded-2xl font-bold shadow-lg">
                🚑 Preciso de Resgate
              </button>

              <button className="bg-white text-[#1E90FF] hover:bg-gray-100 transition px-8 py-4 rounded-2xl font-bold shadow-lg">
                🐶 Quero Adotar
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-[40px] shadow-2xl border border-white/20">
              <div className="text-8xl text-center mb-4">🐕 🐈</div>
              <p className="text-center text-lg font-medium">
                Tecnologia e amor pelos animais em um só lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-[#1E90FF] mb-4">
              Funcionalidades da Plataforma
            </h3>
            <p className="text-gray-700 text-lg">
              Um ecossistema completo para proteção e cuidado animal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((item, index) => (
              <div
                key={item.title + index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-[#1E90FF]"
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h4 className="text-2xl font-bold text-[#1E90FF] mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold text-[#1E90FF] mb-6">
              Inteligência Artificial para encontrar pets
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              A Central Pet utiliza tecnologia de reconhecimento visual para
              comparar animais desaparecidos com animais encontrados.
            </p>

            <ul className="space-y-4 text-gray-700 text-lg">
              <li>✅ Reconhecimento facial animal</li>
              <li>✅ Comparação automática de fotos</li>
              <li>✅ Alertas por localização</li>
              <li>✅ Notificações em tempo real</li>
            </ul>
          </div>

          <div className="bg-[#1E90FF] text-white p-10 rounded-[40px] shadow-2xl">
            <div className="text-7xl mb-6">🤖🐾</div>
            <h4 className="text-3xl font-bold mb-4">IA Central Pet</h4>
            <p className="text-lg opacity-95 leading-relaxed">
              Tecnologia moderna para aumentar as chances de reencontro entre
              animais e seus tutores.
            </p>
          </div>
        </div>
      </section>

      {/* PARCERIAS */}
      <section id="parcerias" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-[#1E90FF] mb-6">
            Rede de Parcerias
          </h3>

          <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            A Central Pet conecta ONGs, veterinários, petshops, hotéis pet e
            órgãos públicos para criar uma rede inteligente de proteção animal.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {["🏥 Veterinários", "🏨 Hotéis Pet", "🏪 Petshops", "🐾 ONGs"].map(
              (partner, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 shadow-lg text-2xl font-bold text-[#1E90FF]"
                >
                  {partner}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#1E90FF] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl font-extrabold mb-6">
            Faça parte da Central Pet
          </h3>

          <p className="text-xl opacity-95 mb-10 leading-relaxed">
            Junte-se à maior plataforma de proteção animal e ajude a salvar
            vidas.
          </p>

          <button className="bg-[#FF7A00] hover:bg-[#E06700] transition px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl">
            🐾 Criar Conta
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold">Central Pet</h4>
            <p className="text-gray-400 mt-2">
              Tecnologia a favor da proteção animal.
            </p>
          </div>

          <div className="flex gap-6 text-lg">
            <a href="#" className="hover:text-orange-400 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
