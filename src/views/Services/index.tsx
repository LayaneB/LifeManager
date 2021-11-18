import React from "react";
import { Container } from "./style";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
    return (
        <>
            <Nav />
            
                <Container>
                    <div>
                        <h1>Serviços</h1>
                    </div>
                </Container>

            <Footer />
        </>
    )

}

export default Home;