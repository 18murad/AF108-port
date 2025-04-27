import SectionHeader from "./common/SectionHeader";
import ServiceCard from "./common/ServiceCard";
import React from "react";
import "./services/Services.css"

const services = [
  { icon: "gem", title: "Stunning Design", description: "Some amazing design for your project." },
  { icon: "laptop-code", title: "Responsive Code", description: "Looks great on all devices." },
  { icon: "lock", title: "Secure", description: "Built with security in mind." },
];

const Services = () => (
  <section className="page-section" id="services">
    <div className="container">
      <SectionHeader title="Services" />
      <div className="row">
        {services.map((s, idx) => <ServiceCard key={idx} {...s} />)}
      </div>
    </div>
  </section>
);

export default Services;
