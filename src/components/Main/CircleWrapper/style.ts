import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 650px;
  left: 600px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff922c;
  z-index: 2;
  transform: translateY(-50%);

  &:hover {
    background-color: #54bf29;
    border: 1px solid transparent;
  }
`;
export const Button1 = styled.button`
  position: absolute;
  top: 650px;
  left: 1100px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff922c;
  z-index: 2;
  transform: translateY(-50%);
  &:hover {
    background-color: #54bf29;
    border: 1px solid transparent;
  }
`;
export const CircleDiv = styled.div`
  border: 2px dashed #e87f1e;
  position: absolute;
  width: 400px;
  height: 400px;
  margin-left: -15px;
  border-radius: 50%;
  margin-top: 0px;
  z-index: -1;
`;

export const CircleWrapper = styled.div<{ rotation: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  height: 300px;
  margin-left: 100vh;
  margin-top: 245px;
  border-radius: 50%;
  transform: rotate(${(props) => props.rotation}deg);
`;

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
`;

export const ImageWrapper = styled.div<{ index: number; total: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  transform: rotate(${(props) => props.index * (360 / props.total)}deg)
    translate(200px);

  img {
    width: 160%;
    height: 170%;
    border-radius: 50%;
  }
`;

export const ImageBtn = styled.img``;

export const HiddenDiv = styled.div`
  position: absolute;
  z-index: 15;
`;
export const Rectangle = styled.div`
  width: 610px;
  height: 260px;
  position: absolute;
  top: -88px;
  margin-left: 475px;
  background-color: white;
`;

export const LeftTriangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: -260px;
  margin-left: 430px;
  background-color: transparent;
  border-right: 250px solid transparent;
  border-bottom: 250px solid white;
  transform: rotate(-19deg);
`;
export const RightTriangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: -215px;
  margin-left: 900px;
  background-color: transparent;
  border-left: 170px solid transparent;
  border-bottom: 170px solid white;
  transform: rotate(27deg);
`;

/////////////////////////

export const TransparantDiv = styled.div`
  background-color: white;
  margin-top: 230px;
  margin-left: 70vh;
  width: 530px;
  height: 200px;
  transform: rotate(20deg);

  border-radius: 20px;
  z-index: 5px;
  position: absolute;
`;

export const TransparantDiv1 = styled.div`
  background-color: white;
  width: 250px;
  height: 250px;
  margin-top: 170px;
  margin-left: 136vh;
  transform: rotate(-23deg);
  border-radius: 20px;

  z-index: -1px;
  position: absolute;
`;

export const WhitRectangleDiv = styled.div`
  position: absolute;
  width: 4px;
  height: 40px;
  left: 90vh;
  top: 51vh;
  transform: rotate(-28deg);

  border-top: 100px solid transparent;
  border-left: 100px solid white;
`;

export const Img = styled.img`
  margin-left: 400px;
  z-index: 10px;
`;
