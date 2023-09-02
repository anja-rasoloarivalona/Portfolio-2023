import React, { useState, useRef, useContext } from 'react';
import {
    AnimationContainer,
    AnimationMessage,
    Container,
    Content,
    ErrorBanner,
    ErrorBannerMessage,
    Form,
    FormFooter,
    FormGroup,
    FormGroupInput,
    FormGroupLabel,
    FormGroupTextarea,
    Title,
} from './HeaderForm-styles';
import { OutlinedButton } from '../../../../components';
import { AiOutlineSend, AiOutlineClose } from 'react-icons/ai';
import '@dotlottie/player-component';
import animation from '../../../../assets/animation.lottie';
import { AppContext } from '../../../../App';
import { sendEmail } from '../../../../tools';

enum FormState {
    FILLING,
    SENDING,
    SENT,
}

const HeaderForm = () => {
    const lottieRef = useRef<any>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errorMessage, setErrorMessage] = useState<null | string>(null);
    const [formState, setFormState] = useState(FormState.FILLING);
    const { setOpenedMenu } = useContext(AppContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            setErrorMessage(null);
            if (formData.message === '') {
                setErrorMessage('Please enter a message');
                return;
            }
            setFormState(FormState.SENDING);
            await sendEmail(formData.name, formData.email, formData.message);
            setFormState(FormState.SENT);
            setTimeout(() => {
                lottieRef.current.play();
                setTimeout(() => {
                    setOpenedMenu(null);
                }, 1500);
            }, 100);
        } catch (err) {
            setErrorMessage('An error occurred');
            setFormState(FormState.FILLING);
        }
    };

    return (
        <Container>
            <Content isDisplayed={formState === FormState.FILLING}>
                <Title>I'm excited to learn about your project. Ready to get started?</Title>
                <Form onSubmit={handleSubmit}>
                    {errorMessage != null && (
                        <ErrorBanner>
                            <ErrorBannerMessage>{errorMessage}</ErrorBannerMessage>
                            <AiOutlineClose onClick={() => setErrorMessage(null)} />
                        </ErrorBanner>
                    )}

                    <FormGroup>
                        <FormGroupLabel>Name</FormGroupLabel>
                        <FormGroupInput name="name" value={formData.name} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <FormGroupLabel>Email</FormGroupLabel>
                        <FormGroupInput
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup isExpanded>
                        <FormGroupLabel>
                            Message <span className="required">*</span>
                        </FormGroupLabel>
                        <FormGroupTextarea name="message" value={formData.message} onChange={handleChange} />
                    </FormGroup>
                    <FormFooter>
                        <OutlinedButton type="submit" leadingIcon={<AiOutlineSend />} isExpanded>
                            Send message
                        </OutlinedButton>
                    </FormFooter>
                </Form>
            </Content>

            <AnimationContainer isDisplayed={formState !== FormState.FILLING}>
                <dotlottie-player
                    src={animation}
                    style={{ height: '20rem', width: '20rem' }}
                    ref={lottieRef}
                />
                <AnimationMessage>
                    {formState === FormState.SENDING ? 'Sending message ...' : 'Thank you for your message.'}
                </AnimationMessage>
            </AnimationContainer>
        </Container>
    );
};

export default HeaderForm;
