# <span style="color:blue">🎨 CSS Types</span>

##<span style="color:pink">🔹 1. Inline CSS</span>

- <span style="color:red">CSS written directly inside an HTML tag using the style attribute.</span>

- <span style="color:red">Affects only that specific element.</span>

- <span style="color:red">Used for quick styling but not recommended for large projects.</span>
  
  ```css
  <p style="color:red; font-size:20px;">This is inline CSS</p>
  ```
  👉 Output:

- This is inline CSS (red text, font size 20px)

## <span style="color:pink">🔹 2. Internal CSS</span>

- <span style="color:red">CSS written inside the (tyle) tag in the (head) section of HTML.</span>

- <span style="color:red">Affects the whole page but only that single HTML file.</span>

- <span style="color:red">Useful when one page needs unique styling.</span>
``` html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <p>This is internal CSS</p>
</body>
</html>
```
👉 Output:
All (p)text will be blue with font size 18px.

## <span style="color:pink">🔹 3. External CSS</span>

- <span style="color:red">CSS written in a separate .css file.</span>

- <span style="color:red">Linked to HTML using (link) in the <head> section.</span>

- <span style="color:red">Best method → keeps design separate from content.</span>

- <span style="color:red">Can be reused in multiple HTML pages.</span>

👉 style.css
```html
p {
  color: green;
  font-size: 22px;
}
```
👉 index.html
``` html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p>This is external CSS</p>
</body>
</html>
``` 

👉 Output:

All (p) text will be green with font size 22px.


