import Article from "./components/Article";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  

  return (
    <>
      <Navbar/>
      <Header/>
      <Hero/>
      <div className="container flex flex-col md:flex-row mx-auto p-6">
        <main className="flex-1">
          <Article/>
          <Table/>
        </main>
        <Aside/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
