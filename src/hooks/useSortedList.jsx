import { useGetCharactersQuery } from "../redux/characters/charactersSlice";

export const useSortedList = ({ search, page }) => {
  const { data, isFetching, error } = useGetCharactersQuery({ search, page });
  console.log(data);
  if (!data) {
    return { data: null, error, isFetching };
  }
  const { characters, pages } = data;
  const sortedList = [...characters].sort((prevChar, nextChar) => {
    const firstCharName = prevChar.name.toLowerCase();
    const secondCharName = nextChar.name.toLowerCase();
    if (firstCharName < secondCharName) {
      return -1;
    }
    if (firstCharName > secondCharName) {
      return 1;
    }
    return 0;
  });
  return { data: { characters: sortedList, pages }, isFetching, error };
};
