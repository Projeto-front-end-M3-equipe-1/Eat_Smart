interface IOffersCartProps {
  category: string;
  srcLogo: string;
  searchByCategory(category: string): Promise<void>;
}


export const UserDashboardComponent = ({category, srcLogo, searchByCategory}: IOffersCartProps) => {
  return (
    <figure onClick={() => searchByCategory(category)}>
      <img src={srcLogo} alt={category} />
      <p>{category}</p>
    </figure>
  );
};
