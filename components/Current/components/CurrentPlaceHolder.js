function CurrentPlaceHolder() {
  return (
    <section className="col-span-12 flex flex-col gap-4 py-2 px-2 items-center">
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

export default CurrentPlaceHolder;
