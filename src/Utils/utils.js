export const search = (array, key) => {
  let arr = array;

  if (key) {
    arr = arr
      .filter(
        ({ username, firstName, lastName }) =>
          username.toLowerCase().includes(key) ||
          `${firstName.toLowerCase()}${lastName.toLowerCase()}`.includes(key)
      )
      ?.sort((a, b) => {
        const valueA = a?.username.indexOf(key);
        const valueB = b?.username.indexOf(key);
        return valueA - valueB;
      });
    return arr;
  }
  return [];
};

//Generate suggestion on last @ seen
export const usernameSuggestion = (array, key, ref) => {
  // const regex = /@(\w+)/g;
  // const matches = key.match(regex);
  // console.log(matches);
  // if (matches) {
  //   const lastMatch = matches[matches.length - 1];

  //   const nextValue = key.slice(key.lastIndexOf(lastMatch) + 1, key.length);

  //   if (nextValue.includes(" ")) {
  //     // console.log("continued typing");
  //     return [];
  //   }
  //   if (lastMatch) {
  //     const suggestedUser = lastMatch.slice(1);
  //     const suggestedUsers = search(array, suggestedUser);
  //     return suggestedUsers;
  //   }
  // }
  // return [];

  // const regex = /@(\w*)$/;
  // const match = key.match(regex);
  // console.log(match)
  // if (match) {
  //   const currentMention = match[1];
  //   if (currentMention) {
  //     const suggestedUsers = search(array, currentMention);
  //     return suggestedUsers;
  //   }
  // }
  const regex = /@(\w+)/g;
  let currentMention = null;
  let cursorIndex = ref?.current?.selectionStart;
  let match;

  while ((match = regex.exec(key)) !== null) {
    const mentionIndex = match.index;
    const mentionLength = match[0].length;

    if (
      mentionIndex <= cursorIndex &&
      cursorIndex <= mentionIndex + mentionLength
    ) {
      currentMention = match[1];
    }
  }

  const suggestedUsers = search(array, currentMention);
  return suggestedUsers;
};

//Replace username mentionns with <a/> tag
export const linkMentionedUsername = (string) =>
  string.replace(
    /@(\w+)/g,
    '<a href="/profile/$1" data data-username="$1">@$1</a>'
  );

export const unlinkMentionedUsername = (string) => {
  const regex = /<a\b[^>]*>(.*?)<\/a>/g;
  return string.replace(regex, (_, username) => username);
};

//Username Parser
export const renderMessageWithLinks = (string, navigate) => {
  const parser = new DOMParser();
  const parsedHTML = parser.parseFromString(string, "text/html");
  const links = parsedHTML.getElementsByTagName("a");

  const elements = [];

  let currentIndex = 0;
  Array.from(links).forEach((link) => {
    const username = link.getAttribute("data-username");
    const text = link.textContent.trim();
    const startIndex = link.parentNode.textContent.indexOf(text);

    if (startIndex > currentIndex) {
      const previousText = link.parentNode.textContent.substring(
        currentIndex,
        startIndex
      );
      elements.push(<span key={currentIndex}>{previousText}</span>);
    }

    const handleClick = (e) => {
      e.stopPropagation();
      navigate("/profile/" + username);
    };

    elements.push(
      <span
        key={currentIndex + 1}
        onClick={(e) => handleClick(e)}
        style={{ color: "var(--ember)", cursor: "pointer" }}
      >
        {text}{" "}
      </span>
    );

    currentIndex = startIndex + text.length;
  });

  const remainingText = parsedHTML.body.textContent
    .substring(currentIndex)
    .trim();
  if (remainingText) {
    elements.push(<span key={currentIndex + 1}>{remainingText}</span>);
  }

  return elements;
};

export const timeOfPost = (date) => {
  if (!date) {
    return "";
  }

  const currentDate = new Date();
  const formattedDate = new Date(date);

  const timeDiff = currentDate - formattedDate;

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  let result = "";

  if (years > 0) {
    result = `${years} year${years > 1 ? "s" : ""}`;
  } else if (months > 0) {
    result = `${months} month${months > 1 ? "s" : ""}`;
  } else if (days > 0) {
    result = `${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    result = `${hours} hr${hours > 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    result = `${minutes} min${minutes > 1 ? "s" : ""}`;
  } else {
    result = `${seconds} sec${seconds > 1 ? "s" : ""}`;
  }

  return result;
};
