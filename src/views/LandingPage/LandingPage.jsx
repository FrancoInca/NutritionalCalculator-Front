import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Health Control!</h1>
      <p>
        The place where you can access information about all kinds of
        ingredients and foods to manage your daily meals in a balanced way.
      </p>
      <Link to={"/home"}>Start Here</Link>
    </div>
  );
}
export default LandingPage;
