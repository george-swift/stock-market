import PropTypes from 'prop-types';

const Story = ({
  symbol,
  title,
  text,
  site,
}) => (
  <div className="card">
    <div className="card-header">{symbol}</div>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <h5>{title}</h5>
        <p>{text}</p>
        <footer className="blockquote-footer">
          <cite title={site}>{site}</cite>
        </footer>
      </blockquote>
    </div>
  </div>
);

Story.propTypes = {
  symbol: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
};

export default Story;
