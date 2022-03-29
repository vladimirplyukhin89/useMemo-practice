import useAnyKeyToRender from "./lib";
import { useEffect, useMemo } from "react";

export default function WordCount({ children = "" }) {
  useAnyKeyToRender();

  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <h1>{children}</h1>
      <p>It includes {words.length} words</p>
    </>
  );
}
