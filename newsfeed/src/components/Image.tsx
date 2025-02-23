import * as React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import type { ImageFragment$key } from "./__generated__/ImageFragment.graphql";

type Props = {
  image: ImageFragment$key;
  width?: number;
  height?: number;
  className?: string;
};

const ImageFragment = graphql`
  fragment ImageFragment on Image
  @argumentDefinitions(
    width: { type: "Int", defaultValue: 400 }
    height: { type: "Int", defaultValue: 400 }
  ) {
    url(width: $width, height: $height)
    altText
  }
`;

export default function Image({
  image,
  width,
  height,
  className,
}: Props): React.ReactElement {
  const data = useFragment(ImageFragment, image);
  if (image == null) {
    return null;
  }
  return (
    <img
      key={data.url}
      src={data.url}
      alt={data.altText}
      width={width}
      height={height}
      className={className}
    />
  );
}
