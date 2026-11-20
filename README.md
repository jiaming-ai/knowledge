# Aporia · 知识之问

[Read in English](https://jiaming.im/knowledge/#en/1) · [中文阅读](https://jiaming.im/knowledge/#zh/1)

Ten thought experiments about knowing, from the road to Larissa to the starting points of proof. Each question occupies its own leaf. Choose an initial judgement or write in the margin, then turn the page for the argument and a follow-up that tests your reasoning. Swipe horizontally on a phone, use the arrow keys, or use the page controls. The contents and chapter links allow reading in any order.

| Book | Passages | Questions |
| --- | --- | --- |
| Plato, *Meno* | 97a–98b | Right directions and the stability of a true opinion |
| Plato, *Theaetetus* | 151d–152c, 184b–186e, 200d–201d, 206c–210b | Perception, a jury's judgement, and the work an account must do |
| Plato, *Republic* | V 476a–480a, VI 509d–511e | Beauty itself, the divided line, and the assumptions of a proof |
| Aristotle, *Posterior Analytics* | II.8, I.3, II.19 | Causes, regress, and the acquisition of first principles |

Each discussion links to a free English translation. The scenarios and follow-up questions are editorial adaptations. The readings paraphrase the arguments. The four book illustrations are contemporary AI-generated engravings.

## Run locally

Serve this directory with any static web server. With Python 3, run `python3 -m http.server 8000` and open `http://localhost:8000/`. There is no build step or package installation. GitHub Pages serves the root of the main branch.

## Structure

- `content.js` contains both editions, passage references and response-specific follow-ups.
- `reader.js` handles navigation, notebook entries and language selection.
- `style.css` contains the print-inspired layouts and responsive page styles.
- `assets/` contains locally served artwork and subset fonts.

The URL identifies the language and page. A visit without a page link restores the reading position for that browser. A new browser starts in Chinese if its preferred language is Chinese, and otherwise in English. Notes and initial judgements stay in local browser storage. Clearing site data removes them.

## Credits

The code is available under the MIT license. Crimson Text and Noto Serif CJK are distributed under the SIL Open Font License. The licenses accompany the font subsets in `assets/fonts/`.

Plato passages link to David Horan’s translations at the [Platonic Foundation](https://www.platonicfoundation.org/translation/). Aristotle passages link to G. R. G. Mure’s translation at the [Internet Classics Archive](https://classics.mit.edu/Aristotle/posterior.html).
