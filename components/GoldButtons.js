import Link from "next/link";

export default function GoldBtnLink({ children, ...props }) {
  return (
    <Link {...props} passHref>
      <a className="btn-gold">
        <span className="background" />
        <span>{children}</span>
      </a>
    </Link>
  );
}

export function GoldBtn({ children, ...props }) {
  return (
    <button className="btn-gold" {...props}>
      <span className="background" />
      <span>{children}</span>
    </button>
  );
}
