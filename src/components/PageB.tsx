import { animated, useSpring } from "react-spring";
import { useState } from "react";

export const PageB = () => {
  const [{ opacity }, set] = useSpring(() => ({
    opacity: 1,
  }));
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>Page B</h1>
      <section {...setOnHover(set, { opacity: 0 }, { opacity: 1 })}>
        <h2>Hover With Spring</h2>
        <animated.h3 style={{ opacity }}>Test</animated.h3>
      </section>
      <section>
        <h2>Hover to show component</h2>
        <button
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          Button Text
        </button>
        <br />
        {visible ? <Popup /> : "Not Visible"}
      </section>
    </div>
  );
};

const Popup = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { friction: 200 },
  });
  return <animated.div style={props}>Popup Here</animated.div>;
};

function setOnHover(
  set: (set: React.CSSProperties) => void,
  enter: React.CSSProperties,
  leave: React.CSSProperties
): { onMouseEnter: () => void; onMouseLeave: () => void } {
  return {
    onMouseEnter: () => set(enter),
    onMouseLeave: () => set(leave),
  };
}
