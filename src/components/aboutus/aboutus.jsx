import { Container } from "react-bootstrap"
import Footer from "../misc/footer"
import Header from "../misc/navbar"

import PersonCard from "./personcard"

import Levente from "../../Images/levente.jpg"
import AdiRav from "../../Images/Adithya.png"
import Fryderyk from "../../Images/fryderyk.jpg"


function AboutUs(){
    return(
        <div>
            <Header/>
            <section style={{backgroundColor:"#283032"}}>
                <Container className="align-and-center" style={{justifyContent:"space-around", padding:"100px 0 200px 0", flexWrap:"wrap"}}>
                    <PersonCard image={Levente}
                    name={"Levente Ludányi"}
                    title={"Co-Founder"}
                    description={"Student of Mathematics and Computer Science at École Polytechnique Paris. Silver medalist at the International Physics Olympiad and youngest quantitative researcher at WorldQuant LLC. In charge of: Product strategy, development and DeFi"}
                    personalsite={"ludanyilevente.com"}
                     />
                    <PersonCard image={AdiRav}
                    name={"Adithya Ravichandran"}
                    title={"Co-Founder"}
                    description={<p>Student of Mathematics and Computer Science at École Polytechnique Paris. Previous founder of LUXMUN and winner of multiple hackathons from FinTech to Game Dev. In charge of: Operations, Finances, Product development</p>}
                    personalsite={"adithya.eu"}
                     />
                    <PersonCard image={Fryderyk}
                    name={"Fryderyk Sitnik"}
                    title={"Co-Founder"}
                    description={"Student of Mathematics and Computer Science at École Polytechnique Paris. Founder and President of the Board of Directors of the TeenCrunch Foundation, a non-profit startup accelerator for youth in Poland. In charge of: Business strategy, pitching, sales and investor relations"}
                    personalsite={""}
                     />
                </Container>
            </section>
            <Footer/>
        </div>
    )
}

export default AboutUs