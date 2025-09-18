# HTML
## <span style="color:blue">HTML form? </span> 
- <span style="color:red">HTML stands for HyperText Markup Language.</span>  
- <span style="color:red">HTML is used to create web pages and web applications.</span>  
- <span style="color:red">We can create a static website by HTML only.</span>  
- <span style="color:red">HTML is a Markup language rather than a programming language.</span>  
 ____  

## <span style="color:blue">Features ? </span> 
- <span style="color:red">It is a very easy and simple language.</span>  
- <span style="color:red">It is very easy to make an effective presentation.</span>  
- <span style="color:red">It is a markup language, so it provides a flexible way to design web pages along with the text.</span>  
- <span style="color:red">It facilitates programmers to add a link on the web pages (by html anchor tag).</span>  
- <span style="color:red">It is platform-independent.</span>  
- <span style="color:red">It facilitates the programmer to add Graphics, Videos, and Sound to the web pages.</span>  
- <span style="color:red">HTML is a case-insensitive language.</span>  

___

## <span style="color:blue">Heading tag</span> 
```html
<h1>This is a Heading</h1>


<h1>This is H1</h1>
<h2>This is H2</h2>
<h3>This is H3</h3>
<h4>This is H4</h4>
<h5>This is H5</h5>
<h6>This is H6</h6>
``` 


## <span style="color:green">output ---> </span> 
# This is H1
## This is H2
### This is H3
#### This is H4
##### This is H5
###### This is H6

## <span style="color:blue">Paragraph tag</span> 
```html
<p>This is a paragraph.</p>
<p>HTML paragraphs are defined using the &lt;p&gt; tag.</p>
<p>Browsers automatically add some space before and after a paragraph.</p>
<p>This is a paragraph (block element).</p>
<p>This is another paragraph (starts on a new line).</p>
```
## <span style="color:green">output ---> </span> 

This is a paragraph.

HTML paragraphs are defined using the <p> tag.

Browsers add space before and after a paragraph.

##  <span style="color:blue">1. What is Anchor Tag?</span>

<span style="color:red">The anchor tag is used to create hyperlinks in HTML.</span>

<span style="color:red">It is an inline element.</span>

<span style="color:red">The href attribute specifies the link’s destination (URL).</span>

<span style="color:red">We can use anchor tags to link web pages, email, phone numbers, or even sections within the same page.</span>
```html
<a href="website">website</a>

<a href="URL">Link Text</a>

<a href="https://www.google.com">Visit Google</a>

<a href="pranayshinde872@gmail.com">Send Email</a>

<a href="tel:+911234567890">Call Us</a>

<a href="https://www.github.com" target="_blank">Open GitHub in New Tab</a>

👉link 
1. Unvisited link → Blue
2. Visited link → Purple
 
👉href=  Hypertext REFerence.
1. It tells the browser where the link should go.

👉 If you click this, link  will open in a new tab, while your current page stays open.
```

##  <span style="color:blue">🖼️ Image Tag</span>

🔹 Definition:-
- <span style="color:red">The &lt;img&gt; tag is used to embed an image in an HTML page.</span>  
- <span style="color:red">It is an inline tag (does not start on a new line).</span>  
- <span style="color:red">It is an empty tag (does not have a closing tag).</span>  

```html 
<img src="flower.jpg" alt="Flower">
<img src="https://example.com/pic.jpg" alt="Online Image">

```
   👉The full form of src is Source  

   👉It specifies the path or URL of the image file in the &imgtag.

   👉Without src, the browser cannot display the image.

  
 ## <span style="color:blue"> 📝 Table Tag Notes/span>

   - <span style="color:red">The &lt;table&gt; tag is used to create a table in HTML.</span>  
- <span style="color:red">It is a block-level tag.</span>  
- <span style="color:red">A table is made up of rows and columns.</span>  
- <span style="color:red">Inside &lt;table&gt; we use &lt;tr&gt; for rows, &lt;td&gt; for data cells, and &lt;th&gt; for table headings.</span>  

