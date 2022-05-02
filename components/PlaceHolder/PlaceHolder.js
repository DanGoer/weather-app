import PlaceHolderCard from "./components/PlaceHolderCard";

function PlaceHolder() {
  return (
    <>
      <PlaceHolderCard loadingLine="The Weather data for today will be provided soon!" />
      <PlaceHolderCard loadingLine="The Chart for the next two days will be provided soon!" />
      <PlaceHolderCard loadingLine="The Weather the next eight days will be provided soon!" />
    </>
  );
}
export default PlaceHolder;
