# Aporia · 知识之问

[Read in English](https://jiaming.im/knowledge/#en/1) · [中文阅读](https://jiaming.im/knowledge/#zh/1)

Ten questions lead into ten close readings, from the road to Larissa to the starting points of proof. Each question has a page of its own. Turn the page to follow a passage through its examples, inferences and unresolved difficulty. A closing reflection returns to the road with a third guide.

Use **Back (←)**, **Next (→)** and **Write (W)** in the top bar. Swipe horizontally to turn pages on a phone and scroll vertically through longer readings. Contents includes the chapter index, notebook and language switch.

| Book | Passages | Questions |
| --- | --- | --- |
| Plato, *Meno* | 82b–85d, 96d–98b | Right directions and the stability of a true opinion |
| Plato, *Theaetetus* | 151d–152c, 184b–186e, 200d–201d, 206c–210d | Perception, a jury's judgement, and the work an account must do |
| Plato, *Republic* | V 475d–480a, VI 509d–511e | Beauty itself, the divided line, and the assumptions of a proof |
| Aristotle, *Posterior Analytics* | II.1–2, II.8, I.2–3, II.19 | Causes, regress, and the acquisition of first principles |

Each discussion links to a free English translation. The introductory cases are editorial adaptations. Each reading reconstructs an argument and locates it in the work. The four book illustrations are contemporary AI-generated engravings.

## Run locally

Serve this directory with any static web server. With Python 3, run `python3 -m http.server 8000` and open `http://localhost:8000/`. There is no build step or package installation. GitHub Pages serves the root of the main branch.

## Structure

- `content.js` contains the questions, both editions of the readings and passage references.
- `reader.js` handles navigation, notebook entries and language selection.
- `style.css` contains the print-inspired layouts and responsive page styles.
- `assets/` contains locally served artwork and subset fonts.

The URL identifies the language and page. A visit without a page link restores the reading position for that browser. A new browser starts in Chinese if its preferred language is Chinese, and otherwise in English. Notes stay in local browser storage. Earlier notebook entries retain their original choices. Clearing site data removes them.

## Credits

The code is available under the MIT license. Crimson Text and Noto Serif CJK are distributed under the SIL Open Font License. The licenses accompany the font subsets in `assets/fonts/`.

Plato passages link to David Horan’s translations at the [Platonic Foundation](https://www.platonicfoundation.org/translation/). Aristotle passages link to G. R. G. Mure’s translation at the [Internet Classics Archive](https://classics.mit.edu/Aristotle/posterior.html).
