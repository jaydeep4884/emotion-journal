import React from "react";
import Container from "@mui/material/Container";

function PageContainer({ children }) {
  return (
    <>
      <Container maxWidth="lg">
        <div className="my-[50px]">{children}</div>
      </Container>
    </>
  );
}

export default PageContainer;
