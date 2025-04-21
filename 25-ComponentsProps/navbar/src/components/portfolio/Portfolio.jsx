import SectionHeader from "./common/SectionHeader";
import PortfolioItem from "./common/PortfolioItem";

const items = [
  { image: "assets/img/portfolio/cabin.png", alt: "Cabin" },
  { image: "assets/img/portfolio/cake.png", alt: "Cake" },
  { image: "assets/img/portfolio/circus.png", alt: "Circus" },
  { image: "assets/img/portfolio/game.png", alt: "Game" },
  { image: "assets/img/portfolio/safe.png", alt: "Safe" },
  { image: "assets/img/portfolio/submarine.png", alt: "Submarine" },
];

const Portfolio = () => (
  <section className="page-section bg-light" id="portfolio">
    <div className="container">
      <SectionHeader title="Portfolio" />
      <div className="row justify-content-center">
        {items.map((item, idx) => <PortfolioItem key={idx} {...item} />)}
      </div>
    </div>
  </section>
);

export default Portfolio;
