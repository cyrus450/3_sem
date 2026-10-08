const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));


// Home page
app.get("/", (req, res) => {

    res.send(`
        <html>
        <head>
            <title>Student Information</title>
        </head>

        <body>

            <h2>Student Information</h2>

            <form action="/student" method="GET">

                <label>User Name:</label>
                <input type="text" name="name" required>
                <br><br>

                <label>Branch:</label>
                <input type="text" name="branch" required>
                <br><br>

                <label>Semester:</label>
                <input type="text" name="semester" required>
                <br><br>

                <button type="submit">Submit using GET</button>

            </form>


            <br><br>


            <form action="/student" method="POST">

                <label>User Name:</label>
                <input type="text" name="name" required>
                <br><br>

                <label>Branch:</label>
                <input type="text" name="branch" required>
                <br><br>

                <label>Semester:</label>
                <input type="text" name="semester" required>
                <br><br>

                <button type="submit">Submit using POST</button>

            </form>

        </body>
        </html>
    `);
});


// GET method
app.get("/student", (req, res) => {

    const name = req.query.name;
    const branch = req.query.branch;
    const semester = req.query.semester;

    res.send(`
        <html>
        <body>

            <h2>Student Information</h2>

            <p><b>Name: ${name}</b></p>

            <p><u>Branch: ${branch}</u></p>

            <p>Semester: ${semester}</p>

            <br>

            <a href="/">Go Back</a>

        </body>
        </html>
    `);
});


// POST method
app.post("/student", (req, res) => {

    const name = req.body.name;
    const branch = req.body.branch;
    const semester = req.body.semester;

    res.send(`
        <html>
        <body>

            <h2>Student Information</h2>

            <p><b>Name: ${name}</b></p>

            <p><u>Branch: ${branch}</u></p>

            <p>Semester: ${semester}</p>

            <br>

            <a href="/">Go Back</a>

        </body>
        </html>
    `);
});


// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});