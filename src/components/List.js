import styled from "styled-components";
import { useState } from "react";
import FontSize from "../styles/FontSize";
import Colors from "../styles/Colors";
import { Ellipsis } from "../styles/Ellipsis";
import { FlexCenter } from "../styles/Flex";

const ListLayout = styled.section`
  margin-top: 20px;
`;

const CardList = styled.ul`
  height: 400px;
  overflow-y: auto;
`;
const Empty = styled.li`
  ${FlexCenter}
  height: 400px;
  padding: 20px;
  background-color: ${Colors.white};
  border-radius: 4px;
`;
const Card = styled.li`
  margin-bottom: 10px;
  padding: 20px;
  background-color: ${Colors.white};
  border-radius: 4px;

  h3 {
    font-size: ${FontSize.medium};
    font-weight: 500;
    line-height: 1.2em;
    margin-bottom: 10px;
    ${Ellipsis}
  }
  time {
    display: block;
    color: ${Colors.grey};
    margin-bottom: 20px;
  }
  p {
    line-height: 1.2em;
    color: ${Colors.grey};
    ${Ellipsis}
  }
`;

export const List = function () {
  let [memoList] = useState(JSON.parse(localStorage.getItem("memoList")));

  return (
    <ListLayout>
      <h2 className="visually-hidden">메모 리스트</h2>
      <CardList>
        {memoList == null ? (
          <Empty>
            <p>등록된 메모가 없습니다</p>
          </Empty>
        ) : (
          memoList.map((item) => {
            return (
              <Card key={item.id}>
                <h3>{item.title}</h3>
                <time>{item.dateTime}</time>
                <p>{item.content}</p>
              </Card>
            );
          })
        )}
      </CardList>
    </ListLayout>
  );
};
