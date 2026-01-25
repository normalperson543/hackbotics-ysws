import {
  CodeXmlIcon,
  HammerIcon,
  SquareDashedMousePointerIcon,
} from "lucide-react";
import "./App.css";
import shopItems from "./assets/shop-items.json" with { type: "json" };
import ShopMiniItem from "./components/shop-mini-item";
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
        <div className="text-3xl flex flex-col gap-2 items-start justify-normal">
          <p>It&apos;s really simple.</p>
          <div className="flex flex-row flex-wrap items-center gap-2">
            You{" "}
            <div className="p-3 bg-blue-200 flex flex-row gap-2 rounded-full items-center w-fit text-blue-800">
              <CodeXmlIcon width={36} height={36} /> write code
            </div>
            ,{" "}
            <div className="p-3 bg-orange-200 flex flex-row gap-2 rounded-full items-center w-fit text-orange-800">
              <SquareDashedMousePointerIcon width={36} height={36} /> design CAD
            </div>
            , or{" "}
            <div className="p-3 bg-green-200 flex flex-row gap-2 rounded-full items-center w-fit text-green-800">
              <HammerIcon width={36} height={36} /> build a robot
            </div>{" "}
            for the{" "}
            <a
              className="text-indigo-400 underline"
              href="https://www.vexrobotics.com/v5/competition/vrc-current-game"
            >
              VEX V5 Robotics Competition,
            </a>
          </div>
          <p>
            We&apos;ll cover the <b>team registration</b>,{" "}
            <b>competition fees</b> and <b>parts you need</b>.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Dear Future VEX Team Leader,</h2>
          <div className="text-xl flex flex-col gap-4">
            <p>
              When I became a programmer on our school&apos;s first VEX V5 team,
              I didn&apos;t realize that I was about to enter into one of the
              biggest robotics competitions of all time. Nor did I expect to
              learn so much about how robots work, tuning them, and running them
              autonomously. Or the thrill of coding that last bit of auton code
              right before the next match, and watching it work. Cool stuff like
              that.
            </p>

            <p>Now, I want you to have the same experience.</p>

            <p>
              Hackbotics will help you get supplies and grants to help you get
              to your first VEX robotics competition, from team registration to
              parts, so you can experience the same rewarding feeling as I did.
              And maybe meet some cool people along the way, and hopefully get a
              ticket to VEX Worlds 2027.
            </p>

            <p>Let&apos;s get your team to Worlds.</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center">
          Your time designing and building your robot can get you...
        </h2>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {shopItems.shopItems.map((s) => (
            <ShopMiniItem
              imageUrl={s.imageUrl}
              name={s.name}
              hourRequirement={s.hours}
              key={s.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
