import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

// constant
import Colors from "../styles/Colors";

// components
import { Search } from "../components/Search";
import { Button } from "../components/Button";
import { List } from "../components/List";

const ListPage = function () {
  const navigate = useNavigate();
  const memoList = useSelector((state) => {
    return state.memoList;
  });

  return (
    <div>
      <Search></Search>
      <List memoList={memoList}></List>
      <Button
        bg={Colors.blue}
        style={{ marginTop: "20px" }}
        onClick={() => {
          navigate("/write");
        }}
      >
        메모작성
      </Button>
    </div>
  );
};

export { ListPage };
