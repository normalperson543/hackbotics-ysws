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
        <div className="p-1 bg-white/80 backdrop-opacity-95 backdrop-blur-sm rounded-lg w-fit relative bottom-0 right-0">
          Image courtesy of Huskytech Robotics
        </div>
        <button className="shadow-md shadow-gray-500 px-6 py-4 bg-gradient">
          RSVP
        </button>
      </div>
    </div>
  );
}

export default App;
