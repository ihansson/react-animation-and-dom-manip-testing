import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  color: red;
`;

const SubTitle = styled(Title)`
  color: ${(props) => props.color};
`;

const Custom: React.FunctionComponent<{ className?: string }> = ({
  className = "",
}) => {
  return <div {...{ className }}>I am custom</div>;
};

const CustomRed = styled(Custom)`
  color: red;
  @media (min-width: 768px) {
    color: yellow;
  }
`;

export const PageD = () => {
  return (
    <div>
      <h1>Page D</h1>
      <section>
        <h2>Styled Component Testing</h2>
        <Title>Test Me</Title>
        <SubTitle color="green">Test Me</SubTitle>
        <Custom />
        <CustomRed />
      </section>
    </div>
  );
};
