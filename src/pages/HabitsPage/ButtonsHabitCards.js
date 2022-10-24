import styled from "styled-components";
import { selected, unselected } from "../../constants/Colors";

export default function ButtonsHabitCards({ d, i, card }) {
  return (
    <StyledButton i={i} card={card} selected={selected} unselected={unselected}>
      {d}
    </StyledButton>
  );
}

const StyledButton = styled.div`
  background-color: ${(props) =>
    props.card.days.includes(props.i)
      ? props.selected.background
      : props.unselected.background};
  width: 30px;
  height: 30px;
  color: ${(props) =>
    props.card.days.includes(props.i)
      ? props.selected.color
      : props.unselected.color};
  font-family: "Lexend Deca";
  font-size: 20px;
  border: 1px solid
    ${(props) =>
      props.card.days.includes(props.i)
        ? props.selected.border
        : props.unselected.border};
  border-radius: 5px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
