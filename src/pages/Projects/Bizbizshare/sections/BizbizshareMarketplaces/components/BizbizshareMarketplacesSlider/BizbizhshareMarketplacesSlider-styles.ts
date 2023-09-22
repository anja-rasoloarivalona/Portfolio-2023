import styled from 'styled-components';

export const Container = styled.div`
    height: max-content;
    max-height: max-content;
    max-width: 100vw;
    width: 100%;
    grid-column: 1 / -1;
    padding-bottom: ${({ theme }) => theme.box.spacing.xxl};
    margin-bottom: ${({ theme }) => theme.box.spacing.xl};

    .slick-dots {
        bottom: -${({ theme }) => theme.box.spacing.xxl};

        > li button::before {
            color: ${({ theme }) => theme.colors.onBackground};
        }
    }

    @media (max-width: 750px) {
        .slick-slide {
            height: 48rem;

            > div {
                height: 48rem;
            }
        }
    }

    @media (max-width: 580px) {
        .slick-slide {
            height: 46rem;

            > div {
                height: 46rem;
            }
        }
    }
`;

export const SliderItem = styled.div`
    padding: 0 1rem;
    height: 100%;

    @media (min-width: 581px) {
        &.first {
            padding-left: 2rem;
        }

        &.last {
            padding-right: 2rem;
        }
    }

    li {
        list-style: none;
    }
`;