``` html
<table border="1">
    <caption>student</caption>
    <thead>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Vihaan</td>
    <td>5</td>
  </tr>
  </tbody>
  <tfoot>
  <tr>
    <td>Aarav</td>
    <td>6</td>
  </tr>
  </tfoot>
</table>


<th colspan="2">Student Info</th> --> merge column  (horizontal)

<th rowspan="2">Name</th> -->  merge rows (vertical)
```
## <span style="color:pink">🔹 Explanation of Tags
</span>

  &lt;table&gt;→ Defines a table.

 &lt;tr&gt;→ Table Row.

 &lt;th&gt; Table Header (bold + center by default).

 &lt;td&gt;→ Table Data (normal cell).

  &lt;caption&gt;→ to write caption on the table top
  ..

##    <span style="color:blue">list</span>

- <span style="color:red">Lists are used to display items in an organized way.</span>  
- <span style="color:red">There are 3 types of lists in HTML:</span>  
  - <span style="color:red">Ordered List (&lt;ol&gt;)</span>  
  - <span style="color:red">Unordered List (&lt;ul&gt;)</span>  
  - <span style="color:red">Description List (&lt;dl&gt;)</span>  

## <span style="color:pink">🔹Ordered List (ol) Attributes</span>
 ###  <span style="color:red"> type → Changes numbering style</span> 


✅ Values of type:

1 → Numbers (default)

A → Uppercase letters

a → Lowercase letters

I → Uppercase Roman

i → Lowercase Roman


``` html
<ol type="1">
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ol>
```

👉 Output:

1. Apple

2. Banana

3. Mango 
   
   
 ### <span style="color:red">2. start → Defines starting number/letter</span> 
   ```html 
   <ol type="1" start="5">
  <li>Orange</li>
  <li>Mango</li>
</ol>
```
👉 Output:

5. Orange
6. Mango
  
  ## <span style="color:pink">🔹 Unordered List (ul) Attributes</span>

 ### <span style="color:red">1. type → Changes bullet style</span> 

✅ Values of type:

disc (default) → ●

circle → ○

square → ■

``` html
<ul type="square">
  <li>Red</li>
  <li>Green</li>
</ul>
```
👉 Output:

■ Red

■ Green

## <span style="color:pink">🔹Description List (dl)</span>
- <span style="color:red">The &lt;dl&gt; tag is used to create a description/definition list.</span>  
- <span style="color:red">It is used for terms and their descriptions (like a dictionary or glossary).</span>  
- <span style="color:red">Inside &lt;dl&gt;, we use &lt;dt&gt; (Description Term) and &lt;dd&gt; (Description Definition).</span>  
- <span style="color:red">&lt;dl&gt; does not have any special attributes.</span>  

``` html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>

  <dt>JS</dt>
  <dd>JavaScript</dd>
</dl>
```
👉 Output

HTML – HyperText Markup Language

CSS – Cascading Style Sheets

JS – JavaScript

# <span style="color:blue">Form Tag</span>

- <span style="color:red">The tag is used to collect user input.</span>

- <span style="color:red">It is a block-level tag.</span>

- <span style="color:red">Forms can contain input fields, checkboxes, radio buttons, buttons, and more.</span>

- <span style="color:red">User data from a form is sent to a server using the action and method attributes.</span>

## <span style="color:blue">Basic Form Example</span
``` html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="username"><br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="useremail"><br><br>

  <label for="password">Password:</label>
  <input type="password" id="password" name="userpassword"><br><br>

  <input type="submit" value="Submit">
</form>
```
## <span style="color:blue">Common Input Types</span>
``` html 
<input type="text">       → Single line text  
<input type="password">   → Password field  
<input type="email">      → Email input  
<input type="number">     → Numeric input  
<input type="radio">      → Radio button (choose one)  
<input type="checkbox">   → Checkbox (multiple choice)  
<input type="date">       → Date picker  
<input type="file">       → File upload  
<input type="submit">     → Submit button  
<input type="reset">      → Reset button  
``` 
## <span style="color:blue">action</span>
The action attribute specifies the URL where the form data should be sent after submission.

``` html
<form action="/submit.php" method="POST">
</form>
```
## <span style="color:blue">method</span>

The method attribute defines how data is sent. The two most common methods are GET and POST.

``` html
<form action="/submit.php" method="POST">
</form>
```
## <span style="color:blue">name</span>

