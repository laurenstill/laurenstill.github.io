---
    layout: post
    title: How to use GitHub forks for commenting on Jekyll blogs
    excerpt: How to use GitHub forks for commenting on Jekyll blogs.
---

Part of the reason I started this blog with Jekyll was to improve my proficency with Ruby, Git, and Vim.  <a href="https://github.com/dfm">Dan Foreman-Mackey</a>, who's original Jekyll template I forked when starting this, added a neat way for readers to comment using their Github account, and forking the source.  I like it a lot, so I'm keeping it.

It has the added benifit of keeping out the trolls. 

If you click on the "post a comment" link, below, it will -- after checking
with you first -- fork the source for this page using your GitHub
account and then let you edit it. After you add your comment, you can simply
submit it as a pull request.

## How to add a comment

At the very end of the document, you'll find a line that looks like:

{% highlight text %}
* github-username - January 1, 2014 - Your comment...
{% endhighlight %}

All you need to do is copy this line, add your GitHub username and your
comment (written in Markdown syntax) then submit a pull request. You're also
welcome to make changes to the post if you have any suggestions for tweaks.
It's not elegant but it _is_ a novelty! Let me know what you think in the
comments section below.

## Comments

* github-laurenstill - Dec 13, 2013 - Look it's a comment!

