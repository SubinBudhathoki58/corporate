import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './Components/header';
import AppHero from './Components/hero';
import './App.css';
import AppAbout from './Components/about';
import AppServices from './Components/AppServices';
import AppWorks from './Components/works';
import AppTeams from './Components/team';
import AppTestimonials from './Components/testimonial';
import AppPricing from './Components/Pricing';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader/>
      </header>
      <main>
        <AppHero/>
        <AppAbout/>
        <AppServices/>
        <AppWorks/>
        <AppTeams/>
        <AppTestimonials/>
        <AppPricing/>
      </main>
     
     
     
    </div>
  );
}

export default App;
