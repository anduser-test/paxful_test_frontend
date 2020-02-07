import * as React from 'react';

interface ChildArgs {
  isToggled: boolean;
  setNegativeStatus?: () => void;
  setPositiveStatus?: () => void;
}

const Toggled = (props: {
  initial: boolean;
  children: (functional: ChildArgs) => React.ReactNode;
}) => {
  const [isToggled, setToggle] = React.useState(props.initial);

  const setNegativeStatus = React.useCallback(() => {
    setToggle(false);
  }, []);

  const setPositiveStatus = React.useCallback(() => {
    setToggle(true);
  }, []);

  return (
    <>
      {props.children({
        isToggled,
        setNegativeStatus,
        setPositiveStatus,
      })}
    </>
  );
};

export { Toggled };
