interface IOptionProps {
    value: string;
    innerText: string
  }

export const UserDashboardOption = ({value, innerText}: IOptionProps) => {
    return (
      <option value={value}>{innerText}</option>
    );
  };