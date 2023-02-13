/**
 * @generated SignedSource<<75bb78ba3ba57be29ec061c7bfd4fe67>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PosterDetailsHovercardContentsQuery$variables = {
  posterID: string;
};
export type PosterDetailsHovercardContentsQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"PosterDetailsHovercardContentsBodyFragment">;
  } | null;
};
export type PosterDetailsHovercardContentsQuery = {
  response: PosterDetailsHovercardContentsQuery$data;
  variables: PosterDetailsHovercardContentsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "posterID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "posterID"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PosterDetailsHovercardContentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "PosterDetailsHovercardContentsBodyFragment"
              }
            ],
            "type": "Actor",
            "abstractKey": "__isActor"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PosterDetailsHovercardContentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "joined",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "height",
                        "value": 400
                      },
                      {
                        "kind": "Literal",
                        "name": "width",
                        "value": 400
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": "url(height:400,width:400)"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "altText",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Actor",
            "abstractKey": "__isActor"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1c8ae8ebb0688875d0f29b070b9a177b",
    "id": null,
    "metadata": {},
    "name": "PosterDetailsHovercardContentsQuery",
    "operationKind": "query",
    "text": "query PosterDetailsHovercardContentsQuery(\n  $posterID: ID!\n) {\n  node(id: $posterID) {\n    __typename\n    ... on Actor {\n      __isActor: __typename\n      ...PosterDetailsHovercardContentsBodyFragment\n    }\n    id\n  }\n}\n\nfragment ImageFragment on Image {\n  url(width: 400, height: 400)\n  altText\n}\n\nfragment PosterDetailsHovercardContentsBodyFragment on Actor {\n  __isActor: __typename\n  id\n  name\n  joined\n  profilePicture {\n    ...ImageFragment\n  }\n}\n"
  }
};
})();

(node as any).hash = "da5053ee7f05480a44e9aca3d552aa6d";

export default node;
