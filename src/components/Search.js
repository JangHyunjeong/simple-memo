import styled from "styled-components";
import Colors from "../styles/Colors";
import { FlexCenterBetween } from "../styles/Flex";

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

const Search = function () {
  return (
    <SearchStyle>
      <h2 className="visually-hidden">검색하기</h2>
      <SearchInput
        type="text"
        aria-label="검색어를 입력해주세요"
        placeholder="검색어를 입력해주세요"
      ></SearchInput>
      <SearchSelect aria-label="정렬변경">
        <option>최근등록순</option>
        <option>최초등록순</option>
      </SearchSelect>
    </SearchStyle>
  );
};

export { Search };