import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { RootStore } from '@app/redux/combined';
import { Chat } from '@app/components/Chat/Chat';
import { Chat as ChatType } from '@app/types/chats.types';
import {
  setActiveChat,
  deleteChat,
  markChatAsRead,
  markAsPaid,
} from '@app/redux/actions/chats/chats.actions';
import { changeUserType } from '@app/redux/actions/user/user.actions';
import { Info } from '@app/components/Chat/Info/Info';
import { USER_ROLES } from '@app/constants/User/user.constants';
import { SideMenu } from '@app/components/base/SideMenu/SideMenu';
import PersonIcon from '@assets/img/user.svg';
import CloseIcon from '@assets/img/close.svg';

interface MapStateToProps {
  chat: ChatType;
  currentUserType: string;
  bitcoinFloat: number;
}

interface MatchParams {
  chatId: string;
}

const mapStateToProps = (state: RootStore): MapStateToProps => ({
  chat: state.chats.activeChat
    ? state.chats.data.find((chat) => chat.id === state.chats?.activeChat)
    : null,
  currentUserType: state.user.currentUser.role,
  bitcoinFloat: state.chats.bitcoinFloat,
});

const mapDispatchToProps = {
  setActiveChat,
  deleteChat,
  markChatAsRead,
  markAsPaid,
  changeUserType,
};

type MapDispatchToProps = typeof mapDispatchToProps;

type Props = MapDispatchToProps &
  MapStateToProps &
  RouteComponentProps<MatchParams>;

const ChatContainerConnected = (props: Props) => {
  React.useEffect(() => {
    props.setActiveChat(props.match.params.chatId);
    props.markChatAsRead(props.match.params.chatId, props.currentUserType);
  }, [props.match.params.chatId, props.currentUserType]);

  const differentUserRole = React.useMemo(
    () =>
      props.currentUserType === USER_ROLES.BUYER
        ? USER_ROLES.SELLER
        : USER_ROLES.BUYER,
    [props.currentUserType],
  );

  const markChatAsPaid = React.useCallback(() => {
    props.markAsPaid(props.chat.id);
  }, [props.chat]);

  const changeUserTypeEmmiter = React.useCallback(() => {
    props.changeUserType(differentUserRole);
  }, [props.currentUserType]);

  return (
    props.chat && (
      <>
        <Chat {...props} />
        <div className="chat-info-container">
          <Info
            chat={props.chat}
            markAsPaid={markChatAsPaid}
            changeUserType={changeUserTypeEmmiter}
            differentUserRole={differentUserRole}
            bitcoinFloat={props.bitcoinFloat}
          />
        </div>

        <div className="chat-info-container__mobile right-menu">
          <SideMenu
            right
            customBurgerIcon={<PersonIcon />}
            customCrossIcon={<CloseIcon width={10} height={10} />}
          >
            <Info
              chat={props.chat}
              markAsPaid={markChatAsPaid}
              changeUserType={changeUserTypeEmmiter}
              differentUserRole={differentUserRole}
              bitcoinFloat={props.bitcoinFloat}
            />
          </SideMenu>
        </div>
      </>
    )
  );
};

export const ChatContainer = connect<MapStateToProps, MapDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(ChatContainerConnected);
