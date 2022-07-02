import styled from 'styled-components';
const Login = (props) => {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/jack.jpg" alt="" />
                    <SignUp>GET STARTED</SignUp>
                    <Description>
                        A Web-based application capable of running SQL queries and displaying the results of said query. You can Practice your SQL skills here to get better and better in it.
                    </Description>
                    <SubHeading> WELCOME TO SQL QUERY EDITOR </SubHeading>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const SubHeading = styled.h2`
   
   color:rgba(0,102,45,255);
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width:100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 150%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(" /images/background-5.png");
    position: absolute;
    top:-50%;
    right:0;
    left:0;
    z-index:-1;
`;


const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: rgba(0,102,45,255);
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  cursor: pointer;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: rgba(13,138,69,255);
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;