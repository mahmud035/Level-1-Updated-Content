export default function VisitedCountry({ country }) {
  const {
    name: { common },
    flags: { svg, alt },
    capital,
    population,
    area,
  } = country || {};

  return (
    <div className="w-full h-[360px] shadow-xl card bg-base-100">
      <figure>
        <img src={svg} alt={alt} className="w-full h-48" />
      </figure>
      <div className="p-4 card-body">
        <h2 className="text-xl font-medium card-title">Name: {common}</h2>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <p>Area: {area} Sq. km</p>
      </div>
    </div>
  );
}
