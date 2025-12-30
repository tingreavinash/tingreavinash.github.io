export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
