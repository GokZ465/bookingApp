import Head from "next/head";
import useSWR from "swr";
import { useRouter, withRouter } from "next/router";
import Select from "react-select";
import { GoldBtn } from "../components/GoldButtons";
import Establishment from "../components/Establishment";
import HeroTile from "../components/HeroTile";
import SearchFilterItem from "../components/SearchFilterItem";
import { DateRange } from "react-date-range";

import { createContext, useState, useContext } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import handler from "./api/establishments";
import AppContext from "../firebase/AppContext";

import { flights } from "./api/flights/data";
const fetcher = (url) => fetch(url).then((res) => res.json());
const categories = [
  { value: "goa", label: "Goa" },
  { value: "chennai", label: "Chennai" },
  { value: "bangalore", label: "Bangalore" },
  { value: "mumbai", label: "Mumbai" },
  { value: "delhi", label: "Delhi" },
];

function Home(req, res) {
  let dateToday = new Date();
  let day = dateToday.getDate();
  let month = dateToday.getMonth();
  let year = dateToday.getFullYear();
  let fullDate = `${month}/${day}/${year}`;
  const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();

    if (date1 < date2) {
      return true;
    } else if (date1 > date2) {
      return false;
    } else {
      return true;
    }
  };
  const [hotelClick, setHotelClick] = useState(false);
  const [airplaneClick, setAirplaneClick] = useState(false);
  const [city, setCity] = useState("chennai");
  const [from, setFrom] = useState("chennai");
  const [to, setTo] = useState("chennai");
  const context = useContext(AppContext);
  const [query, setQuery] = useState("");
  const funcHotelClick = () => {
    if (hotelClick) {
      setHotelClick(false);
    } else {
      setHotelClick(true);
      setAirplaneClick(false);
    }
  };
  const funcPlaneClick = () => {
    if (airplaneClick) {
      setAirplaneClick(false);
    } else {
      setAirplaneClick(true);
      setHotelClick(false);
    }
  };
  // useEffect(() => {
  //   console.log(query);

  //   const ans = data.filter(
  //     (e) => e.txtOne.toLowerCase() === query.toLowerCase()
  //   );
  //   console.log(1);

  //   data = ans;

  //   console.log(data);
  // }, [query]);
  const router = useRouter();
  const [openDate, setOpenDate] = useState(false);
  const [openDestination, setOpenDestination] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [departure, setDeparture] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [dateError, setDateError] = useState(null);
  const { data, error } = useSWR("/api/establishments", fetcher);

  const res2 = useSWR("/api/cabs", fetcher);

  const { cab, errorCabs } = useSWR("/api/cabs", fetcher);
  const flightData = res2.data;
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  if (error)
    return (
      <div>
        {" "}
        <h1>{console.log(error)}Loading</h1>... Failed to load
      </div>
    );
  // if (!data) return <div>Loading...</div>;
  // if (errorFlight) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <h1>Loading</h1>...
      </div>
    );
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <>
      <Head>
        <title>Booking App</title>
        {/* <meta property="og:title" content="Holidaze" /> */}
        {/* <link rel="icon" href="/favicon.svg" /> */}
      </Head>

      <header className="hero-image">
        <img className="hero-index header-img" src="holidaze-hero.png" alt="" />
        <div className="hero-tile-container">
          <a onClick={() => funcHotelClick()}>
            <HeroTile type="hotel" icon="fa-hotel" />
          </a>
          <a onClick={() => funcPlaneClick()}>
            <HeroTile type="airplane" icon="fa-plane" />
          </a>
          {/* <HeroTile type="cab" icon="fa-cab" />
          <HeroTile type="homestays" icon="fa-building" /> */}
          <HeroTile type="train" icon="fa-train" />
          {/* <HeroTile type="buses" icon="fa-bus" /> */}
        </div>
      </header>
      {hotelClick && (
        <>
          <form
            className="searchFilterBar"
            onSubmit={(e) => {
              const finalAns = compareDates(
                format(date[0].startDate, "MM/dd/yyyy"),
                fullDate
              );
              // const check = e.target[0].value;
              console.log("ans le" + finalAns);
              const check = city.value;
              const dates = [
                format(date[0].startDate, "MM/dd/yyyy"),
                format(date[0].endDate, "MM/dd/yyyy"),
              ];
              const adult = options.adult;
              const room = options.room;
              const child = options.children;
              console.log(dates);
              e.preventDefault();
              context.setRoomContext(room);
              context.setDatesContext(dates);
              context.setAdultContext(adult);
              context.setChildContext(child);
              console.log(context);
              const newData = data.filter(
                (e) => e.txtOne.toLowerCase() === check.toLowerCase()
              );

              console.log(dates);
              router.push(
                {
                  pathname: "/searchresult",
                  query: {
                    data: JSON.stringify(newData),
                  },
                },
                "/searchresult"
              );
              // setQuery(e.target[0].value);
            }}
          >
            <div id="search" className="search-filter-wrapper">
              <div className="search-filter">
                <div>
                  <SearchFilterItem name="location" icon="fa-location-dot" />
                  <Select
                    onChange={(option) => setCity(option)}
                    className="headerSearchInput headerSearchInputTextBox"
                    placeholder="city"
                    options={categories}
                    required
                  />
                </div>
                <div>
                  <SearchFilterItem name="check-in" icon="fa-calendar-days" />
                  {/* <input
                type="number"
                placeholder="start date"
                className="headerSearchInput"
              /> */}
                  <span
                    className="headerSearchInput "
                    onClick={() => setOpenDate(!openDate)}
                  >{`${format(date[0].startDate, "MM/dd/yyyy")}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      date={new Date()}
                      moveRangeOnFirstSelection={false}
                      onChange={(item) => setDate([item.selection])}
                      ranges={date}
                      minDate={new Date()}
                      className="date"
                      forceParse={false}
                    />
                  )}
                </div>
                <div>
                  <SearchFilterItem name="check-out" icon="fa-calendar-days" />
                  {/* <input
                type="text"
                placeholder="leave date"
                className="headerSearchInput"
              /> */}
                  <span onClick={() => setOpenDate(!openDate)}>{`${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                </div>
                <div>
                  <SearchFilterItem name="rooms & guests" icon="fa-star" />
                  {/* <input
                type="text"
                placeholder="rate it"
                className="headerSearchInput"
              /> */}
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText headerSearchInput "
                  >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOption("adult", "d");
                            }}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOption("adult", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOption("children", "d");
                            }}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOption("children", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOption("room", "d");
                            }}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOption("room", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="btn-wrapper">
                <GoldBtn type="submit">search</GoldBtn>
              </div>
            </div>
          </form>
          {/* <form className="search-filter-bar">
            <input type="text" placeholder="search..." name="search" />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </form> */}

          <div className="establishments-wrapper">
            {data.map((p, i) => (
              <Establishment key={i} establishment={p} />
            ))}
          </div>
        </>
      )}
      {airplaneClick && (
        <>
          <form
            className="searchFilterBar"
            onSubmit={(e) => {
              e.preventDefault();
              const check = from.value + "to" + to.value;
              // const check = city.value;
              console.log("loggingname", from.value + "to" + to.value);
              console.log("flightData", flightData);

              // console.log(cab, errorFlight);

              const newData = flightData.filter(
                (e) => e.txtOne.toLowerCase() === check.toLowerCase()
              );
              console.log(newData);

              router.push(
                {
                  pathname: "/searchresult",
                  query: {
                    data: JSON.stringify(newData),
                    airplaneClick: airplaneClick,
                    hotelClick: hotelClick,
                  },
                },
                "/searchresult"
              );
              setQuery(e.target[0].value);
            }}
          >
            <div id="search" className="search-filter-wrapper">
              <div className="search-filter">
                <div>
                  <SearchFilterItem name="FROM" icon="fa-plane-departure" />
                  <Select
                    onChange={(option) => {
                      setFrom(option);
                    }}
                    className="headerSearchInput headerSearchInputTextBox"
                    placeholder="..."
                    options={categories}
                    required
                  />
                </div>

                <div>
                  <SearchFilterItem name="To" icon="fa-location-dot" />
                  <Select
                    onChange={(option) => setTo(option)}
                    className="headerSearchInput headerSearchInputTextBox"
                    placeholder="..."
                    options={categories.filter((e) => e !== from)}
                    required
                  />
                </div>
                <div>
                  <SearchFilterItem name="Departure" icon="fa-calendar-days" />
                  {/* <input
                type="number"
                placeholder="start date"
                className="headerSearchInput"
              /> */}
                  <span
                    className="headerSearchInput "
                    onClick={() => setOpenDestination(!openDestination)}
                  >{`${format(departure[0].startDate, "MM/dd/yyyy")}`}</span>
                  {openDestination && (
                    <DateRange
                      editableDateInputs={true}
                      date={new Date()}
                      moveRangeOnFirstSelection={true}
                      onChange={(item) => setDeparture([item.selection])}
                      ranges={departure}
                      className="date"
                      minDate={new Date()}
                      forceParse={false}
                    />
                  )}
                </div>
                <div>
                  <SearchFilterItem name="Return" icon="fa-calendar-days" />
                  {/* <input
                type="text"
                placeholder="leave date"
                className="headerSearchInput"
              /> */}
                  <span
                    onClick={() => setOpenDestination(!openDestination)}
                  >{`${format(departure[0].endDate, "MM/dd/yyyy")}`}</span>
                </div>
                <div>
                  <SearchFilterItem name="travellers" icon="fa-star" />
                  {/* <input
                type="text"
                placeholder="rate it"
                className="headerSearchInput"
              /> */}
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText headerSearchInput "
                  >{`${options.adult} adult · ${options.children} children · ${options.room} Infant`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOption("adult", "d");
                            }}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOption("adult", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOption("children", "d");
                            }}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOption("children", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Infant</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOption("room", "d");
                            }}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOption("room", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="btn-wrapper">
                <GoldBtn type="submit">search</GoldBtn>
              </div>
            </div>
          </form>
          {/* <form className="search-filter-bar">
            <input type="text" placeholder="search..." name="search" />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </form> */}
        </>
      )}
    </>
  );
}
module.exports = withRouter(Home);