The name attribute specifies the name for the form element, making it easier to reference in scripts or the server-side code.

``` html
<input type="text" name="username">
```

## <span style="color:blue">placeholder</span>
This attribute provides a hint to the user as to what can be entered in the field.

``` html
<input type="text" placeholder="Enter your username">
``` 
## <span style="color:blue">required
</span>
The required attribute makes a field mandatory to fill out.

``` html
<input type="text" required>
```
## <span style="color:blue">autofocus
<span>
The autofocus attribute automatically focuses the cursor on the particular input when the page loads.

``` html
<input type="text" autofocus>
```

# <span style="color:blue">HTML Elements: Inline vs Block</span>

# <span style="color:pink">🔹 Block Elements</span>

- <span style="color:red">Always start on a new line.</span>

- <span style="color:red">Take up the full width available (stretch across the page).</span>

- <span style="color:red">Can contain other block and inline elements.</span>

- <span style="color:red">Examples: (div), (p), (h1 to h6), (table), (ul), (ol).</span>

``` html
<p>This is a paragraph (block element).</p>
<div>This is a div (block element).</div>
<h1>This is a heading (block element).</h1>
```
👉 Output:

Each element starts on a new line and takes the full width

## <span style="color:pink">🔹 Inline Elements</span>

- <span style="color:red">Do not start on a new line.</span>

- <span style="color:red">Take only as much width as necessary.</span>

- <span style="color:red">Usually used for formatting small parts of text.</span>

- <span style="color:red">Examples: (span), (a), (img), (strong), (input).</span>
  
  👉 Output:

- Inline elements stay in the same line with text.



## <span style="color:blue">🎵 Audio Tag</span>

- <span style="color:red">The (audio)  tag is used to embed sound/audio content in a web page.</span>

- <span style="color:red">It is a media tag introduced in HTML5.</span>

- <span style="color:red">The controls attribute adds play, pause, and volume options.</span>

- <span style="color:red">The autoplay attribute makes the audio play automatically (not recommended in all browsers).</span>

- <span style="color:red">The loop attribute makes the audio repeat again and again.</span>

``` html 
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```
👉 Attributes:

controls → shows play/pause/volume buttons

autoplay → plays automatically

loop → repeats audio

muted → starts with sound off

##  <span style="color:blue">🎥 Video Tag</span>

- <span style="color:red">The (video) tag is used to embed video content in a web page.</span>

- <span style="color:red">It is also a media tag introduced in HTML5.</span>

- <span style="color:red">The controls attribute adds play, pause, and volume options.</span>

- <span style="color:red">The width and height attributes define the video size.</span>

-  <span style="color:red">The poster attribute sets a preview image before the video starts.</span>
``` html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

👉 Attributes:

controls → shows play/pause/volume buttons

autoplay → plays automatically

loop → repeats video

muted → starts with sound off

poster → shows an image before the video starts

## <span style="color:blue">🔹 HTML Special Entities</span>

- <span style="color:red">Special characters in HTML cannot be written directly (like <, >, &, etc.).</span>

- <span style="color:red">We use HTML entities to display such symbols.</span>

- <span style="color:red">An HTML entity begins with & and ends with ;.</span>

- <span style="color:red">Entities are used for reserved characters, currency symbols, math symbols, and more.</span>

  ### <span style="color:pink">✅ Commonly Used Entities</span>


|Symbol | Entity Code  |Description                      |
| ------ | ----------- | -------------------------------- |
| <      | `&lt;`      | Less than `<`                    |
| >      | `&gt;`      | Greater than `>`                 |
| &      | `&amp;`     | Ampersand `&`                    |
| "      | `&quot;`    | Double Quote `"`                 |
| '      | `&apos;`    | Single Quote `'`                 |
| ©      | `&copy;`    | Copyright ©                      |
| ®      | `&reg;`     | Registered ®                     |
|        | `&nbsp;`    | Non-breaking space (extra space) |
| ¢      | `&cent;`    | Cent ¢                           |
| £      | `&pound;`   | Pound £                          |
| ¥      | `&yen;`     | Yen ¥                            |
| €      | `&euro;`    | Euro €                           |
| ♥      | `&hearts;`  | Heart ♥                          |




 
 
 



















 
