import * as React from "react";
import Newsfeed from "./Newsfeed";
import LoadingSpinner from "./LoadingSpinner";
import Sidebar from "./Sidebar";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { AppQuery as AppQueryType } from "./__generated__/AppQuery.graphql";

const AppQuery = graphql`
  query AppQuery {
    ...NewsfeedFragment
    ...SidebarFragment
  }
`;

export default function App(): React.ReactElement {
  const data = useLazyLoadQuery<AppQueryType>(AppQuery, {});
  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <div className="app">
        <Newsfeed newsfeed={data} />
        <Sidebar sidebar={data} />
      </div>
    </React.Suspense>
  );
}
