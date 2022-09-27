import Header from "@/components/Header/Header";
import SearchOutlineIcon from "@/components/Icon/SearchOutlineIcon";
import Input from "@/components/Input/Input";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const user = {
  name: "Sopita Jullaprasertsak",
  avatar: "/assets/images/avatar.png",
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Smart Planner</title>
        <meta name="description" content="Smart Planner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header user={user} />
        {/* <Input
          id="search-attraction"
          placeholder="Search Destination..."
          startIcon={<SearchOutlineIcon />}
          autoFocus
        /> */}
      </main>
    </div>
  );
};

export default Home;
