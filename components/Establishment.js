import Link from "next/link";
import { useRouter } from "next/router";
import GoldBtnLink from "./GoldButtons";
import Stars from "./Stars";
export default function Establishment({
  establishment,
  dates,
  room,
  child,
  adult,
}) {
  const router = useRouter();
  return (
    <div className="establishment">
      <figure className="col-1">
        <img
          src={establishment.imgURL}
          alt={`photo of ${establishment.name.replaceAll("-", " ")}`}
        />
      </figure>
      <div className="col-2">
        <span className="id">{establishment.id}</span>
        <div className="location">
          <span className="line" />
          <span className="txt">{establishment.location}</span>
        </div>
        <h4 className="establishment-name">
          {establishment.name.replaceAll("-", " ")}
        </h4>
        <Stars rating={establishment.stars} />
        <div className="establishment-description">
          {establishment.descriptionShort}
        </div>
        <GoldBtnLink
          adult={`${adult}`}
          child={`${child}`}
          room={`${room}`}
          dates={`${dates}`}
          href="/establishment/[id]"
          // onClick={() => {
          //   router.push(
          //     {
          //       pathname: "/establishment/[id]",
          //       query: {
          //         child: child,
          //         adult: adult,
          //         room: room,
          //         dates: dates,
          //       },
          //     },
          //     "/establishment/[id]"
          //   );
          // }}
          as={`/establishment/${establishment.id}`}
        >
          BOOK
        </GoldBtnLink>
      </div>
    </div>
  );
}
