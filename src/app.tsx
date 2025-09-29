import Header from "./components/Header/Header";
import "./styles/colors.css";
import "./styles/fonts.css";

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-storm-white">
      <Header />

      {/* Content com padding-top para não ficar debaixo do header fixo */}
      <main className="pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="storm-heading text-4xl text-storm-black mb-4">
            FROM SEA TO STREET
          </h1>
          <p className="storm-body text-lg text-storm-black">WE RIDE AS ONE</p>

          {/* O resto do teu conteúdo vai aqui */}
        </div>
      </main>
    </div>
  );
}

export default App;
