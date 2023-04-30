export const UserDashboardComponent = ({category, srcLogo}) => {
  return (
    <figure>
      <img src={srcLogo} alt={category} />
      <p>{category}</p>
    </figure>
  );
};
