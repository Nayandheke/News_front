import PropTypes from 'prop-types';

export const Heading = ({ title }) => {
  return (
    <>
      <div className="heading">
        <h2>{title}</h2>
      </div>
    </>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};
