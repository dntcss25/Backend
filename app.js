const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const UserRouter = require('./routes/students');
app.use('/users', UserRouter);

const UserRouter1 = require('./routes/instructors');
app.use('/usersInstructors', UserRouter1);

const UserRouter2 = require('./routes/student_info');
app.use('/usersStudentInfo', UserRouter2);

app.listen(5000, () => console.log('Server is running at http://127.0.0.1:5000'));
