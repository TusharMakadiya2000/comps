import Button from "../components/Button";
import Panel from "../components/Panel";
import { useReducer } from "react";
import { produce } from "immer";

const INCREMENT_COUNT = "increment";
const CHANGE_VALUE = "change-value";
const DECREMENT_COUNT = "decrement";
const SUBMIT_COUNT = "submit-count";

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
        // return {
        //     ...state,
        //     count: state.count + 1,
        // };
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        // return {
        //     ...state,
        //     count: state.count - 1,
        // };
        case SUBMIT_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        // return {
        //     ...state,
        //     count: state.count + state.valueToAdd,
        //     valueToAdd: 0,
        // };
        case CHANGE_VALUE:
            state.valueToAdd = action.payload;
            return;
        // return {
        //     ...state,
        //     valueToAdd: action.payload,
        // };
        default:
            return;
    }
};

function CounterPage({ initialCounter }) {
    // const [count, setCount] = useState(initialCounter);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCounter,
        valueToAdd: 0,
    });
    console.log("state", state);
    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT,
        });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT,
        });
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: CHANGE_VALUE,
            payload: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: SUBMIT_COUNT,
        });
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    };

    return (
        <Panel className="">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Add a lot!</label>
                <input
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button>Add It!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;
