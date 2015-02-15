# Cthulhuizer
Simple script to replace FB friend's name and profile picture with whatever you want

Ok, so this is nowhere near ready to be used by people but by popular request here it is.

These are the steps you need to go through to test it out:

<strong>1. Clone down this repo</strong>

<em>Note: step 2 is taken from: http://stackoverflow.com/questions/10611796/is-there-any-way-to-load-a-local-js-file-dynamically</em>
<strong>2. Load the extension by going to chrome://extensions, enabling Developer Mode, and selecting the new folder with Load unpacked extension....</strong>

Now you can access all the files in your extension directory using chrome-extension://[app_id]/[file_name], where "app_id" is the hash listed for the extension on the chrome://extensions page. Note that because the protocols and hostnames differ from where you've doing your actual work (unless you decide to do all your development in the extension folder, which might be acceptable to you), the extension resources are cross-domain and can only be loaded via a script tag.

<strong>3. Visit facebook and open the console</strong>

<strong>4. Type the following in, be sure to replace the app_id...</strong>
<br>
<strong>need to include jquery!</strong>
<br>
var s = document.createElement("script");
<br>
s.src = "chrome-extension://[app_id]/jquery-1.11.2.min.js";
<br>
document.body.appendChild(s);
<br>
<strong>here's where the magic is</strong>
<br>
var s = document.createElement("script");
<br>
s.src = "chrome-extension://[app_id]/fb_script.js";
<br>
document.body.appendChild(s);

<strong>5. Run this function:</strong>
<br>
replaceWith(fbName, newName, imgUrl)
<br>
Where....
<br>
fbName = string of full name of person you want replaced
<br>
newName = string of what you want their name replaced by
<br>
newImage = string of image url you want their profile picture replaced by
<br>
ie. replaceWith('Bob Smith','Lord Cthulhu', 'https://occamsrazormag.files.wordpress.com/2014/08/cthulhu.jpg')

And hopefully it works :D
