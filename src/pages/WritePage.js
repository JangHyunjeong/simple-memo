import styled from "styled-components";

// constant
import FontSize from "../styles/FontSize";
import Colors from "../styles/Colors";

// components
import { Button } from "../components/Button";

const WriteLayout = styled.section`
  h2{
    margin-bottom: 20px;
    font-size: ${FontSize.medium};
    font-weight: 500;
  }

  input {
    display: block;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    padding: 0 10px;
    border: 1px solid ${Colors.border};
    border-radius: 4px;
  }

  textarea {
    display: block;
    width: 100%;
    height: 300px;
    padding: 10px;
    line-height: 1.6em;s
    border: 1px solid ${Colors.border};
    border-radius: 4px;
  }

  .button-group {
    margin-top: 20px;

    button {
      margin-top: 4px;
    }
  }
`;

const WritePage = function () {
  return (
    <WriteLayout>
      <h2>새 메모 작성하기</h2>

      <input placeholder="제목을 입력해주세요" aria-label="제목"></input>

      <textarea placeholder="내용을 입력해주세요" aria-label="내용"></textarea>

      <div className="button-group">
        <Button bg={Colors.blue}>작성완료</Button>
        <Button bg={Colors.black}>뒤로가기</Button>
      </div>
    </WriteLayout>
  );
};

export { WritePage };
