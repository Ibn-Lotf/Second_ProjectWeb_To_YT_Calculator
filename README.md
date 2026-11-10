<h1 align="center">بسم الله الرحمن الرحيم</h1>

---

<div align="center">

# 🧮 Calculator Project | مشروع الآلة الحاسبة ✨

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**🚀 A simple browser-based calculator built with vanilla JavaScript 🚀**

</div>

---

## 📖 About | عن المشروع

🧮 آلة حاسبة بسيطة تعمل على المتصفح، مبنية باستخدام **HTML و CSS و JavaScript** (Vanilla JS) بدون أي مكتبات خارجية 🎯

يحتوي المشروع على **تطبيقين مختلفين** لنفس الفكرة، لهدف تعليمي ومقارنة الأساليب 🔍:

<table>
<tr>
<td>📝 <b>app.js</b></td>
<td>✍️ مكتوب بالكامل بواسطتي. يعتمد على ربط كل زر بحدث منفصل <code>addEventListener</code> مع دوال مساعدة مخصصة <code>TextToOperator</code> و <code>TextToNumber</code> و <code>RunOperator</code>، بدون استخدام <code>eval()</code>. أكثر أماناً 🔒 لكنه أطول وأكثر تكراراً، ويدعم عملية واحدة فقط بين رقمين.</td>
</tr>
<tr>
<td>🤖 <b>app2.js</b></td>
<td>👨‍🏫 كُتب بمساعدة المدرب والذكاء الاصطناعي. يعتمد على حلقة واحدة تربط حدثاً واحداً بجميع الأزرار، مع دوال <code>clearValue</code> و <code>calculatorResult</code> و <code>appendPoint</code> و <code>appendValue</code>. أكثر إيجازاً ⚡ وقابلية للتوسع 📈، ويدعم العمليات المتسلسلة، لكنه يعتمد على <code>eval()</code> في الحساب ⚠️</td>
</tr>
</table>

🎨 تم تجهيز المشروع بكود CSS بسيط بتصميم شبكي (Grid) لواجهة نظيفة ومتجاوبة 💅

---

## 🌍 English Version

🧮 A simple browser-based calculator built with **HTML, CSS, and vanilla JavaScript** — no external libraries 🚀

The project contains **two different implementations** of the same idea, kept side by side for learning and comparison 🔍:

- 📝 **`app.js`** — ✍️ Written entirely by me. Uses explicit per-button event listeners with custom helper functions (`TextToOperator`, `TextToNumber`, `RunOperator`) and does **not** use `eval()`. Safer 🔒, but verbose and limited to a single operation between two numbers.

- 🤖 **`app2.js`** — 👨‍🏫 Written with guidance from my instructor and AI assistance. Uses a single delegated click handler bound in a loop, with helper functions (`clearValue`, `calculatorResult`, `appendPoint`, `appendValue`). More compact ⚡ and maintainable 🧹, supports chained operations 🔗, but relies on `eval()` for evaluation ⚠️

🎨 The UI is styled with simple CSS using CSS Grid for a clean, responsive layout 💅

---

## 🚀 How to Run | كيف يعمل

📂 Just open `index.html` in any modern browser 🌐

🔁 To switch between the two implementations, edit the `<script>` tag inside `index.html`:

```html
<!-- <script src="app.js" defer></script> -->
<script src="app2.js" defer></script>
