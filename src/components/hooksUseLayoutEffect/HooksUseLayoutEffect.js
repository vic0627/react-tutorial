import { useId } from "react";
import ButtonWithTootip from "./ButtonWithTooltip";

// Pitfall: `useLayoutEffect` can hurt performance. Prefer `useEffect` if possible.

// `useLayoutEffect` is a version of `useEffect` that fires before the browser repaints the screen.

// Syntax: useLayoutEffect(setup, dependencies?)

const HooksUseLayoutEffect = () => {
  const buttonArray = [
    {
      tooltipContent: (
        <div>
          This tooltip does't fit above the button.
          <br />
          This is why it's displayed below instead!
        </div>
      ),
      children: "Hover over me (tooltip above)",
      key: useId(),
    },
    {
      tooltipContent: <div>This tooltip fits above the button.</div>,
      children: "Hover over me (tooltip below)",
      key: useId(),
      keyForDiv: useId(),
    },
    {
      tooltipContent: <div>This tooltip fits above the button.</div>,
      children: "Hover over me (tooltip below)",
      key: useId(),
      keyForDiv: useId(),
    },
  ];

  return (
    <div>
      {buttonArray.map((item, index) => {
        const { tooltipContent, children, key } = item;

        const keyForDiv = item?.keyForDiv;

        return (
          <>
            {index !== 0 && <div style={{ height: 50 }} key={keyForDiv} />}
            <ButtonWithTootip tooltipContent={tooltipContent} key={key}>
              {children}
            </ButtonWithTootip>
          </>
        );
      })}
    </div>
  );
};

export default HooksUseLayoutEffect;
