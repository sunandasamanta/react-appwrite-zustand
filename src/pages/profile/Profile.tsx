import { useEffect } from "react";
import useAuthStore from "../../store/authStore"

export default function () {

  const { getUser, user, loading, logout } = useAuthStore();
  useEffect(()=> {
    getUser();
  })

  return !loading && user && (
  <div>
    <p className="font-medium text-black">{user.name}</p>
    <button onClick={logout}>Log Out!</button>
  </div>
)}
