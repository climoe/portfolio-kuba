import { css } from 'styled-components';

export const center = css`
  display: block;
  margin: 0 auto;
`;

export const textCenter = css`
  text-align: center;
`;

export const bold = css`
  font-weight: bold;
`;

export const contentMax = css`
  max-width: 100%;
  margin: 0 1rem;
  padding: 0 1rem;
`;

export const wideContentMixin = css`
  max-width: 125rem;
  margin: 0 auto;
`;

export const fullWidth = css`
  width: 100%;
`;

export const block = css`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  & > div {
    flex: 1;
    padding: 0 2.5rem;
  }
`;

export const wrapper = css`
  position: relative;
  margin: auto;
  max-width: 140rem;
  overflow: hidden;
  background-color: #fff;
  z-index: 0;
  box-shadow: 0 0.0625rem 0.25rem 0 rgba(61, 66, 80, 0.18);
`;
