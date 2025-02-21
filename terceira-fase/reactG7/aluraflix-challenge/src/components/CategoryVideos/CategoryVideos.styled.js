import styled from "styled-components";

export const CategoryTitle = styled.h2`
  max-width: 300px;
  min-width: fit-content;
  background-color: ${({ theme, $category }) =>
    theme.colors.categoryColors[$category] || theme.colors.default};
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;