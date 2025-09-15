import React from "react";
import Container from "@mui/material/Container";

function PageContainer({ children }) {
  return (
    <>
      <Container maxWidth="lg">
        <div className="my-8 sm:my-12">{children}</div>
      </Container>
    </>
  );
}

export default PageContainer;
