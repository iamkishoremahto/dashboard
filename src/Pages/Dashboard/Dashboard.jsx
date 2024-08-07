
import HeroLayout from "../../Components/HeroLayout"

import Section1 from "./Sections/Section1";
import Section3 from "./Sections/Section3";
import Section2 from "./Sections/Section2";

export default function Dashboard() {
 
  return (
    <>
    
    <HeroLayout heading = {"dashboard"}>

      <Section1 />
      <Section2 />
      <Section3 />

    </HeroLayout>
    </>
  )
}
