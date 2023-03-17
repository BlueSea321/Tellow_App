import React from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

export default function Faqs({ id, quiz, ans }) {
  const [isShow, setIsShow] = React.useState(false);

  React.useEffect(() => {
    const htmlElement = (str) => {
      if (isShow) {
        document.getElementById(id).innerHTML = str;
      }
    };
    htmlElement(ans);
  });

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <div
        className="d-flex align-items-center mt-2 faqs_title"
        onClick={toggleShow}
      >
        {isShow ? <FaAngleDown /> : <FaAngleRight />}
        <div>{quiz}</div>
      </div>
      {isShow && <div id={id} className="mt-2"></div>}
    </>
  );
}
