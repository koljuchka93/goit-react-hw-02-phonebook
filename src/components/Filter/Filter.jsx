import PropTypes from 'prop-types';

export function Filter({ value, onChange }) {
  return (
    <label >
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};