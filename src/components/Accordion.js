import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
function Accordion({ items }) {
    const [expendedIndex, setExpendedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        setExpendedIndex((currentExpendedIndex) => {
            if (currentExpendedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        });
    };

    const renderedItem = items.map((item, index) => {
        const isExpended = index === expendedIndex;

        const icon = (
            <span className="text-2xl">
                {isExpended ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
        );

        return (
            <div key={item.id}>
                <div
                    onClick={() => handleClick(index)}
                    className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer"
                >
                    {item.lable}
                    {icon}
                </div>
                {isExpended && (
                    <div className="border-b p-5">{item.content}</div>
                )}
            </div>
        );
    });

    return <div className="border-x border-trounded">{renderedItem}</div>;
}

export default Accordion;
