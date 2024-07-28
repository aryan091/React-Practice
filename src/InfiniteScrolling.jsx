import { useEffect, useState } from "react"

const InfiniteScrolling = () => {
  const [count, setCount] = useState(10);
  const elements = [];

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setCount((prevCount) => prevCount + 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Only run once on mount

  for (let i = 0; i < count; i++) {
    elements.push(
      <div key={i} id="card" >
        {i + 1}
      </div>
    );
  }

  return <div id='card'>{elements}</div>;
};
export default InfiniteScrolling