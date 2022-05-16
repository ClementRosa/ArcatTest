import Head from "next/head";
import clientPromise from "../lib/mongodb";
import Dashboard from "../components/Dashboard";
import ThemeContext from "../context/ThemeContext";
import {reduceValueByAllKey, reduceValueByDate, reduceByDate, reduceObjectByProp, reduceByDate2} from "../helpers/reduce-helper";
import {mockSmall, mockReduceValueByAllKey} from "../constants/mock"
import React, { useState,useContext, useEffect  } from "react";

export default function Home({reduceValueByDate, reduceValueByAllKey}) {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <Dashboard valueChartArea={reduceValueByDate} valueChartBar={reduceValueByAllKey}/>
      </ThemeContext.Provider>
      
    </>
  );
} 

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db("Arca");
    const result = await db.collection("data").find({}).limit(150).toArray();

    const resultReduceValueByAllKey = reduceByDate(reduceValueByAllKey(result))
    const resultReduceValueByDate = reduceValueByDate(result)

    return {
      props: {
        reduceValueByDate: resultReduceValueByDate,
        reduceValueByAllKey:resultReduceValueByAllKey
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        data: null,
      },
    };
  }
}
