export default function Highlight({ text, className = "" }) {
  if (!text) return null;

  const parts = text.split("**");

  return (
    <span className={className}>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-slate-900 dark:text-slate-100">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </span>
  );
}
