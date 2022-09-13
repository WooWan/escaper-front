import { InfiniteQueryObserverResult } from "@tanstack/react-query";
import { RefObject, useEffect } from "react";

interface IProps {
  target: RefObject<HTMLDivElement>;
  onIntersect: ([entry]: IntersectionObserverEntry[]) =>
    | false
    | Promise<InfiniteQueryObserverResult<any, unknown>>;
}
export const useObserver = ({
  target, // 감지할 대상, ref를 넘길 예정
  onIntersect, // 감지 시 실행할 callback 함수
}: IProps) => {
  useEffect(() => {
    let observer: IntersectionObserver;

    // 넘어오는 element가 있어야 observer를 생성할 수 있도록 한다.
    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      });
      // 실제 Element가 들어있는 current 관측을 시작한다.
      observer.observe(target.current);
    }
    const value = target.current;
    return () => {
      observer.disconnect();
    };
  }, [target, onIntersect]);
};
