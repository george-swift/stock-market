import '../assets/Sass/Model.scss';
import { FaCoins, FaSpinner } from 'react-icons/fa';
import { TiWarning } from 'react-icons/ti';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../api';
import Model from '../components/Model';
import FlashMessage from '../components/FlashMessage';

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: company = [], error, loading } = useFetch(`profile/${id}?`);

  if (error) {
    return (
      <FlashMessage>
        <p className="m-0">
          <TiWarning />
          <span className="ms-2">
            Could not retrieve financial model from database.
          </span>
        </p>
      </FlashMessage>
    );
  }

  if (loading) return <p className="page-loading"><FaSpinner /></p>;

  return (
    <div className="container-fluid model">
      <div className="row">
        <div className="col-lg-12 mb-4">
          <h3 className="text-center">
            <FaCoins />
            <span className="ms-3">Financial Model</span>
          </h3>
          <hr />
        </div>
        {company[0] !== undefined ? (
          <Model company={company[0]} />
        ) : (
          <div className="alert alert-warning text-center">
            No information available
          </div>
        )}
        <div className="col-12 mt-5 text-center">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => navigate(-1, { replace: true })}
          >
            Back to Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
