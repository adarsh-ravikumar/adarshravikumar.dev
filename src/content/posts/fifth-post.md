---
title: "Rasterization techniques 5"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
pubDate: 2026-10-21
---
*An intentionally varied article for testing typography, spacing, and Markdown rendering.*

A blog renderer should handle more than paragraphs and bold text. It should gracefully display nested headings, lists, tables, images, links, inline code, and code blocks without making the page feel crowded.

This document is a **rendering stress test**, not a serious technical article. Use it to check how your site handles the full range of common Markdown elements.

---

## 1. A paragraph with a little bit of everything

Here is a normal paragraph with **bold emphasis**, *italic emphasis*, ~~strikethrough~~, and a [link to the Astro documentation](https://docs.astro.build/). It also contains `inline code`, a longer identifier such as `TemplateAnalyzer<'a>`, and a path like `src/content/posts/stress-test.md`.

A second paragraph checks vertical rhythm. It is deliberately separate from the first so you can inspect paragraph margins, line height, and the amount of whitespace between blocks. Short sentences should remain readable. Longer sentences should wrap naturally without creating awkward gaps or overflowing the content column on narrow screens.

> Good typography should make the content feel effortless to read.
>
> This blockquote has two paragraphs so you can test spacing inside a quotation, too.

## 2. Headings and hierarchy

### A third-level heading

This section checks the visual distinction between the main section heading and a subsection heading.

#### A fourth-level heading

Some articles need deeper hierarchy. The difference should be visible without making smaller headings louder than the article title.

##### A fifth-level heading

This level is less common, but it is useful to test whether the hierarchy still feels consistent.

###### A sixth-level heading

The smallest heading should remain distinguishable from ordinary body text.

## 3. Lists

### Unordered list

- Parsers turn source text into structured data.
- Compilers transform that data into another representation.
- Runtimes execute the generated output.
  - Nested item: the parser should preserve nesting.
  - Another nested item with **emphasis**.
    - One more level deep.
- The final result should still be readable.

### Ordered list

1. Read the source.
2. Parse the syntax.
3. Build an intermediate representation.
4. Generate output.
5. Test the result.

### A list with longer items

- A useful test item contains enough text to wrap onto another line on a narrow viewport, making it easier to inspect how continuation lines align with the list marker.
- Another long item checks whether links such as [the Markdown Guide](https://www.markdownguide.org/) wrap naturally when they appear inside a list.

### Task list

- [x] Create a Markdown file.
- [x] Include varied content.
- [ ] Check the layout at a narrow viewport.
- [ ] Verify keyboard focus and link contrast.

## 4. Tables

### A compact table

| Component | Responsibility | Example |
| --- | --- | --- |
| Lexer | Recognises tokens | `Identifier` |
| Parser | Builds syntax structure | AST |
| Analyzer | Checks meaning | Symbol table |
| Code generator | Emits output | JavaScript |

### A wider table

| Feature | What to inspect | Expected behaviour | Priority |
| --- | --- | --- | --- |
| Long text | Wrapping in cells | No page-wide overflow | High |
| Inline code | Font and baseline | Distinct but readable | Medium |
| Numeric values | Alignment and spacing | Consistent columns | Low |
| Links | Colour and underline | Clear affordance | Medium |
| Empty cells | Borders and padding | Table remains aligned | Low |

If the table is wider than the article column, decide whether it should wrap, scroll horizontally, or use another responsive treatment. The important thing is that it should not silently widen the entire page.

## 5. Images

### An image with descriptive alt text

![A mountain landscape beneath a wide, cloudy sky](https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80)

*Figure 1: A landscape image with a caption below it.*

The image above is externally hosted, so it requires a network connection. Use it to check image scaling, rounded corners if your design uses them, and how captions align with the body text.

### A second image, with a different aspect ratio

![A close-up view of a green fern leaf](https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80)

*Figure 2: A second image to test vertical spacing between images and captions.*

Images should scale down to fit the article width while preserving their aspect ratio. Check that alt text is available to assistive technology even when an image cannot load.

## 6. Inline code and code blocks

Inline code can represent a variable such as `post.data.title`, a command such as `npm run dev`, or a configuration key such as `content.config.ts`.

### JavaScript

```js
const formatDate = (date) =>
  date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).replace(/(\d{1,2}) (\w+) (\d{4})/, "$1 $2, $3");

console.log(formatDate(new Date("2026-10-16T12:00:00Z")));
// Example output: 16 October, 2026
```

### TypeScript

```ts
type Post = {
  id: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
  };
};

function describePost(post: Post): string {
  return `${post.data.title} — ${post.data.description}`;
}
```

### Rust

```rust
#[derive(Debug)]
struct Point {
    x: f32,
    y: f32,
}

fn distance_from_origin(point: &Point) -> f32 {
    (point.x * point.x + point.y * point.y).sqrt()
}

fn main() {
    let point = Point { x: 3.0, y: 4.0 };
    println!("{point:?}: distance = {}", distance_from_origin(&point));
}
```

### Shell commands

```bash
npm install
npm run dev
npm run build
```

Code blocks should be visually distinct from prose, but they should not dominate the page. Long lines are a useful test: they should scroll horizontally within the code block or wrap according to your chosen design, rather than forcing the entire article wider.

```text
A deliberately long line: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

## 7. Other useful Markdown elements

### A horizontal rule

The rules above and below this section should have consistent weight, colour, and vertical spacing.

---

### Definition-style content

**Lexer:** A component that converts source characters into tokens.

**Parser:** A component that organises tokens according to a grammar.

**Intermediate representation (IR):** A structured form used between stages of a compiler.

### Escaped characters

Markdown sometimes needs literal characters such as `*`, `_`, `#`, and brackets. Inline code is a convenient way to show them without triggering Markdown formatting.

### A link on its own line

[Read the Astro content collections guide](https://docs.astro.build/en/guides/content-collections/)

## 8. A final long paragraph

A well-designed article page needs to handle the ordinary case and the awkward case equally well. Most readers will encounter a sequence of paragraphs and headings, but technical writing often includes code, tables, diagrams, links, and lists in quick succession. On desktop, these elements should sit comfortably inside the reading column. On mobile, they should adapt to the smaller viewport without clipped text, tiny controls, or unexpected horizontal scrolling. Pay special attention to table overflow, long code lines, image dimensions, heading margins, and the spacing around blockquotes. A rendering test is useful precisely because it exposes small inconsistencies that are easy to miss when previewing a page with only a title and two paragraphs.
