import React, { ButtonHTMLAttributes } from 'react';
import {
    Container,
    TrailingIconContainer,
    TrailingIconBar,
    LeadingIconContainer,
} from './OutlinedButton-styles';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export type OutlinedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    hasDarkBackground?: boolean;
    path?: string;
    leadingIcon?: React.ReactNode;
    isExpanded?: boolean;
};

const OutlinedButtonWrapper = ({ path, children }: { path?: string; children: React.ReactNode }) => {
    if (path != null) {
        return <Link to={path}>{children}</Link>;
    }
    return <>{children}</>;
};

const OutlinedButton = ({
    children,
    leadingIcon,
    path,
    hasDarkBackground = true,
    ...rest
}: OutlinedButtonProps) => {
    return (
        <OutlinedButtonWrapper path={path}>
            <Container {...rest} hasDarkBackground={hasDarkBackground} className="button">
                {leadingIcon != null && <LeadingIconContainer>{leadingIcon}</LeadingIconContainer>}
                {children}
                {leadingIcon == null && (
                    <TrailingIconContainer className="button__icon">
                        <TrailingIconBar className="button__icon__bar" />
                        <BsChevronRight />
                    </TrailingIconContainer>
                )}
            </Container>
        </OutlinedButtonWrapper>
    );
};

export default OutlinedButton;
