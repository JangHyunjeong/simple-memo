import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";

// constant
import Colors from "../styles/Colors";
import { FlexCenterBetween } from "../styles/Flex";

// components
import { Button } from "../components/Button";
import { List } from "../components/List";
import { useState } from "react";

const SearchStyle = styled.div`
  ${FlexCenterBetween}
  margin-bottom: 10px;
`;
const SearchInput = styled.input`
  display: block;
  width: calc(100% - 130px);
  border: 1px solid ${Colors.border};
  border-radius: 4px;
  height: 40px;
  padding: 0 10px;
`;
const SearchSelect = styled.select`
  display: block;
  width: 120px;
  border: 1px solid ${Colors.border};
  border-radius: 4px;
  height: 40px;
  padding: 0 10px;
`;

const ListPage = function () {
  const navigate = useNavigate();

  // store에서 memoList 가져오기 (원본데이터 오염방지)
  const memoListOri = useSelector((state) => {
    return state.memoList;
  });
  const [memoList, setMemoList] = useState([...memoListOri]);

  const [searchKeyword, setSearchKeyword] = useState("");
  const selectOption = ["최신순", "등록순"];

  // 검색하기
  const getSearchResult = function (value) {
    setSearchKeyword(value);

    if (value !== "") {
      let result = memoListOri.filter((item) => {
        return (
          item.title.toUpperCase().includes(value.toUpperCase()) ||
          item.content.toUpperCase().includes(value.toUpperCase())
        );
      });
      setMemoList(result);
    } else {
      setMemoList(memoListOri);
    }
  };

  // 정렬하기
  function sortMemoList(value) {
    setSearchKeyword("");
    value = parseFloat(value);
    const copy = [...memoListOri];

    // 정렬하기 - 최신순
    if (value === 0) {
      copy.sort((a, b) => {
        return new Date(b.dateTime) - new Date(a.dateTime);
      });
      setMemoList(copy);
    }

    // 정렬하기 - 등록순
    if (value === 1) {
      copy.sort((a, b) => {
        return new Date(a.dateTime) - new Date(b.dateTime);
      });
      setMemoList(copy);
    }
  }

  return (
    <div>
      <SearchStyle>
        <h2 className="visually-hidden">검색하기</h2>
        <SearchInput
          type="text"
          aria-label="검색어를 입력해주세요"
          placeholder="검색어를 입력해주세요"
          onInput={(e) => {
            getSearchResult(e.target.value);
          }}
          value={searchKeyword}
        ></SearchInput>
        <SearchSelect
          aria-label="정렬변경"
          onChange={(e) => {
            sortMemoList(e.target.value);
          }}
        >
          {selectOption.map((item, idx) => {
            return (
              <option key={idx} value={idx}>
                {item}
              </option>
            );
          })}
        </SearchSelect>
      </SearchStyle>
      <List memoList={memoList}></List>
      <Button
        $bg={Colors.blue}
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
