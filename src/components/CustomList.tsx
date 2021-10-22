import React, { ReactElement } from "react";
import styled from "styled-components";
import { CheckIcon } from "../assets/Icons";
import Spacing from "./Spacing";

interface Props {
  data: Array<string>;
}

const List = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  text-indent: 0em;
`;

const ListItem = styled.li`
  background: #181a1c;
  border: 2px solid #232323;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 20px;
  padding-bottom: 40px;
  margin-bottom: 14px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #cacaca;
  ${({ theme }) => theme.breakpoint.down("lg")} {
    font-size: 16px;
  }
  ${({ theme }) => theme.breakpoint.down("sm")} {
    font-size: 14px;
  }

  display: flex;
`;

function CustomList({ data }: Props): ReactElement {
  return (
    <List>
      {data.map((item, index) => (
        <ListItem key={index.toString()}>
          <Spacing marginRight="18px">
            <CheckIcon key={index.toString()} />
          </Spacing>{" "}
          {item}
        </ListItem>
      ))}
    </List>
  );
}

export default CustomList;
