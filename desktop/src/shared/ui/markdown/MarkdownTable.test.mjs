import assert from "node:assert/strict";
import test from "node:test";

import { classesForMarkdownTable } from "./MarkdownTable.tsx";

test("classesForMarkdownTable keeps horizontal scroll layout by default", () => {
  const cls = classesForMarkdownTable(false);
  assert.match(cls, /\bw-max\b/);
  assert.match(cls, /\bmin-w-full\b/);
  assert.doesNotMatch(cls, /\btable-fixed\b/);
});

test("classesForMarkdownTable wraps within narrow containers when requested", () => {
  const cls = classesForMarkdownTable(true);
  assert.match(cls, /\bw-full\b/);
  assert.match(cls, /\btable-fixed\b/);
  assert.doesNotMatch(cls, /\bw-max\b/);
});
