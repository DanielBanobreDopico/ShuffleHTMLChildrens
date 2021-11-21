# SuffleHTMLChilds
Shuffle HTML childs for a parent after load and only when Location parameters fits the provided.

## Testing ShuffleHTMLChilds

Access index.html from a develpment HTTP service.

If it's Python 3 in your system:

```bash
python3 -m http.server
```

Accessing http://localhost:8000/tests/ must to show randomized list.

Accessing http://127.0.0.1:8000/tests/ must to show ordered list.