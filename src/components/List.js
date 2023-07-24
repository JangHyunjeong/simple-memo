import styled from "styled-components";
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
  return (
    <ListLayout>
      <h2 className="visually-hidden">메모 리스트</h2>
      <CardList>
        {/* NOTE :: 1. 등록된 메모 없을때 
        <Empty>
          <p>등록된 메모가 없습니다</p>
        </Empty> */}

        {/* NOTE :: 2. 등록된 메모 있을때*/}
        <Card>
          <h3>
            노트 타이틀 영역입니다.노트 타이틀 영역입니다.노트 타이틀
            영역입니다.노트 타이틀 영역입니다.노트 타이틀 영역입니다.
          </h3>
          <time>2분전</time>
          <p>
            노트 간략한 내용노트 간략한 내용노트 간략한 내용노트 간략한 내용노트
            간략한 내용노트 간략한 내용노트 간략한 내용노트 간략한 내용노트
            간략한 내용
          </p>
        </Card>
        <Card>
          <h3>노트 타이틀 영역입니다.</h3>
          <time>2분전</time>
          <p>노트 간략한 내용</p>
        </Card>
        <Card>
          <h3>노트 타이틀 영역입니다.</h3>
          <time>2분전</time>
          <p>노트 간략한 내용</p>
        </Card>
        <Card>
          <h3>노트 타이틀 영역입니다.</h3>
          <time>2분전</time>
          <p>노트 간략한 내용</p>
        </Card>
        <Card>
          <h3>노트 타이틀 영역입니다.</h3>
          <time>2분전</time>
          <p>노트 간략한 내용</p>
        </Card>
      </CardList>
    </ListLayout>
  );
};
