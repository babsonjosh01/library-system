 School Library Management API


This is a RESTful API built with **Node.js, Express, and MongoDB** for managing a school library system.

It supports:

 Authors
 Books
 Students
 Library Attendants
Book Borrowing & Returns



 Node.js
 Express.js
 MongoDB (Mongoose)
 dotenv

---

Project Structure (MVC)

```
library-system/
│
├── config/
│   └── database.js
│
├── models/
│   ├── author.js
│   ├── book.js
│   ├── student.js
│   └── libraryAttendant.js
│
├── controllers/
│   ├── authorController.js
│   ├── bookController.js
│   ├── studentController.js
│   └── libraryAttendantController.js
│
├── routes/
│   ├── author.js
│   ├── book.js
│   ├── student.js
│   └── libraryAttendant.js
│
├── .env
├── server.js
└── package.json
```

---

 Setup Instructions





---

2. Install Dependencies

```
npm install
```

---

3. Configure Environment Variables

Create a `.env` file:

```
PORT=8080
MONGO_URI=your_mongodb_connection_string
```


```

---

### 4. Run the Server

```
npm run dev
```
```

---

 Server should display:

```
Mongo DB is connected
Server is running
```

---

 API Documentation

 Authors

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | /authors     | Create author     |
| GET    | /authors     | Get all authors   |
| GET    | /authors/:id | Get single author |
| PUT    | /authors/:id | Update author     |
| DELETE | /authors/:id | Delete author     |

---

 Students

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| POST   | /students     | Create student   |
| GET    | /students     | Get all students |
| GET    | /students/:id | Get one student  |

---
 Library Attendants

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| POST   | /libraryAttendants | Create attendant   |
| GET    | /libraryAttendants | Get all attendants |

---

 Books

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| POST   | /books     | Create book   |
| GET    | /books     | Get all books |
| GET    | /books/:id | Get one book  |
| PUT    | /books/:id | Update book   |
| DELETE | /books/:id | Delete book   |

---

Borrow & Return System

 Borrow Book

**Endpoint:**

```
POST /books/:id/borrow
```

**Request Body:**

```json
{
  "studentId": "student_id_here",
  "attendantId": "attendant_id_here",
  "returnDate": "2026-04-01"
}
```

**Rules:**

* Book must be `"IN"`
* Updates:

  * status → `"OUT"`
  * borrowedBy
  * issuedBy
  * returnDate

---

 Return Book

**Endpoint:**

```
POST /books/:id/return
```

**Rules:**

* Book must be `"OUT"`
* Resets:

  * status → `"IN"`
  * borrowedBy → null
  * issuedBy → null
  * returnDate → null

---

 Special Behavior

When fetching a book:

If status = `"OUT"`, response includes:

* Author details
* Student details
* Library Attendant details
* Return date

Implemented using:

```
.populate("authors")
.populate("borrowedBy")
.populate("issuedBy")
```

---

 Sample Request (Postman)

 Create Student

```
POST /students
```

```json
{
  "name": "Tunde Joshua",
  "email": "tundejoshua@gmail.com",
  "studentId": "STU001"
}
```

---

 Common Errors

| Error                   | Cause                            |
| ----------------------- | -------------------------------- |
| ECONNREFUSED            | Server not running or wrong port |
| Cast to ObjectId failed | Invalid ID                       |
| duplicate key error     | Unique field already exists      |
| Book already borrowed   | status = OUT                     |

---



---
 Author

Ayooluwa Joshua Babatunde

---


---
