# SuffleHTMLChildren.
Shuffle HTML childs for a parent after document load and only when URL parameters fits the provided ones.

This solutions borns to provides a way for randomize order for HTML childrens in SaaS sites like [Weebly](https://www.weebly.com/), [Wix](https://wix.com), Ionos 1&1 web editor and similar services.

## How to use.
Load ```ShuffleHTMLChildren.js```.

Do instantiate a object providing URL parameters for triggering shuffle and a query selector for searching a parent with childrens to be shuffled.
```html
<script src="../ShuffleHTMLChildrens.js"></script>
<script>
    shuffleList = new ShuffleHTMLChildrens("ol#shuffle", {hostname: "localhost"});
</script>
```
ShuffleHTMLChildren instance runs as window.onload listener, so you can instantiate de object anyware in your document.

If you need to shuffle multiple HTML parent nodes, instantiate multiple ShuffleHTMLChildren objects.
```html
<script src="../ShuffleHTMLChildrens.js"></script>
<script>
    shuffleList = new ShuffleHTMLChildrens("ul#shuffled", {hostname: "localhost"});
    shuffleList = new ShuffleHTMLChildrens("div#random", {hostname: "localhost", pathname: "/index.html", hash: "#shuffleElements"});
</script>
```

You can provide query selectors for elements to keep in first and last position:
```html
<script src="../ShuffleHTMLChildrens.js"></script>
<script>
    shuffleList = new ShuffleHTMLChildrens("div#random", {hostname: "localhost"}, "div.top", "div.botton");
</script>
```
## Exception handling
ShuffleHTMLChildren throw a custom error ```ShuffleError``` if can't find requested parent node.

## Testing ShuffleHTMLChildren.

Access ./tests/index.html from a develpment HTTP service.

If you have Python 3 in your system:

```bash
python3 -m http.server
```

Accessing http://localhost:8000/tests/ must to show randomized list.

Accessing http://127.0.0.1:8000/tests/ must to show ordered list.

You will to see error handling tests in JavaScript console.

There are multiple instances for testing exceptions in the test:
* Keep first and last elements in position.
* Unexistent node.
* Empty node.
* Node without children attribute.

## How to contribute:
You know. You can open a issue or a pull request at https://github.com/DanielBanobreDopico/ShuffleHTMLChildrens