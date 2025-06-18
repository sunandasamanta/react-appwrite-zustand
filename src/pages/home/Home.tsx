import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-500 via-pink-400 to-cyan-500">
      Home
      <Link to="/auth">
        <button className="btn">Join Us!</button>
      </Link>
    </div>
  )
}
