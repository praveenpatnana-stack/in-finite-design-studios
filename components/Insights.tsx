import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { ThemeContext } from "../App";

const quotes: string[] = [
`Architecture is silence shaped into structure.`,
`Light writes poetry across concrete.`,
`Space is emotion disciplined by geometry.`,
`Design begins where imagination meets gravity.`,
`Every structure carries a hidden philosophy.`,
`Walls define boundaries; design defines experience.`,
`Architecture sculpts the rhythm of life.`,
`Proportion is the quiet language of harmony.`,
`Form is intention made visible.`,
`Structure is memory cast in material.`,
`Geometry holds the blueprint of beauty.`,
`Space is the canvas of human movement.`,
`Light transforms mass into meaning.`,
`Architecture is restraint elevated to art.`,
`Volume gives silence its voice.`,
`Design is balance frozen in time.`,
`Concrete dreams in straight lines.`,
`A facade is philosophy in elevation.`,
`Minimalism is architecture breathing freely.`,
`Every beam carries unseen conviction.`,
`Structure shapes perception.`,
`Space is engineered emotion.`,
`Architecture connects earth to sky.`,
`Geometry anchors imagination.`,
`Design is precision infused with vision.`,
`Buildings are time captured in form.`,
`Light defines the soul of structure.`,
`Architecture is logic wrapped in poetry.`,
`Proportion whispers before it speaks.`,
`Design is silence in motion.`,
`Form follows intention.`,
`Space holds the pulse of life.`,
`Architecture balances ambition and gravity.`,
`Shadow gives depth to meaning.`,
`Lines guide the human journey.`,
`Structure frames infinity.`,
`Design reveals what space can become.`,
`Architecture breathes through proportion.`,
`Simplicity is structural elegance.`,
`Every space tells a quiet story.`,

`Space becomes meaningful
when light begins to speak.`,

`Architecture is not built,
it is composed.`,

`Form meets function
where vision finds clarity.`,

`Geometry is disciplined imagination
etched in space.`,

`Design is restraint
guided by purpose.`,

`Walls stand firm
but space flows freely.`,

`Every structure begins
with a silent idea.`,

`Architecture captures time
within measured lines.`,

`Light defines the volume
before material does.`,

`Design is proportion
made human.`,

`Space unfolds slowly
like a quiet symphony.`,

`Architecture shapes behavior
without uttering a word.`,

`A building rises
where vision meets courage.`,

`Structure becomes poetry
when intention is pure.`,

`Geometry anchors creativity
in reality.`,

`Space transforms
when perspective shifts.`,

`Architecture is gravity
disciplined by imagination.`,

`Form gains meaning
through proportion.`,

`Light is the unseen architect
of emotion.`,

`Every corner carries
a deliberate thought.`,

`Design frames movement
within boundaries.`,

`Space breathes
through openness.`,

`Architecture listens
before it speaks.`,

`Structure is logic
elevated to art.`,

`Minimal lines
maximum impact.`,

`Design is balance
between void and mass.`,

`Proportion guides
visual harmony.`,

`Space invites
human connection.`,

`Architecture reveals
hidden possibilities.`,

`Concrete holds
dreams in structure.`,

`Volume shapes
the silence within.`,

`Geometry gives
freedom direction.`,

`Design refines
raw ambition.`,

`Structure embraces
structural honesty.`,

`Architecture transforms
simple lines into legacy.`,

`Space is the stage
for human stories.`,

`Design finds beauty
in discipline.`,

`Architecture frames
the horizon thoughtfully.`,

`Light sculpts
living environments.`,

`Space becomes sacred
through intention.`,

`Architecture begins with vision,
evolves through precision,
and lives through experience.`,

`Space is not empty,
it waits for meaning,
waiting for design.`,

`Every line drawn
is a promise
to future inhabitants.`,

`Architecture is geometry
disciplined by logic,
softened by light.`,

`Light enters quietly,
reveals structure,
and leaves emotion behind.`,

`A building stands firm,
but its spirit
moves freely.`,

`Space unfolds gradually,
inviting curiosity,
rewarding attention.`,

`Design refines chaos
into clarity
and balance.`,

`Structure holds weight,
but vision holds
purpose.`,

`Architecture balances mass,
void,
and meaning.`,

`Form is shaped carefully,
tested by gravity,
perfected by intent.`,

`Space welcomes light,
embraces shadow,
and defines atmosphere.`,

`Design begins in thought,
lives in detail,
and ends in harmony.`,

`Architecture listens to context,
responds with proportion,
and speaks through material.`,

`Every foundation laid
supports not only structure,
but aspiration.`,

`Geometry aligns vision,
clarifies movement,
and strengthens presence.`,

`Space shapes perception,
influences emotion,
and inspires action.`,

`Light reveals form,
form reveals function,
function reveals purpose.`,

`Architecture is crafted slowly,
measured precisely,
experienced deeply.`,

`Design transforms land
into living narrative,
into human experience.`,

`Space invites presence,
presence creates memory,
memory builds legacy.`,

`Architecture refines matter,
guides energy,
and anchors meaning.`,

`Structure rises confidently,
yet bows
to proportion.`,

`Design connects vision,
material,
and movement.`,

`Space becomes powerful
when intention
is clear.`,

`Light guides perception,
perception shapes feeling,
feeling defines space.`,

`Architecture aligns ambition
with gravity
and grace.`,

`Form adapts,
structure supports,
experience completes.`,

`Every angle chosen
shapes how life
unfolds inside.`,

`Space is measured carefully,
balanced thoughtfully,
and lived fully.`,

`Architecture transforms vision
into habitable poetry
through discipline.`,

`Design respects context,
embraces innovation,
and celebrates simplicity.`,

`Structure carries weight,
but design carries
meaning.`,

`Geometry shapes stability,
while light shapes
emotion.`,

`Architecture honors restraint,
celebrates clarity,
and sustains beauty.`,

`Space defines flow,
flow defines interaction,
interaction defines life.`,

`Design balances
precision,
intuition,
and imagination.`,

`Architecture unites structure,
light,
and silence.`,

`Every space crafted
is a dialogue
between earth and sky.`,

`Architecture endures,
not because it stands,
but because it resonates.`
];

