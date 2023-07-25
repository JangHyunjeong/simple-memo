import { useNavigate } from "react-router-dom";

// constant
import Colors from "../styles/Colors";

// components
import { Search } from "../components/Search";
import { Button } from "../components/Button";
import { List } from "../components/List";

const ListPage = function (props) {
  const navigate = useNavigate();

  return (
    <div>
      <Search></Search>
      <List memoList={props.memoList}></List>
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
