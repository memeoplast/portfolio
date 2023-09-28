import "./About.css";

const About = () => {
  return (
    <div className="about__content" id="About">
      <div className="about__content-img">
        <img
          className="about__img"
          src="/assets/About1.jpg"
          alt="Do something great, written in neon"
        ></img>
      </div>

      <div className="about__content-text">
        <h2 className="about__heading">About</h2>
        <h2 className="about__heading-chapter">I love to Lorem</h2>
        <div className="text__default">
          I'm a passionate self-taught front-end developer. I love creating
          user-friendly and beautiful web apps that create value for users and
          clients alike. Prior, I did my BA in International Business in Berlin
          and worked in Cloud Consulting with a focus on data migrations.
        </div>
      </div>
    </div>
  );
};

export default About;
