import "./index.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__text">
        <h1>Kalibaba</h1>
        <h3>Il miglior marketplace in Vite</h3>
      </div>
      <img
        src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        //https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
        alt="hero image"
      />
    </div>
  );
};

export default Hero;
