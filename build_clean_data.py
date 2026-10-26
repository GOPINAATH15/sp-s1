import json
import re
import sys
sys.path.append("extracted_data")
from exact_java_from_pdf import EXACT_JAVA

java_titles = {
    "1": ("PACKAGE EMPLOYEE", "Java"),
    "2": ("POLYMORPHISM, INHERITANCE AND INNER CLASSES", "Java"),
    "3": ("CUSTOM SHAPES", "Java"),
    "4": ("MOUSE EVENT", "Java"),
    "5": ("STUDENT INFO", "Java"),
    "6": ("TREE VIEWER", "Java"),
    "7": ("BADWORDS", "Java"),
    "8": ("TEMPERATURE_CONVERTER", "Java"),
    "9": ("STUDENT_FX", "Java"),
    "10": ("IMAGE_VIEWER", "Java"),
    "11": ("2D_SHAPES", "Java"),
    "12": ("TRANSFORMATIONS", "Java")
}

practicals = []

# Add 12 Java programs
for i in range(1, 13):
    str_i = str(i)
    num_str = f"{i:02d}"
    title, cat = java_titles[str_i]
    raw_code = EXACT_JAVA[str_i]["code"]
    
    # Check if there are multiple classes in Program 1
    if i == 1:
        files = [
            {
                "name": "Employee.java",
                "lang": "java",
                "code": """package employee; 
public class Employee { 
    private int empNo; 
    private double basicPay; 
    public Employee(int empNo) { 
        this.empNo = empNo; 
    } 
    public void setBasicPay(double pay) { 
        this.basicPay = pay; 
    } 
    public void display() { 
        System.out.println("Employee Number: " + empNo); 
        System.out.println("Basic Pay: " + basicPay); 
    } 
}"""
            },
            {
                "name": "MainProgram.java",
                "lang": "java",
                "code": """package employee; 
import employee.Employee; 
public class MainProgram { 
    public static void main(String[] args) { 
        Employee emp1 = new Employee(101); 
        emp1.setBasicPay(50000); 
        emp1.setBasicPay(50000.75); 
        emp1.display(); 
    } 
}"""
            }
        ]
    else:
        # Determine main class name or filename
        first_public = re.search(r"public class (\w+)", raw_code)
        filename = f"{first_public.group(1)}.java" if first_public else f"Program{num_str}.java"
        files = [
            {
                "name": filename,
                "lang": "java",
                "code": raw_code.strip()
            }
        ]
    
    practicals.append({
        "id": f"java-{num_str}",
        "subject": "java",
        "category": "Java Lab",
        "number": num_str,
        "title": title,
        "description": f"Program {i}: {title} from Java lab practical record.",
        "files": files
    })

