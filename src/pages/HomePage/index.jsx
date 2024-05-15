import { LinkStyled, Section, TitleHome } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Section>
      <div className="container">
        <TitleHome>
          <h2>The most current and interesting events.</h2>
          <p> Don’t miss out!</p>
          <LinkStyled to="/events">Find the event</LinkStyled>
        </TitleHome>
      </div>
    </Section>
  );
};

export default HomePage;
