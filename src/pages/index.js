// import Image from "next/image";
// import { Inter } from "next/font/google";

import ContactUs from "@/components/ContactUs";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className=" w-full h-screen">
  <div>ChatCamp</div>
  <ContactUs/>
  </div>;
}
