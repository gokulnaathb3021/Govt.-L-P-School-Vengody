import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl px-4 mx-auto py-10 space-y-16">
      {/* section 1 */}
      <section>
        <h1 className="text-2xl font-bold mb-5">
          Welcome to
          <span className="text-primary"> G L P School, Vengody</span>, where
          young minds are nurtured for a brighter future.
        </h1>
        <div className="grid sm:grid-cols-2 gap-4 items-center">
          <Image
            src="/GLPS_SCHOOL_1.jpg"
            alt="Students in front of school building."
            width={1280}
            height={960}
            className="w-full h-auto"
          />
          <Image
            src="/GLPS_SCHOOL_3.jpg"
            alt="School opening ceremony."
            width={1280}
            height={854}
            className="w-full h-auto"
          />
        </div>
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
        <h1 className="text-2xl font-bold mb-5">History</h1>
        <div className="space-y-6 border-2 p-2 text-lg">
          <p>
            <span className="font-bold">V</span>engody is a locality situated in
            <span className="font-bold">Elappully Grama Panchayat</span> on the
            <span className="font-bold">
              Pollachi road in Palakkad district
            </span>
            . This region, which is mainly inhabited by farming communities, has
            a past marked by prosperity.
          </p>
          <p>
            In the early part of the nineteenth century, when the systems of
            <span className="font-bold">
              caste hierarchy, feudal landlords, and local chieftains
            </span>{" "}
            were prevalent, four prominent tharavads (traditional family houses)
            held influence in Elappully:{" "}
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
            <span className="font-bold">formal education</span> gradually spread
            among the people, the elders of these tharavads established another
            Kudippallikkudam near the present location of the school. It began
            functioning under the name{" "}
            <span className="font-bold">Poolachuvadu School</span>.
          </p>
          <p>
            The school initially operated under the{" "}
            <span className="font-bold">Malabar District Board</span>. Later, it
            functioned as a{" "}
            <span className="font-bold">single-teacher school</span>, and in
            <span className="font-bold">
              1917 it received official government recognition
            </span>
            .
          </p>
          <p>
            Today, this institution is known as{" "}
            <span className="font-bold">
              GLPS Vengodi (Government Lower Primary School Vengodi)
            </span>
            .
          </p>
        </div>
      </section>
      {/* section 3 */}
      <section id="school_facilities" className="space-y-6">
        <h1 className="text-2xl font-bold mb-5">School Facilities</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Image
              src="/GLPS1.jpg"
              alt="School play space."
              width={6000}
              height={4000}
              className="w-full h-auto"
            />
            <p className="font-bold text-xl">{`Children's Park`}</p>
          </div>
          <div>
            <Image
              src="/GLPS2.jpg"
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
              src="/GLPS3.jpg"
              alt="School classroom."
              width={6000}
              height={4000}
              className="w-full h-auto"
            />
            <p className="font-bold text-xl">{`LKG Classroom`}</p>
          </div>
          <div>
            <Image
              src="/GLPS4.jpg"
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
        <h1 className="text-2xl font-bold mb-5">Activities</h1>
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
    </main>
  );
}
