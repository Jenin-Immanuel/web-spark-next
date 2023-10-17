export default function Page() {
  const details = [
    {
      itemName: "Tractor",
      vendor: "Zayn",
      price: "500",
      duration: "per day",
    },
    {
      itemName: "Tractor 2",
      vendor: "Zayn Malik",
      price: "1000",
      duration: "per day",
    },
  ];
  let sum = 0;
  (() => {
    details.map((i) => {
      let val = parseInt(i.price);
      sum += val;
    });
  })();
  return (
    <div className="mx-12 mt-8 flex flex-col gap-10">
      <h1 className="text-3xl font-bold">My Cart</h1>
      <div>
        <div className="overflow-x-auto text-black">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Vendor</th>
                <th>Price</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {details.map((val, i) => {
                return (
                  <tr>
                    <th>{i + 1}</th>
                    <td>{val.itemName}</td>
                    <td>{val.vendor}</td>
                    <td>{val.price}</td>
                    <td>{val.duration}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <h3 className="text-3xl">Checkout</h3>
        <div>
          <div className="mb-4">Total amount: {sum}</div>
          <button className="btn btn-accent">Pay Now</button>
        </div>
      </div>
    </div>
  );
}
