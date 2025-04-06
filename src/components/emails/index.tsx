import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const BrandigoWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>
      Thanks for Joining the Brandigo.io Waitlist, {userFirstname}! 🎉
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://zxmwbcje1z.ufs.sh/f/F4tas9UBtYsfGq8TxxgjwBo37FLgxhuyRY2O19vrQHdf0T8s`}
          width="261"
          height="45"
          alt="Brandigo.io Logo"
          style={logo}
        />
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for joining the waitlist for Brandigo.io! I&apos;m S Deepak
          Kumar, the developer behind this project. We&apos;re thrilled to have
          you with us as we prepare to launch our tool to design stunning social
          media cover photos in minutes.
        </Text>
        <Text style={paragraph}>
          With Brandigo.io, you&apos;ll be able to create the perfect cover
          photo for Facebook, Twitter, YouTube, LinkedIn, and Instagram. Explore
          a variety of professionally designed templates and design effortlessly
          with our intuitive tool. I&apos;ll keep you updated on our progress
          and let you know as soon as it&apos;s ready for you to start creating!
          If you have any questions or feedback, feel free to reply directly to{" "}
          <a href="mailto:sdeepak@brandigo.io" style={link}>
            this email
          </a>
          — I’d love to hear from you!
        </Text>
        <Text style={paragraph}>
          You can also follow me on X/Twitter for updates:{" "}
          <a href="https://x.com/sdeepakkumar_" style={link}>
            @sdeepakkumar_
          </a>
        </Text>
        <Text style={signOff}>
          Best regards,
          <br />S Deepak Kumar
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the Brandigo.io
          waitlist. If you believe this is a mistake, feel free to ignore this
          email.
        </Text>
      </Container>
    </Body>
  </Html>
);

BrandigoWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default BrandigoWaitlistEmail;

const main = {
  backgroundColor: "#000000", // Black background
  backgroundImage: `
    linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
  `,
  backgroundSize: "80px 80px", // 80x80 grid size
  backgroundPosition: "center top", // Positioned at center top
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#1a1a1a",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#FF7293",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
