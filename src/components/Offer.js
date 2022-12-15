const Offer = ({ name, isNew }) => {
  const className = isNew ? "service service-new" : "service";
  return (
    <div className={className}>
      <h3>
        {name} {isNew && <p>(nowość)</p>}
      </h3>
    </div>
  );
};
export default Offer;
