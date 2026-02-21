export default function PricingSection() {
  const plans = [
    {
      name: "The Foundation",
      price: "$199",
      billing: "Monthly Retainer",
      features: [
        "Unrestricted Club Access",
        "Curated Group Conditioning",
        "Towel & Grooming Service",
        "Monthly InBody Analysis"
      ],
      featured: false
    },
    {
      name: "The Pinnacle",
      price: "$349",
      billing: "Monthly Retainer",
      features: [
        "Unrestricted Club Access",
        "4x Private Coaching Sessions",
        "Dedicated Locker & Laundry",
        "Recovery Lounge Access",
        "Bespoke Nutritional Blueprint"
      ],
      featured: true
    },
    {
      name: "Private Cohort",
      price: "$2,400",
      billing: "Annual Allocation",
      features: [
        "Invitation Only Access",
        "Priority Booking Rights",
        "Off-site Executive Check-ins",
        "Global Wellness Concierge"
      ],
      featured: false
    }
  ];

  return (
    <section className="bg-black py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#C5A059]"></div>
            <span className="text-[#C5A059] font-medium tracking-[0.2em] text-[10px] uppercase">Membership Tiers</span>
            <div className="h-[1px] w-8 bg-[#C5A059]"></div>
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-light leading-[1.2] tracking-wide uppercase">
            Exclusive <span className="font-serif italic text-[#C5A059]">Access</span>
          </h2>
        </div>

        {/* Pricing Cards Grid - Elegant Thin Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10 lg:divide-x divide-y lg:divide-y-0 divide-white/10">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-12 md:p-16 flex flex-col justify-between transition-all duration-700 bg-black group hover:bg-zinc-900/50 ${
                plan.featured ? "relative z-10 lg:scale-[1.02] shadow-2xl shadow-black border border-[#C5A059]/30 bg-zinc-950" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[-50%] bg-[#C5A059] text-black text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-1">
                  Most Selected
                </div>
              )}

              <div>
                <h3 className="text-white text-sm font-light tracking-[0.2em] uppercase mb-8 text-center group-hover:text-[#C5A059] transition-colors">
                  {plan.name}
                </h3>
                
                <div className="flex flex-col items-center mb-12 border-b border-white/10 pb-12">
                  <span className="text-5xl font-light tracking-wide text-white mb-3">
                    {plan.price}
                  </span>
                  <span className="text-zinc-500 font-serif italic text-xs">
                    {plan.billing}
                  </span>
                </div>
                
                <ul className="flex flex-col gap-6 mb-12">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 font-light text-zinc-300 text-sm tracking-wide">
                      <div className="min-w-[4px] min-h-[4px] mt-2 rounded-full bg-[#C5A059]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-5 rounded-none font-medium tracking-[0.2em] text-[10px] uppercase transition-all duration-500 border ${
                  plan.featured 
                  ? "bg-[#C5A059] text-black border-[#C5A059] hover:bg-white hover:border-white" 
                  : "bg-transparent text-white border-white/20 hover:border-[#C5A059] hover:text-[#C5A059]"
                }`}
              >
                Inquire Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
