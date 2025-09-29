import { Skeleton } from "antd";
import React from "react";
import PageContainer from "../layout/PageContainer";

export const PageSkeleton = () => {
  return (
    <>
      <PageContainer>
        <div className="!rounded-2xl">
          <Skeleton.Node
            active
            className="bg-gray-800 "
            style={{ width: 400, height: 300 }}
          />
        </div>
      </PageContainer>
    </>
  );
};
