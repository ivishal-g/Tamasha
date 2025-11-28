export function RoastOutput({ roast }: any) {
  if (!roast) return null;

  return (
    <div className="max-w-xl mx-auto bg-[#111] border border-white/10 p-6 rounded-lg mt-10 text-white">
      <h3 className="text-xl font-bold text-orange-500 mb-3">🔥 Your Roast</h3>
      <p className="whitespace-pre-wrap leading-relaxed">{roast}</p>
    </div>
  );
}