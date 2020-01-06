export const SearchPage = ({ match, location }) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <p>
      {location.search}
    </p>
  );
};