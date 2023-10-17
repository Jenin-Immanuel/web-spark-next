"use client";

import { useState } from "react";

export default function Page() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function handleSubmit(e) {
    e.preventDefault();

    alert("Item Added");
  }

  return (
    <div className="mx-12 mt-8">
      <h1 className="text-3xl font-bold">Rent an Item</h1>
      <form
        action=""
        className="my-10 text-black flex flex-col gap-10"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full justify-around">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label htmlFor="itemName">Item name</label>
              <input
                type="text"
                placeholder="Type here"
                name="itemName"
                className="bg-white input w-full max-w-xs input-bordered input-accent"
                value={inputs.itemName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="Color">Item Color</label>
              <input
                type="text"
                placeholder="Type here"
                name="itemColor"
                className="bg-white input w-full max-w-xs input-bordered input-accent"
                value={inputs.itemColor}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="Price">Price</label>
              <input
                type="text"
                placeholder="Type here"
                name="price"
                className="bg-white input w-full max-w-xs input-bordered input-accent"
                value={inputs.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label htmlFor="Duration">Duration (of the rent)</label>
              <input
                type="text"
                placeholder="Type here"
                name="duration"
                className="bg-white input w-full max-w-xs input-bordered input-accent"
                value={inputs.duration}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="Status">Current Status</label>
              <select
                className="select select-accent w-full max-w-xs bg-white selection:bg-white focus:bg-white"
                name="status"
                value={inputs.status}
                onChange={handleChange}
              >
                <option disabled selected>
                  Select an option...
                </option>
                <option>Available</option>
                <option>On Rent</option>
                <option>Unavailable</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="Item pic">Photo of the item</label>
              <input
                type="file"
                name="file"
                className="file-input file-input-bordered bg-white file-input-accent w-full max-w-xs"
                accept=".png, .jpeg"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <button className="btn btn-accent" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
