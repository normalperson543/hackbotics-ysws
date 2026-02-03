import {
  CodeXmlIcon,
  HammerIcon,
  SquareDashedMousePointerIcon,
} from "lucide-react";
import "./App.css";
import shopItems from "./assets/shop-items.json" with { type: "json" };
import teamList from "./assets/rsvp-team-list.json" with { type: "json" };
import ShopMiniItem from "./components/shop-mini-item";
import Collapsible from "./components/collapsible";
import { init } from "@plausible-analytics/tracker";
import { Helmet } from "react-helmet-async";
import type { Team } from "./lib/types";
if (import.meta.env.VITE_PLAUSIBLE_URL && import.meta.env.VITE_SITE_URL) {
  init({
    domain: import.meta.env.VITE_SITE_URL,
    endpoint: `https://${import.meta.env.VITE_PLAUSIBLE_URL}/api/event`,
  });
}
function App() {
  return (
    <>
      <Helmet>
        <title>Hackbotics YSWS!</title>
        <meta
          name="description"
          content="Hackbotics is a YSWS program [UNOFFICIAL] that gets VEX Robotics teams and robots funded."
        />
        <meta property="og:title" content="Hackbotics YSWS" />
      </Helmet>
      <div className="w-full h-full">
        <a href="https://hackclub.com/">
          <img
            className="absolute top-0 left-2 border-0 w-36 z-10 hover:rotate-3 hover:scale-105 transition duration-200"
            src="https://assets.hackclub.com/flag-orpheus-top.svg"
            alt="Hack Club"
          />
        </a>
        <div className="w-full p-2 bg-yellow-400 text-center font-bold">
          <p>
            This event is <u>not official</u> and is awaiting sponsors and
            logistics.
          </p>
        </div>
        <div
          className="w-full px-8 py-36 flex flex-col gap-2 bg-cover bg-center relative items-start"
          style={{ backgroundImage: "url('/hero-banner.jpeg')" }}
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
              <p className="text-2xl font-bold">{teamList.rsvpCount} RSVPs</p>
            </div>
          </div>
          <div className="p-1 bg-white/80 backdrop-opacity-95 backdrop-blur-sm rounded-lg w-fit absolute bottom-4 right-4">
            Image courtesy of Huskytech Robotics
          </div>
          <div className="flex flex-row gap-4 absolute -bottom-8">
            <a href="https://forms.fillout.com/t/vE9xVwaTTWus" target="_blank">
              <button className="shadow-md shadow-gray-500 px-6 py-4 bg-linear-45 from-indigo-50 to-indigo-400 rounded-md font-bold text-xl hover:from-indigo-500 hover:to-indigo-100 transition duration-200 hover:scale-110 hover:rotate-2">
                RSVP!
              </button>
            </a>
            <a href="#shop">
              <button className="shadow-md shadow-gray-500 px-6 py-4 bg-indigo-100 rounded-md font-bold text-xl hover:bg-indigo-200 transition duration-200">
                What can I get?
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8 px-8 py-16">
          <div className="text-3xl flex flex-col gap-2 items-start justify-normal">
            <p>It&apos;s really simple.</p>
            <div className="flex flex-row flex-wrap items-center gap-2">
              You{" "}
              <div className="p-3 bg-blue-200 flex flex-row gap-2 rounded-full items-center w-fit text-blue-800">
                <CodeXmlIcon width={36} height={36} /> write code
              </div>
              ,{" "}
              <div className="p-3 bg-orange-200 flex flex-row gap-2 rounded-full items-center w-fit text-orange-800">
                <SquareDashedMousePointerIcon width={36} height={36} /> design
                CAD
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
        </div>
        <img src="/second-banner.png" className="w-full" />
        <div className="flex flex-col gap-8 px-8 py-16">
          <div className="text-right w-full">
            Images courtesy of Huskytech Robotics
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Dear Future VEX Team Leader,</h2>
            <div className="text-xl flex flex-col gap-4">
              <p>
                When I became a programmer on our school&apos;s first VEX V5
                team, I didn&apos;t realize that I was about to enter into one
                of the biggest robotics competitions of all time. Nor did I
                expect to learn so much about how robots work, tuning them, and
                running them autonomously. Or the thrill of coding that last bit
                of auton code right before the next match, and watching it work.
                Cool stuff like that.
              </p>

              <p>Now, I want you to have the same experience.</p>

              <p>
                Hackbotics will help you get supplies and grants to help you get
                to your first VEX robotics competition, from team registration
                to parts, so you can experience the same rewarding feeling as I
                did. And maybe meet some cool people along the way, and
                hopefully get a ticket to VEX Worlds 2027.
              </p>

              <p>Let&apos;s get your team to Worlds.</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center" id="shop">
            Your time designing and building your robot can get you...
          </h2>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-center">
              (Not all items are listed here, and no hour amounts have been
              decided yet!)
            </p>
            <p className="font-bold text-center">
              (The shop items below are sold by VEX Robotics or Robosource. They
              are not affiliated with this event.)
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-8 justify-center mt-8">
            {shopItems.shopItems.map((s) => (
              <ShopMiniItem
                imageUrl={s.imageUrl}
                name={s.name}
                hourRequirement={s.hours}
                key={s.id}
              />
            ))}
          </div>
          <div className="text-3xl flex flex-row flex-wrap gap-4 items-center">
            <p>
              <b>Don&apos;t know where to start?</b> Join the official Hack Club
              Slack channel at
            </p>
            <a href="https://hackclub.enterprise.slack.com/archives/C0AAQRFTMEJ">
              <div className="rounded-md p-2 bg-blue-100 hover:scale-105 transition duration-200">
                <p className="text-blue-600">#hackbotics-ysws</p>
              </div>
            </a>
            <p>.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-2xl font-bold">Teams that have RSVP'd!</h2>
              <a
                href="https://forms.fillout.com/t/vE9xVwaTTWus"
                target="_blank"
              >
                <button className="shadow-md shadow-gray-500 p-2 bg-linear-45 from-indigo-50 to-indigo-400 rounded-md font-bold text-xl hover:from-indigo-500 hover:to-indigo-100 transition duration-200 hover:scale-110 hover:rotate-2">
                  Get your team here :3
                </button>
              </a>
            </div>
            <table className="max-h-48 overflow-y-auto">
              <thead>
                <tr>
                  <th scope="col" className="text-left w-1/10">
                    Team number
                  </th>
                  <th scope="col" className="text-left">
                    Team name
                  </th>
                  <th scope="col" className="text-left">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {teamList.teamList.map((t: Team) => (
                  <tr
                    key={t.teamNumber}
                    className="border-y border-y-indigo-400"
                  >
                    <th scope="row" className="text-left w-1/10 py-2">
                      {t.teamNumber}
                    </th>
                    <td>{t.name}</td>
                    <td>{t.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {teamList.teamList.length === 0 && <p>No teams registered yet!</p>}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">FAQ</h2>
            <Collapsible title="How do I join?">
              <p>
                You can RSVP early for the event to express your interest!
                We&apos;ll share additional info when the event goes live.
              </p>
            </Collapsible>
            <Collapsible title="Am I eligible?">
              <p>
                This event is open to middle and high school VEX V5 teams. As
                long as you are 13-18 and are still in middle or high school
                (and didn&apos;t do Hackatime fraud!), you can participate in
                this event.
              </p>
            </Collapsible>
            <Collapsible title="Can multiple people on my team submit projects?">
              <p>
                Yep! However, hours will be tracked separately for each member
                on the team, and members will need to purchase items themselves.
              </p>
            </Collapsible>
            <Collapsible title="How can I track time?">
              <p>
                You'll use Hackatime to track code and CAD activity and Lapse to
                record yourself building.
              </p>
            </Collapsible>
            <Collapsible title="Do I have to be committed to this event when I RSVP?">
              <p>
                Nope! This is just to gauge interest within the community.
              </p>
            </Collapsible>
          </div>
        </div>
        <div className="p-16 bg-black flex flex-row gap-4 text-white items-start">
          <img src="/flag-standalone-wtransparent.svg" width={128} />
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-2xl font-bold">A Hack Club initative</p>
              <p>
                The Hack Foundation is a 501(c)(3) non-profit organization
                d.b.a. Hack Club (EIN: 81-2908499)
              </p>
              <a href="https://hackclub.com" className="underline">
                About Hack Club
              </a>
            </div>
            <div>
              <p>
                This event is not affiliated or endorsed by VEX Robotics or
                Robosource.
              </p>
            </div>
            <div>
              <p>
                Made with love by normalperson543 and{" "}
                <a
                  href="https://github.com/normalperson543/hackbotics-ysws/graphs/contributors"
                  className="underline"
                  target="_blank"
                >
                  these contributors
                </a>
                .{" "}
                <a
                  href="https://github.com/normalperson543/hackbotics-ysws"
                  className="underline"
                  target="_blank"
                >
                  Open source.
                </a>
              </p>
              <p>
                Need to get in touch? Contact normalperson543 on Hack Club
                Slack, or email{" "}
                <a
                  href="mailto:hackbotics@octotwelve.xyz"
                  className="underline"
                >
                  hackbotics@octotwelve.xyz
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
