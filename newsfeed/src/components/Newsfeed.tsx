import * as React from "react";
import Story from "./Story";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { NewsfeedFragment$key } from "./__generated__/NewsfeedFragment.graphql";

const NewsfeedFragment = graphql`
  fragment NewsfeedFragment on Query {
    topStories {
      id
      ...StoryFragment
    }
  }
`;

type Props = {
  newsfeed: NewsfeedFragment$key;
};

export default function Newsfeed({ newsfeed }: Props) {
  const data = useFragment(NewsfeedFragment, newsfeed);
  const stories = data.topStories;

  return (
    <div className="newsfeed">
      {stories.map((story) => (
        <Story story={story} key={story.id} />
      ))}
    </div>
  );
}
