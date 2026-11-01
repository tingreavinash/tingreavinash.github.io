export default function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  subtitle,
  align = "center",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-4 mb-12 sm:mb-16 ${
        isCenter ? "text-center max-w-2xl mx-auto" : "text-left max-w-3xl"
      }`}
    >
      {eyebrow && (
        <div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40">
            {Icon && <Icon size={14} className="shrink-0" />}
            <span>{eyebrow}</span>
          </span>
        </div>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight heading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
