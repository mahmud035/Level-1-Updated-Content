import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function useAuth() {
  const authInfo = useContext(AuthContext);
  if (!authInfo) {
    throw new Error('useAuthInfo must be used within an AuthProvider');
  }
  return authInfo;
}
