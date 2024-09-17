import React from 'react';
import Image from 'next/image';
import Header from '../components/landingPage/Header';
import Footer from '../components/landingPage/Footer';
import Banner from '../components/landingPage/Banner';
import Section from '../components/landingPage/Section';
import Section2 from '../components/landingPage/Section2';
import Section3 from '../components/landingPage/Section3';
import styles from './page.module.css'; // Styles spécifiques à la page, optionnel

export default function Home() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Bannière */}
        <Banner
          title="Simularbre"
          description="Simulateur de régulation arboricole des températures dans les villes"
          buttonText="Démarrer une simulation"
        />

        {/* Intégration de vos sections */}
        <Section
          title="Sensibiliser"
          description="La plantation d’arbres en milieu urbain est une solution naturelle pour relever les défis du changement climatique. Elle offre de nombreux avantages, notamment la réduction des îlots de chaleur urbains grâce à l’évapotranspiration, le soutien à la biodiversité, l’amélioration du cadre de vie et la santé physique et mentale des citadins."
          imageUrl="/images/planete.png"
          reverse={false} // ou true selon vos besoins
        />
        <Section2
          title="Estimer"
          description="Au delà de sa dimension éducative, Simularbre permet d’observer en temps réel l’impact de la plantation d’arbres sur la température des ilots de chaleur identifiés et éventuellement déceler des zones où l’amélioration des conditions aurait le plus de bénéfices, en fonction des emplacements préférentiels identifiés pour la ville de votre choix par notre système."
          imageUrl="/images/temperature.png"
          reverse={false} // ou true selon vos besoins
        />
        <Section3
          title="Anticiper"
          description="Afin de garantir un avenir sain et juste pour les générations futures, le temps presse, il est plus que temps de prendre au sérieux les risques encourus dû au réchauffement climatique et de celui de nos villes : la volonté de Simularbre est également de permettre au plus grand nombre d’observer qu’avec peu, on pourrait déjà faire beaucoup."
          imageUrl="/images/vue-face-arbre-3d-feuilles-tronc 2.png"
          reverse={false} // ou true selon vos besoins
        />
      </main>
      <Footer />
    </>
  );
}
