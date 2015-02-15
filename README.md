# Cthulhuizer
Simple script to replace FB friend's name and profile picture with whatever you want

Ok, so this is nowhere near ready to be used by people but by popular request here it is.

These are the steps you need to go through to test it out:

1. Clone down this repo

<!--Note: step 2 is taken from: http://stackoverflow.com/questions/10611796/is-there-any-way-to-load-a-local-js-file-dynamically-->
2. Load the extension by going to chrome://extensions, enabling Developer Mode, and selecting the new folder with Load unpacked extension....

Now you can access all the files in your extension directory using chrome-extension://[app_id]/[file_name], where "app_id" is the hash listed for the extension on the chrome://extensions page. Note that because the protocols and hostnames differ from where you've doing your actual work (unless you decide to do all your development in the extension folder, which might be acceptable to you), the extension resources are cross-domain and can only be loaded via <script> tag.

3. Visit facebook and open the console

4. Type the following in, be sure to replace the app_id:
// need to include jquery!
var s = document.createElement("script");
s.src = "chrome-extension://[app_id]/jquery-1.11.2.min.js";
document.body.appendChild(s);
// here's where the magic is
var s = document.createElement("script");
s.src = "chrome-extension://[app_id]/fb_script.js";
document.body.appendChild(s);

5. Run this function:
replaceWith(fbName, newName, imgUrl)
Where....
fbName = string of full name of person you want replaced
newName = string of what you want their name replaced by
newImage = string of image url you want their profile picture replaced by

And hopefully it works :D
