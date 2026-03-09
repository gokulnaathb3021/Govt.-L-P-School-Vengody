import Slideshow from "@/components/animations/slide-show";
import TypingText from "@/components/animations/typing-text";
import {
  Boxes,
  CalendarClock,
  Eye,
  GraduationCap,
  Landmark,
  PersonStanding,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-start">
        <Image
          src="/Logo-nobg.svg"
          alt="School Logo"
          width={200}
          height={200}
          className="h-36 sm:h-40 md:h-44 w-auto -mr-2 sm:-mr-4 md:-mr-6"
        />
        <div className="flex flex-col pt-10 sm:pt-12">
          <h1 className="sm:text-3xl sm:font-bold text-sm">
            Govt. L P SCHOOL, VENGODY
          </h1>
          <div className="h-6 sm:h-8">
            <TypingText />
          </div>
        </div>
      </div>
      <main className="max-w-6xl px-4 mx-auto space-y-16 mb-5">
        {/* section 1 */}
        <section>
          <h1 className="text-2xl font-bold mb-5">
            Welcome to
            <span className="text-primary"> G L P School, Vengody</span>, where
            young minds are nurtured for a brighter future.
          </h1>
          <Slideshow />
          <p className="mt-5 border-2 p-2 text-lg ">
            GLPS Vengody, located in the Elappully area of Palakkad district,
            Kerala, was established in 1917 and is managed by the Department of
            Education. It is a co-educational, government-run primary school
            (Grades 1-4) with a pre-primary section, operating with English and
            Malayalam as the medium of instruction.{" "}
          </p>
        </section>
        {/* section 2 */}
        <section>
          <h1 className="text-2xl font-bold mb-5 flex items-center gap-2">
            History
            <CalendarClock />
          </h1>
          <div className="space-y-6 border-2 p-2 text-lg">
            <p>
              <span className="font-bold">V</span>engody is a locality situated
              in
              <span className="font-bold">Elappully Grama Panchayat</span> on
              the
              <span className="font-bold">
                Pollachi road in Palakkad district
              </span>
              . This region, which is mainly inhabited by farming communities,
              has a past marked by prosperity.
            </p>
            <p>
              In the early part of the nineteenth century, when the systems of
              <span className="font-bold">
                caste hierarchy, feudal landlords, and local chieftains
              </span>{" "}
              were prevalent, four prominent tharavads (traditional family
              houses) held influence in Elappully:{" "}
              <span className="font-bold">
                Kennath, Ekkanath, Manikkath, and Machattu
              </span>
              .
            </p>
            <p>
              To educate the children belonging to these families, special
              teachers (ashans) were brought and accommodated in the houses to
              teach them. A traditional learning center known as a
              <span className="font-bold">“Kudippallikkudam”</span> (a small
              traditional school) existed in the{" "}
              <span className="font-bold">Kennath tharavad</span> for this
              purpose.
            </p>
            <p>
              As the importance of{" "}
              <span className="font-bold">formal education</span> gradually
              spread among the people, the elders of these tharavads established
              another Kudippallikkudam near the present location of the school.
              It began functioning under the name{" "}
              <span className="font-bold">Poolachuvadu School</span>.
            </p>
            <p>
              The school initially operated under the{" "}
              <span className="font-bold">Malabar District Board</span>. Later,
              it functioned as a{" "}
              <span className="font-bold">single-teacher school</span>, and in
              <span className="font-bold">
                1917 it received official government recognition
              </span>
              .
            </p>
            <p>
              Today, this institution is known as{" "}
              <span className="font-bold">
                GLPS Vengody (Government Lower Primary School Vengody)
              </span>
              .
            </p>
          </div>
        </section>
        {/* section 3 */}
        <div className="border-2 p-4">
          <section>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              Vision
              <Eye />
            </h1>
            <div className="space-y-6 p-2 text-lg">
              To become a centre of excellence in primary education by nurturing
              young minds with knowledge, values, creativity, and confidence,
              enabling every child to grow into a responsible and compassionate
              citizen.
            </div>
          </section>
          {/* section 4 */}
          <section>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              Mission
              <Boxes />
            </h1>
            <div className="space-y-6  p-2 text-lg">
              <ul className="list-disc pl-6">
                <li>
                  Provide quality and inclusive primary education for all
                  children.
                </li>
                <li>
                  Strengthen students’ basic skills in language, mathematics,
                  and life skills.
                </li>
                <li>
                  Create a safe, joyful, and child-friendly learning
                  environment.
                </li>
                <li>
                  Promote moral values, discipline, and respect for diversity.
                </li>
                <li>
                  Encourage creativity, critical thinking, and active
                  participation in cultural and environmental activities.
                </li>
                <li>
                  Work together with parents and the community for the holistic
                  development of every child.
                </li>
              </ul>
              Government L.P. School, Vengody is committed to shaping a
              generation of confident learners and responsible citizens through
              dedication, innovation, and care.
            </div>
          </section>
        </div>
        {/* section 5 */}
        <section id="school_facilities" className="space-y-6">
          <h1 className="text-2xl font-bold mb-5 flex items-center gap-2">
            School Facilities
            <Landmark />
          </h1>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Image
                src="/GLPS1.JPG"
                alt="School play space."
                width={6000}
                height={4000}
                className="w-full h-auto"
              />
              <p className="font-bold text-xl">{`Children's Park`}</p>
            </div>
            <div>
              <Image
                src="/GLPS2.JPG"
                alt="School classroom."
                width={6000}
                height={4000}
                className="w-full h-auto"
              />
              <p className="font-bold text-xl">{`UKG classroom`}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Image
                src="/GLPS3.JPG"
                alt="School classroom."
                width={6000}
                height={4000}
                className="w-full h-auto"
              />
              <p className="font-bold text-xl">{`LKG Classroom`}</p>
            </div>
            <div>
              <Image
                src="/GLPS4.JPG"
                alt="AC Mini-theatre."
                width={6000}
                height={4000}
                className="w-full h-auto"
              />
              <p className="font-bold text-xl">{`AC Mini-Theatre`}</p>
            </div>
          </div>
        </section>
        {/* section 4 */}
        <section className="space-y-6">
          <h1 className="text-2xl font-bold mb-5 flex items-center gap-2">
            Activities
            <PersonStanding />
          </h1>
          <div className="grid sm:grid-cols-3 gap-2">
            <div>
              <Image
                src="/GLPS_YOGA.jpeg"
                alt="Yoga classes."
                width={6000}
                height={4000}
                className="w-full h-auto"
              />
              <p className="font-bold text-xl">{`Yoga classes`}</p>
            </div>
            <div>
              <Image
                src="/GLPS_DANCE.jpeg"
                alt="Dance classes."
                width={6000}
                height={4000}
                className="w-full h-auto"
              />
              <p className="font-bold text-xl">{`Dance classes`}</p>
            </div>
            <div>
              <Image
                src="/GLPS_MARTIAL_ART.jpeg"
                alt="Martial arts."
                width={6000}
                height={4000}
                className="w-full h-auto"
              />
              <p className="font-bold text-xl">{`Kalaripayattu`}</p>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-2xl font-bold mb-5 flex items-center gap-2">
            Faculty
            <GraduationCap />
          </h1>
          <Image
            src="/GLPS_FACULTY.jpeg"
            alt="Picture of all the teachers standing together."
            width={1280}
            height={960}
          />
        </section>
      </main>
    </>
  );
}
