import { Link } from "react-router";

export default function Home() {
  return (
    <div className="">
      Home
      <Link to="/auth">
        <button className="btn">Join Us!</button>
      </Link>
    </div>
  )
}
