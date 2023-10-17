export default function Page() {
  const details = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvCroKMXOc7hNwl9fie-OtJ2-qm3FtweAqg&usqp=CAU",
      itemName: "Tractor",
      status: "On Rent",
      itemId: "1",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHbUvfyOQRWHeeMHbn99SwqIOmkYuTI5bwo1b0GGH9cJRPK44LSUaF-0LUmaW5Xmi6VI&usqp=CAU",
      itemName: "Tractor 2",
      status: "Available",
      itemId: "2",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9u_PlLDvz7q8M12ZChRQmclkewnxxFyBq1Jowf5JmSbjpPAqPmuzEVtpnzR5x6i13QDI&usqp=CAU",
      itemName: "Rail",
      status: "Available",
      itemId: "3",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvCroKMXOc7hNwl9fie-OtJ2-qm3FtweAqg&usqp=CAU",
      itemName: "Tractor",
      status: "Available",
      itemId: "4",
    },
  ];

  return (
    <div className="mx-12 mt-8 flex flex-col gap-10">
      <h1 className="text-3xl font-bold">My Rented Items</h1>
      <div className="flex gap-5 flex-wrap">
        {details.map((i) => {
          return (
            <div
              key={i.itemId}
              className="card w-96 shadow-xl bg-white text-black transition-all hover:scale-105"
            >
              <figure className="px-10 pt-10">
                <img src={i.img} alt="Tractor" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center bg-white flex flex-col gap-5">
                <h2 className="card-title">{i.itemName}</h2>
                {i.status === "On Rent" ? (
                  <div className="badge badge-secondary">On Rent</div>
                ) : (
                  ""
                )}
                {i.status === "Available" ? (
                  <div className="badge badge-primary">Available</div>
                ) : (
                  ""
                )}
                {i.status === "Unavailable" ? (
                  <div className="badge badge-accent">Made Unavailable</div>
                ) : (
                  ""
                )}
                <div className="card-actions">
                  <button className="btn btn-accent">View Details</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
