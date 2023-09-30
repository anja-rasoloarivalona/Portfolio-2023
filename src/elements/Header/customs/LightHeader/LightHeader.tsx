import React, { useContext } from 'react';
import { Container, Content } from './LightHeader-styles';
import { Logo } from '../../../../components';
import { HeaderMenuIcon } from '../../components';
import { AppContext } from '../../../../App';
import { DISPLAY_STATE } from '../../../../types';

type LightHeaderProps = {
    displayState: DISPLAY_STATE;
};

const LightHeader = ({ displayState }: LightHeaderProps) => {
    const { openedMenu } = useContext(AppContext);
    return (
        <Container isDisplayed={displayState === DISPLAY_STATE.LOADED}>
            <Content>
                <Logo hasDarkBackground={false} />
                <HeaderMenuIcon isMainHeader={false} isMenuOpened={openedMenu != null} />
            </Content>
        </Container>
    );
};

export default LightHeader;
