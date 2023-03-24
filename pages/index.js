import Head from "next/head";
import useSWR from "swr";
import { useRouter, withRouter } from "next/router";
import Select from "react-select";
import { GoldBtn } from "../components/GoldButtons";
import Establishment from "../components/Establishment";
import HeroTile from "../components/HeroTile";
import SearchFilterItem from "../components/SearchFilterItem";
import { DateRange } from "react-date-range";

import { createContext, useState, useContext, useEffect, useRef } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import handler from "./api/establishments";
import AppContext from "../firebase/AppContext";

import { flights } from "./api/flights/data";
import Features from "./_features";
import ImageSlider from "../components/ImageSlider";
const fetcher = (url) => fetch(url).then((res) => res.json());
const slides = [
  {
    url: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "plane",
  },
  {
    url: "https://images.pexels.com/photos/325200/pexels-photo-325200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "train",
  },

  {
    url: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg",
    title: "hotel",
  },
  {
    url: "https://images.pexels.com/photos/796628/pexels-photo-796628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "train2",
  },
  {
    url: "https://images.pexels.com/photos/11937613/pexels-photo-11937613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "plane2",
  },
  {
    url: "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "hotel2",
  },
];

const containerStyles = {
  width: "100%",
  height: "60vh",
  margin: "0 auto",
  display: "block",
  top: "10rem",
  objectFit: "cover",
  marginTop: "15vh",
  alignItems: "center",
};
const categories = [
  { value: "goa", label: "Goa" },
  { value: "chennai", label: "Chennai" },
  { value: "bangalore", label: "Bangalore" },
  { value: "mumbai", label: "Mumbai" },
  { value: "delhi", label: "Delhi" },
];
const categoriesClass = [
  { value: "1a", label: "1A - First AC" },
  { value: "2a", label: "2A - 2 Tier" },
  { value: "3a", label: "3A - 3 tier AC " },
  { value: "fc", label: "FC - First Class" },
  { value: "sl", label: "SL - sleeper" },
  { value: "cc", label: "CC - ac chair" },
];

