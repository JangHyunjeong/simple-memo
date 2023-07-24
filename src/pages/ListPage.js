// constant
import Colors from "../styles/Colors";

// components
import { Search } from "../components/Search";
import { Button } from "../components/Button";
import { List } from "../components/List";

const ListPage = function () {
  return (
    <div>
      <Search></Search>
      <List></List>
      <Button bg={Colors.blue} style={{ marginTop: "20px" }}>
        메모작성
      </Button>
    </div>
  );
};

export { ListPage };
