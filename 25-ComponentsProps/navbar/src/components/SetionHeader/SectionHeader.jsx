const SectionHeader = ({ title, subtitle }) => (
    <div className="text-center">
      <h2 className="text-uppercase text-secondary mb-0">{title}</h2>
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
        <div className="divider-custom-line"></div>
      </div>
      {subtitle && <p className="lead">{subtitle}</p>}
    </div>
  );
  
  export default SectionHeader;
  