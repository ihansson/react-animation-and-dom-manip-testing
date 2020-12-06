import { Transition, TransitionGroup } from "react-transition-group";
import { useEffect, useState } from "react";

type TransitionState = "entering" | "entered" | "exiting" | "exited";

export const PageA = () => {
  return (
    <div>
      <h1>Page A</h1>
      <section>
        <h2>Transition Group Test</h2>
        <TransitionGroupTest />
      </section>
      <section>
        <h2>Transition List Items</h2>
        <TransitionListTest />
      </section>
    </div>
  );
};

const TransitionListTest = () => {
  const [list, setList] = useState(["List A", "List B"]);
  const addListItem = () => {
    setList((list) => [...list, "New Item " + list.length]);
  };
  const removeListItem = () => {
    setList((list) => list.filter((item, index) => index + 1 < list.length));
  };

  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: Record<TransitionState, React.CSSProperties> = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <div>
      <TransitionGroup>
        {list.map((item) => (
          <Transition
            key={item}
            timeout={{ enter: 0, exit: duration }}
            className="item"
          >
            {(state: TransitionState) => (
              <div
                className="animator"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                {item}
              </div>
            )}
          </Transition>
        ))}
      </TransitionGroup>
      <button onClick={addListItem}>Add</button>
      <button onClick={removeListItem}>Remove</button>
    </div>
  );
};

const TransitionGroupTest = () => {
  const [inProp, setInProp] = useState(false);

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: Record<TransitionState, React.CSSProperties> = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInProp(true);
    }, 400);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInProp(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Transition in={inProp} timeout={duration}>
      {(state: TransitionState) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          I'm a fade Transition!
        </div>
      )}
    </Transition>
  );
};
