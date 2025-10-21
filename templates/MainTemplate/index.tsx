import { Container } from "../../src/components/Container"
import { Logo } from "../../src/components/Logo"
import { Menu } from "../../src/components/Menu"
import { Footer } from "../../src/components/Footer";
type MainTemplateProps = {
    children: React.ReactNode
};


export function MainTemplate({children}: MainTemplateProps) {

    return <>
        <Container>
            <Logo />
        </Container>

        <Container>
            <Menu />
        </Container>

       {children}

        <Container>
            <Footer></Footer>
        </Container>
    </>;
}
