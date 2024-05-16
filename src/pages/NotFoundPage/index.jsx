import NotFound from "/images/notFound.png";
import { ImageStyled, TitleStyled, LinkStyled } from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <section>
      <div className="container">
        <ImageStyled src={NotFound} alt="404" />
        <TitleStyled>Page not found</TitleStyled>
        <LinkStyled to="/">Go to Home Page</LinkStyled>
      </div>
    </section>
  );
};

export default NotFoundPage;
