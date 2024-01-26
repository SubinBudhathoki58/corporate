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
import AppBlog from './Components/blog';
import AppContact from './Components/Contact';

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
        <AppBlog/>
        <AppContact/>
      </main>
     
     
     
    </div>
  );
}

export default App;
