import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MissionContainer from "@/components/homeSection/MissionContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = [
    { id: 1, name: "30분 걷기", isCompleted: false },
    { id: 2, name: "체중 재기", isCompleted: false },
    { id: 3, name: "혈압 재기", isCompleted: false },
    { id: 4, name: "혈당 재기", isCompleted: false },
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MissionContainer missionBoxes={data}></MissionContainer>
    </>
  );
}
