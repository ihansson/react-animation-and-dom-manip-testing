import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

export const PageC = () => {
  return (
    <div>
      <h1>Page C</h1>
      <section>
        <h2>Drag and Drop Item</h2>
        <DragAndDropTest />
      </section>
      <section>
        <h2>Drag and Drop List</h2>
        <DragAndDropListTest />
      </section>
    </div>
  );
};

const DragAndDropTest = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const bind = useDrag(({ down, movement }) => {
    set({ xy: down ? movement : [0, 0] });
  });

  return (
    <animated.div
      {...bind()}
      style={{
        transform: xy.interpolate(
          ((x: number, y: number) => `translate3d(${x}px, ${y}px, 0)`) as any
        ),
      }}
    >
      Drag and drop
    </animated.div>
  );
};

const DragAndDropListTest = () => {
  return <div>Drag and drop</div>;
};