function Home(req, res) {
  <Head>
    <link rel="stylesheet" href="../sass/icon-font.css" />
  </Head>;
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
  const [trainClick, setTrainClick] = useState(false);
  const [cabClick, setCabClick] = useState(false);
  const [parentWidth, setParentwidth] = useState(1000);
  const [errorForm, setErrorForm] = useState("please select a city");
  const [city, setCity] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const context = useContext(AppContext);
  const [query, setQuery] = useState("");
  const funcOpenDateSet = () => {
    setOpenDate(!openDate);
  };
  const funcHeroClick = () => {
    scrollTo(0, 1000);
  };
  const funcHotelClick = () => {
    if (hotelClick) {
      setHotelClick(false);
    } else {
      setHotelClick(true);
      setAirplaneClick(false);
      setTrainClick(false);
      setCabClick(false);
    }
    funcHeroClick();
  };
  const funcPlaneClick = () => {
    if (airplaneClick) {
      setAirplaneClick(false);
    } else {
      setAirplaneClick(true);
      setHotelClick(false);
      setTrainClick(false);
      setCabClick(false);
    }
    funcHeroClick();
  };
  const funcCabClick = () => {
    if (cabClick) {
      setCabClick(false);
    } else {
      setCabClick(true);
      setAirplaneClick(false);
      setHotelClick(false);
      setTrainClick(false);
    }
    funcHeroClick();
  };
  const funcTrainClick = () => {
    if (trainClick) {
      setTrainClick(false);
    } else {
      setTrainClick(true);
      setHotelClick(false);
      setCabClick(false);
      setAirplaneClick(false);
    }
    funcHeroClick();
  };

  useEffect(() => {
    function handleResize() {
      setParentwidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  const router = useRouter();
  const [openDate, setOpenDate] = useState(false);
  const [checkBeforeClose, setCheckBeforeClose] = useState(false);
  const [openDestination, setOpenDestination] = useState(false);
  const funcDestinationClick = (item) => {
    setOpenDestination(!openDestination);
    setDeparture([item.selection]);
  };
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
      <div style={containerStyles}>
        <ImageSlider
          slides={slides}
          parentWidth={
            typeof window !== "undefined" ? window.innerWidth : parentWidth
          }
        />
      </div>
      <header className="hero-image">
        <img className="hero-index header-img" src="holidaze-hero.png" alt="" />

        <div className="hero-tile-container">
          <a onClick={() => funcHotelClick()}>
            <HeroTile type="hotel" icon="fa-hotel" />
          </a>
          <a onClick={() => funcPlaneClick()}>
            <HeroTile type="airplane" icon="fa-plane" />
          </a>
          <a onClick={() => funcCabClick()}>
            <HeroTile type="cab" icon="fa-cab" />
          </a>

          {/* <HeroTile type="homestays" icon="fa-building" /> */}
          <a onClick={() => funcTrainClick()}>
            <HeroTile type="train" icon="fa-train" />
          </a>

          {/* <HeroTile type="buses" icon="fa-bus" /> */}
        </div>
      </header>
      <span>
        {hotelClick && (
          <>
            <form
              className="searchFilterBar"
              onSubmit={(e) => {
                console.log(errorForm);
                console.log(city);
                e.preventDefault();
                if (city == "") {
                  setErrorForm("please select a city");
                  console.log(errorForm);
                  alert(errorForm);

                  return;
                }
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
                      airplaneClick: airplaneClick,
                      hotelClick: hotelClick,
                    },
                  },
                  "/searchresult"
                );
                setCity("");
                // setQuery(e.target[0].value);
              }}
            >
              <div id="search" className="search-filter-wrapper">
                <div className="search-filter">
                  <div>
                    <SearchFilterItem name="location" icon="fa-location-dot" />
                    <Select
                      onChange={(option) => {
                        setCity(option);
                      }}
                      className="headerSearchInput headerSearchInputTextBox"
                      placeholder="city"
                      options={categories}
                      isSearchable={false}
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
                      <span className="dateRangeHelper">
                        <DateRange
                          editableDateInputs={true}
                          date={new Date()}
                          moveRangeOnFirstSelection={false}
                          onChange={(item) => setDate([item.selection])}
                          ranges={date}
                          minDate={new Date()}
                          className="date"
                          forceParse={false}
                          renderExtraFooter={() => "extra footer"}
                        />

                        <button
                          onClick={() => {
                            setOpenDate(!openDate);
                          }}
                          className="btn-gold  fdBtn "
                        >
                          close
                        </button>
                      </span>
                    )}
                  </div>
                  <div>
                    <SearchFilterItem
                      name="check-out"
                      icon="fa-calendar-days"
                    />
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
                        <button
                          type="button"
                          onClick={() => setOpenOptions(!openOptions)}
                          className="btn-gold fdBtn-d  "
                        >
                          close
                        </button>
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

                if (
                  from.value == "" ||
                  from.value == undefined ||
                  to.value == "" ||
                  to.value == undefined
                ) {
                  setErrorForm("please select a city");
                  alert(errorForm);
                  setFrom("");
                  setTo("");
                  return;
                }
                const check = from.value + "to" + to.value;
                // const check = city.value;
                // console.log("loggingname", from.value + "to" + to.value);
                // console.log("flightData", flightData);

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
                      isSearchable={false}
                      // onKeyDown={(e) => e.target.blur()}
                    />
                  </div>

                  <div>
                    <SearchFilterItem name="To" icon="fa-location-dot" />
                    <Select
                      readonly="readonly"
                      onChange={(option) => setTo(option)}
                      className="headerSearchInput headerSearchInputTextBox"
                      placeholder="..."
                      options={categories.filter((e) => e !== from)}
                      required
                      isSearchable={false}
                    />
                  </div>
                  <div>
                    <SearchFilterItem
                      name="Departure"
                      icon="fa-calendar-days"
                    />
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
                      <span className="dateRangeHelper">
                        <DateRange
                          editableDateInputs={true}
                          date={new Date()}
                          moveRangeOnFirstSelection={true}
                          onChange={(item) => setDeparture([item.selection])}
                          ranges={departure}
                          className="date"
                          minDate={new Date()}
                          onRangeFocusChange={null}
                          forceParse={false}
                        />
                         
                        <button
                          type="button"
                          onClick={() => setOpenDestination(!openDestination)}
                          className="btn-gold fdBtn fdBtn-b "
                        >
                          close
                        </button>
                      </span>
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
                      onClick={() => {
                        setOpenDestination(!openDestination);
                      }}
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
                      onClick={() => {
                        setOpenOptions(!openOptions);
                      }}
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
                        <button
                          type="button"
                          onClick={() => setOpenOptions(!openOptions)}
                          className="btn-gold fdBtn-d  "
                        >
                          close
                        </button>
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
        {trainClick && (
          <>
            <form
              className="searchFilterBar"
              onSubmit={(e) => {
                e.preventDefault();

                if (
                  from.value == "" ||
                  from.value == undefined ||
                  to.value == "" ||
                  to.value == undefined
                ) {
                  setErrorForm("please select a city");
                  alert(errorForm);
                  setFrom("");
                  setTo("");
                  return;
                }

                const checkFrom = from.value.toUpperCase();
                const checkTo = to.value.toUpperCase();
                // const check = city.value;
                // console.log("loggingname", from.value + "to" + to.value);
                // console.log("flightData", flightData);

                // console.log(cab, errorFlight);

                // const newData = flightData.filter(
                //   (e) => e.txtOne.toLowerCase() === check.toLowerCase()
                // );
                //console.log(newData);

                router.push(
                  {
                    pathname: "/trainSearch",
                    query: {
                      checkFrom: checkFrom,
                      checkTo: checkTo,
                      trainClick: trainClick,
                      cabClick: cabClick,
                    },
                  },
                  "/trainSearch"
                );
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
                      isSearchable={false}
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
                      isSearchable={false}
                    />
                  </div>

                  <div>
                    {/* <SearchFilterItem name="class" icon="fa-star" />
                    <Select
                      onChange={(option) => setCity(option)}
                      className="headerSearchInput headerSearchInputTextBox"
                      placeholder="Class"
                      options={categoriesClass}
                      required
                      isSearchable={false}
                    /> */}
                    {/* <input
                type="text"
                placeholder="rate it"
                className="headerSearchInput"
              /> */}
                  </div>
                  <div>
                    <SearchFilterItem
                      name="Departure"
                      icon="fa-calendar-days"
                    />
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
                      <label>
                         
                        <span className="dateRangeHelper">
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
                          <button
                            type="button"
                            onClick={() => setOpenDestination(!openDestination)}
                            className="btn-gold fdBtn fdBtn "
                          >
                            close
                          </button>
                        </span>
                      </label>
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
        {cabClick && (
          <>
            <form
              className="searchFilterBar"
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  from.value == "" ||
                  from.value == undefined ||
                  to.value == "" ||
                  to.value == undefined
                ) {
                  setErrorForm("please select a city");
                  alert(errorForm);
                  setFrom("");
                  setTo("");
                  return;
                }
                const checkFrom = from.value.toUpperCase();
                const checkTo = to.value.toUpperCase();
                // const check = city.value;
                // console.log("loggingname", from.value + "to" + to.value);
                // console.log("flightData", flightData);

                // console.log(cab, errorFlight);

                // const newData = flightData.filter(
                //   (e) => e.txtOne.toLowerCase() === check.toLowerCase()
                // );
                //console.log(newData);

                router.push(
                  {
                    pathname: "/trainSearch",
                    query: {
                      checkFrom: checkFrom,
                      checkTo: checkTo,
                      trainClick: trainClick,
                      cabClick: cabClick,
                    },
                  },
                  "/trainSearch"
                );
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
                      isSearchable={false}
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
                      isSearchable={false}
                    />
                  </div>

                  <div>
                    <SearchFilterItem name="PickUp Time" icon="fa-star" />
                    {/* <Select
                    onChange={(option) => setCity(option)}
                    className="headerSearchInput headerSearchInputTextBox"
                    placeholder="Class"
                    options={categoriesClass}
                    required
                    isSearchable={false}
                  /> */}
                    <input
                      type="time"
                      id="appt"
                      name="appt"
                      // min="09:00"
                      // max="18:00"
                      required
                      className="headerSearchInput headerSearchInputTextBox timerBox"
                    ></input>
                    {/* <input
                type="text"
                placeholder="rate it"
                className="headerSearchInput"
              /> */}
                  </div>
                  <div>
                    <SearchFilterItem
                      name="Departure"
                      icon="fa-calendar-days"
                    />
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
                      <span className="dateRangeHelper">
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
                        <button
                          type="button"
                          onClick={() => setOpenDestination(!openDestination)}
                          className="btn-gold fdBtn fdBtn "
                        >
                          close
                        </button>
                      </span>
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
      </span>
    </>
  );
}
module.exports = withRouter(Home);
