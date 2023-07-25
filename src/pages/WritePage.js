import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { uuid4 } from "uuid4";

// constant
import FontSize from "../styles/FontSize";
import Colors from "../styles/Colors";

// components
import { Button } from "../components/Button";
import { useState } from "react";

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

const WritePage = function (props) {
  const navigate = useNavigate();
  const timeStamp = moment().format("YYYY-MM-DD HH:mm:ss");
  const id = uuid4();

  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  // title 가져오기
  function getTitle(e) {
    setTitle(e.target.value);
  }
  // content 가져오기
  function getContent(e) {
    setContent(e.target.value);
  }
  // 게시글 create
  function createMemo() {
    const data = {
      id: id,
      dateTime: timeStamp,
      title: title,
      content: content,
    };

    let copy = [...props.memoList];
    copy.unshift(data);

    localStorage.setItem("memoList", JSON.stringify(copy));
    props.updateMemoList();

    setTitle("");
    setContent("");
    alert("작성완료");
    navigate("/");
  }

  return (
    <WriteLayout>
      <h2>새 메모 작성하기</h2>

      <input
        placeholder="제목을 입력해주세요"
        aria-label="제목"
        onInput={(e) => {
          getTitle(e);
        }}
        value={title}
      ></input>

      <textarea
        placeholder="내용을 입력해주세요"
        aria-label="내용"
        onInput={(e) => {
          getContent(e);
        }}
        value={content}
      ></textarea>

      <div className="button-group">
        <Button
          bg={Colors.blue}
          onClick={() => {
            createMemo();
          }}
        >
          작성완료
        </Button>
        <Button
          bg={Colors.black}
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로가기
        </Button>
      </div>
    </WriteLayout>
  );
};

export { WritePage };
