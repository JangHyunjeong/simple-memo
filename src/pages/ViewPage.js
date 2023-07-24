import styled from "styled-components";

// constant
import FontSize from "../styles/FontSize";
import Colors from "../styles/Colors";

// components
import { Button } from "../components/Button";

const ViewLayout = styled.section`
  max-height: 500px;
  padding: 20px 20px 26px;
  background-color: ${Colors.white};
  border-radius: 4px;
  overflow-y: auto;

  header {
    padding: 0 0 20px;
    border-bottom: 1px solid ${Colors.border};
    margin-bottom: 20px;

    h3 {
      font-size: ${FontSize.medium};
      font-weight: 700;
      line-height: 1.4em;
      margin-bottom: 10px;
    }

    time {
      display: block;
      color: ${Colors.grey};
    }
  }

  .content {
    line-height: 1.6em;
  }

  .button-group {
    margin-top: 20px;

    button {
      margin-top: 4px;
    }
  }
`;

const ViewPage = function () {
  return (
    <ViewLayout>
      <h2 className="visually-hidden">뷰페이지</h2>

      <header>
        <h3>
          노트 타이틀 영역입니다.노트 타이틀 영역입니다.노트 타이틀
          영역입니다.노트 타이틀 영역입니다.노트 타이틀 영역입니다.
        </h3>
        <time>2분전</time>
      </header>

      <div className="content">
        <p>
          노트 간략한 내용노트 간략한 내용노트 간략한 내용노트 간략한 내용노트
          간략한 내용노트 간략한 내용노트 간략한 내용노트 간략한 내용노트 간략한
          내용
        </p>
      </div>

      <div className="button-group">
        <Button bg={Colors.yellow}>수정하기</Button>
        <Button bg={Colors.red}>삭제하기</Button>
        <Button bg={Colors.black}>뒤로가기</Button>
      </div>
    </ViewLayout>
  );
};

export { ViewPage };
