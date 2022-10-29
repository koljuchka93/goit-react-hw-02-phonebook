import PropTypes from 'prop-types';

export function Container({ children }) {
  return <div>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};