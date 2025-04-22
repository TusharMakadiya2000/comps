import { useEffect, useState } from "react";

function useCounter(initialCounter) {
    const [count, setCount] = useState(initialCounter);
    useEffect(() => {
        console.log(count);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    };

    return {
        count,
        handleClick,
    };
}
export default useCounter;
