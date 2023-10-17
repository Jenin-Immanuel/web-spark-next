import NavBar from "../components/navbar";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <NavBar />
      <section className="w-full h-[85vh]">
        <img
          src="https://www.americamagazine.org/sites/default/files/styles/article_image_750_x_503_/public/main_image/iStock-862009618.jpg?itok=yw5qGgS0"
          alt=""
          className="absolute w-full h-[90%] brightness-50 z-[-1]"
        />
        <div className="z-10 text-white w-full h-[80%] absolute flex justify-around items-center text-center flex-col">
          <h1 className="text-5xl font-bold">RENTAL SERVICES</h1>
          <h3 className="text-3xl font-semibold">
            "Don't worry about the price, Rent - Cheaper, faster & better."
          </h3>
        </div>
      </section>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-around items-center">
            <div className="flex flex-col gap-3 max-w-[50%]">
              <p>&copy; 2023 AgroTech Rents</p>
              <p>
                AgroTech is an online rental software Technology developed for
                helping farmers. To help the farmers rent the machineries
                required for them easily at low cost in a easier way with the
                moto of Don't worry about the price, Rent - Cheaper, faster &
                better , contact us to rent your machineries to help our food
                providers.
              </p>
            </div>
            <div>
              <p className="flex place-items-center gap-2">
                Contact: <BsFillTelephoneFill /> +91 1234567890
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
