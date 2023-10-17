"use client";

import { useState } from "react";

export default function Page() {
  const details = [
    {
      itemId: "1",
      itemName: "Razor",
      vendorName: "Zayn",
      timeLeft: new Date("Jan 5, 2024 15:37:25").getTime(),
    },
  ];
  return (
    <div className="mx-12 mt-8 flex flex-col gap-10">
      <h1 className="text-3xl font-bold">Items bought</h1>
      <div className="flex gap-5 flex-wrap">
        {details.map((i) => {
          const [time, setTime] = useState("");
          let x = setInterval(function () {
            // Get today's date and time
            var now = new Date().getTime();

            var distance = i.timeLeft - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor(
              (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(
              days + "d " + hours + "h " + minutes + "m " + seconds + "s "
            );

            if (distance < 0) {
              clearInterval(x);
              setTime("Expired");
            }
          }, 1000);
          return (
            <div className="card w-96 bg-white shadow-xl text-black">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvCroKMXOc7hNwl9fie-OtJ2-qm3FtweAqg&usqp=CAU"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{i.itemName}</h2>
                <p>Vendor: {i.vendorName}</p>
                <p>Duration Left: {time}</p>
                <div className="card-actions justify-end">
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
