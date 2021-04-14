import React, { useRef } from "react";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/signup-illustration.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegisterUser } from "../../redux/reduxThunk/asyncFuncs";
import store from '../../redux/store'
function RegisterPage() {
  const logoLinkUrl = "/"
  const headingText = "Зарегистрироваться в  SSHelper"
  const socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign Up With VK",
      url: "https://google.com",
    },
  ]
  const submitButtonText = "Sign Up"
  const SubmitButtonIcon = SignUpIcon
 const  tosUrl = "#"
  const privacyPolicyUrl = "#"
  const signInUrl = "/signin"

  const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

  const SocialButtonsContainer = tw.div`flex flex-col items-center`;
  const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

  const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
  const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

  const Form = tw.form`mx-auto max-w-xs`;
  const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
  const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

const dispatch = useDispatch();
const nicknameInput = useRef();
const emailInput = useRef();
const passwordInput = useRef();
const history = useHistory();
const {error} = useSelector((state) => state.users);

const RegistrationHandler = (e) => {
  e.preventDefault();
  const nickname = nicknameInput.current.value;
  const email = emailInput.current.value;
  const password = passwordInput.current.value;
  dispatch(fetchRegisterUser(nickname, email, password));

  setTimeout(() => {
    let  isError  = store.getState((store) =>store.users.error)
    if (!isError.users.error) {
      history.push("/map");
    }   
  }, 500);
};

  return (
    <>
        <Container>
    <Content>
      <MainContainer>
        <LogoLink href={logoLinkUrl}>
          <LogoImage src={logo} />
        </LogoLink>
        <MainContent>
          <Heading style={{ position: "unset" }}>{headingText}</Heading>
          <FormContainer>
            <SocialButtonsContainer>
              {socialButtons.map((socialButton, index) => (
                <SocialButton key={index} href={socialButton.url}>
                  <span className="iconContainer">
                    <img
                      src={socialButton.iconImageSrc}
                      className="icon"
                      alt=""
                    />
                  </span>
                  <span className="text">{socialButton.text}</span>
                </SocialButton>
              ))}
            </SocialButtonsContainer>
            <DividerTextContainer>
              <DividerText></DividerText>
            </DividerTextContainer>

            <Form onSubmit={RegistrationHandler}>
              <Input type="text" ref={nicknameInput} placeholder="nickname" required/>
              <Input type="email" ref={emailInput} placeholder="Email" required />
              <Input
                type="password"
                ref={passwordInput}
                placeholder="Password"
                required
              />
              <SubmitButton type="submit">
                <SubmitButtonIcon className="icon" />
                <span className="text">Зарегистрироваться</span>
              </SubmitButton>
              {error && <p tw="mt-8 text-sm text-red-600 text-center">{error}</p>}

              <p tw="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by treact's{" "}
                <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
                  Terms of Service
                </a>{" "}
                and its{" "}
                <a
                  href={privacyPolicyUrl}
                  tw="border-b border-gray-500 border-dotted"
                >
                  Privacy Policy
                </a>
              </p>

              <p tw="mt-8 text-sm text-gray-600 text-center">
                Already have an account?{" "}
                <a href={signInUrl} tw="border-b border-gray-500 border-dotted">
                  Sign In
                </a>
              </p>
            </Form>
          </FormContainer>
        </MainContent>
      </MainContainer>
      {/* <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer> */}
    </Content>
  </Container>
   {/* </AnimationRevealPage> */}
    </>
  );
}

export default RegisterPage;
