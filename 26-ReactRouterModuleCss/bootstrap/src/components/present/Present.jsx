import presentStyles from "./Present.module.css"

const Present = () => {
  return (
    <div className={presentStyles.present}>
      <h1>Present your business in a <br /> whole new way</h1>
      <p>
      Quickly design and customize responsive mobile-first sites with <br /> Bootstrap, the worlds most popular front-end open source toolkit!
      </p>
    
        <button className={presentStyles.buttons}>
            Get Started
        </button>
        <button className={presentStyles.button}>
            Learn More
        </button>
     
    </div>
  )
}

export default Present
