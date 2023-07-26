import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
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
  const params = useParams();
  const navigate = useNavigate();
  const memoList = useSelector((state) => {
    return state.memoList;
  });
  const memo = memoList.find((item) => {
    return item.id === params.id;
  });

  return (
    <ViewLayout>
      <h2 className="visually-hidden">뷰페이지</h2>

      <header>
        <h3>{memo.title}</h3>
        <time>{memo.dateTime}</time>
      </header>

      <div className="content">
        <p>{memo.content}</p>
      </div>

      <div className="button-group">
        <Button
          bg={Colors.yellow}
          onClick={() => navigate(`/write/${params.id}`)}
        >
          수정하기
        </Button>
        <Button bg={Colors.red}>삭제하기</Button>
        <Button bg={Colors.black} onClick={() => navigate(`/`)}>
          목록으로
        </Button>
      </div>
    </ViewLayout>
  );
};

export { ViewPage };
