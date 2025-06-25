import useAuthStore from "../../store/authStore"

export default function () {
  const { user, loading, logout } = useAuthStore();
  return !loading && user && (
  <div>
    <p className="font-medium text-black">{user.name}</p>
    <button onClick={logout}>Log Out!</button>
  </div>
)}
