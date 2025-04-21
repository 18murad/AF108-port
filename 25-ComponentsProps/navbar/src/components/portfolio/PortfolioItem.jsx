const PortfolioItem = ({ image, alt }) => (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className="portfolio-item mx-auto">
        <img className="img-fluid" src={image} alt={alt} />
      </div>
    </div>
  );
  
  export default PortfolioItem;
  