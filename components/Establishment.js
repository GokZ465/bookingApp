import Link from 'next/link'

export default function Establishment({ establishment }) {
  return (
    <li>
      <Link href="/establishment/[id]" as={`/establishment/${establishment.id}`}>
        <a>
          <h3>{establishment.name}</h3>
    
        </a>
      </Link>
    </li>
  )
}
