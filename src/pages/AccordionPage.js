import Accordion from "../components/Accordion";
function AccordionPage() {
    const items = [
        {
            id: 1,
            lable: "Can i use React on a project?",
            content: "you can use react on a any project. if you want",
        },
        {
            id: 2,
            lable: "Can i use Javascript on a project?",
            content: "you can use Javascript on a any project.",
        },
        {
            id: 3,
            lable: "Can i use CSS on a project?",
            content: "you can use CSS on a any project.",
        },
    ];

    return <Accordion items={items} />;
}

export default AccordionPage;
