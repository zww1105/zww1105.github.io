import styled from "styled-components";

const LogoContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
`;

const LogoLink = styled.a`
  display: block;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Logo = styled.img`
  width: 120px;
`;

const ButterCMSLogo = () => {
  return (
    <LogoContainer>
      <LogoLink
        href="https://buttercms.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Logo
          src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"
          alt="ButterCMS Logo"
        />
      </LogoLink>
    </LogoContainer>
  );
};

export default ButterCMSLogo;
