import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 11.26rem;
  height: 3.375rem;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.5rem;
  text-align: center;
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.primary : "transparent"};
  color: ${({ primary }) => (primary ? "#fff" : "#ffffff")};
  border: 0.125rem solid ${({ primary, theme }) =>
    primary ? theme.colors.primary : "#f5f5f5"};
  border-radius: 0.9375rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    background: #000000e5;
    border: 0.125rem solid #2271d1;
    box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    color: #2271d1;
  }

  &:hover {
    background-color: ${({ primary, theme }) =>
      primary ? theme.colors.primaryHover : theme.colors.secondary};
  }
`;
