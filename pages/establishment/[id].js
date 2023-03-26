import { useRouter } from "next/router";
import useSWR from "swr";
import Head from "next/head";
import Stars from "../../components/Stars";
import { GoldBtn } from "../../components/GoldButtons";
import AppContext from "../../firebase/AppContext";
import { useContext } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Person(...props) {
  const context = useContext(AppContext);
  const router = useRouter();
  const { query } = useRouter();
  console.log(query);

  const { data, error } = useSWR(
    () => query.id && `/api/establishments/${query.id}`,
    fetcher
  );
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const str = data.name.replaceAll("-", " "); //replace dash with space
  const arr = str.split(" "); //split sentence into words

  for (var i = 0; i < arr.length; i++) {
    //capitalize first letter of each word
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const handleConfirmClick = () => {
    context.setNotHotel(false);
    router.push("/confirm");
  };
  const title = arr.join(" "); //put sentece back together

  return (
    <div className="establishment-page">
      <Head>
        <title>{title}</title>
      </Head>

      <header className="establishments-hero">
        <img
          src={`/${data.name}-hero.png`}
          alt={data.name.replaceAll("-", " ")}
        />
        <div className="establishments-hero-txt">
          <span className="h1">{data.name.replaceAll("-", " ")}</span>
          <Stars rating={data.stars} />
        </div>
      </header>
      <div className="establishment-banner">
        <div className="icon-wrapper">
          <i className="fa-solid fa-user" />
          <p>Up to {data.maxGuests} Guests</p>
        </div>
        <div className="icon-wrapper">
          <i className={data.iconOne} />
          <p>{data.txtOne}</p>
        </div>
        <div className="icon-wrapper">
          <i className={data.iconTwo} />
          <p>{data.txtTwo}</p>
        </div>
        <div className="price">
          <i className="fa-solid fa-indian-rupee-sign" />
          <p>{data.price} per night</p>
        </div>
      </div>
      <article className="establishments-detail">
        {/* <div className="background background-spl">{data.txtOne}</div> */}
        <div className="background background-spl">{}</div>
        <div className="detail">
          <div className="location">
            <span className="line" />
            <span className="txt">{data.location}</span>
          </div>
          <h1>{data.name.replaceAll("-", " ")}</h1>
          <p>{data.descriptionLong}</p>
          <div className="btn-wrapper">
            {/* <button
              className="btn-gold btn-spl btn-wrapper"
              onClick={() => router.push("/confirm")}
              type="submit"
            >
              <span className="background"></span> <span> Book</span>
            </button> */}{" "}
            <a
              className="btn-spl btn-gold"
              onClick={() => {
                handleConfirmClick();
              }}
              type="submit"
            >
              Book
            </a>
            <h3 style={{ paddingTop: "0.5rem" }}>
              {" "}
              38, Netaji Subhash street , {data.txtTwo}
            </h3>
          </div>
        </div>
      </article>
      <h4 className="establishment-rooms establishment-name"> Rooms images</h4>
      <section className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img
            src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201809111819083735-28-e24741e8a36f11ec83dd0a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg"
            alt="Gallery image 1"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <img
            src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gallery image 2"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img
            src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gallery image 3"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <img
            src="https://r1imghtlak.mmtcdn.com/b013ad78f08311eb9a300a58a9feac02.jpg?&output-quality=75&downsize=583:388&output-format=webp"
            alt="Gallery image 4"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <img
            src="https://r1imghtlak.mmtcdn.com/3103697460c111ed93c80a58a9feac02.jpeg?&output-quality=75&downsize=910:612&crop=910:612;89,0&output-format=jpg"
            alt="Gallery image 5"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--6">
          <img
            src="https://r1imghtlak.mmtcdn.com/b318ffa260ba11ed8a350a58a9feac02.jpeg?&output-quality=75&downsize=910:612&crop=910:612;89,0&output-format=jpg"
            alt="Gallery image 6"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--7">
          <img
            src="https://r1imghtlak.mmtcdn.com/a5e0ecb460ba11ed93460a58a9feac02.jpeg?&output-quality=75&downsize=910:612&crop=910:612;89,0&output-format=jpg"
            alt="Gallery image 7"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--8">
          <img
            src="https://r1imghtlak.mmtcdn.com/1f0f6de8b5a011eca3510a58a9feac02.jfif?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg"
            alt="Gallery image 8"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--9">
          <img
            src="https://r1imghtlak.mmtcdn.com/c74c8874463211edadd90a58a9feac02.jpg?downsize=377:200&crop=377:200"
            alt="Gallery image 9"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--10">
          <img
            src="https://r1imghtlak.mmtcdn.com/c656fef4463211edadb80a58a9feac02.jpg?downsize=377:200&crop=377:200"
            alt="Gallery image 10"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--11">
          <img
            src="https://r1imghtlak.mmtcdn.com/6e731660a05f11ecb5340a58a9feac02.jpg?downsize=377:200&crop=377:200"
            alt="Gallery image 11"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--12">
          <img
            src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202201181604126036-3-f45f1862e71f11ec83c40a58a9feac02.jpg?downsize=377:200&crop=377:200"
            alt="Gallery image 12"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--13">
          <img
            src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201801181110376335-4-d8e06176c31a11e9b4620aec9a8a582c.jpg?downsize=377:200&crop=377:200"
            alt="Gallery image 13"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--14">
          <img
            src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201801181110376335-4-d95f2416c31a11e9afc902b35a64fa92.jpg?downsize=377:200&crop=377:200"
            alt="Gallery image 14"
            className="gallery__img"
          />
        </figure>
      </section>
    </div>
  );
}
