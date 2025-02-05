/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  $addNodeStyle,
  $forEachSelectedTextNode,
  $isAtNodeEnd,
  $patchStyleText,
  $sliceSelectedTextNodeContent,
  $trimTextContentFromAnchor,
} from './lexical-node';
import {
  $getSelectionStyleValueForProperty,
  $isParentElementRTL,
  $moveCaretSelection,
  $moveCharacter,
  $setBlocksType,
  $shouldOverrideDefaultCharacterSelection,
  $wrapNodes,
} from './range-selection';
import {
  createDOMRange,
  createRectsFromDOMRange,
  getCSSFromStyleObject,
  getStyleObjectFromCSS,
} from './utils';

export {
  /** @deprecated moved to the lexical package */ $cloneWithProperties,
  /** @deprecated moved to the lexical package */ $selectAll,
} from 'lexical';

export {
  $addNodeStyle,
  $forEachSelectedTextNode,
  $isAtNodeEnd,
  $patchStyleText,
  $sliceSelectedTextNodeContent,
  $trimTextContentFromAnchor,
};
/** @deprecated renamed to {@link $trimTextContentFromAnchor} by @lexical/eslint-plugin rules-of-lexical */
export const trimTextContentFromAnchor = $trimTextContentFromAnchor;

export {
  $getSelectionStyleValueForProperty,
  $isParentElementRTL,
  $moveCaretSelection,
  $moveCharacter,
  $setBlocksType,
  $shouldOverrideDefaultCharacterSelection,
  $wrapNodes,
};

export {
  createDOMRange,
  createRectsFromDOMRange,
  getCSSFromStyleObject,
  getStyleObjectFromCSS,
};
