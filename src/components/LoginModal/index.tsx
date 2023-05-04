import { StyledTitleWhite } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import { useNavigate } from "react-router-dom";
import { StyledCartModalBox } from "./style";

export const LoginModal = () => {
  const navigate = useNavigate();
  const handleClick = (type: string) => {
    const typeNav = localStorage.getItem("@handle:nav");

    if (type === "user" && typeNav === "register") {
      localStorage.setItem("@handle:typUser", "userRegister");
      navigate("/register");
    }

    if (type === "user" && typeNav === "login") {
      localStorage.setItem("@handle:typUser", "userLogin");
      navigate("/login");
    }

    if (type === "company" && typeNav === "register") {
      localStorage.setItem("@handle:typUser", "companyRegister");
      navigate("/signup");
    }

    if (type === "company" && typeNav === "login") {
      localStorage.setItem("@handle:typUser", "companyLogin");
      navigate("/signin");
    }
  };

  return (
    <StyledCartModalBox>
      <div>
        <StyledTitleWhite tag="h1" $fontSize="logo" textAlign="center">
          Você é?
        </StyledTitleWhite>
        <span>
          <StyledButton
            id="company"
            value="company"
            $buttonSize="default"
            $buttonStyle="buttonGreenDark"
            onClick={() => handleClick("company")}
          >
            Empresa
          </StyledButton>
          <StyledButton
            id="user"
            value="user"
            $buttonSize="default"
            $buttonStyle="buttonGreenDark"
            onClick={() => handleClick("user")}
          >
            Consumidor
          </StyledButton>
        </span>
      </div>
    </StyledCartModalBox>
  );
};