# Add 10 ADBMS programs directly from DBMS PDF
adbms_programs = [
    {
        "id": "adbms-01",
        "subject": "adbms",
        "category": "MySQL",
        "number": "01",
        "title": "BANKING SYSTEM",
        "description": "Program 1: Banking system - Primary Key, Unique Key creation, Unique key constraint violation, NULL value in Unique key, Foreign Key creation, Joining function.",
        "files": [
            {
                "name": "banking_system.sql",
                "lang": "sql",
                "code": """-- Primary Key, Unique Key creation
create table bank(accno int primary key, cust_name varchar(15), email varchar(25) unique, phonenumber varchar(15) unique);
desc bank;

insert into bank values(17071, 'velan', 'velan@gmail.com', '9788934500');
insert into bank values(17072, 'anu', 'anupriya@gmail.com', '6734517000');
insert into bank values(17073, 'shanthi', 'santhi21@gmail.com', '7890012345');

-- Unique key constraint Violation
insert into bank values(17074, 'arun', 'anupriya@gmail.com', '9894238341');
-- ERROR 1062 (23000): Duplicate entry 'anupriya@gmail.com' for key 'bank.email'

-- Inserting NULL value in Unique key field
insert into bank values(17074, 'arun', NULL, '9894238341');
insert into bank values(17075, 'padma', 'padma@gmail.com', null);
insert into bank values(17076, 'preethi', null, null);

select * from bank;

-- Foreign Key creation
create table loandetails(loanid int primary key, accno int, loanamt int, foreign key (accno) references bank(accno));
desc loandetails;

insert into loandetails values(101, 17071, 50000);
insert into loandetails values(102, 17072, 75000);
insert into loandetails values(103, 17073, 100000);

-- Combining two table data using Joining function
select b.accno, b.cust_name, l.loanid, l.loanamt from bank b inner join loandetails as l on b.accno=l.accno;"""
            }
        ]
    },
    {
        "id": "adbms-02",
        "subject": "adbms",
        "category": "MySQL",
        "number": "02",
        "title": "ONLINE RESERVATION SYSTEM",
        "description": "Program 2: Online Reservation System - Table creation, ENUM data type, CHECK integrity constraint, and Foreign Key constraints.",
        "files": [
            {
                "name": "reservation_system.sql",
                "lang": "sql",
                "code": """-- Table 1: Customer
create table customer(c_id int primary key, c_name varchar(10), email varchar(25), phonenumber varchar(10));
desc customer;

insert into customer values(1071, 'sethu', 'sethu@gmail.com', '7634529800');
insert into customer values(1072, 'ram', 'ramesh@gmail.com', '9842109876');
insert into customer values(1073, 'priya', 'priya@gmail.com', '8901234567');
select * from customer;

-- Table 2: Vehicle
create table vehicle(vid int primary key, v_type enum('car', 'bus', 'bike', 'van'), v_name varchar(15), fare int);
desc vehicle;

insert into vehicle values(1001, 'car', 'swift', 15);
insert into vehicle values(1002, 'bus', 'volvo', 30);
insert into vehicle values(1003, 'van', 'omni', 20);

-- Value Insertion and enum data type setting data violation
-- insert into vehicle values(1004, 'auto', 'bajaj', 10);
-- ERROR 1265 (01000): Data truncated for column 'v_type' at row 1

select * from vehicle;

-- Table 3: reserve with check integrity
create table reserve(r_id int primary key, c_id int, vid int, start_datetime datetime check(start_datetime >= '2025-10-25'), end_datetime datetime, place varchar(15), foreign key(c_id) references customer(c_id), foreign key(vid) references vehicle(vid));
desc reserve;

-- Check constraint violation test
-- insert into reserve values(1, 1071, 1001, '2025-10-20 10:00:00', '2025-10-22 10:00:00', 'salem');
-- ERROR 3819 (HY000): Check constraint 'reserve_chk_1' is violated.

insert into reserve values(1, 1071, 1001, '2025-10-26 10:00:00', '2025-10-27 18:00:00', 'salem');
insert into reserve values(2, 1072, 1002, '2025-10-28 06:00:00', '2025-10-29 20:00:00', 'chennai');
select * from reserve;"""
            }
        ]
    },
    {
        "id": "adbms-03",
        "subject": "adbms",
        "category": "MySQL",
        "number": "03",
        "title": "PERSONAL INFORMATION",
        "description": "Program 3: Personal Information - LIKE Operator, Group By with Aggregate functions, Order by and Limit, Having Clause.",
        "files": [
            {
                "name": "personal_information.sql",
                "lang": "sql",
                "code": """create table personal_data(name varchar(20), email varchar(30), university varchar(25));
insert into personal_data values('sumathi', 'sumathi15@gmail.com', 'bharathiyar'), ('ravi', 'ravi23@gmail.com', 'bharathidasan'), ('keerthi', 'keerthi@gmail.com', 'bharathiar');

-- Using LIKE Operator
select * from personal_data where name like 's%';
select * from personal_data where name like '%i';
select * from personal_data where name like '%thi%';

-- EMP Table for Group by with Aggregate functions
create table emp(empid int, empname varchar(20), dept varchar(15), salary int);
insert into emp values(1, 'arun', 'sales', 20000), (2, 'kumar', 'sales', 25000), (3, 'anitha', 'marketing', 30000), (4, 'banu', 'marketing', 35000), (5, 'chandran', 'admin', 22000);

-- Group by with Aggregate functions
select dept, count(*), sum(salary), avg(salary), max(salary), min(salary) from emp group by dept;

-- Order by and Limit
select * from emp order by salary desc;
select * from emp order by salary desc limit 2;

-- Having Clause in EMP Table
select dept, sum(salary) from emp group by dept having sum(salary) > 50000;"""
            }
        ]
    },
    {
        "id": "adbms-04",
        "subject": "adbms",
        "category": "MySQL",
        "number": "04",
        "title": "STUDENT MARK PROCESSING SYSTEM",
        "description": "Program 4: Student mark processing system - Table creation, Insert Values, Update total, percentage, Logical Operator using Where Clause.",
        "files": [
            {
                "name": "student_mark_processing.sql",
                "lang": "sql",
                "code": """-- Table creation
create table studentdata(rollno varchar(10) primary key, studentname varchar(20), adbms int, cn int, os int, total int, percentage float, result varchar(10));
desc studentdata;

-- Insert Values to Table
insert into studentdata(rollno, studentname, adbms, cn, os) values('25mca01', 'arun', 85, 78, 92);
insert into studentdata(rollno, studentname, adbms, cn, os) values('25mca02', 'chitra', 65, 57, 72);
insert into studentdata(rollno, studentname, adbms, cn, os) values('25mca03', 'deepak', 90, 88, 95);
insert into studentdata(rollno, studentname, adbms, cn, os) values('25mca04', 'gokul', 42, 38, 50);

-- Update total, percentage column
update studentdata set total = adbms + cn + os;
update studentdata set percentage = total / 3;
update studentdata set result = 'pass' where adbms >= 50 and cn >= 50 and os >= 50;
update studentdata set result = 'fail' where adbms < 50 or cn < 50 or os < 50;

select * from studentdata;

-- Logical Operator using Where Clause
select rollno, studentname from studentdata where total <> 302;
select rollno, studentname, total from studentdata where total = 255;
select rollno, studentname from studentdata where adbms >= 80 and os >= 80;
select rollno, studentname from studentdata where adbms < 50 or cn < 50;"""
            }
        ]
    },
    {
        "id": "adbms-05",
        "subject": "adbms",
        "category": "MongoDB",
        "number": "05",
        "title": "E-COMMERCE PRODUCT CATALOG SYSTEM",
        "description": "Program 5: Design an E-Commerce product catalog system using MongoDB as a storage engine and insert values.",
        "files": [
            {
                "name": "ecommerce_catalog.js",
                "lang": "javascript",
                "code": """// Step 1: Open mongoshell:
// Step 2: show databases; and shift to newly created database named as e_commerce by using query use e_commerce.
show databases;
use e_commerce;

// Step 3: Insert values to the new collection name as product and view the created collections
db.product.insertOne({
    name: "Mouse",
    category: "Electronics",
    price: 25,
    stock: 50
});

db.product.insertMany([
    { name: "Keyboard", category: "Electronics", price: 75, stock: 150 },
    { name: "USB Cable", category: "Accessories", price: 10, stock: 200 }
]);

// Step 4: View the data in Table view / Collections
show collections;

// Step 5: View data in mongoshell
db.product.find().pretty();"""
            }
        ]
    },
    {
        "id": "adbms-06",
        "subject": "adbms",
        "category": "MongoDB",
        "number": "06",
        "title": "CURD OPERATIONS",
        "description": "Program 6: Perform basic CURD operations (Create, Update, Read and Delete) functions for the product catalog.",
        "files": [
            {
                "name": "crud_operations.js",
                "lang": "javascript",
                "code": """// Step 1: Create collection collegeshop in database e_shopping
use e_shopping;
db.createCollection("collegeshop");

// Step 2: Insert one document in collegeshop
db.collegeshop.insertOne({ item: "notebook", qty: 50 });

// Step 3: Insert multiple documents
db.collegeshop.insertMany([
    { item: "ballpointpen", qty: 120 },
    { item: "inkpen", qty: 60 }
]);

// Step 4: Read documents from collection using findOne()
db.collegeshop.findOne({ item: "ballpointpen" });

// Find documents where qty is greater than 30 and less than 100
db.collegeshop.find({ qty: { $gt: 30, $lt: 100 } });
db.collegeshop.find({ qty: { $gte: 60 } });

// Step 5: To Update one document from the collection collegeshop
db.collegeshop.updateOne(
    { item: "notebook" },
    { $set: { status: "available" } }
);

// Update many documents
db.collegeshop.updateMany(
    { category: "writingstuff" },
    { $set: { status: "available" } }
);

// View updated data
db.collegeshop.find();

// Step 7: replaceOne document with a new one
db.collegeshop.replaceOne(
    { item: "inkpen" },
    { item: "blueinkpen", qty: 70, category: "writingstuff", status: "available" }
);

// Deleting a Single Document:
db.collegeshop.deleteOne({ item: "notebook" });

// Deleting Many Documents:
db.collegeshop.deleteMany({ status: "available" });

// View final documents
db.collegeshop.find();"""
            }
        ]
    },
    {
        "id": "adbms-07",
        "subject": "adbms",
        "category": "MongoDB",
        "number": "07",
        "title": "BUILT-IN FUNCTIONS",
        "description": "Program 7: Built-in function in MongoDB - $add, $multiply, $divide, $match, $group, $count, $project.",
        "files": [
            {
                "name": "builtin_functions.js",
                "lang": "javascript",
                "code": """use e_shopping;

// Step 1: Insert student marks data
db.s_mark.insertOne({ _id: 1, sname: "Arun", java: 76, cn: 73, os: 98 });
db.s_mark.insertMany([
    { _id: 2, sname: "banu", java: 67, cn: 56, os: 76 },
    { _id: 3, sname: "chitra", java: 89, cn: 67, os: 54 }
]);

// Step 3: Aggregate function $add $multiply $divide
db.s_mark.aggregate([
    {
        $project: {
            sname: 1,
            totalmark: { $add: ["$java", "$cn", "$os"] }
        }
    }
]);

// Step 4: Update document with field edu_status
db.s_mark.updateOne({ _id: 1 }, { $set: { edu_status: "regular" } });
db.s_mark.updateOne({ _id: 2 }, { $set: { edu_status: "intern" } });
db.s_mark.updateOne({ _id: 3 }, { $set: { edu_status: "intern" } });
db.s_mark.find();

// Step 6: Aggregate function $match - Filters documents based on specified condition
db.s_mark.aggregate([
    { $match: { edu_status: "intern" } }
]);

// Step 8: Without aggregate function document filtered using find()
db.s_mark.find({ edu_status: "intern" });

// Step 9: Aggregate function $group
db.s_mark.aggregate([
    {
        $group: {
            _id: "$edu_status",
            total: { $sum: 1 }
        }
    }
]);

// Step 10: $count
db.s_mark.aggregate([
    { $match: { edu_status: "intern" } },
    { $count: "intern_count" }
]);

// Step 11: Including and Excluding fields using $project and $limit
db.s_mark.aggregate([
    {
        $project: {
            _id: 0,
            sname: 1,
            java: 1
        }
    },
    { $limit: 2 }
]);"""
            }
        ]
    },
    {
        "id": "adbms-08",
        "subject": "adbms",
        "category": "MongoDB",
        "number": "08",
        "title": "SORTING, INDEXING & FILTERING",
        "description": "Program 8: Sorting, filtering and Index in MongoDB.",
        "files": [
            {
                "name": "sorting_indexing.js",
                "lang": "javascript",
                "code": """use e_commerce;

// Step 1: Filter documents
db.product.find({ category: "Electronics", price: { $lt: 100 } });

// Step 2: Sort by price ascending (1)
db.product.find().sort({ price: 1 });

// Step 3: Sort by price descending (-1)
db.product.find().sort({ price: -1 });

// Step 5: Filter and sort the document based on category, price and name
db.product.find({ category: "Electronics" }).sort({ price: 1, name: -1 });

// Creating Index
db.product.createIndex({ category: 1 });

// Compound Index
db.product.createIndex({ category: 1, price: -1 });

// View Indexes
db.product.getIndexes();"""
            }
        ]
    },
    {
        "id": "adbms-09",
        "subject": "adbms",
        "category": "MongoDB",
        "number": "09",
        "title": "CREATE A COLLECTION & FIND DOCUMENT",
        "description": "Program 9: Create a Collection & Find Document - filtering by condition, finding duplicates by firstname, finding by email and id.",
        "files": [
            {
                "name": "collection_find.js",
                "lang": "javascript",
                "code": """use college;

// Insert student documents
db.student.insertMany([
    { firstname: "adhi", lastname: "ravi", age: 16, email: "adhiravi@gmail.com" },
    { firstname: "balu", lastname: "velu", age: 15, email: "baluv@gmail.com" },
    { firstname: "adhi", lastname: "kumar", age: 18, email: "adhikumar@gmail.com" }
]);

// Find documents where age > 12
db.student.find({ age: { $gt: 12 } });

// Find a list of all users with the same firstname using aggregate $group
db.student.aggregate([
    {
        $group: {
            _id: "$firstname",
            count: { $sum: 1 }
        }
    },
    {
        $match: {
            count: { $gt: 1 }
        }
    }
]);

// Find a user by email
db.student.findOne({ email: "adhiravi@gmail.com" });

// Find a document by id
db.student.findOne({ firstname: "balu" });"""
            }
        ]
    },
    {
        "id": "adbms-10",
        "subject": "adbms",
        "category": "MongoDB",
        "number": "10",
        "title": "STOCK EXCHANGE",
        "description": "Program 10: Use real time data set of Stock exchange by importing CSV and query data.",
        "files": [
            {
                "name": "stock_exchange.js",
                "lang": "javascript",
                "code": """// Command line Import method:
// mongoimport --db sample --collection stock --type csv --headerline --file stocks.csv

use sample;

// View imported data
db.stock.find().limit(5);

// Step 6: Find all the stocks with negative growth
db.stock.find({ growth: { $lt: 0 } });

// Find stocks with positive growth sorted descending
db.stock.find({ growth: { $gt: 0 } }).sort({ growth: -1 });"""
            }
        ]
    }
]

practicals.extend(adbms_programs)

# Write to data.js
js_content = "/**\n * Complete Practical Codes from Lab Records\n */\nconst PRACTICALS_DATA = " + json.dumps(practicals, indent=2) + ";\n"

with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated data.js with {len(practicals)} pure programs!")
