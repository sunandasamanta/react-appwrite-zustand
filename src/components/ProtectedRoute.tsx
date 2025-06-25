
import { Outlet } from 'react-router'
import useAuthStore from '../store/authStore'

export default function ProtectedRoute() {
  const { user } = useAuthStore()
  return user ? <Outlet /> : <>Top</>
}
