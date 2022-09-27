import Header from "@/components/Header/Header";
import SearchOutlineIcon from "@/components/Icon/SearchOutlineIcon";
import Input from "@/components/Input/Input";
import MenuBar from "@/components/MenuBar/MenuBar";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ReactSVG } from "react-svg";
import PlanningBanner from "@/components/Banner/PlanningBanner/PlanningBanner";
import ContentHeader from "@/components/Header/ContentHeader/ContentHeader";
import ViewAllLink from "@/components/Link/ViewAllLink/ViewAllLink";
import SelectCategory from "@/components/Select/SelectCategory/SelectCategory";

const user = {
  name: "Sopita Jullaprasertsak",
  avatar: "/assets/images/avatar.png",
};

const Home: NextPage = () => {
  const searchIcon = <ReactSVG src="/assets/icons/search-outline.svg" />;

  return (
    <div>
      <Head>
        <title>Smart Planner</title>
        <meta name="description" content="Smart Planner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <Header user={user} />
          <Input
            id="search-attraction"
            placeholder="Search Destination..."
            startIcon={searchIcon}
            autoFocus
          />
          <PlanningBanner />
          <ContentHeader
            title="Discover World 🌈"
            link={<ViewAllLink onClick={() => console.log("view all")} />}
          />
          <SelectCategory
            categoryList={[
              { icon: "🗺️", label: "All", isActive: true },
              { icon: "🌲", label: "Forest", isActive: false },
              { icon: "⛰️", label: "Mountain", isActive: false },
              { icon: "🌲", label: "Forest", isActive: false },
              { icon: "⛰️", label: "Mountain", isActive: false },
            ]}
          />
        </div>
      </main>

      <MenuBar user={user} />
    </div>
  );
};

export default Home;
