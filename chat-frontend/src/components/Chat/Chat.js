import { useSelector } from 'react-redux';
import { getAuth } from '../../store/selectors';

export const Chat = () => {
  const { user } = useSelector(getAuth);

  return (
    <div>
      <h1>Chat screen</h1>
      <p>Welcome, { user.firstName }</p>
    </div>
  );
};