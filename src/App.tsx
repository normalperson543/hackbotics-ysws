import "./App.css";

function App() {
  return (
    <div className="w-full h-full">
      <div
        className="w-full px-8 py-12 flex flex-col gap-2 bg-cover bg-center relative items-start"
        style={{ backgroundImage: "url('/hero-banner.jpg')" }}
      >
        <div className="flex flex-row gap-2 justify-between items-center w-full">
          <div className="p-6 bg-white/80 backdrop-opacity-95 backdrop-blur-sm rounded-lg flex flex-col gap-2 w-3/5">
            <p className="font-bold text-6xl">Hackbotics!</p>
            <p className="text-2xl font-bold">
              Get your VEX Robotics team and robot funded.
            </p>
          </div>
          <div className="p-6 bg-white/80 backdrop-opacity-95 backdrop-blur-sm rounded-lg w-fit flex flex-row gap-4 items-center">
            <div className="rounded-full w-4 h-4 bg-green-400"></div>
            <p className="text-2xl font-bold">0 RSVPs</p>
          </div>
        </div>
        <div className="p-1 bg-white/80 backdrop-opacity-95 backdrop-blur-sm rounded-lg w-fit absolute bottom-4 right-4">
          Image courtesy of Huskytech Robotics
        </div>
        <div className="flex flex-row gap-4 absolute -bottom-8">
          <button className="shadow-md shadow-gray-500 px-6 py-4 bg-linear-45 from-indigo-50 to-indigo-400 rounded-md font-bold text-xl hover:from-indigo-500 hover:to-indigo-100 transition duration-200 hover:scale-110 hover:rotate-2">
            RSVP!
          </button>
          <button className="shadow-md shadow-gray-500 px-6 py-4 bg-indigo-100 rounded-md font-bold text-xl hover:bg-indigo-200 transition duration-200">
            What can I get?
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-8 py-16">
        <div className="text-3xl">
          <p>It&apos;s really simple.</p>
          <p>
            You <div className="p-"write code, design CAD, or build a robot for the VEX V5
            Competition,
          </p>
          <p>
            We&apos;ll cover the team registration, competition fees and parts
            you need.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
