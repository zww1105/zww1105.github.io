import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const StyledWrapper = styled.div`
  .my-container {
    width: 100%;
    background: linear-gradient(
      -45deg,
      #c5e4f2,
      /* 适中的淡蓝色 */ #c8e8c8,
      /* 适中的淡绿色 */ #f5e6c3,
      /* 适中的淡黄色 */ #f2d4e8,
      /* 适中的淡粉色 */ #f2d4dc,
      /* 适中的浅粉色 */ #d8c8f2,
      /* 适中的淡紫色 */ #c8d8f2,
      /* 适中的淡蓝紫色 */ #e6f2d4,
      /* 适中的浅黄绿色 */ #d4f2ee /* 适中的淡青色 */
    );
    background-size: 500% 500%;
    animation: ${gradientAnimation} 40s ease-in-out infinite;
    height: 200%;
  }
`;
