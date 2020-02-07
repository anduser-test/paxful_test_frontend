import { connect } from 'react-redux';

import { RootStore } from '@app/redux/combined';
import { Chats } from '@app/components/Chats/Chats';
import { Chat as ChatType } from '@app/types/chats.types';
import { User } from '@app/types/user.types';
import {
  markChatAsRead,
  getBitcoinData,
} from '@app/redux/actions/chats/chats.actions';
import { withPolling } from '@app/components/base/PollingHOC/PollingHOC';

interface MapStateToProps {
  chats: ChatType[];
  currentUser: User;
  activeChat: string;
  bitcoinFloat: number;
}

const mapStateToProps = (state: RootStore): MapStateToProps => ({
  chats: state.chats.data,
  currentUser: state.user.currentUser,
  activeChat: state.chats.activeChat,
  bitcoinFloat: state.chats.bitcoinFloat,
});

const mapDispatchToProps = {
  markChatAsRead,
};

type MapDispatchToProps = typeof mapDispatchToProps;

export const ChatsContainer = withPolling(getBitcoinData)(
  connect<MapStateToProps, MapDispatchToProps>(
    mapStateToProps,
    mapDispatchToProps,
  )(Chats),
);
