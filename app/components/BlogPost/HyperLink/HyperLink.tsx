import { Node } from "@contentful/rich-text-types";
import * as React from "react";

interface Props {
  node: Node;
}

/**
 * When I publish a blog post and I link to another blog post, this is the component
 * that is rendered!
 */
const HyperLink: React.FC<Props> = (props) => {
  if (props.node.data.target === undefined) {
    console.log("PROBLEM IS IN HYPERLINK");
    return null;
  }
  const otherPostSlug: string = props.node.data.target.fields.blogPostSlug;

  return (
    <a
      className="text-post-hyperlink hover:text-post-hyperlinkHover"
      href={`/blog/${otherPostSlug}`}
    >
      {props.children}
    </a>
  );
};

export default HyperLink;
