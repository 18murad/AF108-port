import payStyle from "./Pay.module.css"
import { FaStar } from "react-icons/fa";


const Pay = () => {
  return (
    <div className={payStyle.pricingContainer}>
    <h1 className={payStyle.title}>Pay as you grow</h1>
    <p className={payStyle.subtitle}>With our no hassle pricing plans</p>
    <div className={payStyle.cards}>
      <div className={payStyle.card}>
        <h2 className={payStyle.planName}>FREE</h2>
        <p className={payStyle.price}>
          <span className={payStyle.dollarSign}>$</span>0<span className={payStyle.perMonth}>/mo</span>
        </p>
        <ul className={payStyle.features}>
          <li>1 user</li>
          <li>5GB storage</li>
          <li>Unlimited public projects</li>
          <li>Community access</li>
          <li className={payStyle.disabled}>Unlimited private projects</li>
          <li className={payStyle.disabled}>Dedicated support</li>
          <li className={payStyle.disabled}>Free linked domain</li>
          <li className={payStyle.disabled}>Monthly status reports</li>
        </ul>
        <button className={payStyle.buttons}>Choose plan</button>
      </div>

      <div className={`${payStyle.card} ${payStyle.pro}`}>
        <h2 className={payStyle.planName}><FaStar />PRO</h2>
        <p className={payStyle.price}>
          <span className={payStyle.dollarSign}>$</span>9<span className={payStyle.perMonth}>/mo</span>
        </p>
        <ul className={payStyle.features}>
          <li>5 users</li>
          <li>5GB storage</li>
          <li>Unlimited public projects</li>
          <li>Community access</li>
          <li>Unlimited private projects</li>
          <li>Dedicated support</li>
          <li>Free linked domain</li>
          <li className={payStyle.disabled}>Monthly status reports</li>
        </ul>
        <button className={payStyle.button}>Choose plan</button>
      </div>

      <div className={payStyle.card}>
        <h2 className={payStyle.planName}>ENTERPRISE</h2>
        <p className={payStyle.price}>
          <span className={payStyle.dollarSign}>$</span>49<span className={payStyle.perMonth}>/mo</span>
        </p>
        <ul className={payStyle.features}>
          <li>Unlimited users</li>
          <li>5GB storage</li>
          <li>Unlimited public projects</li>
          <li>Community access</li>
          <li>Unlimited private projects</li>
          <li>Dedicated support</li>
          <li>Unlimited linked domains</li>
          <li className={payStyle.disabled}>Monthly status reports</li>
        </ul>
        <button className={payStyle.buttons}>Choose plan</button>
      </div>
    </div>
  </div>
  )
}

export default Pay
