import { RefObject, useEffect, useState } from "react";

interface IProps {
  ref: RefObject<HTMLLIElement>;
}

function useElementSize({ ref }: IProps) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      if (ref.current) {
        setSize({
          width: ref.current.clientWidth,
          height: ref.current.clientHeight,
        });
      }
    }
    handleResize();
  }, [ref]);
  return size;
}

export default useElementSize;
