import Header from '../components/Header';
import Hero from '../components/Hero';
import Process from '../components/Process';
import TechStack from '../components/TechStack';
import Benefits from '../components/Benefits';
import SuccessStories from '../components/SuccessStories';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Hero />
        <Process />
        <TechStack />
        <Benefits />
        <SuccessStories />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}