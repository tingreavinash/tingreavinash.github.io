import { useInView } from "../hooks/useInView";

export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  threshold = 0.1,
  once = true,
  ...props
}) {
  const [ref, inView] = useInView({ threshold, once });

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
