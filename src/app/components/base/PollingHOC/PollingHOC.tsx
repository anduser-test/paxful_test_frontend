import * as React from 'react';
import { connect } from 'react-redux';

import { randomizer } from '@app/utils/chat.helpers';

// TODO only for demonstration of HOC's
export const withPolling = (pollingAction: any) => (
  Component: React.ComponentType,
) => {
  const Wrapper = () => (props: any) => {
    const poolData = React.useCallback(() => {
      props.pollingAction();
      setTimeout(poolData, randomizer(10000, 30000));
    }, []);

    React.useEffect(() => {
      poolData();
    }, []);

    return <Component {...props} />;
  };
  const mapDispatchToProps = { pollingAction };
  return connect(null, mapDispatchToProps)(Wrapper());
};
