import footerStyle from './Footer.module.css';

const Footer = () => {
  return (
    <div className={footerStyle.container}>
      <p className={footerStyle.title}>Copyright © Your Website 2023</p>
    </div>
  )
}

export default Footer
