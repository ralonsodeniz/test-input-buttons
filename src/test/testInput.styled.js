import styled from 'styled-components';

export const StyledInput = styled.input`
  display: none;

  &:checked ~ label {
    background-color: red !important;
  }
`;

export const StyledLabel = styled.label``;
