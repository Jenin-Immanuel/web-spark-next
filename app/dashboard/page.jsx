"use client";
export default function Page() {
  const details = [
    {
      id: 1,
      itemName: "Tractor",
      itemColor: "Black",
      vendorName: "Zayn Malik",
      price: "500",
      length: "per day",
      status: "Available",
    },
  ];

  return (
    <div className="text-black">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base">
              <th>S.No</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Vendor</th>
              <th>Price</th>
              <th>Current Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {details.map((val, i) => {
              return (
                <tr>
                  <td>
                    <div>{i + 1}</div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{val.itemName}</div>
                        <div className="text-sm opacity-50">
                          {val.itemColor}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>Zayn Malik</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">Rs. {val.price}</div>
                        <div className="text-sm opacity-50">{val.length}</div>
                      </div>
                    </div>
                  </td>
                  <td>{val.status}</td>
                  <td>Details</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
