import styled, { keyframes } from "styled-components";


function BarChart({ color, percent }) {
  return (
    <Chart>
      <StyledDiv1>
        <StyledDiv2 
          percent = {percent}
          color={color} />  
        <Percent color={color} percent = {percent}><span>{percent}</span>%</Percent>
      </StyledDiv1>
      </Chart>
  );
}

export default BarChart;

const Chart = styled.div`
  
`;



const barFill = keyframes`
  0% {width: 0%;}
  100% {width: ${(props) => props.percent};}
`;




const StyledDiv1 = styled.div`
  background-color: #f5f5f5;
  margin:auto;
  width: 85vw;
  height: 2vh;
  border-radius: 15px;
`;

const StyledDiv2 = styled.div`
  background-color: ${(props) => props.color};
  width: ${(props) => props.percent + '%'};
  height: 2vh;
  border-radius: 15px;
  animation: ${barFill} 2s ease;
`;


/*const StyledDiv2 = styled.div`
  color: ${(props) => props.color};
  width: 10vw;
  height: 2vh;
  border-radius: 15px;
  animation: ${barFill} 2s 1;
`;*/


const Percent = styled.div`
  font-size: 18px;
  color: black;
  font-weight: medium;
  text-align:right;
  width: ${(props) => props.percent + '%'};
  animation: ${barFill} 2s ease;
`;