const Insights: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  const [currentQuote, setCurrentQuote] = useState<string | null>(null);

  const generateNewQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === currentQuote);

    setCurrentQuote(newQuote);
  };

  return (
    <section id="philosophy" className="py-40 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">

        <div className="mb-6 inline-block opacity-40">
          <Logo className="w-16 h-16" glow={true} stable={true} isDark={isDark} />
        </div>

        <h2 className={`text-sm uppercase tracking-[0.6em] mb-12 ${isDark ? 'text-white/40' : 'text-stone-900/60'}`}>
          The Digital Architect
        </h2>

        <div className="min-h-[180px] flex items-center justify-center mb-12">
          <AnimatePresence mode="wait">
            {currentQuote ? (
              <motion.p
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`whitespace-pre-line text-3xl md:text-5xl font-serif italic leading-tight ${isDark ? 'text-white/90' : 'text-stone-900'}`}
              >
                “{currentQuote}”
              </motion.p>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`${isDark ? 'text-white/40' : 'text-stone-900/40'} italic`}
              >
                Summon a digital vision...
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={generateNewQuote}
          className="group relative px-10 py-4 overflow-hidden rounded-full transition-all active:scale-95"
        >
          <div className={`absolute inset-0 transition-transform group-hover:scale-105 ${isDark ? 'bg-[#A4F142]' : 'bg-stone-900'}`} />
          <span className={`relative z-10 font-bold uppercase tracking-widest text-xs ${isDark ? 'text-black' : 'text-white'}`}>
            {currentQuote ? "Seek New Horizon" : "Reveal Vision"}
          </span>
        </button>

      </div>
    </section>
  );
};

export default Insights;
