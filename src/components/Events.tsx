const events = [
  {
    date: "JAN 04",
    title: "Push-Ups & Deadlift Contest",
    description: "Test your raw power. Entry fee: Blood, sweat, and $20."
  },
  {
    date: "FEB 12",
    title: "Midnight Murph Challenge",
    description: "Start at midnight. Finish when you're dead. No scaled options."
  },
  {
    date: "MAR 01",
    title: "Nutrition & Brutality Seminar",
    description: "Learn how to fuel the machine. Stop eating garbage."
  },
  {
    date: "APR 15",
    title: "The Iron Gauntlet",
    description: "12 hours of non-stop lifting. Teams of 4. Only the strong survive."
  }
];

export default function Events() {
  return (
    <section id="events" className="bg-zinc-950 py-32 border-t-8 border-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-anton text-white text-5xl md:text-7xl uppercase tracking-widest mb-16">
          Upcoming <span className="text-lime-400 text-outline">Events</span>
        </h2>
        
        <div className="flex flex-col border-t-2 border-white">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b-2 border-white hover:bg-zinc-900 transition-none px-6 -mx-6"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 w-full">
                <span className="font-anton text-lime-400 text-5xl md:text-6xl tracking-wider w-48 shrink-0">
                  {event.date}
                </span>
                <div>
                  <h3 className="font-anton text-white text-3xl md:text-4xl uppercase tracking-wider mb-2">
                    {event.title}
                  </h3>
                  <p className="font-sans font-bold text-zinc-400 text-lg uppercase tracking-widest max-w-2xl">
                    {event.description}
                  </p>
                </div>
              </div>
              
              <button className="mt-8 md:mt-0 font-sans font-black text-white border-2 border-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-zinc-950 transition-none shrink-0">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
