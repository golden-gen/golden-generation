import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ComingSoon from "./coming-soon";
import LandingPage from "./landing-page";
import RegisterPage from "./student";

export default function Home() {
  // firebase deploy --only hosting:golden-generation
  return <RegisterPage />;
}
