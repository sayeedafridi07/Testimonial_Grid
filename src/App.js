import React from "react";
import quotation from "./assets/images/bg-pattern-quotation.svg";

function App() {
  return (
    <div className="bg-gray-200">
      {/* Global Container */}
      <div className="container mx-auto max-w-7xl p-2 md:p-10">
        {/* Grid Container */}
        <div className="grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2">
          {/* Box 1 */}
          <div className="relative p-10 rounded-xl bg-purple-700 md:col-span-2">
            <img
              src={quotation}
              alt=""
              className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
            />
            {/* Box Header*/}
            <div className="flex z-10 space-x-4">
              <img
                src={require("../src/assets/images/image-daniel.jpg")}
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Daniel Clifford</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* Large Text */}
            <p className="relative z-10 mt-6 text-xl">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny's worth.
            </p>

            {/* Small Text */}
            <p className="mt-6 opacity-50">
              “ I was an EMT for many years before I joined the bootcamp. I've
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I've successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </p>
          </div>
          {/* Box 2 */}
          <div className="p-10 rounded-xl bg-gray-600">
            {/* Box Header */}
            <div className="flex space-x-4">
              <img
                src={require("../src/assets/images/image-jonathan.jpg")}
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Jonathan Walters</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* Large Text */}
            <p className="mt-6 text-xl">
              The team was very supportive and kept me motivated.
            </p>

            {/* Small Text */}
            <p className="mt-6 opacity-50">
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I've made in myself. ”
            </p>
          </div>
          {/* Box 3 */}
          <div className="hidden p-10 rounded-xl text-gray-900 bg-white md:block md:row-span-2">
            {/* Box Header */}
            <div className="flex space-x-4">
              <img
                src={require("../src/assets/images/image-kira.jpg")}
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90"> Kira Whittle</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* Large Text */}
            <p className="mt-6 text-xl">
              Such a life-changing experience. Highly recommended!
            </p>

            {/* Small Text */}
            <p className="mt-6 opacity-50">
              “ Before joining the bootcamp, I've never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I've often referred to it during interviews as an
              example of my development experience. It certainly helped me land
              a job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </p>
          </div>
          {/* Box 4 */}
          <div className="p-10 rounded-xl text-gray-900 bg-white ">
            {/* Box Header */}
            <div className="flex space-x-4">
              <img
                src={require("../src/assets/images/image-jeanette.jpg")}
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Jeanette Harmon</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* Large Text */}
            <p className="mt-6 text-xl">
              An overall wonderful and rewarding experience.
            </p>

            {/* Small Text */}
            <p className="mt-6 opacity-50">
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </p>
          </div>
          {/* Box 5 */}
          <div className="p-10 rounded-xl bg-gray-900 md:col-span-2">
            {/* Box Header */}
            <div className="flex space-x-4">
              <img
                src={require("../src/assets/images/image-patrick.jpg")}
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Patric Abrams</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* Large Text */}
            <p className="mt-6 text-xl">
              The team was very supportive and kept me motivated.
            </p>

            {/* Small Text */}
            <p className="mt-6 opacity-50">
              “ I would recommend this program to anyone that wants to learn
              programming. I am now gainfully employed as a full-stack
              developer.
            </p>
          </div>
          {/* Box 6 */}
          <div className="p-10 rounded-xl text-gray-900 bg-white md:hidden">
            {/* Box Header */}
            <div className="flex space-x-4">
              <img
                src={require("../src/assets/images/image-kira.jpg")}
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90"> Kira Whittle</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* Large Text */}
            <p className="mt-6 text-xl">
              Such a life-changing experience. Highly recommended!
            </p>

            {/* Small Text */}
            <p className="mt-6 opacity-50 line-clamp-3">
              “ Before joining the bootcamp, I've never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I've often referred to it during interviews as an
              example of my development experience. It certainly helped me land
              a job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
