document.addEventListener('DOMContentLoaded',function() {
	const box = document.getElementById('box');
	const li = box.querySelectorAll('li');
	const jokes =
[
`<pre>
A: I have the perfect son.
B: Does he smoke <i class='em em-smoking'></i>?
A: No, he doesn't.
B: Does he drink whiskey <i class='em em-sweat_drops'></i>?
A: No, he doesn't.
B: Does he ever come home late?
A: No, he doesn't.
B: I guess you really do have the perfect son. How old is he?
A: He will be six months <i class='em em-baby'></i> old next Wednesday.
</pre>`,
`
<pre>
Two Elephants meet a totally naked guy.
After a while one elephant says to the other:
.
.
.
.
.
.
.
.
.
“I really don’t get how he can feed himself with that thing! <i class='em em-joy'></i>”
</pre>
`,
`
<pre>
In Which Situation, Do Men Start Sweating
In 10 Mins & Women Want To Go ON & ON & ON? <i class='em em-grimacing'></i>
.
.
Think.. <i class='em em-stuck_out_tongue_closed_eyes'></i>
.
.
Think.. <i class='em em-stuck_out_tongue_winking_eye'></i>
.
.
.
.
.
.
.
.
Ans is SHOPPING! <i class='em em-smiley'></i>
God Bless Your Naughty Mind! <i class='em em-joy'></i>
</pre>
`,
`
<pre>
There is nothing greater than Parents in this world. <i class='em em-blush'></i>
.
.
.
.
.
.
.
.
So go get married fast and become Parents.
Think different <i class='em em-stuck_out_tongue_winking_eye'></i>
Do different <i class='em em-wink'></i>
</pre>
`
];
	const toggleActiveTabClass = a => {
		li.forEach(l => l.querySelector('a').classList.remove('activeTab'));
		a.querySelector('a').classList.add('activeTab');
		document.getElementById('joke').innerHTML = jokes[a.id];
	};

	toggleActiveTabClass(document.querySelector('li'));

	li.forEach(l => {
		l.addEventListener('click', () => {
			toggleActiveTabClass(l);
			console.log(l);
		});
	});

});
