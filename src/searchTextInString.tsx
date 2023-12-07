const searchTextInString
  = (string: string, text: string): boolean => {
    return string
      .toLowerCase()
      .includes(
        text.toLowerCase().trim(),
      );
  };

export default searchTextInString;
