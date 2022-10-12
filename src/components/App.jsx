import { useSelector } from 'react-redux';
import { getLoading } from '../redux/feedbacks/feedbacks-selectors';
import FeedbackForm from './Feedback/FeedbackForm';
import Spinner from './Feedback/Spinner';

export default function App() {
  const loading = useSelector(getLoading);
  return (
    <div>
      <FeedbackForm />
      {loading && <Spinner />}
    </div>
  );
}
