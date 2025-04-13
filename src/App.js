import "./App.css";
import Header from "./Components/Header";
import First from "./Components/First";
import Second from "./Components/Second";
import Tres from "./Components/Tres";
import Ourservices from "./Components/Ourservices";
import Aplicacion from "./Components/Aplication";
import Companyservices from "./Components/Companyservices";
import Calltoaction from "./Components/Calltoaction";
import Footer from "./Components/Footer";
import HorizontalProperty from "./Components/HorizontalProperty";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>RíosDurán</title>
        <link rel="canonical" href="https://riosduranlegalconsulting.com/" />
        <meta
          name="description"
          content="Ríos Durán S.A.S. generamos una experiencia en asesorías y consultorías legales, queremos gestionar tus oportunidades de mejora e impulsar tu crecimiento y éxito empresarial."
        />
      </Helmet>
      <Header navmain="RíosDurán"></Header>
      <First
        subtext="Legal & Consulting"
        firstbox="RIOS"
        secondbox="DURÁN"
        thirdbox="S.A.S"
        button1="Sobre nosotros"
        button2="Nuestros servicios"
        button3="Contactenos"
      ></First>
      <Second
        h4="Sobre Nosotros"
        textabout="En Ríos Durán S.A.S. generamos una experiencia en asesorías y consultorías legales, queremos gestionar tus oportunidades de mejora e impulsar tu crecimiento y éxito empresarial."
      ></Second>
      <Tres
        h3="Visión."
        h4="Buscamos ser un referente empresarial destacándonos por nuestros beneficios contractuales, celeridad en los procesos y satisfacción del cliente."
        h32="Misión."
        h42="Brindar servicios legales y de optimización de procesos en gestión y calidad encaminados a la defensa de los derechos, óptimo cumplimiento contractual, asertividad y cercanía con el cliente."
      ></Tres>
      <Ourservices
        h2="Nuestros Servicios"
        button1="Áreas de aplicación"
        button2="Para empresas"
        button3="Propiedad horizontal"
      ></Ourservices>
      <Aplicacion
        h4="Áreas de aplicación."
        li1="Derecho laboral."
        li2="Derecho civil."
        li3="Derecho administrativo."
        li4="Derecho de familia."
      ></Aplicacion>
      <Companyservices
        h4="Nuestros servicios para empresas."
        li="Asesoría jurídica integral."
        li2="Contratos y acuerdos personalizados."
        li3="Protección de propiedad intelectual."
        li4="Cumplimiento normativo simplificado."
        li5="Resolución de conflictos con enfoque al resultado."
        li6="Asesoría laboral y gestión de recursos humanos."
        li7="Diseño y optimización de procesos generados de bienes y servicios."
        li8="Estudio de procesos teniendo en cuenta criterios técnicos, tecnológicos y científicos."
        li9="Seguimientos a sistemas de gestión."
      ></Companyservices>
      <HorizontalProperty
        h4="Nuestros servicios en propiedad horizontal."
        li="Constitución de régimen de propiedad horizontal."
        li2="Elaboración o actualización de manuales de convivencia."
        li3="Elaboración, asesoría de contratos y acompañamiento legal en conciliaciones extrajudiciales."
        li4="Asesoría y acompañamiento legal en asambleas ordinarias, extraordinarias y reuniones de consejo de administración."
        li5="Auditoría forense en procesos legales, administrativos y contables."
        li6="Asesoría para elaboración de informes, presupuesto y proyectos dentro de la PH."
        li7="Capacitación de consejos de administración y comités de convivencia (Incluye políticas, manuales y actas para su funcionamiento)."
      ></HorizontalProperty>      
      <Calltoaction h1="Contactenos e inicia una experiencia diferente en asesorias legales y garantiza el crecimiento de tu empresa."></Calltoaction>
      <Footer
        whatPhone="+573183183732"
        email="Send Email"
        instagram="@riosduran"
        h2="RIOS DURÁN"
        h3="Legal & Consulting"
      ></Footer>
    </div>
  );
}

export default App;
