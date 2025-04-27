import React from 'react'
import "../services/Service.css"

const ServiceCard = ({icon, title, description}) => {
  return (

        <div className="col-md-4 text-center">
          <div className="mt-5">
            <div className="mb-2"><i className={`fas fa-${icon} fa-4x text-primary`}></i></div>
            <h3 className="h4 mb-2">{title}</h3>
            <p className="text-muted mb-0">{description}</p>
          </div>
        </div>
  )
}

export default ServiceCard