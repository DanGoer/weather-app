// PlaceHolderCard

function PlaceHolderCard({ loadingLine }) {
  return (
    <section className="card-style flex flex-col items-center transform-all duration-500 relative gap-4 w-full">
      <h2 className="md:text-5xl pb-8 mt-4">{loadingLine}</h2>
      <h3>
        Data is fetching!
        <br />
        Please wait a moment.
      </h3>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
export default PlaceHolderCard;
