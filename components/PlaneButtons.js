import Link from "next/link";

export default function PlaneBtnLink({ children, ...props }) {
  return (
    <>
      <a className="btn-gold">
        <span className="background" />
        <span>{children}</span>
      </a>
    </>
  );
}

export function PlaneBtn({ children, ...props }) {
  return (
    <button className="btn-gold" {...props}>
      <span className="background" />
      <span>{children}</span>
    </button>
  );
}
