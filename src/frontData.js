export const EXSEMPOL = {
  HTML: {
    title: "HTML (HyperText Markup Language)",
    description:
      "HTML - veb-sahifaning asosiy tarkibini aniqlaydi. U sahifadagi matn, rasmlar, havolalar va boshqa elementlarni belgilash uchun ishlatiladi.",
    code: `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>My Web Page</title>
        </head>
        <body>
            <h1>Welcome to My Web Page</h1>
            <p>This is a paragraph of text on my web page.</p>
            <a href="https://www.example.com">Visit Example.com</a>
            <img src="image.jpg" alt="Example Image">
        </body>
        </html>
    `,
  },
  CSS: {
    title: "CSS (Cascading Style Sheets)",
    description:
      "CSS - veb-sahifaning ko'rinishini boshqaradi. U matnlarning rangi, shriftlari, tartibi va boshqa ko'rinish xususiyatlarini aniqlashda ishlatiladi.",
    code: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>My Styled Web Page</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 20px;
            }
            h1 {
                color: #333;
            }
            p {
                color: #666;
            }
            a {
                color: #0088cc;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to My Styled Web Page</h1>
        <p>This is a paragraph of text on my web page.</p>
        <a href="https://www.example.com">Visit Example.com</a>
    </body>
    </html>
    `,
  },
  JS: {
    title: "JavaScript (JS)",
    description:
      "JavaScript - veb-sahifaga dinamik xususiyatlar qo'shadi. U sahifadagi elementlarni interaktiv qilish, ma'lumotlarni olish va qayta ishlash uchun ishlatiladi.",
    code: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Interactive Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        #changeText {
            color: red;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Interactive Web Page</h1>
    <p id="text">This is a paragraph of text on my web page.</p>
    <button onclick="changeText()">Change Text</button>

    <script>
        function changeText() {
            document.getElementById('text').innerText = 'The text has been changed!';
        }
    </script>
</body>
</html>
    `,
  },
  JSF: {
    title: "JavaScript Function",
    description:
      "JavaScript - veb-sahifaga dinamik xususiyatlar qo'shadi. U sahifadagi elementlarni interaktiv qilish, ma'lumotlarni olish va qayta ishlash uchun ishlatiladi.",
    code: `


    <script>
        function seyHallo() {
           console.log("Hello World")
        }
    </script>

    `,
  },
  TS: {
    title: "Typescript ko'di",
    description:
      "TypeScript kod ichida uzatiladigan ma'lumotlar turlarini belgilash imkonini beradi va turlar mos kelmasa, xatolar haqida xabar berish imkoniyatiga ega.",
    code: `

    let userName: string = "John";
        userName = 123; // TypeScript выбросит исключение, поскольку "123" не является строкой.

    interface User {
        name: string;
        age: number;
       }
       let user: User = {name: "John", age: 25};

    `,
  },
  Componenta: {
    title: "React Componenta",
    description:
      "Komponentlar mustaqil va qayta ishlatiladigan kod bitlaridir. Ular JavaScript funktsiyalari bilan bir xil maqsadga xizmat qiladi, lekin izolyatsiyada ishlaydi va JSXni qaytaradi.",
    code: `


    function Car() {
        return <h2>I am a Car!</h2>;
      }
      
      function Garage() {
        return (
          <>
            <h1>Who lives in my Garage?</h1>
            <Car />
          </>
        );
      }
      
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Garage />);

    `,
  },
};
