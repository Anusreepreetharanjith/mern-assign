import React, { useState } from "react";


const ReadMore = ( {content} ) => {
  const text = content;
  const [isReadMore, setIsReadMore] = useState(true);
  const handleclick = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p >
      {isReadMore ? text.slice(0, 200) : text}
      <span onClick={handleclick} className="dell">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
  

  
export default ReadMore;