
import HeroLayout from "../../Components/HeroLayout"

import Section1 from "./Sections/Section1";
import Section3 from "./Sections/Section3";

export default function Dashboard() {
 
  return (
    <>
    
    <HeroLayout heading = {"dashboard"}>

      <Section1 />
      <Section3 />

    </HeroLayout>
    </>
  )
}
