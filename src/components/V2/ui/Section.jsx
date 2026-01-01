export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-24 md:py-32 max-w-7xl mx-auto px-6 relative ${className}`}>
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_70%)]"></div>
      {children}
    </section>
  );
}
