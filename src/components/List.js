import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
    margin-bottom: 8px;
    ${Ellipsis}
  }
  p {
    margin-bottom: 12px;
    line-height: 1.2em;
    color: ${Colors.grey};
    ${Ellipsis}
  }
  time {
    display: block;
    font-size: ${FontSize.small};
    color: ${Colors.grey};
  }
`;

export const List = function (props) {
  const navigate = useNavigate();

  return (
    <ListLayout>
      <h2 className="visually-hidden">메모 리스트</h2>
      <CardList>
        {props.memoList.length === 0 ? (
          <Empty>
            <p>등록된 메모가 없습니다</p>
          </Empty>
        ) : (
          props.memoList.map((item) => {
            return (
              <Card
                key={item.id}
                onClick={() => {
                  navigate(`/view/${item.id}`);
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <time>{item.dateTime}</time>
              </Card>
            );
          })
        )}
      </CardList>
    </ListLayout>
  );
};
