import Offer from "./Offer";

const offersList = [
  { name: "Usługa 1", isNew: true },
  { name: "Usługa 2", isNew: false },
  { name: "Usługa 3", isNew: false },
  { name: "Usługa 4", isNew: false },
  { name: "Usługa 5", isNew: false },
  { name: "Usługa 6", isNew: false },
];

const Offers = () => {
  return (
    <section id="our-services" className="our-services">
      <div className="wrapper services-list">
        <h2 className="what-we-do">Czym zajmuje się nasza firma?</h2>
        <div className="services">
          {offersList.map((offer, index) => (
            <Offer name={offer.name} isNew={offer.isNew} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Offers;
