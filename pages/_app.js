import "../sass/main.css";
import Layout from "../components/Layout/layout";
import Head from "next/head";
import { AuthContextProvider } from "../firebase/AuthContext";
import AppContext from "../firebase/AppContext";
import { createContext, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [roomContext, setRoomContext] = useState("default");
  const [childContext, setChildContext] = useState("default");
  const [adultContext, setAdultContext] = useState("default");
  const [datesContext, setDatesContext] = useState("default");
  const [form, showForm] = useState(false);
  const [notHotel, setNotHotel] = useState(false);

  return (
    <AppContext.Provider
      value={{
        roomContext,
        setRoomContext,
        childContext,
        setChildContext,
        adultContext,
        setAdultContext,
        datesContext,
        setDatesContext,
        form,
        showForm,
        notHotel,
        setNotHotel,
      }}
    >
      <AuthContextProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>

        <noscript>You need to enable JavaScript to run this app</noscript>
      </AuthContextProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
