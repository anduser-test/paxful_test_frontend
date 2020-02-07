import * as React from 'react';

interface ChildArgs {
  isToggled: boolean;
  toggle: () => void;
  setNegativeStatus?: () => void;
  setPositiveStatus?: () => void;
}

const Toggled = (props: {
  initial: boolean;
  children: (functional: ChildArgs) => React.ReactNode;
}) => {
  const [isToggled, setToggle] = React.useState(props.initial);
  const toggle = React.useCallback(() => {
    setToggle((prevOpenState) => !prevOpenState);
  }, [isToggled]);

  const setNegativeStatus = React.useCallback(() => {
    setToggle(false);
  }, [isToggled]);

  const setPositiveStatus = React.useCallback(() => {
    setToggle(true);
  }, [isToggled]);

  return (
    <>
      {props.children({
        isToggled,
        toggle,
        setNegativeStatus,
        setPositiveStatus,
      })}
    </>
  );
};

export { Toggled };
