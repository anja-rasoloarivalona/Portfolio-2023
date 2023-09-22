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
    hasArrow?: boolean;
    path?: string;
    externalPath?: string;
    leadingIcon?: React.ReactNode;
    isExpanded?: boolean;
};

const OutlinedButtonWrapper = ({
    path,
    children,
    externalPath,
}: {
    path?: string;
    externalPath?: string;
    children: React.ReactNode;
}) => {
    if (path != null) {
        return <Link to={path}>{children}</Link>;
    }

    if (externalPath != null) {
        return (
            <a href={externalPath} target="_blank">
                {children}
            </a>
        );
    }
    return <>{children}</>;
};

const OutlinedButton = ({
    children,
    leadingIcon,
    path,
    externalPath,
    hasDarkBackground = true,
    hasArrow = true,
    ...rest
}: OutlinedButtonProps) => {
    return (
        <OutlinedButtonWrapper path={path} externalPath={externalPath}>
            <Container {...rest} hasDarkBackground={hasDarkBackground} className="button">
                {leadingIcon != null && <LeadingIconContainer>{leadingIcon}</LeadingIconContainer>}
                {children}
                {leadingIcon == null && hasArrow === true && (
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
