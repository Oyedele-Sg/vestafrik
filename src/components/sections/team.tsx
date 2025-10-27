import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

const TEAM: ReadonlyArray<TeamMember> = [
  {
    name: "Jordan Lawrence",
    role: "Co‑Founder CEO",
    imageUrl:
      "ada",
  },
  {
    name: "Panos Dandolas",
    role: "Co‑Founder CFO",
    imageUrl:
      "emmanuel",
  },
  {
    name: "Max Marenbach",
    role: "Co‑Founder COO",
    imageUrl:
      "israel",
  },
  {
    name: "Jacqui Colwell",
    role: "Advisory Board Member",
    imageUrl:
      "balogun",
  },
  {
    name: "James Fry",
    role: "Advisory Board Member",
    imageUrl:
      "sophia",
  },
  {
    name: "Motie Bring",
    role: "Advisory Board Member",
    imageUrl:
      "khadijah",
  },
];

export function Team() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-900 dark:bg-emerald-400" />
            <span>Team</span>
          </div>
          <h2
            id="team-heading"
            className="text-3xl md:text-5xl font-semibold tracking-tight"
          >
            Our team
          </h2>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="relative  h-[600px] rounded-3xl overflow-hidden"
            >
              <Image
                src={`/images/team/${member.imageUrl}.JPG`}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover  h-[600px] hover:scale-105 transition-all duration-300"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-white">
                <div className="font-medium tracking-tight">{member.name}</div>
                <div className="text-sm opacity-90">{member.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
