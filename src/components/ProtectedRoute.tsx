
import { Outlet } from 'react-router'
import useAuthStore from '../store/authStore'
import { useEffect } from 'react';

export default function ProtectedRoute() {
  const { getUser, user } = useAuthStore();
  useEffect(()=> {
      getUser();
    })
  return user ? <Outlet /> : null
}
