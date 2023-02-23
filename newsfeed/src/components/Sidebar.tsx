import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment, useLazyLoadQuery } from "react-relay";
import LoadingSpinner from "./LoadingSpinner";
import type { SidebarQuery as SidebarQueryType } from "./__generated__/SidebarQuery.graphql";
import ViewerProfile from "./ViewerProfile";
import ContactsList from "./ContactsList";
import { SidebarFragment$key } from "./__generated__/SidebarFragment.graphql";

const SidebarFragment = graphql`
  fragment SidebarFragment on Query {
    viewer {
      ...ViewerProfileFragment
      ...ContactsListFragment
    }
  }
`;

type Props = {
  sidebar: SidebarFragment$key;
};

export default function Sidebar({ sidebar }: Props) {
  return (
    <div className="sidebar">
      <React.Suspense fallback={<LoadingSpinner />}>
        <SidebarContents sidebarContent={sidebar} />
      </React.Suspense>
    </div>
  );
}

type SidebarContents = {
  sidebarContent: SidebarFragment$key;
};

function SidebarContents({ sidebarContent }: SidebarContents) {
  const data = useFragment(SidebarFragment, sidebarContent);
  return (
    <>
      <ViewerProfile viewer={data.viewer} />
      <ContactsList viewer={data.viewer} />
    </>
  );
}
