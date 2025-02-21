import { Outlet } from "react-router-dom";
import { PageContainer, ContentWrapper } from "./BasePage.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const BasePage = () => {
    return (
        <PageContainer>
            <Header />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
            <Footer />
        </PageContainer>
    );
};

export default BasePage;
